import { createHash, createHmac, timingSafeEqual } from 'node:crypto'
import config from './settings.json'

export const REQUEST_PREFIX = 'udemy-caption-kit:request:'

export interface PrivateStore {
  get<T extends NonNullable<unknown>>(key: string): Promise<T | null>
  set(key: string, value: NonNullable<unknown>): Promise<void>
}

export interface CaptionRequest {
  recordType: 'caption-platform-request'
  email: string
  platform: string
  platformOther: string
  requestType: string
  locale: string
  source: string
  consentAt: string
  createdAt: string
  active: boolean
}

export type ServiceContext = {
  getStore: () => Promise<PrivateStore>
  secret: string | undefined
}

const json = (body: unknown, status = 200) =>
  Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
  })

const digest = (value: string) => createHash('sha256').update(value).digest('hex')
const sign = (id: string, secret: string) =>
  createHmac('sha256', secret).update(`caption-kit-unsubscribe:${id}`).digest('hex')

// The link stays valid across duplicate signups. Only the request hash and its
// purpose-scoped signature go into the URL; the email stays on the server.
export const captionManageToken = (id: string, secret: string) => `${id}.${sign(id, secret)}`

function tokenId(token: unknown, secret: string): string | null {
  if (typeof token !== 'string' || !/^[a-f0-9]{64}\.[a-f0-9]{64}$/.test(token)) return null
  const [id, signature] = token.split('.')
  return timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(sign(id, secret), 'hex'))
    ? id
    : null
}

// Best-effort abuse control per running server instance, consistent with this
// backend's existing limiter. Signup records themselves persist in PostgreSQL.
const limits = new Map<string, { count: number; expires: number }>()
function allowed(request: Request) {
  const now = Date.now()
  for (const [key, entry] of limits) if (entry.expires <= now) limits.delete(key)
  const ip =
    request.headers.get('x-nf-client-connection-ip') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    'unknown'
  const key = digest(ip.trim())
  const entry = limits.get(key) || { count: 0, expires: now + 60_000 }
  entry.count += 1
  limits.set(key, entry)
  return entry.count <= 6
}

export function verifiedCheckout() {
  const c = config.checkout
  if (!c.verified || !c.fileBindingVerified || !c.fileReadbackVerified || !c.whopProductId)
    return null
  const url = new URL(c.url)
  return url.protocol === 'https:' &&
    url.hostname === 'whop.com' &&
    url.pathname.replace(/\/$/, '') === `/checkout/${c.whopVariantId}` &&
    !url.username &&
    !url.password
    ? url.href
    : null
}

export async function handleCaptionApi(request: Request, action: string, context: ServiceContext) {
  if (action === 'config' && request.method === 'GET')
    return json({
      price: config.price,
      currency: config.currency,
      checkoutReady: Boolean(verifiedCheckout()),
      whatsappDigits: config.whatsappDigits,
      whatsappDisplay: config.whatsappDisplay,
      locales: config.locales,
    })
  if (!['waitlist', 'unsubscribe'].includes(action)) return json({ error: 'not_found' }, 404)
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)
  const origin = request.headers.get('origin')
  // The public www site forwards this path to this backend. Allow that exact
  // approved sales-page origin as well as direct same-origin requests.
  const salesOrigin = new URL(config.plannedCanonicalPath).origin
  if (origin && origin !== new URL(request.url).origin && origin !== salesOrigin)
    return json({ error: 'origin_not_allowed' }, 403)
  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return json({ error: 'json_required' }, 415)
  }
  const reader = request.body?.getReader()
  let bytes = 0
  const chunks: Uint8Array[] = []
  if (reader) {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      bytes += value.byteLength
      if (bytes > 4096) {
        await reader.cancel()
        return json({ error: 'too_large' }, 413)
      }
      chunks.push(value)
    }
  }
  let input: Record<string, unknown>
  try {
    input = JSON.parse(Buffer.concat(chunks).toString('utf8'))
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('invalid')
  } catch {
    return json({ error: 'invalid_json' }, 400)
  }
  if (!context.secret) return json({ error: 'temporarily_unavailable' }, 503)

  if (action === 'unsubscribe') {
    const id = tokenId(input.token, context.secret)
    if (!id) return json({ error: 'invalid_token' }, 400)
    const store = await context.getStore()
    const key = REQUEST_PREFIX + id
    const row = await store.get<CaptionRequest>(key)
    if (!row?.active || row.recordType !== 'caption-platform-request') {
      return json({ error: 'inactive_or_unknown' }, 404)
    }
    await store.set(key, { ...row, active: false })
    return json({ ok: true })
  }

  const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : ''
  const platform = input.platform
  const requestType = input.requestType
  const other =
    platform === 'Other' && typeof input.platformOther === 'string'
      ? input.platformOther.trim()
      : ''
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    typeof platform !== 'string' ||
    !['Udemy', 'Hotmart', 'Domestika', 'Whop', 'Other'].includes(platform) ||
    typeof requestType !== 'string' ||
    !['guide', 'tool', 'both'].includes(requestType) ||
    input.consent !== true ||
    input.nickname ||
    (platform === 'Other' && (!other || other.length > 160))
  ) {
    return json({ error: 'invalid_input' }, 400)
  }
  if (!allowed(request)) return json({ error: 'rate_limited' }, 429)
  const id = digest(JSON.stringify([email, platform, other, requestType]))
  const key = REQUEST_PREFIX + id
  const store = await context.getStore()
  const previous = await store.get<CaptionRequest>(key)
  const now = new Date().toISOString()
  await store.set(key, {
    recordType: 'caption-platform-request',
    email,
    platform,
    platformOther: other,
    requestType,
    locale:
      typeof input.locale === 'string' && config.locales.includes(input.locale)
        ? input.locale
        : 'en',
    source:
      typeof input.source === 'string'
        ? input.source.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 60)
        : 'caption-page',
    consentAt: now,
    createdAt: previous?.createdAt || now,
    active: true,
  } satisfies CaptionRequest)
  return json({ ok: true, manageToken: captionManageToken(id, context.secret) }, 201)
}

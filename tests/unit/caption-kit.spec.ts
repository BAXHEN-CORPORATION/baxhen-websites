// @vitest-environment node
import { describe, it, expect } from 'vitest'
import {
  handleCaptionApi,
  REQUEST_PREFIX,
  verifiedCheckout,
  type PrivateStore,
} from '@/features/caption-kit/service'

function fixture() {
  const values = new Map<string, NonNullable<unknown>>()
  const store: PrivateStore = {
    async get<T extends NonNullable<unknown>>(key: string) {
      return (values.get(key) as T) || null
    },
    async set(key, value) {
      values.set(key, value)
    },
  }
  const context = { getStore: async () => store, secret: 'synthetic-test-secret-only' }
  return {
    values,
    call: (body: unknown, action = 'waitlist', ip = crypto.randomUUID()) =>
      handleCaptionApi(
        new Request(`https://baxhen.com/udemy-caption-kit/api/${action}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Origin: 'https://baxhen.com',
            'x-real-ip': ip,
          },
          body: JSON.stringify(body),
        }),
        action,
        context,
      ),
    context,
  }
}
const data = {
  email: 'reader@example.test',
  platform: 'Other',
  platformOther: 'Example Learning',
  requestType: 'both',
  locale: 'en',
  consent: true,
}

describe('Caption Kit buyer path', () => {
  it('uses the exact USD47 one-time checkout', () => {
    expect(verifiedCheckout()).toBe('https://whop.com/checkout/plan_Kv6WsO8Zi6LOo')
  })
  it('persists one request per preference, keeps a stable manage link and deactivates it explicitly', async () => {
    const f = fixture()
    const first = await f.call(data)
    expect(first.status).toBe(201)
    const { manageToken } = await first.json()
    const again = await f.call({ ...data, email: ' READER@EXAMPLE.TEST ' })
    expect((await again.json()).manageToken).toBe(manageToken)
    expect(f.values.size).toBe(1)
    expect([...f.values.keys()][0]).toMatch(new RegExp('^' + REQUEST_PREFIX))
    expect((await f.call({ token: manageToken }, 'unsubscribe')).status).toBe(200)
    expect((await f.call({ token: manageToken }, 'unsubscribe')).status).toBe(404)
    expect((await f.call({ token: manageToken.slice(0, -1) + 'z' }, 'unsubscribe')).status).toBe(
      400,
    )
    // A later explicit signup reactivates the same preference without a duplicate.
    expect((await f.call(data)).status).toBe(201)
    expect(f.values.size).toBe(1)
  })
  it('rejects absent consent, invalid preferences and oversized input without storing anything', async () => {
    const f = fixture()
    for (const patch of [
      { consent: false },
      { email: 'invalid' },
      { platformOther: '' },
      { requestType: 'subscription' },
      { nickname: 'bot' },
    ]) {
      expect((await f.call({ ...data, ...patch })).status).toBe(400)
    }
    expect((await f.call({ ...data, platformOther: 'x'.repeat(5000) })).status).toBe(413)
    expect(f.values.size).toBe(0)
  })
  it('blocks cross-origin writes, GET unsubscribe and rapid repeated signup', async () => {
    const f = fixture()
    const request = new Request('https://baxhen.com/udemy-caption-kit/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'https://elsewhere.test' },
      body: JSON.stringify(data),
    })
    expect((await handleCaptionApi(request, 'waitlist', f.context)).status).toBe(403)
    expect(
      (
        await handleCaptionApi(
          new Request('https://baxhen.com/udemy-caption-kit/api/unsubscribe'),
          'unsubscribe',
          f.context,
        )
      ).status,
    ).toBe(405)
    const ip = crypto.randomUUID()
    for (let i = 0; i < 6; i++) expect((await f.call(data, 'waitlist', ip)).status).toBe(201)
    expect((await f.call(data, 'waitlist', ip)).status).toBe(429)
  })
})

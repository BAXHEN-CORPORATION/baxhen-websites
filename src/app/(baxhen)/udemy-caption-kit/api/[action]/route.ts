import {
  captionManageToken,
  handleCaptionApi,
  REQUEST_PREFIX,
} from '@/features/caption-kit/service'
import { getCaptionStore } from '@/features/caption-kit/payload-store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Context = { params: Promise<{ action: string }> }

export async function GET(request: Request, { params }: Context) {
  const { action } = await params
  if (action === 'requests') {
    const [{ getPayload }, { default: config }] = await Promise.all([
      import('payload'),
      import('@payload-config'),
    ])
    const payload = await getPayload({ config })
    const { user } = await payload.auth({ headers: request.headers })
    if (
      !user ||
      user.active === false ||
      !user.roles?.some((role) => ['super-admin', 'baxhen-admin'].includes(role))
    ) {
      return Response.json(
        { error: 'forbidden' },
        { status: 403, headers: { 'Cache-Control': 'no-store' } },
      )
    }
    const rawPage = Number(new URL(request.url).searchParams.get('page') || 1)
    const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1
    // An explicitly authenticated platform admin may read this namespace only.
    const result = await payload.find({
      collection: 'payload-kv',
      overrideAccess: true,
      depth: 0,
      limit: 100,
      page,
      where: { key: { contains: REQUEST_PREFIX } },
      select: { key: true, data: true },
    })
    return Response.json(
      {
        requests: result.docs
          .filter((row) => row.key.startsWith(REQUEST_PREFIX))
          .map((row) => {
            if (!row.data || typeof row.data !== 'object' || Array.isArray(row.data)) return null
            const id = row.key.slice(REQUEST_PREFIX.length)
            const leaveUrl = new URL('/udemy-caption-kit/unsubscribe', request.url)
            leaveUrl.searchParams.set('token', captionManageToken(id, process.env.PAYLOAD_SECRET!))
            return { ...row.data, leaveUrl: leaveUrl.href }
          })
          .filter(Boolean),
        total: result.totalDocs,
        page: result.page,
        pages: result.totalPages,
      },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  }
  return handleCaptionApi(request, action, {
    getStore: getCaptionStore,
    secret: process.env.PAYLOAD_SECRET,
  })
}

export async function POST(request: Request, { params }: Context) {
  const { action } = await params
  try {
    return await handleCaptionApi(request, action, {
      getStore: getCaptionStore,
      secret: process.env.PAYLOAD_SECRET,
    })
  } catch {
    // Do not log request bodies, email addresses, manage links or database secrets.
    return Response.json(
      { error: 'temporarily_unavailable' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}

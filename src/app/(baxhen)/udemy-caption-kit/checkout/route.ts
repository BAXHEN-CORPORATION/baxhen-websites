import { verifiedCheckout } from '@/features/caption-kit/service'

export function GET() {
  const destination = verifiedCheckout()
  if (!destination) return Response.json({ error: 'checkout_unavailable' }, { status: 503 })
  return new Response(null, {
    status: 303,
    headers: { Location: destination, 'Cache-Control': 'no-store' },
  })
}

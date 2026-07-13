import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PLATFORM_HOSTS = (process.env.BAXHEN_PLATFORM_HOSTS || 'localhost:3000')
  .split(',')
  .map((h) => h.trim().toLowerCase())

const PLATFORM_PATHS = ['/admin', '/api', '/_next', '/favicon.ico', '/next', '/website-template-OG.webp', '/website', '/assets']

/**
 * Normalize a hostname:
 * - Lowercase
 * - Remove port (for matching, but keep for rewrite)
 */
const normalizeHostname = (hostname: string): string => {
  return hostname.toLowerCase().trim()
}

/**
 * Check if a path is a platform route (should not be rewritten to client sites).
 */
const isPlatformPath = (pathname: string): boolean => {
  return PLATFORM_PATHS.some((prefix) => pathname.startsWith(prefix))
}

/**
 * Proxy middleware for hostname-based site routing.
 *
 * Flow:
 * 1. Read and normalize the request hostname
 * 2. If it's a platform hostname or path → pass through
 * 3. Otherwise → rewrite to internal site route
 */
export default function proxy(request: NextRequest): NextResponse | undefined {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const normalized = normalizeHostname(hostname)
  const hostnameWithoutPort = normalized.split(':')[0]

  // Is it a platform hostname?
  const isPlatformHost = PLATFORM_HOSTS.some(
    (h) => h === normalized || h === hostnameWithoutPort,
  )

  // Is it a platform path?
  if (isPlatformPath(url.pathname)) {
    return NextResponse.next()
  }

  // Platform hostname accessing non-platform path → pass through
  if (isPlatformHost) {
    return NextResponse.next()
  }

  // Client website → rewrite to internal site route
  // The site slug is derived from the hostname by the website resolution service
  // We pass the hostname as a header so the site route can resolve it
  const siteSlug = hostnameWithoutPort.replace(/\./g, '-')

  // Rewrite to internal route: /website/:siteSlug/:locale/:path*
  // The website resolution service will validate the hostname and resolve the actual site
  url.pathname = `/website/${siteSlug}/pt${url.pathname}`

  const response = NextResponse.rewrite(url)
  response.headers.set('x-baxhen-hostname', hostname)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - /_next/static (static files)
     * - /_next/image (image optimization)
     * - /api/media (media files served by Payload)
     */
    '/((?!_next/static|_next/image|api/media).*)',
  ],
}

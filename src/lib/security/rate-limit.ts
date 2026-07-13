/**
 * Simple in-memory rate limiter.
 * In production, replace with a distributed solution (Redis, etc.).
 */

const store = new Map<string, { count: number; resetAt: number }>()

interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt: number
}

/**
 * Check if a key has exceeded the rate limit.
 * @param key — unique identifier (e.g., IP + endpoint)
 * @param maxRequests — max requests allowed in the window
 * @param windowMs — time window in milliseconds
 */
export const checkRateLimit = (
  key: string,
  maxRequests: number = 10,
  windowMs: number = 60000,
): RateLimitResult => {
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1, resetAt: now + windowMs }
  }

  entry.count++

  if (entry.count > maxRequests) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt }
  }

  return { allowed: true, remaining: maxRequests - entry.count, resetAt: entry.resetAt }
}

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (now > entry.resetAt) {
      store.delete(key)
    }
  }
}, 300000)

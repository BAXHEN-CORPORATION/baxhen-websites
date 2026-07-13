/**
 * Typed server-side environment validation.
 * Fails with clear message when required variables are missing.
 * Separates public (NEXT_PUBLIC_*) from server-only variables.
 */

// ── Required server vars ──────────────────────────────────────────

const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) {
  throw new Error('Missing required env var: DATABASE_URL')
}

const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET
if (!PAYLOAD_SECRET) {
  throw new Error('Missing required env var: PAYLOAD_SECRET')
}

// ── Optional server vars with defaults ────────────────────────────

const CRON_SECRET = process.env.CRON_SECRET || ''
const PREVIEW_SECRET = process.env.PREVIEW_SECRET || ''

// ── S3 / Supabase Storage ─────────────────────────────────────────

const S3_ENDPOINT = process.env.S3_ENDPOINT || ''
const S3_REGION = process.env.S3_REGION || 'auto'
const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || ''
const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || ''
const S3_PUBLIC_BUCKET = process.env.S3_BUCKET || ''
const S3_PRIVATE_BUCKET = process.env.S3_PRIVATE_BUCKET || process.env.S3_BUCKET || ''
const S3_PUBLIC_BASE_URL = process.env.S3_PUBLIC_BASE_URL || ''

const hasS3Config = Boolean(S3_ENDPOINT && S3_ACCESS_KEY_ID && S3_SECRET_ACCESS_KEY && S3_PUBLIC_BUCKET)

// ── Baxhen platform ───────────────────────────────────────────────

const BAXHEN_PLATFORM_HOSTS = process.env.BAXHEN_PLATFORM_HOSTS || 'localhost:3000'
const BAXHEN_PREVIEW_DOMAIN = process.env.BAXHEN_PREVIEW_DOMAIN || ''
const BAXHEN_DEFAULT_LOCALE = (process.env.BAXHEN_DEFAULT_LOCALE || 'pt') as 'pt' | 'en'
const BAXHEN_SUPPORTED_LOCALES = (process.env.BAXHEN_SUPPORTED_LOCALES || 'pt,en').split(',').map(l => l.trim()) as Array<'pt' | 'en'>

// ── Public variables (safe for client) ────────────────────────────

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

// ── Exports ───────────────────────────────────────────────────────

/** Server-only environment variables. Never import in client components. */
export const serverEnv = {
  DATABASE_URL,
  PAYLOAD_SECRET,
  CRON_SECRET,
  PREVIEW_SECRET,
  S3_ENDPOINT,
  S3_REGION,
  S3_ACCESS_KEY_ID,
  S3_SECRET_ACCESS_KEY,
  S3_PUBLIC_BUCKET,
  S3_PRIVATE_BUCKET,
  S3_PUBLIC_BASE_URL,
  hasS3Config,
  BAXHEN_PLATFORM_HOSTS,
  BAXHEN_PREVIEW_DOMAIN,
  BAXHEN_DEFAULT_LOCALE,
  BAXHEN_SUPPORTED_LOCALES,
} as const

/** Public environment variables safe to use in client components. */
export const publicEnv = {
  NEXT_PUBLIC_SERVER_URL,
} as const

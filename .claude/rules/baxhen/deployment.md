# Baxhen Deployment Rules

## Production Build

```bash
pnpm build:ci  # pnpm build (no migration on CI since dev+prod share DB)
```

## Environment Variables (Netlify)

All env vars must be set in Netlify → Site settings → Environment variables:

```
DATABASE_URL           # Supabase Postgres pooler URL
PAYLOAD_SECRET         # JWT encryption secret
NEXT_PUBLIC_SERVER_URL # MUST include https:// (e.g., https://baxhen-websites.netlify.app)
S3_ENDPOINT, S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET
BAXHEN_PLATFORM_HOSTS  # Comma-separated platform hostnames
```

## getServerSideURL Protocol

`src/utilities/getURL.ts` — `getServerSideURL()` must always return a URL with protocol. If `NEXT_PUBLIC_SERVER_URL` is set without `https://`, prefix it. `metadataBase: new URL(getServerSideURL())` in layouts will crash the build with "Invalid URL" otherwise.

```ts
let url = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
if (!url.startsWith('http')) url = `https://${url}`
return url
```

## Dynamic Server Pages

Pages that use `headers()`, `cookies()`, or `draftMode()` MUST export:

```ts
export const dynamic = 'force-dynamic'
```

Without this, Next.js tries to statically pre-render them during `next build`, which fails because these APIs are only available at request time.

## Proxy Bypass List

`src/proxy.ts` — any static file path served from `public/` MUST be in `PLATFORM_PATHS`:

```ts
const PLATFORM_PATHS = ['/admin', '/api', '/_next', '/favicon.ico', '/next', '/website', '/assets']
```

Missing paths → proxy rewrites static asset requests to `/website/...` → 404 on production.

## Layout Structure

- `app/layout.tsx` — Root layout with `<html><body>` + Providers + AdminBar + metadata
- `(baxhen)/layout.tsx` — pass-through (no html/body)
- `(sites)/layout.tsx` — pass-through (no html/body)
- `(payload)/layout.tsx` — Payload's RootLayout (has own html/body)

Never render `<html>` or `<body>` in both root AND route group layouts.

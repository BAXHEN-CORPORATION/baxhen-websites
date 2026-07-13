# Next.js 16 App Router Conventions

> This project uses Next.js 16 with breaking changes from previous versions.
> Consult `node_modules/next/dist/docs/` for the authoritative reference.

## Route Groups

Three route groups separate concerns:

```
(app)/              ← Deprecated, being phased out
  (payload)/        ← Payload CMS Admin + API routes
    admin/[[...segments]]/
    api/[...slug]/
    api/graphql/
  (baxhen)/         ← Baxhen's own pages (landing page, portfolio, dashboard)
    websites/
    portfolio/
    dashboard/
  (sites)/          ← Client website route group
    _sites/[siteSlug]/[locale]/[[...path]]/
```

## Routing

1. All pages use App Router (`app/` directory), not Pages Router
2. No `pages/` directory — it does not exist in this project
3. Layouts at `layout.tsx`, not-founds at `not-found.tsx`
4. Route handlers at `route.ts`

## Proxy Middleware

`src/proxy.ts` is the middleware that routes incoming hostnames:

```text
Incoming request
    ↓
proxy.ts reads hostname
    ↓
Is it a Baxhen platform hostname? → pass through to (baxhen) or (payload)
    ↓
Is it a recognized client hostname? → rewrite to (sites)/_sites/[siteSlug]/[locale]/[[...path]]
    ↓
Unknown hostname → rewrite to /site-not-found
```

Rules for proxy.ts:
1. Read and normalize the request hostname
2. Allow Baxhen's own routes through unchanged
3. Exclude Payload Admin, API routes, Next.js `/_next/` static assets, `/api/`
4. Rewrite client requests to the internal `(sites)` route
5. Pass the normalized hostname via header or rewrite param — never read `Host` header in downstream code
6. Do not hardcode client hostnames — resolve via domain repository
7. Do not call the database from proxy.ts — use the rewrite chain

## Client/Server

1. **Server Components by default** — all pages and layouts are Server Components
2. Use `"use client"` only when browser interaction or browser APIs are genuinely required
3. The root layout is a Server Component
4. Prefer `router.prefetch()` for known next routes

## Conventions

1. `useRouter` from `next/navigation` (not `next/router`)
2. `next/font` for font loading (used in root layout)
3. Path alias `@/*` maps to `./src/*` (configured in `tsconfig.json`)
4. No `getServerSideProps`, `getStaticProps`, `getInitialProps` — these are Pages Router APIs
5. Use `generateMetadata()` for SEO (page title, description, canonical, OG, robots)

## Next.js 16 Specific

1. Turbopack is the default dev bundler
2. React 19 features available (use(), Server Components by default)
3. `next/experimental/testmode/playwright` for E2E testing
4. Tailwind 4 via `@tailwindcss/postcss` PostCSS plugin

## Website Rendering Flow

```text
(sites)/_sites/[siteSlug]/[locale]/[[...path]]/page.tsx
    ↓
resolveWebsiteRequest() → domain + site + locale + path
    ↓
buildWebsitePage() → page + navigation + settings
    ↓
toPageViewModel() → PageViewModel with section VMs
    ↓
Template selection → BusinessPresenceTemplate or LeadGenerationTemplate
    ↓
Block renderer → maps SectionViewModel discriminator to section component
```

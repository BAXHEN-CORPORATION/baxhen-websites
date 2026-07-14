# Baxhen Troubleshooting

## Dev Server Stuck on DB Prompts

Payload Drizzle shows interactive prompts during `pnpm dev` or `pnpm payload migrate`:

```
Is site_content_id column created or renamed?
❯ + create column
  ~ rename column
```

**Fix**: Kill server, pipe Enter to auto-accept defaults:
```bash
printf '\n\n\n\n\n' | pnpm payload migrate
```

Or for `migrate:create`:
```bash
for i in $(seq 1 30); do printf '\n'; done | pnpm payload migrate:create
```

## File Changes Not Picked Up

Turbopack caches aggressively. Changes to repositories, services, or non-React files often need:

```bash
rm -rf .next && restart dev server
```

## Seed Fails with Multi-Tenant Validation

`ValidationError: The following field is invalid: Tenant`

`overrideAccess: true` does NOT bypass the multi-tenant plugin's field-level validation on the `tenant` field. The seed must run with an authenticated admin user context:

```ts
const adminUser = await payload.find({ collection: 'users', where: { roles: { contains: 'super-admin' } }, limit: 1 })
const req = { user: adminUser.docs[0] }
await payload.create({ collection: 'sites', data: { ... }, req, overrideAccess: true })
```

## Stale payload-types.ts After Collection Changes

When a Payload collection is deleted/renamed:

1. Delete all code referencing the removed collection FIRST
2. Run `pnpm payload:types`
3. Fix remaining type errors
4. Run `pnpm typecheck`

Deleting the collection files before fixing references causes 100+ type errors that are hard to untangle.

## Static Assets 404 (Local or Netlify)

- **Local**: Check proxy matcher — `/assets` must be in `PLATFORM_PATHS`
- **Netlify**: Same, plus verify files are in `public/` and committed to git
- Direct curl test: `curl -I http://localhost:3000/assets/path/file.png`

## Invalid URL Build Error

`Error: Invalid URL: 'baxhen-websites.netlify.app'`

`getServerSideURL()` returned a URL without protocol. Add `if (!url.startsWith('http')) url = 'https://' + url` or set `NEXT_PUBLIC_SERVER_URL` with `https://` prefix on Netlify.

## Double html/body Nesting (Console Warning)

`You are mounting a new html component when a previous one has not first unmounted`

Only happens with Payload admin routes. Root `app/layout.tsx` renders `<html><body>`, and `(payload)/layout.tsx` (Payload's RootLayout) also renders `<html><body>`. For production, this is cosmetic only — admin works despite the warning.

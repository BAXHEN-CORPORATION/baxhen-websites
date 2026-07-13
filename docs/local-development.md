# Local Development

## Setup

```bash
pnpm install
cp .env.example .env.local
# Fill in DATABASE_URL, PAYLOAD_SECRET, S3 credentials
```

## Database

Use Supabase PostgreSQL. The transaction pooler (port 6543) is recommended for serverless.

## Running

```bash
pnpm dev           # Start dev server (localhost:3000)
pnpm payload       # Payload CLI
pnpm payload:types # Generate TypeScript types
pnpm db:migrate    # Run database migrations
```

## Local Multi-Site Testing

Add to hosts file (`C:\Windows\System32\drivers\etc\hosts` on Windows):

```
127.0.0.1 solaris-douro.localhost
127.0.0.1 nexus.localhost
```

Then access:
- http://solaris-douro.localhost:3000 (demo tourism site)
- http://nexus.localhost:3000 (demo lead-gen site)
- http://localhost:3000/admin (Payload admin)

## Seeding Demo Data

POST to `/api/seed` or use the Seed button in the Payload admin dashboard.

## Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm typecheck` | TypeScript check |
| `pnpm lint` | ESLint |
| `pnpm test:int` | Unit + integration tests |
| `pnpm test:e2e` | Playwright E2E tests |
| `pnpm verify` | typecheck + lint + test:int |

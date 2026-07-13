# Architecture

## Overview

Baxhen is a multi-tenant website platform for small and medium businesses. A single Next.js + Payload CMS application serves multiple client websites through hostname-based routing.

## Layers

```
Model (Payload collections, globals, domain types)
  ↓
Repository (data access — Payload Local API calls)
  ↓
Service (business logic, orchestration)
  ↓
ViewModel (transforms domain data → presentation-ready)
  ↓
View (React components — primitives, sections, templates)
```

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **CMS**: Payload CMS 3.86.0
- **Database**: PostgreSQL (Supabase)
- **Storage**: Supabase Storage (S3-compatible)
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Icons**: Lucide React
- **i18n**: Payload Localization + next-intl
- **Testing**: Vitest (unit + integration), Playwright (E2E)
- **Deployment**: Netlify

## Route Groups

- `(payload)` — Payload Admin + API
- `(baxhen)` — Baxhen's own pages (landing, portfolio)
- `(sites)` — Client website routes (`_sites/[siteSlug]/[locale]/[[...path]]`)

## Multi-Tenancy

Tenant isolation at the database query level via `@payloadcms/plugin-multi-tenant`. Each collection is scoped to a tenant. Public website reads go through repositories that enforce `status = published` and active site checks.

## Security

- No public access to draft, private, billing, contract data
- Access control centralized in `src/access/`
- Tenant filtering at database level, not application level
- Sensitive environment variables never exposed to client

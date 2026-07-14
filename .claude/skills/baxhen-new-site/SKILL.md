# Baxhen New Site

Creates all files needed to add a new client website to the platform.

## When to Use

- User says "create a new site", "add a client website", "new website for [name]"
- User provides a site name and wants the full scaffold

## What It Creates

```
src/sites/{slug}/
  home.tsx       — HeroSection + placeholder sections
  layout.tsx     — header with logo + CTA + footer
  about.tsx      — stats + story
  services.tsx   — service cards
  contact.tsx    — phone/email/address
  terms.tsx      — terms of service
  privacy.tsx    — privacy policy
```

Plus registers all pages in `src/sites/index.ts`.

## Process

1. Ask: site name, slug, type (business-presence | lead-generation), theme (dark | light)
2. Create directory `src/sites/{slug}/`
3. Create each page file with proper template (dark theme = Baxhen style, light theme = Inter font)
4. Create `layout.tsx` with header (logo + nav + CTA) + footer
5. Update `src/sites/index.ts` — add import + register all 6 pages
6. Output admin instructions:
   - Create Tenant (name={name}, slug={slug})
   - Create Site (slug={slug}, type={type}, status=published)
   - Create Domain (hostname={slug}.localhost, type=baxhen-preview)
   - Add `127.0.0.1 {slug}.localhost` to hosts file
   - Visit `http://{slug}.localhost:3000`

## Template Notes

- **Dark theme** (`business-presence`): colors from Baxhen Void design (#0e1417 bg, #a8e8ff primary). Font: `var(--font-geist-sans)`.
- **Light theme** (`lead-generation`): colors from Falcão design (#f9f9ff bg, #00317e primary, #ffe16d accent). Font: `Inter, var(--font-geist-sans)`.
- Pages are Server Components unless they have `'use client'` interactivity (forms).
- Each page exports `defaultContent` for Payload SiteContent fallback + the page component.
- Layout uses `FalcaoLayout` pattern — site-specific `<header>` + `<main>{children}</main>` + `<footer>`.
- Always add to `src/sites/index.ts` with key = slug, value = `{ home: HomePage, about: AboutPage, ... }`.

## After Creation

Tell the user to:
1. `pnpm typecheck`
2. Start dev server
3. Create Tenant + Site + Domain in admin (`/admin`)
4. Add hosts file entry
5. Test

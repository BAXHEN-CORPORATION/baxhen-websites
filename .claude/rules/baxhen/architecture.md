# Baxhen Architecture Rules

## Layer Architecture

```
Model (Payload collections, globals, domain types)
  ↓
Repository (data access — Payload Local API calls)
  ↓
Service (business logic, orchestration)
  ↓
ViewModel / Presenter (transforms domain data → presentation-ready)
  ↓
View (React components — primitives, components, sections, templates)
```

Next.js route files, layouts, Server Components, route handlers, and Server Actions act as the **composition/controller layer** — they wire the layers together.

## Layer Definitions

### Model Layer

**Location**: `src/collections/`, `src/globals/`, `src/blocks/`, `src/domain/`

Contains: Payload collection configs, global configs, block configs, generated Payload types, domain types, domain enums, validation rules, relationships, collection hooks (data integrity), access-control rules.

Rules:
- Must not import React components
- Access control goes here — not in repositories or services
- Collection hooks protect data integrity (normalizeDomain, protectTenantRelationship)

### Repository Layer

**Location**: `src/repositories/`

Responsible ONLY for data access. Every function is a Payload Local API call.

Rules:
- Payload Local API calls belong here — nowhere else
- Every public website query MUST be scoped to a specific site or tenant
- Never perform unrestricted queries and filter afterward in memory
- Never trust a tenant/site ID from the browser without validation
- Avoid returning complete documents when consumer needs only a subset
- Use generated Payload types for inputs
- Handle "not found" conditions explicitly (return null, don't throw in repositories)
- Do not leak draft, private, billing, contract, or cross-tenant information

### Service Layer

**Location**: `src/services/`

Contains application and business logic. Orchestrates repository calls.

Rules:
- Services may call repositories
- Services must not render React
- Services must not depend on a particular page component
- Services should be independently testable (mock repositories)
- Services should return explicit success/failure results where failure is expected
- Business rules must not be duplicated across route files or components
- Services may call other services

### ViewModel Layer

**Location**: `src/view-models/`

Transforms domain/Payload data into presentation-ready data.

Rules:
- Resolve localized values (pick correct locale from Payload's localized fields)
- Apply safe defaults for missing optional fields
- Normalize image data (URLs, dimensions, alt text)
- Normalize links (locale-aware hrefs)
- Remove CMS-specific field shapes from the View
- Expose only values the View requires
- Create stable component props
- Never return Payload request objects or Local API objects
- Never query the database
- Never import React components

### View Layer

**Location**: `src/views/`

Contains React components: primitives, components, sections, templates, layouts, block-renderer.

Rules:
- Receive data through typed props (ViewModels)
- Remain unaware of Payload
- Do NOT call Payload Local API
- Do NOT query Supabase
- Do NOT determine tenant permissions
- Do NOT contain billing or contract logic
- Do NOT access secrets
- Reusable across business-presence and lead-generation sites
- Server Components by default; Client Components only when browser interaction required

## Import Direction Rules (STRICT)

```
Views may import view-model types.
Views must NOT import repositories, Payload config, collections, or services.

ViewModels may import domain types.
ViewModels must NOT query Payload or import Payload utilities.

Services may import repositories and domain types.
Services must NOT import React views.

Repositories may import Payload server utilities and domain types.
Repositories must NOT import React.

Models must NOT import application views.
```

## File Naming

| Layer | Pattern | Example |
|---|---|---|
| Collections | `src/collections/{Name}/index.ts` | `src/collections/Sites/index.ts` |
| Globals | `src/globals/{Name}/config.ts` | `src/globals/Header/config.ts` |
| Repositories | `src/repositories/{entity}.repository.ts` | `src/repositories/site.repository.ts` |
| Services | `src/services/{feature}.service.ts` | `src/services/localization.service.ts` |
| ViewModels | `src/view-models/{entity}.view-model.ts` | `src/view-models/page.view-model.ts` |
| Block ViewModels | `src/view-models/blocks/{block}.view-model.ts` | `src/view-models/blocks/hero.view-model.ts` |
| Primitives | `src/views/primitives/{Name}/{name}.tsx` | `src/views/primitives/Button/button.tsx` |
| Sections | `src/views/sections/{Name}Section/{name}-section.tsx` | `src/views/sections/HeroSection/hero-section.tsx` |
| Templates | `src/views/templates/{Name}Template/{name}-template.tsx` | `src/views/templates/BusinessPresenceTemplate/business-presence-template.tsx` |

## Layout Structure

- `app/layout.tsx` — Root layout with `<html><body>` + Providers + AdminBar + metadata
- `(baxhen)/layout.tsx` — pass-through (`<>{children}</>`)
- `(sites)/layout.tsx` — pass-through (`<>{children}</>`)
- `(payload)/layout.tsx` — Payload's RootLayout (has own `<html><body>`)

**Rule**: Never render `<html>` or `<body>` in both root AND route group layouts. Only the root layout provides the document shell. Exception: Payload admin uses its own RootLayout.

## Error Handling

Expected failures use typed errors from `src/domain/errors.ts`:
- `SiteNotFoundError` (404)
- `SiteSuspendedError` (503)
- `PageNotFoundError` (404)
- `UnsupportedLocaleError` (404)
- `InvalidFormSubmissionError` (422)
- `UnauthorizedTenantAccessError` (403)

Rules:
- Public responses must not expose stack traces
- Logs should contain request IDs and technical context
- Logs must not contain passwords, tokens, contract files, or complete form submissions
- Not-found conditions should not be treated as unexpected crashes
- Add appropriate Next.js `not-found.tsx` and `error.tsx` boundaries

## Code Quality Rules

- Prefer small pure functions
- Prefer composition over inheritance
- Avoid giant collection configuration files — split into separate files per collection
- Avoid giant React components — extract sub-components
- Avoid business logic inside JSX
- Avoid CMS queries inside sections
- Avoid `any`
- Avoid non-null assertions unless proven safe
- Avoid duplicated locale fallback logic — use localization service
- Avoid duplicated tenant filters — use centralized access functions
- Avoid passing complete Payload documents through the entire UI
- Avoid exposing private fields in public view models
- Use explicit names rather than generic `utils.ts` files
- Keep functions focused on one responsibility
- Keep public interfaces small
- Ensure errors are actionable

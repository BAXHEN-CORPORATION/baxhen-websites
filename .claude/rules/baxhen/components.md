# Baxhen Component Standards

## Architecture Context

Components live in the **View layer**. They receive data through typed props (ViewModels) and must not import Payload, repositories, or services. See `.claude/rules/baxhen/architecture.md` for full layer rules.

## View Layer Taxonomy

```
src/views/
  primitives/      # Small visual elements: Button, Container, Heading, Text, Image, Link, Icon, Stack, Grid, Badge
  components/      # Reusable UI units: Logo, LanguageSwitcher, NavigationMenu, FormField, etc.
  sections/        # Page-level content sections: HeroSection, ServicesSection, FAQSection, ContactFormSection, etc.
  templates/       # Business-case compositions: BusinessPresenceTemplate, LeadGenerationTemplate, LegalPageTemplate
  layouts/         # Site-wide layouts: SiteHeader, SiteFooter
  block-renderer/  # Typed block discriminator → section mapper
```

## File Structure

Every component follows the multi-file slice pattern:

```
component-name/
  index.tsx                      <- barrel re-export (component + types + manifest)
  component-name.tsx             <- main component implementation
  component-name.types.tsx       <- Props interface, internal type definitions
  component-name.const.tsx       <- constants, icon refs, config values
  component-name.components.tsx  <- sub-components reused by main component
  component-name.utils.ts        <- utility functions specific to this component
```

## Rules

1. **Server Components by default** — use `"use client"` only when browser interaction or browser APIs are genuinely required
2. Components receive data via typed ViewModel props — no Payload types, no Local API objects
3. No useState/useEffect in presentational components — state management lives in hooks or Zustand stores
4. Named exports only — no `export default` in components (exception: Next.js page files)
5. Arrow functions for components and event handlers
6. Tailwind 4 classes only — no CSS modules, no inline styles (except dynamic values from theme props)
7. Mobile-first: max-width containers, responsive units, `min-h-[44px]` on interactive elements (WCAG tap target)
8. `index.tsx` is PURE barrel — no logic, no React imports, only re-exports
9. Every component barrel exports a `componentManifest` of type `ComponentManifest` from `@/lib/manifest/types`
10. Component directory name = kebab-case, component name = PascalCase, props type = PascalCase + `Props` suffix

## ViewModel Pattern

Components receive a single ViewModel object, not raw CMS data:

```tsx
// ✅ Correct: typed ViewModel props
export const HeroSection = ({ heading, subtext, cta, background }: HeroSectionProps) => { ... }

// ❌ Wrong: importing Payload or raw block types
import { HeroBlock } from '@/payload-types' // NEVER in views
```

## Prohibited Imports (View Layer)

- `payload` or `@payloadcms/*` packages
- `@/payload-types` or `@/payload.config`
- `@/collections/*`, `@/repositories/*`, `@/services/*`
- `@/lib/environment/env.server` (server-only)
- Database query functions

## Conventions

- Props interface: `{ComponentName}Props`
- Sub-components: PascalCase, exported from `.components.tsx`
- Constants: UPPER_SNAKE_CASE
- No magic strings in JSX — extract to `.const.tsx`
- Use `framer-motion` for animations, `lucide-react` for icons
- Theme values from CSS custom properties, not hardcoded hex values

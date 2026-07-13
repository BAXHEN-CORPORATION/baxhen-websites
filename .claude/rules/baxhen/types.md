# Baxhen TypeScript Type Conventions

## Type Layers

Three distinct type categories — never mix them:

| Layer | Source | Used By | Location |
|---|---|---|---|
| **Domain types** | Manual definitions | Repositories, Services, ViewModels | `src/domain/` |
| **Payload types** | Generated from collections | Repositories (input), Models | `src/payload-types.ts` |
| **ViewModel types** | Manual definitions | Views (components, sections) | `src/view-models/` |

## Import Direction (Enforced)

```
Views → ViewModel types only (src/view-models/)
ViewModels → Domain types only (src/domain/)
Services → Repositories + Domain types
Repositories → Payload types + Domain types
Models → No application views
```

## Domain Types

Located in `src/domain/`:
- `src/domain/shared/types.ts` — `Locale`, `SiteType`, `SiteStatus`, `TenantStatus`, `DomainType`, `DomainStatus`, `PageType`, `PageStatus`, `SubmissionStatus`, `ContractStatus`, `MediaUsage`, `UserRole`
- `src/domain/tenant/types.ts` — `Tenant`
- `src/domain/site/types.ts` — `Site`, site-specific types
- `src/domain/page/types.ts` — page-specific types
- `src/domain/forms/types.ts` — form/submission-specific types
- `src/domain/errors.ts` — `SiteNotFoundError`, `SiteSuspendedError`, `PageNotFoundError`, `UnsupportedLocaleError`, `InvalidFormSubmissionError`, `UnauthorizedTenantAccessError`

## Type Placement

1. Types are CO-LOCATED with the code that uses them — no centralized `types/` folder
2. Component Props types go in `component-name.types.tsx`
3. ViewModel types go in their respective `src/view-models/` file
4. Domain enums and shared types go in `src/domain/shared/types.ts`
5. Utility types local to a module stay in that module's `.types.ts` file

## Type Naming

1. Component Props: `{ComponentName}Props` (PascalCase)
2. ViewModel types: `{Entity}ViewModel` (e.g. `PageViewModel`, `NavigationViewModel`)
3. Section ViewModel: `{SectionName}ViewModel` (e.g. `HeroSectionViewModel`)
4. State discriminated unions: PascalCase (e.g. `CallState = "incoming" | "active" | "ended"`)
5. Domain enums: PascalCase with string literal union (e.g. `type SiteType = 'business-presence' | 'lead-generation'`)

## Type Patterns

1. Use discriminated unions for variant types:
   ```typescript
   type SectionViewModel =
     | HeroSectionViewModel
     | ContentSectionViewModel
     | ServicesSectionViewModel
   ```
2. Use `interface` for object shapes, `type` for unions/intersections
3. Always export types that are part of the public API (from barrel `index.ts`)
4. Use `import type` for type-only imports to avoid runtime cost
5. Avoid `any` — use `unknown` and narrow with type guards
6. Strict mode is ON — no implicit any, no implicit returns

## Props Conventions

1. Component receives a single Props object — no positional props
2. Optional props use `?` — required props have no modifier
3. Callback props are camelCase: `onSubmit`, `onClose`, `onToggle`
4. Boolean props use `is` / `has` / `show` prefix: `isActive`, `hasImage`, `showFallback`
5. Children props use `React.ReactNode` (from `react`), not `JSX.Element`

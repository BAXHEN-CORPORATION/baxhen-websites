# Baxhen Hook / ViewModel Standards

## State Management Strategy

| Scope | Tool | When |
|---|---|---|
| Simple component state | `useState` | Single component, trivial state |
| Complex client state | **Zustand** | Reusable slices, multi-step flows, form wizards, UI state machines |
| Server data | **Payload Local API** | All CMS data, tenant queries, form submissions — via repositories/services |

## Hook Types

**ViewModel hooks** — transform domain data into presentation-ready ViewModels:
- Located in `src/view-models/` or co-located with their consuming component
- Return a single typed ViewModel object
- May call service functions (which in turn call repositories)
- Never call Payload Local API directly
- Never render React

**State hooks** — manage client-side interaction state:
- Located in `src/hooks/use{HookName}.ts` (single file)
- Can use Zustand stores for complex/reusable state

## ViewModel Hook Rules

1. Hooks return a single typed object — consumers spread or destructure it
2. The return type is the source of truth for what the component receives
3. Resolve localized values, apply safe defaults, normalize image data
4. Normalize links (locale-aware hrefs)
5. Remove CMS-specific field shapes from the output
6. Expose only values the View requires
7. Do not query the database directly — use services

## Zustand Store Rules (Client-Side Complex State)

1. Use Zustand for reusable state slices shared across components
2. Use Zustand for multi-step client-side flows (form wizards, onboarding)
3. Use Zustand for UI state machines (modals, drawers, navigation state)
4. Stores live in `src/stores/` directory
5. Follow the slices pattern for modularity
6. Never use Zustand for server data — Payload Local API is the single source of truth for CMS data
7. See `zustand-state-management` skill for templates and patterns

## Simple Hook Rules

1. Single-file, single responsibility
2. Generic enough to be reused across multiple components
3. Return value is an object (not tuple) for extensibility
4. Proper `useEffect` cleanup (clearInterval, clearTimeout, removeEventListener)
5. Accept an options object as parameter, not positional args

## Anti-Patterns

- Don't put business logic in page files — page files import hooks + components, that's it
- Don't call Payload Local API from components or hooks — go through services
- Don't fetch CMS data in Client Components — fetch in Server Components, pass down
- Don't create `new Audio()` directly — use a dedicated audio hook
- Don't export default from hooks
- Don't use `useEffect` for derived values — use `useMemo` or inline computation
- Don't duplicate locale fallback logic — use `localization.service.ts`

# Baxhen Design Token Standards

These standards codify the "Void Conversationalist" design system — the **default platform theme**. Each client site can override these via CSS custom properties configured in the Site's `theme` field.

## Theme CSS Custom Properties

The platform exposes these tokens as CSS custom properties on the site layout. Each site's theme config produces unique values:

```css
--color-background       /* Page background */
--color-surface          /* Card, container background */
--color-text             /* Body text */
--color-heading          /* Heading text */
--color-primary          /* CTA, accents, focus */
--color-on-primary       /* Text on primary backgrounds */
--color-outline          /* Borders, dividers */
--color-error            /* Error states */
--font-heading           /* Headlines: h1-h4 */
--font-body              /* Body text, paragraphs */
--font-mono              /* Labels, badges, code */
--border-radius          /* Default border radius */
--content-width          /* Max width for containers */
```

## Default Theme — Void Conversationalist

### Color

| Role          | Hex       | CSS Variable          | Usage                                        |
|---------------|-----------|----------------------|----------------------------------------------|
| Background    | #10141a   | `--color-background`  | Primary page background                      |
| Surface       | #181c22   | `--color-surface`     | Container backgrounds, cards                 |
| Text          | #dfe2eb   | `--color-text`        | Body text, headings                          |
| Primary       | #3cd7ff   | `--color-primary`     | CTA text, highlights, focus rings           |
| Primary BG    | #3cd7ff   | `--color-primary`     | Primary buttons, accent backgrounds          |
| On Primary    | #001f27   | `--color-on-primary`  | Text on primary backgrounds                  |
| Outline       | #859398   | `--color-outline`     | Borders, dividers                            |
| Error         | #ffb4ab   | `--color-error`       | Error states                                  |

### Typography

| Token             | Font             | Size    | Weight | Usage                  |
|-------------------|------------------|---------|--------|------------------------|
| Display XL        | Literata         | 64px    | 300    | Hero headlines         |
| Headline LG       | Literata         | 48px    | 300    | Section headlines      |
| Headline MD       | Literata         | 24px    | 400    | Card headlines         |
| Body LG           | Hanken Grotesk   | 18px    | 400    | Lead paragraphs        |
| Body MD           | Hanken Grotesk   | 16px    | 400    | Body                   |
| Label SM          | JetBrains Mono   | 12px    | 500    | Timestamps, badges     |

### Spacing

- Base unit: 8px
- Container max-width: `--content-width` (default: 1200px)
- Gutter: 24px
- Mobile margin: 16px
- Desktop margin: 48px

### Border Radius

- Standard: `--border-radius` (default: 0.5rem) — buttons, inputs
- Conversational: 1.5rem — chat bubbles
- Full pill: 9999px — badges

### Elevation

No box-shadows. Depth via color contrast:
- Level 0: Background (page)
- Level 1: Surface (containers)
- Glass: `backdrop-blur-[20px]` with 5% Frost tint

## Rules

1. **Reference theme values via CSS custom properties** in component styles: `color: var(--color-primary)`
2. **Use Tailwind arbitrary values with CSS vars** where needed: `bg-[var(--color-primary)]`
3. **Do not hardcode hex colors** in shared components — they break per-site theming
4. **Site-specific theme values come from the Site collection's `theme` JSON field**, transformed by `theme.service.ts`
5. **Do not create a new Tailwind configuration per client**
6. **Do not allow arbitrary client CSS** — only the controlled variants in the theme config
7. Background always uses `--color-background`
8. Primary accent reserved for critical actions, CTAs, and highlights

## Icons

Use `lucide-react` for all icons. No custom icon SVGs unless no lucide equivalent exists.

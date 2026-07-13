---
name: Baxhen Business
colors:
  surface: '#0e1417'
  surface-dim: '#0e1417'
  surface-bright: '#333a3d'
  surface-container-lowest: '#080f12'
  surface-container-low: '#161d1f'
  surface-container: '#1a2123'
  surface-container-high: '#242b2e'
  surface-container-highest: '#2f3639'
  on-surface: '#dde3e7'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#dde3e7'
  inverse-on-surface: '#2b3134'
  outline: '#859398'
  outline-variant: '#3c494e'
  surface-tint: '#3cd7ff'
  primary: '#a8e8ff'
  on-primary: '#003642'
  primary-container: '#00d4ff'
  on-primary-container: '#00586b'
  inverse-primary: '#00677e'
  secondary: '#75d4e9'
  on-secondary: '#00363f'
  secondary-container: '#369db1'
  on-secondary-container: '#002f37'
  tertiary: '#ecddbc'
  on-tertiary: '#383019'
  tertiary-container: '#d0c1a1'
  on-tertiary-container: '#594f35'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b4ebff'
  primary-fixed-dim: '#3cd7ff'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5f'
  secondary-fixed: '#a6eeff'
  secondary-fixed-dim: '#75d4e9'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5b'
  tertiary-fixed: '#f1e1c0'
  tertiary-fixed-dim: '#d4c5a5'
  on-tertiary-fixed: '#221b06'
  on-tertiary-fixed-variant: '#50462d'
  background: '#0e1417'
  on-background: '#dde3e7'
  surface-variant: '#2f3639'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system transitions from a conceptual "void" into a structured, high-end consultative environment. It targets enterprise leaders and global consultants who require precision and cross-cultural clarity. The aesthetic is **Professional Minimalism**: a blend of deep, architectural foundations with sharp, illuminated accents.

The emotional response should be one of "quiet authority." By balancing ultra-dark backgrounds with warm, human-centric text tones, the UI avoids the coldness of typical tech platforms, opting instead for the atmosphere of a private, late-night executive lounge. The style leverages subtle light leaks and fine-line borders to create depth without visual clutter.

## Colors
The palette is built on a hierarchy of deep obsidian tones contrasted by "Electric" precision. 

- **Foundations:** Use `#0D1117` (Void) for the primary application background. Use `#131723` (Deep Navy) for elevated surfaces like cards, sidebars, and modals.
- **Accents:** `#00D4FF` (Electric) is reserved for primary actions, focus states, and critical data points. `#3FA4B8` (Teal Mid) provides a softer, trust-oriented alternative for secondary interactive elements.
- **Readability:** `#F0F4F8` (Frost) is the standard for body copy to ensure high contrast without the eye strain of pure white. `#FCECCA` (Warm Cream) is used sparingly for highlighted insights, secondary background fills, or "human-centric" annotations.

## Typography
The typographic strategy balances academic authority with modern efficiency. 

**Literata** serves as the primary serif for headlines, bringing a consultative, editorial feel to the product. It should be used with tighter letter-spacing in larger sizes to maintain a "premium" density.

**Hanken Grotesk** is the workhorse sans-serif for all UI elements and body text. Its sharp geometry complements the serif headlines while ensuring maximum legibility in dense business reports or bilingual data views. For labels and metadata, use the SemiBold weight with increased tracking to create a clean, organized hierarchy.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px max-width container on desktop to ensure line lengths remain readable for professional consultation. 

A strict **8px grid** governs all padding and margins. For bilingual content, use side-by-side "split-pane" layouts where the gutter is increased to 32px to provide a clear mental break between languages. On mobile, transition to a single column with "language-toggle" tabs at the top of the content block to maintain structural integrity.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Luminescence** rather than physical shadows. 

1. **Surface 0:** `#0D1117` (The void base).
2. **Surface 1:** `#131723` (Cards and containers) with a 1px border of `#3FA4B8` at 15% opacity.
3. **Interactive Focus:** Instead of heavy shadows, use a soft outer glow (bloom) of `#00D4FF` (10-15% opacity) to indicate active states or primary buttons.

Borders should be hairline (1px) and use low-contrast versions of the primary or teal accents to define edges without breaking the minimalist flow.

## Shapes
The shape language is defined as **Stable Modernity**. A consistent 0.5rem (8px) corner radius is applied to all primary containers and buttons. 

This specific "ROUND_EIGHT" approach provides enough softness to feel contemporary and accessible, while the relatively tight corners maintain the structural "grid-like" discipline required for a business/consultative aesthetic. Small UI elements like checkboxes or tags should follow the same 8px rule, though tags may occasionally use a full pill-shape if they are being used as status indicators.

## Components
- **Buttons:** Primary buttons use a solid `#00D4FF` fill with dark text. Secondary buttons use a ghost style: transparent fill with a 1px `#3FA4B8` border.
- **Input Fields:** Fields utilize the Deep Navy background with a Frost text color. The bottom border should animate to Electric on focus.
- **Cards:** Use Surface 1 (`#131723`) with subtle 1px borders. For consultative "insights," use a Warm Cream (`#FCECCA`) left-edge accent bar.
- **Bilingual Switcher:** A custom component featuring a segmented control. The active language should be highlighted with a soft Teal Mid glow.
- **Lists:** Use horizontal separators in 10% opacity Frost. Hover states should subtly lighten the background to `#1C212B`.
- **Chips/Tags:** Small, high-contrast labels. Use the Warm Cream background with dark text for "Crucial" tags and Teal Mid for "Informational" tags.
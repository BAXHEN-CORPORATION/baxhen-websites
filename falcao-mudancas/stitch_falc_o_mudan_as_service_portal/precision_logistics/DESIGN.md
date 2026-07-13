---
name: Precision Logistics
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#434653'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#2559bf'
  primary: '#00317e'
  on-primary: '#ffffff'
  primary-container: '#0046ad'
  on-primary-container: '#a5bdff'
  inverse-primary: '#b2c5ff'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a900'
  on-tertiary-container: '#4c3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#0040a0'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
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
  section-gap-desktop: 80px
  section-gap-mobile: 48px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The brand personality is built on three pillars: **Reliability, Velocity, and Care**. As a premier moving service, the visual language must immediately settle the anxiety of relocation by presenting an image of systematic organization and professional strength. 

This design system utilizes a **Corporate Modern** style with a focus on high-clarity information architecture. It balances the "industrial" nature of moving with a clean, tech-forward aesthetic. Large, confident typography and a structured grid communicate precision, while the vibrant accent color drives action and highlights the speed of service.

The emotional goal is to evoke a sense of relief and security—moving the user from the chaos of packing to the organized serenity of a new home.

## Colors

The palette is anchored by **Royal Blue**, representing authority and established trust within the logistics sector. **Golden Yellow** is reserved exclusively for primary conversion points and critical calls-to-action (CTAs), providing a high-contrast focal point that guides the user toward booking or quoting.

- **Primary (Royal Blue):** Used for headers, primary branding, and structural icons.
- **Secondary (Off-White/Ice):** Used for background sections to maintain a clean, airy feel that prevents the UI from feeling cluttered.
- **Tertiary (Golden Yellow):** The "Urgency" color. Used for "Get a Quote" buttons and highlight banners.
- **Neutral (Slate):** Used for body text and subtle borders to ensure high legibility and professional finish.
- **WhatsApp Green:** A specialized functional color used only for the direct communication floating button.

## Typography

This design system uses **Inter** exclusively to ensure a systematic, utilitarian appearance that performs exceptionally well on mobile screens. 

Heavy weights (Bold/ExtraBold) are used for headlines to convey the "strength" of the brand. Letter spacing is slightly tightened on display sizes to create a more impactful, modern editorial look. Body text scales from 18px for primary readability to 14px for utility labels. Always maintain high contrast (Royal Blue or Slate on White) for all typographic elements.

## Layout & Spacing

The layout follows a **Fluid-to-Fixed grid** model. On mobile, it utilizes a single-column layout with 16px side margins. On desktop, content is contained within a 1200px 12-column grid.

Spacing follows a strict 8px linear scale. Large vertical gaps (80px+) are used between major sections to emphasize the premium nature of the service and allow the brand imagery (trucks, precision packing) to breathe. Service cards and informational blocks should use a 24px gutter to maintain clear separation of concerns.

## Elevation & Depth

To maintain a professional and "grounded" feel, depth is created through **Tonal Layering** and **Soft Ambient Shadows**. 

1.  **Level 0 (Base):** White (#FFFFFF) or light grey (#F8FAFC) backgrounds.
2.  **Level 1 (Cards/Surface):** White surfaces with a very subtle 1px border (#E2E8F0) and a soft, diffused shadow (0px 4px 12px rgba(0, 0, 0, 0.05)).
3.  **Level 2 (Interactive/Floating):** The WhatsApp button and active dropdowns use a more pronounced shadow to indicate they sit above the primary content plane.

Avoid heavy neomorphism or complex gradients; the goal is clarity and flat, modern professionalism.

## Shapes

The design uses a **Rounded (0.5rem)** logic. This softens the industrial aspect of logistics, making the brand feel more approachable and family-friendly. 

- **Standard Buttons:** 0.5rem (8px) corner radius.
- **Input Fields:** 0.5rem (8px) corner radius.
- **Service Cards:** 1rem (16px) corner radius for a softer, more distinct container look.
- **Trust Badges:** Fully circular (pill) shapes are permitted for small status indicators or badges.

## Components

### Buttons
- **Primary CTA:** Golden Yellow background with Neutral (Slate) text. High emphasis.
- **Secondary:** Royal Blue background with White text. Used for main site navigation.
- **Ghost:** Royal Blue outline with transparent background. Used for secondary information.

### WhatsApp Integration
A persistent floating action button (FAB) in the bottom-right corner. It should feature the WhatsApp brand green, a clear icon, and a small text "tooltip" or bubble saying "Fale Conosco" (Talk to us).

### Trust Badges
Horizontal or grid-based clusters of icons (e.g., "Seguro Total", "Equipe Própria", "10+ Anos"). Use Royal Blue for icons and Bold Label-caps for titles.

### Service Cards
White containers with a top-border accent in Royal Blue. They should include a bold title, a brief description, and a "Learn More" link. On hover, the shadow should slightly deepen to provide tactile feedback.

### Form Inputs
Clean, minimalist design with 1px slate borders. Focus states must clearly highlight the field using a Royal Blue 2px ring. Labeling should always be visible above the field (not just placeholder text) to aid accessibility during complex quote requests.
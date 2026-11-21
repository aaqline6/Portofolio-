---
name: Tactile Editorial Bento
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#4d4540'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#7e756f'
  outline-variant: '#cfc4bd'
  surface-tint: '#625d5b'
  primary: '#0b0907'
  on-primary: '#ffffff'
  primary-container: '#23201e'
  on-primary-container: '#8c8784'
  inverse-primary: '#ccc5c2'
  secondary: '#43617e'
  on-secondary: '#ffffff'
  secondary-container: '#beddff'
  on-secondary-container: '#44627e'
  tertiary: '#0c0907'
  on-tertiary: '#ffffff'
  tertiary-container: '#24201e'
  on-tertiary-container: '#8e8783'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e8e1dd'
  primary-fixed-dim: '#ccc5c2'
  on-primary-fixed: '#1e1b19'
  on-primary-fixed-variant: '#4a4644'
  secondary-fixed: '#cee5ff'
  secondary-fixed-dim: '#abcaea'
  on-secondary-fixed: '#001d33'
  on-secondary-fixed-variant: '#2b4965'
  tertiary-fixed: '#eae0dc'
  tertiary-fixed-dim: '#cec5c1'
  on-tertiary-fixed: '#1f1b18'
  on-tertiary-fixed-variant: '#4b4643'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
  bg-canvas: '#F6F3EE'
  bg-sand: '#D8CFC6'
  bg-blush: '#EFE5E1'
  bg-card-white: '#FFFFFF'
  bg-note-warm: '#E8E1D9'
  ink-charcoal: '#23201E'
  ink-soft: rgba(35, 32, 30, 0.72)
  border-hairline: rgba(35, 32, 30, 0.14)
  accent-steel: '#4F6D8A'
  surface-dark-start: '#2C353D'
  surface-dark-end: '#1E2429'
typography:
  display-hero:
    fontFamily: Anton
    fontSize: 140px
    fontWeight: '400'
    lineHeight: 112px
    letterSpacing: 0.01em
  display-hero-mobile:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.01em
  script-hero:
    fontFamily: Caveat
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg:
    fontFamily: Anton
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 50px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Anton
    fontSize: 42px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: Anton
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  script-note:
    fontFamily: Caveat
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14.5px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  eyebrow:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.14em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1.25rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.375rem
  space-xl: 2.75rem
---

## Brand & Style

This design system blends modernist architectural structure with the warmth and intimacy of tactile print ephemera. Designed for an Informatics & Artificial Intelligence student, it reconciles rigorous technical logic with creative personality. The experience synthesizes two aesthetics:
- **Swiss / Editorial Bento Grid:** Strict geometric division of space, fine hairline borders, uppercase condensed headline blocks, and disciplined informational density.
- **Scrapbook Collage:** Organic paper grain textures, handwritten margin notes, slightly angled polaroid photographs, and physical tactile metaphors.

The emotional signature is studious, approachable, authentic, and deliberate. Interfaces should feel less like cold enterprise dashboards and more like a carefully archived researcher’s physical workbook or high-end design journal.

## Colors

The palette draws from natural uncoated paper, raw bookbinding cloth, and deep carbon ink.

- **Primary (`#23201E` - Deep Charcoal Ink):** Used for solid brand typography, heavy graphic headlines, and deeply immersive inverted anchor sections (such as contact blocks and the base canvas footer).
- **Secondary (`#4F6D8A` - Slate-Steel Blue):** Provides a restrained intellectual accent for active states, link interactions, timeline badges, and focal interactive elements without overpowering the paper canvas.
- **Tertiary (`#EFE5E1` - Soft Dusty Blush):** Used for highlighting specialized bento cards, skill pill containers, and warm accent note surfaces.
- **Neutral (`#F6F3EE` - Canvas Off-White):** The default base canvas color, replacing harsh modern `#FFFFFF` with a warm, museum-grade matte paper tone.

Sub-containers utilize `bg-sand` (`#D8CFC6`) and `bg-card-white` (`#FFFFFF`) to establish crisp editorial hierarchy. Structural division is provided strictly by `border-hairline` (`rgba(35, 32, 30, 0.14)`).

## Typography

The typography creates dynamic tension between three distinct typographic voices:
1. **The Modernist Headline (`Anton`):** Heavyweight, condensed, poster-style grotesque typography set tight in uppercase. Conveys structure, architectural weight, and impact.
2. **The Clean Functionalist Body (`Plus Jakarta Sans`):** Balanced, open, and contemporary, ensuring effortless readability across editorial narratives and descriptions.
3. **The Organic Annotation (`Caveat`):** Spontaneous, humanistic cursive handwriting used exclusively for marginalia, personal footnotes, and playful labels. These annotations should almost always be accompanied by a natural negative rotation (between `-2deg` and `-7deg`).
4. **The Monospace Detail (`JetBrains Mono`):** Applied to dates, metrics, and technical taxonomies to ground the student's Informatics & AI foundation.

## Layout & Spacing

The structural layout relies on an asymmetric Bento Grid contained within a maximum width of `1280px`. 

- **Grid Model:** Desktop views use multi-cell bento tracks (such as `1fr : 1.05fr`, `1fr : 1fr`, and `1.15fr : 0.85fr`). Bento panels share continuous hairlines using `border-hairline` without standard detached margin gutters between major rows, creating an integrated architectural magazine spread.
- **Section Margins:** Page gutters expand from `1.25rem` on mobile devices to `2.5rem` on large viewports.
- **Internal Panel Padding:** Primary content blocks utilize `space-xl` (`2.75rem` / `44px`) padding for high-end editorial airiness. Compact widgets and nested cards use `space-lg` (`1.375rem` / `22px`).
- **Responsive Adaptations:** At screen widths `<= 900px`, multi-column bento grids collapse gracefully into stacked full-width rows while retaining individual card padding and perimeter borders.

## Elevation & Depth

This design system avoids multi-layer diffuse synthetic UI shadows in favor of a tactile, print-inspired depth strategy:

- **Surface Tiers & Paper Grain:** All visual layering sits on top of a global paper noise texture (`opacity: 0.03`). Containers rely on chromatic surface contrast (`#F6F3EE`, `#D8CFC6`, `#EFE5E1`, `#FFFFFF`) and structural `1.5px` borders rather than box shadows.
- **Polaroid Offset Shadow:** Visual artifacts such as photography cards utilize an intentional, grounding polaroid drop shadow: `0 14px 30px -10px rgba(35, 32, 30, 0.16)`.
- **Physical Z-Layering:** The hero section uses 3D magazine collage layering:
  - Base Layer (`z-index: 1`): Oversized typographic headline ("PORTFOLIO").
  - Subject Layer (`z-index: 2`): Cut-out image asset overlapping typographic baselines, cast with a deep subject drop-shadow (`drop-shadow(0 12px 24px rgba(35, 32, 30, 0.18))`).
  - Annotation Layer (`z-index: 3`): Tilted handwritten script annotations and interactive pill badges overlaying both the subject and the headline.

## Shapes

The design system maintains a crisp, predominantly architectural geometry softened by tactical border-radius curves:

- **Perimeter Frames & Bento Boundaries:** Unrounded (`0px`), creating a sharp editorial grid structure that mimics newspaper and magazine panels.
- **Pills & Interactive Badges:** Softly rounded with large radii (`14px` for skill containers and `20px` for timeline badges).
- **Metric Highlight Blocks & Inner Cards:** Subtly rounded (`8px` to `12px`) to distinguish internal content chunks from the rigid structural canvas.
- **Rotational Dynamic:** Scrapbook elements feature static counter-rotations (`-2deg` to `-7deg` for script notes, `+3.5deg` for polaroid cards).

## Components

### Bento Grid Panels
- **Container:** Bordered with `1.5px solid rgba(35, 32, 30, 0.14)`. Zero border radius.
- **Backgrounds:** Alternates rhythmically across `--bg-canvas`, `--bg-sand`, `--bg-blush`, and `--ink-charcoal` for high visual pacing.

### Polaroid Picture Frames
- **Container:** Pure white card (`#FFFFFF`) padding: `12px 12px 34px 12px` (creating an exaggerated physical bottom frame).
- **Border:** `1px solid rgba(0, 0, 0, 0.06)`.
- **Shadow:** `--shadow-polaroid` (`0 14px 30px -10px rgba(35, 32, 30, 0.16)`).
- **Transform:** Natural state rotated `+3.5deg`. On hover, smoothly transitions to `rotate(0deg) scale(1.02)` using transition `0.35s cubic-bezier(0.25, 1, 0.5, 1)`.

### Skill & Taxonomic Pills
- **Container:** Filled with `--bg-blush` or `--bg-card-white`, `border-radius: 14px`, internal padding `12px 16px`.
- **Content:** Monoline SVG icon + bold uppercase text (`Plus Jakarta Sans`, 12px, weight 700), separated by a `14px` gap.

### Stat / Metric Highlight Boxes
- **Container:** Translucent surface `rgba(255, 255, 255, 0.65)`, `border-radius: 8px`, padding `12px 10px`.
- **Figure:** `22px` bold monospace or display weight.
- **Label:** `10px` uppercase label (`Plus Jakarta Sans`), tracked out (`0.14em`).

### Contact & Checklist Rows
- **Container:** Dark ink surface (`#23201E`) with crisp hairline borders (`rgba(246, 243, 238, 0.12)`).
- **Item Interaction:** Hovering over links prompts smooth left-to-right underline accent expansions and color transitions to `--bg-canvas`.
- **Badge Buttons:** Circular social actions (`38px` diameter, `50%` radius) that shift into `--accent` (`#4F6D8A`) with an upward `-3px` elevation on hover.
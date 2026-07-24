---
name: Titan Industrial Framework
colors:
  surface: '#101416'
  surface-dim: '#101416'
  surface-bright: '#363a3c'
  surface-container-lowest: '#0b0f11'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2d'
  surface-container-highest: '#323538'
  on-surface: '#e0e3e6'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e0e3e6'
  inverse-on-surface: '#2d3133'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#ffb693'
  on-secondary: '#561f00'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#00dbe9'
  on-tertiary: '#00363a'
  tertiary-container: '#001d1f'
  on-tertiary-container: '#009099'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#101416'
  on-background: '#e0e3e6'
  surface-variant: '#323538'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
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
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The design system for PT. TRUST ANUGRAH PERSADA is anchored in the concept of **"Futuristic Reliability."** It moves away from legacy aesthetics into a high-performance, industrial-grade interface that reflects the scale and precision of modern construction engineering. 

The visual language utilizes a **Modern-Industrial** style, characterized by:
- **Structural Integrity:** Heavy use of grid systems and geometric precision.
- **Glassmorphism:** Strategic use of frosted glass panels to provide depth without losing the connection to high-scale environmental background imagery.
- **Materiality:** Incorporating textures that evoke steel, brushed aluminum, and reinforced concrete.
- **Kinetic Energy:** High-contrast accents that guide the eye toward critical actions and machine specifications.

The target audience is B2B stakeholders, project managers, and civil engineers who require data clarity paired with a sense of authoritative power.

## Colors

The palette is designed for a high-contrast dark mode environment to reduce glare for field operations while maintaining a premium, "2026 tech" feel.

- **Deep Navy (#0A192F):** The foundation. Represents stability, depth, and the "Trust" in the brand name.
- **Safety Orange (#FF6B00):** The primary accent. Used for critical CTA buttons, warning states, and high-visibility markers, mirroring construction site safety standards.
- **Electric Blue (#00F0FF):** The secondary accent. Used for technical data visualizations, active status indicators, and glassmorphic borders.
- **Slate Gray (#334155):** Utilized for secondary surfaces, UI borders, and structural elements.
- **Pure White & Neutral (#F2F4F7):** Reserved exclusively for high-readability body text and iconography.

## Typography

The typography strategy emphasizes clarity and technical precision.

1.  **Hanken Grotesk (Headlines):** A sharp, contemporary grotesque that feels engineered and precise. Use "ExtraBold" for section headers to create an imposing visual hierarchy.
2.  **Inter (Body):** Selected for its exceptional legibility at all sizes, especially on digital displays in varied lighting conditions.
3.  **JetBrains Mono (Technical Labels):** Used for equipment specifications (e.g., "Max Load: 800kg"). The monospaced nature evokes a sense of diagnostic data and engineering blueprints.

All display text should utilize a slightly tightened letter-spacing to enhance the "bold industrial" look.

## Layout & Spacing

The layout utilizes a **12-column rigid grid** to echo the structural beams used in construction. 

- **Fluidity:** The grid is fluid between breakpoints but capped at 1440px to maintain the "cinematic" composition of large equipment imagery.
- **Section Gaps:** Deep vertical spacing (128px) is used to separate high-level concepts, preventing the UI from feeling cluttered.
- **The "Safety Margin":** Content is consistently inset with generous margins (64px on desktop) to ensure the interface feels "framed" and intentional.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a 4-column layout. Technical cards and specifications switch from side-by-side to vertical stacks for thumb-optimized scrolling.

## Elevation & Depth

This design system eschews traditional soft shadows for **Tonal Layering and Glassmorphism.**

1.  **Level 0 (Background):** High-resolution, desaturated imagery of cranes and machinery with a dark navy overlay.
2.  **Level 1 (The Deck):** Semi-transparent glass panels (Background Blur: 20px, Opacity: 40% Navy).
3.  **Level 2 (Active Elements):** Solid Slate Gray surfaces for high-interaction areas.
4.  **Borders:** Instead of shadows, depth is created with 1px semi-transparent "Light Strokes" on the top and left edges of panels to simulate a physical light source hitting a metallic edge.
5.  **Glows:** Primary elements (Orange) utilize a subtle outer glow (0px 0px 15px) rather than a shadow, suggesting the element is "powered on."

## Shapes

To maintain the industrial and "built" aesthetic, the shape language is **geometric and precise.**

- **Corner Radii:** Strictly limited to **0.25rem (4px)**. This "Soft" setting provides just enough refinement to feel modern without losing the "hard-hat" industrial edge.
- **Interactive States:** Buttons and input fields use sharp, angular corners to reinforce the sense of reliability and strength.
- **Technical Insets:** Use 45-degree chamfered corners for special status chips or technical callouts to mimic the look of machined metal parts.

## Components

### Buttons
- **Primary:** Solid Safety Orange with black text. On hover, a subtle inner glow effect.
- **Secondary:** Ghost style with an Electric Blue border and text.
- **Technical:** Small, monospaced text buttons for downloading "Technical Data (PDF)."

### Cards & Panels
- All cards must use the **Glassmorphism** effect. 
- Headers within cards should have a 1px Slate Gray bottom border to separate the title from content.

### Input Fields
- Dark Navy background (solid) with a 1px Slate Gray border. 
- Focus state: Border transitions to Electric Blue with a subtle glow.

### Chips & Badges
- Use JetBrains Mono for text.
- For status (e.g., "In Stock", "On Site"), use a small solid circle of color next to the text rather than a full-pilled background.

### Imagery
- Large-scale photography should feature high-contrast, slightly desaturated tones. 
- Use "Technical Overlays" — thin grid lines or coordinate markings — on top of images to enhance the "Futuristic Construction" vibe.

### Lists
- Equipment lists should be presented in "Spec-Sheet" style rows with high-contrast alternating backgrounds for readability.
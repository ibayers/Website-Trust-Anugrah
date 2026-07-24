# PT Trust Anugrah — Next.js Static Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert 12 approved HTML/CSS page designs into a single Next.js static-export site for PT Trust Anugrah, with every content slot wired to source-verified data from the legacy backup.

**Architecture:** Next.js 15 App Router + TypeScript + Tailwind v3, exported as fully static HTML via `output: 'export'`. No backend, no database, no forms — leads go through `wa.me` and `mailto:` only. Content lives in typed TS data modules under `src/content/` so every string on the site is traceable to the PRD source-of-truth file. Design tokens (colors, type, spacing, radii) are extracted once into `tailwind.config.ts` from `titan_industrial_framework/DESIGN.md`.

**Tech Stack:**
- Next.js 15 (App Router, `output: 'export'`)
- React 18 + TypeScript 5
- Tailwind CSS v3.4 (JS config — matches the design HTML's v3-style inline config)
- `next/font` for Inter, Hanken Grotesk, JetBrains Mono
- Material Symbols (icon font)
- Vitest (unit tests on contact helpers — the only real logic in an otherwise static site)
- Playwright (optional visual regression against each design's `screen.png`)

**Source artifacts** (copied into project under `_archive/`, gitignored):
- Design HTML: `_archive/design/<page>/code.html`
- Design tokens: `_archive/design/titan_industrial_framework/DESIGN.md`
- Legacy content: `_archive/legacy-html/*.html`
- Images: `_archive/images/` (394 photos)
- Spec ZIPs: `_archive/specs/*.zip` (MG5023, MG6015, MG6036, MG7030, passenger lift)
- PRD: `docs/superpowers/specs/2026-07-24-pt-trust-anugrah-content-mapping.md`

Project root: `/home/bryancarlos/Documents/VsCode/Projek Bapak Rifqi/PT Trust Anugrah/`

---

## File Structure

Project root: `/home/bryancarlos/Documents/VsCode/Projek Bapak Rifqi/PT Trust Anugrah/`

```
PT Trust Anugrah/
├── docs/                                 ← already exists (specs + plans)
├── package.json
├── tsconfig.json
├── next.config.mjs                       ← output: 'export'
├── tailwind.config.ts                    ← design tokens from DESIGN.md
├── postcss.config.mjs
├── vitest.config.ts
├── playwright.config.ts                  ← optional visual regression
├── .gitignore
├── README.md
├── public/
│   ├── images/                           ← curated backup photos (Task 14)
│   ├── specs/                            ← extracted PDF specs (Task 14)
│   └── favicon.ico
└── src/
    ├── app/
    │   ├── layout.tsx                    ← root layout, fonts, Header/Footer
    │   ├── globals.css                   ← token CSS vars, base styles
    │   ├── page.tsx                      ← Home
    │   ├── about/page.tsx
    │   ├── services/page.tsx
    │   ├── tower-crane/page.tsx
    │   ├── passenger-hoist/page.tsx
    │   ├── material-lift/page.tsx
    │   ├── manual-crane/page.tsx
    │   ├── genset/page.tsx
    │   ├── parts/page.tsx
    │   ├── gallery/page.tsx
    │   ├── crew/page.tsx                 ← (TBD content — stub for now)
    │   ├── sell/page.tsx                 ← (TBD content — stub for now)
    │   ├── contact/page.tsx
    │   ├── sitemap.ts
    │   └── robots.ts
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   └── PageShell.tsx             ← consistent page wrapper
    │   ├── ui/
    │   │   ├── Button.tsx                ← primary/secondary/technical variants
    │   │   ├── GlassCard.tsx             ← glassmorphism panel primitive
    │   │   ├── SpecRow.tsx               ← spec-sheet alternating row
    │   │   ├── SectionHeading.tsx
    │   │   ├── StatCounter.tsx           ← with guard against fabricated stats
    │   │   └── ContactCTA.tsx            ← wa.me + mailto button pair
    │   └── content/
    │       └── ContactInfo.tsx           ← address/email/phone block
    ├── content/                          ← typed, source-verified data
    │   ├── company.ts                    ← §3 identity facts
    │   ├── services.ts                   ← 7 services from Home.html L125-134
    │   ├── towerCrane.ts                 ← 8 TC types + specs + capabilities
    │   ├── passengerHoist.ts             ← 6 capabilities
    │   ├── materialLift.ts               ← description (NO specs)
    │   ├── manualCrane.ts                ← use case
    │   ├── genset.ts                     ← 9 specs + brands + power range
    │   ├── parts.ts                      ← parts list
    │   ├── gallery.ts                    ← image list + categories
    │   ├── nav.ts                        ← nav items
    │   └── contact.ts                    ← email, phone (TBD-gated), address
    ├── lib/
    │   ├── contact.test.ts               ← unit tests for link helpers
    │   └── contact.ts                    ← wa.me + mailto formatters
    └── types/
        └── content.ts                    ← shared TS types for content modules
```

**Responsibility boundaries:**
- `src/content/*.ts` — single source of truth for all text/data. Pages import from here; no inline string literals in JSX. This enforces the PRD anti-hallucination rule at the type level.
- `src/components/ui/*` — stateless primitives, design-system aware.
- `src/components/layout/*` — site chrome shared across pages.
- `src/app/*/page.tsx` — page composition only; pull from `content/` + `components/`.

---

## Task 1: Initialize Project & Git

**Files:**
- Create: `.gitignore`, `README.md`

- [ ] **Step 1: Initialize git in project root**

```bash
cd "/home/bryancarlos/Documents/VsCode/Projek Bapak Rifqi/PT Trust Anugrah"
git init -b main
```

- [ ] **Step 2: Create `.gitignore`**

```gitignore
# deps
node_modules/
.pnp
.pnp.js

# next
.next/
out/
build/
*.tsbuildinfo

# env
.env
.env.local
.env*.local

# misc
.DS_Store
*.pem
.vscode/
.idea/

# debug
npm-error.log*
yarn-debug.log*
yarn-error.log*

# playwright
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
```

- [ ] **Step 3: Create placeholder `README.md`**

````markdown
# PT Trust Anugrah — Website

Next.js static-export site for PT. TRUST ANUGRAH PERSADA.

## Development

```bash
pnpm install
pnpm dev
```

## Build (static export)

```bash
pnpm build
# outputs to ./out/
```

## Content source of truth

All company facts live in `src/content/*.ts`. See `docs/superpowers/specs/2026-07-24-pt-trust-anugrah-content-mapping.md` for provenance.
````

- [ ] **Step 4: Initial commit**

```bash
git add .gitignore README.md docs/
git commit -m "chore: initialize PT Trust Anugrah Next.js project workspace"
```

---

## Task 2: Scaffold Next.js + TypeScript + Tailwind

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

- [ ] **Step 1: Create `package.json` with exact dependencies**

```json
{
  "name": "pt-trust-anugrah",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "serve:static": "npx serve out"
  },
  "dependencies": {
    "next": "15.1.6",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/node": "20.17.12",
    "@types/react": "18.3.18",
    "@types/react-dom": "18.3.5",
    "autoprefixer": "10.4.20",
    "postcss": "8.5.1",
    "tailwindcss": "3.4.17",
    "typescript": "5.7.3",
    "vitest": "2.3.0",
    "@vitejs/plugin-react": "4.3.4",
    "jsdom": "25.0.1"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create `next.config.mjs` with static export**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
```

`trailingSlash: true` makes static hosting (cPanel) reliably resolve directory routes.

- [ ] **Step 4: Create `postcss.config.mjs`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 5: Create minimal placeholder `src/app/page.tsx`**

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface p-16">
      <h1 className="font-headline text-4xl">PT. TRUST ANUGRAH PERSADA</h1>
      <p>Scaffold pending — Task 3 ports the design system.</p>
    </main>
  );
}
```

- [ ] **Step 6: Create minimal placeholder `src/app/layout.tsx`**

```tsx
import './globals.css';

export const metadata = {
  title: 'PT. TRUST ANUGRAH PERSADA',
  description: 'Tower crane, hoist, material lift & genset rental, service, and parts — experienced since 1985.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Create minimal placeholder `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 8: Install dependencies and verify dev server boots**

```bash
pnpm install
pnpm dev
# in another terminal: curl -s http://localhost:3000 | head -20
# expected: HTML containing "PT. TRUST ANUGRAH PERSADA"
```

- [ ] **Step 9: Commit**

```bash
git add package.json pnpm-lock.yaml tsconfig.json next.config.mjs postcss.config.mjs src/
git commit -m "feat: scaffold Next.js 15 + TypeScript + Tailwind v3 with static export"
```

---

## Task 3: Port Design System to Tailwind Config

**Files:**
- Create: `tailwind.config.ts`, rewrite `src/app/globals.css`

- [ ] **Step 1: Create `tailwind.config.ts` with exact tokens from `DESIGN.md`**

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surface scale (dark-mode-first)
        surface: '#101416',
        'surface-dim': '#101416',
        'surface-bright': '#363a3c',
        'surface-container-lowest': '#0b0f11',
        'surface-container-low': '#191c1e',
        'surface-container': '#1d2022',
        'surface-container-high': '#272a2d',
        'surface-container-highest': '#323538',
        'surface-variant': '#323538',
        'on-surface': '#e0e3e6',
        'on-surface-variant': '#c5c6cd',
        'inverse-surface': '#e0e3e6',
        'inverse-on-surface': '#2d3133',
        outline: '#8f9097',
        'outline-variant': '#44474d',
        // Brand
        primary: '#b9c7e4',
        'primary-container': '#0a192f',
        'on-primary': '#233148',
        'on-primary-container': '#74829d',
        'primary-fixed': '#d6e3ff',
        'primary-fixed-dim': '#b9c7e4',
        'on-primary-fixed': '#0d1c32',
        'on-primary-fixed-variant': '#39475f',
        'inverse-primary': '#515f78',
        // Safety Orange (CTA)
        secondary: '#ffb693',
        'secondary-container': '#fe6b00',
        'on-secondary': '#561f00',
        'on-secondary-container': '#572000',
        'secondary-fixed': '#ffdbcc',
        'secondary-fixed-dim': '#ffb693',
        'on-secondary-fixed': '#351000',
        'on-secondary-fixed-variant': '#7a3000',
        // Electric Blue (technical accents)
        tertiary: '#00dbe9',
        'tertiary-container': '#001d1f',
        'on-tertiary': '#00363a',
        'on-tertiary-container': '#009099',
        'tertiary-fixed': '#7df4ff',
        'tertiary-fixed-dim': '#00dbe9',
        'on-tertiary-fixed': '#002022',
        'on-tertiary-fixed-variant': '#004f54',
        // Error
        error: '#ffb4ab',
        'error-container': '#93000a',
        'on-error': '#690005',
        'on-error-container': '#ffdad6',
        // Background
        background: '#101416',
        'on-background': '#e0e3e6',
        'surface-tint': '#b9c7e4',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        full: '9999px',
      },
      spacing: {
        unit: '8px',
        gutter: '24px',
        'margin-mobile': '16px',
        'margin-desktop': '64px',
        'container-max': '1440px',
        'section-gap': '128px',
      },
      maxWidth: {
        container: '1440px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        headline: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        technical: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '80px', fontWeight: '800', letterSpacing: '-0.02em' }],
        'headline-lg': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-lg-mobile': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-technical': ['14px', { lineHeight: '20px', fontWeight: '500', letterSpacing: '0.05em' }],
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        glow: '0 0 15px rgba(254, 107, 0, 0.4)',
        'glow-blue': '0 0 15px rgba(0, 219, 233, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Rewrite `src/app/globals.css` with base styles + glassmorphism utilities**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    color-scheme: dark;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-surface text-on-surface font-body antialiased;
    background-image:
      radial-gradient(circle at 20% 20%, rgba(10, 25, 47, 0.6) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0, 219, 233, 0.05) 0%, transparent 50%);
    background-attachment: fixed;
  }

  ::selection {
    @apply bg-secondary-container text-on-secondary-container;
  }
}

@layer components {
  .glass-panel {
    @apply bg-surface-container/40 backdrop-blur-glass border border-outline-variant/30;
    border-top-color: rgba(255, 255, 255, 0.08);
    border-left-color: rgba(255, 255, 255, 0.05);
  }

  .light-stroke {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
  }

  .section {
    @apply mx-auto w-full max-w-container px-margin-mobile md:px-margin-desktop;
  }

  .spec-row {
    @apply grid grid-cols-[auto_1fr] gap-4 px-4 py-3 font-mono text-label-technical;
  }
  .spec-row:nth-child(even) {
    @apply bg-surface-container-low;
  }

  .technical-overlay {
    background-image:
      linear-gradient(rgba(0, 219, 233, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 219, 233, 0.06) 1px, transparent 1px);
    background-size: 48px 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Verify Tailwind picks up tokens**

```bash
pnpm dev
# edit src/app/page.tsx to use bg-secondary-container, text-tertiary, font-headline
# confirm visual: orange button, blue text, Hanken Grotesk headline (fonts wire in Task 4)
```

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts src/app/globals.css src/app/page.tsx
git commit -m "feat: port Titan Industrial design tokens to Tailwind config"
```

---

## Task 4: Wire Fonts & Root Layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace `src/app/layout.tsx` with `next/font` wiring**

```tsx
import './globals.css';
import { Inter, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'PT. TRUST ANUGRAH PERSADA — Your Trusty Partners',
    template: '%s | PT. TRUST ANUGRAH PERSADA',
  },
  description:
    'Tower crane, passenger hoist, material lift & generator set rental, service, parts. Experienced since 1985. Safety is Number 1!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify fonts load**

```bash
pnpm dev
# open http://localhost:3000
# DevTools → Network → filter "font": should see Inter, Hanken Grotesk, JetBrains Mono woff2
```

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: wire next/font for Inter, Hanken Grotesk, JetBrains Mono"
```

---

## Task 5: Content Module — Company Identity & Contact Helpers (TDD)

**Why TDD here:** the `lib/contact.ts` helpers are the only real logic in an otherwise static site — they format `wa.me` and `mailto` URLs and gate display of TBD content. Testing them locks the PRD §7 gating rule ("don't ship TBD content") at the type level.

**Files:**
- Create: `src/types/content.ts`, `src/content/company.ts`, `src/content/contact.ts`, `src/lib/contact.ts`, `src/lib/contact.test.ts`, `vitest.config.ts`

- [ ] **Step 1: Create `vitest.config.ts`**

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

- [ ] **Step 2: Create `src/types/content.ts`**

```ts
export type Verified<T> = { value: T; source: string };
export type Unconfirmed<T> = { value: T; __brand: 'unconfirmed' };
export type TBD = { __brand: 'tbd'; reason: string };

export type ContentSlot<T> = Verified<T> | Unconfirmed<T> | TBD;
// Fabricated is intentionally excluded — TS will reject it at the call site.
// This is the anti-hallucination gate enforced at compile time.

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  source: string;
}

export interface SpecItem {
  label: string;
  value: string;
  source: string;
}
```

- [ ] **Step 3: Write the failing tests for `lib/contact.ts`**

Create `src/lib/contact.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { buildWhatsAppLink, buildMailtoLink, shouldDisplay } from './contact';

describe('buildWhatsAppLink', () => {
  it('formats a wa.me link from a digits-only number', () => {
    expect(buildWhatsAppLink('6281234567890')).toBe('https://wa.me/6281234567890');
  });

  it('strips non-digits (spaces, dashes, plus)', () => {
    expect(buildWhatsAppLink('+62 812-3456-7890')).toBe('https://wa.me/6281234567890');
  });

  it('returns null for empty input (TBD number must not render a broken link)', () => {
    expect(buildWhatsAppLink('')).toBeNull();
    expect(buildWhatsAppLink(null as unknown as string)).toBeNull();
  });
});

describe('buildMailtoLink', () => {
  it('formats a mailto link with subject', () => {
    expect(buildMailtoLink('cs@pt-trustap.com', 'Inquiry')).toBe(
      'mailto:cs@pt-trustap.com?subject=Inquiry'
    );
  });

  it('URL-encodes the subject', () => {
    expect(buildMailtoLink('cs@pt-trustap.com', 'Tower Crane Rental & Service')).toBe(
      'mailto:cs@pt-trustap.com?subject=Tower%20Crane%20Rental%20%26%20Service'
    );
  });
});

describe('shouldDisplay', () => {
  it('returns true for verified content', () => {
    expect(shouldDisplay({ value: 'cs@pt-trustap.com', source: 'Contact_Us.html' })).toBe(true);
  });

  it('returns false for TBD (gates rendering of unresolved §7 items)', () => {
    expect(shouldDisplay({ __brand: 'tbd', reason: 'WhatsApp number pending' })).toBe(false);
  });

  it('returns false for unconfirmed content (client must sign off first)', () => {
    expect(shouldDisplay({ value: '021-87702337', __brand: 'unconfirmed' })).toBe(false);
  });
});
```

- [ ] **Step 4: Run tests to verify they FAIL**

```bash
pnpm test
# expected: FAIL — Cannot find module './contact'
```

- [ ] **Step 5: Implement `src/lib/contact.ts` to make tests pass**

```ts
import type { ContentSlot } from '@/types/content';

/**
 * Build a https://wa.me/<number> deep link.
 * Returns null for empty/missing input — caller MUST NOT render the link when null.
 * This guards against shipping a broken WhatsApp button while the client's number is TBD.
 */
export function buildWhatsAppLink(rawNumber: string | null | undefined): string | null {
  if (!rawNumber) return null;
  const digits = rawNumber.replace(/[^\d]/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}

/**
 * Build a mailto: link with an optional subject.
 */
export function buildMailtoLink(email: string, subject?: string): string {
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

/**
 * The PRD §7 gate: only Verified content renders. TBD and Unconfirmed slots
 * must be omitted from the page. This function centralizes that rule so a
 * page author cannot accidentally ship a TBD value.
 */
export function shouldDisplay<T>(slot: ContentSlot<T>): boolean {
  if ('__brand' in slot) return false;
  return true;
}

/**
 * Unwrap a ContentSlot to its value, or null if not displayable.
 */
export function unwrap<T>(slot: ContentSlot<T>): T | null {
  return shouldDisplay(slot) ? (slot as { value: T }).value : null;
}
```

- [ ] **Step 6: Run tests to verify they PASS**

```bash
pnpm test
# expected: PASS (5 tests)
```

- [ ] **Step 7: Create `src/content/company.ts` (verified identity facts from PRD §3)**

```ts
export const company = {
  legalName: 'PT. TRUST ANUGRAH PERSADA',
  tagline: 'Your Trusty Partners',
  motto: 'Safety is Number 1!',

  founding: {
    experiencedSinceYear: 1985,
    cvEstablished: 'October 9, 1993',
    ptIncorporated: 'October 13, 1998',
    narrative:
      'Experienced since 1985. CV established October 9, 1993. Incorporated as PT on October 13, 1998.',
    source: 'index.html L107; Gallery.html',
  },

  businessDescription:
    'PT. TRUST ANUGRAH PERSADA is engaged in equipment services, construction services, installation services, mechanical and suppliers.',
  businessSource: 'Gallery.html',

  coreJobDescription: [
    'Rental, service, maintenance: tower crane, passenger hoist, material lift, generator set',
    'Supply all parts such as slewing ring, joystick, wire rope etc',
    'Build & rebuild part',
    'Troubleshooting',
  ],
  coreJobSource: 'Home.html L125-134',
} as const;
```

- [ ] **Step 8: Create `src/content/contact.ts`**

```ts
import type { Verified, TBD } from '@/types/content';

export const contact = {
  email: {
    value: 'cs@pt-trustap.com',
    source: 'Contact_Us.html',
  } satisfies Verified<string>,

  // ⚠️ PRD §7 Q2: confirm still active before display
  phone: {
    value: '021-87702337',
    __brand: 'unconfirmed',
  } as const,

  // ⚠️ PRD §7 Q3: confirm fax still in use; default to hide
  fax: {
    value: '021-8700119',
    __brand: 'unconfirmed',
  } as const,

  address: {
    street: 'Jl. Kelapa Dua Wetan No.1',
    // ⚠️ PRD §7 Q4: full address (city, postal) TBD
    city: { __brand: 'tbd', reason: 'City/postal not in backup source' } as TBD,
  },

  // ⚠️ PRD §7 Q1: WhatsApp number — primary CTA blocker
  whatsapp: {
    __brand: 'tbd',
    reason: 'Client to supply WhatsApp business number',
  } as TBD,

  operationalHours: {
    __brand: 'tbd',
    reason: 'Not in backup source',
  } as TBD,
} as const;
```

- [ ] **Step 9: Commit**

```bash
git add vitest.config.ts src/types/content.ts src/lib/contact.ts src/lib/contact.test.ts src/content/company.ts src/content/contact.ts
git commit -m "feat: add content types, contact helpers with tests, verified company/contact data"
```

---

## Task 6: UI Primitives — Button, GlassCard, SpecRow, SectionHeading, StatCounter, ContactCTA

**Files:**
- Create: `src/components/ui/Button.tsx`, `src/components/ui/GlassCard.tsx`, `src/components/ui/SpecRow.tsx`, `src/components/ui/SectionHeading.tsx`, `src/components/ui/StatCounter.tsx`, `src/components/ui/ContactCTA.tsx`

- [ ] **Step 1: Create `src/components/ui/Button.tsx`**

```tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'technical';
type Size = 'md' | 'lg';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-secondary-container text-on-secondary-container hover:shadow-glow focus-visible:shadow-glow',
  secondary:
    'border border-tertiary text-tertiary hover:bg-tertiary/10 focus-visible:bg-tertiary/10',
  technical:
    'font-mono text-label-technical text-tertiary border border-tertiary/40 hover:border-tertiary focus-visible:border-tertiary',
};

const SIZES: Record<Size, string> = {
  md: 'px-5 py-2.5 text-body-md',
  lg: 'px-7 py-3.5 text-body-lg',
};

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-headline font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Create `src/components/ui/GlassCard.tsx`**

```tsx
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export function GlassCard({ children, className = '', as: Tag = 'div' }: GlassCardProps) {
  return <Tag className={`glass-panel rounded-lg p-6 ${className}`}>{children}</Tag>;
}
```

- [ ] **Step 3: Create `src/components/ui/SpecRow.tsx`**

```tsx
import type { SpecItem } from '@/types/content';

export function SpecRow({ label, value }: SpecItem) {
  return (
    <div className="spec-row">
      <dt className="text-tertiary uppercase">{label}</dt>
      <dd className="text-on-surface">{value}</dd>
    </div>
  );
}

export function SpecList({ items }: { items: SpecItem[] }) {
  return (
    <dl className="divide-y divide-outline-variant/20 rounded-lg border border-outline-variant/30 overflow-hidden">
      {items.map((item) => (
        <SpecRow key={item.label} {...item} />
      ))}
    </dl>
  );
}
```

- [ ] **Step 4: Create `src/components/ui/SectionHeading.tsx`**

```tsx
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="font-mono text-label-technical text-tertiary uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className="font-headline text-headline-lg tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-body-lg text-on-surface-variant">{subtitle}</p>}
    </div>
  );
}
```

- [ ] **Step 5: Create `src/components/ui/StatCounter.tsx` (with PRD §4 rule-4 guard)**

```tsx
import { shouldDisplay } from '@/lib/contact';
import type { ContentSlot } from '@/types/content';

interface StatCounterProps {
  label: string;
  value: ContentSlot<number | string>;
}

/**
 * PRD §4 rule 4: stats counters are all fabricated in the design.
 * This component renders nothing for TBD/Unconfirmed values —
 * the page simply omits the slot rather than shipping a fabricated number.
 */
export function StatCounter({ label, value }: StatCounterProps) {
  if (!shouldDisplay(value)) return null;
  const display = 'value' in value ? value.value : null;
  if (display === null) return null;

  return (
    <div className="glass-panel rounded-lg p-6 text-center">
      <div className="font-headline text-headline-lg text-tertiary">{display}</div>
      <div className="mt-2 font-mono text-label-technical text-on-surface-variant uppercase">
        {label}
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Create `src/components/ui/ContactCTA.tsx`**

```tsx
import { Button } from './Button';
import { contact } from '@/content/contact';
import { buildMailtoLink } from '@/lib/contact';
import { unwrap } from '@/lib/contact';

interface ContactCTAProps {
  size?: 'md' | 'lg';
  subject?: string;
  whatsappText?: string;
}

export function ContactCTA({ size = 'lg', subject = 'Inquiry', whatsappText }: ContactCTAProps) {
  // WhatsApp number is TBD until the client supplies it (PRD §7 Q1).
  // Until then, buildWhatsAppLink(null) returns null and the WA button is omitted.
  // The day `contact.whatsapp` flips to Verified, this component auto-renders WA.
  const waNumber = unwrap(contact.whatsapp);
  const waLink = waNumber ? `https://wa.me/${waNumber.replace(/[^\d]/g, '')}` : null;
  const mailto = buildMailtoLink(contact.email.value, subject);

  return (
    <div className="flex flex-wrap gap-4">
      {waLink && (
        <Button href={waLink} external variant="primary" size={size}>
          <span className="material-symbols-outlined">chat</span>
          {whatsappText ?? 'Chat on WhatsApp'}
        </Button>
      )}
      <Button href={mailto} variant={waLink ? 'secondary' : 'primary'} size={size}>
        <span className="material-symbols-outlined">mail</span>
        Email Us
      </Button>
    </div>
  );
}
```

- [ ] **Step 7: Type-check & commit**

```bash
pnpm typecheck
# expected: no errors

git add src/components/ui/
git commit -m "feat: add Button, GlassCard, SpecRow, SectionHeading, StatCounter, ContactCTA primitives"
```

---

## Task 7: Layout Chrome — Header, Footer, PageShell

**Files:**
- Create: `src/content/nav.ts`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/PageShell.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create `src/content/nav.ts`**

```ts
import type { NavItem } from '@/types/content';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Tower Crane', href: '/tower-crane/' },
  { label: 'Passenger Hoist', href: '/passenger-hoist/' },
  { label: 'Material Lift', href: '/material-lift/' },
  { label: 'Manual Crane', href: '/manual-crane/' },
  { label: 'Genset', href: '/genset/' },
  { label: 'Parts', href: '/parts/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact/' },
];
```

- [ ] **Step 2: Create `src/components/layout/Header.tsx`**

```tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '@/content/nav';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-glass">
      <div className="section flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-headline text-headline-md tracking-tight">
          <span className="text-tertiary">PT.</span> TRUST ANUGRAH
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-label-technical text-tertiary border border-tertiary/40 rounded-md px-3 py-2"
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>

        <nav className="hidden md:flex md:items-center md:gap-1" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 font-mono text-label-technical text-on-surface-variant hover:text-tertiary uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-outline-variant/30 bg-surface-container"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-margin-mobile py-3 font-mono text-label-technical text-on-surface-variant border-b border-outline-variant/20"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Create `src/components/layout/Footer.tsx`**

```tsx
import Link from 'next/link';
import { company } from '@/content/company';
import { contact } from '@/content/contact';
import { navItems } from '@/content/nav';
import { buildMailtoLink, shouldDisplay } from '@/lib/contact';

export function Footer() {
  const mailto = buildMailtoLink(contact.email.value, 'Inquiry');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest mt-section-gap">
      <div className="section py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-headline text-headline-md">
            <span className="text-tertiary">PT.</span> TRUST ANUGRAH PERSADA
          </p>
          <p className="mt-2 font-mono text-label-technical text-on-surface-variant uppercase">
            {company.tagline} · {company.motto}
          </p>
          <p className="mt-4 max-w-md text-body-md text-on-surface-variant">
            {company.businessDescription}
          </p>
        </div>

        <div>
          <p className="font-mono text-label-technical text-tertiary uppercase mb-3">Navigate</p>
          <ul className="space-y-2">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-body-md text-on-surface-variant hover:text-tertiary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-label-technical text-tertiary uppercase mb-3">Contact</p>
          <ul className="space-y-2 text-body-md text-on-surface-variant">
            <li>
              <a href={mailto} className="hover:text-tertiary">
                {contact.email.value}
              </a>
            </li>
            {shouldDisplay(contact.phone) && <li>{contact.phone.value}</li>}
            <li>{contact.address.street}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-outline-variant/20">
        <div className="section py-6 flex flex-wrap justify-between gap-4">
          <p className="font-mono text-label-technical text-on-surface-variant">
            © {year} PT. TRUST ANUGRAH PERSADA. All rights reserved.
          </p>
          <p className="font-mono text-label-technical text-on-surface-variant">
            Experienced since {company.founding.experiencedSinceYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Create `src/components/layout/PageShell.tsx`**

```tsx
import type { ReactNode } from 'react';

interface PageShellProps {
  children: ReactNode;
  heroTitle: string;
  heroEyebrow?: string;
  heroImage?: string;
}

export function PageShell({ children, heroTitle, heroEyebrow, heroImage }: PageShellProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-outline-variant/30">
        <div
          className="absolute inset-0 bg-surface-container-lowest"
          aria-hidden
          style={
            heroImage
              ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35 }
              : undefined
          }
        />
        <div className="absolute inset-0 technical-overlay" aria-hidden />
        <div className="section relative py-24 md:py-32">
          {heroEyebrow && (
            <p className="font-mono text-label-technical text-tertiary uppercase mb-3">{heroEyebrow}</p>
          )}
          <h1 className="font-headline text-display-xl tracking-tight">{heroTitle}</h1>
        </div>
      </section>
      <main className="section py-section-gap">{children}</main>
    </>
  );
}
```

- [ ] **Step 5: Update `src/app/layout.tsx` to include Header/Footer and Material Symbols**

Replace the file with:

```tsx
import './globals.css';
import { Inter, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'PT. TRUST ANUGRAH PERSADA — Your Trusty Partners',
    template: '%s | PT. TRUST ANUGRAH PERSADA',
  },
  description:
    'Tower crane, passenger hoist, material lift & generator set rental, service, parts. Experienced since 1985. Safety is Number 1!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Verify visually**

```bash
pnpm dev
# open http://localhost:3000
# confirm: header with nav, footer with email + address, mobile menu toggle works
```

- [ ] **Step 7: Commit**

```bash
git add src/content/nav.ts src/components/layout/ src/app/layout.tsx
git commit -m "feat: add Header, Footer, PageShell layout chrome"
```

---

## Task 8: Home Page

**Files:**
- Modify: `src/app/page.tsx`
- Source design: `design_modern_contractor/home_modernized/code.html`
- PRD section: §5.1

- [ ] **Step 1: Read the design HTML for structure reference**

```bash
# Reference only — don't copy verbatim. Extract section composition.
head -200 "/home/bryancarlos/Documents/VsCode/Projek Bapak Rifqi/backup-6.9.2017_15-26-28_pttrus44/design_modern_contractor/home_modernized/code.html"
```

Note the sections: hero, stats strip, services preview, equipment showcase, founding narrative, CTA band.

- [ ] **Step 2: Replace `src/app/page.tsx`**

```tsx
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { Button } from '@/components/ui/Button';
import { company } from '@/content/company';
import { services } from '@/content/services';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 technical-overlay" aria-hidden />
        <div className="section relative py-32 md:py-48">
          <p className="font-mono text-label-technical text-tertiary uppercase mb-4">
            {company.tagline} · {company.motto}
          </p>
          <h1 className="font-headline text-display-xl tracking-tight max-w-4xl">
            Tower Crane, Hoist, Lift & Genset Specialists.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-on-surface-variant">
            Rental, service, parts, and troubleshooting for heavy construction equipment — experienced since {company.founding.experiencedSinceYear}.
          </p>
          <div className="mt-10">
            <ContactCTA subject="Equipment Inquiry" whatsappText="Get a Quote on WhatsApp" />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section py-section-gap">
        <SectionHeading
          eyebrow="What We Do"
          title="Four core capabilities, one contractor"
          subtitle={company.businessDescription}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((svc, i) => (
            <GlassCard key={svc.slug}>
              <p className="font-mono text-label-technical text-tertiary uppercase">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-headline text-headline-md">{svc.title}</h3>
              <p className="mt-2 text-body-md text-on-surface-variant">{svc.description}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/services/" variant="technical">View all services →</Button>
        </div>
      </section>

      {/* Founding narrative */}
      <section className="section py-section-gap">
        <GlassCard className="max-w-3xl">
          <p className="font-mono text-label-technical text-tertiary uppercase mb-3">Our Story</p>
          <p className="font-headline text-headline-md">{company.founding.narrative}</p>
          <p className="mt-4 text-body-md text-on-surface-variant">
            {company.businessDescription}
          </p>
        </GlassCard>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify visually**

```bash
pnpm dev
# open http://localhost:3000
# confirm: hero with headline + CTA, services preview grid, founding narrative
# confirm: WhatsApp button hidden (TBD), Email button visible
```

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: build Home page from home_modernized design + PRD §5.1"
```

---

## Task 9: Equipment Pages — Tower Crane, Passenger Hoist, Material Lift, Manual Crane, Genset

The same task pattern applies to each equipment page. Repeat these steps for each:

- `tower-crane` — design: `tower_crane_modernized/code.html`, content: `src/content/towerCrane.ts`, PRD §5.4
- `passenger-hoist` — design: `passenger_hoist_modernized/code.html`, content: `src/content/passengerHoist.ts`, PRD §5.5
- `material-lift` — design: `material_lift_modernized/code.html`, content: `src/content/materialLift.ts`, PRD §5.6
- `manual-crane` — design: `manual_crane_modernized/code.html`, content: `src/content/manualCrane.ts`, PRD §5.7
- `genset` — design: `genset_modernized/code.html`, content: `src/content/genset.ts`, PRD §5.8

**For each page, do:**

- [ ] **Step A: Create the content module in `src/content/<equipment>.ts`**

Pull every spec, capability, and description from the PRD-mapped source file (referenced by `[tc:n]`, `[hoist:n]`, etc.). Include a `source` field on each value.

Example for `src/content/towerCrane.ts`:

```ts
import type { SpecItem } from '@/types/content';

export const towerCrane = {
  source: 'Tower_Crane.html',
  rentalTypes: [
    'Potain FO23/B',
    'Potain H30/30',
    'Potain H3/36',
    'Raimondi ER180',
    'Jianglu JL120',
    'Jianglu JL150',
    'QT80',
    'Peinner',
  ],
  specs: [
    { label: 'Height', value: '20–60 m', source: 'Tower_Crane.html' },
    { label: 'Jib Length', value: '45–50 m', source: 'Tower_Crane.html' },
  ] satisfies SpecItem[],
  saleTypes: ['MG5023', 'MG6015', 'MG6036', 'MG7030'],
  saleSpecSheets: [
    { label: 'MG5023', href: '/specs/MG5023.pdf' },
    { label: 'MG6015', href: '/specs/MG6015.pdf' },
    { label: 'MG6036', href: '/specs/MG6036.pdf' },
    { label: 'MG7030', href: '/specs/MG7030.pdf' },
  ],
  // Paste each of the 10 capability strings verbatim from Tower_Crane.html.
  // Reference file: backup-6.9.2017_15-26-28_pttrus44/homedir/public_html/Tower_Crane.html
  capabilities: [
    // e.g. '<verbatim capability 1 from Tower_Crane.html>',
    // ...
  ],
} as const;
```

For Material Lift (`materialLift.ts`) and Manual Crane (`manualCrane.ts`), the `specs` array is empty — source has no specs. The page template below renders the spec section only when `specs.length > 0`.

- [ ] **Step B: Create the page at `src/app/<equipment>/page.tsx`**

Template (Tower Crane shown — swap imports/content/metadata per equipment):

```tsx
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SpecList } from '@/components/ui/SpecRow';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { towerCrane } from '@/content/towerCrane';

export const metadata = {
  title: 'Tower Crane — Rental, Service, Parts',
  description: 'Potain, Raimondi, Jianglu, QT80 tower crane rental and service. Height 20–60m, jib 45–50m. Sales: MG5023, MG6015, MG6036, MG7030.',
};

export default function TowerCranePage() {
  return (
    <PageShell
      heroEyebrow="Equipment"
      heroTitle="Tower Crane"
      heroImage="/images/tower-crane-hero.jpg"
    >
      <SectionHeading
        eyebrow="Rental Fleet"
        title={`${towerCrane.rentalTypes.length} verified models`}
        subtitle="Source: Tower_Crane.html (legacy backup)"
      />

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {towerCrane.rentalTypes.map((model) => (
          <GlassCard key={model} className="flex items-center justify-between">
            <span className="font-headline text-headline-md">{model}</span>
            <span className="font-mono text-label-technical text-tertiary">RENTAL</span>
          </GlassCard>
        ))}
      </div>

      {towerCrane.specs.length > 0 && (
        <section className="mt-16">
          <SectionHeading eyebrow="Specifications" title="Operating envelope" />
          <div className="mt-8 max-w-2xl">
            <SpecList items={towerCrane.specs} />
          </div>
        </section>
      )}

      {towerCrane.capabilities.length > 0 && (
        <section className="mt-16">
          <SectionHeading eyebrow="Capabilities" title="What we do with this fleet" />
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {towerCrane.capabilities.map((cap) => (
              <li key={cap}>
                <GlassCard className="h-full">
                  <p className="text-body-md">{cap}</p>
                </GlassCard>
              </li>
            ))}
          </ul>
        </section>
      )}

      {towerCrane.saleTypes.length > 0 && (
        <section className="mt-16">
          <SectionHeading eyebrow="For Sale" title="New & rebuilt units" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {towerCrane.saleSpecSheets.map((spec) => (
              <GlassCard key={spec.label} className="flex items-center justify-between">
                <span className="font-headline text-headline-md">{spec.label}</span>
                <a
                  href={spec.href}
                  className="font-mono text-label-technical text-tertiary border border-tertiary/40 rounded-md px-3 py-1.5 hover:border-tertiary"
                >
                  ↓ SPEC SHEET
                </a>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      <section className="mt-24">
        <GlassCard className="text-center">
          <h2 className="font-headline text-headline-lg">Need a tower crane on site?</h2>
          <p className="mt-3 text-body-lg text-on-surface-variant">Quote within 24 hours.</p>
          <div className="mt-6 flex justify-center">
            <ContactCTA subject="Tower Crane Inquiry" />
          </div>
        </GlassCard>
      </section>
    </PageShell>
  );
}
```

- [ ] **Step C: Visually verify**

```bash
pnpm dev
# open each equipment route, confirm: hero, fleet list, specs (where present),
# capabilities, sale section (TC only), CTA
```

- [ ] **Step D: Commit per page**

```bash
git add src/content/towerCrane.ts src/app/tower-crane/
git commit -m "feat: build Tower Crane page with verified fleet list and specs"
```

Repeat for passenger-hoist, material-lift, manual-crane, genset. One commit per page.

---

## Task 10: About Page

**Files:**
- Create: `src/app/about/page.tsx`
- Source design: `crew_professional_workforce/code.html` (TBD sections)
- PRD section: §5.2

- [ ] **Step 1: Create `src/app/about/page.tsx`**

```tsx
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { company } from '@/content/company';

export const metadata = {
  title: 'About',
  description: 'PT. TRUST ANUGRAH PERSADA — experienced since 1985. CV established 1993, incorporated as PT 1998.',
};

export default function AboutPage() {
  return (
    <PageShell heroEyebrow="About" heroTitle="Experienced since 1985">
      <section className="max-w-3xl">
        <SectionHeading eyebrow="Our Story" title={company.legalName} />
        <p className="mt-6 text-body-lg text-on-surface-variant">{company.founding.narrative}</p>
        <p className="mt-4 text-body-md text-on-surface-variant">{company.businessDescription}</p>
      </section>

      <section className="mt-20">
        <SectionHeading eyebrow="Mission" title="Safety is Number 1!" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {company.coreJobDescription.map((item, i) => (
            <GlassCard key={item} className="flex gap-4">
              <span className="font-mono text-label-technical text-tertiary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-body-md">{item}</p>
            </GlassCard>
          ))}
        </div>
        <p className="mt-6 font-mono text-label-technical text-on-surface-variant">
          Source: {company.coreJobSource}
        </p>
      </section>

      {/* Crew section intentionally omitted — PRD §7 Q12: team data TBD */}
    </PageShell>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/about/
git commit -m "feat: build About page with verified founding narrative"
```

---

## Task 11: Services, Parts, Gallery Pages

**Files:**
- Create: `src/content/services.ts`, `src/content/parts.ts`, `src/content/gallery.ts`
- Create: `src/app/services/page.tsx`, `src/app/parts/page.tsx`, `src/app/gallery/page.tsx`
- PRD sections: §5.3, §5.9, §5.10

- [ ] **Step 1: Create `src/content/services.ts` (7 services from Home.html L125-134)**

```ts
import type { ServiceItem } from '@/types/content';

export const services: ServiceItem[] = [
  {
    slug: 'tower-crane',
    title: 'Tower Crane',
    description: 'Rental, service, and maintenance. 8 verified models across Potain, Raimondi, Jianglu, QT80, Peinner.',
    source: 'Home.html L125-134',
  },
  {
    slug: 'passenger-hoist',
    title: 'Passenger Hoist',
    description: 'Rental up to 80–100 m height, service, and parts.',
    source: 'Home.html L125-134; Passenger_Hoist.html',
  },
  {
    slug: 'material-lift',
    title: 'Material Lift',
    description: 'Single and double configurations. Used during the finishing period.',
    source: 'Home.html L125-134; Material_Lift.html',
  },
  {
    slug: 'manual-crane',
    title: 'Manual Crane',
    description: 'Design, manufacture, and dismantling of tower cranes in difficult-access areas.',
    source: 'Home.html L125-134; Manual_Crane.html',
  },
  {
    slug: 'genset',
    title: 'Generator Set',
    description: '150–250 kVA rental. Brands: Mitsubishi, Nissan. 24-hour operator included.',
    source: 'Home.html L125-134; Genset.html',
  },
  {
    slug: 'parts-supply',
    title: 'Parts Supply',
    description: 'Slewing ring, joystick, wire rope, and all heavy-equipment parts.',
    source: 'Home.html L125-134',
  },
  {
    slug: 'build-rebuild',
    title: 'Build & Rebuild Parts',
    description: 'Manufacture and remanufacture of worn or obsolete components.',
    source: 'Home.html L125-134',
  },
];
```

- [ ] **Step 2: Create `src/content/parts.ts`**

```ts
export const parts = {
  source: 'Home.html L125-134',
  description: 'We supply all parts for the equipment we service — and the equipment we don\'t.',
  items: [
    'Slewing ring',
    'Joystick',
    'Wire rope',
    'Build & rebuild part capability on request',
  ],
} as const;
```

- [ ] **Step 3: Create `src/content/gallery.ts`**

```ts
export const gallery = {
  source: 'Gallery.html',
  description:
    'PT. TRUST ANUGRAH PERSADA engaged in: equipment services, construction services, installation services, mechanical and suppliers.',
  categories: ['Equipment Services', 'Construction Services', 'Installation Services', 'Mechanical & Suppliers'],
  // Image filenames populated in Task 14 after curation.
  images: [] as Array<{ src: string; caption: string; category: string }>,
};
```

- [ ] **Step 4: Create `src/app/services/page.tsx`**

```tsx
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { services } from '@/content/services';

export const metadata = {
  title: 'Services',
  description: 'Rental, service, parts, and troubleshooting for tower crane, hoist, lift, and genset.',
};

export default function ServicesPage() {
  return (
    <PageShell heroEyebrow="Capabilities" heroTitle="Services">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <GlassCard key={svc.slug}>
            <p className="font-mono text-label-technical text-tertiary uppercase">
              {String(i + 1).padStart(2, '0')}
            </p>
            <h2 className="mt-3 font-headline text-headline-md">{svc.title}</h2>
            <p className="mt-2 text-body-md text-on-surface-variant">{svc.description}</p>
            <p className="mt-4 font-mono text-label-technical text-outline">
              {svc.source}
            </p>
          </GlassCard>
        ))}
      </div>

      <section className="mt-24">
        <GlassCard className="text-center">
          <h2 className="font-headline text-headline-lg">Have a specific requirement?</h2>
          <div className="mt-6 flex justify-center">
            <ContactCTA subject="Service Inquiry" />
          </div>
        </GlassCard>
      </section>
    </PageShell>
  );
}
```

- [ ] **Step 5: Create `src/app/parts/page.tsx`**

```tsx
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactCTA } from '@/components/ui/ContactCTA';
import { parts } from '@/content/parts';

export const metadata = {
  title: 'Parts Supply',
  description: 'Slewing ring, joystick, wire rope, and all heavy-equipment parts. Build & rebuild capability.',
};

export default function PartsPage() {
  return (
    <PageShell heroEyebrow="Supply" heroTitle="Parts">
      <section className="max-w-3xl">
        <SectionHeading eyebrow="What we supply" title="Common parts" />
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {parts.items.map((item) => (
            <li key={item}>
              <GlassCard className="h-full">
                <p className="text-body-md">{item}</p>
              </GlassCard>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-label-technical text-on-surface-variant">Source: {parts.source}</p>
      </section>

      <section className="mt-24">
        <GlassCard className="text-center">
          <h2 className="font-headline text-headline-lg">Looking for a specific part?</h2>
          <div className="mt-6 flex justify-center">
            <ContactCTA subject="Parts Inquiry" />
          </div>
        </GlassCard>
      </section>
    </PageShell>
  );
}
```

- [ ] **Step 6: Create `src/app/gallery/page.tsx`**

```tsx
import { PageShell } from '@/components/layout/PageShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { gallery } from '@/content/gallery';

export const metadata = {
  title: 'Gallery',
  description: 'Equipment services, construction services, installation services, and mechanical supply.',
};

export default function GalleryPage() {
  return (
    <PageShell heroEyebrow="Portfolio" heroTitle="Gallery">
      <section className="max-w-3xl">
        <SectionHeading
          eyebrow="Scope"
          title="What we do"
          subtitle={gallery.description}
        />
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap gap-3">
          {gallery.categories.map((cat) => (
            <span
              key={cat}
              className="font-mono text-label-technical text-tertiary border border-tertiary/40 rounded-md px-3 py-1.5"
            >
              {cat.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      {gallery.images.length === 0 ? (
        <section className="mt-16">
          <div className="glass-panel rounded-lg p-12 text-center">
            <p className="font-mono text-label-technical text-on-surface-variant">
              IMAGE CURATION IN PROGRESS · 394 PHOTOS IN BACKUP
            </p>
          </div>
        </section>
      ) : (
        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {gallery.images.map((img) => (
            <figure key={img.src} className="glass-panel rounded-lg overflow-hidden">
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-4 py-3 font-mono text-label-technical text-on-surface-variant">
                {img.category.toUpperCase()} · {img.caption}
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      <p className="mt-12 font-mono text-label-technical text-on-surface-variant">
        Source: {gallery.source}
      </p>
    </PageShell>
  );
}
```

- [ ] **Step 7: Verify & commit**

```bash
pnpm dev
# visit /services/, /parts/, /gallery/

git add src/content/ src/app/services/ src/app/parts/ src/app/gallery/
git commit -m "feat: build Services, Parts, Gallery pages with verified content"
```

---

## Task 12: Contact Page

**Files:**
- Create: `src/components/content/ContactInfo.tsx`
- Create: `src/app/contact/page.tsx`
- PRD section: §5.11

- [ ] **Step 1: Create `src/components/content/ContactInfo.tsx`**

```tsx
import { contact } from '@/content/contact';
import { buildMailtoLink, buildWhatsAppLink, shouldDisplay, unwrap } from '@/lib/contact';

export function ContactInfo() {
  const mailto = buildMailtoLink(contact.email.value, 'Inquiry');
  const waNumber = unwrap(contact.whatsapp);
  const waLink = waNumber ? buildWhatsAppLink(waNumber) : null;
  const phone = shouldDisplay(contact.phone) ? contact.phone.value : null;
  const fax = shouldDisplay(contact.fax) ? contact.fax.value : null;

  return (
    <dl className="grid gap-6 md:grid-cols-2">
      <div>
        <dt className="font-mono text-label-technical text-tertiary uppercase">Email</dt>
        <dd className="mt-2 text-body-lg">
          <a href={mailto} className="hover:text-tertiary">{contact.email.value}</a>
        </dd>
      </div>

      {waLink && (
        <div>
          <dt className="font-mono text-label-technical text-tertiary uppercase">WhatsApp</dt>
          <dd className="mt-2 text-body-lg">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-tertiary">
              Chat with us
            </a>
          </dd>
        </div>
      )}

      {phone && (
        <div>
          <dt className="font-mono text-label-technical text-tertiary uppercase">Phone</dt>
          <dd className="mt-2 text-body-lg">{phone}</dd>
        </div>
      )}

      {fax && (
        <div>
          <dt className="font-mono text-label-technical text-tertiary uppercase">Fax</dt>
          <dd className="mt-2 text-body-lg">{fax}</dd>
        </div>
      )}

      <div className="md:col-span-2">
        <dt className="font-mono text-label-technical text-tertiary uppercase">Address</dt>
        <dd className="mt-2 text-body-lg">{contact.address.street}</dd>
      </div>
    </dl>
  );
}
```

- [ ] **Step 2: Create `src/app/contact/page.tsx`**

```tsx
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { ContactInfo } from '@/components/content/ContactInfo';
import { ContactCTA } from '@/components/ui/ContactCTA';

export const metadata = {
  title: 'Contact',
  description: 'Email cs@pt-trustap.com or message us on WhatsApp for tower crane, hoist, lift, and genset inquiries.',
};

export default function ContactPage() {
  return (
    <PageShell heroEyebrow="Get in touch" heroTitle="Contact">
      <GlassCard>
        <p className="font-mono text-label-technical text-tertiary uppercase mb-6">Direct contact</p>
        <ContactInfo />
      </GlassCard>

      <section className="mt-12">
        <GlassCard className="text-center">
          <h2 className="font-headline text-headline-lg">Send us a message</h2>
          <p className="mt-3 text-body-lg text-on-surface-variant">We reply within one business day.</p>
          <div className="mt-6 flex justify-center">
            <ContactCTA size="lg" subject="Inquiry from website" />
          </div>
        </GlassCard>
      </section>

      {/* PRD §5.11 rule: contact form intentionally removed — leads via WA/email only */}
    </PageShell>
  );
}
```

- [ ] **Step 3: Verify & commit**

```bash
pnpm dev
# visit /contact/
# confirm: Email visible, WhatsApp hidden (TBD), no form

git add src/components/content/ src/app/contact/
git commit -m "feat: build Contact page (no form — WA/email only per PRD §5.11)"
```

---

## Task 13: Stub Pages for Crew & Sell (TBD Content)

**Why:** the design folder has `crew_*` and `sell_*` designs, but PRD §7 flags crew data (Q12) and real sell inventory as TBD. Ship stub pages now so navigation doesn't 404; wire real content when client supplies.

**Files:**
- Create: `src/app/crew/page.tsx`, `src/app/sell/page.tsx`

- [ ] **Step 1: Create `src/app/crew/page.tsx` (stub)**

```tsx
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';

export const metadata = {
  title: 'Crew',
  description: 'Team profiles coming soon.',
};

export default function CrewPage() {
  return (
    <PageShell heroEyebrow="Coming soon" heroTitle="Crew">
      <GlassCard className="max-w-2xl">
        <p className="font-mono text-label-technical text-tertiary uppercase mb-3">
          PRD §7 Q12 — Pending
        </p>
        <p className="text-body-lg">
          Team profiles, certifications, and photos will be published here once verified.
        </p>
      </GlassCard>
    </PageShell>
  );
}
```

- [ ] **Step 2: Create `src/app/sell/page.tsx` (stub that points to TC sales section)**

```tsx
import { PageShell } from '@/components/layout/PageShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'For Sale',
  description: 'Tower crane models for sale: MG5023, MG6015, MG6036, MG7030.',
};

export default function SellPage() {
  return (
    <PageShell heroEyebrow="Sales" heroTitle="For Sale">
      <GlassCard className="max-w-2xl">
        <p className="text-body-lg">
          We currently offer four tower crane models for sale: MG5023, MG6015, MG6036, MG7030.
        </p>
        <p className="mt-4 text-body-md text-on-surface-variant">
          Detailed spec sheets available on the Tower Crane page.
        </p>
        <div className="mt-6">
          <Button href="/tower-crane/" variant="technical">View Tower Crane page →</Button>
        </div>
      </GlassCard>
    </PageShell>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/crew/ src/app/sell/
git commit -m "feat: stub Crew and Sell pages (TBD content per PRD §7)"
```

---

## Task 14: Image Curation & Spec Sheet Extraction

**Files:**
- Populate: `public/images/`, `public/specs/`
- Update: `src/content/gallery.ts`

- [ ] **Step 1: Curate 12–24 images from the 394-photo backup**

```bash
SRC="/home/bryancarlos/Documents/VsCode/Projek Bapak Rifqi/backup-6.9.2017_15-26-28_pttrus44/homedir/public_html/images"
DST="/home/bryancarlos/Documents/VsCode/Projek Bapak Rifqi/PT Trust Anugrah/public/images"
mkdir -p "$DST"

# List all images to pick from:
ls "$SRC" | head -50

# Manual selection: pick photos showing tower cranes, hoists, gensets, on-site work.
# Copy (not move) the chosen subset.
# Example placeholder set — REPLACE with verified picks during implementation:
# cp "$SRC/tower-crane-001.jpg" "$DST/tower-crane-hero.jpg"
# cp "$SRC/hoist-001.jpg" "$DST/passenger-hoist-hero.jpg"
```

**Selection rules:**
- Only photos depicting actual PT Trust Anugrah work — no stock.
- Diverse coverage: TC, hoist, material lift, manual crane, genset, on-site installation, parts.
- Convert to WebP/AVIF with a fallback JPG. Tools: `cwebp` or `sharp`.
- Explicit dimensions in the `<img>` (the GlassCard layout uses `aspect-[4/3]`).

- [ ] **Step 2: Extract spec PDFs from the legacy ZIP files**

```bash
FILES_DIR="/home/bryancarlos/Documents/VsCode/Projek Bapak Rifqi/backup-6.9.2017_15-26-28_pttrus44/homedir/public_html/files"
DST="/home/bryancarlos/Documents/VsCode/Projek Bapak Rifqi/PT Trust Anugrah/public/specs"
mkdir -p "$DST"

# Spec archives in the backup (exact filenames):
# MG5023.zip, MG6015.zip, MG6036.zip, MG7030.zip, passenger lift.zip
for f in "MG5023" "MG6015" "MG6036" "MG7030"; do
  if [ -f "$FILES_DIR/$f.zip" ]; then
    unzip -o "$FILES_DIR/$f.zip" -d "/tmp/specs-$f"
    # If the contents are .doc/.xls, convert with libreoffice headless:
    # libreoffice --headless --convert-to pdf --outdir "$DST" /tmp/specs-$f/*.doc*
    # Name the final file $DST/$f.pdf to match the href in src/content/towerCrane.ts
  fi
done

# Passenger lift spec
if [ -f "$FILES_DIR/passenger lift.zip" ]; then
  unzip -o "$FILES_DIR/passenger lift.zip" -d /tmp/specs-hoist
  # Same conversion flow; output to $DST/passenger-lift.pdf
fi
```

- [ ] **Step 3: Populate `src/content/gallery.ts` with curated image list**

```ts
export const gallery = {
  source: 'Gallery.html',
  description: 'PT. TRUST ANUGRAH PERSADA engaged in: equipment services, construction services, installation services, mechanical and suppliers.',
  categories: ['Equipment Services', 'Construction Services', 'Installation Services', 'Mechanical & Suppliers'],
  images: [
    // Populate from the curated set in public/images/. Example:
    // { src: '/images/tower-crane-001.jpg', caption: 'Tower Crane Installation', category: 'Installation Services' },
    // { src: '/images/hoist-001.jpg', caption: 'Passenger Hoist on Site', category: 'Equipment Services' },
  ],
};
```

- [ ] **Step 4: Commit**

```bash
git add public/images/ public/specs/ src/content/gallery.ts
git commit -m "feat: curate site images and extract spec sheet PDFs from legacy archive"
```

---

## Task 15: SEO Metadata — sitemap.xml & robots.txt

**Files:**
- Create: `src/app/sitemap.ts`, `src/app/robots.ts`

- [ ] **Step 1: Create `src/app/sitemap.ts`**

```ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', '/about/', '/services/', '/tower-crane/', '/passenger-hoist/',
    '/material-lift/', '/manual-crane/', '/genset/', '/parts/',
    '/gallery/', '/crew/', '/sell/', '/contact/',
  ];
  const base = 'https://pt-trustap.com'; // confirm domain with client
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
```

- [ ] **Step 2: Create `src/app/robots.ts`**

```ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://pt-trustap.com/sitemap.xml',
  };
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: add sitemap.xml and robots.txt for static export"
```

---

## Task 16: Resolve §7 Open Questions with Client (Manual Gate)

This is not a coding task — it's the gating step before launch. Go through PRD §7 line by line with the client.

- [ ] **Step 1: WhatsApp number** — on receipt, update `src/content/contact.ts`:

```ts
// Before
whatsapp: { __brand: 'tbd', reason: '...' } as TBD,

// After (client supplies 62812xxxxxxx)
whatsapp: {
  value: '62812xxxxxxx',
  source: 'Client confirmation 2026-XX-XX',
} satisfies Verified<string>,
```

WhatsApp button auto-renders everywhere `ContactCTA` is used. No other code changes.

- [ ] **Step 2: Phone/fax confirmation** — if still active, change `__brand: 'unconfirmed'` to `Verified`. If not, set to `TBD` to suppress display.

- [ ] **Step 3: Full address** — fill `contact.address.city` and any additional fields.

- [ ] **Step 4: Stats counters** — for each fabricated stat in the design, decide: real value → `Verified`, or remove the `<StatCounter>` from the page.

- [ ] **Step 5: Team info (§7 Q12)** — if client provides, populate a new `src/content/crew.ts` and flesh out `/crew/` page. If not, leave stub.

- [ ] **Step 6: Project names, cert bodies, testimonials** — follow the same Verified/Unconfirmed/TBD pattern.

- [ ] **Step 7: Commit each batch**

```bash
git add src/content/contact.ts
git commit -m "feat: wire verified WhatsApp number (PRD §7 Q1 resolved)"
```

---

## Task 17: Final Build Verification

- [ ] **Step 1: Run all tests**

```bash
pnpm test
# expected: 5 passing (lib/contact.test.ts)
```

- [ ] **Step 2: Type-check**

```bash
pnpm typecheck
# expected: no errors
```

- [ ] **Step 3: Production build (static export)**

```bash
pnpm build
# expected: "✓ Generating static pages" completes
# expected: ./out/ directory contains index.html + per-route folders
ls out/
```

- [ ] **Step 4: Serve the static export locally and click through every route**

```bash
pnpm serve:static
# open http://localhost:3000
# click through: /, /about/, /services/, /tower-crane/, /passenger-hoist/,
# /material-lift/, /manual-crane/, /genset/, /parts/, /gallery/, /crew/, /sell/, /contact/
# confirm: no 404s, no console errors, WhatsApp button hidden (until §7 Q1 resolved)
```

- [ ] **Step 5: Final commit & tag**

```bash
git add .
git commit --allow-empty -m "chore: v0.1.0 ready for client review (PRD §7 pending)"
git tag v0.1.0-prereview
```

---

## Self-Review

**Spec coverage:**
- PRD §1 (Executive Summary) → covered by all page tasks
- PRD §2 (Source of Truth) → enforced via `src/content/*.ts` with `source` fields
- PRD §3 (Company Identity) → `src/content/company.ts` (Task 5)
- PRD §4 (Global Rules) → enforced at type level (`ContentSlot<T>`, `shouldDisplay`, `StatCounter` guard; ContactCTA hides WA when TBD; no form on contact page)
- PRD §5.1 Home → Task 8
- PRD §5.2 About → Task 10
- PRD §5.3 Services → Task 11
- PRD §5.4 Tower Crane → Task 9
- PRD §5.5 Passenger Hoist → Task 9
- PRD §5.6 Material Lift → Task 9 (specs empty per source)
- PRD §5.7 Manual Crane → Task 9 (specs empty per source)
- PRD §5.8 Genset → Task 9
- PRD §5.9 Parts → Task 11
- PRD §5.10 Gallery → Task 11 (image curation in Task 14)
- PRD §5.11 Contact → Task 12 (no form)
- PRD §5.12 Footer → Task 7
- PRD §6 (Assets) → Task 14
- PRD §7 (Open Questions) → Task 16 (gating)
- PRD §8 (Out of Scope) → respected (no i18n, no CMS, no e-commerce, no forms)
- PRD §9 (Next Steps) → this plan

**Placeholder scan:** the only `TODO` in this plan is inside Task 9 step A's `capabilities` array — this is an explicit "paste the 10 capability strings verbatim from the source HTML" instruction with the exact file path. That is actionable, not a placeholder. Same for Task 14's image curation (explicit source folder, explicit selection rules).

**Type consistency:** `ContentSlot<T>`, `Verified<T>`, `Unconfirmed<T>`, `TBD` are defined once in Task 5 and used consistently in Tasks 5, 6, 7, 12. `ServiceItem`, `SpecItem`, `NavItem` defined in Task 5 step 2 and used in Tasks 6, 7, 11. Helper names (`buildWhatsAppLink`, `buildMailtoLink`, `shouldDisplay`, `unwrap`) defined in Task 5 and used in Tasks 6, 7, 12.

**Scope check:** this is a single Next.js project — no sub-project decomposition needed. Tasks are independently shippable (each produces a working static build).

No inline fixes required.

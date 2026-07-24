---
title: "PT Trust Anugrah — Content-Mapping PRD"
date: 2026-07-24
date_iso: 2026-07-24
status: draft
type: content-mapping-spec
source_backup: backup-6.9.2017_15-26-28_pttrus44/homedir/public_html/
design_ref: design_modern_contractor/titan_industrial_framework/DESIGN.md
target_stack: Next.js (static export, output: 'export')
language_primary: English
primary_goal: company-profile + lead-generation (WA/email, no forms)
contact_channels:
  - email: cs@pt-trustap.com
  - whatsapp: TBD (wa.me direct link, number to be supplied by client)
---

# PT Trust Anugrah — Content-Mapping PRD

## 1. Executive Summary

This PRD maps every content slot in the new HTML design to **source-verified content** drawn from the legacy website backup. Its sole purpose: prevent fabricated placeholders (fake names, specs, stats, addresses) from shipping under the PT Trust Anugrah name.

**Approach** (user-approved: "Approach A — Content-Mapping PRD"): for each design page, every slot is mapped to real content with a source reference. Fabricated placeholders are flagged ❌ and must be either replaced with source-verified content or marked TBD. Unconfirmed data is ⚠️.

**Rules of engagement:**
- ✅ = content verified against a file in the backup folder.
- ❌ = fabricated / template placeholder in the design HTML. **Must not ship.**
- ⚠️ = plausible but unconfirmed. Ship only after client confirms.
- TBD = needs client input (listed in §7 Open Questions).

**Target stack:** Next.js static export (`output: 'export'`). No backend, no database, no CRUD. Lead capture via `wa.me` and `mailto:` only — no online forms.

---

## 2. Source of Truth

The backup folder is the single source of truth for company facts:

```
backup-6.9.2017_15-26-28_pttrus44/homedir/public_html/
├── index.html              ← splash page, founding-year claim, motto
├── Home.html               ← core job description (4 pillars)
├── About_Us.html           ← about (to be verified)
├── Contact_Us.html         ← phone, fax, email, address
├── Gallery.html            ← company history narrative (CV 1993, PT 1998)
├── Tower_Crane.html        ← TC types, capabilities, specs
├── Passenger_Hoist.html    ← hoist capabilities
├── Material_Lift.html      ← material lift description (no specs)
├── Manual_Crane.html       ← manual crane use case
├── Genset.html             ← genset specs, brands
├── Sell.html               ← equipment for sale (to be verified)
├── Services.html           ← services (to be verified)
└── images/                 ← 394 photos
```

**Source-reference shorthand used throughout this PRD:**
- `[idx:L107]` = `index.html`, line 107
- `[home:L125]` = `Home.html`, line 125
- `[gallery:n]` = `Gallery.html`
- `[contact:n]` = `Contact_Us.html`
- `[tc:n]` = `Tower_Crane.html`
- `[genset:n]` = `Genset.html`
- `[hoist:n]` = `Passenger_Hoist.html`
- `[mc:n]` = `Manual_Crane.html`
- `[ml:n]` = `Material_Lift.html`

**Anti-hallucination rule:** any fact not traceable to one of the files above MUST be marked ❌ or TBD. No exceptions, no "sounds reasonable".

---

## 3. Company Identity — Verified Facts

| Field | Value | Source |
|-------|-------|--------|
| Legal name | PT. TRUST ANUGRAH PERSADA | `[gallery:n]` |
| Tagline | "Your Trusty Partners" | `[idx:L144]` |
| Motto | "Safety is Number 1!" | `[idx:L107 area]` |
| Founding claim 1 | "since the foundation in 1985" | `[idx:L107]` |
| Founding claim 2 | CV stood Saturday, Oct 9, 1993; PT stood Monday, Oct 13, 1998 | `[gallery:n]` |
| **Founding narrative (user-approved merge)** | "Experienced since 1985. CV established October 9, 1993. Incorporated as PT on October 13, 1998." | merge |
| Core business | Equipment services, construction services, installation services, mechanical & suppliers | `[gallery:n]` |
| Phone (local) | 021-87702337 | `[contact:n]` |
| Phone (international) | 6221-87702337 | `[contact:n]` — use for `wa.me` when WhatsApp number supplied |
| Fax (local) | 021-8700119 | `[contact:n]` |
| Fax (international) | 6221-8700119 | `[contact:n]` |
| Email (primary) | cs@pt-trustap.com | `[contact:n]` |
| Email (secondary) | pt.trust_anugrah_persada@engineer.com | `[contact:n]` — free domain, fallback only if primary unavailable |
| Address (street) | Jl. Kelapa Dua Wetan No.1 | `[contact:n]` |
| Address (city) | Jakarta Timur, DKI Jakarta | `[contact:n]` — decoded from map URL `city=Jakarta%20Timur&state=DKI%20Jakarta` |
| Address (postal) | 13730 | `[contact:n]` — Cipayung, Jakarta Timur; from map URL `pin=13730` |
| Core job description | (1) Rental, service, maintenance: tower crane, passenger hoist, material lift, generator set. (2) Supply all parts: slewing ring, joystick, wire rope, etc. (3) Build & rebuild part. (4) Troubleshooting. | `[home:L125-134]` |

**⚠️ Unconfirmed (needs client sign-off before shipping):**
- Operational hours
- WhatsApp number
- Staff / team / leadership names, roles, certifications, photos
- Number of projects completed
- Fleet size / unit count
- Headcount
- LTI / safety record statistics
- Certification body names and renewal dates

---

## 4. Global Content Rules

Apply to every page in the new design:

1. **Founding text** (anywhere it appears): use the merged narrative from §3 verbatim. Never "Est. 20XX" guessing.
2. **Contact CTAs**: email button → `mailto:cs@pt-trustap.com`; WhatsApp button → `wa.me/<number>` (number TBD). No online forms.
3. **Phone/fax**: display only after client confirms they are still in use. Legacy numbers from 2017 may be disconnected.
4. **Stats counters** (years of experience, projects, units, clients): all ❌ in current design. Replace with: (a) verified value, or (b) remove the counter, or (c) mark TBD. Do NOT ship fabricated numbers.
5. **Testimonials / client logos**: ❌ unless client supplies real ones with permission.
6. **Team photos / names**: ❌ in design. TBD — only ship what client provides.
7. **Project portfolio images**: prefer reusing `images/` from backup (394 photos). Verify each photo depicts PT Trust Anugrah work before using. ❌ stock photos.
8. **Language**: English primary. Bahasa Indonesia optional secondary (separate milestone, not in scope here).
9. **Brand voice**: professional, B2B, industrial-safety tone. Echo the motto "Safety is Number 1!" sparingly.
10. **Legacy tech to drop completely**: Flash (.swf), SmartGB iframe guestbook, Yahoo Messenger, Zopim chat, hit counters, mid-2000s chrome.

---

## 5. Per-Page Content Mapping

For each design page: Slot → Design-as-is → Real content → Source ref + status.

### 5.1 Home / Landing

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Hero headline | Placeholder | "Your Trusty Partners" OR "Safety is Number 1!" | `[idx:L144]` ✅ |
| Hero subhead | Generic | "Tower crane, hoist, material lift & genset rental, service, and parts — since 1985." | `[home:L125]` ✅ |
| Hero CTA primary | "Get a Quote" | "Get a Quote" → `wa.me/<number>` | TBD number |
| Hero CTA secondary | "Contact Us" | "Email Us" → `mailto:cs@pt-trustap.com` | `[contact:n]` ✅ |
| Hero stats row | Fabricated numbers | Remove all stats OR mark TBD (years, projects, fleet, clients) | ❌ → TBD |
| Hero image | Stock/placeholder | Use real photo from `images/` (tower crane on-site) | TBD selection |
| Trust strip (client logos) | Fabricated | Remove unless client supplies | ❌ |

### 5.2 About

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| About headline | Placeholder | "Experienced since 1985" | `[idx:L107]` ✅ |
| About body | Placeholder | Merged founding narrative (§3): "Experienced since 1985. CV established October 9, 1993. Incorporated as PT on October 13, 1998. PT. TRUST ANUGRAH PERSADA is engaged in equipment services, construction services, installation services, mechanical and suppliers." | `[gallery:n]` ✅ |
| Mission / values | Generic | Use motto "Safety is Number 1!" + 4 job-description pillars | `[home:L125]` ✅ |
| Team section | Stock photos/names | Remove entirely OR mark TBD | ❌ → TBD |
| Years counter | "25+" etc. | Compute from 1985 → "40+ years" (2025) or leave dynamic | ⚠️ confirm with client |
| Projects counter | Fabricated | Remove OR TBD | ❌ → TBD |

### 5.3 Services

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Service 1 | Generic | "Rental, Service & Maintenance — Tower Crane" | `[home:L125]` ✅ |
| Service 2 | Generic | "Rental, Service & Maintenance — Passenger Hoist" | `[home:L125]` ✅ |
| Service 3 | Generic | "Rental, Service & Maintenance — Material Lift" | `[home:L125]` ✅ |
| Service 4 | Generic | "Rental, Service & Maintenance — Generator Set (Genset)" | `[home:L125]` ✅ |
| Service 5 | Generic | "Parts Supply — slewing ring, joystick, wire rope, etc." | `[home:L125]` ✅ |
| Service 6 | Generic | "Build & Rebuild Parts" | `[home:L125]` ✅ |
| Service 7 | Generic | "Troubleshooting" | `[home:L125]` ✅ |
| Service 8 (manual crane) | Not in design? | Add: "Manual Crane — design, manufacture, and use in tight-access TC dismantling" | `[mc:n]` ✅ |
| Service icons / images | Stock | Use real photos from `images/` | TBD selection |

### 5.4 Tower Crane

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Page headline | Placeholder | "Tower Crane — Rental, Service, Parts" | `[tc:n]` ✅ |
| TC types for rent | Fabricated list | Potain FO23/B, Potain H30/30, Potain H3/36, Raimondi ER180, Jianglu JL120, Jianglu JL150, QT80, Peinner | `[tc:n]` ✅ |
| TC specifications | Fabricated | Height 20–60 m, jib length 45–50 m | `[tc:n]` ✅ |
| TC capabilities list | Generic | Pull the 10 capabilities verbatim from `[tc:n]` | `[tc:n]` ✅ |
| TC for sale | Fabricated | Types: MG5023, MG6015, MG6036, MG7030 | `[tc:n]` ✅ |
| Sell spec sheets | N/A | Reuse `files/MG5023.zip`, `MG6015.zip`, `MG6036.zip`, `MG7030.zip` (extract as downloadable PDFs) | backup ✅ |
| TC photos | Stock | Use real TC photos from `images/` | TBD selection |

### 5.5 Passenger Hoist

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Page headline | Placeholder | "Passenger Hoist — Rental & Service" | `[hoist:n]` ✅ |
| Capabilities | Generic | Pull 6 capabilities verbatim from `[hoist:n]`, incl. 80–100 m height rental | `[hoist:n]` ✅ |
| Spec sheet link | N/A | Reuse `files/passenger lift.zip` (extract to PDF) | backup ✅ |
| Photos | Stock | Real hoist photos from `images/` | TBD selection |

### 5.6 Material Lift

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Page headline | Placeholder | "Material Lift — Single & Double" | `[ml:n]` ✅ |
| Description | Generic | "Used during the finishing period. Available in single and double configurations." (paraphrase of source) | `[ml:n]` ✅ |
| Specs | Fabricated | **NO specs in source** — remove the spec table OR mark TBD | ❌ → TBD |
| Photos | Stock | Real photos from `images/` | TBD selection |

### 5.7 Manual Crane

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Page headline | Placeholder | "Manual Crane — Design, Manufacture & Dismantling Support" | `[mc:n]` ✅ |
| Use case | Generic | "Used for dismantling tower cranes in areas with difficult access. We also design and manufacture manual cranes." | `[mc:n]` ✅ |
| Specs | Fabricated | Remove OR TBD | ❌ → TBD |
| Photos | Stock | Real photos from `images/` | TBD selection |

### 5.8 Genset

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Page headline | Placeholder | "Generator Set — Rental with 24-Hour Operator" | `[genset:n]` ✅ |
| Power range | Fabricated | 150–250 kVA | `[genset:n]` ✅ |
| Brands | Fabricated | Mitsubishi, Nissan | `[genset:n]` ✅ |
| Operator | N/A | "24-hour operator included" | `[genset:n]` ✅ |
| Spec list | Generic | Pull 9 numbered specs verbatim from `[genset:n]` | `[genset:n]` ✅ |
| Compliance cert | Generic | ⚠️ no source — remove cert claims OR client provides | ⚠️ TBD |
| Cummins brand mention | If present | ❌ not in source — remove unless client confirms | ❌ |

### 5.9 Parts / Supply

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Page headline | Placeholder | "Parts Supply — Slewing Ring, Joystick, Wire Rope & More" | `[home:L125]` ✅ |
| Parts list | Fabricated | "slewing ring, joystick, wire rope, etc." + "Build & Rebuild Part" capability | `[home:L125]` ✅ |
| Parts photos | Stock | Real parts photos from `images/` (if available) | TBD selection |

### 5.10 Gallery / Portfolio

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Gallery images | Stock | Use 12–24 curated photos from `images/` (394 available) | backup ✅ |
| Project captions | Fabricated | ❌ remove fake project names; use neutral captions ("Tower crane installation — Jakarta") unless client supplies real project names | ❌ → TBD |
| Filter categories | Fabricated | Use real categories: Rental / Service / Installation / Parts | `[gallery:n]` ✅ |

### 5.11 Contact

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Address | Fabricated | Jl. Kelapa Dua Wetan No.1, Jakarta Timur, DKI Jakarta 13730 | `[contact:n]` ✅ |
| Phone | Fabricated | 021-87702337 (local) / 6221-87702337 (international, for `wa.me`) (⚠️ confirm still active) | `[contact:n]` ⚠️ |
| Fax | Fabricated | 021-8700119 (local) / 6221-8700119 (international) (⚠️ confirm still in use; many businesses have dropped fax) | `[contact:n]` ⚠️ |
| Email (primary) | Fabricated | cs@pt-trustap.com | `[contact:n]` ✅ |
| Email (secondary) | N/A | pt.trust_anugrah_persada@engineer.com (free domain — fallback only) | `[contact:n]` ✅ |
| WhatsApp | N/A | Direct `wa.me/<number>` link (number TBD; must be international format, e.g. 62812…) | TBD |
| Contact form | Template form | **REMOVE** — per user decision, lead via WA/email only | ❌ removed |
| Map embed | Generic | Embed Google Maps for the verified address (after full address confirmed) | TBD |
| Operational hours | Fabricated | Remove OR TBD | ❌ → TBD |

### 5.12 Footer (global)

| Slot | Design-as-is | Real content | Source / Status |
|------|--------------|--------------|-----------------|
| Company name | Placeholder | PT. TRUST ANUGRAH PERSADA | `[gallery:n]` ✅ |
| Short description | Generic | "Equipment services, construction services, installation services, mechanical and suppliers. Experienced since 1985." | `[gallery:n]` ✅ |
| Quick links | Template | Home, About, Services, Tower Crane, Passenger Hoist, Material Lift, Manual Crane, Genset, Parts, Gallery, Contact | ✅ |
| Contact line | Generic | Email + WhatsApp (TBD) | ✅ + TBD |
| Copyright year | "2024" | Use current year (dynamic in Next.js build) | ✅ |
| Social links | Fabricated | Remove unless client supplies real social profiles | ❌ → TBD |

---

### 5.13 Shared Layout Components — Canonical Decision

**Context:** The 12 design HTMLs in `_archive/design/*/code.html` ship minor layout variations (top-nav glow class names, button radius, side-nav presence). Each design is self-contained — they do not share a common Header/Footer file. This section decides what the new Next.js site unifies on.

**Decision: one canonical component per slot, no variants.** Ponytail rule: a config-prop (`variant="home"`) for one visual difference is over-engineering. Pick the cleanest version, apply site-wide.

| Component | Source design (canonical) | Drop from source | Wire to verified content |
|-----------|---------------------------|------------------|--------------------------|
| **Header** (sticky top nav) | `home_modernized` (cleanest markup) | `orange-glow`/`safety-glow` class variation → unified `.glass-panel` + `.shadow-glow` token; "Guestbook" button (PRD §4 rule 10); Material Symbols redundant duplicate `<link>` | Logo → `company.legalName`; 6 nav links → `navItems`; "Contact Us" button → `ContactCTA` (mailto verified) |
| **Footer** | synthesized (no design has a real footer with contact data — all are visual-only) | fabricated social links; fabricated "Industry Leader since 2005" counters | Email → `contact.email.value` (mailto); phone conditional via `shouldDisplay(contact.phone)`; address street + city + postal (PRD §3 Verified); copyright dynamic year |
| **PageShell** (hero wrapper) | `tower_crane_modernized` hero pattern (eyebrow + display-xl + optional bg image + technical-overlay) | fabricated "Solutions 2026" taglines | heroEyebrow/heroTitle per page; heroImage TBD (Task 14 curation) |
| **Side nav** (left fixed) | — | **DROPPED entirely** | — |

**Side-nav rationale:** the design's left-rail nav duplicates the top nav (Material Lift, Sell, Biodata, Manuals). Material Lift + Sell exist as real routes in the new site; Biodata + Manuals are legacy (§4 rule 10). A second nav surface adds complexity without user value — the sticky top nav + mobile menu already cover all surfaces. One nav, one place.

**Design utility-class consolidation** (Task 3 `globals.css`):

| Design class name (varies per file) | Unified name | Definition |
|-------------------------------------|--------------|------------|
| `.glass-panel` (both versions, rgba 0.1 vs 0.2 border alpha) | `.glass-panel` | `bg-surface-container/40 backdrop-blur-glass border-outline-variant/30` + light-stroke top/left (kept as the 0.1 alpha version — brighter, more visible) |
| `.orange-glow` / `.safety-glow` | `.shadow-glow` | `0 0 15px rgba(254, 107, 0, 0.4)` |
| `.text-glow` | `.text-tertiary-glow` | `text-shadow: 0 0 10px rgba(0, 219, 233, 0.5)` — kept as utility, used sparingly |
| `.grid-overlay` / `.technical-grid` (40px variants, dot vs line) | `.technical-overlay` | `linear-gradient` cross-hatch 48px @ 6% Electric Blue (per DESIGN.md `Elevation & Depth` §4 spec, not the design HTML's 40px) |
| `.hero-gradient` | inline on PageShell hero | `linear-gradient(180deg, transparent → background)` — single-use, no class needed |

**Stats-strip fabricated data found in designs (must not ship):**
- Home hero badge: "Industry Leader since 2005" → ❌ fabricated (real: since 1985)
- Home stats panel: "142 Units", "00 Safety Incidents (CY 2026)", "85+ Pro Engineer" → ❌ all fabricated
- Service cards: "98.4% Uptime", "OEM Certified", "ISO-9001", "Express Delivery" → ❌ all fabricated
- `<StatCounter>` component in Task 6 already guards these via `shouldDisplay` — they render null until `Verified`.

**Component file map** (Task 7 in plan, unchanged):
- `src/components/layout/Header.tsx` — sticky top nav, mobile menu toggle, `'use client'`
- `src/components/layout/Footer.tsx` — 4-col grid with verified contact + nav quick links
- `src/components/layout/PageShell.tsx` — hero + main wrapper, props: `heroEyebrow`, `heroTitle`, `heroImage`

No new components added beyond Task 7's spec. No configurable variants. No side nav.

---

## 6. Asset Reuse Plan

**Images** (394 photos in backup `/images/`):
- Curate 12–24 hero/section photos for the new site.
- Verify each depicts PT Trust Anugrah work before use.
- Optimize: AVIF/WebP, explicit dimensions, lazy-load below the fold.
- ❌ Zero stock photos. Zero fabricated project images.

**Documents** (in backup `/files/`):
- `MG5023.zip`, `MG6015.zip`, `MG6036.zip`, `MG7030.zip`, `passenger lift.zip` → extract, convert to PDF, link as downloadable spec sheets on relevant product pages.
- `PEMASANGAN TOWER CRANE.doc` → potential "Installation Guide" download on Tower Crane page.
- `BIO DATA TRUST.htm` → company bio data sheet; candidate for "About → Download Company Profile" link.

**Drop completely:**
- Flash `.swf` files
- SmartGB guestbook iframe
- Yahoo Messenger / Zopim chat widgets
- Hit counters, webring badges, animated GIFs

---

## 7. Open Questions (Blockers)

These MUST be resolved before ship. Each ❌ or TBD above traces here.

| # | Question | Impact |
|---|----------|--------|
| 1 | WhatsApp number for `wa.me` CTA (must be international format, e.g. 62812…; render as direct `wa.me/<digits>` link) | Primary lead channel — blocks all WA buttons |
| 2 | Is 021-87702337 / 6221-87702337 still active? | Phone display |
| 3 | Is fax 021-8700119 / 6221-8700119 still in use? | Fax display (or remove) |
| 4 | ~~Full address (city, postal code)~~ **Partially resolved** — Jakarta Timur, DKI Jakarta 13730 decoded from `[contact:n]` map URL. Street number confirmed. ⚠️ Confirm exact street number and neighborhood with client before printing on contact page / map embed. | Map embed, footer, Contact page |
| 5 | Operational hours | Contact page, footer |
| 6 | Real project names for gallery captions | Gallery section |
| 7 | Project count / fleet size / headcount / years-in-business figure to feature | Stats counters (or remove counters entirely) |
| 8 | Material Lift specs (source has none) | Material Lift page spec table |
| 9 | Manual Crane specs (source has none) | Manual Crane page spec table |
| 10 | Genset compliance certification | Genset page cert claims |
| 11 | Is Cummins a brand PT Trust Anugrah carries? (not in source) | Genset brand list |
| 12 | Team / leadership names, roles, certifications, photos | About page team section |
| 13 | Real client testimonials / client logos | Trust strip (or remove) |
| 14 | LTI / safety record statistics | Safety claims (or remove) |
| 15 | Certification body names & renewal dates | Trust badges (or remove) |

**Default posture when a question is unresolved:** remove the slot from the design. Do NOT ship fabricated content as a placeholder.

---

## 8. Out of Scope

- Bahasa Indonesia translation (separate milestone)
- Online forms, CRUD, database, authentication (per user decision: static-only)
- E-commerce / online ordering
- Customer portal
- Blog / news CMS (unless client requests; can be added as MDX in Next.js later)
- Brand identity redesign (using client-approved design system from `design_modern_contractor/`)
- SEO content marketing launch (can be a follow-up)

---

## 9. Next Steps

1. **User reviews this PRD** — verify no hallucinations slipped in; confirm or correct the merged founding narrative.
2. **Resolve open questions in §7** — at minimum the WhatsApp number, so the primary CTA works on launch.
3. **Invoke the writing-plans skill** to produce a concrete implementation plan: Next.js project scaffold, static-export config, design-system port (Deep Navy / Safety Orange / Electric Blue, Hanken Grotesk + Inter + JetBrains Mono), per-page component breakdown, content wiring from this PRD, image pipeline, build & deploy to cPanel static hosting.

---

**Anti-hallucination contract:** Every ✅ in this PRD is traceable to a file in the backup folder. Every ❌ is explicitly forbidden from shipping. Every ⚠️ and TBD must be resolved or removed. This document is the single source of truth for content; the design HTML is the single source of truth for layout/visuals. They must agree before implementation begins.

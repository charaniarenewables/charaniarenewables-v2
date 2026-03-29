# Charania Renewables — Website Architecture & Technical Reference

**Purpose:** Single source of truth for the CR website. Covers site map, page inventory, navigation, JS/CSS architecture, file structure, and technical conventions. Use this to rebuild, debug, or brief any developer or AI working on the site.

**Last updated:** 2026-03-29
**Live domain:** charaniarenewables.com
**Staging:** cr-version2.netlify.app
**Deployment:** Netlify (auto-deploy from Git push)
**Timezone:** Asia/Karachi

---

## 1. Brand & Vertical Model

CR is an **engineering-led hybrid energy integrator** with four verticals and associated sub-brands:

| Vertical | Sub-brand | Description |
|---|---|---|
| **Storage** | **MountRex** | Own-label LV battery. Also distributes Aokly (LV) and Zetara (HV) |
| **Generation** | **Vertix** | Own-label VAWT/HAWT wind turbines. Also integrates Tier-1 solar |
| **Structures** | **Lmaxx** | Aluminium solar mounting — Base, Elevate, Span |
| **Solutions** | **HED** | Hybrid Engineering & Design — methodology, not a service or product |

**Key positioning rules:**
- HED is never described as consultancy. It is a methodology. No separate fee.
- No residential on Solutions pages — protects EPC partners
- CR does not compete with EPCs — it works with them
- Partners and About pages are intentionally light (company is 6 months old, no large-scale projects yet)
- Solar is not CR's primary offer — it is one layer of a hybrid architecture

**Sub-brand logos** (stored in `/assets/img/`):
- `logo-mountrex.png`
- `logo-vertix.png`
- `logo-lmaxx.png`
- `logo-hed.png`

---

## 2. Repository File Structure

```
/ (root)
├── index.html                  Homepage
├── favicon.ico
├── robots.txt
├── sitemap.xml                 37 URLs — update when pages added/removed
├── routes.json                 Netlify routing config
│
├── pages/                      All inner pages (39 files)
├── partials/                   Shared HTML includes
│   ├── nav.html                ← SINGLE SOURCE for navigation (desktop + mobile)
│   └── footer.html             ← SINGLE SOURCE for footer
│
├── assets/
│   ├── css/
│   │   └── styles.css          All site styles (~20KB)
│   ├── js/
│   │   ├── main.js             Core site JS — wrapped in initSite()
│   │   ├── includes.js         Fetches nav + footer partials, then calls initSite()
│   │   └── home.js             Homepage-only JS (slideshow, section reveal)
│   ├── img/                    All images (WebP except logos/fb-preview)
│   └── downloads/              PDF datasheets (8 files)
│
└── docs/                       Internal documentation
```

---

## 3. Navigation Structure (Current)

Desktop nav and mobile panel both live in `partials/nav.html`. **Edit that one file to update navigation everywhere.**

```
Storage → /pages/storage.html
  ├── MountRex (LV)                   → /pages/storage-mountrex.html
  ├── Aokly × Charania Renewables (LV)→ /pages/storage-aokly.html
  ├── Zetara × Charania Renewables (HV)→ /pages/storage-zetara.html
  ├── MountRex Sodium                 → /pages/storage-sodium.html
  └── Comparison & Applications       → /pages/storage-comparison.html

Generation → /pages/generation.html
  ├── Vertix                          → /pages/generation-vertix.html
  ├── Wind System Guide               → /pages/generation-vertix-system-guide.html
  ├── Wind Turbine Comparison         → /pages/generation-vertix-comparison.html
  └── Solar Systems                   → /pages/generation-solar.html

Structures → /pages/structures-lmaxx.html (overview redirect)
  ├── Lmaxx Base                      → /pages/structures-base.html
  ├── Lmaxx Elevate                   → /pages/structures-elevate.html
  └── Lmaxx Span                      → /pages/structures-span.html

Solutions → /pages/solutions.html
  ├── HED — Hybrid Engineering & Design → /pages/solutions-hybrid-engineering.html
  ├── Industrial Energy Solutions      → /pages/solutions-industrial.html
  ├── Peak Shaving & MDI Reduction     → /pages/solutions-peak-shaving.html
  ├── Load Shedding Solutions          → /pages/solutions-load-shedding.html
  └── Solar Battery Guide              → /pages/solutions-solar-battery.html

About → /pages/about-who.html
  ├── Partners                         → /pages/about-partners.html
  └── Quality, Warranty & Safety       → /pages/about-quality.html

Contact → /pages/contact.html
```

---

## 4. Complete Page Inventory (39 inner pages + index)

### index.html (Homepage)
- 3-panel cinematic hero slideshow (hero-homepage-1/2/3.webp)
- Panel 1: "Engineering the Future of Hybrid Power" — subline: "One engineered architecture. Storage, generation, structures and hybrid design — built around your load, not a product catalogue."
- Panel 2: "Vertix Wind. Generation After Dark."
- Panel 3: "Industrial BESS Built for Pakistan"
- S2: Architecture section (dark, bg-architecture.webp)
- S3: Four Pillars — logos replace number kickers (MountRex/Vertix/Lmaxx/HED)
- S4: Audience split — C&I (engineering-led) / Residential (channel-supported)
- S5: CTA band

### Storage

| File | Title | Hero Image | Notes |
|---|---|---|---|
| storage.html | Battery Energy Storage | hero-storage.webp | Vertical overview |
| storage-mountrex.html | MountRex LV | hero-storage-mountrex.webp | Own-label 5.12 kWh. Logo in hero |
| storage-aokly.html | Aokly LFP Battery Storage | hero-storage-aokly.webp | LV (wall-mount) + C&I cards. All cards use spec tables |
| storage-aokly-lv5.html | Aokly 5 kWh | hero-storage-aokly.webp | ALFP-48100H |
| storage-aokly-lv10.html | Aokly 10 kWh | hero-storage-aokly.webp | ALFP-48200H |
| storage-aokly-lv15.html | Aokly 15 kWh | hero-storage-aokly.webp | ALFP-48300F |
| storage-aokly-stackable.html | Aokly Stackable | hero-storage-aokly.webp | LV-AST-3H12K5.32Aa |
| storage-aokly-rack.html | Aokly Rack HV | hero-storage-aokly.webp | ALFP-410100 |
| storage-aokly-215k.html | Aokly 215 kWh Container | hero-storage-aokly.webp | Container BESS |
| storage-zetara.html | Zetara HV BESS | hero-storage-zetara.webp | HV overview |
| storage-zetara-zbox60.html | ZBox60R | hero-storage-zetara.webp | |
| storage-zetara-zbox100.html | ZBox100-HS | hero-storage-default.webp | |
| storage-zetara-zbox200.html | ZBox200 | hero-storage-zetara.webp | |
| storage-comparison.html | Battery Comparison | hero-storage-compare.webp | Tabbed LV/HV comparison all 10 products |
| storage-sodium.html | MountRex Sodium | hero-storage-sodium.webp | Coming soon placeholder |

### Generation

| File | Title | Hero Image | Notes |
|---|---|---|---|
| generation.html | Hybrid Generation | hero-generation.webp | Vertical overview |
| generation-vertix.html | Vertix Wind Generation | hero-generation-vertix.webp | Overview. Logo in hero |
| generation-vertix-system-guide.html | Wind System Guide | hero-generation-vertix.webp | Education page — how wind systems work. SVG diagrams inline |
| generation-vertix-comparison.html | Wind Turbine Comparison | hero-generation-vertix.webp | All models side by side |
| generation-vertix-gv3k.html | GV-3KW VAWT | hero-generation-vertix.webp | 3 kW commercial |
| generation-vertix-gv5k.html | GVH-5KW VAWT | hero-generation-vertix.webp | 5 kW industrial |
| generation-vertix-mtype.html | M-Type Turbine | hero-generation-vertix.webp | |
| generation-vertix-qtype.html | Q-Type Turbine | hero-generation-vertix.webp | 100–400W compact |
| generation-vertix-htype.html | H-Type Turbine | hero-generation-vertix.webp | |
| generation-solar.html | Solar Systems | hero-generation-solar.webp | Integrator positioning — "not a solar company" |

### Structures

| File | Title | Hero Image | Notes |
|---|---|---|---|
| structures-lmaxx.html | Lmaxx Overview | hero-structures-lmaxx.webp | Redirect/overview. Logo in hero |
| structures-base.html | Lmaxx Base | hero-structures-base.webp | Flat roof + ground mount. Logo in hero |
| structures-elevate.html | Lmaxx Elevate | hero-structures-elevate.webp | Raised panel system. Logo in hero |
| structures-span.html | Lmaxx Span | hero-structures-span.webp | Carport/canopy. Logo in hero |

### Solutions

| File | Title | Hero Image | Notes |
|---|---|---|---|
| solutions.html | Hybrid Energy Solutions | hero-solutions.webp | Overview |
| solutions-hybrid-engineering.html | HED — Hybrid Engineering & Design | hero-solutions-hed.webp | Methodology page. Logo in hero |
| solutions-industrial.html | Industrial Energy Solutions | hero-solutions-engineering.webp | C&I focus |
| solutions-peak-shaving.html | Peak Shaving & MDI Reduction | hero-solutions.webp | SEO page |
| solutions-load-shedding.html | Load Shedding Solutions | hero-solutions.webp | SEO page |
| solutions-solar-battery.html | Solar Battery Guide | hero-generation-solar.webp | SEO/education page |

### About

| File | Title | Hero Image | Notes |
|---|---|---|---|
| about-who.html | Who We Are | hero-about.webp | Light content — intentional at current stage |
| about-partners.html | Partners | hero-partners.webp | Intentionally blank — awaiting partnerships |
| about-quality.html | Quality, Warranty & Safety | hero-quality.webp | |

### Contact

| File | Title | Hero Image | Notes |
|---|---|---|---|
| contact.html | Contact | hero-contact.webp | Full Netlify form. AJAX submit. Inline success state |

---

## 5. JS Architecture

### How it works (includes pattern)

Every page body follows this structure:

```html
<body class="is-inner">          <!-- omit class on index.html -->

  <div id="site-nav"></div>      <!-- nav.html injected here by includes.js -->

  <div class="scroll-progress" id="scrollProgress">
    <div class="scroll-progress__track">
      <div class="scroll-progress__fill" id="scrollFill"></div>
    </div>
  </div>

  <!-- PAGE CONTENT -->

  <div id="site-footer"></div>   <!-- footer.html injected here by includes.js -->

  <script src="/assets/js/main.js"></script>
  <script src="/assets/js/home.js"></script>   <!-- index.html only -->
  <script src="/assets/js/includes.js"></script>
</body>
```

### `includes.js`
Fetches `partials/nav.html` and `partials/footer.html` via `fetch()`, injects them into the `site-nav` and `site-footer` divs, then calls `initSite()` from `main.js`. Both partials must load before `initSite()` runs so event listeners can find DOM elements.

**Important:** Works on Netlify (HTTPS same-origin). Does NOT work with `file://` protocol — use VS Code Live Server for local dev.

### `main.js` — `initSite()` function contains:
1. **Mobile menu** — hamburger toggle, close on link click, single accordion (one `<details>` open at a time)
2. **Header behaviour** — transparent on homepage scroll position, always solid (`is-scrolled`) on inner pages
3. **Scroll progress bar** — vertical fill indicator, colour-swaps dark/light based on visible section
4. **Scroll reveal** — IntersectionObserver, threshold 0.12, fires once per element, skips hero elements
5. **Hero text reveal** — entire `.snap-hero__inner` or `.hero-cine__inner` slides in from left, 120ms delay
6. **Number counter animation** — `data-count` attribute, easeOut curve, 1400ms duration
7. **Email obfuscation** — builds mailto link at runtime, populates `#site-email` and `#site-email-footer`
8. **Footer year** — populates `#year` span

### `home.js` — homepage only, loads after `main.js`:
1. **Scroll progress bar** — homepage version with light/dark section detection
2. **Hero slideshow** — 3-slide cinematic with Ken Burns effect, 5.5s interval, dot navigation
3. **Section reveal** — scroll-snap `in-view` class system, `scrollend` event with fallback

### Key JS attributes used in HTML:
- `data-count="25"` — triggers number counter
- `data-decimals="1"` — decimal places for counter
- `data-suffix=" yr"` — suffix for counter
- `data-prefix="+"` — prefix for counter
- `data-section="0"` — section index on homepage
- `data-theme="dark|light"` — used by scroll progress colour swap
- `data-idx="0"` — hero dot index
- `id="siteHeader"` — header element
- `id="menuBtn"` — hamburger button
- `id="mobilePanel"` — mobile nav panel
- `id="scrollProgress"` / `id="scrollFill"` — progress bar
- `id="site-email"` — email obfuscation target (all pages)
- `id="site-email-footer"` — email obfuscation target (contact page footer)
- `id="year"` — footer copyright year

---

## 6. CSS Architecture (`styles.css` ~20KB)

### CSS custom properties (variables)
```css
--navy:    #0C2A52    /* Primary dark blue */
--green:   #7FDB65    /* Brand accent green */
--text:    #0b1220    /* Body text */
--muted:   #5a6478    /* Secondary text */
--border:  rgba(12,42,82,.10)  /* Dividers */
--gray:    #f4f6fa    /* Light section bg */
--container: 1180px  /* Max content width */
```

### Key CSS classes

**Layout:**
- `.container` — max-width 1180px, centred, horizontal padding
- `.grid-2` / `.grid-3` / `.grid-4` — CSS grid, collapses to 1 col at 520px
- `.snap-section` — base section: flex column, centred, 80px/60px padding
- `.snap-hero` — full-height hero section (100vh / 100svh mobile)
- `.snap-dark` — dark navy background section
- `.snap-gray` — light gray background section
- `.snap-img` — section with background image + overlay

**Components:**
- `.card` — white card, border, border-radius, padding
- `.card--flat` — card variant, no shadow
- `.stat-box` — metric display card with large number
- `.stat-box__num` / `.stat-box__label` / `.stat-box__desc`
- `.btn` — base button
- `.btn--primary` — green filled button
- `.btn--ghost` — outlined button (light bg)
- `.btn--ghost-dark` — outlined button (dark bg)
- `.btn--footer-cta` — footer CTA with animated arrow
- `.kicker` — small uppercase label above headings
- `.sec-img` — section image (height 320px, object-fit cover)

**Reveal animations (require `js-anim` class on `<body>`):**
- `.reveal-fade` — fade in
- `.reveal-left` — slide from left
- `.reveal-right` — slide from right
- `.reveal-up` — slide up
- `.reveal-punch` — scale punch-in
- `.reveal-delay-0` through `.reveal-delay-4` — stagger delays
- All activate when `.is-revealed` class is added by IntersectionObserver

**Header:**
- `.site-header` — fixed, transparent by default on homepage
- `.site-header.is-scrolled` — solid white, shadow
- `body.is-inner .site-header` — always solid white (inner pages)
- `.brand-logo--white` / `.brand-logo--color` — swap based on header state
- `.main-nav` — desktop nav, hidden at ≤768px
- `.menu-btn` — hamburger, 44×44px, shown at ≤768px
- `.mobile-panel` — full-screen mobile nav, fixed overlay
- `.mobile-panel.is-open` — visible state

**Mobile breakpoints:**
- `@media (max-width: 768px)` — main mobile: grids collapse, hero font scales, mobile nav shows
- `@media (max-width: 520px)` — all grids force 1 col, footer grid 1 col

**Homepage-specific (in `index.html` `<style>` block):**
- `.hero-cine` — slideshow container
- `.hero-cine__slide` — individual slide (absolute, opacity transition)
- `.hero-cine__overlay` — gradient overlay
- `.hero-cine__content` — text positioned at bottom of hero
- `.hero-cine__inner` — inner content wrapper (animated by `main.js`)
- `.hero-panel` / `.hero-panel.is-active` — per-slide text
- `.hero-dot` / `.hero-dot.is-active` — slide navigation dots
- `.snap-architecture` / `.snap-pillars` / `.snap-audience` / `.snap-cta` — section-specific overrides

---

## 7. HTML Conventions

- **Font:** Plus Jakarta Sans, weights 400/500/600/700/800 via Google Fonts
- **Images:** WebP everywhere except logos (PNG) and `fb-preview.png`
- **All images below fold:** `loading="lazy"`
- **Hero images:** `<link rel="preload" as="image" fetchpriority="high">` in `<head>` — one per page
- **Internal links:** Never `target="_blank"`. External links use `target="_blank" rel="noopener"`
- **Email:** Never in HTML source. Always via JS obfuscation (`#site-email`)
- **No jQuery.** No frameworks. Vanilla JS only.
- **No `<BR>` tags** for spacing — use margins
- **Netlify forms:** `data-netlify="true"`, honeypot `bot-field`, AJAX submit on contact.html

---

## 8. SEO Implementation (all 39+ pages)

Every page has:
- Unique `<title>` with Pakistan keywords
- Unique `<meta name="description">`
- `<meta name="robots" content="index, follow">`
- `<link rel="canonical">` pointing to charaniarenewables.com domain
- Full OG tags (og:title, og:description, og:image, og:url, og:type)
- Twitter card tags
- `Organization` + `LocalBusiness` JSON-LD on all pages
- `BreadcrumbList` JSON-LD on 36 pages
- `Product` schema on 14 product pages
- `FAQPage` schema on 4 pages

Analytics on every page:
- Google Analytics 4 (G-GD413WV1E2)
- Meta Pixel (689858370464044)
- `<link rel="preconnect" href="https://connect.facebook.net">` for Pixel performance

---

## 9. Performance Optimisations

| Optimisation | Status | Detail |
|---|---|---|
| WebP images | ✅ All images | Except logos and fb-preview |
| Lazy loading | ✅ All below-fold images | `loading="lazy"` |
| Hero preload | ✅ All 40 pages | `fetchpriority="high"` per page |
| Font preconnect | ✅ All pages | fonts.googleapis.com + fonts.gstatic.com (crossorigin) |
| Facebook CDN preconnect | ✅ All pages | connect.facebook.net |
| Font display swap | ✅ | `&display=swap` on Google Fonts URL |
| GA async | ✅ | `async` attribute on gtag script |
| No render-blocking JS | ✅ | All scripts at bottom of body |
| CSS ~20KB | ✅ | No dead rules, no framework |
| Partials via fetch | ✅ | Nav + footer loaded once, not per-page |
| Mobile viewport | ✅ | All pages |
| Scroll attachment mobile | ✅ | `background-attachment: scroll` on mobile |

---

## 10. Footer Structure

Footer lives in `partials/footer.html`. Four columns:

1. **Charania Renewables** — tagline, phone, WhatsApp, email (obfuscated via `#site-email`)
2. **Quick links** — HED, Battery Comparison, Vertix Wind, Lmaxx Structures
3. **Official channels** — Facebook, Instagram, LinkedIn, TikTok
4. **Karachi** — office address + "Request a meeting" CTA button

Footer bottom bar: copyright year (`#year` populated by JS) + "Hybrid Engineering & Design (HED)"

---

## 11. Contact Form (contact.html)

- Netlify Forms — `data-netlify="true"`
- Fields: Name, Company, Email, Phone, Enquiry Type (7 options), Message
- Honeypot: `bot-field`
- AJAX submit with inline success state (`#formSuccess`)
- Fallback: `form.submit()` if AJAX fails
- On migration: Netlify dashboard → Forms → Notifications → Email → mail@charaniarenewables.com

---

## 12. Deployment

```bash
git add .
git commit -m "description"
git push
# Netlify auto-deploys on push
# Cache issue: Netlify dashboard → Deploys → Clear cache and deploy
```

Local dev requires a server (not `file://`):
- VS Code Live Server extension — one click
- Or: `npx serve .` from repo root

---

## 13. Images — Full Asset List

### Logos (PNG)
`logo-cr.png`, `logo-cr-color.png`, `logo-cr-white.png`, `logo-hed.png`, `logo-lmaxx.png`, `logo-mountrex.png`, `logo-vertix.png`

### Hero images (WebP)
`hero-about.webp`, `hero-about-default.webp`, `hero-contact.webp`, `hero-generation.webp`, `hero-generation-solar.webp`, `hero-generation-vertix.webp`, `hero-homepage-1.webp`, `hero-homepage-2.webp`, `hero-homepage-3.webp`, `hero-partners.webp`, `hero-quality.webp`, `hero-solutions.webp`, `hero-solutions-engineering.webp`, `hero-solutions-hed.webp`, `hero-storage.webp`, `hero-storage-aokly.webp`, `hero-storage-compare.webp`, `hero-storage-default.webp`, `hero-storage-mountrex.webp`, `hero-storage-sodium.webp`, `hero-storage-zetara.webp`, `hero-structures-base.webp`, `hero-structures-default.webp`, `hero-structures-elevate.webp`, `hero-structures-lmaxx.webp`, `hero-structures-span.webp`

### Background images (WebP)
`bg-architecture.webp`, `bg-audience.webp`, `bg-cta-default.webp`

### Section images (WebP) — active
`section-aokly-215kw.webp`, `section-aokly-lv5.webp`, `section-aokly-lv10.webp`, `section-aokly-lv15.webp`, `section-aokly-rack.webp`, `section-aokly-stackable.webp`, `section-data.webp`, `section-generation-case.webp`, `section-generation-cta.webp`, `section-generation-ourapproach.webp`, `section-generation-stats.webp`, `section-howwework.webp`, `section-hybrid.webp`, `section-lmaxx-base-methods.webp`, `section-lmaxx-base-site.webp`, `section-lmaxx-elevate-site.webp`, `section-lmaxx-elevate-structure.webp`, `section-lmaxx-l1.webp`, `section-lmaxx-l2.webp`, `section-lmaxx-l3.webp`, `section-lmaxx-span-site.webp`, `section-lmaxx-span-structure.webp`, `section-lmaxx-tilt.webp`, `section-mountrex-5k.webp`, `section-renewables.webp`, `section-sodium-comp.webp`, `section-solutions-who.webp`, `section-storage-lfp.webp`, `section-storage-overview.webp`, `section-storage-sizing.webp`, `section-storage-story.webp`, `section-vertix-generator.webp`, `section-vertix-gv3k.webp`, `section-vertix-gv5k.webp`, `section-vertix-htype.webp`, `section-vertix-mtype.webp`, `section-vertix-qtype.webp`, `section-vertix-where.webp`, `section-vertix-why.webp`, `section-wind.webp`, `section-zetara-zbox60.webp`, `section-zetara-zbox100.webp`, `section-zetara-zbox200.webp`

### Section images (WebP) — in assets, not currently used (available to place)
`hero-storage-compare.webp` *(now used on storage-comparison.html)*, `hero-structures-default.webp`, `section-commercial.webp`, `section-comms.webp`, `section-engineering.webp`, `section-field.webp`, `section-generation-configuration.webp`, `section-industrial.webp`, `section-lmaxx-carport.webp`, `section-manufacturing.webp`, `section-solutions-hed.webp`

### Downloads (PDF — in `/assets/downloads/`)
`aokly-215kwh-datasheet.pdf`, `aokly-allinone-datasheet.pdf`, `aokly-lv-datasheet.pdf`, `aokly-stackable-datasheet.pdf`, `mountrex-datasheet.pdf`, `zetara-zbox60r-datasheet.pdf`, `zetara-zbox100-datasheet.pdf`, `zetara-zbox200-datasheet.pdf`

---

## 14. Outstanding Work

### High priority
- Domain migration: charaniarenewables.com — DNS, Search Console, sitemap submit, Netlify Forms config
- Delete legacy pages from repo: `structures-lmaxx-LATEST.html`, `structures-ground.html`, `structures-rooftop.html`, `structures-custom.html`, `solutions-hybrid-systems.html`, `solutions-peakshaving.html`, `about-group.html`
- Update `sitemap.xml` after legacy deletions

### Medium priority
- Homepage hybrid system diagram — SVG inline on S2 Architecture section
- `about-who.html` — needs team credentials when available
- `about-partners.html` — intentionally blank, populate when partnerships confirmed
- Place unused section images on relevant pages (see section 13 above)

### Audiences
1. EPC partners — specs, certifications, model numbers
2. C&I clients — factories, hospitals, warehouses, cold chain
3. Chinese manufacturers/suppliers — potential distribution partners
4. Residential — channel-supported only, not CR direct focus

# Charania Renewables — Project Knowledge
*Last updated: Session 4 — covers all work through March 2026*

---

## Company Overview
**Charania Renewables** — hybrid energy integrator, Karachi, Pakistan. Less than 1 year old, no completed projects yet. Four verticals: Storage, Generation, Structures, Solutions.

**HQ:** Suite 1803, 18th Floor Sumya Sky View, 17 Dr Ziauddin Ahmed Road, Civil Lines, Karachi 75530
**Phone:** +92 21-35635067
**WhatsApp:** +92-326-8422718
**Email:** mail@charaniarenewables.com
**Live site:** https://cr-version2.netlify.app (migrating to charaniarenewables.com)
**Repo:** Netlify-connected git repo (auto-deploys on push)

---

## Brand Architecture

### Storage
| Label | Type | Relationship |
|---|---|---|
| **MountRex** | LV only — 5.12 kWh / 51.2V LFP | Own label, CR-specified, Zetara-supplied, CR-warranted |
| **Aokly** | LV (5.12/10.24/15.36 kWh) + HV range | Channel partner, CR manages warranty |
| **Zetara** | HV C&I BESS (ZBox60R/ZBox100-HS/ZBox200) | Direct HV partner |

MountRex is LV only. Zetara owns the ZBox HV line.

### Generation
| Brand | Type | Manufacturer |
|---|---|---|
| **Vertix** | Own VAWT brand | Naier (Yixing Naier Wind Power Technology Co., China) |
| Solar | Tier-1 modules | Vetted shortlist, not branded separately |

### Structures
All Lmaxx is aluminium (Alloy 6063), not steel.
Fabricated by **Sinopak Extrusion Technologies, Korangi, Karachi** (related entity — do not disclose relationship, mention only as fabrication partner).

| Brand | Sub-product | Description |
|---|---|---|
| **Lmaxx** | Base | Flat roof / ground mount, Al 6063, L1/L2/L3 frames |
| **Lmaxx** | Elevate | Raised panels over usable rooftop |
| **Lmaxx** | Span | Ground-up carports / canopies, hybrid Al+steel |

### Solutions
**HED (Hybrid Engineering & Design)** = methodology, not a service or product. Load-first, cost-benefit led, technology-agnostic. No separate fee. Never describe as consultancy.

---

## Site Architecture — All Pages

### Current page list
```
index.html

Storage:
  storage.html
  storage-mountrex.html             MountRex LV 5.12 kWh (own label)
  storage-sodium.html               MountRex Sodium (placeholder)
  storage-aokly.html                Aokly overview
  storage-aokly-lv5.html            Aokly LV 5 (ALFP-48100H)
  storage-aokly-lv10.html           Aokly LV 10 (ALFP-48200H)
  storage-aokly-lv15.html           Aokly LV 15 (ALFP-48300F)
  storage-aokly-stackable.html      Aokly All-in-One ESS (LV-AST-3H12K5.32Aa)
  storage-aokly-rack.html           Aokly HV Stackable Battery (ALFP-410100)
  storage-aokly-215k.html           Aokly 215 kWh Container
  storage-zetara.html               Zetara overview
  storage-zetara-zbox60.html        Zetara ZBox60R
  storage-zetara-zbox100.html       Zetara ZBox100-HS
  storage-zetara-zbox200.html       Zetara ZBox200
  storage-comparison.html           Tabbed LV/HV comparison (all 10 products)

Generation:
  generation.html
  generation-vertix.html
  generation-vertix-gv3k.html
  generation-vertix-gv5k.html
  generation-vertix-mtype.html
  generation-vertix-qtype.html
  generation-solar.html             Body needs rewrite

Structures:
  structures-base.html              Also top-level nav target
  structures-elevate.html
  structures-span.html
  structures-lmaxx.html             Legacy redirect to structures-base
  structures-lmaxx-LATEST.html      Legacy — delete
  structures-ground.html            Legacy — delete
  structures-rooftop.html           Legacy — delete
  structures-custom.html            Legacy — delete

Solutions:
  solutions.html
  solutions-hybrid-engineering.html HED methodology
  solutions-industrial.html         C&I applications
  solutions-peak-shaving.html       MDI / peak shaving (SEO page)
  solutions-load-shedding.html      Load shedding (SEO page)
  solutions-solar-battery.html      Solar battery guide (SEO page)
  solutions-hybrid-systems.html     Legacy — delete
  solutions-peakshaving.html        Legacy — delete

About:
  about-who.html
  about-partners.html
  about-quality.html
  about-careers.html
  about-group.html

Contact:
  contact.html                      Full Netlify form, AJAX submit
```

### Navigation structure
```
Storage → storage.html
  ├── MountRex (LV) → storage-mountrex.html
  ├── Aokly × CR (LV) → storage-aokly.html
  ├── Zetara × CR (HV) → storage-zetara.html
  ├── Comparison → storage-comparison.html
  └── MountRex Sodium → storage-sodium.html

Generation → generation.html
  ├── Vertix → generation-vertix.html
  └── Solar Systems → generation-solar.html

Structures → structures-base.html
  ├── Lmaxx Base → structures-base.html
  ├── Lmaxx Elevate → structures-elevate.html
  └── Lmaxx Span → structures-span.html

Solutions → solutions.html
  ├── HED → solutions-hybrid-engineering.html
  ├── Industrial Energy → solutions-industrial.html
  ├── Peak Shaving & MDI → solutions-peak-shaving.html
  ├── Load Shedding → solutions-load-shedding.html
  └── Solar Battery Guide → solutions-solar-battery.html

About → about-who.html (no separate landing)
Contact → contact.html
```

---

## Product Specifications (all corrected from brochures)

### MountRex LV — 51.2V100Ah (Zetara-supplied)
- Nominal Voltage: 51.2V | Capacity: 100Ah | Energy: 5.12 kWh
- Cycle life: >6,000 @ 0.5C, 80% DoD, 25°C | Design life: >15 years
- Dimensions W×D×H: 550×400×178mm | Weight: 44.5kg (±1kg)
- Charging voltage: 56.0–57.0V | Discharge cut-off: 44.8V
- Max charge: 100A (rec. 50A) | Max discharge: 100A
- Charge temp: 0–50°C | Discharge: -20–55°C | Storage: -20–55°C
- BMS: built-in, LCD display, WiFi, SOC/ALM/RUN indicators, 120mA passive cell balance
- Comms: RS485 / CAN | Warranty: 7 years via CR
- Datasheet: mountrex-datasheet.pdf

### Aokly LV Range (all 51.2V, LFP, CE/ROHS/REACH/UN38.3/MSDS)
| Spec | LV 5 (ALFP-48100H) | LV 10 (ALFP-48200H) | LV 15 (ALFP-48300F) |
|---|---|---|---|
| Energy | 5.12 kWh | 10.24 kWh | 15.36 kWh |
| Capacity | 100Ah | 200Ah | 300Ah |
| IP | IP54 | IP30 | IP30 |
| Dimensions | 442×600×170mm | 600×800×150mm | 811×450×260mm |
| Weight | 49kg | 97kg | 119kg |
| Max Charge | 100A | 200A | 300A |
| Rec Discharge | 50A | 100A | 150A |
| Combination | 16S1P | 16S2P | 16S1P |
| Charge temp | 0–55°C | 0–55°C | 0–55°C |
| Discharge temp | -20–60°C | -20–60°C | -20–60°C |
| Cycle life | ≥6,000 @ 80% DoD, 25°C | same | same |
| Warranty | 7 years via CR | same | same |
Datasheet: aokly-lv-datasheet.pdf

### Aokly All-in-One ESS (LV-AST-3H12K5.32Aa)
- Residential BESS with integrated inverter + HV box + battery modules
- Single module: 102.4V / 52Ah
- 1 layer = 10.24 kWh (204.8V, 180kg, 653×320×1366mm)
- 2 layers option A = 15.36 kWh (307.2V, 240kg, 653×320×1922mm)
- 2 layers option B = 20.48 kWh (409.6V, 285kg, 653×320×1922mm)
- Grid: 12 kVA, 400V/360–440V, 3W+N+PE | EPS: <20ms switchover
- PV: 2 MPPT, 1000V max, 180–850V range, 15A rated
- Efficiency: 96.7% charge/discharge, 98.2% DC max, 99.5% MPPT
- IP65 | Natural cooling | -25°C to 60°C | Warranty: 7 years via CR
- Datasheet: aokly-allinone-datasheet.pdf

### Aokly HV Stackable Battery (ALFP-204100 to ALFP-512100)
CR stocks ALFP-410100: 409.6V, 100Ah, 40.96 kWh, 128S1P, 405kg, 550×1415×515mm
All configs: IP65, metal, ≤6,000 cycles @80% DoD, 0–55°C charge, -20–60°C discharge, 100A max charge/discharge
Datasheet: aokly-stackable-datasheet.pdf

### Aokly 215 kWh Container
1P224S | 14 battery packs | 300Ah | DC 768V | Work voltage: 648–876V
Rated charge/discharge: 100A | Max discharge: 160A
Cabinet: H2060×D1270×L1610mm | Weight: 2,350kg | IP54
Fire suppression integrated | Warranty: 7 years via CR
Datasheet: aokly-215kwh-datasheet.pdf

### Zetara ZBox60R
5–12 modules | 25.6–61.44 kWh | 614.4V rated (max) | Voltage range: 200–700V
100Ah capacity | Max 3 clusters parallel (200 kWh) | IP20 | Natural cooling
Dims: 545×600×2270mm | Weight: 550kg | Operating: -10 to 45°C
Cell: LiFePO4 3.2V/100Ah | Module: 51.2V, 470×442×154mm, 43kg
HV Box: DC1000V, 100A rated, 120A max, IP20
Datasheet: zetara-zbox60r-datasheet.pdf

### Zetara ZBox100-HS (Magic-ZBox100-HS / ZBox100RN)
LFP | 51.2V/5.12kWh modules ×20 = 102.4 kWh | Rated voltage: 512V | Range: 448–576V
Rated charge/discharge: 50 kW | Grid: AC380–400V, 50/60Hz, THDi <3%, 83A max output
PV: 75kW max, 4 MPPT, 200–850V | Max efficiency: 98.80% | Rate: 1C/0.5P
Operating: -20°C to 50°C | Cooling: HVAC | Fire suppression: integrated
Battery IP55 | Inverter IP65 | Dims: 1560×900×2060mm | Weight: 1,220kg
Comms: CAN, RS485, ETH | Certs: IEC62619, CE, EMC, UN38.3, UN3480 (battery)
Datasheet: zetara-zbox100-datasheet.pdf

### Zetara ZBox200 (ZHES51280SN)
Cell: LiFePO4, 3.2V/280Ah | Module: 51.2V, 14.336 kWh | 15 packs
Rated: 768V DC | Range: 720–840V | Energy: 215.04 kWh
Rec charge/discharge: 140/140A | Max: 140/200A
Dims: 1050×1310×2340mm | Weight: max 2,150kg | IP55
HVAC cooling | Fire suppression | Max 10 cabinets parallel (2.15 MWh)
Datasheet: zetara-zbox200-datasheet.pdf

### Vertix Wind Turbines (Naier manufacturer)
GV-3KW: 3kW rated (4kW max), start 2.8m/s, rated 12m/s, survival 50m/s, 2.3m rotor, 3.65m FRP blade, 300kg, 8m tower, axial flux PMG 180RPM, 48–380V, IP54, 20yr design life, IEC 61400-2/-12
GV-5KW: 5kW, start 2.5m/s, rated 12m/s, survival 50m/s, 2.3m rotor, 3.65m FRP blade, 300kg, 8m tower, axial flux PMG 100RPM, 48–380V, IP54, 20yr, IEC 61400-2
M-Type (300–500W HAWT): NE-300M/400M/500M, 12/24V, start 2.5m/s, NdFeB PMG, nylon fiber blades
Q-Type (100–400W VAWT): NE-100Q1 to NE-400Q4, 12/24V, start 2.5m/s, survival 45m/s, 7–9 blades
H-Type (50–200W VAWT): NE-50H/100H/200H, 12/24V, start 2m/s, survival 35m/s
All Vertix: aluminium alloy shell, NdFeB PMG, -40°C to 80°C, <30dB, coreless disc generator

---

## File Structure

```
/ (repo root)
├── index.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/styles.css        774 lines — all shared styles
│   ├── js/main.js            245 lines — all shared JS
│   ├── img/                  all .webp except logos + fb-preview.png
│   └── downloads/            PDF datasheets
└── pages/                    all inner HTML pages
```

---

## CSS & JS Architecture

### styles.css key classes
```
snap-section              standard content section
snap-hero                 full-viewport hero (min-height:100vh)
snap-dark                 navy background #0C2A52
snap-gray                 grey background #F4F4F4
snap-img                  background image section
grid-2/3/4                CSS grid layouts
card                      product/nav card
card stat-box             key-facts card (navy hover + green number)
stat-box__num             large number
stat-box__label           green uppercase label
stat-box__desc            muted description
kicker                    small green uppercase label above headings
reveal-up/left/right/fade/punch   scroll-triggered animations
reveal-delay-0 to -4      0, 150, 300, 450, 600ms stagger
is-revealed               JS adds this to trigger animation
```

### Card hover states
```
.card.stat-box:hover       → navy fill, green number, white text
.card:not(.stat-box):hover → gentle lift (translateY -3px) + shadow
```

### Section colours
```html
<section class="snap-section" data-theme="light">           white
<section class="snap-section snap-gray" data-theme="light"> grey
<section class="snap-section snap-dark" data-theme="dark">  navy
<section class="snap-section snap-img" data-theme="dark">   bg image
```
Force full-viewport height: add `style="min-height:100vh;"` inline.

### Counter animation — add to any stat-box__num
```html
<div class="stat-box__num" data-count="5.12" data-decimals="2" data-suffix=" kWh">5.12 kWh</div>
<div class="stat-box__num" data-count="6000" data-prefix="&gt;" data-suffix="+">6,000+</div>
```
JS blanks text on load, counts up when element enters viewport.
Do NOT add data-count to labels like IP54, FAT, IEC, LFP — leave those static.

### main.js — what it does
1. Mobile menu — hamburger toggle
2. Header scroll behaviour — is-scrolled class
3. Scroll progress bar
4. IntersectionObserver reveal — adds is-revealed to reveal-* elements
5. Hero text reveal — slides .snap-hero__inner or .hero-cine__inner in from left
6. Number counter animation — data-count elements count up on scroll into view
7. Email obfuscation — fills #site-email and #site-email-footer spans

### Email obfuscation
Two IDs: `#site-email` (all pages body) and `#site-email-footer` (contact page footer only).
JS builds the mailto link — email never in HTML source.

---

## Contact Form
Full Netlify form on contact.html:
- Fields: Name, Company, Email, Phone, Enquiry Type (7 options), Message
- data-netlify="true", netlify-honeypot="bot-field"
- AJAX submit, inline success state (#formSuccess), fallback form.submit()
- Configure on migration day: Site → Forms → Notifications → Email → mail@charaniarenewables.com

---

## SEO Completed
- Title tags + meta descriptions all 44 pages (Pakistan keywords)
- OG/Twitter cards all pages
- Canonical URLs (charaniarenewables.com domain)
- Product schema: 14 product pages
- BreadcrumbList: 36 pages
- FAQPage: 4 pages
- sitemap.xml (37 URLs)
- robots.txt

---

## Key Design Decisions
1. No snap-to-viewport — removed. Only snap-hero keeps min-height:100vh
2. No curtain animations — removed
3. Animation system — IntersectionObserver per-element, threshold 0.15, fires once
4. WebP everywhere — except logos and fb-preview.png
5. HED — never a service, always a methodology
6. No residential on Solutions — protects EPC partners
7. Structures nav — links to structures-base.html directly
8. Footer quick links: HED, Battery Comparison, Vertix Wind, Lmaxx Structures, Contact
9. All internal links — no target="_blank". Only external links use it.
10. Hero animation — whole text block slides from left. No word-by-word.

---

## Deployment
```bash
git add .
git commit -m "message"
git push
# Netlify auto-deploys
# Cache issue: Netlify dashboard → Deploys → Clear cache and deploy
```

---

## Outstanding Work

### High priority
- Domain migration to charaniarenewables.com — DNS, Search Console, sitemap submit, Netlify Forms
- generation-solar.html — body content needs rewrite
- Wind sub-pages — being done in separate Project (GV-3KW, GV-5KW, M-Type, Q-Type)
- Comparison page — may need further refinement

### Medium priority
- about-who.html — needs team credentials
- about-partners.html — needs Chinese manufacturer CTA
- Homepage — no proof point above fold (no completed projects)
- Delete legacy pages: structures-lmaxx-LATEST, structures-ground, structures-rooftop, structures-custom, solutions-hybrid-systems, solutions-peakshaving

### Images still needed
Hero: hero-storage.webp, hero-generation.webp, hero-solutions.webp, hero-structures-base/elevate/span.webp
Lmaxx: section-lmaxx-l1/l2/l3.jpg, section-lmaxx-base-methods.jpg, section-lmaxx-tilt.jpg, section-lmaxx-elevate-site.jpg, section-lmaxx-span-site.jpg, section-lmaxx-fabrication.jpg
Aokly: section-aokly-215kw.webp, section-aokly-rack.webp

---

## Audiences
1. EPC partners — specs, certifications, model numbers
2. C&I clients — factories, hospitals, warehouses, cold chain
3. Chinese manufacturers/suppliers — potential distribution partners
4. Residential — channel-supported only, not CR direct focus

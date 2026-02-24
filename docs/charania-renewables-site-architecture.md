# Charania Renewables — Website Architecture Blueprint (IA + Page Structures)

**Purpose:** This document defines the **site map, URL structure, page hierarchy, and content-block anatomy** for Charania Renewables (CR).  
**Scope:** *Structure + content logic only.* **No colors, fonts, CSS, spacing, or animations** are specified here (those live in the repo styles and components).

**Sources used**
- Live site navigation and URLs: https://cr-v2.netlify.app/ citeturn0view0turn1view0turn1view1turn1view2turn1view3turn1view4turn1view5turn1view6turn1view7turn1view8turn1view9turn1view10turn1view11turn1view12turn1view13turn1view14turn1view15turn1view16turn1view17turn1view18
- Strategy / page content intent deck (PDF): Charania Renewables Strategic Alignment and Website Review fileciteturn0file0

**Last updated:** 2026-02-25  
**Timezone:** Asia/Karachi

---

## 1) Brand + Vertical Model (Current)

CR operates as an engineering-led hybrid energy integrator with 4 verticals and associated sub-brands:

- **Storage:** **MountRex** (energy storage by CR)
- **Generation:** **Vertix** (wind energy by CR) + Solar Systems (Tier‑1 partner integration)
- **Structures:** **Lmaxx** (structures by CR)
- **Solutions:** **Hybrid Design & Engineering (HDE)** (solutions by CR)

> Note: Partner/product lines (e.g., Aokly, zetara) sit *inside* the vertical architecture. fileciteturn0file0

---

## 2) Site Map (Navigation + URLs)

This reflects the **live** nav and page endpoints, plus the new sodium page you requested.

```
/
├─ Storage  (vertical)
│  ├─ /pages/storage-aokly               (Aokly × Charania Renewables - LV)
│  ├─ /pages/storage-mountrex            (MountRex - LV)
│  ├─ /pages/storage-zetara              (zetara × Charania Renewables - HV)
│  ├─ /storage/mountrex-sodium           (NEW: MountRex Sodium)
│  └─ /pages/storage-comparison          (Comparison & Applications)
│
├─ Generation (vertical)
│  ├─ /pages/generation-vertix           (Vertix wind systems)
│  └─ /pages/generation-solar            (Solar Systems - single page w/ 3 internal sections)
│
├─ Structures (vertical)
│  ├─ /pages/structures-lmaxx            (Lmaxx overview)
│  ├─ /pages/structures-rooftop          (Rooftop mounting)
│  ├─ /pages/structures-ground           (Ground mounting)
│  └─ /pages/structures-custom           (Custom / Industrial fabrication)
│
├─ Solutions (vertical)
│  ├─ /pages/solutions-hybrid-engineering (HDE - Hybrid Engineering & Design)
│  ├─ /pages/solutions-industrial         (Industrial Energy Solutions)
│  ├─ /pages/solutions-hybrid-systems     (Hybrid Systems)
│  └─ /pages/solutions-peakshaving        (Peak Shaving & Backup)
│
├─ About
│  ├─ /pages/about-who                   (Who We Are)
│  ├─ /pages/about-group                 (Charania Group / Legacy)
│  ├─ /pages/about-partners              (Partners)
│  └─ /pages/about-quality               (Quality, Warranty & Safety)
│
└─ Contact
   └─ /pages/contact
```

Live nav confirmation: top-level + submenu items appear on the homepage header. citeturn0view0

---

## 3) Page Templates (Reusable Layout Types)

Use these template labels in front-matter below:

- `home`
- `vertical-landing` (overview/entry page for a vertical)
- `product-category` (split residential vs C&I; includes catalogue cards)
- `product-partner` (partner line, e.g., Aokly, zetara)
- `education` (comparison & applications)
- `solution` (problem → architecture → modelling → CTA)
- `about`
- `contact`

---

## 4) Structured Page Blueprints (Front-Matter + Content Blocks)

Each page below defines:
- **slug**: URL
- **parent**: navigation parent
- **vertical**: storage/generation/structures/solutions/about/contact
- **brand**: MountRex / Vertix / Lmaxx / HDE (where applicable)
- **template**: one of the template labels above
- **blocks**: content anatomy (what the page contains)

> **Important:** Blocks specify *what* appears, not *how it looks*. CSS/typography/animations stay separate in your repo styles.

---

### HOME

---
title: "Charania Renewables"
slug: "/"
parent: null
vertical: "home"
brand: "Charania Renewables"
template: "home"
primary_cta: "Request Assessment"
secondary_cta: "Explore Solutions"
---

#### Blocks
1. **Hero**
   - Headline: *Engineering the Future of Hybrid Power*
   - Subtext: Integrated storage, generation, structures and hybrid engineering for industrial & commercial energy resilience. citeturn0view0
   - CTAs: Request Assessment / Explore Solutions

2. **Integrated Hybrid Architecture**
   - Positioning: “Designed as one system — not a collection of parts.” citeturn0view0
   - Diagram placeholder: Solar + Wind + BESS + Inverter + Load + Grid

3. **Four Vertical Pillars (cards/tiles)**
   - Storage → MountRex
   - Generation → Vertix + Solar
   - Structures → Lmaxx
   - Solutions → HDE
   - Include one-line “role” per pillar (what it does in the architecture). citeturn0view0

4. **Audience Split**
   - Industrial & Commercial (engineering-led)
   - Residential (channel-supported) citeturn0view0

5. **Media / Case Content (optional module)**
   - Carousel / tiles for installs, diagrams, partner badges

6. **Assessment CTA band**
   - Short form entry point: load + operating hours + constraints → next steps. citeturn0view0

---

## STORAGE (MountRex) — Vertical

### STORAGE — Vertical Landing (if needed later)
*(Optional future page: a “/storage” index. Currently nav points directly to subpages.)*

---
title: "Storage"
slug: "/storage"
parent: "/"
vertical: "storage"
brand: "MountRex"
template: "vertical-landing"
---

#### Blocks (from deck intent)
1. Hero: “Residential and Industrial Storage systems.” (battery carousel) fileciteturn0file0
2. Category Split: Residential LV vs C&I / BESS (HV) fileciteturn0file0
3. Catalogue Cards: Model, kWh, Voltage, Use Case, Short description + “View Specifications” fileciteturn0file0
4. Trust & Safety: warranty, safety, certifications
5. CTA: Talk to team / Request quote

---

### Aokly × Charania Renewables (LV)

---
title: "Aokly × Charania Renewables (LV)"
slug: "/pages/storage-aokly"
parent: "/storage"
vertical: "storage"
brand: "MountRex"
template: "product-partner"
audience: ["Residential", "Channel Partners"]
---

#### Blocks
1. Hero: battery visual; headline “Residential LV Storage”
2. Channel-first positioning (installer/EPC)
   - Reliable supply, compatibility guidance, structured warranty support fileciteturn0file0
3. Offer blocks
   - For Installers/EPCs: supply terms, training, pairing guidance, warranty handling fileciteturn0file0
4. Models / Systems cards (if applicable)
5. CTA: Become an Installation Partner / Request Supply Info fileciteturn0file0

Live page exists (placeholder currently). citeturn1view0

---

### MountRex (LV)

---
title: "MountRex (LV)"
slug: "/pages/storage-mountrex"
parent: "/storage"
vertical: "storage"
brand: "MountRex"
template: "product-category"
audience: ["Residential", "Small Commercial"]
---

#### Blocks (from deck storage layout)
1. Hero: battery carousel + headline “Residential and Industrial Storage systems.” fileciteturn0file0
2. Split Section
   - Residential Storage (MountRex LV)
   - Commercial & Industrial (link to HV / BESS pages)
3. Catalogue Section (cards)
   - Model Name, Capacity (kWh), Voltage, Use Case, Short description, “View Specifications” fileciteturn0file0
4. Warranty & Safety
5. CTA: Talk to team / Request quote

Live page exists (placeholder currently). citeturn1view1

---

### zetara × Charania Renewables (HV)

---
title: "zetara × Charania Renewables (HV)"
slug: "/pages/storage-zetara"
parent: "/storage"
vertical: "storage"
brand: "MountRex"
template: "product-partner"
audience: ["C&I", "Industrial"]
---

#### Blocks (aligned to deck storage intent)
1. Hero: HV BESS / rack imagery; headline “C&I / BESS Storage”
2. Architecture fit
   - Peak shaving, redundancy, grid stabilisation
3. System options (modular/rack)
4. Integration note: ties into hybrid architecture (solar/wind + BESS + inverter)
5. CTA: Request Industrial Assessment

Live page exists (placeholder currently). citeturn1view2

---

### MountRex Sodium (NEW)

---
title: "MountRex Sodium"
slug: "/storage/mountrex-sodium"
parent: "/storage"
vertical: "storage"
brand: "MountRex"
template: "product-category"
status: "Coming Soon"
---

#### Blocks (recommended, consistent with deck storage logic)
1. Hero: sodium battery visual; “MountRex Sodium” + “Coming soon” ribbon
2. Why Sodium (benefits in Pakistan context)
   - Temperature resilience, safety profile, supply durability (keep claims general unless validated)
3. Intended applications
   - Residential backup, selected C&I scenarios
4. Planned models (placeholder cards)
5. CTA: Register interest / Talk to engineer

---

### Comparison & Applications

---
title: "Comparison & Applications"
slug: "/pages/storage-comparison"
parent: "/storage"
vertical: "storage"
brand: "MountRex"
template: "education"
---

#### Blocks (from deck)
1. Hero: “Battery Comparison & Applications” fileciteturn0file0
2. LV vs HV (what changes, when to choose) fileciteturn0file0
3. ESS vs BESS (definitions + scale distinction) fileciteturn0file0
4. Use-case mapping (home / plaza / factory) + visual table fileciteturn0file0
5. Hybrid compatibility
   - Solar pairing, wind pairing, inverter integration, grid-connected vs off-grid fileciteturn0file0
6. Channel guidance (installers/EPCs)
   - How to select voltage class; when to move LV→HV; basic load matching logic fileciteturn0file0
7. CTA: Contact technical support / Request sizing

Live page exists (placeholder currently). citeturn1view3

---

## GENERATION (Vertix + Solar) — Vertical

### Vertix (Wind Energy by CR)

---
title: "Vertix Wind Systems"
slug: "/pages/generation-vertix"
parent: "/generation"
vertical: "generation"
brand: "Vertix"
template: "vertical-landing"
---

#### Blocks (from deck)
1. Hero: vertical-axis turbine image (motion) fileciteturn0file0
2. Key Specs (generic)
   - Output range, vertical-axis config, low noise, operating wind range, urban/industrial fit fileciteturn0file0
3. Applications
   - Industrial rooftops, warehouses, textile facilities, commercial buildings, hybrid rural installs fileciteturn0file0
4. Hybrid Integration Diagram
   - Wind → BESS → Inverter → Load → Grid; show redundancy/hybrid architecture fileciteturn0file0
5. CTA set
   - Request wind feasibility assessment
   - Talk to energy engineer
   - Download technical overview fileciteturn0file0

Live page exists (placeholder currently). citeturn1view4

---

### Solar Systems (Single Page with 3 internal sections)

---
title: "Solar Systems"
slug: "/pages/generation-solar"
parent: "/generation"
vertical: "generation"
brand: "Charania Renewables"
template: "vertical-landing"
note: "Solar is not primary; keep concise and integration-led."
---

#### Blocks (from deck; 3 sections in one page)
1. **Hero**
   - “Solar Generation Systems” + Tier‑1 integration for hybrid architecture fileciteturn0file0

2. **Section A — Solar Overview**
   - Positioning: partner-based; CR integrates panels into engineered systems (not a manufacturer) fileciteturn0file0
   - Partner logos: max 2–3 Tier‑1

3. **Section B — Solar + Hybrid Integration**
   - PV → BESS → Inverter → Load → Grid diagram
   - “Solar is one component of integrated architecture” fileciteturn0file0
   - Use cases: peak shaving, redundancy, financial optimisation fileciteturn0file0

4. **Section C — Solar + BESS Combo**
   - Configurations: residential (channel-supported), C&I rooftop arrays, ground-mounted installs, hybrid solar+storage, solar+wind hybrid fileciteturn0file0
   - Inverter integration: compatible with leading hybrid inverter manufacturers; paired specifically with VoltX/BESS (update naming if needed) fileciteturn0file0

5. **CTA**
   - Request solar feasibility assessment
   - Talk to engineering team fileciteturn0file0

Live page exists (placeholder currently). citeturn1view5

---

## STRUCTURES (Lmaxx) — Vertical

### Lmaxx Overview

---
title: "Lmaxx Overview"
slug: "/pages/structures-lmaxx"
parent: "/structures"
vertical: "structures"
brand: "Lmaxx"
template: "vertical-landing"
---

#### Blocks (aligned to deck “MountX” structure, renamed to Lmaxx)
1. **Hero image of mounting**
   - Image: turbine/solar structure
   - Headline: *Lmaxx Structural Systems*
   - Subtext: Engineered by Charania Renewables (or partner line if applicable) fileciteturn0file0

2. **Engineering Positioning**
   - Aluminium grade
   - Corrosion resistance
   - Wind load tolerance
   - Structural lifespan
   - Compliance standards fileciteturn0file0

3. **System Categories**
   - Rooftop systems
   - Ground-mounted systems
   - Custom industrial fabrication fileciteturn0file0

4. **Integration**
   - Built for hybrid energy systems
   - Used for solar/wind mounting and integrated architectures fileciteturn0file0

5. **CTA**
   - Request structural assessment fileciteturn0file0

Live page exists (placeholder currently). citeturn1view6

---

### Rooftop Mounting

---
title: "Rooftop Mounting"
slug: "/pages/structures-rooftop"
parent: "/structures"
vertical: "structures"
brand: "Lmaxx"
template: "product-category"
---

#### Blocks (recommended consistency)
1. Hero: rooftop mounting image + positioning line
2. Engineering notes: load classes, corrosion treatment, roof types supported
3. Configurations: residential / C&I rooftop variants
4. Integration: solar array mounting + hybrid readiness
5. CTA: Request structural assessment

Live page exists (placeholder currently). citeturn1view7

---

### Ground Mounting

---
title: "Ground Mounting"
slug: "/pages/structures-ground"
parent: "/structures"
vertical: "structures"
brand: "Lmaxx"
template: "product-category"
---

#### Blocks (recommended consistency)
1. Hero: ground-mount image + positioning
2. Engineering: wind load, soil/foundation, corrosion, standards
3. Configurations: fixed tilt / adjustable (if applicable)
4. Integration: solar ground arrays + hybrid sites
5. CTA: Request structural assessment

Live page exists (placeholder currently). citeturn1view8

---

### Custom / Industrial Fabrication

---
title: "Custom / Industrial"
slug: "/pages/structures-custom"
parent: "/structures"
vertical: "structures"
brand: "Lmaxx"
template: "solution"
---

#### Blocks (recommended)
1. Hero: industrial fabrication image
2. Capability: bespoke steel/aluminium, compliance, QA
3. Process: assess → design → fabricate → install
4. Integration: designed for hybrid plants, wind + solar + BESS sites
5. CTA: Request structural assessment / Talk to engineer

Live page exists (placeholder currently). citeturn1view9

---

## SOLUTIONS (HDE) — Vertical

### Hybrid Design & Engineering (HDE)

---
title: "Hybrid Design & Engineering (HDE)"
slug: "/pages/solutions-hybrid-engineering"
parent: "/solutions"
vertical: "solutions"
brand: "HDE"
template: "solution"
---

#### Blocks (from deck intent + homepage positioning)
1. Hero: “Hybrid Engineering & Design” (engineering-led) citeturn0view0
2. What HDE does: feasibility, architecture, integration blueprint
3. How it works: Load → Constraints → Design → Delivery (process strip) citeturn0view0
4. Outputs: sizing, SLD/architecture diagrams, redundancy strategy, economics
5. CTA: Request assessment / Book consultation

Live page exists (placeholder currently). citeturn1view10

---

### Industrial Energy Solutions

---
title: "Industrial Energy Solutions"
slug: "/pages/solutions-industrial"
parent: "/solutions"
vertical: "solutions"
brand: "HDE"
template: "solution"
---

#### Blocks (from deck)
1. Grid problem framing (Pakistan grid realities; keep factual and general) fileciteturn0file0
2. Hybrid diagram
3. Financial modelling (savings levers: peak shaving, reduced downtime) fileciteturn0file0
4. Redundancy layers (backup + failover) fileciteturn0file0
5. Assessment form CTA fileciteturn0file0

Live page exists (placeholder currently). citeturn1view11

---

### Hybrid Systems

---
title: "Hybrid Systems"
slug: "/pages/solutions-hybrid-systems"
parent: "/solutions"
vertical: "solutions"
brand: "HDE"
template: "solution"
---

#### Blocks (aligned to deck and homepage)
1. Hero: “Integrated Hybrid Systems”
2. Architecture diagram: solar + wind + BESS + inverter + load + grid citeturn0view0
3. Component roles (storage, generation, structures, controls)
4. Typical configurations (C&I, industrial)
5. CTA: Talk to engineer / Request assessment

Live page exists (placeholder currently). citeturn1view12

---

### Peak Shaving & Backup

---
title: "Peak Shaving & Backup"
slug: "/pages/solutions-peakshaving"
parent: "/solutions"
vertical: "solutions"
brand: "HDE"
template: "solution"
---

#### Blocks (from deck intent)
1. Hero: Peak shaving + redundancy
2. Use cases: tariff optimisation, generator reduction, uptime assurance fileciteturn0file0
3. Redundancy model: layers (grid + storage + gen + controls)
4. CTA: Energy assessment fileciteturn0file0

Live page exists (placeholder currently). citeturn1view13

---

## ABOUT

### Who We Are

---
title: "Who We Are"
slug: "/pages/about-who"
parent: "/about"
vertical: "about"
brand: "Charania Renewables"
template: "about"
---

#### Blocks
1. Positioning summary (engineering-led hybrid integrator)
2. Operating model (channel-supported residential; engineering-led industrial) citeturn0view0
3. Values / standards
4. CTA: Contact / Request assessment

Live page exists (placeholder currently). citeturn1view14

---

### Charania Group / Legacy

---
title: "Charania Group / Legacy"
slug: "/pages/about-group"
parent: "/about"
vertical: "about"
brand: "Charania Renewables"
template: "about"
---

#### Blocks
1. Heritage / credibility
2. Capability alignment to CR
3. CTA: Partners / Contact

Live page exists (placeholder currently). citeturn1view15

---

### Partners

---
title: "Partners"
slug: "/pages/about-partners"
parent: "/about"
vertical: "about"
brand: "Charania Renewables"
template: "about"
---

#### Blocks
1. Tier‑1 and engineering partners (logos + short descriptors)
2. What partnership means (warranty, support, quality)
3. CTA: Enquiry

Live page exists (placeholder currently). citeturn1view16

---

### Quality, Warranty & Safety

---
title: "Quality, Warranty & Safety"
slug: "/pages/about-quality"
parent: "/about"
vertical: "about"
brand: "Charania Renewables"
template: "about"
---

#### Blocks
1. Quality standards + compliance
2. Warranty process
3. Safety positioning (install standards, partner requirements)
4. CTA: Talk to technical support

Live page exists (placeholder currently). citeturn1view17

---

## CONTACT

---
title: "Contact"
slug: "/pages/contact"
parent: "/"
vertical: "contact"
brand: "Charania Renewables"
template: "contact"
---

#### Blocks
1. Contact form
2. Direct lines (phone/WhatsApp/email)
3. Office address + map embed placeholder
4. CTA: Request a meeting

Live page exists. citeturn1view18

---

## 5) Implementation Notes (Non-Styling)

- Keep the existing **CSS, fonts, colors, spacing, and JS interactions** in your repo as the single source of truth.
- This blueprint is intended to:
  - Ensure every page has a defined purpose and block structure
  - Prevent “product clutter” by keeping vertical logic clean fileciteturn0file0
  - Enable fast content population by mapping blocks into your current HTML templates


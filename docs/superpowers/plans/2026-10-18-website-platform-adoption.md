# Dundir Website Platform & Use Case Adoption Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Realign the Dundir website (`dundir.com` / `dundir.nl`) to reflect the Three-Engine Platform (Procurement Solver, Jobsite Digital Twin & Smart Gate, Forecasting & Institutional Memory), the 4 operational use cases, real-world construction crisis data, and on-premises data sovereignty.

**Architecture:** Hugo static site generator with multi-language capability (NL default, EN, SR). Structured content files (`content/**/*.md`) supply content parameters into modular Hugo templates (`layouts/**/*.html`), with translated navigation, doors, and form labels in `i18n/*.toml`.

**Tech Stack:** Hugo (v0.147+), Vanilla CSS (design tokens in `assets/css/`), HTML5, client-side JavaScript.

**Spec:** [`docs/superpowers/specs/2026-10-18-usecase-platform-adoption-design.md`](file:///home/chris/Nextcloud/Github/DunDir/Website/docs/superpowers/specs/2026-10-18-usecase-platform-adoption-design.md)

## Global Constraints

* **Zero Em-Dashes:** No unicode em-dash (`\u2014`) or double hyphens (`--`) as punctuation anywhere in content, templates, or translations. Use colons, semicolons, parentheses, commas, or `***` dividers. In Mermaid diagrams, use `==>` or `-.->`.
* **Zero Banned Buzzwords:** Zero occurrences of *leverage, seamless, robust, revolutionize, cutting-edge, state-of-the-art, game-changing, transformative, flywheel, moat*. Use operational terms (*feedback loop, accumulated contract memory, defensibility, deterministic optimization*).
* **Absolute Veracity:** Every quantitative metric and empirical statistic must cite verified evidence dossiers `[EVID-XXX]` from `01-evidence/EVIDENCE-LEDGER.md`.
* **Honest Commercial Posture:** Do not claim live production deployments without pilot caveats ("Nog niet af, en dat zeggen wij liever zelf").
* **Hugo Build Cleanliness:** `hugo` must compile cleanly with 0 errors and 0 warnings.

## Review Focus

1. **Deterministic Solver Accuracy:** Ensure optimizer descriptions differentiate between LLM text extraction/reporting and deterministic combinatorial optimization.
2. **Smart Gate Technical Realism:** Ensure OCR gate scanning and 3-way matching descriptions remain grounded in edge computing capabilities without cloud dependency.
3. **Data Sovereignty Rigor:** Accurately present local deployment under Baseline Informatiebeveiliging Overheid (BIO 2019) standards.
4. **Tone & Audience Fit:** Maintain direct, unadorned Dutch engineering prose tailored for a 55-year-old Dutch construction director or municipal procurement officer.
5. **No Broken Links:** All internal links, doors, navigation buttons, and i18n URL mappings must resolve properly across NL, EN, and SR.

---

### Task 1: Dutch Homepage Modernization (`content/_index.md`)

**Files:**
- Modify: `content/_index.md`
- Inspect: `layouts/index.html`

- [x] **Step 1: Update Frontmatter & Hero**
  - Update `headline` and `sub` to highlight materials cost (70%) and introduce the Dual Procurement Solver & Jobsite Digital Twin.
  - Maintain the cost stack bar: 70% Materiaal (Dundir rekent en verifieert), 18% Arbeid, 12% Overig [EVID-001].
- [x] **Step 2: Update Triple Crisis & System Architecture Sections**
  - Section 1: Pre-construction clerical bottleneck (31.7% administratie [EVID-034], 42 uur per offerte [EVID-036], €8.354 fout bij generieke AI [Hamppi 2025]).
  - Section 2: Bouwplaats executie (70% vrachtwagens wachten 50 min bij de poort [EVID-012], 95% bonnen foutief [EVID-018], 4 tot 6 weken Wkb-opleveringsvertraging [EVID-021]).
  - Section 3: Institutioneel geheugen (<5% van personeel blijft van start tot eind [EVID-047], 95% historische ERP-data corrupt [EVID-045]).
  - Section 4: De Drie Engines van Dundir (Procurement Solver, Jobsite Digital Twin & Slimme Poort, Forecasting & Institutioneel Geheugen).
  - Section 5: Waar wij staan (eerlijke status: onderzoekstraject met bedrijf eromheen; pilotpartners gezocht).
  - Section 6: Twee kopers, één probleem (aannemers 50-500 fte; 342 Nederlandse gemeenten).
  - Regulatory compliance chips: Aanbestedingswet 2012 art. 2.130, CPR 2024/3110, Wkb (Wet kwaliteitsborging voor het bouwen), EU AI Act (High-Risk verordening dec 2027), CSRD Scope 3.
- [x] **Step 3: Verification**
  - Run `hugo` to confirm compilation.
  - Inspect generated HTML to confirm all sections, chips, and claims render without errors.

---

### Task 2: Dutch Problem Page (`content/het-probleem/index.md`)

**Files:**
- Modify: `content/het-probleem/index.md`

- [x] **Step 1: Add Opening Historical Disasters & Triple Crisis**
  - Detail Fyra HSL (2013): €900M write-off on price-only tender; unverified winter durability; trains grounded in 6 weeks.
  - Detail Afsluitdijk (2024): €435M overrun; materials diverged from spec without audit trail; delivered reality diverged from agreed contracts.
- [x] **Step 2: Detail Jobsite Breakdown & WhatsApp Chaos**
  - 70% of material trucks waiting 50 minutes at site gate [EVID-012].
  - 95% of delivery tickets containing discrepancies [EVID-018].
  - 4 to 6 week handover blockades under Wkb [EVID-021].
- [x] **Step 3: Detail Pre-Construction Clerical Bottleneck & Institutional Amnesia**
  - 31.7% estimator time lost to manual entry [EVID-034]; 42 hours per tender [EVID-036].
  - <5% staff remaining start-to-finish [EVID-047]; 95% corrupted legacy ERP records [EVID-045].
- [x] **Step 4: Detail Regulatory Ratchet & Generative AI Non-Determinism**
  - EU AI Act high-risk classification by Dec 2027 [EVID-025].
  - Aanbestedingswet Art. 2.130, CPR 2024 DPP requirements [EVID-026, EVID-027].
  - Generative AI failure: €8,354 non-determinism error in Skanska test [Hamppi 2025; Atil 2025].
- [x] **Step 5: Verification**
  - Run `hugo` to check build.

---

### Task 3: Dutch How It Works Page (`content/hoe-het-werkt/index.md`)

**Files:**
- Modify: `content/hoe-het-werkt/index.md`

- [x] **Step 1: Detail the Three-Engine Platform Architecture**
  - Step 1: Specificatie structureren (AI leest Nederlands bestek en extraheert harde randvoorwaarden en CPR 2024 normen).
  - Step 2: Deterministische solver berekent het optimum (combinatorische optimalisatie over prijs, levertijd, transportkilometers en CO2).
  - Step 3: Slimme poortcontrole en drieweg-matching (mobiele en vaste OCR scant vrachtbrieven en kentekens; automatische 3-way matching met bestelbon en factuur).
  - Step 4: Realtime Wkb-dossieropbouw (keuringsresultaten en certificaten direct in Dossier Bevoegd Gezag).
  - Step 5: Terugkoppeling naar contractgeheugen (werkelijke leverprestaties voeden weegfactoren voor volgende aanbestedingen).
- [x] **Step 2: On-Premises Data Sovereignty (BIO 2019)**
  - Local server deployment: zero external cloud dependencies, zero data egress, zero training on shared models [EVID-028, EVID-029].
  - Compliance with Baseline Informatiebeveiliging Overheid (BIO 2019).
- [x] **Step 3: Deterministic Explainability & Boundary Definition**
  - Mathematical determinism: identical inputs yield identical outputs every single time.
  - Clear boundaries: the optimizer calculates and records; the professional estimator/manager reviews and signs off.
- [x] **Step 4: Verification**
  - Run `hugo` to verify build.

---

### Task 4: Dutch Use Cases Hub & Operational Pages

**Files:**
- Modify: `content/toepassingen/index.md`
- Modify: `layouts/toepassingen/single.html`
- Modify: `content/offertevergelijking/index.md` & `layouts/offertevergelijking/single.html` (UC1)
- Modify: `content/leveranciersevaluatie/index.md` & `layouts/leveranciersevaluatie/single.html` (UC2)
- Modify: `content/inkooppakket/index.md` & `layouts/inkooppakket/single.html` (UC3)
- Modify: `content/contractbeheer/index.md` & `layouts/contractbeheer/single.html` (UC4: Major Upgrade)

- [x] **Step 1: Update Toepassingen Hub**
  - Update `layouts/toepassingen/single.html`: Reframe cards around lifecycle mapping:
    * UC1: Offertevergelijking & Best-Value Solver (Pre-constructie)
    * UC2: Leveranciersevaluatie & Kennisbehoud (Continue evaluatie)
    * UC3: Inkooppakket & Specificatiestructurering (Specificatiefase)
    * UC4: Slimme Poort & Bouwplaatsinspectie / Wkb (Bouwplaats & Oplevering)
- [x] **Step 2: Refine UC1, UC2, UC3**
  - UC1: Highlight combinatorial best-value solver, route-aware logistics, CPR 2024 gate, and €8,354 GenAI drift protection.
  - UC2: Focus on continuous supplier performance feedback loop, multi-criteria scoring, and countering the <5% personnel turnover baseline.
  - UC3: Detail natural language specification parsing into hard constraints, budget limits, and CPR 2024 compliance checklists.
- [x] **Step 3: Transform UC4 into Smart Gate & Jobsite Digital Twin**
  - Rename context to "UC4: Slimme Poort & Bouwplaatsinspectie / Wkb".
  - Replace generic contract management with Smart Gate OCR, automated 3-way matching (bestelbon, vrachtbrief, factuur), physical chain of custody, ADR hazardous cargo checks, and automated compilation of the Wkb Dossier Bevoegd Gezag.
- [x] **Step 4: Verification**
  - Run `hugo` to verify layout rendering and routing.

---

### Task 5: Dutch Pilot & About Us Pages

**Files:**
- Modify: `content/pilot/index.md`
- Modify: `content/over-ons/index.md`

- [x] **Step 1: Update Pilot Page (`content/pilot/index.md`)**
  - Define structured 10-Week Proof of Value (PoV) protocol:
    * Week 1: Lokale installatie & ERP-inname.
    * Week 2 (7-daagse Time to First Value gate): Eerste vrachtbrief gescand via mobiele OCR en 3-way matching gevalideerd binnen 7 dagen.
    * Weken 3-8: Dual-run evaluatie (schaduwdraaien op offertes en poortcontroles; afwijkingen loggen).
    * Weken 9-10: Auditreview, faalkostenanalyse, Wkb-opleverdossier en go/no-go besluit.
  - Commercial pricing contrast: Fixed per-site licensing vs legacy software volume taxes (0.15% to 0.35% of gross construction volume) [EVID-046].
- [x] **Step 2: Update About Us Page (`content/over-ons/index.md`)**
  - Team: Christiaan Verhoef (CEO, Windesheim anchor), Dr. Milan Jelisavcic (CTO, PhD Evolutionary Robotics VU Amsterdam).
  - Advisory Board: Kirsten Coppoolse (Operations, ex-COO Open Food Chain), Dr. Nina Gluhovic / Jelisavcic (Civil Engineering, Asst Prof Belgrade), Gerard Tunteler (Municipal Channel Lead, HPE 19 years).
  - Ecosystem & Pipeline: ED Züblin AG (STRABAG Group) pilot pathway, 342 Dutch municipalities via Gerard Tunteler, Hogeschool Windesheim & University of Belgrade research anchors.
- [x] **Step 3: Verification**
  - Run `hugo` to verify build.

---

### Task 6: Internationalization Synchronization (English & Serbian)

**Files:**
- Modify: `i18n/en.toml`, `i18n/sr.toml`
- Modify: `content/_index.en.md`, `content/_index.sr.md`
- Modify: `content/het-probleem/index.en.md`, `content/het-probleem/index.sr.md`
- Modify: `content/hoe-het-werkt/index.en.md`, `content/hoe-het-werkt/index.sr.md`
- Modify: `content/toepassingen/index.en.md` & `layouts/toepassingen/single.en.html`
- Modify: `content/contractbeheer/index.en.md` & `layouts/contractbeheer/single.en.html`
- Modify: `content/pilot/index.en.md`, `content/pilot/index.sr.md`
- Modify: `content/over-ons/index.en.md`, `content/over-ons/index.sr.md`

- [x] **Step 1: Synchronize English content and templates**
  - Translate all new sections, claims, proof points, and UC4 smart gate elements into precise, high-density English.
- [x] **Step 2: Synchronize Serbian content**
  - Update `.sr.md` files for core pages (homepage, problem, how it works, pilot, about us).
- [x] **Step 3: Verification**
  - Test `/en/` and `/sr/` paths in Hugo build.

---

### Task 7: Quality Assurance, Invariant Audit, & Git Push

**Files:**
- Script: `scratch/audit_website_invariants.py` (temporary test script)

- [x] **Step 1: Invariant Compliance Check**
  - Scan all modified files for banned unicode em-dashes (`\u2014`) and `--` punctuation.
  - Scan all modified files for banned marketing buzzwords (*leverage, seamless, robust, revolutionize, cutting-edge, state-of-the-art, game-changing, transformative, flywheel, moat*).
  - Check that all evidence metrics match ledger citations.
- [x] **Step 2: Clean Hugo Static Build**
  - Run `hugo --minify` to confirm zero errors and generate clean static output.
  - Confirm WCAG 2.1 AA accessibility and responsive layout integrity.
- [x] **Step 3: Git Commit & Remote Push**
  - Add all modified and created files in `Website`.
  - Write descriptive commit message following Conventional Commits.
  - Push branch to `origin/main`.

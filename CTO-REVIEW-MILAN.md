# CTO Review Brief: Dundir Website & Platform Realignment

**For:** Dr. Milan Jelisavcic, CTO  
**From:** Antigravity Executive Partner (Strategy & Architecture Engine)  
**Date:** 2026-10-18  
**Subject:** Technical & Architectural Realignment of the Dundir Website (`dundir.com` / `dundir.nl`)  
**Design Spec:** [`docs/superpowers/specs/2026-10-18-usecase-platform-adoption-design.md`](file:///home/chris/Nextcloud/Github/DunDir/Website/docs/superpowers/specs/2026-10-18-usecase-platform-adoption-design.md)  
**Primary Source:** `../Company/` (Evidence Ledger EVID-001 through EVID-049, Business Case Pillar A, 5-Pager Executive Briefing)  

***

## 1. Context & Motivation

Dundir's positioning has evolved significantly beyond a standalone pre-construction quotation comparison spreadsheet tool. Following the completion of Layer 01 (49 verified empirical research dossiers) and Layer 03 (commercial business case, quantitative ROI models, and executive briefing), Dundir is established as an integrated **Three-Engine Platform for Construction Procurement & Jobsite Systems**.

The public-facing website (`Website/`) currently lags behind this reality, presenting Dundir almost exclusively through the lens of Joni Hamppi's early master's thesis (tender quotation spreadsheets). We are aligning the website to match our current operational architecture, market reality, and enterprise pipeline.

***

## 2. Technical Architecture for the Website

### 2.1 The Three-Engine Platform Framing

The website copy and diagrams will present Dundir as three interconnected engines operating locally on client infrastructure:

1. **Deterministic Procurement Engine:**
   * Best-value combinatorial optimization evaluating unit price, freight transit miles, schedule constraints, and carbon intensity.
   * Hard mathematical determinism: identical inputs yield identical outputs on every run, directly contrasting with commercial LLM drift (€8,354 variation documented in Hamppi 2025; non-determinism benchmarks in Atil et al. 2025).
   * CPR 2024 compliance gate validating Environmental Product Declarations (EPD) and Digital Product Passports (DPP) before award [EVID-027].
   * Legally defensible audit records compliant with Aanbestedingswet 2012 Article 2.130 [EVID-026].

2. **Jobsite Digital Twin & Smart Gate:**
   * Edge computer vision and optical character recognition (OCR) capturing paper delivery slips and license plates at the jobsite gate.
   * Automated 3-way matching reconciling purchase orders, delivery receipts, and invoices in real time [EVID-018].
   * Physical chain-of-custody tracking and ADR hazardous transport compliance.
   * Real-time automated compilation of inspection records into the Dossier Bevoegd Gezag required under the Wet kwaliteitsborging voor het bouwen (Wkb), eliminating the 4 to 6 week handover blockades [EVID-021].

3. **Forecasting & Institutional Memory Engine:**
   * Continuous feedback loop: historical supplier delivery punctuality, price variance, and defect rates feed forward to recalibrate scoring parameters for subsequent tender bids.
   * Solves the institutional amnesia of long-duration construction where fewer than 5% of staff remain from inception to closeout [EVID-047/Rockx].
   * Cleanses corrupted legacy ERP records into structured procurement memory [EVID-045].
   * 100% on-premises data sovereignty: data never leaves the client network and never trains shared third-party models [EVID-028; EVID-029; BIO 2019].

***

### 2.2 Operational Use Cases (Hybrid 3-Engine & 4-Workflow Mapping)

Rather than discarding the existing `/toepassingen/` structure, we map the four operational workflows directly across the project lifecycle and the three engines:

* **UC1: Offertevergelijking & Best-Value Solver** (`/offertevergelijking/`): Deterministic multi-objective optimization, route-aware logistics costing, normalizing unstructured PDF/email bids.
* **UC2: Leveranciersevaluatie & Kennisbehoud** (`/leveranciersevaluatie/`): Multi-criteria supplier scoring, performance tracking across projects, preserving supplier intelligence past staff turnover.
* **UC3: Inkooppakket & Specificatiestructurering** (`/inkooppakket/`): Language model extracts specifications in plain Dutch and structures hard boundaries, weighted objectives, and CPR 2024 compliance requirements.
* **UC4: Slimme Poort & Bouwplaatsinspectie / Wkb** (`/contractbeheer/`): Major upgrade from generic contract administration to the **Smart Gate and Jobsite Digital Twin** (gate OCR, automated 3-way matching, physical chain of custody, and Wkb Dossier Bevoegd Gezag building).

***

## 3. Ground Truth Verification & Citations

Every technical and empirical claim on the site links directly to our verified evidence dossiers:

* **Pre-Construction Deskwork Bottleneck:** 31.7% of estimator time lost to clerical deskwork [EVID-034]; 42 hours per tender quotation [EVID-036]; contractor margins compressed at 1.0% to 2.0% [EVID-023]; failure costs running 5% to 11% of turnover [EVID-022].
* **Jobsite Execution Breakdown:** 70% of material delivery trucks wait up to 50 minutes at the gate [EVID-012]; 95% of delivery tickets are incomplete or incorrect [EVID-018]; delivery failures halt 8% to 25% of scheduled tasks [EVID-016]; missing certificates cause 4 to 6 week municipal building handover delays [EVID-021].
* **Institutional Amnesia & ERP Corruption:** 78% of material procurement on paper/email [EVID-043]; less than 50% of purchases comply with master vendor agreements [EVID-044]; 95% of 10-year legacy ERP transaction records are corrupted [EVID-045]; fewer than 5% of personnel remain from tender to completion on large infrastructure jobs [EVID-047].
* **Commercial Model:** Transparent fixed per-site licensing contrasted with legacy software vendors charging a 0.15% to 0.35% Annual Contract Value gross volume tax [EVID-046].

***

## 4. Engineering Review Checkpoints for Milan

Please review the following five specific technical areas:

1. **Optimization Engine Phrasing:**
   * Is the distinction between the AI language layer (parsing specifications, generating reports) and the deterministic optimizer (evaluating constraints and selecting optimal allocations) clear and mathematically accurate?
   * Does the copy avoid attributing mathematical decisions to probabilistic LLMs?

2. **Smart Gate & OCR Technical Realism:**
   * Does the description of mobile/fixed gate OCR scanning, license plate logging, and automated 3-way matching reflect our edge computing roadmap?
   * Are the edge device assumptions realistic for Dutch construction sites without reliable internet connectivity?

3. **Data Sovereignty & Local Deployment:**
   * Does the local deployment narrative accurately reflect our hardware requirements and Baseline Informatiebeveiliging Overheid (BIO 2019) compliance?
   * Are we clear about the guarantee that client data never trains shared models?

4. **10-Week Proof of Value (PoV) Protocol:**
   * In `content/pilot/`, we outline a 10-week paid PoV with a mandatory 7-Day Time to First Value (TTFV) milestone (first delivery slip scanned and 3-way matched). Is this milestone sequence feasible from a software deployment perspective?

5. **Multi-Language Architecture:**
   * We will build out Dutch first (the primary commercial market), followed by English and Serbian. Does this sequence meet our immediate partner and presentation needs?

***

## 5. Next Steps

Upon your approval or feedback on this brief and the detailed design specification:
1. We will establish the implementation plan using `writing-plans`.
2. Execute the Dutch-first content and layout updates across `content/` and `layouts/`.
3. Verify the static Hugo build, run em-dash and buzzword validation scripts, and confirm WCAG 2.1 AA accessibility.

---
title: How it works
description: From material specification to smart gate inspection and Wkb handover dossier. Locally deployed, mathematically grounded, with a full audit trail.
slug: how-it-works
lede: Dundir connects mathematical procurement optimization with physical verification at the gate and an accumulated contract memory. The professional evaluates and decides. The system computes, verifies, and archives.
sections:
- eyebrow: The lifecycle
  heading: Five steps from specification to handover.
  steps:
  - h: Structuring the specification
    p: 'The AI language layer reads your specification or tender document in plain language. The system extracts hard constraints, delivery schedules, budget ceilings, and CPR 2024 certification criteria. This is the sole stage where a language model operates.'
  - h: Deterministic solver calculates the optimum
    p: 'The optimization engine evaluates unit price, delivery schedules, freight miles, and carbon intensity. Pure mathematics: identical inputs yield identical outputs every single time, accompanied by an audit-ready reasoning trail.'
  - h: Smart gate verification and 3-way matching
    p: 'Upon arrival at the site gate, mobile or fixed edge OCR scans delivery tickets and truck license plates. The system performs instantaneous 3-way matching across purchase orders, physical delivery receipts, and vendor invoices.'
  - h: Real-time Wkb handover dossier compilation
    p: 'Inspection records, delivery receipts, and quality stamps are automatically linked into the statutory Dossier Bevoegd Gezag under the Dutch Wkb regulation. No missing documentation during final municipal commissioning.'
  - h: Feedback to accumulated contract memory
    p: 'Actual supplier delivery punctuality, defect frequencies, and unit price variances are logged automatically. This data recalibrates scoring parameters for the next tender bid.'
- tone: chalk
  eyebrow: Data sovereignty
  heading: Why it runs locally on your own infrastructure.
  body: 'Construction data, cost estimates, and commercial terms are strategically sensitive. Dundir runs 100% on-premises on your enterprise servers or local jobsite edge hardware:'
  after: 'Local deployment is an operational necessity rather than a preference. Research at Cedervall showed that public cloud models were unusable due to high subscription costs, third-party API dependencies, and mandatory internal data isolation. For Dutch authorities and general contractors, the Dutch Government Information Security Baseline (BIO 2019) mandates that data remains on internal networks.'
  claims:
  - fig: Sovereignty
    body: Your procurement data and pricing history never leave your internal network. No data egress to commercial cloud providers occurs, and proprietary records never train external models.
    word: true
  - fig: Continuity
    body: Fully operational without active internet connectivity at the jobsite gate. The system continues running through network outages and remains immune to third-party vendor policy changes.
    word: true
  - fig: Compliance
    body: Satisfies BIO 2019 government standards, ISO 27001, and GDPR guidelines without requiring special cloud exception waivers.
    word: true
  source: Friðriksson 2025, KTH · Van Duuren 2025, TU Delft · BIO 2019
- eyebrow: Explainability
  heading: Every calculation and gate inspection is verifiable.
  proof:
    fig: Deterministic
    label: Identical inputs yield identical outputs. Generic enterprise AI returned errors up to 8,354 euro on a single tender line for identical inputs.
    src: Hamppi 2025, Aalto University · Atil et al. 2025
  body: 'Which constraints were enforced, what trade-offs were balanced between freight transit distance and material unit costs, and why a supplier was selected: the system records the exact formula and parameter weights.

    The same rigor applies at the gate: every delivery ticket scan and 3-way match decision is logged with timestamps, reference IDs, and variance percentages.

    For municipalities, this satisfies Public Procurement Act Article 2.130. For contractors, it provides an airtight legal file during subcontractor disputes or claims.'
- tone: chalk-2
  eyebrow: Boundaries
  heading: What the system does not do.
  body: 'Dundir does not make autonomous business decisions and does not replace human experts. The estimator, buyer, and site superintendent maintain full control.

    The platform eliminates clerical data entry and manual matching so professionals can focus on negotiations, quality inspections, and strategic vendor management. Formal sign-off and legal accountability remain with your organization.

    The system calibrates against your proprietary transaction history. When experienced staff departs, accumulated vendor intelligence stays preserved within your firm.'
  caveat:
    lab: Honest about the stage
    text: The three modules are engineered and validated in controlled environments, not sold as a standardized mass-market commodity. Design partners joining now directly direct parameter calibration and operational integration.
---

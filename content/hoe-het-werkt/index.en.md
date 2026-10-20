---
aliases: ["/en/how-it-works/"]
title: How it works
description: From material specification to smart gate inspection and Wkb handover dossier. Designed for local deployment, mathematically grounded, with a full audit trail.
slug: how-it-works
lede: Dundir is being designed to connect mathematical procurement optimization with physical verification at the gate and an accumulated contract memory. The professional evaluates and decides. The system computes, verifies, and archives.
sections:
- eyebrow: The lifecycle
  heading: The design in five steps, from specification to handover.
  figure: cycle
  steps:
  - h: Structuring the specification
    p: 'The AI language layer reads your specification or tender document in plain language. The system extracts hard constraints, delivery schedules, budget ceilings, and CPR 2024 certification criteria. This is the sole stage where a language model operates.'
  - h: Deterministic solver calculates the optimum
    p: 'The optimization engine evaluates unit price, delivery schedules, freight miles, and carbon intensity. Pure mathematics: identical inputs yield identical outputs every single time, accompanied by an audit-ready reasoning trail.'
  - h: Smart gate verification and 3-way matching
    p: 'Upon arrival at the site gate, mobile or fixed edge OCR scans delivery tickets and truck license plates. The system performs instantaneous 3-way matching across purchase orders, physical delivery receipts, and vendor invoices. This step exists today as a lab prototype on the bench.'
  - h: Real-time Wkb handover dossier compilation
    p: 'Inspection records, delivery receipts, and quality stamps are to be linked automatically into the statutory Dossier Bevoegd Gezag under the Dutch Wkb regulation. No missing documentation during final municipal commissioning.'
  - h: Feedback to accumulated contract memory
    p: 'Actual supplier delivery punctuality, defect frequencies, and unit price variances are logged automatically. This data recalibrates scoring parameters for the next tender bid.'
- tone: chalk
  figure: sovereignty
  eyebrow: Data sovereignty
  heading: Why it runs locally on your own infrastructure.
  body: 'Construction data, cost estimates, and commercial terms are strategically sensitive. Dundir is designed to run fully on-premises, on your enterprise servers or local jobsite edge hardware:'
  after: 'Local deployment is an operational necessity rather than a preference. Research at Cedervall showed that public cloud models were unusable due to high subscription costs, third-party API dependencies, and mandatory internal data isolation. Dutch public bodies work within the Government Information Security Baseline (BIO). A local system fits inside that framework without a cloud exception.'
  claims:
  - fig: Sovereignty
    body: Your procurement data and pricing history stay on your internal network. The design has no data egress to commercial cloud providers, and proprietary records never train external models.
    word: true
  - fig: Continuity
    body: Designed to work at the jobsite gate without an internet connection, so network outages and third-party price or policy changes do not stop the work.
    word: true
  - fig: Compliance
    body: Designed to fit within the Dutch BIO and the GDPR, without a cloud exception procedure.
    word: true
  source: Friðriksson 2025, KTH · Van Duuren 2025, TU Delft · BIO 2019
- eyebrow: Explainability
  heading: Every calculation and gate inspection must be verifiable.
  proof:
    fig: Deterministic
    label: Identical inputs yield identical outputs. Given identical inputs, generic enterprise AI moved one subcontractor total by up to 8,354 euro between sessions.
    src: Hamppi 2025, Aalto University · Atil et al. 2025
  body: 'Which constraints were enforced, what trade-offs were balanced between freight transit distance and material unit costs, and why a supplier was selected: the system is designed to record the exact formula and parameter weights.


    The same rigor applies at the gate: every delivery ticket scan and 3-way match decision is to be logged with timestamps, reference IDs, and variance percentages.


    For municipalities, this supports the reasoning required under Public Procurement Act Article 2.130. For contractors, it provides a documented file during subcontractor disputes or claims.'
- tone: chalk-2
  eyebrow: Boundaries
  heading: What the system does not do.
  body: 'Dundir does not make autonomous business decisions and does not replace human experts. The estimator, buyer, and site superintendent maintain full control.


    The platform eliminates clerical data entry and manual matching so professionals can focus on negotiations, quality inspections, and strategic vendor management. Formal sign-off and legal accountability remain with your organization.


    The system calibrates against your proprietary transaction history. When experienced staff departs, accumulated vendor intelligence stays preserved within your firm.'
  caveat:
    lab: Honest about the stage
    text: None of the three modules is a product yet. The procurement solver is in research and design, the smart gate is a lab prototype on the bench, the contract memory is a design. Partners who join now help decide what gets built first.
---

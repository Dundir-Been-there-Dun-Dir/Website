---
aliases: ["/en/the-problem/"]
title: The problem
description: Construction projects derail in procurement and at the gate, not on the blueprints. The real cost of manual paperwork, WhatsApp chaos, and missing audit records.
slug: the-problem
lede: Construction projects rarely fail because of structural calculations. They fail because 70% of project costs reside in materials, while procurement awards and gate deliveries are handled via spreadsheets, WhatsApp messages, and paper receipts.
sections:
- eyebrow: Historical disasters
  heading: When the supply chain fractures.
  claims:
  - fig: '€900M'
    body: <strong>Fyra HSL (2013).</strong> Written off entirely after a public tender awarded strictly on lowest purchase price. Physical winter durability and material performance were never verified; the fleet was permanently grounded within six weeks.
  - fig: '€435M'
    body: <strong>Afsluitdijk (2024).</strong> Massive cost overrun caused by material specifications diverging from contract terms without an auditable verification trail. What was delivered to the site failed to match what was contracted.
  source: Parliamentary Inquiry Fyra 2015 · Netherlands Court of Audit 2024
- tone: chalk
  figure: gate
  eyebrow: The triple crisis
  heading: Office, gate, and memory.
  body: 'The breakdown of traditional construction procurement unfolds across three consecutive operational stages:


    <strong>1. Pre-construction clerical bottleneck:</strong> Estimators spend 31.7% of working hours on administrative data entry instead of value analysis. Calculating a single formal tender quotation takes a median of 42 labor hours. While contractor margins remain compressed between 1.0% and 2.0%, construction failure costs run between 5% and 11% of turnover.


    <strong>2. Jobsite and gate breakdown:</strong> 70% of delivery trucks wait up to 50 minutes at the site gate due to manual checking. 95% of paper delivery tickets contain discrepancies or missing certifications. Delivery failures halt 8% to 25% of scheduled tasks on site.


    <strong>3. Institutional amnesia:</strong> 78% of material procurement relies on informal emails and WhatsApp chats. Less than 50% of field purchases comply with negotiated master agreements. At one contractor studied, cleansing more than 1,000 historical projects left 54 usable, while fewer than 5% of personnel remain from tender to completion on large projects.'
  source: Donyavi et al. 2024 · Laryea & Hughes 2011 · EIB 2014 · Aldeeb 2024 · Qflow 2025 · Rockx 2023, TU Delft · Steuer et al. 2023
- eyebrow: Why now
  heading: Regulation demands auditable proof.
  body: 'Informal processes are legally closed. Four binding frameworks make spreadsheets and paper clipboards indefensible:'
  after: <strong>The spreadsheet and clipboard are no longer legally compliant.</strong>
  claims:
  - fig: Wkb
    body: <strong>Dutch Quality Assurance Act (Wkb).</strong> The Dossier Bevoegd Gezag demands as-built proof of all installed materials and inspections. Missing certificates cause 4 to 6 week handover delays before municipal occupancy permits are granted.
    word: true
  - fig: CPR 2024
    body: <strong>Construction Products Regulation (EU 2024/3110).</strong> Digital Product Passports (DPP) and Environmental Product Declarations (EPD) are mandatory at the gate for supply chain traceability.
    word: true
  - fig: Art. 2.130
    body: <strong>Public Procurement Act 2012.</strong> Every public award decision requires an objective, verifiable, and reproducible audit trail for municipal review and regulatory scrutiny.
    word: true
  - fig: AI Act
    body: <strong>EU AI Act (High-Risk).</strong> Systems supporting procurement and supplier selection face strict transparency, documentation, and determinism mandates by December 2027.
    word: true
- tone: chalk-2
  eyebrow: Precision
  heading: Generic AI fails to calculate reliably.
  proof:
    fig: '€8,354'
    label: error on a single tender line when using a generic enterprise AI tool
    src: Hamppi 2025, Aalto University. Case study based on an internal Skanska experiment.
  body: 'In an internal Skanska experiment, a generic enterprise language model returned different numerical outputs for identical procurement inputs, with deviations up to 28%. This is the inherent nature of probabilistic language models (Atil et al. 2025).


    A language model predicts the most probable next word; an optimization engine calculates the mathematical optimum. Procurement decisions involving contract liabilities require exact mathematics, not statistical approximations.


    Dundir decouples language from computation: the AI layer structures specifications, while the deterministic solver calculates the optimal allocation.'
  caveat:
    lab: What this does not prove
    text: The experiment proves that generic language models are unsuitable for reliable numerical comparisons. It does not prove that our solver buys more cheaply in practice than an experienced chief estimator. That validation requires empirical pilot data gathered on active projects.
---

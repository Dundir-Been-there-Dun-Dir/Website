---
aliases: ["/en/"]
title: Dundir
description: AI-driven procurement decisions and jobsite systems for construction, designed for local deployment and an auditable trail. In development with design partners.
headline: Up to seventy percent of your project is <span class="cut">procurement.</span>
sub: The unit price is optimized. That is rarely the biggest issue. Where is the material, when will it arrive, and is it certified? Dundir is building a mathematical procurement solver and a jobsite digital twin.
stack:
  label: One euro of project cost, divided
  source: Donyavi et al. 2024, in Hamppi 2025
  alt: 'Project cost split: up to 70 percent materials, the rest labour and other costs.'
  segments:
  - kind: material
    pct: up to 70%
    name: Materials · where Dundir computes and verifies
  - kind: rest
    pct: the rest
    name: Labour and other
  footLeft: Procurement is not a back office function
  footRight: It is the cost structure
sections:
- eyebrow: The triple crisis
  heading: The bill is already running.
  claims:
  - fig: 31.7%
    body: of estimator working hours lost to clerical data entry rather than cost analysis. Calculating a single formal quotation takes a median of 42 labor hours.
  - fig: 50 min
    body: idle wait time at the jobsite gate for 70% of material delivery trucks. 95% of delivery tickets failed data quality criteria in an audit of 831,206 records. Handover delays of 4 to 6 weeks under the Dutch Quality Assurance Act (Wkb) are reported.
  - fig: <5%
    body: of staff see a 500 to 600 million euro Dutch infrastructure project through from start to finish, one interviewee in a TU Delft study estimates. Procurement intelligence evaporates with staff turnover. At one contractor studied, cleansing more than 1,000 historical projects left 54 usable.
  source: Laryea & Hughes 2011 · EIB 2014 · Aldeeb 2024 · Qflow 2025 · Eerste Kamer 2026 · VNG 2024 · Rockx 2023, TU Delft · Steuer et al. 2023
- tone: chalk
  figure: cycle
  eyebrow: The platform
  heading: Three complementary engines.
  lede: 'A language model writes an answer. An optimization engine calculates one. Dundir is being built to connect mathematical procurement optimization with verification at the gate and an accumulated contract memory.'
  body: 'The design has three interconnected modules, meant to run locally on your own infrastructure. Each is at its own stage:


    <strong>1. Deterministic Procurement Engine (research and design):</strong> Combinatorial optimization across unit price, delivery schedule, transit miles, and carbon intensity. Deterministic by design: identical inputs must yield identical outputs every time, without the numerical drift of generative AI (up to 8,354 euro on one subcontractor total in Hamppi 2025).


    <strong>2. Jobsite Digital Twin & Smart Gate (lab prototype):</strong> The goal: OCR at the gate reads delivery tickets and license plates on arrival, matches purchase orders, delivery receipts, and invoices, and builds the Dossier Bevoegd Gezag under the Dutch Wkb as it goes. Today the first edge hardware runs on the bench: two linked boards with a small language model on the chip, no internet needed. Camera and smart glasses come next.


    <strong>3. Forecasting & Institutional Memory (design):</strong> Actual delivery punctuality, defect rates, and schedule variances are meant to feed the scoring parameters for future tenders, so operational knowledge stays when staff leave.


    <strong>Designed to keep your data in your network.</strong> The system is designed to run on-premise, so a public body can stay inside its own security frameworks (such as the Dutch BIO). The design trains no one else''s models on your data.'
- tone: chalk-2
  eyebrow: Where we stand
  heading: Not finished, and we would rather say so ourselves.
  body: 'Dundir is a research initiative with a company around it, not a finished off-the-shelf product with a marketing story around it. The optimization theory is established; its application to Dutch construction procurement and jobsite logistics is new.


    The fundamental question remains open: what does <em>optimal</em> mean when balancing price, delivery time, certification, gate logistics, and carbon footprint simultaneously, and at what data volume does this approach outperform an experienced buyer and jobsite superintendent?


    That is why we seek design partners rather than software buyers. Partners who join at this stage help determine how the system is calibrated and what gets built first.'
  caveat:
    lab: What the research does not claim
    text: Academic literature establishes the problem and the local deployment model. It does not prove that our solver buys more cheaply in practice than your senior estimator. That validation requires empirical pilot data, which we gather together.
- eyebrow: Who it is for
  heading: Two buyers, one supply chain.
  claims:
  - fig: 50 to 500
    body: <strong>Mid-size contractors.</strong> Eliminate manual data entry and halt jobsite delays. The goal is to capture the Wkb handover record and CPR 2024 certificates at the moment of delivery.
  - fig: '342'
    body: <strong>Dutch municipalities.</strong> Every public award decision must be demonstrably defensible under Aanbestedingswet Article 2.130. Dundir is designed to give a mathematical audit trail at selection and to check contract compliance on delivery.
  chipslabel: Regulatory drivers enforcing this
  chips:
  - label: Aanbestedingswet art. 2.130
    live: true
  - label: CPR 2024/3110
    live: true
  - label: Wkb Handover Dossier
    live: true
  - label: EU AI Act Dec 2027
    live: false
  - label: CSRD Scope 3
    live: false
---

---
title: Dundir
description: AI-driven procurement decisions and jobsite systems for construction. Locally deployed. Mathematically grounded. Audit-ready.
headline: Seventy percent of your project is <span class="cut">procurement.</span>
sub: The unit price is optimized. That is rarely the biggest issue. Where is the material, when will it arrive, and is it certified? Dundir combines a mathematical procurement solver with a jobsite digital twin.
stack:
  label: One euro of project cost, divided
  source: Donyavi et al. 2024, in Hamppi 2025
  alt: 'Project cost split: 70 percent materials, 18 percent labour, 12 percent other.'
  segments:
  - kind: material
    pct: 70%
    name: Materials · where Dundir computes and verifies
  - kind: labour
    pct: 18%
    name: Labour
  - kind: other
    pct: 12%
    name: Other
  footLeft: Procurement is not a back office function
  footRight: It is the cost structure
sections:
- eyebrow: The triple crisis
  heading: The bill is already running.
  claims:
  - fig: 31.7%
    body: of estimator working hours lost to clerical data entry rather than cost analysis. Calculating a single formal quotation consumes 42 labor hours on average.
  - fig: 50 min
    body: idle wait time at the jobsite gate for 70% of material delivery trucks. 95% of paper delivery tickets contain errors or missing certificates, causing 4 to 6 week handover blockades under the Dutch Quality Assurance Act (Wkb).
  - fig: <5%
    body: of personnel remain on major infrastructure projects from inception to closeout. Procurement intelligence evaporates with staff turnover, while 95% of legacy ERP records are corrupted after ten years.
  source: Rockx 2023, TU Delft · Hamppi 2025 · Aldeeb 2024 · Qflow 2025 · VNG 2024
- tone: chalk
  eyebrow: The platform
  heading: Three complementary engines.
  lede: 'A language model writes an answer. An optimization engine calculates one. Dundir connects mathematical procurement optimization with real-time verification at the gate and an accumulated contract memory.'
  body: 'The platform consists of three interconnected modules running locally on your own infrastructure:

    <strong>1. Deterministic Procurement Engine:</strong> Mathematical combinatorial optimization across unit price, delivery schedule, transit miles, and carbon intensity. Pure determinism: identical inputs yield identical outputs every single time, without the numerical drift of generative AI (up to 8,354 euro error per line in Hamppi 2025).

    <strong>2. Jobsite Digital Twin & Smart Gate:</strong> Mobile and fixed edge OCR scans delivery tickets and license plates upon arrival. Automated 3-way matching reconciles purchase orders, delivery receipts, and invoices. Real-time compilation of the Dossier Bevoegd Gezag under the Dutch Wkb regulation.

    <strong>3. Forecasting & Institutional Memory:</strong> Actual delivery punctuality, defect rates, and schedule variances feed forward into scoring parameters for future tenders. Operational knowledge remains within your enterprise when staff departs.

    <strong>Your data never leaves your network.</strong> The platform runs on-premise in compliance with the Dutch Government Information Security Baseline (BIO 2019). Zero dependency on third-party cloud APIs.'
- tone: chalk-2
  eyebrow: Where we stand
  heading: Not finished, and we would rather say so ourselves.
  body: 'Dundir is a research initiative with a company around it, not a finished off-the-shelf product with a marketing story around it. The optimization theory is established; its application to Dutch construction procurement and jobsite logistics is new.

    The fundamental question remains open: what does <em>optimal</em> mean when balancing price, delivery time, certification, gate logistics, and carbon footprint simultaneously, and at what data volume does this approach outperform an experienced buyer and jobsite superintendent?

    That is why we seek design partners rather than software buyers. Partners who join at this stage help determine how the system is calibrated and own what gets deployed.'
  caveat:
    lab: What the research does not claim
    text: Academic literature establishes the problem and the local deployment model. It does not prove that our solver buys more cheaply in practice than your senior estimator. That validation requires empirical pilot data, which we gather together.
- eyebrow: Who it is for
  heading: Two buyers, one supply chain.
  claims:
  - fig: 50 to 500
    body: <strong>Mid-size contractors.</strong> Eliminate manual data entry and halt jobsite delays. Wkb handover compliance and CPR 2024 certifications are captured immediately upon gate arrival.
  - fig: '342'
    body: <strong>Dutch municipalities.</strong> Every public award decision must be demonstrably defensible under Aanbestedingswet Article 2.130. Dundir provides a mathematical audit trail during selection and verifies physical contract compliance upon delivery.
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

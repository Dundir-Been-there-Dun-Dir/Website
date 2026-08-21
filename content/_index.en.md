---
title: Dundir
description: AI-driven procurement decisions for construction. Locally deployed. Mathematically grounded. Audit-ready.
headline: Seventy percent of your project is <span class="cut">procurement.</span>
sub: Not the planning, not the supervision, not the office overhead. Materials. And that seventy percent is still decided in a spreadsheet, by a buyer who spends eleven hours a week comparing.
stack:
  label: One euro of project cost, divided
  source: Donyavi et al. 2024, in Hamppi 2025
  alt: 'Project cost split: 70 percent materials, 18 percent labour, 12 percent other.'
  segments:
  - kind: material
    pct: 70%
    name: Materials · where Dundir computes
  - kind: labour
    pct: 18%
    name: Labour
  - kind: other
    pct: 12%
    name: Other
  footLeft: Procurement is not a back office function
  footRight: It is the cost structure
sections:
- eyebrow: What it costs
  heading: The bill is already running.
  claims:
  - fig: 11 hrs
    body: a week, per buyer, comparing suppliers in Excel and email. With three buyers that is 148,500 euro a year of unproductive time, before the cost of a wrong choice.
  - fig: 8,354
    body: euro of error on a single tender line. A generic enterprise AI system returned different numerical outputs for identical inputs. That is not an edge case, that is how generative AI works.
  - fig: <5%
    body: of staff see a Dutch infrastructure project of 500 to 600 million euro through from start to finish. Procurement knowledge walks out between two project phases, and no system holds on to it.
  source: Rockx 2023, TU Delft
- tone: chalk
  eyebrow: The difference
  heading: Computing, not generating.
  lede: 'A language model writes an answer. An optimisation engine works one out. That difference is not academic: it is the difference between advice you cannot defend and a decision an accountant, an auditor or a procurement board will accept.'
  body: 'Dundir fixes your hard constraints, KOMO certification, delivery window and budget ceiling, and weighs price, reliability and CO2 inside them according to weights you set yourself. What remains is one supplier combination, with the rule that chose it underneath. The AI layer reads the specification and writes the report. The optimiser makes the decision.


    The system runs on your own server. Your prices, your supplier agreements and your contract data never leave your network. For a municipality that is not a preference but a precondition.


    <strong>The same input gives the same output. Every time.</strong>'
- tone: chalk-2
  eyebrow: Where we are
  heading: Not finished, and we would rather say so ourselves.
  body: 'Dundir is a research track with a company around it, not a finished product with a research story around it. The optimisation theory is not new. Its application to Dutch construction procurement is, and the core question is still open: what does <em>optimal</em> mean exactly, weighed across price, delivery time, certification and sustainability, and at what data volume does that approach beat an experienced buyer.


    That is precisely why we are looking for partners rather than customers. Whoever joins at this stage helps decide what the system is calibrated on, and keeps what gets built.'
  caveat:
    lab: What the research does not prove
    text: The literature supports the problem and the local deployment model. It does not prove that our particular optimisation approach buys more cheaply in practice than an experienced buyer. That validation has to come from pilot data, and we do not have it yet.
- eyebrow: Who it is for
  heading: Two buyers, one problem.
  claims:
  - fig: 50 to 500
    body: <strong>Mid-size contractors.</strong> Procurement admin costs time that is better spent elsewhere, and the return is directly measurable in hours recovered. CPR 2024 adds new demands on procurement documentation on top of that. Dundir produces that documentation as a by-product.
  - fig: '342'
    body: <strong>Dutch municipalities.</strong> Every procurement decision has to be demonstrably defensible. The Aanbestedingswet requires documented evaluation of supplier selection, and 342 municipalities do that with near identical processes. Dundir produces the required audit trail with every decision.
  chipslabel: Regulation forcing this
  chips:
  - label: Aanbestedingswet
    live: true
  - label: CPR 2024/3110
    live: true
  - label: CSRD Scope 3
    live: false
- tone: chalk
  eyebrow: The team
  heading: Five people, no generalists.
  people:
  - name: Christiaan Verhoef
    role: CEO
    body: Windesheim University of Applied Sciences, founder of the Value Chain Hackers AI Lab. Contributed to 2 million euro in fundraising.
  - name: Dr Milan Jelisavčić
    role: CTO
    body: PhD Evolutionary Robotics, VU Amsterdam. Production ML at Stedin, bliq and ABN AMRO.
  - name: Kirsten Coppoolse
    role: COO
    body: Scaled Open Food Chain from first employee to twenty people, doubling revenue six years running.
  - name: Dr Nina Jelisavčić
    role: Domain expert
    body: Assistant Professor of Civil Engineering, University of Belgrade. Twelve years in construction specification standards.
  - name: Gerard Tunteler
    role: Head of government sales
    body: Nineteen years as HPE Local Government Lead Netherlands. Founder of the HPE Roundtable for Municipalities.
  link:
    href: /en/about/
    label: Meet the team
---

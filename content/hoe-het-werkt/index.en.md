---
title: How it works
description: From material specification to audit-ready comparison report. Locally deployed, mathematically grounded, with a full reasoning trail.
slug: how-it-works
lede: Dundir removes the administrative work before the decision and documents the reasoning after it. The buyer reviews and decides. The system computes and records.
sections:
- eyebrow: The chain
  heading: Five steps, one report.
  steps:
  - h: You enter a material specification
    p: In plain language, the same way you would describe it today. No form to fill in, no separate notation.
  - h: The AI layer translates the specification
    p: 'The system turns it into structured procurement requirements: required certifications, delivery windows, budget limits and weighted objectives. This is the only place in the chain where a language model is at work.'
  - h: The optimisation engine computes the best combination
    p: It runs on your supplier database and finds the mathematically demonstrable best combination given your hard requirements and weighted objectives. Not a suggestion. A computed answer with a full reasoning trail.
  - h: You review the output and decide
    p: You see a ranked comparison with sources, certification status and the full reasoning trail. You decide. The system records your decision and the reason for it.
  - h: The audit-ready report is generated automatically
    p: Ready for internal approval, external audit or public procurement review. No extra work afterwards.
- tone: chalk
  eyebrow: Local
  heading: Why it runs on your own server.
  body: 'Three consequences of local deployment that matter directly to municipalities and construction firms:'
  after: This is not our preference. It is what practice imposes. In a study at the architecture firm Cedervall, GPT-4 was prototyped and rejected on cost and third party dependency; cloud Llama-3 was rejected on twenty second latency and the requirement that data stay on the internal network. On-premise was the only acceptable outcome, and that was an architecture practice, not a municipality.
  claims:
  - fig: Data
    body: Your procurement data never leaves your own server. Prices, supplier agreements and contract details stay where they belong.
    word: true
  - fig: Continuity
    body: There is no dependency on external APIs or cloud providers. The system does not stop when a vendor changes its pricing or its terms.
    word: true
  - fig: Compliance
    body: The system satisfies GDPR and municipal IT policy without anyone having to request an exception for it.
    word: true
  source: Friðriksson 2025, KTH · van Duuren 2025, TU Delft
- eyebrow: Explainability
  heading: Every output shows its reasoning.
  proof:
    fig: Identical
    label: The same input gives the same output. A generic AI system returned different outputs for identical inputs, with errors of up to 8,354 euro on a single line.
    src: Hamppi 2025, Aalto University
  body: 'Which data sources were used, how each supplier was assessed, why one ranks above another. The system records it explicitly.


    For municipalities this is a legal requirement. For construction firms it is the difference between a report a manager signs and a report he sends back.'
- tone: chalk-2
  eyebrow: Limits
  heading: What the system does not do.
  body: 'Dundir does not make procurement decisions. The buyer reviews the output and decides. The system does not replace the buyer.


    It removes the administrative work so the buyer can do the actual job: judging, maintaining relationships and escalating. The decision and the responsibility stay with you.


    The system is trained on your own procurement history, not on a generic model. The result knows your preferred suppliers, your certification requirements and your earlier decisions. When a senior buyer leaves, that knowledge stays available to the whole team.'
  caveat:
    lab: Honest about the stage
    text: This chain is designed and partly built, not in production at a customer. Anyone joining now does so as a design partner and helps decide what the system is calibrated on.
---

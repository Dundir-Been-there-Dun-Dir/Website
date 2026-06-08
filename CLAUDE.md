# CLAUDE.md — Dundir Website

This file is the authoritative brief for any AI working in this repository. Read it fully before doing anything else.

---

## What Dundir is

Dundir builds an AI-powered procurement decision tool for construction companies and Dutch municipalities. It is locally deployed — the client's data never leaves their server. The core engine is a linear optimization / evolutionary algorithm system that finds the mathematically optimal supplier combination given hard constraints (certifications, delivery windows, budget) and weighted objectives (price, reliability, sustainability). An AI language layer reads the specification and generates the audit-ready report. The optimizer makes the decision.

**The problem it solves:** A construction procurement manager spends 11 hours a week comparing suppliers in spreadsheets — €49,500 a year per person in lost productive time. The output of that work (a supplier comparison report) is almost never properly documented, is not legally defensible, and disappears when the person leaves. EU CPR 2024, CSRD Scope 3, and the Aanbestedingswet are turning procurement documentation from good practice into legal obligation. The timing is not incidental.

**Why it is different from generic AI tools:** A 2025 Skanska experiment (Hamppi, Aalto University) showed that a generic enterprise GenAI tool gave different numerical outputs for identical procurement inputs — errors up to €8,354 on a single line. The Dundir optimizer is deterministic. It shows its working. Every recommendation is mathematically grounded, auditable, and defensible in front of a manager, an auditor, or a public procurement board.

**Primary customer segments:**
- Mid-size construction companies (50-500 employees) — fastest sales cycle, clearest ROI on procurement admin time
- Dutch municipalities — 342 identical buyers; legal documentation requirements make explainable AI essential, not optional

**Team:** Christiaan Verhoef (CEO, Windesheim University anchor), Dr. Milan Jelisavčić (CTO, PhD Evolutionary Robotics VU Amsterdam), Kirsten Coppoolse (COO, scaled Open Food Chain 0→20 people, 6x revenue), Dr. Nina Gluhović (Domain Expert, Assistant Professor Civil Engineering Belgrade), Gerard Tunteler (Head of Government Sales, HPE Local Government Lead Netherlands 19 years, founder HPE Ronde Tafel voor Gemeenten).

---

## Website goals

**Primary audience:** Construction procurement managers and their direct superiors at mid-size Dutch construction companies. Secondary: municipality procurement and IT decision-makers.

**Tone:** Sharp and direct. Confident. No fluff. Speaks to people who already know the problem — do not over-explain it. The copy should feel like it was written by someone who has sat in a procurement meeting, not by a marketing agency. Think: the pitch documents in the Company repo, not a SaaS homepage.

**Primary CTA:** A procurement pain scan — a short interactive questionnaire (5-7 questions) that asks about their current process, outputs a personalised estimate of time and money lost to manual procurement, and converts to a follow-up conversation. This is the digital equivalent of the simulation workshop: it makes the cost of bad procurement visible, qualifies the lead, and collects customer discovery data simultaneously.

**Platform:** GitHub Pages. No backend. Static site only for now.
**Domains:** `dundir.nl` (primary, owned) and `dundir.com` (secondary, redirect to .nl). Hugo base URL: `https://dundir.nl`. DNS via Cloudflare.

**Deployment:** Simple, fast, maintainable by non-developers. No complex build pipelines at launch.

---

## Winning by Design — Bowtie Methodology

Apply the WbD Bowtie framework to every design decision. The website serves the left side of the bowtie (pre-sale) but must be designed with the full lifecycle in mind.

**The six stages:**
1. **Awareness** — visitor first recognises the problem or discovers Dundir exists
2. **Education** — visitor learns about the problem and explores whether this solution fits
3. **Selection** — visitor compares options and evaluates Dundir seriously
4. **Onboard** — new client is activated (post-sale; website supports but does not own this)
5. **Impact** — client experiences measurable value (website can show proof/case studies later)
6. **Expansion** — satisfied client grows (not a website concern at this stage)

**Design implication:** Every page element should be assignable to a bowtie stage. The homepage serves Awareness and Education. The scan serves the Education→Selection transition. The team page serves Selection (credibility). There should be no content that exists "just because" — every section must move a visitor from one stage to the next.

**SPICED framework** — use this to structure the scan questions and the copy:
- **Situation** — what does their current procurement process look like?
- **Pain** — what specifically is costing them time, money, or risk?
- **Impact** — what is the measurable cost of that pain?
- **Critical Event** — what is creating urgency right now? (regulatory deadlines, audit risk, staff turnover)
- **Decision** — who decides, and what do they need to say yes?

---

## Agent structure

This repo uses specialised planning agents. Each agent owns one planning document in `/planning/`. Agents work independently and write their output to their assigned file. The synthesis (`planning/INDEX.md`) is written last, after all agents complete.

| Agent | File | Responsibility |
|---|---|---|
| `journey-agent` | `planning/01-wbd-bowtie-journey.md` | Map the WbD bowtie stages to the Dundir visitor journey. Who is the visitor at each stage? What do they need to see? What moves them forward? |
| `structure-agent` | `planning/02-site-structure.md` | Page architecture, navigation, content hierarchy. What pages exist, what lives on each, what is the information flow. |
| `scan-agent` | `planning/03-procurement-scan.md` | Design the procurement pain scan end-to-end: questions, logic, output format, how it converts to a lead, how it feeds customer discovery. |
| `copy-agent` | `planning/04-copy-strategy.md` | Tone, headline strategy, key messages per page, proof points, calls to action. Apply copywriting psychology to the construction procurement buyer. |
| `seo-tech-agent` | `planning/05-seo-and-tech.md` | GitHub Pages stack recommendation, SEO strategy for Dutch construction market, technical constraints and requirements. |

---

## Skills to load

When working on this project, load and apply the following skills as relevant to your task:

**Copy and messaging:**
- `copywriting-psychologist` — persuasive copy patterns for B2B buyers
- `copywriting` — core copywriting fundamentals
- `marketing-psychology` — psychological triggers (loss aversion, social proof, authority)
- `headline-psychologist` — headline design for conversion

**Conversion and UX:**
- `landing-page-generator` — landing page structure and patterns
- `page-cro` — conversion rate optimisation for pages
- `form-cro` — form and survey design for conversion
- `ux-flow` — user journey and flow design
- `onboarding-psychologist` — first-touch experience design

**SEO:**
- `seo-fundamentals` — SEO foundation
- `seo-content` — content-driven SEO
- `seo-page` — on-page SEO optimisation
- `seo-aeo-meta-description-generator` — meta descriptions

**Strategy and research:**
- `jobs-to-be-done-analyst` — JTBD analysis for construction procurement buyers
- `content-strategy` — content planning and architecture
- `growth-engine` — growth strategy aligned with WbD bowtie
- `competitive-landscape` — what competitors' websites look like

**Design and frontend:**
- `frontend-design` — visual design direction
- `web-design-guidelines` — design standards for credibility
- `ui-ux-designer` — UX design principles
- `minimalist-ui` — clean, direct UI appropriate for this audience

---

## Key constraints

- Static site only — no backend, no server-side processing at launch
- The scan must work without a backend at MVP (options: Typeform embed, Tally, or client-side JS with email output)
- GitHub Pages compatible stack — Jekyll, Hugo, or plain HTML/CSS/JS
- Must load fast — construction industry buyers are often on-site on mobile
- Must look credible to a 55-year-old Dutch procurement director, not just to a tech audience
- No lorem ipsum, no stock photos of handshakes, no generic "AI transforms your business" headlines
- Every claim on the site must be sourceable — use the research insights from the Company repo

---

## Credentials

Website-related passwords are stored in `credentials/dundir.kdbx` (KeePass vault, committed to repo). Master password held by Christiaan Verhoef — do not store it here or anywhere in the repo.

### Zoho Mail server config (dundir.com)

| Protocol | Server | Port | Encryption |
|----------|--------|------|------------|
| IMAP | imappro.zoho.eu | 993 | SSL |
| POP3 | poppro.zoho.eu | 995 | SSL |
| SMTP | smtppro.zoho.eu | 465 | SSL |
| SMTP | smtppro.zoho.eu | 587 | TLS |

---

## Source documents

The following documents from the Company repo are the authoritative source of truth. Any copy, data, or claims on the website must be consistent with these:

- `README.md` — elevator pitches, three-minute pitch, team, market sizing
- `business/business-model-canvas.md` — full business model, customer segments, value propositions
- `business/value-propositions/vpc-a-construction-company.md` — construction company pain points
- `business/value-propositions/vpc-b-municipality.md` — municipality pain points
- `resources/insights/INDEX.md` — research citations and citable statistics
- `resources/insights/hamppi-2025-ai-procurement-construction.md` — strongest research source (Skanska experiment, €8,354 error, 70% materials cost)

# WbD Bowtie Visitor Journey — Dundir
> Agent: journey-agent | Framework: Winning by Design Bowtie + SPICED + JTBD
> Last updated: 2026-05-14

---

## How to read this document

This document maps the six Winning by Design Bowtie stages to the Dundir visitor journey. Each stage defines exactly who is present, what they are thinking, what must happen for them to advance, and what kills the progression.

The website owns stages 1–3 (Awareness, Education, Selection). Stages 4–6 (Onboard, Impact, Expansion) are noted for design coherence but are not website responsibilities at launch.

Segment A = mid-size construction company procurement buyer
Segment B = Dutch municipality procurement officer

Both segments appear in the journey. Where they diverge materially, they are treated separately.

---

## SPICED Profile — Ideal Visitor

### Segment A: Construction Company Procurement Manager

**Situation**
A mid-size Dutch contractor (50–500 employees), active project pipeline, 2–6 procurement staff. The procurement team runs on a combination of ERP (AFAS, Exact, or SAP B1), email, and spreadsheets. Supplier contacts live in personal inboxes and people's heads. The comparison report before a significant order is a Word document assembled by hand from 3–5 email threads. It takes between 2 and 4 hours to produce. The best buyer on the team has been there for 12 years and knows the supplier landscape intuitively.

**Pain**
The 12-year buyer is 58. When they leave, no system captures what they know. Every new material spec requires starting from scratch — who supplies it, which certifications apply, what delivery window is realistic for the project schedule. Certificate expiry is discovered reactively, not proactively. The comparison report, when it exists at all, is not legally defensible — it reflects the buyer's intuition, not a documented evaluation methodology.

**Impact**
11.2 hours per procurement manager per week on supplier comparison and admin. At fully loaded cost, that is €49,500 per person per year in unproductive time. On the project side: a wrong material order or a non-compliant supplier certificate costs 10–15% margin on the affected variation. Materials are 40–70% of total project cost — procurement errors are not administrative failures, they are project profitability events.

**Critical Event** (what creates urgency right now)
One of three triggers is typically active:
1. A senior buyer is leaving, retiring, or has already left — the team is exposed
2. CPR 2024/3110 took force in January 2025 and operational requirements arrive January 2026 — a new certification layer is landing and no current tool handles it
3. A recent procurement error caused a delay, a variation cost overrun, or an awkward conversation with a project manager — the pain just became visible to management

**Decision**
The procurement director or head of procurement initiates. The CFO or operations director approves budget. IT must sign off on on-premise deployment. The buyer team must not resist — their trust is essential to adoption. Decision cycle: 1–3 months for a mid-size company.

---

### Segment B: Municipality Procurement Officer

**Situation**
A Dutch gemeente, procurement team of 2–6 officers handling public works, infrastructure maintenance, and construction-related tenders. Subject to the Aanbestedingswet 2012 and EU Directive 2014/24/EU. Every decision above the threshold must be documented with evaluation criteria applied consistently. The documentation is currently produced manually — a combination of spreadsheet scoring matrices, Word reports, and emailed certificates assembled per tender.

**Pain**
The documentation burden is the job. The actual procurement intelligence — who are the right suppliers, do their certificates match the spec, are they CPR-compliant — is a smaller part of the effort than the paperwork that must surround it. Consistency is legally required: if officer A scored supplier X at 7.2 on criterion 3 and officer B scores the same supplier at 6.8 in a comparable tender six months later, there is legal challenge exposure. Today, consistency relies on officers following internal protocol — which they do, imperfectly.

**Impact**
Any single inconsistent score is enough to unwind a contract award via ACM enforcement or judicial review. KPMG data: only 25% of Dutch public projects finish within 10% of deadline; 31% within 10% of budget. CPR 2024 adds a mandatory new dimension of supplier certification tracking from January 2026 — a requirement that no current tool in the Dutch municipal procurement stack addresses.

**Critical Event**
1. CPR 2024/3110 operational requirements arrive January 2026 — procurement teams need a compliant certification tracking methodology before then
2. An audit or legal challenge has occurred or is pending — the team needs defensible documentation retroactively and proactively
3. A digital transformation programme is underway at the gemeente — procurement AI fits a budget line that is already open

**Decision**
Head of procurement or contract management initiates the evaluation. CFO or city controller approves budget. IT department approves data architecture (local deployment is the unlock). Legal or compliance reviews the explainability requirement. Budget cycles are set September–November for the following year. Sales cycle: 6–18 months.

---

## Stage 1 — Awareness

### Who is this visitor?

**Segment A:** A procurement manager or director at a Dutch construction company. Age 40–58. Experienced — 10–20 years in construction procurement. Has heard "AI" mentioned in trade press or at a vakbeurs (sector trade fair). Probably arrived via LinkedIn (a post, an ad, an article share), via a Google search after something went wrong, or via word of mouth from a peer company. They are not browsing for solutions — something prompted them. That something is one of the three critical events above.

**Segment B:** A procurement officer or head of procurement at a Dutch gemeente. Arrived via a LinkedIn post from Gerard Tunteler's HPE network, a VNG (Association of Netherlands Municipalities) newsletter item, a peer recommendation, or a Google search for CPR 2024 compliance tooling. Risk-aware, procedurally minded, politically sensitive.

### What question are they asking?

"What is this, and is it relevant to me?"

They are not yet asking whether to buy. They are pattern-matching: does this look like something built for my world, or is it another generic AI product with a construction photo in the hero image?

### What do they need to see, feel, understand?

- The headline must name their world precisely: Dutch construction procurement, not "supply chain" or "AI platform"
- They need to feel immediately that the author understands what the job actually involves — not aspirationally, but operationally. The right signal is a specific pain stated in the language they use internally ("11 uur per week in spreadsheets" lands harder than "manual processes create inefficiency")
- They need a credible number they haven't seen before but immediately believe — the €49,500/year figure is the right hook because it translates their frustration into a financial object their CFO would recognize
- For Segment B: they need to see "Aanbestedingswet" and "CPR 2024" in the first scroll — these are compliance signals that tell them this is built for their specific legal context, not a generic procurement tool with a public sector slide deck added later

### Failure mode — what makes them leave?

- Generic AI language ("transform your procurement with the power of AI") — they have seen 40 of these and they bounce on sight
- No Dutch market specificity — if it looks like a US/UK SaaS product with a Euro sign added, they close the tab
- Stock imagery of handshakes, hard hats worn by people who have never been on a construction site, or "AI brain" graphics — visual signals of inauthenticity that experienced practitioners read instantly
- Slow load or mobile-unresponsive — buyers are often on-site; a site that doesn't load in 3 seconds on a 4G connection loses them
- No immediate answer to "does this know the Dutch market" — absence of Aanbestedingswet, CPR, or a Dutch context signal is itself a disqualifier

### Website element serving this stage

The homepage above-the-fold: headline, subheadline, and the opening statistic. Nothing more. The job of the hero section is to pass the "is this for me" filter, not to explain the product. A single credible number and a named Dutch regulatory context accomplishes this faster than 200 words of copy.

---

## Stage 2 — Education

### Who is this visitor?

The same person, 30–90 seconds later. They passed the "is this for me" test and they are now reading. They are skeptical and experienced. They have been sold AI tools before. They have watched vendors demo products that looked impressive and failed in practice. Their internal monologue is: "What does it actually do? What's the catch? Will it work for our specific situation?"

For Segment A: they are thinking about their specific workflow — the AFAS export, the supplier email thread, the Word comparison template they've been using for eight years.

For Segment B: they are thinking about the specific documentation obligation — can this produce output that satisfies the Aanbestedingswet and that a legal reviewer would not pick apart? And will it run on our infrastructure without going anywhere near a commercial cloud?

### What question are they asking?

"How does it actually work, and why is this different from everything else I've seen?"

### What do they need to see, feel, understand?

- A concrete description of the mechanism — not "AI-powered" but: the optimizer evaluates supplier combinations against your hard constraints (certifications, delivery windows, budget) and your weighted criteria (price, reliability, sustainability), and produces a ranked comparison with every step of the reasoning documented
- The Skanska/Hamppi finding: a generic enterprise AI tool gave different numerical outputs for identical procurement inputs — errors up to €8,354 on a single line. This is the sharpest differentiator claim available and it is sourced from a peer-reviewed 2025 master's thesis from Aalto University. It makes the case for a deterministic optimizer without the visitor having to take anything on faith
- For Segment B specifically: the word "explainable" used in the technical sense — every score traceable to a named data source, every comparison readable by a non-technical official or legal reviewer — is the credibility signal. "Explainable AI" is not marketing language for municipality procurement officers; it is a procurement law requirement
- For Segment A: the local deployment message delivered once, plainly: "Your data never leaves your building. No API calls to external services. The model runs on your own server." This closes the IT objection before it is raised
- Social proof appropriate for this skeptical audience: not testimonials from startups, but evidence from credible institutional sources — Skanska, TU Delft, Rijkswaterstaat context — that the problem is documented and that the approach is validated

### Failure mode — what makes them leave?

- Claims without sources — "reduces procurement time by 70%" with no citation is immediately discredited by this audience
- Over-promise on AI capability — any suggestion that the AI "decides" rather than "recommends and documents" will trigger the professional skepticism of someone who knows procurement decisions carry legal liability
- The explainability black box: if the visitor cannot understand from the website how the output is produced, they will not trust it. Construction procurement managers and municipality officers both need to be able to explain to their management why they are recommending this tool — they cannot do that if the website is vague about the mechanism
- Jargon without grounding: "LLM," "fine-tuning," "evolutionary algorithm" without plain-language translation. The visitor is a domain expert, not a machine learning expert. Technical depth is welcomed; technical opacity is not
- No answer to "what does the output look like?" — if they cannot picture the report they would hand to their manager or auditor, they cannot evaluate whether this works

### Website element serving this stage

The homepage problem/solution section and a "How it works" section (three-step process: input the specification, the optimizer evaluates and ranks, the AI documents the reasoning and outputs the comparison report). A single concrete output example — a screenshot or mockup of what the report looks like — does more than three paragraphs of copy. A highlighted callout with the Skanska €8,354 finding, sourced, is the strongest individual proof point available.

---

## Stage 3 — Selection

### Who is this visitor?

The visitor has cleared their own initial skepticism. They believe the problem is real, they believe the approach is differentiated, and now they are in evaluation mode. They are answering two parallel questions: "Is this the right tool?" and "Can I defend this choice to my management?"

At this stage for Segment A, the procurement director is also reviewing. They may have been sent the link by the buyer who first found it. The CFO may be in the room — metaphorically or literally — because the conversation has reached the point of "how much does this cost and what do we get?"

For Segment B, a second stakeholder has likely entered: the head of IT or the digital transformation coordinator. The question of local deployment is now being actively evaluated, not just noted.

### What question are they asking?

Segment A: "Is this credible enough for me to take it to my director? And does it actually fit our setup — our ERP, our team size, our procurement volume?"

Segment B: "Can I defend this to legal, to IT, and to my manager? And is there a municipality reference I can point to?"

### What do they need to see, feel, understand?

- **Team credibility:** For this audience, credentials must be domain-specific. Dr. Milan Jelisavčić (PhD, VU Amsterdam) gives the technical credibility. Dr. Nina Gluhović (Civil Engineering, Belgrade) gives the construction domain credibility. Gerard Tunteler (19 years HPE, founder of HPE Ronde Tafel voor Gemeenten) is the critical signal for Segment B — a person who has worked inside Dutch local government procurement for two decades is not a usual SaaS team member. These are not bios to bury — they are conversion elements
- **Qualification fit check:** The visitor needs to self-qualify. The procurement pain scan does this: it asks 5–7 questions about their current process, outputs a personalized estimate of their procurement cost, and implicitly confirms whether Dundir is a fit. A visitor who completes the scan and sees "your team is spending approximately €43,000 per year on manual procurement comparison" has just been shown a number they will take to their CFO
- **The on-premise proof:** For both segments but especially Segment B: a clear, specific statement of what "local deployment" means technically. Not a badge that says "on-premise" — a plain sentence: "The optimizer and model run on a server in your own environment. No data is transmitted to Dundir or any external service. Your IT team controls the environment entirely." This removes the GDPR objection and the commercial sensitivity objection simultaneously
- **A reference or research anchor:** At this stage the visitor is doing due diligence. A reference to the Hamppi 2025 (Aalto University) research, or to the van Duuren 2025 (TU Delft) research, or to the Windesheim University partnership, gives them an institutional anchor they can cite internally. Academic validation is not vanity for this audience — it is the kind of credibility that survives a procurement committee
- **A low-friction next step:** The CTA at this stage must not be "Book a demo" — that is too high commitment for a Dutch procurement professional who has not yet told anyone internally they are evaluating this. "Run the pain scan" is better: it is useful, private, low commitment, and produces a personalized output that gives them something concrete to bring to their manager

### Failure mode — what makes them leave?

- No team page or a team page with generic bios — this audience is buying expertise, not software features. If the team does not look credible in construction and Dutch public procurement, the tool cannot be trusted
- Pricing opacity: if the visitor cannot get any sense of investment level, they cannot prepare internally. They will not reach out if they fear the conversation will reveal a price they cannot justify. A "starts at X" or a "pilot engagement" framing gives them enough to continue without triggering sticker shock
- No qualification fit: if the website treats all visitors identically — a 50-person contractor and a 500-person contractor getting the same message — it signals the tool is not calibrated to their situation
- A demo CTA that requires immediate exposure: "Book a 30-minute demo" implies they must tell a salesperson they are interested before they have internally committed. The scan is the right intermediate step — it is self-service, it produces value immediately, and it qualifies the visitor without requiring them to commit to a conversation first
- Social proof from the wrong reference class: a testimonial from a logistics startup or a food industry buyer does not transfer to a Dutch construction procurement director. The reference must be from the right world

### Website element serving this stage

The team page (credibility by association — domain experts, not just technologists). The procurement pain scan (self-qualification, personalized output, lead capture). A "How we deploy" section addressing on-premise architecture in plain language. A research/evidence section with sourced claims. The primary CTA across all pages pointing to the scan.

---

## Stage 4 — Onboard (post-sale; website supports)

### Who is this visitor?

A new client. The contract is signed. The model is being deployed. The procurement team has been onboarded but has not yet produced their first output with the tool.

The critical question here is trust: does the tool's first real output match the quality the team expected from the demo? The first procurement comparison the tool generates will either anchor adoption or trigger doubt.

### What website elements support this stage?

At MVP, the website is not the onboarding surface — Dundir's team delivers onboarding directly. The website can support by:
- A client-facing documentation area (later build — not MVP)
- Case study pages that show what "good output" looks like, giving new clients a quality benchmark
- The CPR compliance tracker or regulation update page that keeps clients informed of changing certification requirements (a retention content play that also drives SEO)

### Failure mode

The first AI comparison output does not look like what was shown on the website. The gap between promise and delivery is the primary onboarding churn risk.

---

## Stage 5 — Impact (website can evidence this)

### Who is this visitor?

An existing client who is experiencing the value but has not yet articulated it. Or a visitor referred by an existing client who wants to see evidence of real outcomes.

At this stage the website needs proof, not promises. Case studies with specific numbers — "procurement cycle reduced from 2.5 hours to 18 minutes per transaction for [anonymized contractor], saving approximately €38,000 per year across a 3-person team" — are the content that converts referral visitors and accelerates new selection-stage visitors.

### What website elements support this stage?

Case studies and proof pages. These do not exist at launch — they are a 6–12 month content build. Placeholder for future build.

---

## Stage 6 — Expansion (not a website concern at launch)

### Who is this visitor?

An existing satisfied client whose procurement volume has grown, or whose team has expanded, or who is recommending Dundir to a peer at another company or gemeente.

The expansion signal: a gemeente that adopts Dundir and presents it at a VNG working group creates a reference that unlocks multiple other gemeenten simultaneously, because all 342 Dutch municipalities face identical compliance obligations. One municipal reference is disproportionately valuable.

The website supports expansion through:
- A reference/partner page (future build)
- VNG or trade association co-branding if achieved
- Case study content that peer recommendations can point to

---

## JTBD Map — Jobs Being Hired For

### Functional jobs (what they need the tool to do)

1. **Primary functional job — Segment A:** "Find me the right supplier combination for this specification, verify the certificates are current, and give me a documented comparison I can hand to my manager or put in the project file — in under 20 minutes."

2. **Primary functional job — Segment B:** "Produce a complete, legally defensible procurement record for every supplier evaluation I run, applying consistent criteria including CPR and sustainability weighting, that I can hand to an auditor or a legal reviewer without additional preparation."

### Emotional jobs (what they need to feel)

- **Segment A:** "Stop feeling like the person who is one staff departure away from a knowledge collapse. Stop feeling like my approval reports are one audit away from being embarrassing." The emotional hire is confidence and continuity.

- **Segment B:** "Stop feeling like every procurement decision is a legal liability waiting to be triggered. Stop being the person who has to spend three hours retroactively assembling documents when an audit arrives." The emotional hire is relief from exposure.

### Social jobs (what they need to signal)

- **Segment A:** "Be the procurement director who moved the team out of spreadsheets before the crisis hit, not after it. Demonstrate to the CFO and operations director that procurement is a controlled, professionally managed function."

- **Segment B:** "Be the procurement team that was already CPR-compliant before the mandate was enforced. Demonstrate to elected officials and the public that procurement decisions are transparent, consistent, and politically defensible."

### Switch trigger

The switch from "living with the problem" to "actively looking for a solution" is not feature-driven. It is triggered by a moment of exposure: the expert leaves, the audit arrives, the variation cost overrun reaches a management meeting, the CPR deadline appears in a VNG newsletter. The website must speak to the person who has just experienced one of these triggers — not to the person who is idly curious about AI.

---

## Bowtie Flow Summary

```
AWARENESS          EDUCATION          SELECTION
    |                  |                   |
    v                  v                   v
"Is this for      "How does it        "Is this team
 my world?"        actually work?"     credible, and
                                       is this a fit?"
    |                  |                   |
Headline +         Problem/solution    Team page +
opening stat       + Skanska proof     Pain scan +
+ NL regulatory    + mechanism +       On-premise
context signal     output example      explanation +
                   + local deploy      research anchor
                                           |
                                           v
                                      [Pain Scan]
                                      Personalised
                                      cost estimate
                                      -> lead captured
                                      -> conversation
                                         booked
```

---

## Progression Logic — What Moves a Visitor Forward

| From | To | Primary mechanism | Secondary mechanism |
|------|----|-------------------|---------------------|
| Awareness | Education | A specific, credible number that names their pain in financial terms | Dutch regulatory language that signals "this is built for your market" |
| Education | Selection | The Skanska/Hamppi finding (sourced proof that generic AI fails) + plain-language mechanism | An output example that shows what the report looks like |
| Selection | Converted lead | The procurement pain scan (personalized cost estimate, low-friction, self-service) | Team credentials + on-premise architecture explanation |
| Converted lead | Conversation | A scan result that produces a number worth taking to management | A clear, specific next step (not "contact us" — "your results have been sent; we'll follow up within 24 hours with a brief review") |

---

## Anti-patterns to Avoid in All Stages

These are not generic UX warnings. They are specific to this audience and this product.

1. **The enthusiasm trap.** Dutch procurement professionals are professionally trained to distrust enthusiasm. Certainty expressed through specific numbers and cited sources outperforms excitement expressed through adjectives. "Reduces procurement time by 75% on average" (unsourced) is less persuasive than "In documented comparable deployments, procurement cycle time dropped from 2–3 hours to under 10 minutes per transaction (SCMR / BuildMate, 2025)."

2. **The AI washing trap.** This audience has been sold "AI-powered" tools that were glorified keyword search. The word "AI" alone carries no weight. The mechanism matters: the optimizer is deterministic. It shows its working. It is not a language model guessing — it is a linear optimization engine producing a mathematically grounded recommendation. This distinction must be made explicit and early.

3. **The wrong CTA trap.** "Book a demo" at the wrong moment in the journey asks for commitment before trust is established. A Dutch procurement manager will not book a demo with an unknown vendor before they have done their own due diligence and formed a view internally. The scan is the right bridge — it is self-service, private, produces immediate value, and creates the opening for a follow-up conversation.

4. **The generic proof trap.** Testimonials from wrong-industry companies, statistics from US markets, and research from sectors that are not construction or public procurement will not transfer. Every proof point on the site must come from the right source category: Dutch construction, Dutch municipalities, or directly comparable European infrastructure contexts.

5. **The technical jargon trap.** "Fine-tuned model" and "evolutionary algorithm" are accurate but inaccessible. The translation is: "an AI trained specifically on construction procurement data, not a general-purpose tool" and "an optimizer that finds the best supplier combination mathematically, not by guessing." Technical visitors will appreciate the precision; non-technical decision-makers will appreciate the plain language.

---

## Open Questions for Subsequent Agents

These questions emerged from the journey mapping and should be addressed by downstream planning agents:

1. **For scan-agent:** What is the minimum number of scan questions that produces a meaningful personalized output? The tension is between qualification depth (more questions = better lead) and completion rate (fewer questions = more completions). This audience is busy; every unnecessary question loses them.

2. **For copy-agent:** The regulatory urgency (CPR January 2026) is the strongest Critical Event signal available. How prominently should it appear in the homepage copy without triggering the "this is a fear-based sales tactic" resistance in a professionally trained procurement audience?

3. **For structure-agent:** Should the site have separate entry points for Segment A (construction company) and Segment B (municipality), or does a unified homepage serve both adequately? The SPICED profiles are distinct enough that separate landing pages would improve conversion, but the added complexity may not be warranted at MVP.

4. **For seo-tech-agent:** The CPR 2024 regulatory search traffic is a near-term SEO opportunity — procurement officers searching for CPR compliance tools will find very little purpose-built competition. What Dutch search terms are generating volume around this regulation right now?

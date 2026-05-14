# Planning: 03 — Procurement Pain Scan

**Agent:** scan-agent
**File:** `planning/03-procurement-scan.md`
**Bowtie stage served:** Education → Selection transition
**Last updated:** 2026-05-14

---

## Purpose and design rationale

The procurement pain scan is the primary call to action on the Dundir website. It replaces a generic contact form with a tool that does three things simultaneously:

1. Makes the cost of bad procurement viscerally visible to the visitor — the same function as the simulation workshop, delivered at scale and without a salesperson in the room.
2. Qualifies the lead before any human time is spent on it.
3. Collects structured customer discovery data against the specific assumptions listed in the business model canvas.

The scan is not a survey. It is a short, opinionated tool that treats the visitor as someone who already knows the problem. It does not ask "are you aware that procurement is inefficient?" — it asks "how bad is yours, specifically?" That framing is respectful of their experience and produces a more honest response.

**JTBD framing (the progress the visitor is hiring the scan to make):**

- Functional job: confirm that the time they are losing is real and worth fixing
- Emotional job: feel understood rather than sold at; feel validated that the problem is industry-wide, not personal failure
- Social job: walk away with a number they can show their manager ("our procurement overhead costs us X per year")

**Psychological levers applied (PLFS-scored):**

| Model | PLFS | Application point |
|---|---|---|
| Loss Aversion | +13 | The output anchors on money and time lost, not features gained |
| Endowment Effect | +11 | The personalised result feels like something the visitor owns — they gave input, they get something back |
| Specificity / Concreteness | +12 | A named euro figure ("you are losing approximately €41,200/year") outperforms abstract claims |
| Social Proof (norming) | +10 | Questions reveal that their situation is typical; Skanska/Hamppi 2025 finding is cited as the industry baseline |
| Commitment and Consistency | +10 | Answering 6 questions creates small investment that makes the follow-up CTA feel like a natural next step rather than a cold ask |

**Form Health & Friction Index for this scan:**

The scan is not a standard form but a progressive-step questionnaire. Scoring it as designed:

- Field Necessity & Efficiency: 27/30 — every question earns its place; question 6 (contact) is the only commitment ask and comes last
- Value–Effort Balance: 19/20 — the promised output (personalised euro estimate) is clearly stated before the first question
- Cognitive Load & Clarity: 18/20 — one question per screen, conversational language, no jargon
- Error Handling: 13/15 — sliders and multiple choice eliminate most error states; number input is the only freeform field
- Trust & Friction Reduction: 9/10 — no account creation, no password, result shown before contact info is requested
- Mobile Usability: 5/5 — one question per screen, large tap targets, no horizontal scroll

**Total: 91/100 — High-Performing by design (target: maintain above 85)**

---

## The questions

### Question structure overview

| # | SPICED dimension | What it measures | Input type |
|---|---|---|---|
| Q1 | Situation | Company size / procurement volume | Multiple choice |
| Q2 | Situation | How they currently handle procurement | Multiple choice |
| Q3 | Pain | Where time is lost | Multiple choice (multi-select) |
| Q4 | Impact | Hours spent per week on procurement admin | Slider |
| Q5 | Critical Event | What is creating urgency right now | Multiple choice |
| Q6 | Decision | Role of the person filling in the scan | Multiple choice |

Then: name + email (optional at result view; required to send the result by email).

---

### Q1 — Situation: Scale

**Question text:**
> How many people in your organisation work on procurement or purchasing at least part of the time?

**Input type:** Multiple choice (single select)

**Options:**
- 1 person (it's mostly me)
- 2–4 people
- 5–10 people
- More than 10 people

**Why this question:**
Establishes the multiplier for the output calculation. The more people doing procurement manually, the larger the annual cost figure. It also segments the lead — a "1 person" answer is a micro-firm, a "5–10 people" answer is the target segment (50–500 employee construction company with a real purchasing department). This directly validates the BMC assumption about target segment size.

**Discovery data captured:**
- Validates the BMC assumption that mid-size construction companies (50–500 employees) are the right primary segment
- Indicates whether the pain is concentrated in one person or spread across a team (affects change management complexity)

**Interaction design note:**
Show four large tap-target cards, not a dropdown. No "Other" option — keep it forced choice to avoid analysis paralysis.

---

### Q2 — Situation: Current tools

**Question text:**
> How does your team currently compare supplier bids and prepare procurement reports?

**Input type:** Multiple choice (single select)

**Options:**
- Mainly in spreadsheets (Excel, Google Sheets)
- We use a procurement or ERP module (Exact Online, SAP, Unit4, or similar)
- A mix — spreadsheets for comparison, ERP for ordering
- Mostly in email and shared drives — no fixed system

**Why this question:**
Maps the existing tool stack without asking directly ("what software do you use?", which feels like a sales question). The answer reveals how digitally mature the organisation is and what integration path looks like. "ERP module" answers need a different pitch than "mostly email" answers.

**Discovery data captured:**
- Directly validates the BMC assumption: "ERP systems in target construction companies — Exact Online, SAP, Unit4, or other?"
- Reveals whether the product enters as a replacement, supplement, or integration
- "Mostly email and shared drives" is the highest-pain segment and should be flagged for faster follow-up

**Interaction design note:**
The options should read like things someone would actually say, not like a feature matrix. "Mainly in spreadsheets" comes first because it is the most common answer and seeing it first reduces cognitive friction.

---

### Q3 — Pain: Where time goes

**Question text:**
> Which of these eat up the most time in your procurement process? Select everything that applies.

**Input type:** Multiple choice (multi-select, up to 3 selections)

**Options:**
- Collecting and comparing bids from different suppliers
- Checking whether suppliers have the right certifications
- Writing up the procurement decision report or comparison document
- Going back to suppliers for missing or unclear information
- Getting internal approval for the final decision
- Keeping track of delivery times and order status

**Why this question:**
This is the most important discovery question. It identifies the specific pain point that is most salient for this individual visitor — which is the entry point Dundir should lead with in the follow-up conversation. The BMC assumption to validate: "Entry point scope — is bid comparison / supplier evaluation the right single starting problem, or is there a more painful, more bounded entry point?"

Limiting to 3 selections forces prioritisation. The visitor must think about what is worst, not just check every box.

**Discovery data captured:**
- Distribution of answers across the six options maps directly to the four procurement phases from Hamppi 2025: bid comparison, supplier evaluation, procurement package formation, contract oversight
- If "writing up the report" ranks highest, the documentation/audit angle is the right headline. If "collecting and comparing bids" ranks highest, the optimizer is the right lead product.
- Informs which product features to emphasise in the follow-up conversation

**Interaction design note:**
Show all six as checkboxes. Add a subtle counter: "Select up to 3." The constraint is psychological — it signals that the visitor's choices matter and their answer will be used, not discarded.

---

### Q4 — Impact: Time lost

**Question text:**
> In a typical week, how many hours do you personally spend on procurement tasks that feel like manual admin — comparing prices, filling in spreadsheets, chasing information?

**Input type:** Slider (1–20 hours, increments of 1)

**Default position:** 8 (slightly above the industry average of 11 hours/week cited in CLAUDE.md, which is the annual €49,500 figure; setting the default slightly lower avoids anchoring bias inflating the estimate)

**Display:** Show the selected number prominently as the slider moves: "**X hours per week**"

**Why this question:**
This is the primary input to the output calculation. It creates a moment of personal reckoning — the visitor has to stop and count. That counting process is itself persuasive: the act of estimating makes the cost feel real in a way that reading a statistic does not.

The slider format is intentional. A freeform number input would produce under-reporting (people round down when admitting waste). A slider with a visible range shows them that "8 hours" is not extreme — which makes honest answers more likely.

**Discovery data captured:**
- Direct data point for validating the "11 hours/week" industry figure against actual NL construction procurement managers
- Distribution of responses reveals whether the €49,500/year figure holds or needs recalibrating
- Outliers (1–2 hours or 18–20 hours) flag either non-target visitors or edge cases worth following up

**Interaction design note:**
Under the slider, show a single anchoring line in small text: "The industry average in construction is 11 hours per week." This is sourced from the CLAUDE.md brief and validates that the visitor is not being asked to feel bad about a personal failing — it is a structural industry problem.

---

### Q5 — Critical Event: Urgency driver

**Question text:**
> What is making procurement efficiency more urgent for your organisation right now?

**Input type:** Multiple choice (single select)

**Options:**
- New EU or Dutch regulation (EU CPR 2024, CSRD, Aanbestedingswet)
- A recent audit, tender loss, or procurement error we need to prevent again
- We are growing and the current process does not scale
- A key person who handled procurement is leaving or has left
- Senior management is pushing for better documentation and control
- Honestly, it has always been a problem — nothing new

**Why this question:**
Maps directly to the SPICED "Critical Event" dimension. This is the most important qualification signal: visitors who select a regulatory or audit driver are the highest-urgency leads and the most likely to move quickly. Visitors who select "it has always been a problem" need education, not urgency.

The last option ("Honestly, it has always been a problem") is included intentionally. Forcing a false urgency answer would damage trust and produce noisy discovery data. Honest self-selection is more valuable.

**Discovery data captured:**
- Identifies which urgency drivers are most common in the Dutch construction market — critical for refining the pitch and the website copy
- Regulatory urgency (EU CPR 2024, CSRD, Aanbestedingswet) answers should trigger more specific follow-up messaging about documentation and auditability
- "Key person leaving" answers are a strong signal for the institutional knowledge / staff turnover pain point that Dundir's fine-tuned model directly addresses

**Interaction design note:**
Do not list the options in order of importance. Mix urgency levels so the visitor reads each option rather than defaulting to the first or last.

---

### Q6 — Decision: Role

**Question text:**
> What best describes your role?

**Input type:** Multiple choice (single select)

**Options:**
- I am the procurement manager or buyer doing the day-to-day work
- I manage a procurement or purchasing team
- I am a project manager or site manager who handles purchasing for my projects
- I am a director, CEO, or CFO looking at the overall cost
- I work in IT, operations, or finance and support the procurement team

**Why this question:**
Identifies whether the visitor is the user (the person in the spreadsheet every day) or the buyer (the person who approves budget). These are different conversations: users need to feel understood and reassured; buyers need an ROI case. It also validates the BMC open challenge about "user adoption vs. buyer adoption."

Placed last because it is the most identity-sensitive question. Early placement can make the scan feel like a sales qualification trap. By question six, the visitor has already invested enough that answering is natural.

**Discovery data captured:**
- Validates the BMC assumption: "Who is the actual end user vs. the buyer?"
- If the majority of scan completers are procurement managers (users), the website needs to speak to practitioners first, management second — not the other way around
- "Project manager / site manager" answers reveal a use case (distributed field purchasing) that corresponds to the edge/mobile deployment feature in the BMC V2 roadmap

---

### Contact step

**Placed after the result is shown, not before.**

The visitor sees their personalised result first. Then:

> **Want to save your results and talk through what they mean?**
>
> Enter your name and email and we will send you the full breakdown. We will also reach out within one working day to schedule a 30-minute conversation — no pitch, just the numbers.

**Fields:**
- First name (text input, required)
- Email address (email input, required)
- Company name (text input, optional — inferred from email domain where possible)

**Privacy line below the submit button:**
> Your answers are used only to calculate your result and to prepare for our conversation. We do not share your data. You can request deletion at any time.

**Submit button text:**
> Send me my results

**Why this order:**
Showing the result before asking for contact details is the most important structural decision in the scan. It creates a genuine reciprocal exchange: the visitor gives 6 answers, gets a personalised number, and only then decides whether they want to continue the relationship. This is the endowment effect in practice — they have already received something of value, which makes the contact ask feel fair rather than extractive.

Asking for contact information before showing the result would drop completion rates sharply and would signal that the "scan" is a lead capture form in disguise — exactly what it must not feel like to a 55-year-old procurement director who has seen every SaaS trick.

---

## Output and results page

### What the visitor sees

After Q6 and before the contact step, the results screen shows three things:

**1. The headline number**

> Based on your answers, manual procurement is costing your team approximately
>
> **€[X] per year**
>
> in lost productive time.

This is the primary output. It should be large, specific to two significant figures, and calculated live in the browser.

**2. The breakdown**

A short table or visual showing the components of the calculation:

| Component | Your estimate |
|---|---|
| Hours per week on manual admin (your input) | [Q4 answer] hours |
| People in your team doing this work (estimate from Q1) | [derived multiplier] |
| Total team hours per year | [calculated] hours |
| Average hourly cost of a construction procurement manager (NL) | €65/hour |
| **Annual cost of manual procurement overhead** | **€[X]** |

Beneath the table, one contextualising line:
> The construction industry benchmark is 11 hours per week per procurement professional. Your team's profile suggests [above/below/near] that level.

**3. The pain point reflection**

Two sentences that reference their Q3 multi-select answer:

> Your biggest time drains are [pain point 1] and [pain point 2]. These are exactly the tasks that structured AI decision support eliminates — not by removing the human decision, but by reducing the time spent preparing for it.

This is personalised copy, not generic. It requires the result page to have conditional text blocks based on the Q3 answer combination. This is achievable in client-side JS without a backend.

---

### The calculation formula

```
hourly_rate = 65  // €/hour — NL construction procurement manager average
hours_per_week = Q4_slider_value
weeks_per_year = 46  // accounts for holiday and sick leave
fte_multiplier = MAP(Q1_answer, {
  "1 person": 1.0,
  "2-4 people": 2.5,
  "5-10 people": 6.0,
  "More than 10 people": 12.0
})

annual_cost = hourly_rate * hours_per_week * weeks_per_year * fte_multiplier
```

**Output formatting:**
- Round to nearest €100
- Display with a lower bound (80% of calculated value) and an upper bound (120%) shown as a range if the calculation seems extreme: "between €X and €Y per year"
- Cap the display at €500,000 to avoid numbers that feel implausible and undermine trust

**Anchoring note:**
The €49,500/year figure cited in CLAUDE.md is based on 11 hours/week x 1 person x ~€87/hour. The formula above uses €65/hour (a more conservative NL average for a procurement professional, not a manager) and preserves credibility with a sceptical visitor. The €49,500 figure should be cited as the industry reference, not used as the direct calculation input.

---

### Result page visual design guidance

- Background: white or very light grey
- The headline number: large (56px+), bold, in the Dundir primary colour
- The breakdown table: clean, minimal, no gradients or icons
- No confetti, no animations, no "congratulations" language — this is a serious tool for serious buyers
- One quote below the breakdown: *"The most notable result obtained from this research is the obvious need for AI-based solutions to help procurement personnel increase their productivity."* — Joni Hamppi, Aalto University / Skanska, 2025. This grounds the result in independent research, not a vendor claim.

---

## Conversion moment

### Primary CTA (on the results page, after the number is shown)

**Heading:**
> These numbers are fixable. Here is what the conversation looks like.

**Body (3 lines max):**
> We will look at your specific procurement workflow — the tools you use, where time is lost, and whether the numbers change with a structured approach. No slides. No demo until it makes sense. Just a 30-minute conversation about your process.

**CTA button:**
> Book a conversation

**Secondary option (for visitors not ready to book):**
> [See how the tool works →]  (links to a product explainer section or page)

**Below the button:**
> Christiaan Verhoef responds within one working day. The conversation is free.

**Why this CTA works:**
- "Book a conversation" is specific and low-commitment compared to "Request a demo" or "Get started"
- "No slides. No demo until it makes sense" directly addresses the fear of being sold at — it is the most important trust signal for a mid-size construction company buyer who has been through enterprise software demos before
- Naming Christiaan personalises the follow-up and signals that the visitor will not enter a CRM queue
- "Within one working day" sets a concrete expectation and can be delivered without a large team

### Fallback CTA (for visitors who do not complete the contact step)

If the visitor closes the tab without submitting contact details, no retargeting, no popup. The result remains visible if they return. The design principle: respect the decision not to convert now; the scan has still done customer discovery work even without a contact capture.

---

## No-backend MVP implementation

### Recommendation: Tally (tally.so)

**Why Tally over Typeform, Fillout, or custom JS:**

| Criterion | Tally | Typeform | Fillout | Custom JS |
|---|---|---|---|---|
| Free plan available | Yes (generous) | Limited | Yes | N/A |
| Conditional logic (personalised result page) | Yes | Yes (paid) | Yes | Full control |
| Webhook to email | Yes | Yes | Yes | Custom |
| Embeds in GitHub Pages | Yes (iframe or JS embed) | Yes | Yes | Native |
| GDPR / data residency | EU servers available | US-based | US-based | Your control |
| Custom result page with calculated output | No native | No native | No native | Yes |
| Response notifications to Christiaan | Yes (email) | Yes | Yes | Via formspree/mailto |
| Looks like a tool, not a form | With custom design | Yes | Partial | Full control |

**The constraint:** Tally and Typeform cannot show a calculated euro figure on the result page that is derived from the slider input. They can show conditional text blocks but not live arithmetic. This is a critical limitation for the scan's primary output.

**Recommended approach: hybrid**

Use **Tally** for questions 1–5 (all multiple choice and slider — fully supported). For the result page with the live calculation, redirect to a lightweight static HTML page hosted on GitHub Pages that reads URL parameters.

How it works:
1. Tally form is embedded on the Dundir website. Questions 1–6 are answered in Tally.
2. On Tally's "completion" redirect, append the key values as URL parameters: `?hours=[Q4]&team=[Q1_code]&pains=[Q3_codes]&role=[Q6_code]`
3. The GitHub Pages result page reads these parameters with a small JS script, runs the calculation, and renders the personalised output.
4. The contact form on the result page submits to **Formspree** (free tier, 50 submissions/month) which forwards the submission to `chris@tonomy.foundation` with all the parameter values appended.

**Alternative if URL parameter approach feels too fragile:** Use **Tally** for all questions including contact capture, then build the result page as a separate Tally completion redirect that shows static copy (no live calculation). The euro figure is replaced with a range based on the team size option selected. Less precise but fully no-code.

**Recommended final choice:** Custom client-side JS on GitHub Pages.

For an audience of 55-year-old Dutch procurement directors, the tool must feel credible and polished. A Tally embed with a URL-parameter redirect is technically achievable but introduces fragility and looks like what it is — a form tool patched together. A custom single-page scan built in vanilla JS with one CSS file will: load faster, embed natively, show the live calculation without redirect hacks, and look exactly as designed.

**Build scope for a developer:** One HTML file, one CSS file, one JS file. No framework required. Estimated build time: 4–8 hours for an experienced frontend developer. The form state is managed in memory; no localStorage or cookies required. The Formspree endpoint handles the submission. Total external dependencies: Formspree (free tier).

---

## Data capture and customer discovery pipeline

### What data is captured per scan submission

| Field | Source | Discovery purpose |
|---|---|---|
| Team size (Q1) | Tally / JS | Validates target segment size assumption |
| Current tools (Q2) | Tally / JS | Maps ERP landscape; validates Exact Online hypothesis |
| Pain areas selected (Q3) | Tally / JS | Identifies highest-frequency entry point; validates "bid comparison as beachhead" assumption |
| Hours per week (Q4) | Tally / JS | Validates the 11 hours/week industry figure for NL construction |
| Urgency driver (Q5) | Tally / JS | Maps regulatory vs operational urgency distribution |
| Role (Q6) | Tally / JS | Validates user vs buyer split; identifies if end users or managers are visiting |
| Calculated annual cost | Derived | Shows which size/hours combinations produce the most compelling number |
| Name | Contact step | Person |
| Email | Contact step | Follow-up; domain enrichment (company identification) |
| Company | Contact step (optional) | Lead qualification |
| Timestamp | Formspree / Tally | Tracks conversion over time |

### How it reaches Christiaan

**Option A (Tally route):**
Tally sends an email notification to `chris@tonomy.foundation` on every submission. The email includes all field values. Tally's dashboard provides a downloadable CSV for batch analysis.

**Option B (custom JS + Formspree):**
Formspree sends an email to `chris@tonomy.foundation` with all submitted values including the URL-parameter encoded Q1–Q6 answers. Formspree's dashboard provides CSV export.

**Recommended minimal process for customer discovery:**
After each week, Christiaan reviews the week's submissions against the BMC customer discovery assumption table. A simple spreadsheet with one row per submission and columns matching the nine BMC assumptions is sufficient. No CRM needed at this stage.

The scan should be thought of as a paid version of the simulation workshop, compressed into 3 minutes. Every completion is a paid equivalent of a discovery conversation starter — the visitor has told Dundir exactly what their pain is, what tools they use, and what is creating urgency, before any human time has been spent.

---

## Question flow and logic

```
Q1 (team size)
  └── Q2 (current tools)
        └── Q3 (pain areas — multi-select)
              └── Q4 (hours slider)
                    └── Q5 (urgency driver)
                          └── Q6 (role)
                                └── RESULT PAGE (calculated, personalised)
                                      └── CONTACT STEP (name + email)
                                            └── CONFIRMATION + next step
```

No branching logic required in the questions themselves. The personalisation happens on the result page through conditional text based on Q3 and Q5 answers.

**Optional enhancement (V2, not MVP):**
If Q5 = "New EU or Dutch regulation" → show a second line on the result page: "EU CPR 2024 and CSRD Scope 3 are turning procurement documentation from good practice into legal obligation. Your current process may not be audit-ready."

---

## Copy: transition text between questions

The scan should not feel like a form. Each question has a one-line lead-in that creates conversational flow:

| Question | Lead-in line |
|---|---|
| Q1 | *(no lead-in — start directly)* |
| Q2 | "Good. Now tell us how the work actually gets done." |
| Q3 | "Every procurement process has its worst moments. What are yours?" |
| Q4 | "Be honest — the average in construction is 11 hours a week." |
| Q5 | "One more thing before we show you the numbers." |
| Q6 | "And finally — who is asking?" |

These lines are short, direct, and slightly opinionated. They respect the visitor's time and experience. They do not say "Great!" or "Almost done!" — patronising micro-copy is the fastest way to lose a 55-year-old Dutch procurement director.

---

## Progress indicator

Show a simple text progress indicator: "Question 3 of 6" — not a percentage bar, not animated dots. The audience values directness.

---

## Mobile considerations

- One question per screen — no scrolling within a question
- Tap targets minimum 48px height for all answer options
- Slider on mobile: large handle, haptic feedback where supported
- The euro figure on the result page should be visible without scrolling on a standard mobile screen (approximately 375px width)
- No horizontal scroll anywhere in the flow

---

## What this document enables

A developer can build this scan from this document alone. The questions are written. The calculation formula is specified. The result page content is defined. The tech stack is recommended with alternatives. The CTA copy is written. The data pipeline is described.

The next document to read alongside this one is `planning/04-copy-strategy.md`, which covers the broader tone and headline approach that should be consistent with the scan's voice.

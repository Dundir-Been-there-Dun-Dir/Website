# Dundir Website — Site Structure
> planning/02-site-structure.md | structure-agent output

---

## Design Principles Applied

Before the architecture: three principles that govern every decision here.

**1. Credibility over cleverness.** The primary reader is a 55-year-old Dutch procurement director who has been doing this job for twenty years and has seen a dozen technology vendors promise to fix procurement. This person will dismiss anything that sounds like marketing. Every page earns trust by stating facts, citing sources, and showing the team — not by making promises.

**2. The pain must be visible before the product is explained.** The WbD bowtie sequence is Awareness → Education → Selection. A visitor who does not yet feel the pain will not engage with the solution. The homepage opens with the problem, not the product. The scan converts only after the visitor has recognised their own situation in what they read.

**3. Every page has one job.** No page tries to do two things. The homepage builds recognition. The problem page builds urgency. The solution page explains how it works. The team page establishes credibility. The scan converts. The blog develops authority over time. There is no other content at launch.

---

## Navigation Structure

### Primary navigation (top bar)

```
Dundir | Het probleem | Hoe het werkt | Over ons | [Doe de scan]
```

- "Doe de scan" is a button, not a text link — it appears in the nav bar on every page in a distinct colour
- Navigation is in Dutch. The copy on all pages is in Dutch. Construction procurement directors at Dutch companies and municipalities do not read SaaS websites in English.
- Logo left, nav centre, CTA button right — standard for B2B professional services; do not deviate

### Secondary navigation (footer only)

- Contact
- Privacy policy
- (Later: Inzichten / blog, once content exists)

### Mobile navigation

Single hamburger menu. The scan CTA button remains visible in the mobile header at all times — it does not collapse into the menu.

---

## Page Architecture

### Page 1: Homepage
**URL:** `/` (index.html)
**WbD stage:** Awareness → Education
**Primary purpose:** Give a referred or cold visitor enough context to recognise whether this is relevant to them, and route them toward the scan.

#### Sections (in order)

**1. Hero**
- Content: A single declarative statement of the problem — not "AI for procurement" but the cost of the current situation. Proposed headline direction: "Elf uur per week. Per inkoper. Elke week." followed by a single line of context: what that costs and what Dundir does about it. One CTA: "Doe de scan".
- Why it is here: The referred visitor needs confirmation they are in the right place within 5 seconds. The cold visitor needs to feel the problem before anything else. The hero does both with one sentence.

**2. The problem in three facts**
- Content: Three statistics — displayed large, sourced in small text. Chosen from the research base: (a) hours per week in admin, (b) percentage of contractors still on spreadsheets, (c) the regulatory obligation that is arriving. No prose. No bullet points. Three numbers.
- Why it is here: Facts establish that Dundir understands the domain. This is the moment the 55-year-old procurement director either nods or leaves. Do not dilute it with copy.

**3. What Dundir does — in one paragraph**
- Content: A single paragraph, maximum 80 words, that explains what the system does and what it does not do. Key phrases: "lokaal geïmplementeerd", "jouw data verlaat nooit jouw server", "wiskundig onderbouwde aanbeveling", "klaar voor goedkeuring en audit". No feature list. No sub-bullets. One paragraph.
- Why it is here: The visitor who nodded at the problem now needs a minimal, accurate explanation of the solution. Keep it short — the detail is on the How it Works page.

**4. Who it is for**
- Content: Two columns — construction companies (50-500 employees) and Dutch municipalities. One sentence each. No icons, no decorative graphics.
- Why it is here: Segment self-selection. A municipality procurement officer and a private-sector procurement manager face different regulatory pressures. The homepage acknowledges both without trying to speak to both simultaneously. This section points each toward their own path through the site.

**5. Scan CTA block**
- Content: A distinct, contained section — not a banner — that names the scan explicitly, describes what it does ("vijf vragen, een gepersonaliseerde schatting van de kosten van handmatige inkoop in jouw organisatie"), and has a single button.
- Why it is here: The visitor has seen the problem, understood the solution at headline level, and confirmed they are in the right segment. This is the first credible moment to ask for action.

**6. Team credibility strip**
- Content: Five name-and-title cards. No bios here — just name, role, and one credential each. Christiaan: Windesheim. Milan: PhD VU Amsterdam, productie-AI bij Stedin en ABN AMRO. Kirsten: COO Open Food Chain, 6 jaar verdubbelde omzet. Nina: Universitair hoofddocent Civiele Techniek, Belgrado. Gerard: HPE Local Government Lead Nederland, 19 jaar.
- Why it is here: Before a referred visitor contacts or completes the scan, they will want to know who is behind this. The team strip provides enough for them to decide. The team page carries the detail.

**Primary CTA:** Doe de scan
**What the visitor should feel when they leave:** "Dit herken ik. De mensen achter dit weten wat ze doen. Ik wil weten wat dit voor mijn organisatie betekent."

---

### Page 2: Het probleem (The Problem)
**URL:** `/het-probleem/`
**WbD stage:** Education
**Primary purpose:** Build urgency around the cost of manual procurement, with specific reference to Dutch regulatory pressure, so the visitor feels compelled to quantify their own situation.

#### Sections (in order)

**1. Opening statement**
- Content: One paragraph that names the specific workflow being described — supplier comparison, certification checking, report writing — and says plainly that most Dutch construction procurement teams still do this in spreadsheets, email threads, and phone calls.
- Why it is here: Grounds the page. The visitor knows immediately whether this is about their situation.

**2. The time cost**
- Content: The 11 hours per week figure, sourced (Remarcable/BuildMate 2025). A short calculation showing what that costs in loaded labour. For a three-person procurement team: €148,500 per year in non-productive time. Source all numbers. No rounding up — use the exact research figure.
- Why it is here: Time cost is abstract. Money cost is concrete. The calculation does the work of making it visceral without editorialising.

**3. The knowledge risk**
- Content: The knowledge-in-one-person's-head problem. What happens when that person leaves. No statistics required here — this is a narrative beat that every procurement manager will recognise personally.
- Why it is here: This is the emotional pain, not the financial pain. Financial pain opens the conversation; knowledge risk closes it. The visitor who has just watched a senior buyer leave — or is afraid of it — will feel this acutely.

**4. The regulatory ratchet**
- Content: Three regulatory obligations on a timeline: Aanbestedingswet (current), CPR 2024/3110 (January 2026 operational), CSRD Scope 3 (phased). One sentence per obligation explaining what documentation it requires. A direct statement: "De audit-eis bestaat al. Het gereedschap om het te documenteren bestaat voor de meeste organisaties nog niet."
- Why it is here: The regulatory section is the urgency mechanism. Without it, procurement improvement is always a "nice to have." With it, the timeline is set externally. This section matters more for the municipality segment but belongs on a shared problem page because mid-size construction companies also face CPR compliance.

**5. The generic AI trap**
- Content: A brief, factual description of the Skanska/Hamppi 2025 experiment — that a generic enterprise GenAI tool produced different numerical outputs for identical procurement inputs, with errors up to €8,354 per line. One sentence on why this happens (no domain training, no deterministic decision engine). This is not framed as "other tools are bad" — it is framed as "this is why the approach matters."
- Why it is here: This section pre-empts the objection "can't we just use ChatGPT for this?" It answers with a sourced fact, not a marketing claim. It also establishes why Dundir's optimizer-first architecture is a deliberate design choice rather than a feature list item.

**6. Mid-page scan CTA**
- Content: A contained CTA block — "Benieuwd wat handmatige inkoop jouw organisatie kost? De scan geeft een gepersonaliseerde schatting in vijf vragen."
- Why it is here: The visitor who has read to this point has self-qualified. Some will act here. Do not make them scroll to the bottom.

**7. Quote / validation**
- Content: At launch, this is the Dusko Stojanovic observation (as a named practitioner at ZÜBLIN, without using ZÜBLIN branding until a formal relationship is signed) — or it is held empty and filled when a pilot client provides a usable quote. Do not use a fake testimonial or a generic endorsement.
- Why it is here: Social proof from someone who lives the problem is more credible than a metric. At launch this may be brief. Do not fabricate it.

**8. Page-closing scan CTA**
- Content: Same button as above. Repeat at the bottom because some readers skim to the end.

**Primary CTA:** Doe de scan
**What the visitor should feel when they leave:** "Dit is het probleem in mijn organisatie. Dit gaat alleen maar erger worden. Ik wil weten hoe erg het al is."

---

### Page 3: Hoe het werkt (How It Works)
**URL:** `/hoe-het-werkt/`
**WbD stage:** Education → Selection
**Primary purpose:** Explain clearly, without jargon, how the system works — and why the architecture choices (local deployment, optimizer-first, fine-tuning) matter to a procurement director, not just to a developer.

#### Sections (in order)

**1. The architecture in plain language**
- Content: A three-step description of how the system works in a single procurement cycle: (1) a specification goes in, (2) the optimizer finds the mathematically best supplier combination given the client's hard constraints and weighted objectives, (3) the AI layer generates the report. Each step in one sentence. No technical jargon ("evolutionary algorithm" is not on this page — "wiskundige beslissingsmotor" is).
- Why it is here: The procurement director does not need to understand the technology. They need to understand the workflow change. Frame it from the user's point of view.

**2. Why local deployment**
- Content: Three consequences of local deployment, stated plainly: (a) inkoopdata verlaat jouw server nooit, (b) geen afhankelijkheid van externe API's, (c) voldoet aan GDPR en IT-beleid van gemeenten. One paragraph, no bullet points.
- Why it is here: Data sovereignty is the first question every municipality IT department asks and a serious concern for any construction company with sensitive pricing data. Answering it here, in this section, prevents it from being an objection at the pitch stage.

**3. Why explainability**
- Content: A direct statement that every output shows its reasoning — which data sources were used, how each supplier was scored, why one supplier ranks above another. The word "explainable" is used once. The concept is shown, not labelled. A simple visual example of a comparison output row is appropriate here if design allows — not a screenshot of software, but a schematic representation of an output row.
- Why it is here: For municipalities, explainability is a legal requirement. For construction companies, it is the difference between a report a manager will sign off on and one they will push back on. This section converts "interesting technology" into "tool I can actually use."

**4. The fine-tuning advantage**
- Content: One short section explaining that the system is trained on the client's own procurement history — not a generic model. The consequence: it gets smarter with every procurement cycle. It knows the client's preferred suppliers, their certification requirements, their historical decisions. And when a senior buyer leaves, that knowledge stays.
- Why it is here: This is a meaningful differentiator from generic AI tools and from competitors who offer SaaS tooling without fine-tuning. It also addresses the knowledge-risk pain raised on the problem page, closing the loop.

**5. What it is not**
- Content: One paragraph. The system does not make the decision — the procurement professional reviews the output and decides. It does not replace the buyer. It removes the administrative gruntwork so the buyer can do the actual job: judgement, relationships, and escalation.
- Why it is here: "AI takes my job" is a real fear in this profession. Addressing it explicitly, in plain language, removes an emotional blocker. It also accurately represents the product — the design principle is decision support, not autonomous procurement.

**6. The implementation picture**
- Content: Four stages of an engagement in sequence: (1) intake and process mapping, (2) data ingestion and fine-tuning, (3) deployment on client infrastructure, (4) handover — client owns everything. Emphasise that after handover there is no ongoing dependency on Dundir unless the client wants maintenance or retraining. This is how municipalities and construction companies buy enterprise software.
- Why it is here: Procurement directors have been burned by SaaS lock-in. The implementation model removes that objection before it is raised. "U bezit het systeem. Geen abonnement vereist voor de werking."

**7. Scan CTA**
- Content: "Wil je zien of dit aansluit bij jouw situatie? De scan kwantificeert de kosten van handmatige inkoop in jouw organisatie." Button.

**Primary CTA:** Doe de scan
**What the visitor should feel when they leave:** "Ik begrijp hoe dit werkt. De aanpak klinkt solide. Ik wil weten of het voor mijn organisatie zinvol is."

---

### Page 4: Over ons (About / Team)
**URL:** `/over-ons/`
**WbD stage:** Selection
**Primary purpose:** Establish the credibility of the team and the seriousness of the organisation so that a procurement director who is considering a pilot conversation will trust the people on the other side of the table.

#### Sections (in order)

**1. One-paragraph company statement**
- Content: Who Dundir is, what it is building, and where it is based. Windesheim anchor mentioned. Research collaboration with University of Belgrade Faculty of Civil Engineering mentioned. No mission statement. No vision statement. Facts only.
- Why it is here: Sets the context before the team is introduced. A university anchor provides credibility and signals institutional seriousness to risk-averse buyers.

**2. Team profiles**
- Content: Five profiles — Christiaan, Milan, Kirsten, Nina, Gerard. Each profile contains: name, role title, two or three sentences of relevant background, and one specific credential that directly relates to what Dundir does. For example:
  - Christiaan: Projectmanager Supply Chain Finance, Hogeschool Windesheim. Oprichter Value Chain Hackers AI lab. Heeft bijgedragen aan €2M aan fondsenwerving voor eerdere ondernemingen.
  - Milan: PhD Evolutionaire Robotica, VU Amsterdam. Hoofd AI bij Salesteq. Productie-ML bij Stedin, bliq, ABN AMRO. MSc Universiteit van Belgrado.
  - Kirsten: COO Open Food Chain 2018-2024. Opgeschaald van eerste medewerker naar 20+ mensen. Omzet elk jaar verdubbeld gedurende zes jaar.
  - Nina: Universitair hoofddocent Civiele Techniek, Universiteit van Belgrado. PhD Constructieve Techniek. 12 jaar expertise in Nederlandse en EU bouwspecificatienormen (CROW RAW, UAV, CPR 2024, KOMO, SKG-IKOB).
  - Gerard: Local Government Lead Nederland, HPE (19 jaar). Oprichter HPE Ronde Tafel voor Gemeenten. Directe relaties met alle 342 Nederlandse gemeenten.
- Why it is here: The team section is the primary trust signal for the Selection stage. A 55-year-old procurement director will read this slowly. The credentials need to be specific and verifiable, not generic.

**3. Institutional anchors**
- Content: Two logos or name-and-description entries — Hogeschool Windesheim and Universiteit van Belgrado, Faculteit Bouwkunde. One sentence each on the nature of the partnership.
- Why it is here: Institutional anchors signal that this is not a garage startup. For municipalities in particular, a Windesheim research anchor is a recognisable credibility signal.

**4. Contact / conversation CTA**
- Content: "Wil je spreken met iemand in het team? Stuur een bericht." With a simple contact form or mailto link. At launch, a Typeform or Tally form embedded here is sufficient.
- Why it is here: A visitor who has read the team profiles and wants to reach out should not need to find a contact page. The CTA is here.

**5. Scan CTA (secondary)**
- Content: A smaller, secondary CTA. "Nog niet klaar voor een gesprek? Doe de scan eerst."
- Why it is here: Some visitors will want to self-qualify before reaching out. Give them the route.

**Primary CTA:** Contact / conversation (primary), scan (secondary)
**What the visitor should feel when they leave:** "Dit zijn serieuze mensen die het domein kennen. Als ik een gesprek wil, weet ik met wie ik praat."

---

### Page 5: Inkoopscan (Procurement Pain Scan)
**URL:** `/scan/`
**WbD stage:** Education → Selection (the transition point)
**Primary purpose:** Convert a qualified visitor into a named lead by delivering a personalised estimate of the cost of their current procurement process, while simultaneously collecting structured customer discovery data.

#### Sections (in order)

**1. Framing paragraph**
- Content: "Hoeveel kost handmatige inkoop jouw organisatie? Vijf vragen. Twee minuten. Een gepersonaliseerde schatting." No more than three sentences of explanation. Then the scan begins.
- Why it is here: The visitor who arrives here has already been educated on the problem. Do not re-explain it. Get them into the scan immediately.

**2. The scan itself**
- Content: Five to seven questions — see planning/03-procurement-scan.md for full question design. The scan is a separate planning document; this entry specifies only the page structure.
- Technical implementation: At launch, embedded Tally or Typeform with custom styling. No backend required. Output page can be a static "uw resultaten worden per e-mail verstuurd" confirmation if a live results page is out of scope.

**3. Results / output (if client-side JS allows)**
- Content: A personalised output that names the estimated annual cost of the visitor's current situation based on their answers, with a contextualising statement connecting their answers to the broader research data. Ends with: "Wil je dit bespreken? Plan een gesprek."
- Why it is here: The scan is only valuable if the output is specific enough to feel personal. A generic "thank you, we will contact you" fails the test. See planning/03-procurement-scan.md for output design.

**Primary CTA:** Plan een gesprek (post-scan)
**What the visitor should feel when they leave:** "Ik weet nu wat dit mij kost. En ik weet dat deze mensen de berekening kunnen onderbouwen."

---

### Page 6: Inzichten (Insights / Blog)
**URL:** `/inzichten/`
**WbD stage:** Awareness → Education
**Primary purpose:** Build organic search authority in Dutch construction procurement topics, extend reach to visitors who are not yet aware of Dundir, and demonstrate domain expertise.

#### Launch decision: Do NOT publish at launch

This page should exist in the navigation only after the first three substantive articles are published. At launch, the nav contains: Het probleem | Hoe het werkt | Over ons | [Doe de scan]. Inzichten is added when content exists.

Attempting to launch with an empty or thin blog dilutes credibility. A procurement director who finds a blog with one placeholder article will distrust the site. Wait until three strong articles are ready.

**When it launches, the first three articles should cover:**

1. A plain-language explanation of CPR 2024/3110 and what it means for Dutch municipal procurement teams by January 2026. (Search intent: procurement directors looking for compliance guidance. Shareable in Gerard's municipality network.)

2. The Hamppi/Skanska 2025 study — what it found, why it matters, and what it tells you about using generic AI for procurement decisions. (Establishes authority. Addresses the "can't we just use ChatGPT" question with a cited, sourced answer.)

3. A calculation of the real cost of manual procurement for a mid-size Dutch construction company — the full methodology, showing sources, showing the calculation. (This is the canonical version of the pain quantification on the homepage. Organic search target: "kosten handmatige inkoop bouw".)

Each article links to the scan. Each article is written in Dutch. Each article cites its sources.

**Primary CTA on each article:** Doe de scan
**What the visitor should feel:** "Dit bedrijf weet waar het over praat. Ze begrijpen mijn situatie beter dan de meeste leveranciers."

---

## Pages That Should NOT Exist at Launch

The following page types are common on SaaS websites and would actively harm credibility or distract from the primary funnel on this site. Do not build them.

**Pricing page.** Dundir does not have a list price. Implementation fee, maintenance, and retraining are custom-quoted per client. A pricing page with "contact for pricing" is worse than no pricing page — it signals that the company wants to capture leads before having a conversation. Remove the friction: the scan is the entry point, the conversation is the next step.

**Case studies page (at launch).** There are no live clients yet. An empty case studies page signals that the company is new and unproven. The team section and the institutional anchors carry the credibility weight instead. Case studies should be added the moment the first pilot client gives permission — not before.

**Careers page.** This is a five-person founding team. A careers page signals premature scale and confuses the visitor about what stage the company is at. If hiring is needed, it happens through direct outreach and LinkedIn.

**Partner or integration page.** Listing ERP integrations before any are built creates expectations that cannot be met. Do not publish an integrations page until at least one integration is live.

**FAQ page.** FAQs are a crutch for pages that fail to answer questions in their natural place. If a question is common enough to appear in a FAQ, it belongs in the page copy where the question naturally arises. The How It Works page and the Problem page should pre-empt the most common questions inline.

**Dutch/English toggle.** The primary audience reads Dutch. An English version of the site is a distraction at this stage. If an investor or international partner requests English content, handle it out of band.

---

## Footer Content

The footer appears on every page. It contains:

- **Left column:** Dundir logo, one-line description ("AI-gedreven inkoopbeslissingen voor de bouw"), contact email.
- **Centre column:** Navigation links — Het probleem, Hoe het werkt, Over ons, Inkoopscan. (Inzichten added when articles exist.)
- **Right column:** Institutional anchors — "Onderzoekspartner: Hogeschool Windesheim" and "Universiteit van Belgrado, Faculteit Bouwkunde". Privacy policy link.
- **Bottom bar:** Copyright line. KvK number (add when registered). No social media icons at launch unless a LinkedIn company page is actively maintained.

---

## Information Flow Summary

The site is a one-funnel structure. Every path leads to the scan.

```
Entry points:
  Direct / referred → Homepage
  Search (CPR 2024, inkoop AI, aanbestedingswet) → Inzichten article
  LinkedIn / outreach → Homepage or Problem page

Funnel:
  Homepage → Het probleem → Scan
  Homepage → Hoe het werkt → Scan
  Homepage → Over ons → Contact or Scan
  Inzichten article → Scan

Exit:
  Scan completion → Plan een gesprek (calendar link or contact form)
```

There is no page that does not route to the scan. There is no page that routes to a dead end.

---

## Language and Tone Notes

- All pages: Dutch
- All statistics: sourced in the copy, not just on a references page
- No claim on the site that cannot be traced to planning/05-seo-and-tech.md or the source documents listed in CLAUDE.md
- No AI-generated stock imagery. No handshake photos. No "digital transformation" visuals.
- If any imagery is used, it should depict real construction procurement contexts — a procurement manager at a desk with a specification document, a bid comparison in a meeting. Stock photos from Unsplash labelled "construction" are acceptable only if they are specific and unglamorous.
- Typography and layout: clean, high contrast, professional. The visual design should feel like a well-designed report, not a product landing page. See planning/05-seo-and-tech.md for technical stack recommendation.

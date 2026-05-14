# Research Insights Index
> 7 papers processed | Last updated: 2026-05-14

This index is designed to be read at the start of any working session. It gives fast access to what the research corpus collectively argues, the strongest citable claims by use case, and what the research does NOT prove.

---

## Corpus Overview

| File | Author | Title | Type | Year |
|---|---|---|---|---|
| [hamppi-2025-ai-procurement-construction.md](hamppi-2025-ai-procurement-construction.md) | Joni Hamppi | Integrating AI into Procurement Processes in Construction | Master's thesis (Aalto) | 2025 |
| [vanduuren-2025-genai-infrastructure-tendering.md](vanduuren-2025-genai-infrastructure-tendering.md) | Roos van Duuren | Generative AI in Infrastructure Tendering | Master's thesis (TU Delft) | 2025 |
| [oksuz-2025-ai-circular-procurement-ecaade.md](oksuz-2025-ai-circular-procurement-ecaade.md) | Öksüz et al. | Adoption of AI Systems for Circular Construction Procurement | Conference paper (eCAADe) | 2025 |
| [adebayo-2025-ai-construction-management-review.md](adebayo-2025-ai-construction-management-review.md) | Adebayo et al. | AI in Construction Project Management: A Structured Literature Review | Journal article (MDPI Digital) | 2025 |
| [fridriksson-kth-tender-reference-ai.md](fridriksson-kth-tender-reference-ai.md) | Egill Friðriksson | AI-Driven Identification of Reference Projects for Architectural Tenders | Master's thesis (KTH) | 2025 |
| [cusumano-2023-tendering-ai.md](cusumano-2023-tendering-ai.md) | Linda Cusumano | Data-driven and production-oriented tendering design using AI | Licentiate thesis (Chalmers) | 2023 |
| [rockx-2023-complexity-risk-dutch-infrastructure.md](rockx-2023-complexity-risk-dutch-infrastructure.md) | Michiel Rockx | Complexity and Risk Assessment in Dutch Infrastructure Projects | Master's thesis (TU Delft) | 2023 |

---

## Best Citations by Use Case

### For pitches and investor conversations

**The non-determinism problem (Hamppi, 2025)**
A live Skanska experiment showed that a generic enterprise GenAI tool gave different numerical outputs for identical inputs — errors up to €8,354 on a single procurement line. This is the sharpest practitioner-documented argument for a deterministic optimization engine over a prompt-based tool. Cite this when explaining why the architecture matters.

**Materials as share of project cost (Hamppi, 2025, p.8)**
70% of construction project costs are in materials (Donyavi et al., 2024, cited in Hamppi). Procurement is not a back-office function — it is the cost structure of the project.

**Productivity stagnation (Hamppi, 2025, p.8)**
Construction productivity has grown at 1% annually for decades (Regona et al., 2022, cited in Hamppi). The industry is not improving on its own.

**AI adoption acceleration (Adebayo, 2025)**
ML adoption in construction research jumped from 29.7% of papers in Industry 3.0 to 73.4% post-COVID — more than doubling. The inflection is real, recent, and peer-reviewed.

**The market gap is peer-reviewed (Öksüz et al., 2025)**
The paper explicitly states that research and tooling for "construction procurement operations remains limited." This is a direct citable statement of the gap from a 2025 peer-reviewed source.

**Knowledge loss at scale (Rockx, 2023)**
Fewer than 5% of staff on a €500-600M Dutch infrastructure project experience it from start to finish. Institutional procurement knowledge is systematically lost. This is the human problem behind the product.

---

### For grant applications (RAAK-PRO, KIEM, Horizon Europe)

**Europe is a technology follower in construction AI (Adebayo, 2025)**
Only 27 of 135 papers in the structured review (20%) were Europe-based. The region is behind, which is an opportunity framing for Dutch grant bodies.

**Academic call for a standardised review tool (van Duuren, 2025, p.61)**
The thesis explicitly identifies a "standardised [AI-supported] review tool" as a future research direction (section 7.6.3). The product directly addresses a named academic gap from a 2025 TU Delft thesis.

**Input standardization as research problem (Hamppi, 2025)**
GenAI worked on simple bids, failed on complex ones. Hamppi explicitly recommends suppliers fill standardized templates. The research problem of how to standardize procurement inputs for AI processing is open and fundable.

**Dutch practitioners assess risk by gut feel (Rockx, 2023)**
Interviewees with decades of experience reported never encountering a systematic risk assessment approach. One practitioner said it explicitly in interview. This is primary evidence of the gap in the Dutch market.

**Validated AI use case in construction (Adebayo, 2025, Table 1, p.5)**
Bidding and pricing optimization is explicitly listed as a documented AI application category. The product is not speculative — it is in an established research category.

---

### For product and architecture decisions

**Local deployment is the only viable model for practitioners (Friðriksson, 2025)**
At Cedervall Arkitekter: GPT-4 was prototyped and rejected on cost and third-party dependency grounds. Cloud Llama-3 was rejected because 20-second latency was unacceptable and data had to stay on the internal network. On-premise deployment was the only acceptable outcome — and this was in an architecture firm, not a security-sensitive construction or public sector context.

**Confidentiality is a hard precondition (van Duuren, 2025)**
Practitioners in the TU Delft study named confidentiality as a non-negotiable, not a preference. Local deployment resolves this. Cloud tools cannot.

**Domain context is what makes AI output degrade (van Duuren, 2025)**
The thesis identifies missing domain context as the primary cause of poor AI output quality. This is the direct argument for a domain-specific, locally-calibrated model over a generic one.

**The four AI-ready procurement phases (Hamppi, 2025)**
Practitioners confirmed four phases where AI is immediately applicable: bid comparison, supplier evaluation, procurement package formation, and contract oversight. Bid comparison is the clearest, lowest-resistance entry point.

**Rijkswaterstaat procurement reform (Rockx, 2023)**
The Dutch national infrastructure authority is actively shifting from large DBFM contracts toward risk-sharing models. This is a structural change creating new tool demand in the Dutch infrastructure segment — relevant for Segment C positioning and public sector grant framing.

---

## What the Research Collectively Argues

1. **Generic GenAI fails in construction procurement** — non-determinism, confidentiality exposure, missing domain context, and input variability all undermine trust. The failure mode is documented with practitioner evidence, not just theoretical.

2. **Local, domain-specific deployment is the only architecture practitioners accept** — independently documented across Friðriksson (architecture), van Duuren (infrastructure), and implied by Hamppi (construction procurement).

3. **The entry point is bid comparison / supplier evaluation** — confirmed by Hamppi as the clearest AI-ready phase with the highest practitioner acceptance.

4. **Input standardization is both the main barrier and the main lever** — whoever solves structured data input (supplier templates, ERP normalization) unlocks the optimization layer. This is a product design problem, not just a technical one.

5. **The Dutch market has a documented, practitioner-confirmed gap** — Rockx provides the most direct evidence for the Netherlands specifically. Rijkswaterstaat reform, gut-feel risk assessment, and systemic knowledge loss are all named and sourced.

---

## What the Research Does NOT Prove

- **Willingness to pay** — none of these papers studied commercial adoption or pricing. Customer discovery conversations are still required.
- **Quantitative ROI** — most time-saving figures (50-60% reduction) are self-reported by small samples (3-5 users). Do not cite as industry benchmarks.
- **Dutch mid-size construction company specifically** — Rockx covers Dutch infrastructure (large contractors, Rijkswaterstaat clients). The mid-size Segment A target is not directly studied in this corpus.
- **The optimization approach specifically** — the papers validate the problem and the local deployment model, not the LP/evolutionary algorithm solution. That validation comes from customer discovery and pilot data.
- **Any of these papers study the contractor/bidder side with quantitative rigor** — most study consultant, architect, or infrastructure client perspectives.

---

## How to Use This in Future Sessions

Read this INDEX first. Then open individual insight files only if you need a specific citation or quote. The insight files contain page references for direct citation in documents.

When adding a new paper: read it, create a new insight file following the same template, and update the corpus table at the top of this index.

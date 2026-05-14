---
title: Integrating AI into Procurement Processes in Construction
author: Joni Hamppi
institution: Aalto University
year: 2025
type: Master's thesis
file: master_Hamppi_Joni_2025.pdf
---

## Core argument

AI, and specifically generative AI (GenAI), has clear potential to improve four phases of construction procurement -- bid comparison, supplier evaluation, procurement package formation, and contract oversight -- but current GenAI tools are not yet reliable enough for autonomous numerical tasks and require human oversight, standardized input formats, and iterative development before they can be trusted in production.

## Key findings relevant to the business

- Four procurement phases were identified (by interviews with Skanska procurement professionals) as highest-value targets for AI: 1) bid comparison, 2) supplier evaluation, 3) procurement package formation, 4) contract oversight.
- GenAI performed well on textual/qualitative analysis of bid documents but failed on precise numerical calculations, especially when bids were complex or non-standardized.
- Bid comparison with simple, well-structured bids (subcontractors A, B, C in the case study) produced near-correct results; complex bids (D, E, F) caused substantial calculation errors -- highlighting that input data quality and uniformity is the dominant variable in AI performance.
- GenAI gave different numerical outputs for identical inputs in separate chat sessions (non-determinism), which was identified as a critical reliability problem for procurement use.
- The manually performed bid comparison took 30 minutes; the GenAI version took approximately 2 minutes -- but error-checking overhead eliminated the time saving in the current state.
- Industry conservatism and resistance to change are explicitly identified as structural barriers: the Finnish construction sector has not improved productivity despite decades of digitalization, due to "culture of resistance to change and perseverance to old habits" (citing Abioye et al., 2021 and Seppanen, 2022).
- Piloting before full implementation is emphasized as a prerequisite: procurement staff need to see AI working before they will trust or adopt it.
- Cohesive training and education programs are identified as essential for smooth AI integration.
- Standardized bidding templates are explicitly recommended: Skanska should demand suppliers fill bids into a standardized format to increase the accuracy of AI-based comparisons. This directly validates a core product design choice.
- Collaboration between developers, construction professionals, and AI experts is identified as necessary to build reliable AI applications.
- The thesis acknowledges that GenAI-based bid comparison is not yet widely researched, suggesting a thin but emerging academic field and an open product space.

## Useful statistics and data points

- Construction industry productivity growth has averaged only 1% annually over the last twenty years (p. 8, citing Regona et al., 2022).
- Materials used in a construction project can represent as much as 70% of the project's total costs (p. 8, citing Donyavi et al., 2024).
- Manual bid comparison for a cleaning services contract across 6 subcontractors took 30 minutes; GenAI comparison took approximately 2 minutes (p. 65, Table 7).
- In the case study, GenAI produced correct totals for 3 out of 6 bids (A, B, C) when all six were provided simultaneously; only 1 out of 3 (B) was correct when the three simpler bids were processed together (p. 63).
- Variation in GenAI outputs for identical inputs across separate sessions ranged from 0.2 EUR (negligible) to 8,354 EUR on a single subcontractor total -- a ~28% error on that line (p. 62, Table 6).
- The thesis is 80 pages; collaborative partner was Skanska Talonrakennus Oy (Finland's largest construction company); 5 procurement professionals were interviewed (p. 3).

## Methodology

Mixed-methods approach in two parts:

1. Literature review covering procurement process theory, digitalization in construction, and generative AI in construction.
2. Empirical research: (a) semi-structured interviews with five procurement professionals at Skanska Talonrakennus Oy, exploring current processes, challenges, and AI potential; (b) a case study in which a custom GenAI prompt was engineered and tested within Skanska's own internal GenAI tool to perform bid comparison on real subcontractor cleaning-services bids, with results compared against a manually conducted comparison. Success was measured against five indicators: time savings, improved bid comparability, decision-making support, usability, and value addition.

The case study used real bid PDFs linked to the GenAI tool; prompt engineering was iterative (co-construction method). The study is single-company and single-procurement-phase, limiting generalizability.

## Quotes worth using

- "Materials used in a construction project can represent as much as 70% of the project's total costs." (p. 8, citing Donyavi et al., 2024) -- establishes procurement cost stakes.
- "The construction industry has historically been characterized as a low performer among innovation-driven sectors with limited improvement in productivity and growth. The productivity growth has averaged only 1% annually over the last twenty years." (p. 8, citing Regona et al., 2022).
- "The reluctance to adopt digital tools to everyday processes prevents the construction industry from improving its productivity, design and quality." (p. 8, citing Hossan & Nadeem, 2019).
- "Skanska should look into the possibility of demanding suppliers to fill their bids to a standardized bidding template because this would increase the accuracy of GenAI-based comparisons." (p. 69) -- direct practitioner recommendation aligning with our product's data normalization approach.
- "While AI is unlikely to fully automate procurement, it has a key role in potentially reducing errors, enhancing efficiency, and enabling procurement teams to focus on strategic decision-making." (p. 66).
- "The most notable result obtained from this research is the obvious need for AI-based solutions to help procurement personnel to increase their productivity and have more time on strategic planning and value adding tasks." (p. 70).
- "Collaboration between developers, construction professionals and AI experts is necessary to create more reliable AI applications in the future." (p. 73).
- "GenAI tool's performance is heavily dependent on the clarity and simplicity of the initial prompt and input documents." (p. 74).

## Applicability to our project

**Product concept -- strong validation:**
The four procurement phases identified (bid comparison, supplier evaluation, procurement package formation, contract oversight) map directly onto what a construction procurement optimization tool should address. The thesis confirms that industry practitioners at a major GC (Skanska) want AI help in exactly these areas. The case study shows bid comparison is the most immediate and tangible entry point -- a clear beachhead for an MVP.

The finding that standardized input formats are the dominant variable in GenAI performance is directly relevant to our architecture: our product's value proposition of normalizing heterogeneous supplier bids into a structured format before optimization is validated as the correct approach. Hamppi's thesis effectively demonstrates that a raw GenAI prompt on unstructured PDFs is insufficient -- a structured pre-processing layer (which is our differentiator) is what is needed.

The non-determinism finding (different outputs for identical inputs) is a direct argument against relying on general-purpose GenAI chat tools and in favor of a purpose-built, deterministic optimization engine -- exactly what we are building. This is a competitive moat argument: our optimization-based decision engine produces reproducible outputs, whereas a prompt-based GenAI tool does not.

**Market thesis -- validated:**
The thesis confirms the gap between procurement process complexity and current tool capability. It notes that GenAI-based bid comparison "is not broadly researched as in this research" and that "development work is happening behind closed doors" -- signaling a nascent market with real demand and limited public-facing solutions. This supports the window-of-opportunity framing for our grant and investor pitches.

**Procurement process design:**
The five success indicators Hamppi identifies (time savings, improved bid comparability, decision-making support, usability, value addition) are directly usable as product design criteria and as KPIs in our grant deliverables and pilot validation plan. The finding that human expert oversight remains essential supports our human-in-the-loop design and mitigates regulatory/liability concerns.

**Grant positioning:**
The academic framing -- Aalto University, Skanska as partner, Building 2030 program references in the bibliography -- provides a precedent for university-industry collaboration structures in this exact domain. The Building 2030 program references (Peltokorpi et al., 2025; Peltokorpi et al., 2023) are worth investigating as a parallel research stream to cite in Horizon Europe or NWO grant applications.

**Barriers we need to address:**
The conservatism and change-resistance findings reinforce that our go-to-market cannot rely on top-down enterprise sales alone. Piloting, training, and showing results within the team's existing workflow are preconditions for adoption -- which aligns with our planned embedded pilot structure at a partner GC.

## Limitations / caveats

- **Single company, single country, single phase:** The entire empirical section is based on five interviews and one case study at Skanska Finland, focused on cleaning-services subcontracting. Generalizability to other GCs, other procurement categories (structural works, MEP, materials supply), and other markets (Netherlands, Germany, Serbia) is not established.
- **GenAI tool tested was Skanska's proprietary internal tool** (likely a hosted LLM with document-linking), not a purpose-built procurement AI. The performance findings reflect prompt-based GenAI on an enterprise chat platform, not a structured optimization engine. Our product is architecturally different.
- **The thesis does not address local/on-premise deployment, data privacy, or model fine-tuning** -- all of which are central to our product concept. Its findings on AI reliability limitations apply to cloud-based general GenAI and may not apply to a locally fine-tuned, domain-specific model.
- **The numerical results (2-minute comparison, variation percentages) come from a single cleaning-services procurement** with modest financial scale. For multi-million-euro structural or MEP packages, the complexity and stakes are categorically higher.
- **The thesis was completed in May 2025** and cites models available at that time. The field is moving rapidly; some reliability limitations identified may already be partially addressed by newer model versions.
- **No cost or ROI analysis is provided.** The time-saving figure (30 min vs. 2 min) is not converted to financial value or scaled across procurement volume, so it cannot be used directly as a business case number without further work.
- **Bias risk:** The research is conducted inside Skanska, with Skanska advisors (Arttu Haikonen, Klaus-Erik Heimonen) co-supervising. Results may reflect what Skanska's tool can do rather than what is possible in principle.

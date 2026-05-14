---
title: Generative AI in Infrastructure Tendering: A Study on Human-Generative AI Deliberation
author: Roos van Duuren
institution: TU Delft / Count & Cooper
year: 2025
type: Master's thesis
file: Thesis_Final_RoosvanDuuren.pdf
---

## Core argument

Generative AI can assist consultants in reviewing open infrastructure tenders, but its effectiveness depends heavily on structured human-AI deliberation rather than passive use. Trust, explainability, and user knowledge of how to prompt the system are the primary determinants of whether AI adoption produces value or stagnates.

## Key findings relevant to the business

- The primary barrier to GenAI adoption in tendering is not scepticism about AI in principle, but a **knowledge gap**: users do not know how to interact with GenAI effectively (prompt formulation, defining scope, setting boundaries). Addressing this gap is simultaneously the main barrier and the most actionable driver.
- **Trust** is the central organising factor. It is shaped by: explainability of AI outputs, data confidentiality assurance, ease of use, and prior positive experience. Trust correlates directly with willingness to shift judgment based on AI input.
- GenAI was found useful for: preventing tunnel vision, identifying blind spots in tender documents, providing objective (interest-free) review, supporting critical reflection, and finding missing elements against a client's specification checklist.
- **Older, more experienced professionals are more resistant** to AI suggestions; younger, less experienced staff are more open but risk over-reliance. This tension is directly relevant to adoption strategy in construction firms.
- GenAI's **servility** (tendency to agree with user input rather than challenge it) was identified as a significant problem. It reduced perceived trustworthiness and the tool's value as a genuine review partner. Participants felt a tool that never pushes back cannot be fully relied upon for critical evaluation.
- **Over-reliance** is a documented risk: users, particularly those with professional insecurities, may treat AI output as validation rather than input. Research cites Klingbeil et al. (2024) and Zhai et al. (2024) confirming this pattern broadly.
- **Confidentiality** is a precondition (a "condition" in Activity Theory terms), not a driver. When absent, it becomes a hard blocker. When present (e.g. via a team licence with contractual data protection), users proceed without hesitation. A custom/local deployment directly addresses this.
- GenAI was described as effective when given **full context** (tender documents, client guidelines, project abbreviations). When context was missing or terminology was ambiguous, output quality degraded significantly. The research explicitly identifies this as a limitation of generic ChatGPT vs. a context-aware custom tool.
- Introducing a **structured AI-assisted review step close to the final submission deadline** was identified as a promising intervention point in the tendering workflow.
- An evaluation framework was produced (Figure 5.10) mapping contradictions in human-GenAI interaction via Activity Theory. Contradicting factors include: curiosity, ease of use, reliance, over-reliance, under-reliance, agreement, trust, sustainability, rules of interaction, explainability, scepticism, company culture, peer-stimulated curiosity, user experience, efficiency, privacy, transparency, helpfulness, GenAI being up-to-date, and knowledge/primitives of GenAI.

## Useful statistics and data points

- Experiment conducted with **5 participants** from Count & Cooper consultancy, each with varying levels of tendering experience (p. 29, Table 4.1). Results are qualitative and not statistically generalisable.
- Deliberation sessions lasted approximately **15 minutes** per participant (p. 56). This was considered insufficient for deep entanglement or genuine deliberation in many cases.
- Two follow-up **expert evaluation sessions** were held to validate findings (p. 42).
- Score adjustments before and after deliberation varied widely: some participants showed significant shifts, others showed near-zero change or even moved scores in the opposite direction to AI suggestions (p. 33, Figures 5.3 and 5.4).
- The study focused on the **consultant role** in open infrastructure tendering specifically (Rijkswaterstaat-style Dutch procurement process), not on the contractor or client side (p. 55, limitation 6.3.8).
- Tender planning examples from Rijkswaterstaat are included in Appendix B (Tables B.1-B.3, pp. 70-71), providing concrete timelines.

## Methodology

Qualitative study combining: (1) structured experiment in which 5 participants individually reviewed a real infrastructure tender section using a structured questionnaire, then engaged in a deliberative conversation with a pre-instructed ChatGPT instance; (2) a group discussion with rating statements; (3) two expert evaluation sessions with industry practitioners. Data was analysed using thematic analysis and structured through the Activity Theory framework (Engestrom, 1987). The Human-AI Deliberation Framework from Ma et al. (2024) was adapted as the interaction design basis. Research conducted in Dutch, which introduced some terminology translation challenges (trust vs. reliance).

## Quotes worth using

- "For me, ChatGPT is something that brings efficiency. In fact, I think ChatGPT is even more efficient than hours of googling." - Participant 1 (p. 41, Figure 5.8)
- "Stressing that GenAI is a collaborative partner, rather than a passive assistant, could help foster engagement and trust." (Summary, p. iii)
- "Introducing a GenAI-assisted deliberation step close to the final submission of tenders seemed to support critical reflection." (Summary, p. iii)
- "In practice, it is the responsibility of the user to provide ChatGPT with relevant context when interacting with ChatGPT." (p. 54)
- "While human judgement remains essential for filtering and evaluating the relevance of the information it provides." (p. 43, evaluation session finding on helpfulness)
- "A counterargument to this limitation... is that this uncertainty reflects the nature of real-world tendering, where interpreting limited feedback and navigating unclear expectations is often part of the process." (p. 55) -- useful for arguing that AI in tendering must be designed for ambiguity.
- "The absence of [customer] dialogue phase... may have left ChatGPT without essential context." (p. 54) -- direct argument for context-injected, domain-specific AI over generic tools.

## Applicability to our project

**Supports the product concept:**
- The thesis directly validates the use case: AI-assisted review of construction/infrastructure procurement documents. The specific gap identified (lack of context, generic tools, no domain knowledge injection) is precisely what a locally-deployed, fine-tuned model with project-specific context addresses.
- The finding that missing context and domain terminology cause AI output to degrade is a strong argument for local deployment with embedded project and client data, rather than a generic cloud API.
- Servility of generic GenAI is a product differentiator opportunity: a system designed to flag discrepancies, challenge assumptions, and surface risks (rather than agree with input) fills the identified gap.

**Supports human-in-the-loop design:**
- The thesis confirms that full AI autonomy is not accepted, not appropriate, and likely counterproductive at this stage. Human judgement is consistently described as essential for evaluating relevance. The correct product framing is decision support, not decision replacement.
- The finding that older/experienced professionals resist AI suggestions more strongly suggests the product UX should give humans clear control and audit trails, so experienced practitioners feel the tool augments rather than overrides their expertise.
- Over-reliance risk (documented in literature cited) supports building in mandatory review steps and confidence scores rather than presenting AI outputs as definitive.

**Supports decision support framing:**
- The Activity Theory framework applied here maps exactly to the kind of socio-technical system your product operates within. The identified contradictions (explainability, prompting difficulty, servility, knowledge gap) are design requirements, not just academic observations.
- The recommendation to provide "clear rules of engagement" and "structured guidance with practical examples" translates directly into onboarding and UX design for construction procurement professionals.

**Grant positioning:**
- This is a 2025 TU Delft thesis on exactly this topic, produced in partnership with a Dutch infrastructure consultancy. It can be cited as evidence of: (a) a validated problem space, (b) an identified knowledge gap that structured tooling could close, and (c) academic interest in this domain within Dutch infrastructure. Useful for Horizon Europe or NWO grant applications positioning the project as addressing a documented industry need.
- The recommendation to scale up findings using quantitative methods (p. 61, 7.6.1) and to develop a "standardised review tool" (p. 61, 7.6.3) is an explicit research gap that a commercial product or accompanying R&D project could address.

## Limitations / caveats

- **Sample size of 5 is very small.** Results are qualitative and exploratory; no statistical claims can be drawn. Do not cite specific percentages or treat any finding as established fact without corroborating sources.
- The study focused **only on the consultant role** at Count & Cooper. It did not include contractors (who prepare the tenders) or clients (Rijkswaterstaat). The procurement AI product targets the contractor/bidder side, which is a different workflow and different risk profile. Findings on consultant review behaviour may not transfer directly.
- **ChatGPT was used as the AI system**, not a domain-specific or locally-deployed model. Many of the identified limitations (lack of context, servility, opacity) are characteristics of generic cloud GenAI, not inherent to AI-assisted tendering. This means the study's barriers are in part an artefact of the tool chosen, and a better-designed system would show different results.
- The **deliberation framing** (human-AI dialogue) is the research focus, but the author acknowledges that in practice the tool functioned more as a "tender review tool" than a true deliberative partner (p. 53). The deliberation concept may be overstated relative to actual user behaviour.
- **Language limitation**: the study was conducted in Dutch, and the concepts of trust and reliance lack clear distinction in Dutch, which may have conflated two analytically separate constructs in the data.
- The **dialogue phase** (internal bid team discussions, client Q&A) was excluded from the experiment, which the author acknowledges may have significantly affected AI output quality. Real-world deployment would need to include this context.
- The thesis was completed in **May 2025** and explicitly notes that rapid GenAI development means findings may already be partially outdated relative to current model capabilities.

---
title: Data-driven and production-oriented tendering design using artificial intelligence
author: Linda Cusumano
institution: Chalmers University of Technology
year: 2023
type: Licentiate thesis
file: 537840_Fulltext.pdf
---

## Core argument

The construction industry relies on craftsmanship and informal knowledge transfer instead of systematic requirement management, and AI -- specifically NLP and unsupervised clustering -- can automate the extraction and analysis of project requirements during tendering and convert production data from completed projects into reusable organisational knowledge for future bids.

## Key findings relevant to the business

- The construction industry currently lacks systematic requirement management; methods for analysing requirements are "mainly manual" and requirement management "quickly gets overwhelming" (p. 1, Introduction).
- NLP can automate extraction and categorisation of client and regulatory requirements from technical building descriptions, making benchmarking between projects feasible. Tendering specialists rated this as helpful, particularly for project benchmarking and risk management (Paper II summary, p. 4).
- Most tendering specialists prefer information sorted by building part rather than by AMA code (Swedish technical specification structure); any AI tool must align with practitioner workflows, not just document structure (Discussion 5.1, p. 39).
- Production data (inspection issues) can inform subcontractor selection, production method choice, and risk management in new projects -- i.e., historical execution quality feeds procurement decisions (Conclusion RQ2, p. 43).
- Over 80% of survey respondents in a cited study considered inspection data a valuable knowledge source, yet over 50% of companies did not use the data they collected, and even when stored digitally, it is "rarely shared between projects" (Study B, p. 35, citing Lundkvist & Vennstrom [88]).
- Digital inspection reporting was perceived to add value by 90% of respondents (partially or completely), reduce costs by more than 64%, and save time by 80% (Survey results, p. 34, Figure 12).
- The key barrier to AI-assisted knowledge generation is data quality: description fields are often left blank, titles are poorly chosen, and the "discipline" field is of low quality -- making automated categorisation unreliable without prior standardisation (Section 4.2.1, p. 33; Discussion 5.2, p. 40).
- Sentence autocompletion at data-entry time was rated helpful by more than 60% of survey respondents as a way to improve data quality at source (Discussion 5.2, p. 40).
- Requirements traceability is almost entirely absent: "most issues were reported without referring to which requirement they were corresponding to" (Section 4.2.1.2, p. 33). This makes linking production problems back to tendering decisions currently impossible without AI assistance.
- A five-step AI-supported systems engineering pipeline is proposed: (1) NLP extraction of client requirements, (2) automatic labelling and mapping to verification/validation methods, (3) identification of requirements missing proper V&V, (4) automated generation of checklists and control plans, (5) digital validation through testing and inspections (Discussion 5.3, Figure 17, p. 41-42).
- For future concept exploration, genetic algorithms optimising on cost and CO2e are proposed as a way to automate structural design choices -- directly analogous to the optimisation approach relevant to procurement (Future Work, p. 45-46, Figure 18).
- The study explicitly notes that knowledge and data from earlier tendering projects can benefit new projects "even from projects where the contractor lost the bidding, which is currently limited" (Discussion 5.2, p. 41).

## Useful statistics and data points

- Dataset used in Study B contained over 95,000 production issues from hospital projects (Abstract, p. III; Paper III summary, p. 4).
- 90% of survey respondents partially or completely agreed that digital issue reporting adds value to the project (p. 34, Figure 12).
- More than 64% partially or completely agreed digital issue reporting reduced costs (p. 34).
- 80% partially or completely agreed it saved project time (p. 34).
- Over 80% of respondents in Lundkvist & Vennstrom [88] considered inspection data a valuable knowledge source; over 50% of companies did not use that data (p. 35).
- Hospital 1 contract price: 625 MSEK; Hospital 2: 885 MSEK. Insulation remarks represented 0% of issues in Hospital 1 vs 7.2% in Hospital 2 -- illustrating project-level quality variation detectable through data (Table 9, p. 38).
- More than 60% of survey respondents found topic identification at point of BIM/drawing object click to be helpful for issue reporting (Discussion 5.2, p. 40).

## Methodology

Two empirical studies conducted 2021-2023, both in collaboration with NCC Sweden AB (large Swedish contractor), funded by the Development Fund of the Swedish Construction Industry (SBUF):

- **Study A (Requirements analysis):** Built an NLP tool using Word2Vec embeddings to extract and categorise requirements from technical building descriptions against the AMA code structure. Evaluated through (1) a workshop with tendering specialists at NCC where the tool was demonstrated and discussed, and (2) two sequential surveys of tendering specialists rating usefulness.
- **Study B (Production data / verifications):** Analysed a dataset of 95,000+ production issues from Dalux Field inspection software. Conducted interviews with production specialists to assess current digitisation practice. Ran a survey on benefits of digital reporting. Applied Knowledge Discovery in Databases (KDD) method with k-means clustering (scikit-learn) and PCA for dimensionality reduction to identify issue categories and compare projects.

Research was limited to Design-and-Build contracts and to housing/non-infrastructure projects in the Swedish market.

## Quotes worth using

- "Instead of having systematic requirement management, the construction industry tends to trust craftsmanship." (p. 1 / Abstract, p. III)
- "Since the number of requirements in a typical construction project is large, digitalising and using artificial intelligence for data extraction and analysis can facilitate requirement management." (Conclusions, p. 43)
- "Production data can facilitate decision-making regarding the choice of a subcontractor, production method or risk management." (Conclusions RQ2, p. 43)
- "Even if inspection data is stored, and sometimes even digitally, the information is rarely shared between projects." (p. 35, citing [88])
- "Knowledge and data generated at earlier tendering projects can then be used in new projects, allowing insights also from data generated in projects where the contractor lost the bidding, which is currently limited." (Discussion 5.2, p. 41)
- "Independently of the choice of the large language model, when applying them in high-stake contexts such as requirement analysis, contract evaluations or juridical documents, it must be considered that no model is perfect. Phenomenons such as hallucinations... need to be considered and handled." (Discussion 5.1, p. 39)
- "Today, most information flows in a construction project are linear, with little data available at the project start and more and more data added during the various construction stages. After the production is completed, the project data is generally not further used." (Introduction, p. 1)

## Applicability to our project

**Supports the product concept directly:** The thesis is the closest academic parallel to what the business is building. Cusumano demonstrates that NLP for tendering requirement extraction is technically feasible and that practitioners find it useful (particularly for benchmarking and risk identification). The vision of closing the information loop from production data back to tendering decisions maps precisely onto the AI procurement tool concept.

**Market thesis confirmed:** The gap between data collected and data used is empirically documented (50%+ of companies ignore inspection data; requirements traceability is near-zero). This validates the core market pain and the argument that structured AI assistance creates real efficiency gains.

**Optimisation approach partially addressed:** The thesis focuses on NLP/clustering rather than optimisation-based decision engines, but the Future Work section explicitly proposes genetic algorithms for cost and CO2e optimisation in concept exploration -- naming the same multi-criteria optimisation framing the business uses. This provides academic precedent for framing the product as an optimisation tool.

**Grant positioning:** The research was funded by SBUF (Swedish construction industry fund) and NCC. This is strong precedent for academic-industry co-funded research in construction AI. For Dutch equivalents (NWO, RVO, Topsector Bouw), the thesis can be cited to demonstrate that AI in construction tendering is a recognised research gap with practitioner buy-in, not a speculative technology.

**Data quality as prerequisite:** The thesis is explicit that AI-generated insights depend on standardised, well-labelled input data. For the product, this validates a design choice: input structuring, guided data entry, and ontology design are not overhead -- they are preconditions for the AI layer to work.

**Swedish context, but transferable:** The thesis explicitly states "the theories and results can be applied to the construction industry in other countries since they largely face the same challenges and possibilities" (Limitations, p. 3). This supports applying findings to the Dutch market.

**Not a procurement optimisation tool:** The thesis does not address supplier selection, price optimisation, or subcontractor benchmarking on commercial terms. The work is upstream (requirements and production quality). Our product extends into the procurement execution layer that this thesis leaves untouched.

## Limitations / caveats

- The research was conducted entirely within one large Swedish contractor (NCC) and validated only in the Swedish market context. The Swedish AMA code system, contract structures, and regulatory environment differ from Dutch ones.
- The study is limited to Design-and-Build contracts and explicitly excludes Design-Bid-Build contracts and infrastructure projects. Commercial real estate and residential procurement in the Netherlands may follow different contract forms.
- The AI tool was demonstrated to participants before the second survey, which the author acknowledges may have biased responses toward more optimistic assessments of benchmarking and away from material quantity possibilities (Discussion 5.1, p. 39).
- The NLP tool used Word2Vec (2021 implementation), which the author notes is outdated; transformer models (BERT, GPT) would likely outperform it. Findings on tool performance should not be taken as representative of current model capabilities.
- Data quality problems found in the 95,000-issue dataset (blank fields, poor titles, low-quality discipline labels) mean that clustering results required manual interpretation by domain experts -- the method is not autonomous.
- The thesis is a Licentiate (intermediate between MSc and PhD in Sweden), not a full doctorate. Findings are based on one industry partner and relatively small survey samples; effect sizes and generalisability are limited.
- No economic quantification of value delivered: the thesis demonstrates perceived benefit but does not measure ROI, time saved in hours, or cost reduction in euros.

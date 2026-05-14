---
title: AI-Driven Identification of Reference Projects for Architectural Tenders: A Data-Driven Approach
author: Egill Friðriksson
institution: KTH Royal Institute of Technology
year: 2025
type: Master's thesis
file: FULLTEXT01.pdf
---

## Core argument

AI-based semantic retrieval systems can automate the identification of reference projects during architectural tender preparation, reducing manual search time by more than 50% while surfacing relevant projects that human memory-based processes would miss. The key technical insight is that a lightweight, on-premise embedding approach (sentence transformers + keyword filtering + custom ranking) outperforms both cloud LLM APIs and pure keyword search for this domain task.

## Key findings relevant to the business

- Construction and AEC procurement teams rely heavily on personal memory of a small set of "go-to" projects; this is explicitly described as inefficient, unreliable, and creating single-person knowledge bottlenecks (p. 33, 45)
- When reference projects required by a tender's strict technical criteria could not be found quickly, procurement teams spent several days manually combing through scattered data, sometimes discovering too late that the chosen project did not fully meet criteria -- resulting in lost bids (p. 33)
- The existing manual process involves compiling emails, waiting for replies, and coordinating with colleagues before a search can even begin; the AI tool collapsed this to self-service minutes (p. 45)
- On-premise deployment was non-negotiable for the client due to data security concerns about sensitive project information; cloud APIs were explicitly rejected on these grounds even when technically superior (p. 35)
- OpenAI GPT-4 was prototyped first but rejected due to token costs and third-party dependency risk; local Llama-3 was rejected due to hardware requirements and 20-second latency on cloud inference; final solution used lightweight Sentence-BERT (p. 34-35)
- The system expanded the pool of reference projects beyond what manual processes surfaced -- a BIM leader noted the tool found projects "he was unaware of" that were tender-relevant (p. 44)
- The tool reduces reliance on the memory of a single key employee (described as "pure memory") who was the organizational bottleneck; year-long parental leave had created a gap in organizational knowledge (p. 45)
- Newer employees with limited institutional knowledge (1.5 years experience) could contribute effectively to procurement using the tool -- democratization of domain knowledge (p. 44)
- The embedding approach handles linguistic variation (Swedish/English mixed terminology) better than keyword search, which failed because "architects frequently used varying terminology" (p. 35)
- The same pipeline is identified as directly applicable to construction and civil engineering for searching site logs, inspection reports, safety records, IoT feeds, and other fragmented documentation (p. 47)

## Useful statistics and data points

- Manual search time reduction: more than 50% according to user testing (abstract, p. iii)
- Time savings estimated by Tendering Leader (Mia): 50-60% of time currently spent on the task (p. 44)
- Time savings estimated by Marketing Assistant (Ella): more than 50% reduction in waiting times (p. 44)
- Specific task comparison: finding small critical data points took "a few minutes" with the tool vs. "half a day" with the current method (p. 44)
- Communication reduction: tool allows "three phone calls instead of ten" (Mia quote, p. 45)
- Similarity cutoff threshold of 0.60 cosine similarity found to yield robust retrieval performance after extensive experimentation (p. 36)
- Query response time on on-premise hardware: approximately one second for keyword search; a few seconds for embedding calculations (p. 36)
- Cloud inference latency with Llama-3 via Modal: 20-second average, deemed unacceptable for real-time use (p. 35)
- Ranking weights (tuned collaboratively with procurement team): 15 points per structured attribute match, 10 points per unique keyword in notes, maximum 5 points for semantic similarity component (p. 36)
- Interview sample size: 3 participants (BIM Leader 4 years procurement experience, Tendering Leader 1.5 years, Marketing Assistant 3 years) at Cedervall Arkitekter, Stockholm (p. 42)

## Methodology

Design science / applied research with a single case study (Cedervall Arkitekter, a Swedish architecture firm). Data source: the Milltime project management system, accessed via standard API and ODBC server, containing structured project metadata and unstructured per-hour user notes (Anteckningar). Technical stack: SQLite for local storage, Python Flask web application, `distiluse-base-multilingual-cased-v2` (multilingual Sentence-BERT) for embeddings, `Helsinki-NLP/opus-mt-en-sv` (MarianMT) for English-to-Swedish translation, spaCy for tokenization and stopword removal, langdetect for language identification. Evaluation method: structured qualitative interviews with 3 end users, each 30 minutes, transcribed verbatim; 18 questions across three sections (current process, tool evaluation, perceived impact). No quantitative precision/recall evaluation was performed against a ground-truth benchmark.

## Quotes worth using

- "The identification of suitable reference projects is a critical yet time-consuming aspect of the architectural tendering process." (abstract, p. iii)
- "Their existing process relied heavily on employees' personal memory and a narrow set of 'go-to' projects." (p. 33)
- "If new references were ever required...the procurement team spent several days manually combing through scattered data in hopes of finding a relevant match." (p. 33)
- "Often, they discovered that the chosen project did not fully meet the criteria, resulting in lost bids." (p. 33)
- "I'm the person here who has the broadest knowledge of projects due to my role, but that also means I have to know all the projects, and nobody can do that." (Ella, Marketing Assistant, p. 45)
- "It has surprised me how many projects could actually be relevant in tender processes that I didn't know about." (Antonio, BIM Leader, p. 44)
- "The data points encapsulate the scope of our requirements in the procurement process." (Ella, p. 43)
- "I'm happy to see that it's possible to modify the keywords if the query isn't correct. That's very useful." (Antonio, p. 43)
- "make three phone calls instead of ten" (Mia, Tendering Leader, p. 45)
- "get much further in the process" -- Mia on non-specialists being empowered by the tool (p. 46)

## Applicability to our project

- **Direct validation of the problem space**: This thesis is set on the architect/design firm side of AEC tendering, but the pain points it documents -- memory-dependent search, days of manual effort, lost bids due to poor reference matching -- are structurally identical to what a construction contractor (like Züblin's bid processing team) faces when selecting subcontractors, pricing comparable projects, or compiling capability statements for procurement responses. Dusko Stojanovic's role at Züblin is literally "Project Lead Bid Processing," placing him in exactly this workflow.
- **On-premise deployment validated as a real customer requirement**: The thesis confirms that data security concerns are not a theoretical objection -- they caused the team to reject GPT-4 and cloud Llama-3 in an actual deployment. This directly supports the product's local fine-tuned model architecture and can be cited as evidence in grant applications and customer conversations.
- **Lightweight models beat large ones for this use case**: The finding that a task-specific embedding model (Sentence-BERT) + custom ranking outperformed GPT-4 and Llama-3 in practice (on latency, cost, and data governance grounds) supports the product's design philosophy of local, optimized models over general-purpose LLMs.
- **Unstructured notes are the high-value data layer**: The thesis found that structured metadata alone was insufficient; it was the unstructured per-hour employee notes that unlocked meaningful retrieval. This supports building a data ingestion layer that captures and indexes operational text data (emails, meeting notes, time-tracking comments) inside construction firms.
- **Knowledge democratization as a sales narrative**: The finding that newer employees can contribute effectively to procurement using the tool -- reducing dependence on a single institutional memory holder -- is a compelling benefit story for HR and management buyers, not just procurement leads.
- **Grant positioning**: The thesis is a 2025 KTH master's thesis demonstrating academic interest in AI for AEC procurement. It can be cited as prior art establishing the scientific problem, while the product claims to go further: from retrieval (finding past projects) to optimization (recommending subcontractors, pricing, bid/no-bid decisions).
- **Multilingual handling**: The Swedish/English mixed-language challenge solved here mirrors the German/English environment of a firm like Züblin operating in DACH markets.

## Limitations / caveats

- **Single case study, tiny interview sample**: All findings are from one architecture firm (Cedervall Arkitekter) with 3 interview participants. Time savings figures (50-60%) are self-reported estimates by users, not controlled measurements -- do not treat these as generalizable benchmarks.
- **No ground-truth evaluation**: There is no precision/recall measurement against a labeled dataset. The thesis explicitly chose qualitative interviews because "alternative quantitative methods were deemed unsuitable" (p. 29). The accuracy claims rest on user satisfaction, not objective retrieval metrics.
- **Architecture firm, not contractor**: Cedervall is a design/architecture firm, not a construction contractor or subcontractor. The data structures (billable hours + notes in Milltime) differ from contractor ERP systems. The workflow of selecting reference projects for a design tender is adjacent to but not identical to subcontractor selection or cost estimation in a general contractor context.
- **The system is tailored, not generic**: The thesis explicitly states "the applicability of the system is limited to Cedervall's data and is not designed as a generic plugin that can be readily implemented with other companies' data, unless their data conforms precisely to the same structure and format." (p. 32). This is honest about the customization required -- relevant when estimating implementation cost per customer.
- **Data quality dependency**: The tool's output quality is directly constrained by the quality of the underlying Milltime data, which was "sometimes incomplete or inconsistent." Manual verification remained necessary. This is the general problem of garbage-in/garbage-out and should not be obscured in sales conversations.
- **Excludes file server / unstructured documents**: The scope deliberately excluded Cedervall's internal file server (drawings, client interviews, detailed documentation) due to format heterogeneity. This is a significant gap -- much of a construction firm's institutional knowledge lives in documents, not time-tracking notes.
- **No competitive or commercial analysis**: The thesis reviews Oracle Procurement Cloud, SAP Ariba, and GEP Smart as existing solutions but only briefly; no pricing, market size, or adoption data is provided.

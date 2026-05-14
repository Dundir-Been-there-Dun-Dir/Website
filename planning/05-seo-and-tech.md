# 05 - SEO Strategy and Technical Stack
> Agent: seo-tech-agent
> Last updated: 2026-05-14
> Skills applied: seo-fundamentals, seo-content, seo-page, seo-technical, seo-aeo-meta-description-generator

---

## Part 1: Technical Stack Recommendation

### Evaluation Matrix

| Criterion | Jekyll | Hugo | Plain HTML/CSS/JS | Astro |
|---|:---:|:---:|:---:|:---:|
| GitHub Pages native (no Actions needed) | Yes | No | Yes | No |
| Build speed | Slow | Fast | N/A | Fast |
| Non-developer content updates | Markdown | Markdown | Raw HTML | MDX/Markdown |
| Mobile-first framework support | Via theme | Via theme | Manual | Manual |
| Template / component reuse | Liquid | Go templates | Manual | Components |
| Learning curve | Low | Medium | Low | Medium |
| Active ecosystem (2026) | Declining | Active | N/A | Active |
| GitHub Pages free tier compatibility | Native | Requires Actions | Native | Requires Actions |
| CMS-friendly (Forestry, Decap, Tina) | Yes | Yes | No | Partial |

---

### Jekyll
**Pros:** GitHub Pages compiles Jekyll natively — no Actions workflow, no build pipeline, push-to-deploy out of the box. Mature ecosystem, many clean themes, good documentation, Liquid templates are learnable. YAML front matter is readable by non-developers. GitHub Pages applies security patches automatically.

**Cons:** Ruby dependency stack is slow and often breaks on local development across platforms (Windows in particular). Build times degrade at scale. The ecosystem is visibly declining — most active theme development has moved to Hugo or Astro. Liquid templating is less capable than Go templates or JSX.

**Maintenance burden:** Low once set up. Non-developers can edit Markdown files in the GitHub UI directly without touching code. Critical weakness: local preview requires a functioning Ruby environment, which is painful to set up and keep working.

**Developer skill required:** Low. Markdown + basic YAML. Any developer familiar with static sites can work with it.

**GitHub Pages compatibility:** Native. Zero configuration needed. Push to main branch, site builds automatically.

---

### Hugo
**Pros:** Extremely fast builds (sub-second for sites this size). Go templates are powerful. Taxonomy system, multilingual support, and shortcodes are mature. Large active community and theme ecosystem. Excellent documentation. Better long-term ecosystem health than Jekyll.

**Cons:** Requires a GitHub Actions workflow to build (GitHub Pages does not run Hugo natively). Go templating syntax is initially confusing. Local Hugo binary installation is required. Non-developers cannot preview changes without running Hugo locally or waiting for CI.

**Maintenance burden:** Medium. The Actions workflow is simple and reliable once written, but a non-developer cannot do a quick GitHub UI edit and immediately see it render correctly — they have to trust the pipeline or wait.

**Developer skill required:** Low-to-medium. Hugo itself is learnable in a day, but the Go template syntax has a steeper curve than Liquid.

**GitHub Pages compatibility:** Requires Actions. One workflow file handles it permanently.

---

### Plain HTML/CSS/JS
**Pros:** Zero dependencies. Maximum control. No build pipeline. No framework to update or break. Loads fast by default. No abstraction layer between intent and output.

**Cons:** No templating means repeating the nav, footer, and head across every file. Any global change (adding a nav item, updating the meta charset) requires touching every HTML file. This is fine for a 3-page site and becomes a maintenance liability at 8-10 pages. Non-developers editing raw HTML will introduce errors.

**Maintenance burden:** High at scale. Low at MVP. The crossover point is approximately 6-8 pages.

**Developer skill required:** Low for initial build. The problem is non-developer maintainability — editing raw HTML is error-prone for people who do not code.

**GitHub Pages compatibility:** Native. Perfect. Just files.

---

### Astro
**Pros:** Modern, component-based, ships zero JS by default (fully static). Excellent Core Web Vitals out of the box. Supports Markdown and MDX. Component model is clean. Growing ecosystem.

**Cons:** Requires a build step and GitHub Actions workflow. Newer than Hugo or Jekyll — less battle-tested at scale. A non-developer editing MDX files in the GitHub UI is workable but not frictionless. Framework updates are more frequent.

**Maintenance burden:** Medium. Similar to Hugo — the Actions pipeline is reliable, but local development requires a Node environment.

**Developer skill required:** Medium. React/Vue component patterns help. JSX syntax for layout files.

**GitHub Pages compatibility:** Requires Actions. Straightforward to configure.

---

### Recommendation: Hugo

**Hugo is the right choice for Dundir.** Here is why it wins on the specific requirements:

1. **Speed and longevity.** The site will grow from 5 pages to 15-20 pages within 12 months as case studies, blog posts, and regulatory content are added. Hugo handles this without build time degradation. Jekyll will slow down and its ecosystem will continue to decline.

2. **Multilingual support is built in.** The site will almost certainly need both Dutch (primary) and English versions. Hugo's i18n system handles this cleanly without third-party plugins. Jekyll and plain HTML treat multilingual as an afterthought.

3. **Non-developer content workflow.** Hugo + Decap CMS (formerly Netlify CMS, runs on GitHub Pages via the cdn.jsdelivr.net CDN) gives non-technical team members a web-based editing interface. They never need to touch the GitHub UI or run Hugo locally. Kirsten or Gerard can publish a case study without asking a developer.

4. **The Actions workflow is one file and is permanent.** Write it once, never touch it again. This is not a meaningful ongoing maintenance burden.

5. **Theme ecosystem.** Hugo themes like PaperMod and Blist are actively maintained, load fast, and look credible — not like a Bootstrap 3 template from 2015.

**What to use alongside Hugo:**
- **Decap CMS** (open source, GitHub-backed storage) for non-developer content editing
- **Tailwind CSS** via CDN Play or a simple PostCSS build step for styling
- **GitHub Actions** with the `peaceiris/actions-hugo` action for deployment

**What not to do:** Do not use a Hugo theme off-the-shelf as the final design. Start with a minimal theme (PaperMod or Blist) as a structural base and replace the visual layer with Dundir's own design language. A procurement director in the Netherlands will not convert on a theme that looks like a tech blog.

---

## Part 2: SEO Strategy

### Language Decision: Dutch First, English Available

**The site should be primarily in Dutch.** The rationale:

The primary buyer is a Dutch construction procurement manager or a gemeente procurement officer. When they search, they search in Dutch. "Inkoop software bouw" gets searched; "construction procurement software Netherlands" does not — that is what their IT manager might type, but the decision-maker searches in their own language.

Dutch is also a trust signal. A site in English for a Dutch company targeting Dutch public sector clients signals that you are not really a Dutch company. The Aanbestedingswet, CPR 2024, and CSRD are Dutch regulatory contexts — they should be discussed in Dutch.

**English landing pages for secondary traffic sources:**
- `/en/` — English homepage for investors, international partners, and EU municipality visitors
- `/en/research/` — The Skanska/Hamppi research summary in English (this is the most citeable content internationally)
- All blog content in Dutch, with selected posts available in English translation

**Hugo handles this natively.** The `content/nl/` and `content/en/` directory structure with hreflang tags is a standard Hugo configuration.

---

### Primary Keyword Targets

These are the queries where Dundir can realistically rank within 12-18 months given a new domain. They are chosen for intent match (procurement managers comparing tools or looking for solutions to specific problems), manageable competition (no well-funded incumbents dominating Dutch SERPs for these exact phrases), and alignment with Dundir's content authority.

**Dutch — Tier 1 (primary targets, homepage and core pages)**

| Keyword (Dutch) | English translation | Intent | Rationale |
|---|---|---|---|
| AI inkooptool bouw | AI procurement tool construction | Commercial | Exact product description; low current competition |
| inkoop automatisering bouwsector | procurement automation construction sector | Commercial | High intent, decision stage |
| leveranciersvergelijking software aannemer | supplier comparison software contractor | Commercial | Specific pain point |
| aanbestedingsrapportage software gemeente | tendering report software municipality | Commercial | Municipality segment, high compliance intent |
| AI inkoop gemeente aanbestedingswet | AI procurement municipality aanbestedingswet | Commercial | Regulatory keyword; high specificity, low competition |

**Dutch — Tier 2 (blog and resource content, educational intent)**

| Keyword (Dutch) | English translation | Intent |
|---|---|---|
| inkoop bouw digitaliseren | digitalise construction procurement | Informational |
| leveranciersselectie aannemer spreadsheet | supplier selection contractor spreadsheet | Informational (pain point) |
| CSRD scope 3 inkoop bouw | CSRD scope 3 procurement construction | Informational (regulatory) |
| CPR 2024 inkoopdocumentatie | CPR 2024 procurement documentation | Informational (regulatory) |
| bouw inkoopmanager tijdverspilling | construction procurement manager time waste | Informational |
| uitlegbare AI overheidsinkoop | explainable AI public procurement | Informational |
| gemeentelijke aanbesteding automatisering | municipal tendering automation | Informational |

**English — Secondary targets (for `/en/` pages and research content)**

| Keyword | Intent |
|---|---|
| construction procurement AI Netherlands | Commercial |
| explainable AI procurement public sector | Informational |
| local deployment procurement software | Commercial |
| construction supplier comparison AI tool | Commercial |
| CSRD scope 3 procurement software | Informational |

---

### Long-Tail Keyword Opportunities

These are high-intent queries with very low competition. Each is a viable standalone blog post or FAQ entry. They represent the specific, contextual searches made by people who already know the problem exists and are researching solutions.

1. "hoeveel tijd besteedt een inkoopmanager aan leveranciersvergelijking" (how much time does a procurement manager spend on supplier comparison) — informational, directly supports the 11-hours-per-week hook

2. "leveranciersrapport aanbestedingswet vereisten gemeente" (supplier report aanbestedingswet requirements municipality) — regulatory, high intent for municipality segment

3. "AI inkoop tool lokaal geinstalleerd" (AI procurement tool locally installed) — commercial, data sovereignty angle, very low competition

4. "bouw specificatie naar leverancier koppelen software" (construction specification to supplier matching software) — specific feature query

5. "inkoopdocumentatie auditbestendig maken" (making procurement documentation audit-proof) — pain point query from procurement managers facing audits

6. "CSRD rapportage leveranciers bouwbedrijf" (CSRD reporting suppliers construction company) — regulatory, growing search volume as CSRD deadlines approach

7. "aanbestedingssoftware gemeente vergelijken" (compare tendering software municipalities) — comparison intent, late-stage buyer

8. "inkoop AI fout detectie bouw" (procurement AI error detection construction) — connects to the Skanska research (€8,354 error on a single line)

9. "leverancierskwalificatie certificaten automatisch controleren" (supplier qualification automatic certificate check) — feature-specific, high intent

10. "bouw inkoop zonder spreadsheets" (construction procurement without spreadsheets) — pain-point lead, educational intent

---

### Content SEO: Blog Posts and Resource Pages

Each post below is mapped to a bowtie stage, a keyword cluster, and a specific audience. All claims must cite sources from the Company repo research index.

**Priority 1: Foundational content (publish at launch)**

**Post 1 — "Generieke AI maakt rekenfouten bij bouwinkoop. Wat dat betekent voor uw aanbestedingsdossier."**
- Bowtie stage: Awareness / Education
- Primary keyword: AI inkoop fout bouw
- Audience: Construction procurement managers, municipality procurement officers
- Angle: Summarise the Skanska/Hamppi 2025 experiment. A generic enterprise AI tool gave different numerical outputs for identical inputs — variance up to €8,354 on a single procurement line. What does this mean for your documentation? For a municipality, a wrong number in an aanbesteding dossier is not a cost — it is a legal liability.
- Why it ranks: No Dutch-language coverage of this research exists. It is citable, specific, and alarming to the exact audience.
- Target length: 1,200-1,500 words
- CTA: Link to the procurement pain scan

**Post 2 — "11 uur per week. Wat spreadsheet-inkoop uw organisatie echt kost."**
- Bowtie stage: Education / Pain
- Primary keyword: inkoopmanager tijdverspilling bouw
- Audience: Construction company directors and procurement managers
- Angle: Walk through the math. 11 hours/week x €45/hour blended cost x 47 working weeks = €23,265/year per procurement FTE. Add the hidden costs: version control errors, undocumented decisions that disappear when someone leaves, the audit risk of an undocumented supplier choice. The number is almost never just the salary cost.
- Target length: 900-1,200 words
- CTA: Run the procurement pain scan to get your personalised figure

**Post 3 — "CPR 2024 en CSRD: wat betekent dit voor uw inkooprapportage?"**
- Bowtie stage: Education — Regulatory urgency
- Primary keyword: CPR 2024 CSRD inkoop bouw
- Audience: Construction company compliance managers, municipality procurement officers
- Angle: Plain-language explanation of what CPR 2024 and CSRD Scope 3 require in practice from a procurement documentation perspective. What does "auditbestendig" mean in this context? What happens if you cannot show your working in a CSRD report?
- Target length: 1,500-2,000 words
- CTA: Contact for a documentation audit conversation

**Priority 2: Comparison and validation content (publish months 2-3)**

**Post 4 — "Onventis, SAP Ariba, of iets anders? Een eerlijk overzicht voor Nederlandse bouwbedrijven."**
- Bowtie stage: Selection
- Primary keyword: aanbestedingssoftware bouw vergelijken
- Audience: Construction company procurement directors evaluating software
- Angle: Honest comparison of the main options that will appear in their shortlist. Do not pretend Onventis and SAP Ariba do not exist. Explain clearly where they are strong (process management, spend analytics) and where they are not designed for construction-specific AI matching or local deployment.
- Note: This is a comparison post, not a hit piece. Be factually accurate on competitors.
- Target length: 1,500 words

**Post 5 — "Uitlegbare AI: waarom gemeenten niet kunnen vertrouwen op een black box."**
- Bowtie stage: Education / Selection
- Primary keyword: uitlegbare AI overheidsinkoop gemeente
- Audience: Municipality IT and procurement decision-makers
- Angle: EU AI Act, Aanbestedingswet audit requirements, and public accountability mean that a municipality cannot use an AI system that cannot explain its reasoning. What does explainability mean technically? What questions should a municipality ask any AI vendor?
- Target length: 1,200-1,500 words

**Post 6 — "Hoe een bouwbedrijf van 120 medewerkers zijn inkoopproces in 8 weken digitaliseerde."**
- Bowtie stage: Selection / Impact (use as a case study when first pilot client is available)
- Primary keyword: inkoop digitaliseren bouwbedrijf
- Note: This is a case study format. Do not publish until there is a real client willing to be named or quoted. A fictional case study will destroy the trust signal it is trying to create.

---

### Technical SEO Checklist for GitHub Pages

GitHub Pages introduces specific constraints and defaults that require explicit configuration.

**Crawlability**

- [ ] Create `robots.txt` at site root. Hugo places this in `/static/robots.txt`. Content:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://dundir.nl/sitemap.xml
  ```
- [ ] Do not block GPTBot or other AI crawlers. For a startup with no brand awareness, AI citation is free distribution. Being cited in a ChatGPT or Perplexity answer about Dutch construction procurement AI is worth more than the training-data concern at this stage. Revisit this policy when you have established brand equity to protect.
- [ ] Generate and submit an XML sitemap. Hugo generates this automatically with `enableRobotsTXT = true` and `sitemap` config. Submit to Google Search Console on day one.
- [ ] Ensure all content pages are within 2 clicks of the homepage. With a 6-8 page site at launch, this is automatic if navigation is properly structured.

**Indexability**

- [ ] Set canonical tags on every page. Hugo themes include this by default in the `<head>` partial — verify it is present and self-referencing.
- [ ] www vs non-www: Choose one and enforce it at the DNS/GitHub Pages level. Redirect the other. Use `dundir.nl` (non-www) as the canonical form — it is shorter and consistent with the majority of Dutch company domains.
- [ ] Set `noindex` explicitly only on the thank-you page after the pain scan form submission. All other pages should be indexable.
- [ ] No parameter URLs. Hugo generates clean paths by default. Do not add UTM parameters to internal links.
- [ ] Implement hreflang tags correctly if running Dutch and English content. Hugo's multilingual mode generates these automatically when properly configured:
  ```html
  <link rel="alternate" hreflang="nl" href="https://dundir.nl/" />
  <link rel="alternate" hreflang="en" href="https://dundir.nl/en/" />
  <link rel="alternate" hreflang="x-default" href="https://dundir.nl/" />
  ```

**Security and HTTPS**

- [ ] GitHub Pages provides HTTPS via Let's Encrypt automatically for custom domains. Enable "Enforce HTTPS" in repository settings.
- [ ] GitHub Pages does NOT support custom security headers (Content-Security-Policy, HSTS, etc.) on the free tier. For a launch site this is acceptable — revisit if moving to Cloudflare Pages or Netlify where headers can be set via config files.
- [ ] Mixed content: Ensure all external resources (fonts, scripts, images) are loaded via HTTPS. No `http://` references anywhere.

**URL Structure**

- [ ] Use clean Dutch slugs: `/inkoop-pijnscan/` not `/procurement-pain-scan/` — the primary audience searches in Dutch
- [ ] Keep slugs short and descriptive: `/blog/ai-inkoopfouten-bouw/` not `/blog/2026/05/14/generieke-ai-maakt-rekenfouten-bij-bouwinkoop/`
- [ ] No trailing slash inconsistency. Hugo defaults to `uglyURLs = false` (clean URLs with directory index). Keep this. `dundir.nl/over-ons/` is correct. Do not mix `dundir.nl/over-ons` and `dundir.nl/over-ons/`.

**Mobile Optimisation**

- [ ] Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">` — present in every Hugo base template by default, but verify
- [ ] Google indexes the mobile version exclusively (mobile-first indexing, 100% complete July 2024). Every design decision must start from the mobile view.
- [ ] Touch targets: All buttons and links must be minimum 48x48px with 8px spacing — especially the primary CTA button on mobile
- [ ] Base font size: 16px minimum. Do not use 14px body text to make a page look dense and professional. It fails both mobile readability and accessibility.
- [ ] Test on a mid-range Android phone (not just iPhone) — the construction site buyer is often on a Samsung A-series device on a slow 4G connection, not a MacBook on WiFi.

**Open Graph and Social Tags**

Every page needs full OG and Twitter Card tags. Hugo themes include these by default but they use the page title and description as fallbacks — override them with specific social copy for the homepage and key landing pages.

```html
<!-- Homepage example -->
<meta property="og:title" content="Dundir — AI inkooptool voor de bouwsector" />
<meta property="og:description" content="Stop met spreadsheets. Dundir vindt de mathematisch optimale leverancierscombinatie voor uw bouwproject en legt elke beslissing auditbestendig vast." />
<meta property="og:image" content="https://dundir.nl/images/og-homepage.png" />
<meta property="og:url" content="https://dundir.nl/" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="nl_NL" />
<meta name="twitter:card" content="summary_large_image" />
```

OG image specification: 1200x630px, WebP format. Show the product interface or a clear visual metaphor — not a stock photo of a building site. The image is the first thing a Dutch procurement manager sees when someone shares a link in a WhatsApp group or LinkedIn post.

**IndexNow**

Hugo has an IndexNow plugin. Implement it. Bing and Yandex index new content immediately when notified via IndexNow, rather than waiting for their crawl schedules. For a new domain, every indexing speed advantage matters.

---

### Local SEO Considerations (Netherlands-specific)

Dundir is not a local service business (it does not have a physical storefront people visit), so traditional Google Business Profile / maps SEO is not the priority. However, several Netherlands-specific signals matter:

**Domain and hosting signals**

- Use `dundir.nl` (ccTLD) as the primary domain, not `dundir.com`. A `.nl` domain signals to both Google and Dutch visitors that this is a Dutch company. GitHub Pages supports custom `.nl` domains without restriction.
- Register the company with KvK (Kamer van Koophandel) and include the KvK number in the site footer. This is a trust signal for Dutch B2B buyers and a light entity signal for Google.

**Dutch-language entity signals**

- Include the company's full legal name, KvK number, BTW number (once registered), and physical address (Windesheim Zwolle anchor) in the footer and on the contact page. This is a standard Dutch business trust signal — B2B buyers check it.
- Submit to Dutch business directories: Bedrijfsgids.nl, KvK.nl company profile, LinkedIn company page with Dutch language content.

**Regulatory keyword authority**

- The Aanbestedingswet, CPR 2024, and CSRD are Dutch-specific regulatory contexts. Creating the most comprehensive Dutch-language content on the intersection of these regulations and procurement software is achievable for a new domain because no established software vendor has done it. Mercell writes about aanbesteding process; SAP Ariba does not write in Dutch about CPR 2024 documentation requirements for construction SMEs.

**VNG and public sector trust signals**

- If Dundir achieves any affiliation with VNG (Vereniging Nederlandse Gemeenten), Windesheim, or a named municipality pilot, these should be cited with logos on the site. For the municipality segment, being associated with recognisable Dutch public institutions is worth more than any backlink from a tech publication.

---

### Schema Markup Recommendations

All schema should be implemented as JSON-LD in the `<head>` of each page. Hugo allows per-page schema via front matter and a base template partial.

**Organization schema (site-wide, in base template)**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dundir",
  "url": "https://dundir.nl",
  "logo": "https://dundir.nl/images/dundir-logo.png",
  "description": "AI-powered construction procurement optimisation, deployed locally, fine-tuned per client.",
  "foundingDate": "2025",
  "foundingLocation": {
    "@type": "Place",
    "addressLocality": "Zwolle",
    "addressCountry": "NL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["Dutch", "English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/dundir"
  ]
}
```

**SoftwareApplication schema (homepage and product page)**

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Dundir",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "On-premise (Linux, Windows Server)",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "description": "Annual subscription from EUR 24,000"
    }
  },
  "description": "Deterministic AI procurement optimisation for construction companies and Dutch municipalities. Locally deployed. Every recommendation is mathematically grounded and audit-ready.",
  "featureList": [
    "Linear optimisation and evolutionary algorithm supplier matching",
    "Specification-to-supplier AI matching",
    "Audit-ready procurement documentation",
    "Local deployment — data never leaves your server",
    "Per-client fine-tuned model",
    "Aanbestedingswet and CPR 2024 compliant output"
  ],
  "applicationSubCategory": "Procurement Software"
}
```

**FAQPage schema (FAQ section on homepage or dedicated page)**

Note: Google restricts FAQPage rich results to authoritative government and health sources as of late 2024. FAQPage schema still improves AI citation probability (ChatGPT, Perplexity parse it) and may still generate rich results for other schema-supporting engines (Bing). Implement it.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Dundir geschikt voor Nederlandse gemeenten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Dundir is speciaal ontworpen voor de eisen van de Aanbestedingswet 2012 en de EU-aanbestedingsrichtlijnen. Elke aanbeveling is volledig gedocumenteerd, auditbestendig en uitlegbaar voor een gemeentelijke accountant of aanbestedingsboard. De lokale deployment zorgt ervoor dat gemeentelijke data nooit de eigen server verlaat."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe verschilt Dundir van SAP Ariba of Onventis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SAP Ariba en Onventis zijn horizontale inkoopsuites voor grote ondernemingen, cloud-only. Dundir is specifiek gebouwd voor de bouwsector, draait lokaal op uw eigen infrastructuur, en wordt per klant gefinetuned op uw eigen inkoophistorie. Geen gedeeld model, geen clouddienst, geen generieke AI."
      }
    },
    {
      "@type": "Question",
      "name": "Wat betekent 'uitlegbare AI' in de context van inkoop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dundir's optimizer is deterministisch: voor dezelfde invoer geeft het altijd dezelfde uitvoer, en het toont zijn rekenwerk. Elke leveranciersselectie wordt onderbouwd met de gewogen criteria die u heeft ingesteld. Dit in tegenstelling tot generieke LLM-tools die bij identieke invoer verschillende uitkomsten geven — soms met afwijkingen tot €8.354 op een enkele inkooppost (Skanska/Hamppi, Aalto University, 2025)."
      }
    }
  ]
}
```

**BreadcrumbList schema (all non-homepage pages)**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dundir.nl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://dundir.nl/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Post title]",
      "item": "https://dundir.nl/blog/[post-slug]/"
    }
  ]
}
```

---

### Meta Titles and Descriptions per Page

Using the three-variant framework (benefit lead, question hook, social proof / specificity). The recommended variant is marked. All counts are characters.

---

#### Homepage (dundir.nl)

**Title options:**
- V1 (Benefit lead): `Dundir — Auditbestendig inkopen voor de bouwsector` (51 chars) RECOMMENDED
- V2 (Pain point): `Stop met spreadsheets. AI inkooptool voor aannemers` (52 chars)
- V3 (Specificity): `11 uur per week verspild aan inkoop? Dundir lost dat op` (56 chars)

**Meta description options:**
- V1 (Benefit lead): `Dundir vindt de mathematisch optimale leverancierscombinatie voor uw bouwproject en legt elke beslissing auditbestendig vast. Lokale AI, geen clouddata. Ontdek meer.` (165 chars — trim slightly)
  - Trimmed: `Dundir vindt de optimale leverancierscombinatie voor uw bouwproject en legt elke beslissing auditbestendig vast. Lokale AI, geen clouddata. Ontdek meer.` (153 chars) RECOMMENDED
- V2 (Question hook): `Vergelijkt u nog steeds leveranciers in Excel? Dundir vervangt spreadsheets door een deterministisch AI-model dat uw inkoophistorie kent. Vraag een demo aan.` (159 chars)
- V3 (Specificity): `Een Skanska-experiment toonde fouten tot €8.354 per inkooppost bij generieke AI. Dundir is deterministisch, uitlegbaar en auditbestendig. Bekijk hoe het werkt.` (161 chars — trim)
  - Trimmed: `Skanska-onderzoek: generieke AI maakt fouten tot €8.354 per inkooppost. Dundir is deterministisch, uitlegbaar en auditbestendig. Bekijk hoe het werkt.` (151 chars)

**OG description (social):** `Bouwinkoop hoort geen spreadsheet-werk te zijn. Dundir's AI optimaliseert uw leveranciersselectie, legt het auditbestendig vast, en draait op uw eigen server. Geen clouddata.`

---

#### Product page (/product/ or /hoe-het-werkt/)

**Title options:**
- V1 (Benefit lead): `Hoe Dundir werkt — Deterministisch AI voor bouwinkoop` (54 chars) RECOMMENDED
- V2 (Feature lead): `AI leveranciersselectie die zijn rekenwerk toont` (49 chars)
- V3 (Specificity): `Lokaal geinstalleerde AI die uw inkoophistorie kent` (52 chars)

**Meta description options:**
- V1 (Benefit lead): `De Dundir optimizer combineert lineaire optimalisatie met een per-klant gefinetuned AI-model. Elke selectie is volledig gedocumenteerd. Lokale installatie, geen clouddienst.` (173 chars — trim)
  - Trimmed: `Dundir combineert lineaire optimalisatie met een per-klant gefinetuned AI. Elke leveranciersselectie is gedocumenteerd en auditbestendig. Lokale installatie.` (158 chars) RECOMMENDED
- V2 (Question hook): `Hoe weet u zeker dat uw AI-inkooptool de juiste keuze maakt? Dundir toont zijn rekenwerk bij elke aanbeveling. Geschikt voor gemeenten en aannemers.` (149 chars)
- V3 (Specificity): `Dundir verwerkt uw specificaties, uw leveranciersdata en uw gewogen criteria tot een auditbestendig rapport in minuten. Lokaal. Deterministisch. Uitlegbaar.` (156 chars)

---

#### Municipality page (/gemeenten/)

**Title options:**
- V1 (Benefit lead): `Dundir voor Gemeenten — Uitlegbare AI voor aanbestedingen` (57 chars) RECOMMENDED
- V2 (Regulatory): `Aanbestedingswet-conforme AI inkoop voor gemeenten` (50 chars)
- V3 (Pain point): `Geen black-box AI voor gemeentelijke inkoop meer` (49 chars)

**Meta description options:**
- V1 (Benefit lead): `Dundir helpt Nederlandse gemeenten bij inkoop- en aanbestedingsrapportages die voldoen aan de Aanbestedingswet en CPR 2024. Volledig uitlegbare AI, lokale installatie.` (165 chars — trim)
  - Trimmed: `Dundir helpt gemeenten bij inkoop die voldoet aan de Aanbestedingswet en CPR 2024. Volledig uitlegbare AI, lokale installatie, geen clouddata.` (142 chars) RECOMMENDED
- V2 (Question hook): `Kan een gemeente een AI-inkooptool gebruiken die zijn beslissingen niet uitlegt? Nee. Dundir is deterministisch, auditbestendig en lokaal deployed.` (147 chars)
- V3 (Specificity): `342 Nederlandse gemeenten hebben dezelfde documentatieverplichting. Dundir levert auditbestendig inkoopdossier voor elke aanbesteding. Vraag een gesprek aan.` (157 chars)

---

#### Construction companies page (/aannemers/)

**Title options:**
- V1 (Benefit lead): `Dundir voor Aannemers — Slimmere leveranciersselectie` (53 chars) RECOMMENDED
- V2 (Pain point): `Minder tijd aan inkoop, betere leveranciersdossiers` (52 chars)
- V3 (ROI): `€49.500 per jaar verspild aan spreadsheet-inkoop?' (50 chars)

**Meta description options:**
- V1 (Benefit lead): `Dundir optimaliseert leveranciersselectie voor bouwbedrijven van 50 tot 500 medewerkers. Auditbestendig, lokaal deployed, gefinetuned op uw eigen inkoopdata.` (158 chars) RECOMMENDED
- V2 (Question hook): `Hoeveel kost het u als uw beste inkoopmanager morgen vertrekt met alle kennis in zijn hoofd? Dundir legt die kennis vast en optimaliseert uw selecties.` (152 chars)
- V3 (Specificity): `Een inkoopmanager in de bouw verspilt gemiddeld 11 uur per week aan leveranciersvergelijking. Dundir lost dat op en maakt elke beslissing auditbestendig.` (153 chars)

---

#### Procurement pain scan (/inkoop-pijnscan/)

**Title options:**
- V1 (Benefit lead): `Inkoop Pijnscan — Bereken wat slechte inkoop u kost` (51 chars) RECOMMENDED
- V2 (Action): `Wat kost uw inkoopproces echt? Doe de pijnscan` (47 chars)
- V3 (Specificity): `5 vragen. Uw persoonlijke inkooprisicoanalyse.` (47 chars)

**Meta description options:**
- V1 (Benefit lead): `Beantwoord 5 vragen over uw inkoopproces en ontvang een gepersonaliseerde schatting van verspilde tijd en geld. Gratis, geen registratie vereist.` (145 chars) RECOMMENDED
- V2 (Question hook): `Weet u wat uw spreadsheet-inkoop per jaar kost? Vijf vragen, twee minuten, een concreet getal. Doe de Dundir pijnscan.` (118 chars)
- V3 (Specificity): `Gemiddeld €49.500 per inkoopmanager per jaar aan verspilde productiviteit. Is dat herkenbaar? Doe de scan en bereken uw eigen cijfer.` (133 chars)

---

#### About / Team page (/over-ons/)

**Title options:**
- V1 (Credibility lead): `Over Dundir — Het team achter de bouwinkoop-AI` (47 chars) RECOMMENDED
- V2 (Mission): `Dundir — AI voor bouwinkoop gebouwd door domeinexperts` (55 chars)

**Meta description options:**
- V1 (Benefit lead): `Dundir is gebouwd door bouw- en inkoopexperts, niet door een generieke AI-startup. Ontmoet het team en lees waarom we dit probleem aanpakken.` (141 chars) RECOMMENDED
- V2 (Social proof): `Christiaan Verhoef (Windesheim), Dr. Milan Jelisavčić (VU Amsterdam) en Gerard Tunteler (19 jaar HPE Gemeenten) bouwen de inkooptool die de bouwsector mist.` (157 chars)

---

#### Blog index (/blog/)

**Title:** `Blog — Inkoop en AI in de bouwsector | Dundir` (47 chars)

**Meta description:** `Praktisch inzicht over inkoopdigitalisering, aanbestedingswetgeving en AI in de bouw. Geschreven voor inkoopmanagers en gemeentelijk inkopers in Nederland.` (158 chars)

---

## Part 3: Performance and Accessibility

### Core Web Vitals Targets

A static Hugo site on GitHub Pages, served over Cloudflare (recommended as a CDN layer), should achieve the following with proper implementation. These are targets, not defaults — they require deliberate asset management.

| Metric | Google Target | Dundir Target | Notes |
|---|---|---|---|
| LCP | < 2.5s | < 1.5s | Static HTML + CDN; achievable without effort |
| INP | < 200ms | < 100ms | Minimal JavaScript; the scan is the only interactive element |
| CLS | < 0.1 | < 0.05 | Set explicit width/height on all images; use font-display: swap |

**What threatens these targets:**

1. **Hero image weight.** The most common cause of poor LCP on static sites is an unoptimised hero image. Maximum size for the hero: 120KB in WebP. Preload it: `<link rel="preload" as="image" href="/images/hero.webp">` in the `<head>`.

2. **Render-blocking fonts.** If using a custom typeface (recommended for brand credibility), load it via `font-display: swap` and preconnect to the font origin. Self-hosting fonts in Hugo is straightforward and faster than Google Fonts CDN for European users.

3. **The pain scan.** The scan is the highest-JS element on the site. If using Tally or Typeform embed, it will introduce third-party script weight. Use Tally (lighter than Typeform, privacy-friendlier, works without a cookie banner for GDPR if no tracking pixels are added). If building client-side in vanilla JS, keep the script under 20KB minified and defer it.

4. **CLS from late-loading images.** Every `<img>` must have explicit `width` and `height` attributes. Hugo's image processing pipeline (`resources.Get` + `.Resize`) can inject these automatically.

**GitHub Pages CDN note:** GitHub Pages uses Fastly as its CDN. This provides reasonable global performance. For Netherlands-specific performance (the target audience), adding Cloudflare in front (free tier, DNS proxying only) gives you edge caching at Amsterdam PoP, which is optimal for Dutch visitors. This is a 5-minute DNS change, not a migration.

---

### Accessibility: WCAG 2.1 AA

This is not optional. Dutch municipalities are legally required to comply with the Web Content Accessibility Guidelines (WCAG 2.1 AA) under the Tijdelijk besluit digitale toegankelijkheid overheid (Besluit 2018, updated 2022). Any vendor site they evaluate will be scrutinised for accessibility signals — a site with obvious accessibility failures sends the wrong signal to the exact audience being targeted.

**Required from day one:**

**Colour contrast**
- Body text on background: minimum 4.5:1 contrast ratio (WCAG AA)
- Large text (18px+ regular, 14px+ bold): minimum 3:1
- Interactive elements (buttons, form fields): minimum 3:1 for non-text contrast
- Tool for checking: https://webaim.org/resources/contrastchecker/
- Practical implication: The standard Dutch government blue (#007BC7) on white achieves 4.5:1 exactly. Any darker brand blue will be fine. Light grey text on white (#767676 on white is the AA boundary) fails for body copy.

**Keyboard navigation**
- Every interactive element (navigation, buttons, form fields, the pain scan) must be reachable and operable via keyboard alone
- Tab order must follow visual reading order
- Focus indicators must be visible — do not suppress the browser default outline without replacing it with a custom visible focus style
- The pain scan is the highest-risk element for keyboard accessibility — test it explicitly

**Images**
- Every `<img>` must have an `alt` attribute
- Decorative images (background, dividers): `alt=""`
- Informative images (charts, product screenshots): descriptive alt text that conveys the information the image conveys
- Never use "image of..." or "photo of..." as alt text prefix — screen readers already announce the image type

**Semantic HTML structure**
- One `<h1>` per page, matching the page's primary topic
- Heading hierarchy must not skip levels (no jumping from H2 to H4)
- Navigation in `<nav>` element with an `aria-label` if multiple nav elements exist
- Main content in `<main>`
- Footer in `<footer>`
- Form fields must have associated `<label>` elements — not placeholder text as a substitute for labels

**Language declaration**
- `<html lang="nl">` for Dutch pages
- `<html lang="en">` for English pages
- This is required for screen readers to use the correct pronunciation and language rules

**ARIA**
- Do not add ARIA unless HTML semantics are insufficient. Incorrect ARIA is worse than no ARIA.
- The pain scan multi-step form should use `aria-live` regions to announce step changes to screen reader users
- Error messages in the scan form must be programmatically associated with the field that triggered them: `aria-describedby`

**Motion and animation**
- Respect `prefers-reduced-motion` media query for any CSS or JS animations
- Autoplay of any media is prohibited under WCAG 2.1 AA

**Forms (the pain scan specifically)**
- Every question/input needs a visible label
- Required fields must be indicated both visually and programmatically (`aria-required="true"` or `required` attribute)
- Error messages must identify which field has an error and describe how to fix it
- The submit button must have a descriptive label, not just "Submit"

**Accessibility statement**
Dutch accessibility law (Besluit digitale toegankelijkheid) requires public sector bodies to publish an accessibility statement (toegankelijkheidsverklaring) for their own sites. Dundir is a vendor, not a public body, so this is not legally required. However, publishing a voluntary accessibility statement (even a brief one on the contact or over-ons page) is a credibility signal when the audience includes municipalities who take this seriously.

---

### Image and Asset Optimisation

**Image format strategy:**
- WebP for all photographs and complex images — 25-35% smaller than JPEG at equivalent quality
- SVG for logos, icons, and illustrations — resolution-independent, tiny file size
- No PNG for photographs (always larger than WebP for equivalent quality)
- No GIF for anything (use CSS animation or a lightweight video file if motion is needed)

**Hugo's built-in image processing** (use this):
```go
{{ $image := resources.Get "images/hero.jpg" }}
{{ $webp := $image.Resize "1200x WebP" }}
<img src="{{ $webp.RelPermalink }}" width="{{ $webp.Width }}" height="{{ $webp.Height }}" alt="..." loading="eager" fetchpriority="high">
```

For below-fold images, use `loading="lazy"` instead of `loading="eager"`.

**File size targets:**
- Hero / above-fold image: maximum 120KB
- In-content images: maximum 80KB
- Thumbnails / team photos: maximum 40KB
- Any single image exceeding 200KB is a performance failure — flag and fix before publishing

**Font strategy:**
- Use system font stack as the base body font: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- For headings, a single custom typeface (e.g. Inter or DM Sans) self-hosted as WOFF2 adds approximately 15-25KB — acceptable
- Never load more than one custom typeface family at weights that are not used on the page
- Preload the primary font file: `<link rel="preload" href="/fonts/inter-bold.woff2" as="font" type="font/woff2" crossorigin>`

**JavaScript budget:**
- Total JavaScript on the homepage: target under 30KB minified and gzipped
- The pain scan page can carry more (40-60KB) given the interactive requirement
- Zero JavaScript on the blog post pages — static content should be purely HTML and CSS
- No analytics JavaScript that blocks rendering — use Plausible or Fathom (both privacy-first, GDPR-compliant without a cookie banner, Dutch data processing agreements available) loaded asynchronously

---

## Implementation Sequence

When setting up the Hugo site, work in this order to avoid rework:

1. Repository structure and GitHub Actions workflow for Hugo build/deploy
2. Decap CMS configuration (so content editors can work independently from day one)
3. Base template with: canonical tags, OG tags, schema partials, hreflang partials, font preloads
4. `robots.txt` and sitemap configuration
5. Core pages (homepage, product, gemeente, aannemers, over-ons, scan) in Dutch
6. Accessibility pass on all interactive elements before first public URL is shared
7. Google Search Console and Bing Webmaster Tools verification (file-based verification works with Hugo)
8. Submit sitemap
9. English `/en/` section (post-launch, not blocking)
10. Blog content (first post: the Skanska/Hamppi research summary)

---

## Notes for Other Planning Agents

- The **scan agent** (03) should be aware that the pain scan page (`/inkoop-pijnscan/`) must have `noindex` on the thank-you confirmation page only, not on the scan entry page. The scan entry page should be indexed — it is a high-intent landing page.
- The **copy agent** (04) can use the meta title and description variants in this document as the authoritative SEO copy — do not write competing versions without consulting this document.
- The **structure agent** (02) should note that the URL slug convention is Dutch: `/gemeenten/`, `/aannemers/`, `/over-ons/`, `/inkoop-pijnscan/`, `/blog/`. No English slugs on Dutch-primary pages.
- The **journey agent** (01) should note that the blog posts mapped to bowtie stages in the Content SEO section of this document are the primary organic entry points for the Awareness and Education stages.

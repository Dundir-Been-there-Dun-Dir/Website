# Website Planning Index
> 5 planning documents complete | Last updated: 2026-05-14
> Methodology: Winning by Design Bowtie | Audience: Dutch construction procurement managers

Read this index first in any working session. Open individual planning files only when you need the full detail.

---

## What was decided

### Stack: Hugo + Decap CMS on GitHub Pages
Hugo wins on multilingual support (Dutch primary, English at `/en/`), build speed, and templating. Decap CMS gives Kirsten and Gerard a web-based editor — no GitHub access or local builds needed for content updates. Deployed via GitHub Actions. DNS through Cloudflare (Amsterdam PoP for Dutch visitor performance). Analytics via Plausible or Fathom — GDPR-compliant, no cookie banner required.

See: [05-seo-and-tech.md](05-seo-and-tech.md)

### Language: Dutch primary
The primary buyer searches in Dutch. Dutch-language pages targeting `aanbestedingswet`, `CPR 2024`, and `AI inkooptool bouw` face almost no established competition. English at `/en/` serves investors, EU visitors, and international research citations.

### Pages at launch: 6 (blog held)
| Page | URL | WbD Stage |
|---|---|---|
| Homepage | `/` | Awareness → Education |
| Het probleem | `/het-probleem/` | Education |
| Hoe het werkt | `/hoe-het-werkt/` | Education → Selection |
| Over ons | `/over-ons/` | Selection |
| Inkoopscan | `/scan/` | Selection transition |
| Inzichten (blog) | `/inzichten/` | Awareness → Education |

**The blog does not launch until 3 substantive articles are ready.** An empty blog damages credibility with this audience more than no blog at all. The first article to write: a Dutch-language summary of the Skanska/Hamppi 2025 experiment — the €8,354 error finding has zero Dutch-language coverage and directly supports the homepage hook.

Navigation (Dutch): **Het probleem | Hoe het werkt | Over ons | [Doe de scan]** — the scan is a persistent button, not a text link.

See: [02-site-structure.md](02-site-structure.md)

### Primary CTA: The Inkoopscan
A 6-question procurement pain scan built in custom client-side JavaScript (one HTML + CSS + JS file, no framework). Formspree handles form submission delivery to `chris@tonomy.foundation`. Tally was evaluated and rejected — it cannot display a live calculated euro figure on the results page.

**The 6 questions (SPICED-mapped):**
1. Procurement team size (card select)
2. Current tools — spreadsheet, ERP, email, combination (card select)
3. Where time is lost — up to 3 selections (multi-select)
4. Hours per week on manual admin (slider, default 8)
5. What is creating urgency right now — regulatory deadline, audit risk, staff leaving, etc. (single select)
6. Visitor role — procurement manager, director, IT, consultant (single select)

**Output calculation:** `€65/hour × Q4_hours × 46 weeks × Q1_team_multiplier` — displayed as a personalised annual euro figure with a breakdown table. Contact capture (name + email) comes after the result is shown, not before. The Skanska €8,354 finding anchors the result in independent research.

**CTA after results:** "Plan een gesprek" — not "Request a demo." Copy: "Geen slides. Geen demo totdat het zinvol is. Gewoon 30 minuten over uw proces."

Every question maps to a specific BMC assumption for customer discovery tracking.

See: [03-procurement-scan.md](03-procurement-scan.md)

### Visitor journey (WbD Bowtie)
Two SPICED profiles drive all design decisions:

**Segment A — Construction company:** The 45-55 year old inkoopleider at a 50-200 person aannemer. His institutional knowledge is walking out the door when colleagues retire. CPR 2024 (January 2026) is the critical event — certification requirements for structural products are now legally binding. He searches in Dutch. He is skeptical of technology. He responds to evidence, not enthusiasm.

**Segment B — Municipality:** The inkoopadviseur or contractmanager at a gemeente. Every decision must be auditable. The Aanbestedingswet requires documented, consistent, defensible evaluation. An ACM enforcement challenge is the nightmare scenario. Gerard Tunteler's 19-year HPE municipality network is the single strongest trust signal for this segment — it belongs on the team page as a conversion element, not a bio.

**The scan is the Stage 2→3 bridge** — Dutch procurement professionals will not book a vendor demo before forming an internal view. The scan is self-service, produces immediate personalised value, and creates the opening for a follow-up. It is not a lead form with extra steps.

See: [01-wbd-bowtie-journey.md](01-wbd-bowtie-journey.md)

### Copy: sharp, Dutch, evidence-anchored
**Recommended hero headline (cold traffic):** Loss aversion via the concrete reference point. The copy agent produced 5 variants with psychological mechanism analysis — see the full file for all options.

**The strongest proof point on the site:** The Skanska/Hamppi 2025 finding — a generic enterprise AI tool gave different numerical outputs for identical procurement inputs, with errors up to €8,354 on a single line. This is sourced, practitioner-documented, and makes the deterministic architecture argument without requiring the visitor to trust a vendor claim. It belongs in the hero section, the Education page, and the Hoe het werkt page.

**What NOT to say:** transform, unlock, future-proof, cutting-edge, AI that learns, harness the power, fully automated, eliminates errors, market leader. Any of these will immediately signal to a Dutch procurement professional that this was written by someone who has never been in a procurement meeting.

**CTA copy principle throughout:** Autonomy-preserving language. Dutch procurement managers are trained evaluators. "Bereken mijn inkoopkosten" and "een gesprek als het zinvol is" are the anchors. No urgency pressure.

See: [04-copy-strategy.md](04-copy-strategy.md)

### SEO: Dutch-first, regulatory keywords
**Tier 1 (homepage/core):** `AI inkooptool bouw`, `inkoop automatisering bouwsector`, `aanbestedingsrapportage software gemeente`, `AI inkoop gemeente aanbestedingswet`

**First content to publish:** Dutch-language summary of the Skanska/Hamppi 2025 experiment. No Dutch-language coverage exists. High-intent audience. Directly supports the homepage hook. Citable internationally.

**Schema:** Organization (site-wide), SoftwareApplication (homepage + product page), FAQPage in Dutch using Aanbestedingswet and Skanska research as anchors, BreadcrumbList on all non-homepage pages.

**WCAG 2.1 AA is non-negotiable.** Municipality clients are legally bound to it and will notice failures on vendor sites. The pain scan form is the highest-risk element — requires keyboard navigation testing, aria-live announcements for step changes, and programmatically associated error messages.

**Performance targets:** LCP under 1.5s, CLS under 0.05. Hero image capped at 120KB WebP.

See: [05-seo-and-tech.md](05-seo-and-tech.md)

---

## Domains

- **Primary:** `dundir.nl` — confirmed, already owned. Dutch ccTLD is the right primary domain for Dutch search rankings and municipality credibility. Hugo base URL: `https://dundir.nl`
- **Secondary:** `dundir.com` — for international/investor-facing use and to prevent squatting. Redirect `dundir.com` → `dundir.nl` via Cloudflare (301 redirect at DNS level, no separate site needed).
- **GitHub Pages interim:** runs on `dundir-been-there-dun-dir.github.io` until DNS is pointed. Configure the custom domain in GitHub Pages settings before launch — GitHub will provision the HTTPS certificate automatically via Let's Encrypt.
- **Cloudflare:** set `dundir.nl` nameservers to Cloudflare. Amsterdam PoP gives Dutch visitors sub-100ms DNS resolution. Enable proxying (orange cloud) for performance and DDoS protection.

---

## Build sequence (recommended order)

1. Set up Hugo project with Decap CMS and GitHub Actions deploy workflow — configure `baseURL = "https://dundir.nl"`
2. Build the homepage and Het probleem page (these validate the core message before anything else)
3. Build and test the Inkoopscan (custom JS, Formspree integration, live calculation, WCAG testing)
4. Build Hoe het werkt and Over ons
5. Write and publish the first Inzichten article (Skanska/Hamppi Dutch summary) before launching the blog page
6. Configure Cloudflare DNS, Plausible analytics, schema markup — point dundir.nl to GitHub Pages, set dundir.com redirect
7. WCAG 2.1 AA audit before any municipality outreach
8. Go live on dundir.nl

---

## Open questions for the team before build starts

- ~~**Domain name confirmed?**~~ ✅ dundir.nl (owned), dundir.com (acquire)
- **Formspree or alternative?** Formspree free tier is 50 submissions/month — sufficient for MVP but confirm before launch.
- **Dutch copy review by a native speaker?** Christiaan is near-native but a native Dutch procurement professional should review the scan questions and core page copy before launch. Nina cannot do this (Serbian); Gerard can.
- **Photography?** The Over ons page needs real team photos. Stock photos of construction sites are explicitly ruled out by the copy strategy. Prioritise this early — it has a long lead time.

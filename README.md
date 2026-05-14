# Dundir Website

Marketing website for [dundir.nl](https://dundir.nl) — a locally-deployed procurement decision system for Dutch construction companies and municipalities.

## Why it's built this way

### Hugo (static site generator)
The site has no user accounts, no dynamic content, and no backend. Hugo compiles all pages to plain HTML/CSS at build time. This means:
- Zero runtime cost (GitHub Pages hosting is free)
- No attack surface (no server-side code to exploit)
- Sub-100ms page loads (no JS frameworks, no hydration)
- Every page is a file — easy to audit, easy to test

### Custom layouts, no theme
We wrote every template from scratch rather than using a Hugo theme. This keeps the CSS naming predictable, allows the CI tests to assert on specific page structure, and means the design is entirely controlled. Themes bring hundreds of unused classes and hidden assumptions.

### GitHub Actions CI gate
The deploy pipeline has two jobs: `build-and-test` runs 8 automated checks, then `deploy` only runs if all checks pass. If a commit breaks a test, GitHub Pages keeps the last successful version live. No rollback needed — a failed deploy is simply a no-op.

The 8 tests check: required pages exist, CSS was generated, minimum HTML count, no em-dashes, no forbidden marketing phrases, meta descriptions on all pages, internal links resolve, sitemap generated.

### relURL throughout templates
The site is currently hosted at a GitHub Pages subdirectory (`/Website/`) as an interim URL while the custom domain is being configured. All internal links use Hugo's `relURL` function so they work correctly regardless of whether the site is at the root or in a subdirectory.

### Formbricks for the procurement scan
The scan page embeds a self-hosted Formbricks survey via their JS SDK. Formbricks is configured in `hugo.toml` under `[params.formbricks]`. The embed falls back gracefully if the survey is not yet configured (shows a placeholder). This keeps the survey data under our control and GDPR-compliant without a separate backend.

### Dutch-first, citation-backed copy
All copy is in Dutch. Every statistic has an inline source citation. The CI pipeline enforces a list of forbidden marketing phrases (transformeer, seamless, naadloos, etc.) and bans em-dashes from all HTML output. This is enforced in CI — a violation blocks the deploy.

---

## Task list

### Done
- [x] Hugo project structure: layouts, assets, content, static
- [x] GitHub Actions pipeline: build → 8 tests → deploy
- [x] Homepage with stats strip, segment cards, team strip
- [x] Het probleem page with proof blocks and regulatory section
- [x] Hoe het werkt page with step list and implementation section
- [x] Over ons page with full team bios and institutional anchors
- [x] Inkoopscan page with Formbricks embed skeleton
- [x] Dark footer with nav, research partners, copyright
- [x] Formbricks partial (loads SDK, shows placeholder when not configured)
- [x] CI test gate: deploys only if all tests pass, keeps last good version otherwise
- [x] Dark navy homepage hero, full-blue scan CTA sections, section heading accents
- [x] Internal links fixed with relURL (works at subdirectory and root)

### In progress
- [ ] Configure Formbricks: update `hugo.toml` with real serverUrl, environmentId, surveyId

### Pending
- [ ] Switch baseURL from interim GitHub Pages URL to `https://dundir.nl/`
- [ ] Point dundir.nl DNS to GitHub Pages: add 4 A records + 4 AAAA records in Cloudflare, set custom domain in GitHub Pages settings
- [ ] Gerard to review Dutch copy (native speaker check before launch)
- [ ] First Inzichten article: Dutch summary of Hamppi/Skanska 2025 paper
- [ ] Team photos: real headshots for Over ons page
- [ ] Privacy policy page (`/privacy/`) — currently skipped in link checker

### DNS records for GitHub Pages (for when dundir.nl is ready)
A records pointing to:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

AAAA records pointing to:
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

After DNS propagates: set custom domain in GitHub Pages settings, GitHub handles HTTPS via Let's Encrypt automatically.

---

## Local development

```bash
hugo server --buildDrafts
```

Requires Hugo extended (for the CSS asset pipeline). Install via:

```bash
# macOS
brew install hugo

# Linux
snap install hugo --channel=extended
```

The site runs at `http://localhost:1313/Website/` (subdirectory matches the interim baseURL).

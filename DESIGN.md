# Dundir design direction

House rule for this file and every file it governs: no em-dashes, anywhere. The CI
build fails on them and the copy strategy forbids them.

## Subject

Dundir sells a locally deployed procurement decision system for construction firms
and Dutch municipalities. A linear optimizer plus an evolutionary search reads a
specification, respects the hard constraints (certification, delivery window,
budget), weighs the soft ones (price, reliability, sustainability) and returns the
mathematically optimal supplier combination together with an audit-ready report.
The language model writes the report. The optimizer makes the decision.

One more thing is true and the site now says it out loud: **the product is not
finished**. Dundir is a research track with a company around it. The site therefore
sells partnership, not licences.

## Audience and job

A 55 year old Dutch procurement director, often on a phone, on a site, between
meetings. They already know the problem. They are not looking to be educated about
AI; they are looking for a reason to believe a supplier decision made by software
will survive an audit.

Secondary: municipality procurement and IT, who need the legal defensibility
argument before they need the time saving argument.

The page's job: make the cost visible, make the determinism credible, and route the
visitor to whichever of the four ways in fits them.

## Direction: massa

Seventy percent of a construction project is material. That is the one number the
whole business rests on, so the page is built to carry that weight.

- Display type is set **very large and very wide**, edge to edge, with almost no
  chrome around it. The headline is the loudest object on every page.
- Grounds are sampled from the site, not from software: bitumen, concrete, chalk.
- One accent, **menie**, the red lead primer that goes on Dutch steel before
  anything else. It is the only colour in the system that is allowed to mean
  something.
- Sections are **bands**, cut by a hairline, with no card shadows anywhere.

This replaced two earlier attempts. The first was a generic SaaS pattern. The
second was a tender-document pattern, warm paper with a serif and a ledger rail,
which read as competent but landed on a well worn look rather than a chosen one.

### What this deliberately avoids

- Stock photography of handshakes, hard hats or glass towers.
- A blue gradient hero, or blue as a brand wash of any kind.
- Rounded corner cards on a grey background.
- Any claim without a source line under it.
- Any claim the research does not actually support. Where the evidence stops, the
  page says so in a caveat block.

## Tokens

### Colour

| token | hex | role |
|---|---|---|
| `--bitumen` | `#17181A` | the page. Hero, dark bands, header, footer |
| `--zinc` | `#212325` | raised surface, hover state |
| `--zinc-2` | `#33363A` | hairlines and grid gaps on dark |
| `--chalk` | `#EFEEE9` | the light band |
| `--chalk-2` | `#E4E2DC` | tint band, separation without inversion |
| `--concrete` | `#B0AEA6` | body text on dark, 8.0:1 |
| `--concrete-dim` | `#8E8D86` | mono labels and sources on dark, 5.3:1 |
| `--ink` | `#17181A` | text on chalk, 15.5:1 |
| `--ink-soft` | `#4A4945` | secondary prose on chalk |
| `--ink-quiet` | `#6B6A64` | sources and labels on chalk, 4.6:1 |
| `--rule-lt` | `#CFCCC4` | hairlines on chalk |
| `--menie` | `#C1440E` | the accent |
| `--menie-lt` | `#E4682E` | the accent's light step |
| `--menie-wash` | `#F7E5DC` | caveat panel ground on chalk |
| `--mark-region` | `#C1440E` | the mark's feasible region |
| `--mark-dot` | `#FFFFFF` | the mark's optimum |

**Accent discipline, worked per surface rather than per component.** This is the
one rule in the system that is absolute:

- menie on chalk is **4.7:1**, so on a light band it may be text.
- menie on bitumen is **3.5:1**, so on a dark band it may only be a fill, a rule,
  or display sized type. Never small text.
- `--menie-lt` on bitumen is **5.3:1**, so every small label on dark uses that step.

Nothing else in the system carries the accent. If a component wants colour, the
answer is a hairline or a change of ground.

The mark is a feasible region filled in menie with the optimum as a white dot on
one of its vertices. Two colours, both dominant on the site, so one mark holds on
bitumen and on chalk without a second variant.

### Type

The site ships Dutch, English and Serbian in Latin script, so `č ć š ž đ` must be
native, not synthesised. All three faces are self-hosted woff2 in `static/fonts/`,
subset to latin and latin-ext. No Google Fonts request: Dutch municipalities are a
target segment and a third party font call is a question we do not need to answer
in a procurement review.

- **Display: Anybody.** Variable width axis, set at `wdth 118` for headings and
  `wdth 135` for the wordmark. Its extreme widths are the whole point: nothing else
  on the page needs to be loud, because the headline already is.
- **Body: Chivo.** A grotesque with enough warmth to read at length and enough
  structure to sit under Anybody without arguing with it.
- **Data: Space Mono.** Numbers, section labels, sources, buttons. Tabular figures
  on, because these are measurements and they align in a column.

Long Dutch compounds break lines badly at display size, so headings carry
`hyphens: auto` and the page hero is capped at `20ch`. A figure that is a word
rather than a number takes `.claim__fig--word` and drops to label size, because a
long word at display size reads as a headline and steals the band.

### Layout

Twelve columns, content in a `4fr / 8fr` split with the argument on the left and
the evidence on the right. Under 860px the split collapses and the rail runs above.
Band padding is `clamp(3.5rem, 8vw, 7rem)`. Measure capped at 62 characters.

Dark is the default ground. Chalk is spent on the sections that need to feel like a
document: the mechanism, the honesty about the stage, the team.

### Signature: the cost stack

The hero holds no photograph and no gradient. It holds one euro of project cost,
divided: 70 percent material in menie, 18 percent labour in concrete, 12 percent
other in zinc, labelled in mono, sourced under the bar. The material block carries
the line "hier rekent Dundir".

It is the argument and the diagram at the same time, it costs no JavaScript, and it
is the one object on the site that a reader will still remember in a week.

### Motion

- Bands rise 10px and fade in on first view, staggered by 60ms.
- Nothing else moves. No parallax, no scroll-jacking, no carousel.
- All of it is disabled under `prefers-reduced-motion`, and the reveal class is
  added by script, so with JavaScript off nothing is ever hidden.

## Components

| component | role |
|---|---|
| `band` | full width section, `band--chalk`, `band--chalk-2`, `band--zinc` |
| `stack` | the cost bar. Home page only, once |
| `claim` | a figure with its statement and source |
| `proof` | one large figure with a rule beside it, once per page at most |
| `caveat` | what the research does not prove. Used wherever a claim needs a limit |
| `step` | numbered sequence, only where order actually carries information |
| `person` | name, role, credential line, no photograph |
| `chip` | regulation label, a dot when the obligation is live |
| `card` | deck or event |
| `door` | one of the four ways in |

## Architecture

**One layout per page, one content file per language.** Structure lives in
`layouts/`, copy lives in `content/` and `i18n/`. There are no per-language
templates: a page describes itself in front matter and `partials/band.html`
renders it. Adding a language is a content file and an `i18n/<lang>.toml`, not a
copy of nine templates.

- `i18n/<lang>.toml` holds the chrome: navigation, footer, form labels, the four
  doors, and the `url_*` route fragments so a slug change is one edit.
- `data/scan/<lang>.json` holds the scan question set, so the scan template is one
  loop and a translator never opens a Go template.
- `partials/band.html` is the only place that knows what a section looks like.

## The four ways in

The site closes every page on four doors rather than one call to action, because
Dundir needs four different things and a single "buy" button would be dishonest
about all of them: research partner, pilot as design partner, the procurement scan,
and a thirty minute conversation. The lead door is deliberately soft worded so it
stays true whichever grant round happens to be open.

## The scan

Ten questions shaped on SPICED, seven of them scored. It runs entirely in the
browser: the score, the euro figure computed from the visitor's own buyer count and
hours, and up to four findings each carrying its source. Nothing is transmitted
unless the visitor asks for a copy afterwards.

This replaced a Formbricks embed that served an English usability questionnaire
titled "UC8 Survey" on the Dutch page, and promised a report by email while the
copy around it promised a report on screen with no email required.

## Accessibility and performance

- AA contrast on every text pairing, verified per token pair, not per component.
- Focus rings are `--menie-lt` at 2px with 3px offset, visible on both grounds.
- Body copy 17px minimum, 1.62 line height.
- Fonts self-hosted, `font-display: swap`, subset to the three languages.
- One stylesheet, one 2 kB site script, one 3 kB scan script. No framework.

## Known issues

- The chat widget embeds an OpenRouter API key in client side JavaScript, where
  any visitor can read it. It also posts visitor messages to a service outside the
  EU, which sits badly next to the data sovereignty argument the site makes. Both
  are flagged in the privacy policy; neither is fixed.

## Build note

The site must be built with Hugo 0.147.3 extended or newer, the version CI uses.
On 0.139 the section templates are not picked up and inner pages render empty,
which is easy to miss because the pages still return 200.

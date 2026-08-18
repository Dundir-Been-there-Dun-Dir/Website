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

Three things follow from that and they drive every choice below:

1. The product is **deterministic**. It is the opposite of a chatbot that produces
   a different number each time you ask. The site must feel calculated, not generated.
2. The output is **a document**. An auditor, an ACM reviewer or a procurement board
   reads it. The site should read like the first page of that document.
3. The domain is **construction**. Not fintech, not SaaS. Concrete, site vests,
   drawings, tender folders.

## Audience and job

A 55 year old Dutch procurement director, often on a phone, on a site, between
meetings. They already know the problem. They are not looking to be educated about
AI; they are looking for a reason to believe a supplier decision made by software
will survive an audit.

Secondary: municipality procurement and IT, who need the legal defensibility
argument before they need the time saving argument.

The page's job: make the cost visible, make the determinism credible, move the
visitor to the scan. Everything else is subordinate to those three.

## Direction: the page is a decision under constraint

The visual vernacular of this business is the **feasible region**. An optimizer does
not produce an opinion; it removes everything that violates a constraint and returns
what is left standing at the optimum. The site is built the same way.

- Sections do not float as cards on a background. They are **bands** that are cut by
  a hairline and stamped, the way a drawing sheet or a tender document is.
- Every band carries a **ledger stamp** in the left rail: an index, a short label,
  and where relevant the source of the number in the band. The rail is the site's
  audit trail. Audit-readiness is what the product sells, so the site itself keeps a
  visible audit trail of its own claims.
- The one moving element on the site is the optimizer converging. Nothing else moves
  except an 8px rise on scroll.

This replaces the previous design's generic SaaS pattern (white page, blue accent,
rounded card grid, system font). That pattern says "we are a startup". This one says
"we compute the answer and we can show our working".

## Tokens

### Colour, drawn from the site and the paperwork

Version 2. The first palette put every cool element on a blue shifted ground: the
dark band was #171D23, its links #5FB0CE, the figure grid #232B33, the figure points
#5FB0CE. Text contrast passed AA everywhere, so the problem was never legibility. It
was that hue never changed. ColorBrewer's split is that qualitative sets separate by
hue and sequential ones by lightness; that palette did neither.

The correction: the grounds go warm neutral, so a cool colour on top reads as a
category rather than a shade of the ground, and the cool colour is confined to the
figure where it means something.

| token | hex | source |
|---|---|---|
| `--pour` | `#191817` | warm near black. Header, hero, closing call |
| `--formwork` | `#221F1D` | the dark band, and the figure's ground |
| `--paper` | `#F1EDE4` | tender document stock. The page |
| `--paper-2` | `#E7E2D6` | tint band. Separation without inversion |
| `--ink` | `#16181A` | body text on paper, 15.2:1 |
| `--ink-soft` | `#4A4844` | secondary prose |
| `--steel-ink` | `#5C5A56` | sources and stamps on paper, 5.9:1 |
| `--steel` | `#8E8B85` | the same role on the dark surfaces |
| `--rule` / `--rule-inv` | `#DAD4C7` / `#38352F` | hairlines |
| `--accent` | `#FFC400` | amber. Fills, rules, dots, the optimum |
| `--accent-deep` | `#E0A800` | the hover step |
| `--accent-paper` | `#7A5E00` | the olive step, small mono labels only |
| `--mark-line` | `#5FB0CE` | the mark's region, `#26647F` on paper |
| `--figure-live` | `#6FA8C8` | candidate combinations, figure only |
| `--figure-cut` | `#B4442F` | constraint lines, figure only |

Amber was trialled against audit teal `#0F6E63` and signal orange `#C8481B`, both of
which can carry text on paper where amber cannot. Amber won on the mark and the hero.
The cost of that choice is a rule that is now absolute:

**Amber is a fill, a rule, a dot or a vertex. It is never text on paper.** At 1.39:1
it cannot be. Display numbers on paper are therefore set in ink; the olive step is for
small mono labels only, because at 2.4rem it reads muddy next to black serif. On the
dark surfaces the constraint lifts and amber is text at 11.1:1.

The mark is the one place a cool colour appears outside the figure: the region is
blueprint, the vertex is amber. It predates the rest of the system and it is the
reason the figure's data colour is blue in the first place.

### Type, constrained by three languages

The site ships Dutch, English and Serbian in Latin script, so `č ć š ž đ` must be
native, not synthesised. That eliminated most display faces at the shortlist stage.

- **Display: Archivo.** Variable, grotesque, drawn from American gothic signage.
  Its width axis lets headlines be set wide and tight without a second family.
  Latin Extended A covers Serbian Latin in full.
- **Body: Source Serif 4.** The report voice. A serif at 18px is what a procurement
  director reads all day in a tender document, and it separates this site from every
  competitor running Inter on white.
- **Ledger: JetBrains Mono.** Numbers, section stamps, sources, constraint labels,
  the hero readout. Tabular figures on, ligatures off, because these are measurements
  and they must align in a column.

All three are **self-hosted woff2** in `static/fonts/`. No Google Fonts CDN request.
Dutch municipalities are a target segment and a third party font request is a GDPR
question we do not need to answer in a procurement review.

### Scale

Type scale is a fifth (1.5) at the display end and a fourth (1.25) in body copy, so
headlines separate hard from prose while prose stays quiet. Numbers in stats are set
in mono at display size, because a number is data, not a headline.

### Layout

Asymmetric, 12 columns, content offset to the right of a fixed ledger rail of 88px
from 1080px up. Under 1080px the rail collapses and its stamps run inline above each
section as a single mono line, so nothing is lost on the phone the director actually
uses.

Band rhythm, version 2. The first pass inverted the ground at almost every section,
which read as a stack of blocks rather than a document. dhaidas holds one continuous
light surface and lets hairlines, a small mono label and a lot of space do the
separating. Dundir now does the same:

- **dark** is spent only on the hero and the closing scan call, where the argument
  starts and ends.
- **everything between** is paper, with `--paper-2` tint bands for separation.
- band padding is `clamp(4.25rem, 8.5vw, 8rem)`, up about a third from the first pass,
  because the space is what carries the rhythm once the inversions are gone.

Nothing is centred except the hero statement and the closing call to action.

### Signature: the optimizer converging

The hero holds no photograph and no abstract mesh gradient. It holds the actual
mechanism: a scatter of candidate supplier combinations plotted on price against
lead time. Constraint lines sweep in one by one, each labelled in mono
(`certificering`, `levertijd`, `budget`). Candidates that violate a constraint go
grey and drop back. The feasible region draws itself as a thin polygon, and the
optimum lands on one vertex in hivis with its value printed beside it.

Then it resets with a different population and finds the same vertex. That repetition
is the entire product claim: same inputs, same answer, every time. A generic AI tool
would land somewhere different on each pass, which is precisely the Skanska finding
the site cites two sections further down.

`assets/js/hero-optimizer.js`, canvas 2D, no library, no WebGL, about 6 kB.
Rules it keeps:

- Nothing is allocated inside the frame loop.
- 30fps is enough for a sweep this slow and costs a third less than 60.
- Under 760px the population halves and the labels drop to two.
- Paused when off screen or the tab is hidden.
- `prefers-reduced-motion` draws the final converged frame once, with the region,
  the optimum and the labels all in place, and never starts the loop. The static
  frame has to carry the whole idea on its own.

### Second motif: the constraint chip

Regulation is the urgency in the pitch, so regulation gets a component. `CPR
2024/3110`, `Aanbestedingswet`, `CSRD Scope 3` are set as mono chips with a hairline
box and a dot in `--hivis` when the deadline is already live, `--steel` when it is
pending. They appear on the problem page and in the closing band of the homepage.

### Motion

- Sections rise 8px and fade in on first view, staggered by 60ms.
- Stat figures count up once, over 700ms, only if they are on screen and only once.
- No parallax. No scroll-jacking. No carousel.
- Every one of the above is disabled under `prefers-reduced-motion`.

## Components

| component | role |
|---|---|
| `ledger-rail` | fixed left column of section stamps; the audit trail |
| `band` | full width section, `band--dark` or `band--paper` |
| `stat-row` | hairline separated rows of mono figure, label, source |
| `proof` | one large number with its claim and citation, dark band only |
| `chip` | regulation or constraint label |
| `segment` | the two buyer types, side by side, no card chrome |
| `step` | numbered mechanism steps on the how it works page |
| `person` | team member: name, role, credential line, no photograph |
| `deck` | presentation links |
| `cta` | the scan call, closing every page |

No card shadows anywhere. Separation is done with hairlines and background bands,
which is how a printed document separates things.

## What this deliberately avoids

- Stock photography of handshakes, hard hats or glass towers.
- A blue gradient hero.
- Rounded corner cards on a grey background.
- Any claim without a source line under it.
- The word "transformeer" and the rest of the forbidden list in CI.

## Accessibility and performance

- AA contrast on every text pairing, verified per token pair, not per component.
- Focus rings are `--hivis` at 3px offset, visible on both band types.
- Body copy 18px minimum, 1.7 line height, measure capped at 68 characters.
- Fonts self-hosted, `font-display: swap`, subset to the three languages.
- Total CSS under 30 kB minified, one file. One 6 kB script. No framework.
- Every image has dimensions set so nothing shifts on load.

## The decks carry the same system

The presentations under `/presentaties/decks/` are Quarto revealjs exports, generated
outside this repo. They are not re-authored here; they are re-themed on top:

- `static/presentaties/deck-theme.css` is injected last into every deck's
  `index.html` and redefines the reveal variables: Archivo headings, Source Serif
  body, JetBrains Mono for metadata, paper background, ink text.
- The old palette is remapped in place: `#0d2b7a` becomes `--pour`, `#1b4fd8`
  becomes `--blueprint-ink`, the blue tints become paper tones. The greens in a few
  decks are left alone; they carry a positive or negative reading that the site
  palette has no substitute for.
- The slide title takes the one hivis rule under it, the same accent discipline as
  the site. Callout boxes become the deck version of the site's proof block.
- The white boxed `logo.png` export is replaced by `deck-mark.svg`, the same mark
  the site header uses, so it sits on light and dark slides alike.

Originals of every deck `index.html` are kept in `.deck-backups/` (git ignored). If a
deck is re-exported from Quarto, re-run the retheme: remap the palette, then inject
the `dundir-deck-theme` stylesheet link before `</head>`.

## Build note

The site must be built with Hugo 0.147.3 extended or newer, the version CI uses.
On 0.139 the section templates under `layouts/<section>/single.html` are not picked
up and every inner page renders empty through `_default/single.html`, which is easy
to miss because the pages still return 200 and still carry their meta description.

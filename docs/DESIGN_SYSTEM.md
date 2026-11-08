# Toward Less — design system

## Purpose

A personal notebook with the clarity of an engineering document and the calm of a reading room. It must welcome technical writing, family reflections, and Buddhist practice without looking like a SaaS landing page or claiming spiritual attainment.

**Name:** Toward Less
**English:** Less clinging. Clearer seeing.
**Tiếng Việt:** Bớt chấp thủ. Thấy rõ hơn.
**Author:** C.S Chánh Niệm

The public author name is defined in `src/site.ts`. Original posts use that default; translations and archived excerpts retain their source authors.

## Direction: neo-editorial (2026–2030)

The named direction for this system is **neo-editorial**: warm paper, one accent, serif-led typography, hairline rules instead of shadows, 0–2px radii, generous section spacing, variable fonts, and motion that is almost entirely scroll-driven CSS. It is the clearest 2026 path for content sites, and it is the blog's current palette sharpened — not a rebrand. The upgrade is a craft upgrade.

This direction is chosen against two things: the AI-generic look (8px radii everywhere, blue gradients, uniform shadows, centred hero with two buttons, perfect symmetry, generic sans) and the neo-minimal dark look (near-black, glass/blur, neon accent) that belongs to developer tools, not a reading room.

**Smart minimalism** here means decision density, not emptiness. Empty white space with a single centred paragraph reads as unfinished. Every remaining element must be deliberate and excellent: sharper hierarchy, stronger readability, more considered micro-interactions.

**Remove:** drop shadows on static elements; the `translateY` shadow-lift hover; generic 8px radii; blue gradients; stock photography and AI-generic illustration; centred hero + two-button blocks; uppercase eyebrow labels above every heading; decorative dividers; heavy borders together with heavy shadows; sidebars full of widgets; pop-ups that interrupt reading.

**Keep:** one serif for reading + one sans for interface; one accent; hairline rules; generous section spacing (4–6× the base unit); warm paper; an honest byline/date/reading-time block; a real table of contents on long pieces; footnotes and sidenotes; print styles.

## Principles

Readability before decoration. One quiet accent, not a rainbow. Space is allowed to remain empty. A short content archive should look intentional. No invented achievements, engagement counters, stock meditation imagery, or iconography implying attainment. Readers can navigate and read without JavaScript; search and theme controls are progressive enhancements.

## Tokens

Three tiers. Primitives are raw values, hidden from direct use. Semantic tokens are named by role, never by hue — `--color-accent` survives a rebrand, `--color-green` does not. Component tokens name the component. The CSS variables in `src/styles/global.css` are the implementation source of truth.

### Semantic colour tokens

| Token                            | Light                                                      | Dark         | Role                                          |
| -------------------------------- | ---------------------------------------------------------- | ------------ | --------------------------------------------- |
| `--color-bg` / `--paper`         | `#f7f5ef`                                                  | `#171c19`    | Page background                               |
| `--color-surface`                | `#fffdf8`                                                  | `#222a24`    | Cards and secondary surfaces                  |
| `--color-text` / `--ink`         | `#252a25`                                                  | `#e8ebe5`    | Primary text                                  |
| `--color-text-muted` / `--muted` | `#62695f`                                                  | `#b0baaf`    | Dates and secondary text                      |
| `--color-accent`                 | `#355e46`                                                  | `#adcfb1`    | Links, focus and brand mark                   |
| `--color-border`                 | `color-mix(in oklch, var(--color-text) 8%, transparent)`   | same formula | Non-semantic separators                       |
| `--color-rule`                   | `color-mix(in oklch, var(--color-text) 14%, transparent)`  | same formula | Stronger hairlines (masthead, article header) |
| `--color-selection`              | `color-mix(in srgb, var(--color-accent) 25%, transparent)` | same formula | Text selection tint                           |

The hues are kept deliberately: the 2026 colour consensus is warm neutrals plus complex botanical greens (Behr "Hidden Gem" jade, Valspar "Warm Eucalyptus", Dulux "Pine Forest"), and `#355e46` sits inside that family. Do not replace the green; deepen it into an **OKLCH ramp** (11 steps, 50–950) generated from the current value, then contrast-check every step before use. Opacity-based borders via `color-mix()` adapt automatically to light/dark and to coloured surfaces.

Do not use the separator token for text, focus indicators, or meaningful control boundaries.

**Contrast — measured 2026-11-08 (WCAG 2.2 AA needs 4.5:1 for body text):**

| Pair                                | Ratio   | Verdict |
| ----------------------------------- | ------- | ------- |
| Accent `#355e46` on paper `#f7f5ef` | 6.78:1  | Pass    |
| Muted `#62695f` on paper `#f7f5ef`  | 5.20:1  | Pass    |
| Ink `#252a25` on paper `#f7f5ef`    | 13.41:1 | Pass    |
| Accent `#adcfb1` on paper `#171c19` | 10.14:1 | Pass    |
| Muted `#b0baaf` on paper `#171c19`  | 8.62:1  | Pass    |
| Ink `#e8ebe5` on paper `#171c19`    | 14.34:1 | Pass    |

Re-measure every pair in both themes whenever a token changes. Low contrast is the single most common accessibility failure on the web; never eyeball it.

### Spacing, radius, shadow, motion

```css
/* Spacing — 4px base; generous between sections, dense within */
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-section: 4rem; /* 64px between sections */
--page-max: 1200px;
--content-max: 65ch;
/* Radius — editorial sharpness */
--radius: 2px;
--radius-card: 2px;
--radius-pill: 9999px; /* pills: tags only */
/* Shadows — floating UI only, never static cards */
--shadow-sm: 0 1px 0 rgb(0 0 0 / 0.06);
--shadow: 0 2px 8px rgb(0 0 0 / 0.08);
--shadow-lg: 0 4px 16px rgb(0 0 0 / 0.12);
/* Motion */
--duration-fast: 150ms;
--duration: 200ms;
--ease: ease-out;
```

## Typography

- **Reading and headings:** Noto Serif, normal and italic, weights 400/500/600/700. Prefer the **variable** Noto Serif (optical-size axis: small sizes for sidenotes and captions, large sizes for display) once the build pipeline supports it.
- **Interface:** Be Vietnam Pro, normal, weights 400/500/600. Verify its glyph coverage for the blog's non-Vietnamese Latin-script languages before relying on it as the sole UI font.
- **Code:** system monospace.
- Latin, Latin-extended, and Vietnamese subsets are explicitly included. Astro fetches fonts at build time and publishes them as same-origin assets.

### Type scale (ratio 1.25, Major Third; fluid with `clamp()`)

| Element              | Size                                      | Weight      | Line-height |
| -------------------- | ----------------------------------------- | ----------- | ----------- |
| Display / H1         | `clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem)` | 600 (serif) | 1.1–1.3     |
| H2                   | 1.5–1.75rem                               | 600         | 1.1–1.3     |
| H3                   | 1.25rem                                   | 600         | 1.1–1.3     |
| Body                 | 18px desktop, 17px mobile                 | 400         | 1.65        |
| Caption / meta / nav | 0.875rem                                  | 400–500     | 1.4         |

**Bold is 600, not 700** — heavy enough to stand out without jarring contrast. Headlines use `text-wrap: balance`; body uses `text-wrap: pretty`. No fixed-height text containers. No uppercase transformation for Vietnamese labels. Headings must accommodate stacked diacritics without clipping.

### Measure

**`max-width: 65ch`** for article text — about 66 characters per line, the readability sweet spot (45–75 acceptable, 80 the WCAG AAA cap; 40 for CJK). `65ch` survives font and language changes where a fixed `46rem` does not. Paragraph spacing `margin-bottom: 1.5em`. Make the body line-height the spacing unit and set section and heading spacing in multiples or halves of it.

### Per-script metrics

Use `:lang()` overrides, not one global value. Pair typefaces by optical x-height, not nominal size; `font-size-adjust` can normalise x-height across fallback fonts.

| Script                      | Size (base 16px Latin) | Line-height | Notes                                                                               |
| --------------------------- | ---------------------- | ----------- | ----------------------------------------------------------------------------------- |
| Latin                       | 1rem                   | 1.5         | Baseline                                                                            |
| CJK (Chinese)               | 1.125rem (18px)        | 1.7–2.0     | No word spaces; uniform square grid; measure ≤40 chars/line                         |
| Arabic / Urdu / Persian     | 1.125rem               | 1.7–1.9     | Room for diacritics and tall ascenders; never tight tracking — it crushes ligatures |
| Devanagari (Hindi, Marathi) | 1.25rem (20px)         | 1.6         | Shirorekha and conjuncts need vertical room                                         |
| Thai                        | ~1.125rem              | 1.8–1.9     | Stacked diacritics up to 3× Latin height; spaces mark phrases, not words            |
| Cyrillic (Russian)          | 1rem                   | 1.5         | Check л/п and similar-letter distinction at small sizes                             |

There is no single font that covers everything well. Noto is the closest: separate families per script, designed for visual harmony across scripts. Keep Noto Serif as the spine; pair per script (Noto Serif/Sans CJK, Noto Sans/Serif Devanagari, Noto Naskh/Noto Sans Arabic, Noto Sans/Serif Thai). Consider Cairo or IBM Plex Arabic as the Arabic display alternative, and IBM Plex Sans Thai for Thai UI. Load CJK only where needed via `unicode-range` subsetting so a Vietnamese reader never downloads Chinese glyphs.

## Layout

A restrained masthead; single-column hero; recent-writing list; article pages with description, date, optional translation, collapsible contents and readable body. Mobile navigation wraps into a second row rather than hiding basic links behind a menu. Controls have a minimum 44px tap target where practical. Set the outer margin as a token held across breakpoints; named elements (images, pull quotes) break out of it deliberately.

## Article apparatus

These are the devices that make long-form feel like a magazine rather than a CMS template. Each is cheap in Astro; each is the documented best practice.

- **Article header:** kicker → large serif headline with balanced wrap (one italicised word at most) → dek/standfirst in italic serif, 20–26px → byline + date + reading time under a hairline rule → captioned image → drop cap.
- **Drop cap:** one per article, at the start only. Modern CSS `initial-letter` (Safari 17+, Chrome 133+; no Firefox yet — gate with `@supports` and a float fallback).
- **Pull quotes:** 1.5–2× body size, display serif (often italic), at a column break; quote real text, never invent teaser copy; at most 1 per 800–1000 words; hanging punctuation; attribution in small caps on the same line.
- **Sidenotes:** margin notes on wide viewports (≥1100px), collapsing to bottom footnotes on mobile. Footnotes: bottom list is best for accessibility; superscripts at 0.75em, raised, must not disrupt line rhythm.
- **Table of contents:** sticky right-rail TOC for articles over ~1,500 words — one of the cheapest upgrades to ship. H2 only by default, cap at 10–12 items, skip for short articles or fewer than 4 H2s. Collapsible inline block plus compact sticky bar on mobile. Scroll-spy highlighting. Do not stack a sticky header, a CTA, and a cookie bar.
- **Reading progress:** a thin (2–4px) bar in the accent colour tracking the **article**, not the whole page — footer and related posts must not inflate the denominator. Build with CSS `animation-timeline: view()` and an IntersectionObserver fallback; decorative, `aria-hidden="true"`. Implementation gotcha (found live 2026-11-09): the named timeline `animation-timeline: --article` must stay a separate longhand in its own rule — the CSS minifier merges `animation-*` longhands into the `animation` shorthand, where a dashed-ident is parsed as the animation _name_, not the timeline, so the bar silently never moves.
- **Captions:** below the figure in `<figure>/<figcaption>`, 8–16 words, each a statement that survives alone; smaller sans (≥13px, prefer 14px) even when body is serif.
- **Related posts:** avoid the generic 3-card grid with stock thumbnails. Prefer "Continue the thread" (one next essay in the same series or theme, with a one-line reason), numbered series/issue navigation, or a ruled text-only list (title + date + one-line dek).

## Authoring conventions

The article apparatus is written in Markdown with two raw-HTML conventions:

- **Pull quote:** `<blockquote class="pull-quote">…</blockquote>` — real text from the article, at most one per 800–1000 words.
- **Sidenote:** `<aside class="sidenote">…</aside>` — on wide screens it sits in the margin opposite the table-of-contents rail; on narrow screens it is an inline note.

On screens 1200px and wider the table of contents becomes a rail in the inline-end margin and opens automatically (a small script also adds scroll-spy highlighting); below that it stays the collapsible inline block. The reading-progress bar is article-scoped and needs no markup beyond the `<div class="reading-progress">` the post template renders.

## Components

`Header.astro`: brand, three navigation links, a language menu, theme preference.
`PostCard.astro`: date, title, short description and linked topics.
`Layout.astro`: metadata, canonical and hreflang, font assets, document language, skip link and landmarks.
`Footer.astro`: author, RSS, source and upstream credit, language links.

- **Cards (article lists):** border-based, 1px low-opacity border, 2px radius, 24–32px padding. Hover is a background tint shift, border intensify, or title colour shift — **no shadow, no lift**.
- **Buttons:** sharp (0–2px), 2:1 horizontal:vertical padding (default 10px 20px, large 14px 28px, small 6px 12px), weight 600. Hover is a colour shift only. Pills only for tags and badges.
- **Links:** underline-based. `text-underline-offset: 3px`, thickness 1.5px; slide-in underline as the micro-interaction.
- **Tables:** horizontal rules only, no vertical borders, no zebra striping; sticky header; horizontal scroll on mobile.
- **Code blocks:** dark blocks on a light page are an established convention — keep, with a copy button and language label, radius matching cards.
- **Badges/tags:** pill radius, 2px 8px padding, 0.75rem. Uppercase tracked labels for kickers, sparingly — never an eyebrow above every heading.

## Motion

The 2022 hover is dead: no `translateY(-2px)` + shadow lift. 2026 hovers are colour shift only (darken 10–15%), opacity shift, colour inversion, or underline slide-in. Transitions 150–200ms `ease-out` for 90% of cases. Native CSS scroll-driven animations (`animation-timeline: scroll()` / `view()`) are baseline in all major browsers — reading-progress bars, fade-ins, and image reveals with zero JavaScript, compositor-threaded. CSS covers the simple ~80%; reach for GSAP only for the complex ~20% (pinning, scrubbed timelines), and only on display type, never body text. Motion is judged by Core Web Vitals (especially INP) and must be reduced-motion aware.

## Themes: Paper / Sepia / Night

Three reading modes, from semantic tokens only. Paper is the default; Sepia is a genuine third reading mode, not a gimmick; Night is the dark theme. Respect `prefers-color-scheme`, offer a picker, and make all three pass the same WCAG contrast rules. Dark is not automatically more accessible — avoid pure black + pure white (halation); use near-black `#0A0A0A–#121212`, soften text, dim images to `brightness(0.9)`, raise border opacity, replace shadows with borders or lightness elevation. Thin fonts get swallowed on dark; bump body weight slightly if needed.

Theme preference cycles System → Light → Sepia → Dark → System and survives a reload. Blocked localStorage must not break reading.

## Language behaviour

All 18 interface locales live under their language-code routes after the configured base path. At the root only, an explicitly saved language choice wins; otherwise the site selects the first supported language in the browser's preference order and falls back to English. Direct locale URLs are never auto-redirected. Arabic, Urdu, and Persian use right-to-left document direction. No IP geolocation, flags, or automatic machine translation.

Use CSS logical properties from day one (`margin-inline-start`, `padding-inline-end`, `inset-inline`, `border-inline-start`) so layouts mirror cleanly with no override stylesheet. Mirror flow, not universal symbols: progress arrows, breadcrumbs, and back buttons mirror in RTL (they represent time and reading order); media playback controls, clocks, and phone numbers do not.

Article translations share `translationKey`. Each language can have a natural, stable ASCII slug. The language menu switches to an exact published translation when available; otherwise it links to that language's home page. A missing translation is never represented as translated content. Hreflang links only describe pages that exist. Search indexes and RSS feeds stay separate by language. Use `Intl.DateTimeFormat` with Asia/Ho_Chi_Minh for visible dates.

The language switcher is design, not a dropdown afterthought: full language names in their own script (e.g. "Tiếng Việt", "العربية", "हिन्दी"), current language marked, keyboard-accessible, and — for 18 languages — grouped by script or region rather than one long list.

## Interaction and accessibility

Respect reduced motion — always include the reduced-motion block, and gate scroll-driven animations with `@supports (animation-timeline: view())` so unsupported browsers simply get no animation. Preserve a visible keyboard focus indicator: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }`, visible for keyboard, hidden for mouse. WCAG 2.2 adds Focus Not Obscured (sticky headers must not cover the focused element; use `scroll-padding`) and Focus Appearance (≥2px perimeter at 3:1). Never strip outlines without a replacement. Touch targets ≥24×24px minimum, 44×44px recommended. Skip link as first element in `<body>`. The article remains usable without JavaScript. Search provides a browse-articles fallback.

**Print styles** (often forgotten, high value for a reflective blog): hide nav, footer, TOC, sidebar, CTA, search, and pagination; print URLs after links. Essay content is printed or saved as PDF far more often than average consumer content.

Verify desktop and 320/390px layouts across the 18 locales, light and dark, and representative long headings. Check CJK, Indic, Thai, Cyrillic, Arabic and Latin glyph fallback, plus right-to-left layouts. Use the non-indexed style-guide routes to inspect diacritics, Pāli, code, tables and links. Browser checks and axe run in CI; they supplement, not replace, human accessibility review.

## Performance as design

- **Fonts:** ship WOFF2 only; self-host; subset aggressively; keep total font payload under 100KB per page. Variable fonts only pay off if 3+ weights are used — otherwise a single static weight is smaller. Preload only 1–2 above-the-fold files with `crossorigin` (the URL must match `@font-face` exactly or the browser downloads twice). Split `font-display` by role: `optional` for body copy (zero FOUT, zero CLS), `swap` plus metric overrides (`size-adjust`, `ascent-override`, `descent-override`) for brand-critical headings. `unicode-range` per script so each language downloads only its glyphs; cache fonts 1 year immutable.
- **Core Web Vitals:** LCP <2.5s, INP <200ms, CLS <0.1 (75th percentile of real visits). Images always carry `width` + `height` attributes and/or `aspect-ratio` (16:9 or 3:2 enforced); `loading="lazy"` below the fold, `eager` for the hero, `decoding="async"`. `content-visibility: auto` with `contain-intrinsic-size` for long pages. Inline critical CSS; defer the rest. Keep CSS under 80KB uncompressed.

## Craft details

Each is cheap; each is noticed. Together they are what separates a designed publication from a template.

1. Selection colour tinted with the accent via `color-mix()`.
2. `text-wrap: balance` on headlines, `pretty` on body — no orphan words.
3. Refined underlines: offset 3px, thickness 1.5px, slide-in on hover.
4. **One hand-made mark per essay** — a botanical line motif, squiggle divider, or swash initial. Restraint is what makes the mark land.
5. Hanging punctuation on pull quotes; old-style proportional figures in body text.
6. Bold = 600, not 700.
7. Focus ring as a designed element, not a browser default.
8. Custom scrollbar (`scrollbar-width: thin`) and a 3px reading-progress bar in the accent colour.
9. **A colophon page** — typefaces, tokens, tools, languages — the print-journal tradition that signals a system, not a template.
10. Numbers that are real: honest reading time, word count, "first published / updated" dates, issue or volume numbering.

## Reader-controlled personalisation (toward 2030)

The 2026–2030 direction is on-site AI answers and adaptive formats — adapted here to a personal blog's ethics, with control staying with the reader and no tracking: font-size and measure controls, a theme picker (Paper/Sepia/Night), resume-where-you-left-off (local only), semantic search across the archive, and a clearly labelled per-article AI summary. No surveillance-driven feeds.

## Implementation roadmap

Status 2026-11-09: phases 1–5 are implemented (tokens, type, article apparatus, motion, Sepia, colophon, print). Phase 6 is partial: theme picker, text-size and line-length controls, and Pagefind search exist; resume-where-you-left-off and per-article AI summaries are not built. The exact OKLCH ramp steps and Sepia values are generated in `src/styles/global.css` and contrast-checked there.

1. **Tokens first:** three-tier tokens, OKLCH ramps, `color-mix()` borders, 2px radii, 4px spacing scale. Re-measure contrast in both themes.
2. **Type:** 65ch measure, 18px/1.65 body, fluid `clamp()` display type, `balance`/`pretty` wraps, bold 600, per-script `:lang()` metrics.
3. **Article apparatus:** drop cap, pull quotes, sidenotes, sticky TOC, article-scoped reading progress.
4. **Motion and interaction:** kill the lift hover and shadows; colour-shift-only hovers at 150–200ms; scroll-driven progress.
5. **Themes and craft:** Sepia as a third theme; the hand-made mark; the colophon; print stylesheet.
6. **Personalisation:** reader controls for type, measure, and theme; resume-where-you-left-off; semantic search.

## Sources and verification

- Wire Design System for B2B Content Sites (2026-03-12) — https://wire.wise-relations.com/guides/design-system/
- PageProofer, "Warm & Editorial" — https://pageproofer.com/inspiration/warm-editorial/
- The Margin design system — https://the-margin.work.withdarsh.com/design-system
- Society for News Design, SND47 World's Best-Designed (2026) — https://snd.org/snd-2026-worlds-best-designed/
- WebAIM Million (2026) — low contrast as the most common accessibility failure.
- Contrast ratios in the Tokens section were measured locally on 2026-11-08 with the WCAG relative-luminance formula. Trend claims and third-party figures are sourced from the references above; spot-check a figure on its live page before quoting it elsewhere. The OKLCH ramp steps and Sepia theme values are generated in `src/styles/global.css` and contrast-checked in comments there.

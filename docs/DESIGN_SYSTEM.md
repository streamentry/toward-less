# Toward Less — design system: Marginalia

## Purpose

A personal notebook with the clarity of an engineering document and the calm of a reading room. It must hold technical writing, family reflections, and Buddhist practice without looking like a SaaS landing page or claiming spiritual attainment.

**Name:** Toward Less
**English:** Less clinging. Clearer seeing.
**Tiếng Việt:** Bớt chấp thủ. Thấy rõ hơn.
**Author:** C.S Chánh Niệm

The public author name is defined in `src/site.ts`. Original posts use that default; translations and archived excerpts retain their source authors.

## Direction

**Marginalia** is editorial minimalism built on Apple's interface principles. It takes three things from Apple's Human Interface Guidelines — content comes first and the interface defers to it; type and colour are defined by _role_, not by value; every reader preference (text size, contrast, motion, transparency, theme) is honoured — and sets them on the oldest reliable layout in publishing: a text column with notes in the margin.

It is designed to still look right in 2036. The test for any addition is: _would this have looked right in a well-made book in 1960, and on a good screen in 2016?_ Gradients, glass on static content, decorative shadows, illustration styles, and novelty fonts fail that test. Rules, margins, numbers, and well-set type pass it.

What makes it unconventional is structure, not decoration:

- **The hanging margin.** Metadata — entry numbers, dates, reading time, bylines, sidenotes — lives in the inline-start margin on wide screens. The text column contains only text.
- **A numbered notebook.** Every entry carries a real index number (the oldest post in a language is `001`). The home page and archive read as a contents page, not a feed.
- **Paper is square; controls are round.** Anything you read (lists, code, images, tables, swatches) has square corners and is separated by rules. Anything you touch (buttons, the language menu, the theme toggle, reader controls) is a filled capsule or circle. A reader can tell what is interactive from shape alone.
- **One accent, used rarely.** The green marks links' underlines, focus, the current place (contents rail, progress line, current language), and the hand-made mark. Never headings, never fills, never decoration.

## Principles

1. **Deference.** The interface steps back. No chrome competes with the article; the masthead is one line; there are no sidebars, pop-ups, counters, or engagement widgets.
2. **Clarity by role.** Every colour and type size has a named job. If a value has no role, it does not belong in the system.
3. **Hierarchy from type, not boxes.** Scale, weight, tracking, and space carry hierarchy. Cards, shadows, and borders around content are not used.
4. **The reader is in control.** Browser text size scales everything (rem throughout). System contrast, motion, transparency, and colour-scheme preferences are respected. Text size, line length, and theme are reader controls.
5. **Numbers are real.** Entry numbers, dates, reading time, and update dates are true. Nothing is invented to look busy.
6. **Readable without JavaScript.** Search, theme, contents rail, and copy buttons are progressive enhancements.
7. **One alignment grid.** The masthead, footer, lists, and article header all sit on the same three columns.

## Grid

```
| margin-col | gutter |  text column (measure)  | gutter | margin-col |
   12rem      2.5rem          38rem               2.5rem     12rem
```

| Token           | Value                                     | Role                                    |
| --------------- | ----------------------------------------- | --------------------------------------- |
| `--measure`     | `38rem`                                   | Reading column (≈65 Latin characters)   |
| `--text-col`    | `--measure × --measure-scale`             | Column after the reader's width setting |
| `--margin-col`  | `12rem`                                   | Hanging margin, each side               |
| `--gutter`      | `2.5rem`                                  | Space between margin and column         |
| `--frame`       | column + 2 × (margin + gutter)            | Masthead and footer width               |
| `--hang`        | `-(margin-col + gutter)`                  | Offset that moves an element outward    |
| `--page-gutter` | `clamp(1.25rem, 0.75rem + 2.5vw, 2.5rem)` | Outer page margin (≈20pt on phones)     |

The measure is set in `rem`, not `ch`, so changing a font never moves the grid; at the reading size it gives about 65 Latin characters and about 34 CJK characters per line.

**Breakpoints.** Below `44rem` the masthead wraps navigation to a second row. At `72rem` and above the hanging margin is active: the brand, section labels, entry meta, article meta, and sidenotes move into the inline-start margin, and the contents rail occupies the inline-end margin. Between the two, everything is a single column with metadata as an ordinary line.

**`.hang`** is the utility for one-off marginal content: on wide screens it floats into the inline-start margin; below that it stays in the flow. Lists and the article header use explicit two-column grids with `margin-inline-start: var(--hang)` instead.

Only one element may break the column: the home page's display title may run into the far margin. That is the single deliberate grid break on the site.

## Colour

Semantic roles map to Apple's: `label` → `--ink`, `secondaryLabel` → `--muted`, `systemBackground` → `--paper`, `secondarySystemBackground` → `--surface`, `separator` → `--line`, `opaqueSeparator` → `--rule`, `tertiarySystemFill` → `--fill`. Primitives (`--green-*`, `--stone-*` OKLCH ramps) exist for generating values and are not used directly by components.

| Token           | Paper              | Sepia     | Night     | Role                                         |
| --------------- | ------------------ | --------- | --------- | -------------------------------------------- |
| `--paper`       | `#f7f5ef`          | `#f6efe0` | `#171c19` | Page background                              |
| `--surface`     | `#fffdf8`          | `#fbf6ea` | `#202722` | Elevated surfaces (menus)                    |
| `--ink`         | `#252a25`          | `#2e2a21` | `#e8ebe5` | Primary text                                 |
| `--muted`       | `#62695f`          | `#6e6350` | `#b0baaf` | Secondary text: dates, decks, labels         |
| `--accent`      | `#355e46`          | `#3d5c46` | `#adcfb1` | Link underline, focus, current place, mark   |
| `--line`        | ink 14%            | ink 14%   | ink 16%   | Separators between entries                   |
| `--rule`        | ink 28%            | ink 28%   | ink 30%   | Structural rules (section heads, pull quote) |
| `--fill`        | ink 6%             | ink 6%    | ink 8%    | Control backgrounds                          |
| `--fill-strong` | ink 11%            | ink 11%   | ink 14%   | Control hover                                |
| `--material`    | surface 84% + blur | same      | same      | Floating menus only                          |

`--line`, `--rule`, `--fill` are `color-mix()` blends of `--ink`, so they adapt to every theme without separate values. They are never used for text or as the only boundary of a meaningful control.

**Contrast — measured 2026-11-11 with the WCAG relative-luminance formula (AA body text needs 4.5:1):**

| Theme | Background | Ink     | Muted  | Accent  |
| ----- | ---------- | ------- | ------ | ------- |
| Paper | paper      | 13.41:1 | 5.20:1 | 6.78:1  |
| Paper | surface    | 14.38:1 | 5.58:1 | 7.27:1  |
| Sepia | paper      | 12.48:1 | 5.15:1 | 6.51:1  |
| Sepia | surface    | 13.25:1 | 5.46:1 | 6.91:1  |
| Night | paper      | 14.34:1 | 8.62:1 | 10.14:1 |
| Night | surface    | 12.69:1 | 7.63:1 | 8.97:1  |

Re-measure every pair in every theme whenever a token changes. There is deliberately no tertiary text colour: a third grey would either fail contrast or be indistinguishable from `--muted`.

**Themes.** Paper is the default; Sepia is a third reading mode chosen explicitly; Night is the dark theme. The toggle cycles System → Light → Sepia → Dark → System and survives a reload; blocked storage must not break reading. Night avoids pure black and pure white. Code blocks stay dark in every theme.

**System preferences.** `prefers-contrast: more` raises `--muted` towards ink and strengthens separators and fills. `prefers-reduced-transparency: reduce` makes the menu material solid. `forced-colors: active` gives controls a system-coloured border.

## Typography

**Typefaces.** Noto Serif (variable, roman and italic) for reading and headings; Be Vietnam Pro (400/500/600) for the interface; the system monospace stack (`ui-monospace`, SF Mono, Menlo, Consolas) for code. Be Vietnam Pro is kept over the platform system font on purpose: it was drawn for Vietnamese and gives the site a voice of its own, while sharing San Francisco's neutral, open proportions. Per-script families (Noto Serif/Sans CJK, Devanagari, Bengali, Thai, Naskh, Nastaliq) take over through `html[lang]` overrides, with Apple platform fonts (Hiragino, Apple SD Gothic Neo, Kohinoor, Thonburi, Geeza Pro) as fallbacks.

**Type ramp.** Named after Apple's text styles and set in `rem`, so the browser's text-size setting works like Dynamic Type. Nothing is smaller than 12px.

| Token             | Size                                       | Used for                                |
| ----------------- | ------------------------------------------ | --------------------------------------- |
| `--type-display`  | `clamp(2.75rem, 1.85rem + 3.6vw, 4.75rem)` | Home title only                         |
| `--type-title-1`  | `clamp(2.125rem, 1.6rem + 2.1vw, 3.25rem)` | Article and page titles                 |
| `--type-title-2`  | `clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)`  | Entry titles, prose H2                  |
| `--type-title-3`  | `1.25rem`                                  | Prose H3, article deck, home intro      |
| `--type-headline` | `1.0625rem`                                | Entry deks, topic names                 |
| `--type-reading`  | `1.125rem` (17px on phones)                | Article body                            |
| `--type-callout`  | `1rem`                                     | Interface default                       |
| `--type-subhead`  | `0.9375rem`                                | Navigation, buttons, tables             |
| `--type-footnote` | `0.8125rem`                                | Meta, labels, sidenotes, footer         |
| `--type-caption`  | `0.75rem`                                  | Code labels, menu group names (minimum) |

**Optical tracking.** As in San Francisco, large type is tightened and small type opened: display `-0.032em`, titles `-0.022em`, headings `-0.012em`, captions `+0.01em`. Tracking is applied only to Latin-script and Cyrillic languages; it is zeroed for CJK, Arabic-script, Indic, and Thai, where it breaks joining or crowds clusters.

**Leading** is a token per role and per script. Latin display `1.06`, titles `1.12`, reading `1.65`. Vietnamese gets more room for stacked diacritics (`1.16`/`1.22`); CJK reading `1.85`; Arabic and Persian `1.9`; Urdu Nastaliq `2.2`; Devanagari and Bengali `1.75`; Thai `1.85`.

**Rules.** Bold is 600, never 700; the browser never synthesises bold. Headlines use `text-wrap: balance`, paragraphs `pretty`. Body numerals are old-style proportional; meta, dates, and tables are tabular. Italic is a Latin-script device: the home title's second line and the article deck are italic only in Latin-script languages and upright elsewhere. No uppercase transforms anywhere — they damage Vietnamese and mean nothing in most of the site's scripts.

## Shape, space, depth

- **Radius:** paper `0`; inline code tint `0.3em`; menus `14px`; controls `999px` (capsules and circles). Nothing else is rounded.
- **Space:** 4px base, 8px rhythm (`--space-1` … `--space-24`), sections `clamp(4rem, 2.5rem + 5vw, 7rem)`. Dense inside a group, generous between groups.
- **Depth:** there is one elevated surface — the floating language menu, with `--material` (translucent surface, `saturate(180%) blur(24px)`) and `--shadow-float`. Nothing static has a shadow.
- **Targets:** every control has a 44×44px hit area. Visible capsules are 36px; a transparent `::before` extends the hit area by 4px on each side.

## Motion

Short, eased, and only where it explains something: hover colour shifts, the menu opening from its button, the chevron turning, a control pressing in (`scale(0.96)`), the brand mark nudging towards the text it leads to, the contents rail marking the current section, and a quiet cross-fade between pages (cross-document view transitions, no script).

| Token                | Value                               |
| -------------------- | ----------------------------------- |
| `--duration-instant` | 100ms (press)                       |
| `--duration-fast`    | 160ms (colour)                      |
| `--duration`         | 240ms (menus, chevrons, page fade)  |
| `--ease`             | `cubic-bezier(0.28, 0.11, 0.32, 1)` |

Only `transform`, `opacity`, and colours animate. `prefers-reduced-motion: reduce` turns off all animation, smooth scrolling, and page transitions. The reading-progress line uses a native scroll timeline and simply does not appear where unsupported.

## Components

| Component        | File                 | Shape and behaviour                                                                                                                                                                                                                                   |
| ---------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Masthead         | `Header.astro`       | Brand in the margin column, three navigation links starting at the text column, language and theme controls at the far end. Current section: ink with a 1.5px underline.                                                                              |
| Language menu    | `Header.astro`       | Capsule button showing the code (`EN`) and a chevron; opens a material popover, two columns grouped by script with each name in its own script; current language marked with an accent dot.                                                           |
| Theme toggle     | `Header.astro`       | Circular control; label announces the current state.                                                                                                                                                                                                  |
| Entry            | `PostCard.astro`     | Ruled row. Meta (number, date, reading time) above the title on narrow screens, hanging in the margin on wide ones. Title in serif, deck in muted serif, topics as plain text links. Hover: the number turns accent and the title underline fades in. |
| Section heading  | `[lang]/index.astro` | Label in the margin, "All articles" at the column end, over a `--rule`.                                                                                                                                                                               |
| Article header   | `posts/[slug].astro` | Topics → title → italic deck; meta block (number in accent, author, date, reading time, update, translation) hangs beside the deck on wide screens, sits under a hairline on narrow ones.                                                             |
| Contents         | `posts/[slug].astro` | Ruled disclosure in the flow; on wide screens a rail in the inline-end margin with a 1.5px line and an accent segment for the current section. No generated numbers — many headings number themselves.                                                |
| Reading progress | `posts/[slug].astro` | 2px accent line, article-scoped (`animation-range: contain`), `aria-hidden`.                                                                                                                                                                          |
| Reader controls  | `posts/[slug].astro` | Two segmented groups of circular controls: text size, line length.                                                                                                                                                                                    |
| Buttons          | `.button`            | Filled capsule, 44px tall, colour shift on hover, slight press. Pagination and style guide.                                                                                                                                                           |
| Topic index      | `tags/index.astro`   | Ruled two-column list: name in serif, count in tabular figures.                                                                                                                                                                                       |
| Footer           | `Footer.astro`       | Same frame: copyright in the margin, all eighteen language names in the column, links in the far margin.                                                                                                                                              |

## Prose apparatus

- **Drop cap:** one per article, the first paragraph only, in ink at regular weight, `initial-letter: 3` with a float fallback. Latin-script and Cyrillic languages only — `::first-letter` breaks Arabic joining and Indic and Thai clusters.
- **Links:** ink text with a 1.5px accent underline; hover turns the text accent. The underline means links never rely on colour alone.
- **Pull quote** (`<blockquote class="pull-quote">`): real text from the article, at most one per 800–1000 words; 1.45em italic between two rules.
- **Sidenote** (`<aside class="sidenote">`): inline note with a rule on narrow screens; in the inline-start margin on wide screens.
- **Block quotes:** 1px ink rule at the inline start, muted text.
- **Lists:** muted markers; ordered lists use tabular figures.
- **Section break** (`---`): a 3rem centred rule.
- **Code:** inline in a `--fill` tint; blocks square, dark in every theme, language label and capsule copy button.
- **Tables:** horizontal rules only, no fills, muted header row, horizontal scroll on narrow screens.
- **Figures:** square images, sans caption in `--type-footnote` beneath.

## Language behaviour

All 18 interface locales live under their language-code routes after the configured base path. At the root only, an explicitly saved language choice wins; otherwise the site selects the first supported language in the browser's preference order and falls back to English. Direct locale URLs are never auto-redirected. Arabic, Urdu, and Persian use right-to-left direction; every layout uses logical properties (`inline-start`, `inline-end`), so the hanging margin, the contents rail, the progress line, and the menu origin all mirror without an override stylesheet. Mirror flow (arrows, progress), not universal symbols.

Article translations share `translationKey`. The language menu switches to an exact published translation when available; otherwise it links to that language's home page. Hreflang links only describe pages that exist. Search indexes and RSS feeds stay separate by language. Visible dates use `Intl.DateTimeFormat` with Asia/Ho_Chi_Minh; entry numbers use `Intl.NumberFormat` for the page's locale.

## Accessibility

- Contrast as measured above; links underlined; no information by colour alone.
- Focus ring: 2px `--focus`, 3px offset, on `:focus-visible` only. WCAG 2.2 Focus Not Obscured: no sticky header; `scroll-padding-top` keeps anchored headings clear.
- 44px targets; skip link as the first element (a capsule that appears on focus).
- Entry numbers are decorative and `aria-hidden`; the date and title carry the meaning.
- Respects `prefers-reduced-motion`, `prefers-contrast`, `prefers-reduced-transparency`, `forced-colors`, and browser text size.
- Print: navigation, footer, contents, reader controls, and progress are hidden; grids collapse to one column; link URLs print after links.

Verify desktop and 320/390px widths across the 18 locales, all three themes, representative long headings, and RTL. Use the non-indexed style-guide routes to inspect diacritics, Pāli, code, tables, and links. Browser checks and axe run in CI; they supplement, not replace, human review.

## Performance

- Two web font families (Noto Serif variable, Be Vietnam Pro), WOFF2, self-hosted at build, subset to Latin, Latin Extended, Vietnamese, and Cyrillic. Other scripts use local fonts.
- One stylesheet, split by surface in source (`src/styles/*.css`) and bundled at build; about 30KB uncompressed.
- `content-visibility: auto` on entries; no layout-affecting animation; no image is required to render any page.
- Core Web Vitals targets: LCP < 2.5s, INP < 200ms, CLS < 0.1.

## Source files

| File                     | Contents                                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| `src/styles/tokens.css`  | Primitives, semantic roles, themes, system-preference overrides, per-script fonts and metrics  |
| `src/styles/base.css`    | Element defaults, focus, grid primitives (`.shell`, `.hang`), view transitions, reduced motion |
| `src/styles/chrome.css`  | Masthead, controls, language menu, footer                                                      |
| `src/styles/index.css`   | Home title, page headings, entries, topic index, buttons, pagination                           |
| `src/styles/article.css` | Article header, contents, reading progress, reader controls                                    |
| `src/styles/prose.css`   | Long-form reading and the prose apparatus                                                      |
| `src/styles/misc.css`    | Search, swatches, print                                                                        |

## Do not

- Add cards, drop shadows on static content, gradients, or glass outside floating menus.
- Use the accent for headings, backgrounds, or emphasis.
- Round anything a reader reads; square off anything a reader touches.
- Add uppercase labels, eyebrows above every heading, or decorative dividers.
- Introduce a third font family, a tertiary grey, or a type size below 12px.
- Animate layout properties, or add motion that does not explain a change.
- Invent counts, badges, or engagement numbers.

## Sources and verification

- Apple, Human Interface Guidelines — Typography, Color, Layout, Materials, Accessibility: https://developer.apple.com/design/human-interface-guidelines/ (semantic colour roles, text styles and Dynamic Type, 44pt targets, materials only for floating UI, system accessibility settings).
- Edward Tufte and Dave Liepmann, Tufte CSS — https://edwardtufte.github.io/tufte-css/ (sidenotes and the margin column on the web).
- Robert Bringhurst, _The Elements of Typographic Style_ (measure, old-style figures, the page as a proportioned grid).
- W3C, WCAG 2.2 — https://www.w3.org/TR/WCAG22/ (contrast, target size, focus appearance and visibility).
- The contrast table above was computed locally on 2026-11-11. The design choices are interpretations of these sources, not requirements they state.

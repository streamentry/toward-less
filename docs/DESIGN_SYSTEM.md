# Toward Less — design system

## Purpose

A personal notebook with the clarity of an engineering document and the calm of a reading room. It must welcome technical writing, family reflections, and Buddhist practice without looking like a SaaS landing page or claiming spiritual attainment.

**Name:** Toward Less  
**English:** Less clinging. Clearer seeing.  
**Tiếng Việt:** Bớt chấp thủ. Thấy rõ hơn.  
**Author:** Chánh Niệm

## Principles

Readability before decoration. One quiet accent, not a rainbow. Space is allowed to remain empty. A short content archive should look intentional. No invented achievements, engagement counters, stock meditation imagery, or iconography implying attainment. Readers can navigate and read without JavaScript; search and theme controls are progressive enhancements.

## Tokens

| Token       | Light     | Dark      | Role                        |
| ----------- | --------- | --------- | --------------------------- |
| `--paper`   | `#f7f5ef` | `#171c19` | Page background             |
| `--surface` | `#eeeee6` | `#222a24` | Code and secondary surfaces |
| `--ink`     | `#252a25` | `#e8ebe5` | Primary text                |
| `--muted`   | `#62695f` | `#b0baaf` | Dates and secondary text    |
| `--accent`  | `#355e46` | `#adcfb1` | Links, focus and brand mark |
| `--line`    | `#d8ddd3` | `#3a473d` | Non-semantic separators     |

The CSS variables in `src/styles/global.css` are the implementation source of truth. Do not use the subtle separator token for text, focus indicators, or meaningful control boundaries.

## Typography

- **Reading and headings:** Noto Serif, normal and italic, weights 400/500/600/700.
- **Interface:** Be Vietnam Pro, normal, weights 400/500/600.
- **Code:** system monospace.
- Latin, Latin-extended, and Vietnamese subsets are explicitly included. Astro fetches fonts at build time and publishes them as same-origin assets.
- Article text: 18px desktop, 17px mobile, 1.95 line height. Main column: up to 46rem including its content width. Long code and tables scroll inside the column.
- No fixed-height text containers. No uppercase transformation for Vietnamese labels. Headings must accommodate stacked diacritics without clipping.

## Layout

A restrained masthead; single-column hero; recent-writing list; article pages with description, date, optional translation, collapsible contents and readable body. Mobile navigation wraps into a second row rather than hiding basic links behind a menu. Controls have a minimum 44px tap target where practical.

## Components

`Header.astro`: brand, three navigation links, language switch, theme preference.  
`PostCard.astro`: date, title, short description and linked topics.  
`Layout.astro`: metadata, canonical and hreflang, font assets, document language, skip link and landmarks.  
`Footer.astro`: author, RSS, source and upstream credit.

## Language behaviour

English lives under `/en/`, Vietnamese under `/vi/`, after the configured base path. The root redirects to English. No geolocation, browser-language guessing, flags, or automatic machine translation.

Article translations share `translationKey`. Each language can have a natural, stable ASCII slug. The header switches to the exact translated article when one is published; otherwise it links to the other language's home page. A missing translation is never silently represented as translated content. Hreflang links only describe pages that exist. Search indexes and RSS feeds stay separate by language. Use `Intl.DateTimeFormat` with Asia/Ho_Chi_Minh for visible dates.

## Interaction and accessibility

Theme preference cycles System → Light → Dark → System and survives a reload. Blocked localStorage must not break reading. Respect reduced motion. Preserve a visible keyboard focus indicator. The article remains usable without JavaScript. Search provides a browse-articles fallback.

Verify desktop and 320/390px layouts in both languages, light and dark, and a long Vietnamese heading. Use the non-indexed `/en/style-guide/` and `/vi/style-guide/` pages to inspect diacritics, Pāli, code, tables and links. Browser checks and axe run in CI; they supplement, not replace, human accessibility review.

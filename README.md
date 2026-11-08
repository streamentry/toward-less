# Toward Less

**Less clinging. Clearer seeing.**  
**Bớt chấp thủ. Thấy rõ hơn.**

A multilingual personal blog by **C.S Chánh Niệm**, built from [AstroPaper](https://github.com/satnaing/astro-paper). Interface routes are available in 18 languages: English, Vietnamese, Mandarin Chinese (Simplified script), Hindi, Spanish, Modern Standard Arabic, French, Bengali, Portuguese, Indonesian, Urdu, Japanese, Korean, Thai, Malay, Russian, Marathi and Persian.

- English: https://streamentry.github.io/toward-less/en/
- Tiếng Việt: https://streamentry.github.io/toward-less/vi/
- Other language routes use their ISO language codes (`zh` for Simplified Chinese, `ms` for Malay and `fa` for Persian).
- The root URL uses the reader’s explicit saved choice when available; otherwise it follows the first supported language in the browser’s preference list and falls back to English.
- GitHub Pages must be enabled before these addresses are public.

## Design

Warm paper, quiet ink, forest-green accents, Noto Serif for reading, and Be Vietnam Pro for the interface. Latin, Vietnamese, and Cyrillic font files are served locally; other scripts use their native system font stacks. One reading column, generous spacing, light/dark/system themes, keyboard focus, a skip link, and reduced-motion support. No advertising, newsletter gate, or external runtime font requests.

The design reference is at `/en/style-guide/` and `/vi/style-guide/` (under the configured base path). It is not included in the sitemap or search index.

## Run locally

Use Node 24 and pnpm 10.11.0:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Astro and append `/toward-less/en/` or `/toward-less/vi/` as appropriate.

```sh
pnpm build
pnpm verify
pnpm preview
```

Search is generated during `pnpm build`; use `pnpm preview` to test it. There is no backend or database. Build-time font fetching requires internet access; visitors receive the self-hosted files.

## Publish

1. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source. The deployment workflow also attempts automatic enablement when the repository token permits it.
2. Push to `main`, or run **Build and publish → Run workflow**.
3. The workflow checks types, builds, validates routes/metadata/feeds, runs browser and accessibility checks, and deploys the static artifact.

The initial repository import is pinned to AstroPaper commit `1497f407928a06f1f276252a5e6e3e8afe2c1efd`. This is a customized derivative: the theme's toolchain, Markdown features, static publishing model, and MIT attribution are retained; the presentation and routing are rewritten for this multilingual blog. It is not an unmodified upstream installation.

## Write

Articles live in `src/content/posts/<language-code>/`. New authored posts should include English, Vietnamese, Simplified Chinese, Hindi, Spanish, Modern Standard Arabic, French, Bengali, Portuguese, Indonesian, Urdu, Japanese, Korean, Thai, Malay, Russian, Marathi and Persian editions unless the user narrows the request. Matching translations share `translationKey`, not necessarily the same slug. Drafts and future-dated articles are excluded from pages, feeds, search, and translation links. A future-dated article becomes visible on the **next build after its publication time**; no scheduled background build is configured.

See [the writing guide](docs/WRITING.md), [design system](docs/DESIGN_SYSTEM.md), and [content and translation audit](docs/CONTENT_AUDIT.md).

## Important files

| File | Purpose |
| --- | --- |
| `src/site.ts` | Shared public author name |
| `astro-paper.config.ts` | Site identity, domain and GitHub Pages base path |
| `src/i18n.ts` | Interface labels, translated topic names and URL helpers |
| `src/styles/global.css` | Design tokens, typography, responsive layout and theme |
| `src/content.config.ts` | Article schema, author defaults and source attribution |
| `src/lib/posts.ts` | Publication rules, translation/slug validation and sorting |
| `src/pages/[lang]/` | Localized routes for all 18 supported languages |
| `.github/workflows/pages.yml` | Build, checks and GitHub Pages deployment |

For a custom domain, set `site.url` to that domain and `base` to `/` in `astro-paper.config.ts`, configure DNS and GitHub Pages, then rebuild. Do not remove `/toward-less` while hosting at the repository URL.

## Content and privacy

The two 2022 Vietnamese posts supplied by the owner have been migrated from the old blog, retaining their original Vietnamese and English archive dates and source attribution. Subsequent translations were published in 2026. All 17 published article families now have editions in 18 languages; the automated completeness check does not certify translation quality. They are translations/excerpts, not original first-person accounts by this site's owner. The time-with-children post includes a visible qualification of the source's unsupported 75% claim. The old `less-is-better` site is unchanged.

The paired introductory articles remain drafts. No private family details, employer details or personal account data were imported. Drafts in this public repository are not private.

The site stores the selected colour theme (`toward-less-theme`) and, only after an explicit language selection, the preferred language (`toward-less-language`). Language remains explicit in every content URL; browser-language detection happens only at the root. The upstream MIT license is retained for code; it does not grant rights to third-party articles or translations.

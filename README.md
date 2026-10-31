# Toward Less

**Less clinging. Clearer seeing.**  
**Bớt chấp thủ. Thấy rõ hơn.**

A bilingual personal notebook by **Chánh Niệm**, built from [AstroPaper](https://github.com/satnaing/astro-paper), with an English/Vietnamese editorial design system.

- English: https://streamentry.github.io/toward-less/en/
- Tiếng Việt: https://streamentry.github.io/toward-less/vi/
- GitHub Pages must be enabled before these addresses are public.

## Design

Warm paper, quiet ink, forest-green accents, Noto Serif for reading, and Be Vietnam Pro for the interface. Fonts include Vietnamese and Latin-extended subsets and are served locally after the build. One reading column, generous spacing, light/dark/system themes, keyboard focus, a skip link, and reduced-motion support. No analytics, advertising, newsletter gate, or external runtime font requests.

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

The initial repository import is pinned to AstroPaper commit `1497f407928a06f1f276252a5e6e3e8afe2c1efd`. This is a customized derivative: the theme's toolchain, Markdown features, static publishing model, and MIT attribution are retained; the presentation and routing are rewritten for this bilingual notebook. It is not an unmodified upstream installation.

## Write

Articles live in `src/content/posts/en/` and `src/content/posts/vi/`. Matching translations share `translationKey`, not necessarily the same slug. Drafts and future-dated articles are excluded from pages, feeds, search, and translation links. A future-dated article becomes visible on the **next build after its publication time**; no scheduled background build is configured.

See [the writing guide](docs/WRITING.md) and [design system](docs/DESIGN_SYSTEM.md).

## Important files

| File | Purpose |
| --- | --- |
| `astro-paper.config.ts` | Site identity, domain and GitHub Pages base path |
| `src/i18n.ts` | All interface labels, translated topic names and URL helpers |
| `src/styles/global.css` | Design tokens, typography, responsive layout and theme |
| `src/content.config.ts` | Article schema |
| `src/lib/posts.ts` | Publication rules, translation/slug validation and sorting |
| `src/pages/[lang]/` | English and Vietnamese routes |
| `.github/workflows/pages.yml` | Build, checks and GitHub Pages deployment |

For a custom domain, set `site.url` to that domain and `base` to `/` in `astro-paper.config.ts`, configure DNS and GitHub Pages, then rebuild. Do not remove `/toward-less` while hosting at the repository URL.

## Content and privacy

The About page and paired introductory article are editable starter copy based on the agreed blog identity. No private family details, employer details, old posts, or personal account data were imported. The old `less-is-better` site is unchanged.

The only browser preference stored by the site is the selected colour theme (`toward-less-theme`). Language selection is explicit in the URL. The upstream MIT license is retained for code; this setup does not grant an additional license to original prose.

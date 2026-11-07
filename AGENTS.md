# Agent guide

## Publishing a blog post

1. Read `docs/WRITING.md` and inspect nearby posts in the relevant language directories before drafting. Follow the site's voice and frontmatter format. Do not invent personal experiences or claims.
2. Check project facts against the linked primary source, such as the project's README. Describe AI assessments as assessments, not human certification.
3. By default, write every new authored post in all 18 supported languages: `en`, `vi`, `zh` (Mandarin Chinese in Simplified script), `hi`, `es`, `ar` (Modern Standard Arabic), `fr`, `bn`, `pt`, `id`, `ur`, `ja`, `ko`, `th`, `ms` (Malay), `ru`, `mr`, and `fa` (Persian). Iranian means Persian here; Malaysian means Malay. Create one file per language under `src/content/posts/<code>/`, with a shared `translationKey`, natural language-specific title/description/body, a timezone-aware `pubDatetime`, and an ASCII slug unique across the whole collection. Astro requires globally unique collection slugs even though URLs are language-prefixed; add a short language suffix when needed. Do not silently omit languages; if the user explicitly narrows scope, follow that instruction. Keep translations as drafts until reviewed for meaning, factual accuracy, names, readability, and script rendering. Editions may have independent publication states.
4. Run `pnpm build && pnpm verify`. Follow the remaining preview and visual checks in `docs/WRITING.md` when available. The required Node version is in `.nvmrc` and `package.json`; use that version for local checks.
5. Review `git diff` and `git status` to ensure only intended files are included. Commit with a clear content message.
6. A push to `main` starts `.github/workflows/pages.yml`, which builds, verifies, runs browser/accessibility checks, and deploys GitHub Pages. Push only when the user requested publishing or pushing.
7. Confirm the Actions run for the pushed commit succeeded, including the `deploy` job. Then open the published article URL and confirm it loads. A successful push or build alone does not prove publication.

If local checks cannot run because the installed Node version is too old, do not claim they passed. Prefer switching to the required version. If an explicit user request authorizes a push and the configured pre-push hook blocks only on that known runtime mismatch, report the limitation, use the repository's documented hook override only as needed, and rely on the GitHub workflow result before claiming the post is published.

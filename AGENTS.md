# Agent guide

## Publishing a blog post

1. Read `docs/WRITING.md` and inspect nearby posts in `src/content/posts/en/` or `src/content/posts/vi/` before drafting. Follow the site's voice and frontmatter format. Do not invent personal experiences or claims.
2. Check project facts against the linked primary source, such as the project's README. Describe AI assessments as assessments, not human certification.
3. Add the article under the matching language directory. Set a unique `slug` and `translationKey`, a timezone-aware `pubDatetime`, and `draft: false` only when the user asks to publish. Translations are separate posts and are not created automatically.
4. Run `pnpm build && pnpm verify`. Follow the remaining preview and visual checks in `docs/WRITING.md` when available. The required Node version is in `.nvmrc` and `package.json`; use that version for local checks.
5. Review `git diff` and `git status` to ensure only intended files are included. Commit with a clear content message.
6. A push to `main` starts `.github/workflows/pages.yml`, which builds, verifies, runs browser/accessibility checks, and deploys GitHub Pages. Push only when the user requested publishing or pushing.
7. Confirm the Actions run for the pushed commit succeeded, including the `deploy` job. Then open the published article URL and confirm it loads. A successful push or build alone does not prove publication.

If local checks cannot run because the installed Node version is too old, do not claim they passed. Prefer switching to the required version. If an explicit user request authorizes a push and the configured pre-push hook blocks only on that known runtime mismatch, report the limitation, use the repository's documented hook override only as needed, and rely on the GitHub workflow result before claiming the post is published.

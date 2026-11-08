# Agent guide

## Publishing a blog post

1. Read `docs/WRITING.md` and inspect nearby posts in the relevant language directories before drafting. Follow the site's voice and frontmatter format. Do not invent personal experiences or claims.
2. Check project facts against the linked primary source, such as the project's README. Describe AI assessments as assessments, not human certification.
3. Publish completed, reviewed posts in the requested languages without waiting for translations into all 18 supported languages. Set `draft: false` by default when the user requests publication. Use `draft: true` only when the user requests a draft or the content is not ready for publication. Additional language editions can be added later, using a shared `translationKey`, language-specific natural prose, timezone-aware `pubDatetime`, and globally unique ASCII slugs. Never invent translations or claim that unreviewed translations are complete. Publishing must remain an explicit user-authorized action.
4. Run `pnpm build && pnpm verify`. Follow the remaining preview and visual checks in `docs/WRITING.md` when available. The required Node version is in `.nvmrc` and `package.json`; use that version for local checks.
5. Review `git diff` and `git status` to ensure only intended files are included. Commit with a clear content message.
6. A push to `main` starts `.github/workflows/pages.yml`, which builds, verifies, runs browser/accessibility checks, and deploys GitHub Pages. Push only when the user requested publishing or pushing.
7. Confirm the Actions run for the pushed commit succeeded, including the `deploy` job. Then open the published article URL and confirm it loads. A successful push or build alone does not prove publication.

If local checks cannot run because the installed Node version is too old, do not claim they passed. Prefer switching to the required version. If an explicit user request authorizes a push and the configured pre-push hook blocks only on that known runtime mismatch, report the limitation, use the repository's documented hook override only as needed, and rely on the GitHub workflow result before claiming the post is published.

## Toward Less editorial identity — lush and lean

Lush in observation, lean in language. Keep concrete scenes, human complexity, careful distinctions, and a real counterargument. Remove filler, launch hype, repeated claims, decorative metaphors, and forced life lessons. A short, precise essay beats a long generic one.

The recurring question is how to work, build, care for family, read, and practice with less craving and attachment. This is not anti-ambition, anti-technology, or a mandate to make every article a Buddhist sermon. Distinguish contentment from avoidance, intention from attachment, evidence from speculation, and a project vision from what actually exists.

Never invent first-person memories, personal experiences, family details, spiritual attainments, or endorsements. Preserve the original authorship and text of attributed 2022 archival translations; write a separate editorial reflection instead of silently rewriting another author's words.

**Full translations mean full translations.** Preserve each article's substantive claims, examples, uncertainty, sources, and conclusion in all requested languages. An abridged adaptation must be labeled as such. Keep the same translationKey and globally unique slugs. AI translation is not native-speaker review; do not claim otherwise. Missing languages are tracked honestly rather than replaced with thin summaries.

When the user explicitly requests publication, publish completed and checked editions without waiting for all 18 languages; create the remaining full translations when requested. Do not default every new post to draft mode.

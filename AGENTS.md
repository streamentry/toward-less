# Agent guide

## Publishing a blog post

1. Read `docs/WRITING.md` and inspect nearby posts in the relevant language directories before drafting. Follow the site's voice and frontmatter format. Do not invent personal experiences or claims.
2. Always give credit and trace sources carefully when writing. Every article that draws on someone else's post, article, talk, data, or idea names that person and links to the exact source — author, title, date, and URL, with the status ID for social posts — inside the article itself, not only in a commit message. Before drafting, open and read the primary source; quote it exactly; check its numbers, dates, and claims against the source itself; and record what was verified and what remains uncertain. Never present another person's idea as the blog's own, never invent a source, and never write from a screenshot or second-hand summary when the original is reachable.
3. Check project facts against the linked primary source, such as the project's README. Describe AI assessments as assessments, not human certification.
4. When the user explicitly authorizes publication, prepare substantive, reviewed editions in all 18 supported languages, sharing one `translationKey` with natural prose, timezone-aware `pubDatetime`, and globally unique ASCII slugs. Publish ready content with `draft: false` by default; use `draft: true` only when the user requests a draft or the content is not ready. The CI translation-coverage gate requires all 18 editions for every published article family. Never invent translations or claim unreviewed machine translations were reviewed by native speakers.
5. Run `pnpm build && pnpm verify`. Follow the remaining preview and visual checks in `docs/WRITING.md` when available. The required Node version is in `.nvmrc` and `package.json`; use that version for local checks.
6. Review `git diff` and `git status` to ensure only intended files are included. Commit with a clear content message.
7. A push to `main` starts `.github/workflows/pages.yml`, which builds, verifies, runs browser/accessibility checks, and deploys GitHub Pages. Push only when the user requested publishing or pushing.
8. Confirm the Actions run for the pushed commit succeeded, including the `deploy` job. Then open the published article URL and confirm it loads. A successful push or build alone does not prove publication.

If local checks cannot run because the installed Node version is too old, do not claim they passed. Prefer switching to the required version. If an explicit user request authorizes a push and the configured pre-push hook blocks only on that known runtime mismatch, report the limitation, use the repository's documented hook override only as needed, and rely on the GitHub workflow result before claiming the post is published.

## Toward Less editorial identity — lush and lean

Write for clarity and a clear purpose:

- Before drafting, state the post's objective in one sentence: what should a reader understand, decide, or be able to do?
- Put the central question or claim near the start. Keep each section tied to the objective; remove anything that does not help the reader.
- Use plain words, short sentences, short paragraphs, and descriptive headings. Explain specialized terms when readers need them.
- Use a scannable structure: brief opening, descriptive headings, and bullet points for grouped claims, evidence, examples, steps, comparisons, options, and takeaways. Keep prose for context or reasoning that needs continuity; avoid long blocks and lists that obscure the point.
- Make factual claims traceable to evidence. Link sources beside the claims they support, distinguish evidence from interpretation, and state material uncertainty or limits.
- Keep a real counterargument when it affects the conclusion. End with the conclusion or next action the evidence supports; do not add a forced lesson or call to action.

Lush in observation, lean in language. Keep concrete scenes, human complexity, careful distinctions, and a real counterargument. Remove filler, launch hype, repeated claims, decorative metaphors, and forced life lessons. A short, precise essay beats a long generic one.

The recurring question is how to work, build, care for family, read, and practice with less craving and attachment. This is not anti-ambition, anti-technology, or a mandate to make every article a Buddhist sermon. Distinguish contentment from avoidance, intention from attachment, evidence from speculation, and a project vision from what actually exists.

Never invent first-person memories, personal experiences, family details, spiritual attainments, or endorsements. Preserve the original authorship and text of attributed 2022 archival translations; write a separate editorial reflection instead of silently rewriting another author's words.

**Full translations mean full translations.** Preserve each article's substantive claims, examples, uncertainty, sources, and conclusion in all requested languages. An abridged adaptation must be labeled as such. Keep the same translationKey and globally unique slugs. AI translation is not native-speaker review; do not claim otherwise. Missing languages are tracked honestly rather than replaced with thin summaries.

When the user explicitly requests publication, produce and check the complete 18-language set before committing it as published. Do not default posts to draft mode. Content requiring human review may be kept as a draft with that limitation made explicit.

# Writing in English and Vietnamese

## Create an article

Create `src/content/posts/en/my-article.md`:

```yaml
---
title: "A useful observation"
description: "One clear sentence about what the reader will find."
lang: en
slug: a-useful-observation
translationKey: useful-observation-2026
pubDatetime: 2026-10-31T09:00:00+07:00
draft: true
featured: false
tags: [technology]
---
```

Write ordinary Markdown below the front matter. MDX is available when an interactive explanation needs it. Do not use MDX merely for styling prose.

## Add a translation

Create `src/content/posts/vi/mot-quan-sat.md`:

```yaml
---
title: "Một quan sát hữu ích"
description: "Một câu rõ ràng về nội dung bài viết."
lang: vi
slug: mot-quan-sat-huu-ich
translationKey: useful-observation-2026
pubDatetime: 2026-10-31T09:00:00+07:00
draft: true
tags: [technology]
---
```

Keep **the same translationKey**, but translate the title, description, body and optionally the slug. Publication dates may differ. One published version does not force the other to publish. The site does not automatically translate content.

## Voice and editing

Write from a specific question, observation, example or argument. A short post is fine; it does not need a statement of philosophy at the beginning or a life lesson at the end.

- Keep first-person statements grounded in what the author has actually said or experienced. Never invent anecdotes, family details, quotations, spiritual experiences or claims of attainment to make a draft sound personal. Do not publish private conversation details without permission.
- In Vietnamese, translate the meaning rather than the English sentence structure. Use familiar wording and read the result aloud. Keep technical or Buddhist terms where they add precision; explain them when the reader needs it.
- Cut repeated statements about being thoughtful, humble, useful or clear. Retain specific uncertainty, evidence and corrections. Do not add a slogan, rhetorical contrast or metaphor to every section.
- Interface text should explain the state or action: "Chưa có bài viết." is enough. Error messages and footers do not need life advice.

The site tagline is intentional. It need not be repeated at the end of articles. AI-assisted drafts require the author's review before publication; stylistic polish does not make an unsupported personal claim authentic.

## Publication rules

Change `draft` to `false` when ready. The publication date must have arrived at build time. Scheduled posts become visible on the next push or manual deployment after the date; there is no timer service. Drafts and future posts are excluded from HTML, RSS, Pagefind and language-switch targets.

Use `modDatetime` only for a meaningful revision. Do not change a published slug without adding a redirect. Every published `(lang, slug)` and `(lang, translationKey)` pair must be unique; duplicates fail the build.

The filename is organizational; `slug` determines the public URL. Slugs and tag identifiers use lowercase ASCII, numbers and hyphens, beginning with a letter. This avoids accidental collisions with pagination routes. Keep dates timezone-aware.

## Topics

Built-in topic identifiers: `technology`, `life`, `practice`. Their English/Vietnamese labels live in `src/i18n.ts`. Additional tag IDs work automatically; add translated labels there to avoid exposing raw identifiers.

## Check before publishing

Run `pnpm build && pnpm verify`, then `pnpm preview`. Check the article in both themes and at mobile width. Test the translation link, code blocks, diacritics, and external sources. Search needs the production build and includes published articles and the About page. Reading-time labels are approximate.

The two introductory articles are unpublished starter drafts, not imported historical writing. They duplicate the About page and do not need to be published. An empty article list is supported; do not publish placeholders just to satisfy a test or fill the homepage.

Keep private information out of the public repository, including drafts: **draft means unpublished on the website, not secret on GitHub**.

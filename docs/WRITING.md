# Writing in 18 languages

Supported languages and content directory codes: English `en`, Vietnamese `vi`, Mandarin Chinese in Simplified script `zh`, Hindi `hi`, Spanish `es`, Modern Standard Arabic `ar`, French `fr`, Bengali `bn`, Portuguese `pt`, Indonesian `id`, Urdu `ur`, Japanese `ja`, Korean `ko`, Thai `th`, Malay `ms`, Russian `ru`, Marathi `mr`, and Persian `fa`. “Iranian” is treated as Persian; “Malaysian” is treated as Malay.

Unless the user narrows the request, create each new authored post in all 18 languages. Give every edition natural, idiomatic prose; translate meaning rather than sentence structure. Keep the same `translationKey` across editions, while titles, descriptions, slugs, and publication dates may differ. Start editions as drafts until they have been reviewed for meaning, names, facts, script rendering, and direction. A translation may remain a draft while an existing edition stays published; the site never auto-translates or auto-publishes.

## Create an article

Create one file per language, for example `src/content/posts/en/my-article.md`:

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

## Translation frontmatter

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

Keep **the same translationKey** in all 18 editions, but translate the title, description, and body, and give each edition a natural ASCII slug that is unique across the entire collection. Astro requires collection slugs to be globally unique even though public URLs include the language code. Add a short language suffix when two natural slugs would otherwise collide. Publication dates may differ. The site does not automatically translate content.

## Voice and editing

Write from a specific question, observation, example or argument. A short post is fine; it does not need a statement of philosophy at the beginning or a life lesson at the end.

- Keep first-person statements grounded in what the author has actually said or experienced. Never invent anecdotes, family details, quotations, spiritual experiences or claims of attainment to make a draft sound personal. Do not publish private conversation details without permission.
- Translate the meaning rather than the English sentence structure. Use familiar wording in each language and have a fluent reader review sensitive or literary prose. Keep technical or Buddhist terms where they add precision; explain them when readers need it.
- Cut repeated statements about being thoughtful, humble, useful or clear. Retain specific uncertainty, evidence and corrections. Do not add a slogan, rhetorical contrast or metaphor to every section.
- Interface text should explain the state or action: "Chưa có bài viết." is enough. Error messages and footers do not need life advice.

The site tagline is intentional. It need not be repeated at the end of articles. AI-assisted drafts require the author's review before publication; stylistic polish does not make an unsupported personal claim authentic.

## Publication rules

Change `draft` to `false` when ready. The publication date must have arrived at build time. Scheduled posts become visible on the next push or manual deployment after the date; there is no timer service. Drafts and future posts are excluded from HTML, RSS, Pagefind and language-switch targets.

Use `modDatetime` only for a meaningful revision. Do not change a published slug without adding a redirect. Every published `(lang, slug)` and `(lang, translationKey)` pair must be unique; duplicates fail the build.

The filename is organizational; `slug` determines the public URL. Slugs and tag identifiers use lowercase ASCII, numbers and hyphens, beginning with a letter. This avoids accidental collisions with pagination routes. Keep dates timezone-aware.

## Topics

Built-in topic identifiers: `technology`, `life`, `practice`. Their localized labels live in `src/i18n.ts`. Additional tag IDs work automatically; add translated labels there to avoid exposing raw identifiers.

## Check before publishing

Run `pnpm build && pnpm verify`, then `pnpm preview`. Check all 18 language routes, both themes, mobile width, and RTL behavior for Arabic, Urdu, and Persian. Test translation links, code blocks, diacritics, and external sources. Search needs the production build and includes published articles and the About page. Reading-time labels are approximate.

The two introductory articles are unpublished starter drafts, not imported historical writing. They duplicate the About page and do not need to be published. An empty article list is supported; do not publish placeholders just to satisfy a test or fill the homepage.

Keep private information out of the public repository, including drafts: **draft means unpublished on the website, not secret on GitHub**.

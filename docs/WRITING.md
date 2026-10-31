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

Write ordinary Markdown below the front matter. MDX is available when a genuine interactive explanation needs it. Do not use MDX merely for styling prose.

## Add a translation

Create `src/content/posts/vi/mot-quan-sat.md`:

```yaml
---
title: "Một quan sát hữu ích"
description: "Một câu rõ ràng về điều người đọc sẽ tìm thấy."
lang: vi
slug: mot-quan-sat-huu-ich
translationKey: useful-observation-2026
pubDatetime: 2026-10-31T09:00:00+07:00
draft: true
tags: [technology]
---
```

Keep **the same translationKey**, but translate the title, description, body and optionally the slug. Publication dates may differ. One published version does not force the other to publish. The site does not automatically translate content.

## Publication rules

Change `draft` to `false` when ready. The publication date must have arrived at build time. Scheduled posts become visible on the next push or manual deployment after the date; there is no timer service. Drafts and future posts are excluded from HTML, RSS, Pagefind and language-switch targets.

Use `modDatetime` only for a meaningful revision. Do not change a published slug without adding a redirect. Every published `(lang, slug)` and `(lang, translationKey)` pair must be unique; duplicates fail the build.

The filename is organizational; `slug` determines the public URL. Slugs and tag identifiers use lowercase ASCII, numbers and hyphens, beginning with a letter. This avoids accidental collisions with pagination routes. Keep dates timezone-aware.

## Topics

Built-in topic identifiers: `technology`, `life`, `practice`. Their English/Vietnamese labels live in `src/i18n.ts`. Additional tag IDs work automatically; add translated labels there to avoid exposing raw identifiers.

## Check before publishing

Run `pnpm build && pnpm verify`, then `pnpm preview`. Check the article in both themes and at mobile width. Test the translation link, code blocks, diacritics, and external sources. Search needs the production build. Reading-time labels are approximate.

The bilingual introduction and About pages are starter copy, not imported historical writing. Edit them in place as your voice develops. Keep private information out of the public repository, including drafts: **draft means unpublished on the website, not secret on GitHub**.

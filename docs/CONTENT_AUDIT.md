# Toward Less — content and translation audit

Updated 8 November 2026. This record is about **coverage and verifiable structure**, not a claim of native-speaker certification.

## Coverage

- **18 supported languages:** en, vi, zh, hi, es, ar, fr, bn, pt, id, ur, ja, ko, th, ms, ru, mr, fa.
- **18 published article families × 18 languages = 324 published editions.**
- **2 extra unpublished introductory drafts** (en and vi), intentionally excluded because they duplicate the About page.
- **326 Markdown files** in `src/content/posts/` at the time of this audit.
- Each group shares a `translationKey`; every edition has its own globally unique slug.

Published families:

| Theme | Article families |
| --- | --- |
| Life and practice | Perfect Days; The Dig; I want to read Proust; What is minimalism? (2022 archive); Time with children (2022 archive); HowToLiveBetter |
| Buddhist scholarship and practice | Hướng Đến Nhập Lưu; Pāli translation sources; Buddhist Textual Witnesses |
| Literature, memory, and culture | LitMundi; The Thread Seers; Saigon2Hanoi |
| Technology and research | AGENTOWNERS; ClawPing; DBA ESG thesis; Open Problem Lab; OpenAMP Foundry; Subvox |

## Editorial standard

**Lush in observation, lean in language.** Preserve specificity, nuance, counterarguments, and uncertainty. Cut marketing claims and empty inspiration. A project write-up must separate what exists from what is merely intended.

A **full translation** preserves substantive arguments, examples, caveats, links, and conclusions rather than summarizing the article. New translations were prepared with AI assistance. **They have not been certified by native-speaking human editors.** Completeness of files is not proof of literary or scholarly accuracy.

The two 2022 archive families are attributed to their original authors, The Minimalists and Ginny Yurich. The 75% parenting-time statistic remains an unverified claim and is visibly qualified. Source text and authorship must not be silently replaced with first-person writing by the site owner.

## Checks

`python3 scripts/verify_translations.py` checks 18-language coverage, slugs, shared translation groups, archive provenance, and core article structure. The existing site and browser checks cover rendering, internal links, canonical/hreflang, RSS, RTL and accessibility. **Human editorial review is still recommended**, especially for literary prose, Buddhist terms, and the three RTL languages.

For current deployment status, see the [GitHub Actions runs](https://github.com/streamentry/toward-less/actions).

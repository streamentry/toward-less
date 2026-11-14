# Toward Less — Four high-impact editorial essays

Date: 15 November 2026. Status: **written in English and Vietnamese on an editorial branch; not published**.

## Why these four

The current site has 80 published article families and already covers general productivity, mindfulness, attention, AI automation, the value of family time, and the finiteness of life. These four essays add distinct mechanisms and decision-relevant evidence without recycling those existing posts.

| Priority | Article family | Reader's useful decision | Evidence strength and boundary |
| --- | --- | --- | --- |
| 1 | Buy Back an Hour, Not Another Thing | Use resources to reclaim time, then protect it from re-filling | 2017 PNAS: cross-sectional n=6,271; short-term randomized within-person test n=60. No evidence that all outsourcing creates lasting happiness. |
| 2 | What Leaving the Feed Actually Changes | Test active control of algorithmic feeds without losing access to real news or relationships | Randomized Facebook study (2020) and Facebook/Instagram deactivation trials published Nov 2026. Effects are small averages, measured in US-election settings. |
| 3 | The Conversation You Didn't Start | Permit low-stakes connection rather than assuming it will be unwelcome | Randomized commuter experiments in 2014 and later London follow-up; effects describe short encounters, not long-term relationship outcomes. |
| 4 | Generosity Is Not a Happiness Hack | Give for the recipient's needs rather than treating kindness as a guaranteed emotional return | 2008 original randomized test n=46, registered 2020 replication with mixed findings, 2022 close replication n=133 without a significant effect on original primary measure. |

## Primary sources inspected

- Whillans, A. V., et al. (2017), **Buying time promotes happiness**, *PNAS*. https://doi.org/10.1073/pnas.1706541114
- Epley, N. & Schroeder, J. (2014), **Mistakenly seeking solitude**, *Journal of Experimental Psychology: General*. https://doi.org/10.1037/a0037323
- **Hello, stranger? Pleasant conversations are preceded by concerns about starting one** (published 2022), *Journal of Experimental Psychology: General*. https://doi.org/10.1037/xge0001118
- Allcott, H., et al. (2020), **The Welfare Effects of Social Media**, *American Economic Review*. https://doi.org/10.1257/aer.20190658
- Allcott, H., et al. (November 2026), **The Effect of Deactivating Facebook and Instagram on Users' Emotional State**, *American Economic Journal: Economic Policy*. https://doi.org/10.1257/pol.20240806
- Dunn, E. W., et al. (2008), **Spending money on others promotes happiness**, *Science*. https://doi.org/10.1126/science.1150952
- Aknin, L. B., et al. (2020), **Does spending money on others promote happiness? A registered replication report**, *Journal of Personality and Social Psychology*. https://doi.org/10.1037/pspa0000191
- Kim, et al. (2022), **Prosocial spending encourages happiness: A replication of the only experiment reported in Dunn, Aknin, and Norton (2008)**, *PLOS ONE*. https://doi.org/10.1371/journal.pone.0272434

## Editorial safeguards

1. Distinguish survey associations from randomized causal evidence.
2. Do not report standardized deviations as percentages. The 2026 social-media effects are 0.060 and 0.041 **standard deviations**, not 6% and 4.1%.
3. State limits and the strongest counterpoint close to the claim.
4. Do not represent the personal seven-day feed experiment, a single greeting, or the deliberate protection of bought-back time as a clinically tested intervention.
5. Do not claim giving always increases happiness: the close 2022 replication's original primary outcome was nonsignificant, while an additional measure showed a positive signal.
6. Keep illustrations generic. Do not invent first-person memoirs.

## Publication handoff

- Files live under `src/content/posts/{en,vi}/` with shared family `translationKey` values, unique slugs and complete research links.
- These files are intentionally **not merged into main**. The user requested research and writing, not publication.
- Before publishing, create substantive editions in the remaining 16 languages per family, ensure all 18 preserve every major claim, caveat and source, then run the site's build, verification and browser QA and confirm the GitHub Pages deployment.
- AI translations, if created, are not native-speaker reviewed by default. Do not claim otherwise.

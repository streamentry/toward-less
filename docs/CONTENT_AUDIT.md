# Toward Less — content and translation audit

Updated 11 November 2026. This record is about **coverage and verifiable structure**, not a claim of native-speaker certification.

## Coverage

- **18 supported languages:** en, vi, zh, hi, es, ar, fr, bn, pt, id, ur, ja, ko, th, ms, ru, mr, fa.
- **76 complete 18-language article families = 1,368 editions** in the current content tree (publication flags validated by CI).
- **2 extra unpublished introductory drafts** (en and vi), intentionally excluded because they duplicate the About page.
- **1,370 Markdown files** in `src/content/posts/` at the time of this audit.
- Each group shares a `translationKey`; every edition has its own globally unique slug.

Selected published families (not an exhaustive index):

| Theme | Article families |
| --- | --- |
| Life and practice | Fasting and arterial plaque (preclinical evidence); Five minutes of optimism; Seven games for child-led play (Dutch-inspired); Perfect Days; The Dig; ChatGPT and 90 days smoke-free; I want to read Proust; What is minimalism? (2022 archive); Time with children (2022 archive); HowToLiveBetter |
| Buddhist scholarship and practice | Hướng Đến Nhập Lưu; Pāli translation sources; Buddhist Textual Witnesses |
| Literature, memory, and culture | LitMundi; The Thread Seers; Saigon2Hanoi |
| Technology and research | Build what people actually use (Max Torchbearer); Ask AI before automating; AGENTOWNERS; ClawPing; DBA ESG thesis; Open Problem Lab; OpenAMP Foundry; Subvox |

The smoking-cessation account reflects its author's stated experience: smoking for more than ten years, repeated unsuccessful attempts, ChatGPT's introduction of Tabex/cytisine, and more than 90 smoke-free days as of 8 November 2026. It does not supply a dosing regimen, imply that AI is a clinician, or claim a single anecdote proves efficacy. Medical claims are cited to WHO and Cochrane.

The Dutch-inspired play essay offers seven suggested activities for roughly ages 4–10, including a finite digital game. Its exercises are not presented as validated interventions. The UNICEF 2026 ranking is descriptive rather than proof that Dutch parenting causes child well-being. The AAP and WHO sources support broad play, sleep, activity, and digital design guardrails, not the effectiveness of this exact seven-game selection.

The 2026 essay `Ask AI before automating` is an original editorial response inspired by a screenshot attributed to Prompter (@PromptLLM) on X. The account's X profile is linked; the specific original post URL has not been verified. This short article argues for questioning unnecessary work before automating it and explicitly notes that AI proposals require real-world validation.

The 2026 fasting/arterial-plaque article draws on Feng et al. (2026), a genetically susceptible mouse model with supporting cell experiments and human-genetics analyses. The article distinguishes the reported mouse plaque regression from unproven human plaque regression; similar endpoint lipids do not establish full lipid independence; human clinical outcomes and established LDL-lowering care are not displaced. It cites the 2026 ACC/AHA dyslipidemia guidance, ACC nutrition statement, and Cochrane review. No fasting prescription is provided.

The 2026 article `Build what people actually use` credits and links Max Torchbearer's original X article (status `2119539599311782088`) in all 18 versions. Its three sections distinguish willingness to trade time from praise, the need to reduce first-use barriers, and the difference between automation for task completion versus automation that undermines skill learning. The author's original text was supplied by the user; X could not be fetched independently at publication time.

## Editorial standard

**Lush in observation, lean in language.** Preserve specificity, nuance, counterarguments, and uncertainty. Cut marketing claims and empty inspiration. A project write-up must separate what exists from what is merely intended.

The writing guide now asks each post to state its objective, lead with its central claim, use plain language and scannable bullets where useful, and place evidence and its limits beside the claims they support. The following 29 families received concise revisions in all 18 editions: `Agents That Ship Without You`, `The Wrong Version of Yourself`, `The Rope Dancer`, `Knowing More Advice Is Not Living Better`, `What Free Work Buys`, `You Are the Loop`, `The Crow Question`, `When Every Story Ends in a Lecture`, `Twice the Hazard, Half the Story`, `Four to Seven Times a Week`, `The Wrong Brain Scan`, `Change the Person, Not the Plan`, `Stop Caring, Carefully`, `Two to Three Cups`, `Five Pillars, One Missing Piece`, `Imagine It First`, `Twelve Percent, in Mice`, `Collagen Is Not a Fast`, `Sixty Minutes Undoes Eight Hours`, `The Blank Page`, `Four Pillars, Counted`, `Ask Directly`, `The Third Finger`, `Forty-Two Minutes of Bright`, `A Review Is Not a Result`, `Actually Easy`, `Call Yourself by Name`, `The Price of Avoidance`, and `Cut the Stones`. These edits are AI-assisted and have not had native-speaker review. The linked X source pages for the source-inspired essays were not retrievable during this pass; their attributions and status IDs remain in the articles, direct quotations were removed where they could not be rechecked, and unverifiable figures are identified as self-reported. The HowToLiveBetter README, VnExpress profile, Nietzsche text, crow behavior, adolescent-development and screen-use claims, statin and sauna studies, walking study, brain-image source, ashwagandha evidence and safety sources, the JAMA coffee-and-dementia study, the Meevissen et al. best-possible-self paper, Singh et al.'s taurine animal study, the later human taurine studies, the TauAge trial registry, the glycine aging review, the ITP mouse study, the 2026 animal study, the UK Biobank analysis, the GlyNAC clinical trial, the 2016, 2020, and 2026 sitting-activity meta-analyses, Zheng et al.’s 2026 light-exposure cohort, the linked ScienceAlert report, the NORC GSS cumulative file and codebook, Flynn and Lake’s 2008 help-seeking study, Alanazi et al.’s 2026 Fitoterapia review abstract and PubMed record (publisher full text unavailable), Paul Graham’s original determination essay, Kross et al.’s 2014 self-talk paper and full text, Krypotos et al.’s avoidance-learning review, Jamieson, Nock, and Mendes’s 2012 stress-reappraisal experiment, and Jamieson et al.’s 2010 GRE experiment were checked against the primary sources and data cited in the articles. For `Actually Easy`, the official Imagination in Action schedule, McKinsey’s 2026 survey, and Gartner’s June 2025 forecast were checked directly. The Forbes article redirected to an automated check; its indexed text supplied the reported quote, and the panel recording was not verified. The Hux X post about McAfee (status 2119043938225189102) could not be reloaded in this pass; the attached video was not transcribed, so the attribution remains unverified.

A **full translation** preserves substantive arguments, examples, caveats, links, and conclusions rather than summarizing the article. New translations were prepared with AI assistance. **They have not been certified by native-speaking human editors.** Completeness of files is not proof of literary or scholarly accuracy.

The two 2022 archive families are attributed to their original authors, The Minimalists and Ginny Yurich. The 75% parenting-time statistic remains an unverified claim and is visibly qualified. Source text and authorship must not be silently replaced with first-person writing by the site owner.

## Checks

`python3 scripts/verify_translations.py` checks 18-language coverage, slugs, shared translation groups, archive provenance, and core article structure. The existing site and browser checks cover rendering, internal links, canonical/hreflang, RSS, RTL and accessibility. **Human editorial review is still recommended**, especially for literary prose, Buddhist terms, and the three RTL languages.

For current deployment status, see the [GitHub Actions runs](https://github.com/streamentry/toward-less/actions).

---
title: "Synthetic Customers Are Not Real Customers"
description: "What Colgate's semantic similarity research can and cannot tell us about purchase intent."
lang: en
slug: synthetic-customers-are-not-real-customers-en
translationKey: synthetic-customers-ssr-2026
pubDatetime: 2026-11-22T12:00:00+07:00
draft: false
featured: false
tags: [life]
---

A viral claim says Colgate has made market research obsolete. The underlying idea is more useful—and less dramatic—than that.

Researchers associated with Colgate-Palmolive and PyMC Labs studied **Semantic Similarity Rating (SSR)**, a way to turn language-model responses into survey-style ratings. Instead of directly asking an AI to choose a number on a Likert scale, the method asks for a written reaction and then measures how semantically close it is to descriptions of different ratings.

That change matters. Language models often have awkward numerical response habits. Letting them respond in natural language first can produce ratings that better resemble the patterns in human surveys.

## What the study actually tested

The reported evaluation covered **57 personal-care concept surveys and about 9,300 human responses**. The authors reported performance reaching roughly **90% of human test–retest reliability** under their evaluation approach.

That is *not* the same as predicting 90% of real purchases correctly. Test–retest reliability concerns how consistently survey responses can be reproduced. The research focuses on **stated purchase intent**, not observed checkout behavior.

The striking part is not that a model has become a human consumer. It is that a carefully designed elicitation and scoring method may help approximate some patterns of human survey answers.

## Three different questions

1. **Would someone say they like this concept?** Synthetic survey methods may help estimate patterns in answers.
2. **Would someone spend money on it?** A hypothetical rating cannot establish this.
3. **Will the business succeed?** That also depends on discovery, distribution, competition, trust, repeat use and unit economics.

Confusing these questions is how a useful tool turns into an expensive illusion.

## The hidden problem with 1,000 AI interviews

A thousand generated personas are not necessarily a thousand independent observations. They may share the same training-data assumptions and model biases. Demographic prompts can also reproduce stereotypes rather than real subgroup behavior. More synthetic responses do not automatically reduce systematic error.

And if a model is asked to evaluate a novel product that changes behavior, there may be little reliable historical pattern to imitate.

## A better use of synthetic research

Use SSR as a **cheap filter before spending money**, not as the final evidence of demand.

Generate competing concepts and messages. Use synthetic reactions to uncover unclear language, possible objections and hypotheses about different customer segments. Then put the strongest options in front of actual people.

A practical validation sequence:

- Ask the model to rank ten concepts, while recording its assumptions.
- Conduct a small blinded human survey on the same concepts.
- Run a landing-page or paid-pilot experiment to measure actual commitment.
- Compare which approach best predicts the observed behavior—not merely which produces the most persuasive explanation.

If synthetic scores repeatedly predict real-world results on new concepts, increase their role. If they don't, treat them as brainstorming material.

**The future of market research may use fewer low-value surveys. It still needs contact with reality.**

---

*Research discussed: “LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings” (2025), [arXiv:2510.08338](https://arxiv.org/abs/2510.08338). The paper's findings concern its tested concepts, populations and metrics; claims of perfect demographic-price prediction or replacement of the entire research industry are not established.*

---
title: "Fix What You're Sure About"
description: "Alex Albert runs the same prompt on every project whenever a new model arrives: read the whole project, find everything broken, inconsistent, inefficient, or no longer needed, fix what you're sure about, and list the rest for review. The prompt is good — and the load-bearing half is the list, not the fixes."
author: "C.S Chánh Niệm"
lang: en
slug: fix-what-youre-sure-about-en
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Every time a new model arrives, Alex Albert runs the same prompt on all his projects: read this entire project and find everything that's broken, inconsistent, inefficient, or no longer needed. Fix what you're sure about and list the rest for me to review. Highly recommend trying.

It is a good prompt, and the reason it is good is not the fixing. It is the split. The prompt divides the work into two halves — what the model may change on its own, and what it must bring back for a human to decide — and the second half is the one that makes the first half safe. Most agent prompts fail because they give the model one job, "fix it," with no boundary. This one draws the boundary inside the instruction itself.

The prompt also points the model at the right kind of work. Building is the glamorous use of an agent; maintenance is the reliable one. Finding dead code, inconsistent naming, duplicated logic, and things no longer needed is bounded work with reviewable diffs. A wrong deletion shows up in a diff. A wrong feature shows up in production. Albert's prompt treats the model as a janitor with a checklist, which is the role agents are actually good at, and it asks for the checklist back.

But the prompt has three soft spots, and they are worth naming before you run it.

First, "fix what you're sure about." A model's confidence is not calibrated. Models are confidently wrong about exactly the things that look most certain to them — a plausible-looking fix to a subtle bug, a "simplification" that removes a load-bearing special case. The prompt's safety depends on the model knowing what it is sure about, and that is the one thing it cannot reliably know. The list-for-review half is the load-bearing half precisely because the fixing half cannot be trusted to police itself.

Second, "read this entire project." On a small project, the model can. On a large one, it cannot — context limits mean it samples, and it will not tell you it sampled. The prompt works best where the project fits in the window, and silently degrades where it doesn't. If your project is big, the honest version of the prompt names the parts to read.

Third, the prompt collapses four different judgments into one instruction: broken, inconsistent, inefficient, no longer needed. Those are correctness, consistency, performance, and dead code — four different kinds of seeing. A model will find the easy ones — dead code, style drift — and miss the hard ones: the subtle bug, the architectural inconsistency that only shows up across three files. One prompt, four jobs, and the model will do the two it is good at and report the others as done.

This blog ran something very close to Albert's prompt, by hand, on itself. An audit of the implicit state machines in Toward Less found thirteen live ones and four phantoms: two different definitions of "published," theme logic duplicated in two places, language detection duplicated with a dead function, pagination links pointing at pages that did not exist. Every one of those is exactly what Albert's prompt asks for — inconsistent, inefficient, no longer needed — and every one of them was found by reading the whole project and listing what was wrong before fixing it. The list came first. The fixes followed, in a clean clone, and were verified before anything was pushed.

So try the prompt. But run it for the list, not for the fixes. Read the list yourself, check the fixes it made against the list it returned, and remember that "I'm sure about this" is a sentence a model will say about almost anything. The prompt is good because it keeps a human in the loop. The loop is the point.

*Inspired by the X post ["Every time we have a new model, I run the same simple prompt on all my projects: 'Read this entire project and find everything that's broken, inconsistent, inefficient, or no longer needed. Fix what you're sure about and list the rest for me to review.' highly recommend trying"](https://x.com/alexalbert__/status/2119884951550386671) by [Alex Albert (@alexalbert__)](https://x.com/alexalbert__/status/2119884951550386671). The post was verified on 10 November 2026: 3:08 AM, 10 Nov 2026, 61.5K views. Alex Albert is Research at Anthropic. The Toward Less state-machines audit mentioned in this post is the blog's own audit of 8 November 2026, saved at workspace/toward-less/audit/implicit-state-machines-audit.md.*

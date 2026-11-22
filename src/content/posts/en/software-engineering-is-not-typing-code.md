---
title: "Software Engineering Is Not Typing Code"
description: "AI makes code easier to produce. The engineering responsibility to choose, verify, and maintain what matters remains."
lang: en
slug: software-engineering-is-not-typing-code
translationKey: software-engineering-is-not-typing-code-2026
pubDatetime: 2026-11-22T12:00:00+07:00
draft: false
featured: false
tags: [technology, work]
---

A developer on Reddit put it sharply: “You are a software engineer, you engineer software, you are not a code monkey.” If AI can now write much of the code, perhaps the job has simply moved up one layer of abstraction.

There is truth in that argument. There is also a dangerous simplification.

**Writing code was never the whole job. But knowing what the code does was never optional.**

## The tool was never the purpose

Most programmers do not write compilers, design CPUs, or manage silicon fabrication. They rely on abstractions built by others. Libraries replaced repeated implementation. High-level languages replaced much manual machine-level work. We call that progress because it lets people solve larger problems with less effort.

AI can be another such layer. Instead of manually constructing each function, an engineer can describe desired behavior, inspect a proposed implementation, test it, and iterate. Faster implementation may open the door to projects previously too expensive to attempt.

But generating code is not the same as engineering software. The latter means discovering a real need, translating it into requirements, understanding constraints, designing failure modes, and maintaining a system people can trust.

## The abstraction analogy has a limit

A compiler offers comparatively stable rules. Given the same source, toolchain, and settings, its behavior is generally reproducible. An AI assistant can generate plausible but incorrect code, misread an unstated requirement, or introduce a security flaw while confidently claiming success.

That does not make AI useless. It changes where diligence belongs.

As we delegate more implementation, we need stronger specifications, smaller reviewable changes, automated tests, security checks, observability, and a clear person accountable for production behavior. Tests themselves can be wrong. An AI-written test agreeing with AI-written code is not independent evidence that the requirement was right.

**An abstraction is useful when it hides unnecessary complexity without hiding failures we still need to understand.**

## The strongest objection: people will lose work

Comparing AI to a miner's drill overlooks what mechanization did to workers whose skills and bargaining power changed. Greater productivity does not guarantee that every engineer benefits. Some jobs may shrink, entry-level learning paths may weaken, and employers may capture a disproportionate share of the gains.

These are legitimate concerns, not mere ego. Calling anxious developers “code monkeys” avoids the difficult questions of employment, training, compensation, and responsibility.

At the same time, refusing to use better tools because we worked hard to learn old ones is another form of attachment. Time invested in a skill does not make its current workflow sacred.

## What remains scarce

The value of an engineer increasingly comes from questions that cannot be solved by generating another thousand lines:

- **What should exist?** Is there a real user problem, and is software the right intervention?
- **What must be true?** Which behaviors, trade-offs, privacy guarantees, and failure limits are acceptable?
- **How will we know?** Can the result be independently tested against reality?
- **Who owns the consequence?** When the system fails, who diagnoses, repairs, and learns?

These questions have always mattered. AI makes neglecting them cheaper and faster—which can make the consequences worse.

## Don't cling to code. Don't worship AI.

There is an ego trap on both sides. One person confuses personal worth with the ability to type code. Another confuses progress with whatever the newest model produces. Both let a tool become an identity.

A good engineer remains curious about lower layers even when higher layers do most of the work. They can explain the system's assumptions, identify where it breaks, and change course when evidence demands it.

A small practical test: give an AI a real task with explicit acceptance criteria. Before merging, ask whether another engineer could reproduce the tests, understand the failure modes, and safely operate the change. If not, the code may be finished, but the engineering is not.

**The goal is not to write more code, or even less code. It is to create software worth using—and take responsibility for what we put into the world.**

### Source note

Inspired by a Reddit comment by *ConcerningThirst* supplied as a screenshot. The mining analogy and the claim that AI is simply a better abstraction are interpretations in the comment, not independently verified empirical claims. This essay analyzes the argument rather than endorsing its insults.

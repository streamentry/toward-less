---
title: "You Are the Loop"
description: "Levels 0–7 can help diagnose coding-agent systems, but they are neither a universal model nor a required path to autonomy."
author: "C.S Chánh Niệm"
lang: en
slug: you-are-the-loop-en
translationKey: harness-loops-graphs-2026
pubDatetime: 2026-11-10T05:31:00+07:00
draft: false
featured: false
tags: [technology]
---
m4lka’s X Article describes coding-agent systems in levels 0–7: eight stages when counted from zero. The model separates functions that teams often merge:

- 0, chat: a person coordinates every step.
- 1, harness: the model gets tools and file access.
- 2, state and permissions: memory persists and boundaries are enforced.
- 3, check loop: a test can fail; “the model says it is done” is not a check.
- 4, feedback: retries are bounded and repeated failures escalate.
- 5, graph: real dependencies are explicit.
- 6, gates and return paths: keep passed work fixed; rerun only failures.
- 7, learning: failures create constraints for the layer responsible.

This is a design model for software agents, not an empirically validated scale. Tests and builds can be repeatable; writing, design, and negotiation often rely on judgment without a deterministic test.

The levels are diagnostic, not mandatory. A low-cost, one-off task may need only chat. Teams can design a useful check before building the full harness. Add layers when the cost of failure justifies the effort. Gating work by the cost of undo is a heuristic, not a law.

The final level also has a measurement problem: “the same class of failure” depends on how people group failures after they happen. Define categories in advance and track whether repeated failures cost less over time.

The model helps organize coding-agent design. It does not prove that agents can work without supervision or that every task needs every layer.

Source: m4lka, [“Harness, Loops, Graphs: What Each Layer Fixes and What It Breaks,” X Article, 25 October 2026 (status 2114338456750997922)](https://x.com/m4lkxx/status/2114338456750997922). The X page could not be reloaded for this revision; direct quotations were omitted.

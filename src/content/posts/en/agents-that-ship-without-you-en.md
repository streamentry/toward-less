---
title: "Agents That Ship Without You"
description: "The agent is not the system. The spec, the small tasks, and the harness are."
author: "C.S Chánh Niệm"
lang: en
slug: agents-that-ship-without-you-en
translationKey: agents-that-ship-without-you-2026
pubDatetime: 2026-11-08T23:00:00+07:00
draft: false
featured: false
tags: [technology]
---

In a post on X, shikamaru (@shikamarutsai) shares a 41-minute workshop by Addy Osmani, an Anthropic engineer formerly at Google. The line quoted from Osmani is blunt: "Google hired me at $500K–$1.2M a year because I know how to make AI agents write code that doesn't break."

The workshop's answer is not a better prompt. It is a harness, in five steps: refine the idea, write the spec, plan in small tasks, build test-first, then verify and review.

Step one: drop in a vague thought, and the agent interviews you, coming back with three directions. Step two: lock the success criteria, the stack, and the open questions before a single line of code. Step three: break the work into small tasks, each with acceptance criteria and a list of files it is allowed to touch. Step four: build test-first, red to green, slice by slice, so nothing that already works breaks. Step five: verify and review — the agent opens the app in a browser, checks security, and simplifies its own code.

The post says Osmani open-sourced all 24 skills, and the repo is close to 100K stars. Google, it says, calls this "agentic engineering." The post quotes a companion piece by @beamnxw, "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup" — save progress, verify results, reuse the workflow, so a long run leaves something you can open, evidence you can inspect, and enough saved progress to continue tomorrow.

Notice where the work moved. Not into watching the agent, but into what happens before it starts: the interview, the spec, the small task with its boundary drawn. An agent that can touch only named files, that must pass a test before moving on, that must save its progress — that agent can be left alone. One with no boundary cannot.

That is the same lesson as naming state machines: the freedom that works is bounded freedom. The harness is the list of modes the run is allowed to be in, and the evidence it must produce to move between them.

It is worth not overselling it. "You don't have to" spend weeks building this by hand — but the harness is itself weeks of judgment, compressed into 24 skills and a checklist. An agent that checks its own security and simplifies its own code still needs someone outside the run to read the evidence. Saved progress is only useful if it is actually inspected, and "verify and review" is a step, not a guarantee.

The promise is narrower than the pitch, and better for it: less watching, less attachment to the run itself. Put the care into the setup — the spec, the small task, the saved state — and then let go.

**The agent is not the system. The harness is.**

*Inspired by a post from [shikamaru (@shikamarutsai)](https://x.com/shikamarutsai/status/2119197676415877128) on X, about Addy Osmani's workshop on agentic engineering, quoting @beamnxw's "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup." The post was verified on 8 November 2026: 5:37 AM, 8 November 2026.*

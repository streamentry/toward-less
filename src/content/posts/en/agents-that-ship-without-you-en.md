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
An X post by shikamaru describes a workshop by Addy Osmani on building coding agents that produce reliable code. The central idea is a harness around the agent:

- Clarify the goal and define what success looks like.
- Write a spec with the tech stack, acceptance criteria, and open questions.
- Split the work into small tasks with clear file boundaries and completion checks.
- Build in small slices, testing as you go.
- Open the result in a browser, review security, and inspect the changes.

This moves effort to the start and end of a run. The agent gets bounded work; the person responsible gets evidence to review. Explicit boundaries make the run easier to supervise, but they do not make the agent reliable by themselves.

A harness takes time and judgment to build. Passing tests do not prove that code is correct or secure, and an agent's own security review is not independent. A person still needs to inspect the changes and evidence before shipping.

The aim is not zero oversight. It is a run you can inspect, resume, and stop.

Source: [shikamaru (@shikamarutsai), X post, 8 November 2026 (status 2119197676415877128)](https://x.com/shikamarutsai/status/2119197676415877128), about Addy Osmani's workshop on agentic engineering.

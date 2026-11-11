---
title: "List Before You Fix"
description: "An audit prompt can find maintenance issues, but uncertain edits still need human review."
author: "C.S Chánh Niệm"
lang: en
slug: fix-what-youre-sure-about-en
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

This article shows how to use an AI audit prompt to find maintenance issues while keeping uncertain changes under human review.

On 9 November 2026, Alex Albert shared a prompt he uses when a new model arrives: inspect a project, find what is broken or unnecessary, fix what seems clear, and list the rest for review. Its useful feature is the boundary between edits and decisions.

## Three limits

- **Confidence is not evidence.** The key instruction is: “Fix what you’re sure about and list the rest for me to review.” That boundary helps, but confidence alone does not justify a change. Ask for the relevant files, tests, and reason before accepting a fix.
- **“The entire project” needs a coverage report.** Ask the agent to list what it read and what it skipped. A broad request does not prove that every file was reviewed.
- **Different findings need different checks.** A bug fix needs tests; a performance claim needs measurements; a deletion needs proof that the code is unused; a style change needs a clear project convention.

## A safer workflow

- Ask for a prioritized list of findings with file paths and supporting evidence before making changes.
- Allow only small, mechanical edits that do not change behavior.
- Send deletions, behavior changes, cross-file refactors, and uncertain findings back for approval.
- Review the diff against the list, then run the project’s checks.

Use the prompt to create a review queue, not to hand the agent unlimited authority. The review list—not the model’s confidence—is the boundary.

*Source: Alex Albert (@alexalbert__), [X post 2119884951550386671](https://x.com/alexalbert__/status/2119884951550386671), 9 November 2026. X returned 403 during this edit; the text was checked against a [Teapawt mirror of Albert’s account timeline](https://teapawt.org/alexalbert__). The mirror is a secondary copy.*

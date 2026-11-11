---
title: "AGENTOWNERS: repository policy for AI agents"
description: "What AGENTOWNERS decides, what it cannot control, and why it remains pre-release."
lang: en
slug: agentowners-repository-policy-en
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS answers one question: may an AI agent take this repository action under the checked-in policy? Its README describes a deterministic rules engine, not an AI reviewer or runtime sandbox.

## What it decides

- Reads a versioned YAML policy, detects agent signals, classifies changed paths, and infers actions.
- Resolves conflicts in this order: block, require approval, allow. Unknown agents require approval by default; workflow and secret-file changes are blocked by default.
- The same policy and inputs produce the same verdict. The engine makes no model or hosted policy API calls.

## What it cannot control

AGENTOWNERS governs contributions at the repository boundary. It does not intercept model or tool calls elsewhere, isolate code execution, or judge code correctness.

## Current status

The project is pre-release: npm packages and the stable v0 GitHub Action are not published. The README says to evaluate from source and not pin a production workflow to main.

## Source

[AGENTOWNERS README](https://github.com/streamentry/AGENTOWNERS#readme), checked November 11, 2026.

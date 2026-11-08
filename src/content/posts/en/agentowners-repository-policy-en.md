---
title: "AGENTOWNERS: repository policy for AI agents"
description: "A deterministic policy layer for deciding which repository actions agents may take."
lang: en
slug: agentowners-repository-policy-en
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

An agent guide explains how an agent should work. It cannot enforce what the agent is allowed to do. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) adds deterministic repository policy in a versioned YAML file.

The engine detects agent signals, classifies changed paths, infers actions, and applies rules in a fixed order: block, require approval, allow. Unknown agents need approval by default; workflow and secret-file changes are blocked. The core uses no model or external policy service. The project is pre-release: npm packages and a stable v0 Action are not published. Repository policy is not a runtime sandbox.

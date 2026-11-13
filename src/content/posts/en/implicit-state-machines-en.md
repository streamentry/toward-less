---
title: "Find the State Machines Hiding in Your App"
description: "Use AI to map state hidden in flags, then verify the code and decide what needs an explicit model."
author: "C.S Chánh Niệm"
lang: en
slug: implicit-state-machines-en
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

Most apps keep state in scattered flags: loading, error, editing, signed in. Together, they can allow combinations nobody intended, such as loading and error at once.

Steve Ruiz’s X post suggested asking an agent to find these implicit state machines. Treat the output as candidates to check, not as facts. [1]

For each candidate, ask the agent to show:

- the files and variables that represent it;
- the states and transitions the code allows;
- combinations that should be impossible, with the code that permits them.

Check each claim in the repository. Some flags are independent and need no formal model. Make a state machine explicit when states interact, multiply, cause bugs, or leave maintainers unsure what the feature can do. A diagram helps only when it clarifies those rules.

Let the agent propose a map; let the code confirm it.

### Source

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

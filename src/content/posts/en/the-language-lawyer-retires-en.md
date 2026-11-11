---
title: "Use Agents, but Keep the Ability to Review"
description: "Delegate language details, but keep enough understanding to judge the system an agent builds."
author: "C.S Chánh Niệm"
lang: en
slug: the-language-lawyer-retires-en
translationKey: the-language-lawyer-retires-2026
pubDatetime: 2026-11-09T00:28:00+07:00
modDatetime: 2026-11-11T13:14:00+07:00
draft: false
featured: false
tags: [technology]
---
Robert C. Martin (Uncle Bob) says he once studied C++ deeply as a “language lawyer.” In a 6 November 2026 post, he argues that agents can handle language details while he focuses on a system’s overall structure. When he needs a lower-level explanation, he asks an agent.

Uudon’s Chinese post two days later makes a broader claim: developers no longer need to understand programming languages deeply. That is Uudon’s interpretation, not the full position Martin states in his post.

The case for Martin’s shift is strong: agents can look up syntax and explain unfamiliar code, leaving more time for system behavior. But language knowledge can include more than syntax: types, memory, interfaces, and edge cases can affect whether software works. An agent’s explanation also needs review. This is a practical judgment, not a finding in Martin’s post.

You need not memorize every language. You need enough understanding to judge the relevant code and evidence.

- State expected behavior and key constraints before delegating.
- Check the relevant change and ask what the tests do not cover.
- If you cannot judge an explanation, learn that part or ask another reviewer.

Delegation may reduce the time spent learning syntax. It does not remove the need to understand and take responsibility for what ships.

## Sources

- Robert C. Martin (@unclebobmartin), “I used to be a language lawyer,” X post, 6 November 2026, [status 2118695884154110305](https://x.com/unclebobmartin/status/2118695884154110305).
- Uudon (@uudonX), Chinese post summarizing Martin’s claim, 8 November 2026, [status 2119243980634530096](https://x.com/uudonX/status/2119243980634530096). X returned 403 during review; both full texts were checked in [Teapawt’s copy of Martin’s post](https://teapaw.org/unclebobmartin) and [a repost containing Uudon’s post](https://teapawt.net/orexinsystem). This essay paraphrases both and distinguishes Uudon’s summary from Martin’s wording.

---
title: "使用智能体，也要保留足够的理解来审查"
description: "可以让智能体处理语言细节，但仍要懂到能判断它构建的系统。"
author: "C.S Chánh Niệm"
lang: zh
slug: yuyan-lvshi-tuixiu-zh
translationKey: the-language-lawyer-retires-2026
pubDatetime: 2026-11-09T00:28:00+07:00
modDatetime: 2026-11-11T13:14:00+07:00
draft: false
featured: false
tags: [technology]
---
Robert C. Martin（Uncle Bob）说，他过去曾深入学习 C++，自称是“language lawyer”。在 2026 年 11 月 6 日的 X 帖子中，他认为智能体可以处理语言细节，让自己专注于系统整体结构。需要理解底层细节时，他会询问智能体。

两天后，Uudon 的中文帖子把这一观点概括得更宽：开发者不再需要深入理解编程语言。这是 Uudon 的解读，并非 Martin 帖子的完整立场。

Martin 的做法有现实理由：智能体能查语法、解释陌生代码，让人把更多时间放在系统行为上。但语言知识不止语法；类型、内存、接口和边界情况都会影响软件是否正常工作。智能体的解释也需要审查。这是实践判断，不是 Martin 帖子里的研究结论。

你不必记住每种语言，但需要足够理解相关代码和证据。

- 委托前说明预期行为和关键约束。
- 检查相关改动，并问测试没有覆盖什么。
- 如果无法判断一段解释，就补上相关知识或请另一位审查者帮忙。

委托可以减少学习语法所花的时间，却不能免除理解和承担发布结果责任的需要。

## 来源

- Robert C. Martin（@unclebobmartin），“I used to be a language lawyer”，X 帖子，2026 年 11 月 6 日，[status 2118695884154110305](https://x.com/unclebobmartin/status/2118695884154110305)。
- Uudon（@uudonX）对 Martin 观点的中文总结，2026 年 11 月 8 日，[status 2119243980634530096](https://x.com/uudonX/status/2119243980634530096)。本次审阅时 X 返回 403；两篇全文通过 [Teapawt 上 Martin 帖子的副本](https://teapaw.org/unclebobmartin)和[包含 Uudon 帖子的转发副本](https://teapawt.net/orexinsystem)核对。本文转述两篇内容，并区分 Uudon 的概括与 Martin 的原话。

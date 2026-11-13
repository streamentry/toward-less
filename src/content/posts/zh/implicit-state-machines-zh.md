---
title: "找出藏在你的应用里的状态机"
description: "用 AI 梳理标志位中隐藏的状态，再核对代码并判断哪些需要明确建模。"
author: "C.S Chánh Niệm"
lang: zh
slug: implicit-state-machines-zh
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

许多应用把状态分散存放在标志位中：加载、出错、编辑、已登录。它们组合后可能形成没人预期的情况，例如加载和出错同时为真。

Steve Ruiz 的 X 帖子建议让智能体寻找这些隐式状态机。把输出当作待核实的候选项，而不是事实。[1]

对每个候选项，要求智能体给出：

- 相关文件和代表状态的变量；
- 代码允许的状态及其转换；
- 哪些组合本不该出现，以及哪些代码仍允许它们出现。

到仓库中逐项核对。有些标志彼此独立，不需要正式建模。只有当状态互相影响、组合不断增加、引发错误，或让维护者看不清功能边界时，才值得明确写出状态机。图表只有在能澄清规则时才有用。

让智能体提出状态图，再让代码验证它。

### 来源

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

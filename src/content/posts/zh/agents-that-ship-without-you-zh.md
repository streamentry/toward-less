---
title: "无需你在场也能交付的 Agent"
description: "Agent 不是系统。规格、小任务和脚手架才是。"
author: "C.S Chánh Niệm"
lang: zh
slug: zi-xing-jiao-fu-de-agent-zh
translationKey: agents-that-ship-without-you-2026
pubDatetime: 2026-11-08T23:00:00+07:00
draft: false
featured: false
tags: [technology]
---

在 X 上的一篇帖子中，shikamaru（@shikamarutsai）分享了 Addy Osmani 的一场 41 分钟工作坊。Osmani 是 Anthropic 的工程师，此前在 Google 工作。他引用的那句话很直接：“Google 以每年 $500K–$1.2M 的薪水雇我，因为我懂得如何让 AI agent 写出不会出问题的代码。”

这场工作坊给出的答案不是一个更好的提示词，而是一个脚手架（harness），分五步：打磨想法、写出规格、拆成小任务、测试先行，最后验证与复查。

第一步：丢进一个模糊的想法，agent 会向你提问，然后带着三个方向回来。第二步：在写一行代码之前，锁定成功标准、技术栈和悬而未决的问题。第三步：把工作拆成小任务，每个任务都有验收标准和一份它可以触碰的文件清单。第四步：测试先行，从红到绿，一片一片地构建，这样已经能用的东西不会被破坏。第五步：验证与复查——agent 在浏览器中打开应用，检查安全性，并简化自己的代码。

帖子说，Osmani 开源了全部 24 个 skills，该仓库已接近 100K stars。帖子说，Google 把这种做法称为“agentic engineering”。帖子还引用了 @beamnxw 的一篇配套文章《Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup》——保存进度、验证结果、复用工作流，这样一次长时间运行之后，会留下可以打开的东西、可以检查的证据，以及足够继续到明天的已保存进度。

注意工作转移到了哪里。不是转移到盯着 agent，而是转移到它开始之前发生的事：访谈、规格、边界已划好的小任务。一个只能触碰指定文件的 agent，一个必须通过测试才能继续的 agent，一个必须保存进度的 agent——这样的 agent 可以独自留着不管。没有边界的 agent 则不行。

这与给状态机命名的道理相同：真正起作用的自由是有边界的自由。脚手架就是这次运行被允许处于的模式清单，以及它要在模式之间移动时必须拿出的证据。

值得注意的是不要把它说得过头。“你不必”花几周时间亲手搭建这一切——但脚手架本身就是几周的判断，压缩进了 24 个 skills 和一张清单。一个会自查安全性、会简化自己代码的 agent，仍然需要运行之外的人来阅读证据。已保存的进度只有在真正被检查时才有用，而“验证与复查”是一个步骤，不是一项保证。

这个承诺比宣传的要窄，也正因此更好：少盯着，少执着于运行本身。把心力放在准备工作上——规格、小任务、已保存的状态——然后放手。

**Agent 不是系统。脚手架才是。**

*灵感来自 [shikamaru（@shikamarutsai）](https://x.com/shikamarutsai/status/2119197676415877128) 在 X 上的一篇帖子，内容是 Addy Osmani 关于 agentic engineering 的工作坊，引用了 @beamnxw 的《Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup》。该帖子已于 2026 年 11 月 8 日核实：2026 年 11 月 8 日上午 5:37。*

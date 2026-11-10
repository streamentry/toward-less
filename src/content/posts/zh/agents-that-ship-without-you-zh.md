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
shikamaru 在 X 上介绍了 Addy Osmani 关于构建可靠编程代理的工作坊。核心不是寻找更好的提示词，而是在代理周围建立一套可检查的流程：

- 先说明目标和成功标准。
- 写明技术栈、验收标准和未解决的问题。
- 把工作拆成小任务，明确可改文件和完成条件。
- 分小步构建，并持续测试。
- 在浏览器中检查结果、审查安全性并查看代码改动。

这样会把工作放在运行开始前和结束后：代理只处理边界明确的任务，负责人则有证据可审查。清楚的边界有助于监督，但本身不能保证代理可靠。

搭建这套流程需要时间和判断。测试通过不等于代码正确或安全，代理自己的安全审查也不独立。发布前仍需有人检查改动和证据。

目标不是完全取消监督，而是让每次运行都能检查、续接或停止。

来源：[shikamaru（@shikamarutsai）于 2026 年 11 月 8 日发布的 X 帖文（状态编号 2119197676415877128）](https://x.com/shikamarutsai/status/2119197676415877128)，内容介绍了 Addy Osmani 关于 agentic engineering 的工作坊。

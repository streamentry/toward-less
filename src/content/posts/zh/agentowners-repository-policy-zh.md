---
title: "AGENTOWNERS：为 AI agent 制定仓库政策"
description: "用确定性规则约束 AI agent 在代码仓库中的操作。"
lang: zh
slug: agentowners-repository-policy-zh
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Agent 指南说明 agent 应该如何工作，却不能强制规定它有权做什么。[AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) 将可执行的仓库政策放进版本管理中的 YAML 文件。

引擎识别 agent 信号、分类变更路径、推断操作并执行规则，顺序固定为阻止、要求审批、允许。未知 agent 默认需要审批；工作流和秘密文件的变更默认会被阻止。核心不调用模型或外部政策服务。项目尚未正式发布，npm 包和稳定版 v0 Action 都未发布。仓库政策不是运行时沙箱。

---
title: "AGENTOWNERS：为 AI agent 制定仓库政策"
description: "AGENTOWNERS 能决定什么、不能控制什么，以及项目为何仍处于预发布阶段。"
lang: zh
slug: agentowners-repository-policy-zh
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS回答一个问题：按照仓库中保存的策略，AI 智能体是否可以执行这项仓库操作？README描述的是确定性规则引擎，不是 AI 代码审查员，也不是运行时沙箱。

## 它会决定什么

- 读取有版本的 YAML 策略，识别智能体信号、分类变更路径并推断操作。
- 按固定顺序处理冲突：阻止、要求审批、允许。未知智能体默认需要审批；工作流和秘密文件默认禁止修改。
- 相同策略和输入会得出相同判定。引擎不调用模型或托管策略 API。

## 它无法控制什么

AGENTOWNERS在仓库边界管理贡献。它不会拦截其他地方的模型或工具调用，不会隔离代码执行，也不会判断代码是否正确。

## 当前状态

项目仍处于预发布阶段：npm 包和稳定的 v0 GitHub Action 尚未发布。README建议从源码评估，并且不要在生产工作流中固定到 main。

## 来源

已于 2026 年 11 月 11 日核对 [AGENTOWNERS README](https://github.com/streamentry/AGENTOWNERS#readme)。

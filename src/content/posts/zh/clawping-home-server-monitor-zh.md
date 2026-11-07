---
title: "在CGNAT后监控家用服务器"
description: "ClawPing通过向外发送心跳监控家用服务器，无需开放入站端口。"
lang: zh
slug: clawping-home-server-monitor-zh
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

家用服务器处于CGNAT之后，外部的在线监测服务很难直接连入。[ClawPing](https://github.com/cschanhniem/clawping)反转了连接方向：家中的轻量Go代理通过HTTPS向Cloudflare上的控制面发送心跳。

代理会检查磁盘使用量、HTTP端点、Docker容器，以及备份是否足够新。控制面追踪事件；检查失败或设备停止上报时，通过Telegram发送提醒。这种方式不需要开放入站端口、配置动态DNS，也不需要另养一台监控VPS。

它的价值在于任务明确：让家庭服务器用户知道哪里出了问题，同时不把家中网络暴露给外部连接。README也明确说明目前不提供SNMP、日志汇总、Grafana式指标面板或大规模服务器群监控。它适合NAS、迷你电脑和家用服务器的轻量场景，不是完整的可观测性平台。

[阅读项目README](https://github.com/cschanhniem/clawping)。

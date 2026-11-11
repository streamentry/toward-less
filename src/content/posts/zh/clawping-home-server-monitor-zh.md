---
title: "在CGNAT后监控家用服务器"
description: "ClawPing 如何监控 CGNAT 后的家庭服务器，以及它不包含什么功能。"
lang: zh
slug: clawping-home-server-monitor-zh
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing 通过向外发送 HTTPS 心跳来监控 CGNAT 后的家庭服务器。一个轻量 Go 代理把检查结果发给 Cloudflare 控制平面，因此家庭服务器不需要开放入站端口。

## 它检查什么

- 磁盘使用量和 HTTP 端点
- Docker 容器健康状况
- 备份是否足够新

控制平面会跟踪故障，并在检查失败或设备停止上报时发送 Telegram 提醒。

## 范围与限制

README 面向 NAS、迷你电脑或家用服务器。ClawPing 不提供 SNMP、日志聚合、Grafana 式指标或大型机群监控。它是用途有限的在线状态监控工具，不是完整的可观测性平台，也不是网络安全边界。

## 来源

[ClawPing README](https://github.com/cschanhniem/clawping#readme)，2026 年 11 月 11 日核对。

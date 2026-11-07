---
title: "Monitoring a home server from behind CGNAT"
description: "ClawPing uses outbound heartbeats to monitor home servers without opening inbound ports."
lang: en
slug: clawping-home-server-monitor-en
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

A home server behind CGNAT is hard for an outside uptime checker to reach. [ClawPing](https://github.com/cschanhniem/clawping) reverses the connection: a small local Go agent sends outbound HTTPS heartbeats to a control plane on Cloudflare.

The agent checks disk use, HTTP endpoints, Docker containers, and whether backups are fresh. The control plane tracks incidents and sends Telegram alerts when a check fails or a device stops reporting. The setup does not require an inbound port, dynamic DNS, or a separate monitoring VPS.

The appeal is its narrow job: tell a homelab owner when something breaks without making the home network reachable from outside. The README is clear about what it leaves out: SNMP, log aggregation, Grafana-style metrics, and large fleet monitoring. It is a prototype-scale tool for a NAS, mini PC, or home server, not a full observability platform.

[Read the project README](https://github.com/cschanhniem/clawping).

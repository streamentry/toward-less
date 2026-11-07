---
title: "Vigilar un servidor doméstico detrás de CGNAT"
description: "ClawPing supervisa servidores domésticos con señales salientes, sin abrir puertos de entrada."
lang: es
slug: clawping-home-server-monitor-es
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

Un servidor doméstico detrás de CGNAT es difícil de alcanzar desde un monitor externo. [ClawPing](https://github.com/cschanhniem/clawping) invierte la conexión: un pequeño agente Go local envía señales HTTPS a un plano de control en Cloudflare.

El agente comprueba el uso del disco, endpoints HTTP, contenedores Docker y la antigüedad de las copias de seguridad. El plano de control registra incidentes y manda alertas por Telegram si falla una comprobación o el dispositivo deja de informar. No hace falta abrir puertos de entrada, configurar DNS dinámico ni mantener un VPS aparte para la monitorización.

Su propuesta es acotada: avisar al dueño de un homelab cuando algo falla, sin hacer que su red doméstica acepte conexiones externas. El README también dice qué no incluye: SNMP, agregación de registros, paneles de métricas como Grafana ni gestión de grandes flotas. Es una herramienta pequeña para un NAS, un mini PC o un servidor doméstico, no una plataforma completa de observabilidad.

[Lee el README del proyecto](https://github.com/cschanhniem/clawping).

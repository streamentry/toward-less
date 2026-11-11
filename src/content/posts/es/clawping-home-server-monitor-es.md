---
title: "Vigilar un servidor doméstico detrás de CGNAT"
description: "Cómo ClawPing vigila un servidor doméstico tras CGNAT y qué funciones deja fuera."
lang: es
slug: clawping-home-server-monitor-es
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing vigila un servidor doméstico detrás de CGNAT mediante latidos HTTPS salientes. Un agente Go ligero envía las comprobaciones a un plano de control en Cloudflare, así que el servidor no necesita abrir un puerto de entrada.

## Qué comprueba

- Uso del disco y endpoints HTTP
- Estado de contenedores Docker
- Si las copias de seguridad están actualizadas

El plano de control registra incidentes y envía alertas por Telegram cuando falla una comprobación o un dispositivo deja de informar.

## Alcance y límites

El README lo orienta a un NAS, mini PC o servidor doméstico. ClawPing no ofrece SNMP, agregación de registros, métricas al estilo Grafana ni supervisión de grandes flotas. Es un monitor de disponibilidad acotado, no una plataforma completa de observabilidad ni un límite de seguridad de red.

## Fuente

[README de ClawPing](https://github.com/cschanhniem/clawping#readme), consultado el 11 de noviembre de 2026.

---
title: "Monitorar um servidor doméstico atrás de CGNAT"
description: "ClawPing monitora servidores domésticos por sinais enviados para fora, sem abrir portas de entrada."
lang: pt
slug: clawping-home-server-monitor-pt
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

É difícil para um monitor externo alcançar um servidor doméstico atrás de CGNAT. O [ClawPing](https://github.com/cschanhniem/clawping) inverte a conexão: um pequeno agente Go local envia heartbeats HTTPS a um plano de controle na Cloudflare.

O agente verifica o uso do disco, endpoints HTTP, contêineres Docker e a atualidade dos backups. O plano de controle registra incidentes e envia alertas pelo Telegram quando uma verificação falha ou um dispositivo para de responder. Não é preciso abrir portas de entrada, configurar DNS dinâmico nem manter um VPS separado para monitoramento.

A proposta é específica: avisar quem mantém um homelab quando algo falha sem tornar a rede doméstica acessível de fora. O README também diz o que não está incluído: SNMP, agregação de logs, painéis de métricas como Grafana ou monitoramento de grandes frotas. É uma ferramenta pequena para NAS, mini PC ou servidor doméstico, não uma plataforma completa de observabilidade.

[Leia o README do projeto](https://github.com/cschanhniem/clawping).

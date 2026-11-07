---
title: "Surveiller un serveur domestique derrière un CGNAT"
description: "ClawPing surveille les serveurs domestiques par des signaux sortants, sans ouvrir de ports entrants."
lang: fr
slug: clawping-home-server-monitor-fr
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Un serveur domestique derrière un CGNAT est difficile à joindre depuis un outil de supervision externe. [ClawPing](https://github.com/cschanhniem/clawping) inverse le sens de la connexion : un petit agent Go local envoie des pulsations HTTPS à un plan de contrôle sur Cloudflare.

L’agent vérifie l’espace disque, les points de terminaison HTTP, les conteneurs Docker et la fraîcheur des sauvegardes. Le plan de contrôle suit les incidents et envoie des alertes Telegram si un contrôle échoue ou si un appareil cesse de répondre. Il n’est pas nécessaire d’ouvrir un port entrant, de configurer un DNS dynamique ou de maintenir un VPS de supervision séparé.

Sa fonction est précise : prévenir le propriétaire d’un homelab lorsqu’un service tombe, sans rendre son réseau domestique joignable depuis l’extérieur. Le README précise aussi ce qui manque : SNMP, agrégation de journaux, métriques de type Grafana et supervision de grandes flottes. C’est un outil ciblé pour un NAS, un mini-PC ou un serveur domestique, pas une plateforme complète d’observabilité.

[Lire le README du projet](https://github.com/cschanhniem/clawping).

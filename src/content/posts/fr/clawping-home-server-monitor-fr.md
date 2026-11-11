---
title: "Surveiller un serveur domestique derrière un CGNAT"
description: "Comment ClawPing surveille un serveur domestique derrière CGNAT et ce que l’outil ne couvre pas."
lang: fr
slug: clawping-home-server-monitor-fr
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing surveille un serveur domestique derrière CGNAT au moyen de battements HTTPS sortants. Un petit agent Go envoie les résultats à un plan de contrôle Cloudflare ; le serveur n’a donc pas besoin d’ouvrir de port entrant.

## Ce qu’il vérifie

- L’espace disque et les points de terminaison HTTP
- L’état des conteneurs Docker
- La fraîcheur des sauvegardes

Le plan de contrôle suit les incidents et envoie des alertes Telegram lorsqu’un contrôle échoue ou qu’un appareil cesse de répondre.

## Portée et limites

Le README vise un NAS, un mini-PC ou un serveur domestique. ClawPing ne fournit ni SNMP, ni agrégation de journaux, ni métriques de type Grafana, ni supervision de grandes flottes. C’est un outil ciblé de surveillance de disponibilité, pas une plateforme complète d’observabilité ni une frontière de sécurité réseau.

## Source

[README de ClawPing](https://github.com/cschanhniem/clawping#readme), consulté le 11 novembre 2026.

---
title: "AGENTOWNERS : règles du dépôt pour les agents"
description: "Ce qu’AGENTOWNERS décide, ce qu’il ne contrôle pas et pourquoi le projet est encore en préversion."
lang: fr
slug: agentowners-repository-policy-fr
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS répond à une question : selon la politique enregistrée dans le dépôt, un agent IA peut-il effectuer cette action ? Le README le décrit comme un moteur de règles déterministe, pas comme un réviseur de code par IA ni comme un bac à sable d’exécution.

## Ce qu’il décide

- Il lit une politique YAML versionnée, détecte les signaux d’agent, classe les chemins modifiés et déduit les actions.
- Il tranche dans cet ordre : bloquer, exiger une approbation, autoriser. Les agents inconnus nécessitent une approbation par défaut ; les workflows et fichiers secrets sont bloqués.
- Une même politique et les mêmes entrées produisent le même verdict. Le moteur n’appelle ni modèle ni API de politique hébergée.

## Ce qu’il ne contrôle pas

AGENTOWNERS régit les contributions à la frontière du dépôt. Il n’intercepte pas les appels de modèles ou d’outils ailleurs, n’isole pas l’exécution du code et n’évalue pas sa correction.

## État actuel

Le projet est en préversion : les paquets npm et l’Action GitHub stable v0 ne sont pas publiés. Le README recommande une évaluation depuis les sources et déconseille de fixer main dans un workflow de production.

## Source

[README d’AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS#readme), consulté le 11 novembre 2026.

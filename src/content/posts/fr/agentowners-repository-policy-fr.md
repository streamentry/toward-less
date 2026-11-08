---
title: "AGENTOWNERS : règles du dépôt pour les agents"
description: "Une politique déterministe qui définit les actions autorisées aux agents."
lang: fr
slug: agentowners-repository-policy-fr
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Un guide explique comment un agent doit travailler, sans imposer ce qu’il a le droit de faire. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) ajoute une politique déterministe dans un fichier YAML versionné avec le dépôt.

Le moteur détecte les agents, classe les chemins modifiés et applique un ordre fixe : bloquer, exiger une approbation, autoriser. Les agents inconnus nécessitent une approbation ; les changements aux workflows et aux secrets sont bloqués. Le cœur n’utilise ni modèle ni service externe de politique. Le projet est en prépublication : paquets npm et Action stable v0 ne sont pas publiés. Ce n’est pas un bac à sable d’exécution.

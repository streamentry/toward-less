---
title: "Utiliser des agents, tout en gardant de quoi vérifier"
description: "On peut déléguer les détails d’un langage, mais il faut comprendre assez le système pour l’évaluer."
author: "C.S Chánh Niệm"
lang: fr
slug: l-avocat-du-langage-prend-sa-retraite-fr
translationKey: the-language-lawyer-retires-2026
pubDatetime: 2026-11-09T00:28:00+07:00
modDatetime: 2026-11-11T13:14:00+07:00
draft: false
featured: false
tags: [technology]
---
Robert C. Martin (Uncle Bob) raconte qu’il étudiait autrefois C++ en profondeur et se disait « language lawyer ». Dans un post X du 6 novembre 2026, il estime que les agents peuvent gérer les détails du langage pendant qu’il se concentre sur la structure générale du système. S’il a besoin d’une explication plus précise, il interroge un agent.

Deux jours plus tard, le post chinois d’Uudon élargit l’idée : les développeurs n’auraient plus besoin de comprendre les langages en profondeur. C’est l’interprétation d’Uudon, pas toute la position de Martin.

Le choix de Martin a un argument pratique : un agent peut chercher la syntaxe et expliquer du code inconnu, ce qui libère du temps pour examiner le comportement du système. Mais la connaissance d’un langage dépasse la syntaxe : les types, la mémoire, les interfaces et les cas limites peuvent changer le fonctionnement d’un logiciel. Une explication d’agent doit aussi être vérifiée. C’est un jugement pratique, pas un résultat de recherche dans le post de Martin.

Inutile de mémoriser tous les langages. Il faut comprendre assez le code concerné et les éléments de preuve pour les juger.

- Définissez le comportement attendu et les contraintes clés avant de déléguer.
- Examinez le changement et demandez ce que les tests ne couvrent pas.
- Si vous ne pouvez pas évaluer une explication, apprenez cette partie ou demandez une autre revue.

Déléguer peut réduire le temps d’apprentissage de la syntaxe. Cela ne supprime pas le besoin de comprendre et d’assumer ce qui est livré.

## Sources

- Robert C. Martin (@unclebobmartin), « I used to be a language lawyer », post X du 6 novembre 2026, [status 2118695884154110305](https://x.com/unclebobmartin/status/2118695884154110305).
- Uudon (@uudonX), résumé en chinois du propos de Martin, 8 novembre 2026, [status 2119243980634530096](https://x.com/uudonX/status/2119243980634530096). X a renvoyé une erreur 403 pendant la révision; les textes complets ont été consultés dans [la copie de Martin sur Teapawt](https://teapaw.org/unclebobmartin) et [une republication incluant le post d’Uudon](https://teapawt.net/orexinsystem). Cet article paraphrase les deux et distingue le résumé d’Uudon des propos de Martin.

---
title: "Faites la liste avant de corriger"
description: "Un prompt d’audit peut repérer des tâches de maintenance, mais les changements incertains restent à valider."
author: "C.S Chánh Niệm"
lang: fr
slug: corrige-ce-dont-tu-es-sur-fr
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Cet article explique comment utiliser un prompt d’audit par IA pour repérer des tâches de maintenance tout en réservant les changements incertains à une validation humaine.

Le 9 novembre 2026, Alex Albert a partagé un prompt qu’il utilise à l’arrivée d’un nouveau modèle : examiner un projet, repérer les éléments cassés ou inutiles, corriger ce qui paraît clair et lister le reste pour examen. Son intérêt est de séparer les modifications des décisions.

La consigne clé est : “Fix what you’re sure about and list the rest for me to review.” (en traduction : corrigez ce qui vous paraît clair et laissez le reste à vérifier.)

## Trois limites

- **La confiance n’est pas une preuve.** « Corrige ce dont tu es sûr » peut quand même produire une mauvaise modification. Demandez les fichiers concernés, les tests et la raison avant d’accepter une correction.
- **« Tout le projet » exige un compte rendu de couverture.** Demandez à l’agent d’indiquer ce qu’il a lu et ce qu’il a ignoré. Une demande large ne prouve pas que chaque fichier a été examiné.
- **Chaque constat exige une vérification différente.** Un correctif demande des tests ; une amélioration de performance, des mesures ; une suppression, la preuve que le code n’est pas utilisé ; un changement de style, une convention claire du projet.

## Un processus plus sûr

- Demandez d’abord une liste priorisée, avec les chemins de fichiers et les éléments qui appuient chaque constat.
- Autorisez uniquement de petites modifications mécaniques sans changement de comportement.
- Faites approuver les suppressions, changements de comportement, refactorisations entre fichiers et constats incertains.
- Comparez le diff à la liste, puis lancez les vérifications du projet.

Utilisez le prompt pour créer une file de révision, pas pour donner carte blanche à l’agent. La limite repose sur la liste examinée par une personne, pas sur la confiance du modèle.

*Source : Alex Albert (@alexalbert__), [publication X 2119884951550386671](https://x.com/alexalbert__/status/2119884951550386671), 9 novembre 2026. X a renvoyé une erreur 403 pendant cette vérification ; le texte a été comparé à une [copie du fil d’Albert sur Teapawt](https://teapawt.org/alexalbert__). Il s’agit d’une copie secondaire.*

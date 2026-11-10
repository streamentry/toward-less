---
title: "Vous Êtes la Boucle"
description: "Les niveaux 0–7 aident à diagnostiquer les agents de code, sans constituer un modèle universel ni un parcours obligatoire."
author: "C.S Chánh Niệm"
lang: fr
slug: vous-etes-la-boucle-fr
translationKey: harness-loops-graphs-2026
pubDatetime: 2026-11-10T05:31:00+07:00
draft: false
featured: false
tags: [technology]
---
L’article de m4lka sur X décrit les systèmes d’agents de code par niveaux de 0 à 7, soit huit étapes en comptant à partir de zéro. Le modèle sépare des fonctions souvent confondues :

- 0, chat : une personne coordonne chaque étape.
- 1, harnais : le modèle reçoit des outils et l’accès aux fichiers.
- 2, état et permissions : la mémoire persiste et les limites sont imposées.
- 3, boucle de vérification : un test peut échouer ; « le modèle dit que c’est terminé » n’est pas une vérification.
- 4, retour : les tentatives sont limitées et les échecs répétés sont remontés.
- 5, graphe : les dépendances réelles sont explicites.
- 6, barrières et retours : le travail validé reste fixe et seuls les échecs sont relancés.
- 7, apprentissage : les échecs produisent des contraintes pour la couche responsable.

C’est un modèle de conception pour les agents logiciels, pas une échelle validée empiriquement. Tests et compilations peuvent être répétés ; l’écriture, le design et la négociation reposent souvent sur des jugements sans test déterministe.

Les niveaux servent au diagnostic, pas à suivre un parcours obligatoire. Une tâche ponctuelle à faible coût peut se contenter du chat. On peut concevoir une vérification utile avant de construire tout le harnais. Ajoutez une couche lorsque le coût d’un échec justifie l’effort. Placer une barrière selon le coût d’annulation est une heuristique, pas une loi.

Le dernier niveau pose aussi un problème de mesure : « la même catégorie d’échec » dépend du classement fait après coup. Définissez les catégories à l’avance et suivez la baisse du coût des répétitions.

Le modèle aide à organiser la conception d’agents de code. Il ne prouve ni qu’ils peuvent fonctionner sans supervision ni que chaque tâche requiert toutes les couches.

Source : m4lka, [« Harness, Loops, Graphs: What Each Layer Fixes and What It Breaks », X Article, 25 octobre 2026 (statut 2114338456750997922)](https://x.com/m4lkxx/status/2114338456750997922). La page X n’a pas pu être rechargée ; les citations directes ont été supprimées.

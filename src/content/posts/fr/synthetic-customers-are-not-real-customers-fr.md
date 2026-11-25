---
title: "Les clients synthétiques ne sont pas de vrais clients"
description: "Ce que les recherches de Colgate sur la similarité sémantique peuvent nous apprendre sur l’intention d’achat, et leurs limites."
lang: fr
slug: synthetic-customers-are-not-real-customers-fr
translationKey: synthetic-customers-ssr-2026
pubDatetime: 2026-11-22T12:00:00+07:00
draft: false
featured: false
tags: [life]
---

Une affirmation virale prétend que Colgate a rendu les études de marché obsolètes. L’idée sous-jacente est plus utile et moins spectaculaire.

Des chercheurs liés à Colgate-Palmolive et à PyMC Labs ont étudié la **notation par similarité sémantique (SSR)**, une méthode qui transforme les réponses d’un modèle de langage en notes comparables à celles d’un questionnaire. Au lieu de demander directement à une IA de choisir un nombre sur une échelle de Likert, elle sollicite une réaction écrite, puis mesure sa proximité sémantique avec les descriptions de différentes notes.

Ce changement compte. Les modèles de langage répondent souvent de manière peu naturelle lorsqu’on leur demande des évaluations numériques. Les laisser d’abord s’exprimer en langage naturel peut produire des notes dont les tendances ressemblent davantage à celles des enquêtes humaines.

## Ce que l’étude a réellement testé

L’évaluation présentée portait sur **57 enquêtes consacrées à des concepts de produits de soin et environ 9 300 réponses humaines**. Les auteurs ont rapporté une performance atteignant environ **90% de la fidélité test-retest humaine**, selon leur méthode d’évaluation.

Cela ne signifie *pas* que la méthode prédit correctement 90% des achats réels. La fidélité test-retest concerne la constance avec laquelle on peut reproduire les réponses à une enquête. La recherche porte sur **l’intention d’achat déclarée**, pas sur le comportement observé au moment de payer.

Ce qui frappe, ce n’est pas qu’un modèle soit devenu un consommateur humain. C’est qu’une méthode soigneusement conçue pour recueillir et noter ses réponses pourrait permettre d’approcher certaines tendances des réponses humaines.

## Trois questions différentes

1. **Une personne dirait-elle qu’elle aime ce concept ?** Les méthodes d’enquête synthétique peuvent aider à estimer les tendances des réponses.
2. **Dépenserait-elle de l’argent pour l’acheter ?** Une note hypothétique ne permet pas de l’établir.
3. **L’entreprise réussira-t-elle ?** Cela dépend aussi de la découverte du produit, de sa distribution, de la concurrence, de la confiance, de l’usage répété et de la rentabilité unitaire.

Confondre ces questions transforme un outil utile en illusion coûteuse.

## Le problème caché de 1 000 entretiens avec une IA

Mille profils générés ne constituent pas nécessairement mille observations indépendantes. Ils peuvent partager les mêmes hypothèses issues des données d’entraînement et les mêmes biais du modèle. Les consignes démographiques peuvent aussi reproduire des stéréotypes plutôt que le comportement réel des sous-groupes. Davantage de réponses synthétiques ne réduit pas automatiquement l’erreur systématique.

De plus, lorsqu’on demande à un modèle d’évaluer un produit nouveau qui modifie les comportements, les tendances historiques fiables à imiter peuvent être rares.

## Mieux utiliser la recherche synthétique

Utilisez SSR comme un **filtre peu coûteux avant de dépenser de l’argent**, pas comme la preuve définitive de la demande.

Générez des concepts et des messages concurrents. Servez-vous des réactions synthétiques pour repérer les formulations peu claires, les objections possibles et les hypothèses concernant différents segments de clientèle. Présentez ensuite les options les plus solides à de vraies personnes.

Une séquence pratique de validation :

- Demandez au modèle de classer dix concepts, en consignant ses hypothèses.
- Menez une petite enquête humaine en aveugle sur les mêmes concepts.
- Testez une page de présentation ou un projet pilote payant pour mesurer un engagement réel.
- Comparez l’approche qui prédit le mieux le comportement observé, plutôt que celle qui produit seulement l’explication la plus convaincante.

Si les notes synthétiques prédisent régulièrement les résultats réels pour de nouveaux concepts, augmentez leur place. Sinon, traitez-les comme une matière première pour trouver des idées.

**L’avenir des études de marché pourrait comporter moins d’enquêtes de faible valeur. Il aura toujours besoin du contact avec la réalité.**

---

*Recherche examinée : « LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings » (2025), [arXiv:2510.08338](https://arxiv.org/abs/2510.08338). Les résultats concernent les concepts, populations et indicateurs testés ; ils n’établissent ni une prédiction parfaite selon les caractéristiques démographiques et les prix, ni le remplacement de l’ensemble du secteur des études de marché.*

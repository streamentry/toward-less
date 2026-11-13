---
title: "Trouvez les machines à états cachées dans votre application"
description: "Utilisez l’IA pour repérer les états cachés dans des indicateurs, puis vérifiez dans le code lesquels méritent un modèle explicite."
author: "C.S Chánh Niệm"
lang: fr
slug: implicit-state-machines-fr
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

Beaucoup d’applications stockent leur état dans des indicateurs dispersés : chargement, erreur, édition, connexion. Combinés, ils peuvent produire des situations imprévues, comme être à la fois en chargement et en erreur.

Dans un post sur X, Steve Ruiz suggère de demander à un agent de repérer ces machines à états implicites. Considérez le résultat comme une liste de candidats à vérifier, pas comme des faits. [1]

Pour chaque candidat, demandez à l’agent de montrer :

- les fichiers et variables qui le représentent;
- les états et transitions permis par le code;
- les combinaisons qui devraient être impossibles et le code qui les autorise encore.

Vérifiez chaque affirmation dans le dépôt. Certains indicateurs sont indépendants et n’ont pas besoin d’un modèle formel. Rendez une machine à états explicite lorsque les états interagissent, se multiplient, provoquent des bogues ou empêchent les responsables de comprendre ce que la fonction peut faire. Un diagramme n’est utile que s’il clarifie ces règles.

Laissez l’agent proposer une carte; laissez le code la confirmer.

### Source

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

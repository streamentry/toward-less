---
title: "Trouvez les machines à états cachées dans votre application"
description: "Demandez où votre application garde son état, et nommez les modes dans lesquels elle peut réellement se trouver."
author: "C.S Chánh Niệm"
lang: fr
slug: implicit-state-machines-fr
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
draft: false
featured: false
tags: [technology]
---

La plupart des applications n'ont pas une seule machine à états. Elles en ont beaucoup, sans nom.

Un indicateur de chargement ici, un indicateur d'erreur là, un indicateur d'édition, un indicateur de connexion. Chacun semble petit pris isolément. Ensemble, ils se combinent en modes que personne n'a choisis : en cours de chargement et en erreur à la fois, en train de modifier quelque chose qui n'existe plus, enregistré et non enregistré en même temps.

Dans une publication sur X, Steve Ruiz (@steveruizok) suggère une invite : *« find all of the implicit state machines in my app »* — trouvez toutes les machines à états implicites dans mon application.

Demandez la liste avec des preuves. Où vit chacune dans le code ? Dans quels états peut-elle se trouver ? Qu'est-ce qui la fait passer de l'un à l'autre ? Quelles combinaisons ne peuvent pas se produire, et lesquelles ne devraient pas se produire mais se produisent ?

L'essentiel est de les nommer, pas de dessiner le diagramme. Une fois qu'un mode a un nom, on peut se demander s'il devrait exister. Souvent, la réponse est non — et le supprimer est plus simple que de le gérer.

Tous les indicateurs n'ont pas besoin d'une machine formelle. Ce serait remplacer un type de désordre par un autre. Une machine mérite d'être nommée quand les états se multiplient, quand un bogue vient du fait que l'application est dans deux modes à la fois, ou quand un nouveau lecteur ne peut pas dire ce que l'application peut faire.

L'IA peut se tromper sur ce point. Laissez-la proposer les machines ; laissez le code les mettre à l'épreuve.

**Moins d'états possibles, une vision plus claire.**

*Inspiré d'une publication de [Steve Ruiz (@steveruizok)](https://x.com/steveruizok/status/2116552016218710389) sur X. La publication a été vérifiée le 8 novembre 2026 : 22 h 24, le 31 octobre 2026.*

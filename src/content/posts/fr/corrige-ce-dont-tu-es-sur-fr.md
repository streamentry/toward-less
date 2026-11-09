---
title: "Corrige ce dont tu es sûr"
description: "À chaque nouveau modèle, Alex Albert lance le même prompt sur tous ses projets : lis tout le projet, trouve tout ce qui est cassé, incohérent, inefficace ou devenu inutile, corrige ce dont tu es sûr et liste le reste pour que je le relise. Le prompt est bon — et la moitié qui porte tout, c'est la liste, pas les corrections."
author: "C.S Chánh Niệm"
lang: fr
slug: corrige-ce-dont-tu-es-sur-fr
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

À chaque nouveau modèle, Alex Albert lance le même prompt sur tous ses projets : lis tout ce projet et trouve tout ce qui est cassé, incohérent, inefficace ou devenu inutile. Corrige ce dont tu es sûr et liste le reste pour que je le relise. Je recommande vivement d'essayer.

C'est un bon prompt, et ce qui le rend bon, ce ne sont pas les corrections. C'est la séparation. Le prompt divise le travail en deux moitiés — ce que le modèle peut changer seul, et ce qu'il doit rapporter pour qu'un humain décide — et la seconde moitié est celle qui rend la première sûre. La plupart des prompts d'agent échouent parce qu'ils donnent au modèle un seul travail, « corrige-le », sans aucune limite. Celui-ci trace la limite à l'intérieur même de l'instruction.

Le prompt oriente aussi le modèle vers le bon type de travail. Construire est l'usage clinquant d'un agent ; entretenir est l'usage fiable. Trouver du code mort, des noms incohérents, de la logique dupliquée et des choses devenues inutiles, c'est un travail borné, avec des diffs vérifiables. Une suppression erronée apparaît dans un diff. Une fonctionnalité erronée apparaît en production. Le prompt d'Albert traite le modèle comme un concierge avec une liste de contrôle, ce qui est le rôle que les agents remplissent vraiment bien, et il lui demande de rendre la liste.

Mais le prompt a trois points faibles, et ils méritent d'être nommés avant de le lancer.

Premièrement, « corrige ce dont tu es sûr ». La confiance d'un modèle n'est pas calibrée. Les modèles se trompent avec assurance sur les choses mêmes qui leur semblent les plus certaines — une correction plausible d'un bug subtil, une « simplification » qui supprime un cas particulier décisif. La sécurité du prompt dépend du fait que le modèle sache de quoi il est sûr, et c'est la seule chose qu'il ne peut pas savoir de façon fiable. La moitié « liste pour relecture » est la moitié qui porte tout, précisément parce que la moitié « corrections » ne peut pas se surveiller elle-même.

Deuxièmement, « lis tout ce projet ». Sur un petit projet, le modèle le peut. Sur un grand, il ne le peut pas — les limites de contexte font qu'il échantillonne, et il ne vous dira pas qu'il a échantillonné. Le prompt fonctionne le mieux là où le projet tient dans la fenêtre, et se dégrade en silence là où il ne tient pas. Si votre projet est grand, la version honnête du prompt nomme les parties à lire.

Troisièmement, le prompt condense quatre jugements différents en une seule instruction : cassé, incohérent, inefficace, devenu inutile. Ce sont l'exactitude, la cohérence, la performance et le code mort — quatre manières différentes de voir. Un modèle trouvera les faciles — le code mort, la dérive de style — et manquera les difficiles : le bug subtil, l'incohérence architecturale qui ne se révèle qu'en regardant trois fichiers à la fois. Un prompt, quatre tâches, et le modèle fera les deux qu'il maîtrise et déclarera les autres terminées.

Ce blog a exécuté quelque chose de très proche du prompt d'Albert, à la main, sur lui-même. Un audit des machines à états implicites de Toward Less a trouvé treize machines vivantes et quatre fantômes : deux définitions différentes de « publié », une logique de thème dupliquée en deux endroits, une détection de langue dupliquée avec une fonction morte, des liens de pagination pointant vers des pages inexistantes. Chacune d'elles est exactement ce que demande le prompt d'Albert — incohérent, inefficace, devenu inutile — et chacune a été trouvée en lisant tout le projet et en listant ce qui n'allait pas avant de corriger. La liste d'abord. Les corrections ensuite, dans une copie propre, vérifiées avant toute publication.

Alors essayez le prompt. Mais lancez-le pour la liste, pas pour les corrections. Lisez la liste vous-même, vérifiez les corrections qu'il a faites par rapport à la liste qu'il a rendue, et souvenez-vous que « j'en suis sûr » est une phrase qu'un modèle dira à propos de presque tout. Le prompt est bon parce qu'il garde un humain dans la boucle. La boucle est l'essentiel.

*Inspiré par la publication sur X [« À chaque nouveau modèle, je lance le même prompt simple sur tous mes projets : "Lis tout ce projet et trouve tout ce qui est cassé, incohérent, inefficace ou devenu inutile. Corrige ce dont tu es sûr et liste le reste pour que je le relise." Je recommande vivement d'essayer »](https://x.com/alexalbert__/status/2119884951550386671) par [Alex Albert (@alexalbert__)](https://x.com/alexalbert__/status/2119884951550386671). La publication a été vérifiée le 10 novembre 2026 : 3:08 AM, 10 Nov 2026, 61.5K vues. Alex Albert travaille en recherche chez Anthropic. L'audit des machines à états de Toward Less mentionné dans cet article est l'audit propre du blog, daté du 8 novembre 2026, conservé dans workspace/toward-less/audit/implicit-state-machines-audit.md.*

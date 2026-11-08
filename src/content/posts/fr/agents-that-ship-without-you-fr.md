---
title: "Des agents qui livrent sans vous"
description: "L'agent n'est pas le système. La spécification, les petites tâches et le harnais le sont."
author: "C.S Chánh Niệm"
lang: fr
slug: agents-qui-livrent-sans-vous-fr
translationKey: agents-that-ship-without-you-2026
pubDatetime: 2026-11-08T23:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Dans un post sur X, shikamaru (@shikamarutsai) partage un atelier de 41 minutes d'Addy Osmani, ingénieur chez Anthropic et auparavant chez Google. La phrase citée d'Osmani est directe : « Google m'a embauché à $500K–$1.2M par an parce que je sais comment faire en sorte que les agents d'IA écrivent du code qui ne casse pas. »

La réponse de l'atelier n'est pas un meilleur prompt. C'est un harnais, en cinq étapes : affiner l'idée, écrire la spécification, planifier en petites tâches, construire en testant d'abord, puis vérifier et réviser.

Première étape : on y dépose une idée vague, et l'agent vous interviewe, puis revient avec trois directions. Deuxième étape : on verrouille les critères de succès, la pile technique et les questions ouvertes avant d'écrire une seule ligne de code. Troisième étape : on découpe le travail en petites tâches, chacune avec des critères d'acceptation et une liste des fichiers qu'elle est autorisée à toucher. Quatrième étape : on construit en testant d'abord, du rouge au vert, tranche par tranche, pour que rien de ce qui fonctionne déjà ne casse. Cinquième étape : vérifier et réviser — l'agent ouvre l'application dans un navigateur, vérifie la sécurité et simplifie son propre code.

Le post dit qu'Osmani a publié en open source l'ensemble des 24 skills, et que le dépôt approche les 100K étoiles. Google, dit le post, appelle cela « agentic engineering ». Le post cite un article compagnon de @beamnxw, « Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup » — sauvegarder le progrès, vérifier les résultats, réutiliser le flux de travail, pour qu'une longue exécution laisse quelque chose que l'on peut ouvrir, des preuves que l'on peut inspecter, et assez de progrès sauvegardé pour continuer demain.

Remarquez où le travail s'est déplacé. Non pas vers la surveillance de l'agent, mais vers ce qui se passe avant qu'il ne commence : l'entretien, la spécification, la petite tâche avec sa limite tracée. Un agent qui ne peut toucher que des fichiers nommés, qui doit réussir un test avant de continuer, qui doit sauvegarder son progrès — cet agent-là peut être laissé seul. Un agent sans limite, non.

C'est la même leçon que celle qui consiste à nommer les machines à états : la liberté qui fonctionne est une liberté bornée. Le harnais est la liste des modes dans lesquels l'exécution est autorisée à se trouver, et la preuve qu'elle doit produire pour passer de l'un à l'autre.

Il vaut mieux ne pas le survendre. « Vous n'avez pas à » passer des semaines à construire cela à la main — mais le harnais lui-même est fait de semaines de jugement, comprimées en 24 skills et une liste de vérification. Un agent qui vérifie sa propre sécurité et simplifie son propre code a toujours besoin de quelqu'un, hors de l'exécution, pour lire les preuves. Le progrès sauvegardé n'est utile que s'il est réellement inspecté, et « vérifier et réviser » est une étape, pas une garantie.

La promesse est plus étroite que le discours, et elle en est meilleure : moins de surveillance, moins d'attachement à l'exécution elle-même. Mettez le soin dans la préparation — la spécification, la petite tâche, l'état sauvegardé — puis lâchez prise.

**L'agent n'est pas le système. Le harnais l'est.**

*Inspiré d'un post de [shikamaru (@shikamarutsai)](https://x.com/shikamarutsai/status/2119197676415877128) sur X, au sujet de l'atelier d'Addy Osmani sur l'agentic engineering, citant « Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup » de @beamnxw. Le post a été vérifié le 8 novembre 2026 : 5:37 AM, 8 novembre 2026.*

---
title: "Une petite expérience sur la parole silencieuse"
description: "Subvox teste si les mouvements des écouteurs distinguent quelques mots articulés sans voix."
lang: fr
slug: subvox-silent-speech-fr
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox teste si les mouvements de tête mesurés par des AirPods Pro permettent de distinguer quelques mots articulés sans voix. C’est un prototype macOS, pas un système général de reconnaissance vocale.

Le prototype :

- enregistre l’accélération, la rotation et l’orientation à environ 25 Hz ; le signal provient surtout de la tête et de la mâchoire, pas des vibrations vocales ;
- associe chaque segment à des modèles de mots propres à l’utilisateur et à la session grâce au dynamic time warping ;
- compare la classification leave-one-out à 500 tests d’étiquettes mélangées et affiche la transcription du micro à côté des prédictions de mouvement.

Le README décrit la méthode, mais ne donne aucun résultat de précision observé. Remettre les écouteurs peut déplacer les modèles ; le prototype n’utilise pas de modèle de langage. Il teste un signal, sans montrer que la parole silencieuse est prête pour un usage quotidien.

Source : [README de Subvox](https://github.com/joeblau/subvox/blob/main/README.md) (consulté le 14 novembre 2026).

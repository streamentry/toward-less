---
title: "Une petite expérience sur la parole silencieuse"
description: "Subvox teste si les mouvements de tête mesurés par les AirPods Pro distinguent quelques mots articulés sans voix."
lang: fr
slug: subvox-silent-speech-fr
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox) pose une question limitée : les mouvements des AirPods Pro permettent-ils de distinguer quelques mots articulés sans les prononcer ?

C’est un prototype macOS, pas un système général de parole silencieuse. Il enregistre l’accélération, la vitesse de rotation et l’orientation des écouteurs, découpe chaque essai en segments, puis les compare à des modèles de mots par alignement temporel dynamique. L’écran Train compare la précision leave-one-out à 500 permutations d’étiquettes. Decode affiche les prédictions du mouvement à côté d’une transcription en direct du microphone. Aucun modèle de langage n’est utilisé.

L’expérience est inspectable : courbes des capteurs, enregistrements de sessions, sélection des caractéristiques et seuils de rejet montrent ce qui est testé. Mais le README décrit la méthode sans donner de résultat de précision mesuré. Le signal est aussi limité : environ 25 Hz, principalement les mouvements de la tête et de la mâchoire, pas les vibrations de la voix. Les modèles dépendent de la personne et de la session ; remettre les écouteurs peut déplacer le signal.

Subvox est une expérience de mesure, pas la preuve que la parole silencieuse est prête pour un usage quotidien.

[Voir le projet sur GitHub](https://github.com/joeblau/subvox).

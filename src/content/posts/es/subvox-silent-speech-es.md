---
title: "Un pequeño experimento sobre el habla silenciosa"
description: "Subvox prueba si el movimiento de los auriculares permite distinguir unas pocas palabras articuladas en silencio."
lang: es
slug: subvox-silent-speech-es
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox pregunta si los movimientos de la cabeza registrados por AirPods Pro permiten distinguir unas pocas palabras articuladas en silencio. Es un prototipo para macOS, no un sistema general de reconocimiento del habla.

El prototipo:

- registra aceleración, rotación y orientación a unos 25 Hz; la señal refleja sobre todo movimientos de la cabeza y la mandíbula, no vibración vocal;
- compara cada segmento con plantillas de palabras específicas de cada usuario y sesión mediante dynamic time warping;
- compara la clasificación leave-one-out con 500 pruebas de etiquetas aleatorias y muestra una transcripción del micrófono junto a las predicciones de movimiento.

El README describe el método, pero no informa un resultado de precisión observado. Volver a colocarse los auriculares puede cambiar las plantillas; el prototipo no usa un modelo de lenguaje. Prueba una señal; no demuestra que el habla silenciosa esté lista para el uso cotidiano.

Fuente: [README de Subvox](https://github.com/joeblau/subvox/blob/main/README.md) (consultado el 14 de noviembre de 2026).

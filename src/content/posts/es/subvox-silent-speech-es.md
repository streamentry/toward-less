---
title: "Un pequeño experimento sobre el habla silenciosa"
description: "Subvox prueba si el movimiento de la cabeza registrado por AirPods Pro distingue unas pocas palabras articuladas sin voz."
lang: es
slug: subvox-silent-speech-es
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox) plantea una pregunta acotada: ¿el movimiento de los AirPods Pro permite distinguir unas pocas palabras articuladas en silencio?

Es un prototipo para macOS, no un sistema general de habla silenciosa. Registra aceleración, velocidad de rotación y orientación de los auriculares, divide cada intento en segmentos y los compara con plantillas de palabras mediante alineamiento temporal dinámico. La pantalla Train compara la precisión leave-one-out con 500 pruebas de etiquetas barajadas. Decode muestra las predicciones de movimiento junto a una transcripción en directo del micrófono. No usa un modelo de lenguaje.

El experimento es inspeccionable: gráficos de sensores, grabaciones de sesiones, selección de características y umbrales de rechazo muestran qué se está probando. Pero el README describe el método sin informar una precisión observada. La señal también es limitada: unos 25 Hz, sobre todo movimientos de cabeza y mandíbula, no vibraciones de la voz. Las plantillas dependen de la persona y la sesión, y pueden cambiar al recolocar los auriculares.

Subvox es un experimento para medir una señal, no una prueba de que el habla silenciosa esté lista para el uso cotidiano.

[Ver el proyecto en GitHub](https://github.com/joeblau/subvox).

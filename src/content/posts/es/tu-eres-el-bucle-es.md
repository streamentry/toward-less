---
title: "Tú Eres el Bucle"
description: "Los niveles 0–7 ayudan a diagnosticar agentes de código, pero no son un modelo universal ni una ruta obligatoria."
author: "C.S Chánh Niệm"
lang: es
slug: tu-eres-el-bucle-es
translationKey: harness-loops-graphs-2026
pubDatetime: 2026-11-10T05:31:00+07:00
draft: false
featured: false
tags: [technology]
---
El X Article de m4lka describe los sistemas de agentes de código en niveles del 0 al 7: son ocho etapas si se cuenta desde cero. El modelo separa funciones que los equipos suelen mezclar:

- 0, chat: una persona coordina cada paso.
- 1, armazón: el modelo obtiene herramientas y acceso a archivos.
- 2, estado y permisos: la memoria persiste y se imponen límites.
- 3, ciclo de comprobación: una prueba puede fallar; “el modelo dice que terminó” no es una comprobación.
- 4, feedback: se limitan los reintentos y se escalan los fallos repetidos.
- 5, grafo: se hacen explícitas las dependencias reales.
- 6, puertas y retornos: se conserva lo aprobado y se repiten solo los fallos.
- 7, aprendizaje: los fallos generan restricciones para la capa responsable.

Es un modelo de diseño para agentes de software, no una escala validada empíricamente. Las pruebas y compilaciones pueden repetirse; la escritura, el diseño y la negociación suelen depender de juicios sin una prueba determinista.

Los niveles sirven para diagnosticar, no son una ruta obligatoria. Una tarea puntual y de bajo coste quizá solo necesite chat. Se puede diseñar una buena comprobación antes de construir todo el armazón. Añade capas cuando el coste del fallo justifique el esfuerzo. Decidir una puerta según el coste de deshacer es una heurística, no una ley.

El último nivel también plantea un problema de medición: “la misma clase de fallo” depende de cómo se agrupen los fallos después. Define las categorías de antemano y mide si cada repetición cuesta menos.

El modelo ayuda a organizar el diseño de agentes de código; no demuestra que puedan trabajar sin supervisión ni que toda tarea necesite todas las capas.

Fuente: m4lka, [“Harness, Loops, Graphs: What Each Layer Fixes and What It Breaks”, X Article, 25 de octubre de 2026 (estado 2114338456750997922)](https://x.com/m4lkxx/status/2114338456750997922). No se pudo volver a cargar la página de X en esta revisión; se quitaron las citas directas.

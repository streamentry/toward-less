---
title: "Haz la lista antes de corregir"
description: "Un prompt de auditoría puede encontrar tareas de mantenimiento, pero los cambios dudosos requieren revisión humana."
author: "C.S Chánh Niệm"
lang: es
slug: arregla-lo-que-tengas-claro-es
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Este artículo explica cómo usar un prompt de auditoría con IA para encontrar tareas de mantenimiento y dejar los cambios dudosos bajo revisión humana.

El 9 de noviembre de 2026, Alex Albert compartió un prompt que usa cuando aparece un modelo nuevo: revisar un proyecto, localizar lo que falla o sobra, corregir lo que parezca claro y dejar el resto para revisión. Su aporte útil es separar las modificaciones de las decisiones.

La instrucción clave es: “Fix what you’re sure about and list the rest for me to review.” (en traducción: corrige lo que tengas claro y deja lo demás para revisión.)

## Tres límites

- **La confianza no es una prueba.** “Corrige lo que tengas claro” también puede generar un cambio erróneo. Pide los archivos relevantes, las pruebas y el motivo antes de aceptar una corrección.
- **“Todo el proyecto” requiere informar del alcance.** Pide que el agente indique qué leyó y qué dejó fuera. Una petición amplia no demuestra que haya revisado cada archivo.
- **Cada hallazgo necesita una comprobación distinta.** Un arreglo de errores necesita pruebas; una mejora de rendimiento, mediciones; una eliminación, evidencia de que el código no se usa; un cambio de estilo, una convención clara del proyecto.

## Un flujo más seguro

- Pide primero una lista priorizada con rutas de archivo y pruebas que respalden cada hallazgo.
- Permite solo cambios pequeños y mecánicos que no alteren el comportamiento.
- Devuelve para aprobación las eliminaciones, los cambios de comportamiento, las refactorizaciones entre archivos y los hallazgos dudosos.
- Compara el diff con la lista y ejecuta las comprobaciones del proyecto.

Usa el prompt para crear una cola de revisión, no para dar autoridad ilimitada al agente. El límite está en la lista que revisa una persona, no en la confianza del modelo.

*Fuente: Alex Albert (@alexalbert__), [publicación de X 2119884951550386671](https://x.com/alexalbert__/status/2119884951550386671), 9 de noviembre de 2026. X devolvió un error 403 durante esta revisión; el texto se cotejó con una [copia de la cronología de Albert en Teapawt](https://teapawt.org/alexalbert__). Es una copia secundaria.*

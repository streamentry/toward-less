---
title: "Usar agentes, pero conservar criterio para revisar"
description: "Se pueden delegar los detalles del lenguaje; hace falta entender lo suficiente para juzgar el sistema resultante."
author: "C.S Chánh Niệm"
lang: es
slug: el-abogado-del-lenguaje-se-jubila-es
translationKey: the-language-lawyer-retires-2026
pubDatetime: 2026-11-09T00:28:00+07:00
modDatetime: 2026-11-11T13:14:00+07:00
draft: false
featured: false
tags: [technology]
---
Robert C. Martin (Uncle Bob) cuenta que antes estudiaba C++ en profundidad y se consideraba un “language lawyer”. En una publicación de X del 6 de noviembre de 2026, sostiene que los agentes pueden ocuparse de los detalles del lenguaje mientras él se centra en la estructura general del sistema. Si necesita entender un detalle, se lo pregunta a un agente.

Dos días después, la publicación en chino de Uudon amplió la idea: los desarrolladores ya no necesitan entender a fondo los lenguajes de programación. Esa es la interpretación de Uudon, no toda la postura expresada por Martin.

El cambio tiene un argumento práctico: los agentes pueden consultar sintaxis y explicar código desconocido, lo que deja más tiempo para revisar el comportamiento del sistema. Pero el conocimiento del lenguaje va más allá de la sintaxis: los tipos, la memoria, las interfaces y los casos límite pueden afectar al funcionamiento del software. La explicación de un agente también debe revisarse. Es un juicio práctico, no un resultado de investigación presentado en el post de Martin.

No hace falta memorizar todos los lenguajes. Sí hace falta entender lo suficiente para evaluar el código y las pruebas pertinentes.

- Define el comportamiento esperado y las restricciones clave antes de delegar.
- Revisa el cambio y pregunta qué no cubren las pruebas.
- Si no puedes evaluar una explicación, aprende esa parte o pide otra revisión.

Delegar puede reducir el tiempo dedicado a aprender sintaxis. No elimina la necesidad de entender y responder por lo que se publica.

## Fuentes

- Robert C. Martin (@unclebobmartin), “I used to be a language lawyer”, publicación en X, 6 de noviembre de 2026, [status 2118695884154110305](https://x.com/unclebobmartin/status/2118695884154110305).
- Uudon (@uudonX), resumen en chino de la postura de Martin, 8 de noviembre de 2026, [status 2119243980634530096](https://x.com/uudonX/status/2119243980634530096). X devolvió 403 durante esta revisión; los textos completos se comprobaron en [la copia de Martin en Teapawt](https://teapaw.org/unclebobmartin) y [un repost que incluye la publicación de Uudon](https://teapawt.net/orexinsystem). Este artículo parafrasea ambas y distingue el resumen de Uudon de las palabras de Martin.

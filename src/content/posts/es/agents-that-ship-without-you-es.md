---
title: "Agentes que entregan sin ti"
description: "El agente no es el sistema. La especificación, las tareas pequeñas y el arnés lo son."
author: "C.S Chánh Niệm"
lang: es
slug: agentes-que-entregan-sin-ti-es
translationKey: agents-that-ship-without-you-2026
pubDatetime: 2026-11-08T23:00:00+07:00
draft: false
featured: false
tags: [technology]
---

En una publicación en X, shikamaru (@shikamarutsai) comparte un taller de 41 minutos de Addy Osmani, ingeniero en Anthropic y antes en Google. La frase citada de Osmani es directa: "Google me contrató por $500K–$1.2M al año porque sé cómo hacer que los agentes de IA escriban código que no se rompa".

La respuesta del taller no es un mejor prompt. Es un arnés, en cinco pasos: refinar la idea, escribir la especificación, planificar en tareas pequeñas, construir con pruebas primero, y luego verificar y revisar.

Paso uno: introduces una idea vaga, y el agente te entrevista, volviendo con tres direcciones. Paso dos: fija los criterios de éxito, la pila tecnológica y las preguntas abiertas antes de escribir una sola línea de código. Paso tres: divide el trabajo en tareas pequeñas, cada una con criterios de aceptación y una lista de archivos que puede tocar. Paso cuatro: construye con pruebas primero, de rojo a verde, trozo a trozo, para que nada de lo que ya funciona se rompa. Paso cinco: verificar y revisar — el agente abre la aplicación en un navegador, comprueba la seguridad y simplifica su propio código.

La publicación dice que Osmani publicó en código abierto las 24 skills, y que el repositorio está cerca de las 100K estrellas. Google, dice la publicación, llama a esto "agentic engineering". La publicación cita un artículo complementario de @beamnxw, "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup": guarda el progreso, verifica los resultados, reutiliza el flujo de trabajo, para que una ejecución larga deje algo que puedas abrir, evidencia que puedas inspeccionar y suficiente progreso guardado para continuar mañana.

Fíjate adónde se movió el trabajo. No a mirar al agente, sino a lo que ocurre antes de que empiece: la entrevista, la especificación, la tarea pequeña con su límite trazado. Un agente que solo puede tocar archivos nombrados, que debe pasar una prueba antes de seguir, que debe guardar su progreso: ese agente se puede dejar solo. Uno sin límite, no.

Es la misma lección que nombrar las máquinas de estado: la libertad que funciona es la libertad acotada. El arnés es la lista de modos en los que la ejecución puede estar, y la evidencia que debe producir para pasar de uno a otro.

Conviene no exagerarlo. "No tienes que" pasar semanas construyendo esto a mano, pero el arnés en sí es semanas de criterio comprimidas en 24 skills y una lista de verificación. Un agente que comprueba su propia seguridad y simplifica su propio código sigue necesitando a alguien fuera de la ejecución que lea la evidencia. El progreso guardado solo sirve si de verdad se inspecciona, y "verificar y revisar" es un paso, no una garantía.

La promesa es más estrecha que el discurso, y por eso mejor: menos mirar, menos apego a la ejecución misma. Pon el cuidado en la preparación — la especificación, la tarea pequeña, el estado guardado — y luego suelta.

**El agente no es el sistema. El arnés lo es.**

*Inspirado en una publicación de [shikamaru (@shikamarutsai)](https://x.com/shikamarutsai/status/2119197676415877128) en X, sobre el taller de Addy Osmani sobre agentic engineering, que cita "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup" de @beamnxw. La publicación fue verificada el 8 de noviembre de 2026: 5:37 AM, 8 de noviembre de 2026.*

---
title: "AGENTOWNERS: políticas de repositorio para agentes"
description: "Qué decide AGENTOWNERS, qué no puede controlar y por qué sigue en fase preliminar."
lang: es
slug: agentowners-repository-policy-es
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS responde a una pregunta: según la política guardada en el repositorio, ¿puede un agente de IA realizar esta acción? El README lo describe como un motor determinista de reglas, no como revisor de código con IA ni como entorno aislado de ejecución.

## Qué decide

- Lee una política YAML versionada, detecta señales de agentes, clasifica rutas modificadas e infiere acciones.
- Resuelve conflictos en este orden: bloquear, exigir aprobación, permitir. Los agentes desconocidos requieren aprobación por defecto; los cambios en workflows y archivos secretos se bloquean.
- La misma política y las mismas entradas producen el mismo veredicto. El motor no llama a un modelo ni a una API de políticas alojada.

## Qué no puede controlar

AGENTOWNERS gobierna las contribuciones en el límite del repositorio. No intercepta llamadas a modelos o herramientas en otros lugares, no aísla la ejecución del código ni evalúa si el código es correcto.

## Estado actual

El proyecto está en fase preliminar: aún no se publicaron los paquetes npm ni la Action estable v0. El README recomienda evaluarlo desde el código fuente y no fijar main en workflows de producción.

## Fuente

[README de AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS#readme), consultado el 11 de noviembre de 2026.

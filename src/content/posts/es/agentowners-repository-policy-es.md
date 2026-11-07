---
title: "AGENTOWNERS: políticas de repositorio para agentes"
description: "Reglas deterministas para definir qué acciones pueden realizar los agentes."
lang: es
slug: agentowners-repository-policy-es
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Una guía explica cómo debe trabajar un agente, pero no impone qué acciones puede realizar. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) añade una política determinista en un archivo YAML versionado en el repositorio.

El motor detecta agentes, clasifica rutas modificadas e interpreta acciones con un orden fijo: bloquear, exigir aprobación, permitir. Los agentes desconocidos requieren aprobación; los cambios en workflows y secretos se bloquean. El núcleo no usa modelos ni servicios externos de políticas. El proyecto está en fase previa al lanzamiento: los paquetes npm y la Action estable v0 aún no se publican. No es un sandbox de ejecución.

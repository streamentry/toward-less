---
title: "Encuentra las máquinas de estados ocultas en tu app"
description: "Usa IA para detectar estados escondidos en indicadores y verifica en el código cuáles necesitan un modelo explícito."
author: "C.S Chánh Niệm"
lang: es
slug: implicit-state-machines-es
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

Muchas aplicaciones guardan el estado en indicadores dispersos: cargando, error, editando, conectado. Al combinarse, pueden permitir situaciones que nadie quiso, como estar cargando y en error a la vez.

Una publicación de Steve Ruiz en X propuso pedir a un agente que encontrara esas máquinas de estado implícitas. Trata el resultado como una lista de candidatos que hay que comprobar, no como hechos. [1]

Para cada candidato, pide al agente que muestre:

- los archivos y variables que lo representan;
- los estados y transiciones que permite el código;
- qué combinaciones deberían ser imposibles y qué código aún las permite.

Comprueba cada afirmación en el repositorio. Algunos indicadores son independientes y no necesitan un modelo formal. Haz explícita una máquina de estados cuando los estados interactúan, se multiplican, causan errores o impiden entender qué puede hacer la función. Un diagrama solo sirve si aclara esas reglas.

Deja que el agente proponga el mapa; que el código lo confirme.

### Fuente

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

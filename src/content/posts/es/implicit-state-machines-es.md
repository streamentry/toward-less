---
title: "Encuentra las máquinas de estados ocultas en tu app"
description: "Pregunta dónde guarda tu app su estado, y nombra los modos en los que realmente puede estar."
author: "C.S Chánh Niệm"
lang: es
slug: implicit-state-machines-es
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
draft: false
featured: false
tags: [technology]
---

La mayoría de las apps no tienen una máquina de estados. Tienen muchas, sin nombre.

Una bandera de carga aquí, una de error allá, una de edición, una de sesión iniciada. Cada una, por separado, parece pequeña. Juntas se combinan en modos que nadie eligió: cargando y con error a la vez, editando algo que ya no existe, guardado y sin guardar al mismo tiempo.

En una publicación en X, Steve Ruiz (@steveruizok) sugiere un prompt: *“find all of the implicit state machines in my app”* — encuentra todas las máquinas de estados implícitas en mi app.

Pide la lista con evidencia. ¿Dónde vive cada una en el código? ¿En qué estados puede estar? ¿Qué la mueve de uno a otro? ¿Qué combinaciones no pueden ocurrir, y cuáles no deberían ocurrir pero ocurren?

Lo importante es nombrarlas, no dibujar el diagrama. Una vez que un modo tiene nombre, puedes preguntar si debería existir. A menudo la respuesta es no — y eliminarlo es más simple que gestionarlo.

No toda bandera necesita una máquina formal. Eso sería cambiar un tipo de desorden por otro. Vale la pena nombrar una máquina cuando los estados se multiplican, cuando un error surge porque la app está en dos modos a la vez, o cuando alguien nuevo no puede decir qué puede hacer la app.

La IA puede equivocarse en esto. Deja que proponga las máquinas; deja que el código las ponga a prueba.

**Menos estados posibles, una visión más clara.**

*Inspirado en una publicación de [Steve Ruiz (@steveruizok)](https://x.com/steveruizok/status/2116552016218710389) en X. La publicación fue verificada el 8 de noviembre de 2026: 10:24 p. m., 31 de octubre de 2026.*

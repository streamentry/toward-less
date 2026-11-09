---
title: "Arregla lo que tengas claro"
description: "Alex Albert ejecuta el mismo prompt en todos sus proyectos cada vez que llega un modelo nuevo: lee todo el proyecto, encuentra todo lo que está roto, es inconsistente, ineficiente o ya no hace falta, arregla aquello de lo que estés seguro y enumera el resto para que lo revise. El prompt es bueno, y la mitad que sostiene todo es la lista, no los arreglos."
author: "C.S Chánh Niệm"
lang: es
slug: arregla-lo-que-tengas-claro-es
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Cada vez que llega un modelo nuevo, Alex Albert ejecuta el mismo prompt en todos sus proyectos: lee todo este proyecto y encuentra todo lo que está roto, es inconsistente, ineficiente o ya no hace falta. Arregla aquello de lo que estés seguro y enumera el resto para que lo revise. Muy recomendable probarlo.

Es un buen prompt, y la razón de que sea bueno no son los arreglos. Es la división. El prompt divide el trabajo en dos mitades — lo que el modelo puede cambiar por su cuenta y lo que debe traer de vuelta para que un humano decida — y la segunda mitad es la que hace segura a la primera. La mayoría de los prompts para agentes fallan porque le dan al modelo un solo trabajo, "arréglalo", sin ningún límite. Este dibuja el límite dentro de la propia instrucción.

El prompt también orienta al modelo hacia el tipo de trabajo adecuado. Construir es el uso llamativo de un agente; mantener es el uso fiable. Encontrar código muerto, nombres inconsistentes, lógica duplicada y cosas que ya no hacen falta es trabajo acotado con diffs revisables. Una eliminación errónea aparece en un diff. Una función errónea aparece en producción. El prompt de Albert trata al modelo como un conserje con una lista de comprobación, que es el papel en el que los agentes son realmente buenos, y le pide que devuelva la lista.

Pero el prompt tiene tres puntos débiles, y vale la pena nombrarlos antes de ejecutarlo.

Primero, "arregla aquello de lo que estés seguro". La confianza de un modelo no está calibrada. Los modelos se equivocan con total seguridad justo en las cosas que les parecen más ciertas: una corrección de aspecto plausible para un error sutil, una "simplificación" que elimina un caso especial decisivo. La seguridad del prompt depende de que el modelo sepa de qué está seguro, y eso es justo lo único que no puede saber de forma fiable. La mitad de enumerar-para-revisar es la mitad que sostiene todo precisamente porque la mitad de arreglar no puede vigilarse a sí misma.

Segundo, "lee todo este proyecto". En un proyecto pequeño, el modelo puede. En uno grande, no puede: los límites de contexto hacen que tome muestras, y no te dirá que lo ha hecho. El prompt funciona mejor donde el proyecto cabe en la ventana, y se degrada en silencio donde no cabe. Si tu proyecto es grande, la versión honesta del prompt nombra las partes que hay que leer.

Tercero, el prompt comprime cuatro juicios distintos en una sola instrucción: roto, inconsistente, ineficiente, ya no necesario. Eso es corrección, consistencia, rendimiento y código muerto: cuatro formas distintas de mirar. Un modelo encontrará los fáciles — código muerto, deriva de estilo — y pasará por alto los difíciles: el error sutil, la inconsistencia arquitectónica que solo aparece al mirar tres archivos a la vez. Un prompt, cuatro trabajos, y el modelo hará los dos en los que es bueno e informará de los demás como terminados.

Este blog ejecutó algo muy parecido al prompt de Albert, a mano, sobre sí mismo. Una auditoría de las máquinas de estado implícitas en Toward Less encontró trece máquinas vivas y cuatro fantasmas: dos definiciones distintas de "publicado", lógica de tema duplicada en dos lugares, detección de idioma duplicada con una función muerta, enlaces de paginación que apuntaban a páginas que no existían. Cada una de ellas es exactamente lo que pide el prompt de Albert — inconsistente, ineficiente, ya no necesario — y cada una se encontró leyendo todo el proyecto y enumerando lo que estaba mal antes de arreglarlo. La lista vino primero. Los arreglos vinieron después, en una copia limpia, y se verificaron antes de publicar nada.

Así que prueba el prompt. Pero ejecútalo por la lista, no por los arreglos. Lee la lista tú mismo, comprueba los arreglos que hizo contra la lista que devolvió, y recuerda que "estoy seguro de esto" es una frase que un modelo dirá sobre casi cualquier cosa. El prompt es bueno porque mantiene a un humano en el bucle. El bucle es lo importante.

*Inspirado por la publicación en X ["Cada vez que tenemos un modelo nuevo, ejecuto el mismo prompt sencillo en todos mis proyectos: 'Lee todo este proyecto y encuentra todo lo que está roto, es inconsistente, ineficiente o ya no hace falta. Arregla aquello de lo que estés seguro y enumera el resto para que lo revise.' Muy recomendable probarlo"](https://x.com/alexalbert__/status/2119884951550386671) de [Alex Albert (@alexalbert__)](https://x.com/alexalbert__/status/2119884951550386671). La publicación se verificó el 10 de noviembre de 2026: 3:08 AM, 10 Nov 2026, 61.5K visualizaciones. Alex Albert trabaja en investigación en Anthropic. La auditoría de máquinas de estado de Toward Less mencionada en este artículo es la auditoría propia del blog del 8 de noviembre de 2026, guardada en workspace/toward-less/audit/implicit-state-machines-audit.md.*

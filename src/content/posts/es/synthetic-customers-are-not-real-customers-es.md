---
title: "Los clientes sintéticos no son clientes reales"
description: "Qué puede y qué no puede decirnos la investigación de similitud semántica de Colgate sobre la intención de compra."
lang: es
slug: synthetic-customers-are-not-real-customers-es
translationKey: synthetic-customers-ssr-2026
pubDatetime: 2026-11-22T12:00:00+07:00
draft: false
featured: false
tags: [life]
---

Una afirmación viral sostiene que Colgate ha vuelto obsoleta la investigación de mercados. La idea que hay detrás es más útil y menos espectacular.

Investigadores vinculados a Colgate-Palmolive y PyMC Labs estudiaron la **valoración por similitud semántica (SSR)**, una forma de convertir las respuestas de un modelo de lenguaje en puntuaciones similares a las de una encuesta. En lugar de pedir directamente a una IA que elija un número en una escala de Likert, el método solicita una reacción escrita y después mide su cercanía semántica a las descripciones de distintas puntuaciones.

Ese cambio importa. Los modelos de lenguaje suelen responder de formas poco naturales cuando se les piden valoraciones numéricas. Permitirles responder primero en lenguaje natural puede producir puntuaciones más parecidas a los patrones de las encuestas humanas.

## Qué puso a prueba el estudio

La evaluación descrita abarcó **57 encuestas sobre conceptos de productos de cuidado personal y unas 9.300 respuestas humanas**. Los autores comunicaron un rendimiento que alcanzaba aproximadamente el **90% de la fiabilidad test-retest humana**, según su método de evaluación.

Eso *no* equivale a predecir correctamente el 90% de las compras reales. La fiabilidad test-retest se refiere a la consistencia con la que pueden reproducirse las respuestas de una encuesta. La investigación estudia la **intención de compra declarada**, no el comportamiento observado al pagar.

Lo llamativo no es que un modelo se haya convertido en consumidor humano. Es que un método cuidadosamente diseñado para obtener y puntuar respuestas puede ayudar a aproximar ciertos patrones de las encuestas humanas.

## Tres preguntas diferentes

1. **¿Alguien diría que le gusta este concepto?** Los métodos de encuesta sintética pueden ayudar a estimar patrones de respuesta.
2. **¿Alguien gastaría dinero en él?** Una valoración hipotética no puede demostrarlo.
3. **¿Tendrá éxito el negocio?** Eso también depende de cómo se descubra el producto, la distribución, la competencia, la confianza, el uso repetido y la rentabilidad por unidad.

Confundir estas preguntas convierte una herramienta útil en una ilusión costosa.

## El problema oculto de 1.000 entrevistas con IA

Mil perfiles generados no son necesariamente mil observaciones independientes. Pueden compartir los mismos supuestos de los datos de entrenamiento y los sesgos del modelo. Las instrucciones demográficas también pueden reproducir estereotipos en lugar del comportamiento real de cada grupo. Más respuestas sintéticas no reducen automáticamente el error sistemático.

Además, si se pide a un modelo que evalúe un producto novedoso que cambia comportamientos, puede haber pocos patrones históricos fiables que imitar.

## Un mejor uso de la investigación sintética

Utiliza SSR como un **filtro barato antes de gastar dinero**, no como prueba definitiva de la demanda.

Genera conceptos y mensajes alternativos. Usa las reacciones sintéticas para detectar lenguaje confuso, posibles objeciones e hipótesis sobre distintos segmentos de clientes. Después presenta las opciones más prometedoras a personas reales.

Una secuencia práctica de validación:

- Pide al modelo que ordene diez conceptos y registra sus supuestos.
- Realiza una pequeña encuesta humana a ciegas sobre los mismos conceptos.
- Haz un experimento con una página de presentación o una prueba piloto de pago para medir el compromiso real.
- Compara qué enfoque predice mejor el comportamiento observado, no solo cuál ofrece la explicación más convincente.

Si las puntuaciones sintéticas predicen repetidamente resultados reales con conceptos nuevos, aumenta su papel. Si no, trátalas como material para generar ideas.

**El futuro de la investigación de mercados puede incluir menos encuestas de poco valor. Seguirá necesitando contacto con la realidad.**

---

*Investigación comentada: «LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings» (2025), [arXiv:2510.08338](https://arxiv.org/abs/2510.08338). Los hallazgos se refieren a los conceptos, poblaciones y métricas estudiados; no demuestran una predicción perfecta según variables demográficas y de precio ni la sustitución de toda la industria de investigación.*

---
title: "Clientes sintéticos não são clientes reais"
description: "O que a pesquisa de similaridade semântica da Colgate pode e não pode nos dizer sobre intenção de compra."
lang: pt
slug: synthetic-customers-are-not-real-customers-pt
translationKey: synthetic-customers-ssr-2026
pubDatetime: 2026-11-22T12:00:00+07:00
draft: false
featured: false
tags: [life]
---

Uma afirmação viral diz que a Colgate tornou a pesquisa de mercado obsoleta. A ideia por trás disso é mais útil e menos dramática.

Pesquisadores ligados à Colgate-Palmolive e à PyMC Labs estudaram a **avaliação por similaridade semântica (SSR)**, uma forma de transformar respostas de modelos de linguagem em notas semelhantes às de uma pesquisa. Em vez de pedir diretamente à IA que escolha um número em uma escala Likert, o método solicita uma reação por escrito e depois mede sua proximidade semântica com as descrições de diferentes notas.

Essa mudança importa. Os modelos de linguagem costumam responder de maneira pouco natural quando recebem pedidos de avaliações numéricas. Deixá-los responder primeiro em linguagem natural pode produzir notas mais parecidas com os padrões das pesquisas com pessoas.

## O que o estudo realmente testou

A avaliação relatada abrangeu **57 pesquisas sobre conceitos de produtos de cuidados pessoais e cerca de 9.300 respostas humanas**. Os autores relataram desempenho que chegava a aproximadamente **90% da confiabilidade teste-reteste humana**, segundo sua abordagem de avaliação.

Isso *não* equivale a prever corretamente 90% das compras reais. A confiabilidade teste-reteste trata da consistência com que as respostas de uma pesquisa podem ser reproduzidas. A investigação se concentra na **intenção de compra declarada**, não no comportamento observado na hora de pagar.

O surpreendente não é que um modelo tenha se tornado um consumidor humano. É que um método cuidadosamente elaborado para obter e pontuar respostas pode ajudar a aproximar alguns padrões das respostas humanas a pesquisas.

## Três perguntas diferentes

1. **Alguém diria que gosta deste conceito?** Métodos de pesquisa sintética podem ajudar a estimar padrões nas respostas.
2. **Alguém gastaria dinheiro com ele?** Uma avaliação hipotética não demonstra isso.
3. **O negócio terá sucesso?** Isso também depende de como o produto será descoberto, distribuição, concorrência, confiança, uso repetido e rentabilidade por unidade.

Confundir essas perguntas transforma uma ferramenta útil em uma ilusão cara.

## O problema oculto de 1.000 entrevistas com IA

Mil perfis gerados não são necessariamente mil observações independentes. Podem compartilhar os mesmos pressupostos dos dados de treinamento e os mesmos vieses do modelo. Instruções demográficas também podem reproduzir estereótipos em vez do comportamento real de subgrupos. Mais respostas sintéticas não reduzem automaticamente o erro sistemático.

Além disso, se o modelo precisa avaliar um produto novo que muda comportamentos, talvez haja poucos padrões históricos confiáveis a imitar.

## Um uso melhor da pesquisa sintética

Use SSR como um **filtro barato antes de gastar dinheiro**, não como evidência final de demanda.

Gere conceitos e mensagens concorrentes. Use reações sintéticas para identificar linguagem pouco clara, possíveis objeções e hipóteses sobre diferentes segmentos de clientes. Depois apresente as opções mais fortes a pessoas reais.

Uma sequência prática de validação:

- Peça ao modelo que classifique dez conceitos e registre seus pressupostos.
- Faça uma pequena pesquisa humana às cegas sobre os mesmos conceitos.
- Realize um experimento com uma página de apresentação ou um projeto piloto pago para medir o compromisso real.
- Compare qual abordagem prevê melhor o comportamento observado, não apenas qual produz a explicação mais convincente.

Se as pontuações sintéticas preveem repetidamente resultados reais em conceitos novos, amplie seu papel. Caso contrário, trate-as como material para gerar ideias.

**O futuro da pesquisa de mercado pode ter menos pesquisas de baixo valor. Ainda precisará de contato com a realidade.**

---

*Pesquisa discutida: “LLMs Reproduce Human Purchase Intent via Semantic Similarity Elicitation of Likert Ratings” (2025), [arXiv:2510.08338](https://arxiv.org/abs/2510.08338). As conclusões dizem respeito aos conceitos, populações e métricas testados; não comprovam previsão perfeita por características demográficas e preço nem a substituição de todo o setor de pesquisa.*

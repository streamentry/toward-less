---
title: "Você é o Loop"
description: "Os níveis 0–7 ajudam a diagnosticar agentes de código, mas não são um modelo universal nem um caminho obrigatório."
author: "C.S Chánh Niệm"
lang: pt
slug: voce-e-o-loop-pt
translationKey: harness-loops-graphs-2026
pubDatetime: 2026-11-10T05:31:00+07:00
draft: false
featured: false
tags: [technology]
---
O X Article de m4lka descreve sistemas de agentes de código nos níveis 0 a 7: são oito etapas quando se começa a contagem pelo zero. O modelo separa funções que as equipes costumam misturar:

- 0, chat: uma pessoa coordena cada passo.
- 1, harness: o modelo recebe ferramentas e acesso a arquivos.
- 2, estado e permissões: a memória persiste e os limites são aplicados.
- 3, ciclo de verificação: um teste pode falhar; “o modelo diz que terminou” não é verificação.
- 4, feedback: as tentativas são limitadas e falhas repetidas são escaladas.
- 5, grafo: dependências reais ficam explícitas.
- 6, barreiras e retornos: o trabalho aprovado permanece e só as falhas são refeitas.
- 7, aprendizado: falhas criam restrições para a camada responsável.

É um modelo de design para agentes de software, não uma escala validada empiricamente. Testes e builds podem ser repetidos; escrita, design e negociação costumam depender de julgamento sem teste determinístico.

Os níveis servem para diagnóstico, não são um caminho obrigatório. Uma tarefa única e barata talvez precise apenas de chat. É possível projetar uma verificação antes de construir o harness inteiro. Acrescente camadas quando o custo da falha justificar o esforço. Definir uma barreira pelo custo de desfazer é uma heurística, não uma lei.

O último nível também tem um problema de medição: “a mesma classe de falha” depende de como as pessoas agrupam falhas depois que ocorrem. Defina as classes antes e acompanhe se o custo de cada repetição diminui.

O modelo ajuda a organizar o design de agentes de código; não prova que eles funcionem sem supervisão nem que toda tarefa precise de todas as camadas.

Fonte: m4lka, [“Harness, Loops, Graphs: What Each Layer Fixes and What It Breaks”, X Article, 25 de outubro de 2026 (status 2114338456750997922)](https://x.com/m4lkxx/status/2114338456750997922). A página do X não pôde ser recarregada nesta revisão; as citações diretas foram removidas.

---
title: "Encontre as máquinas de estados escondidas no seu app"
description: "Pergunte onde seu app guarda seu estado, e nomeie os modos em que ele realmente pode estar."
author: "C.S Chánh Niệm"
lang: pt
slug: implicit-state-machines-pt
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
draft: false
featured: false
tags: [technology]
---

A maioria dos apps não tem uma máquina de estados. Tem muitas, sem nome.

Uma flag de carregamento aqui, uma de erro ali, uma de edição, uma de login. Cada uma, sozinha, parece pequena. Juntas, elas se combinam em modos que ninguém escolheu: carregando e com erro ao mesmo tempo, editando algo que já não existe, salvo e não salvo ao mesmo tempo.

Em uma publicação no X, Steve Ruiz (@steveruizok) sugere um prompt: *“find all of the implicit state machines in my app”* — encontre todas as máquinas de estados implícitas no meu app.

Peça a lista com evidências. Onde vive cada uma no código? Em que estados ela pode estar? O que a move de um para outro? Quais combinações não podem acontecer, e quais não deveriam acontecer, mas acontecem?

Nomear é o ponto, não desenhar o diagrama. Uma vez que um modo tem nome, dá para perguntar se ele deveria existir. Muitas vezes a resposta é não — e removê-lo é mais simples do que lidar com ele.

Nem toda flag precisa de uma máquina formal. Isso seria trocar um tipo de bagunça por outro. Vale a pena nomear uma máquina quando os estados se multiplicam, quando um bug surge porque o app está em dois modos ao mesmo tempo, ou quando alguém novo não consegue dizer o que o app pode fazer.

A IA pode errar nisso. Deixe que ela proponha as máquinas; deixe que o código as teste.

**Menos estados possíveis, uma visão mais clara.**

*Inspirado em uma publicação de [Steve Ruiz (@steveruizok)](https://x.com/steveruizok/status/2116552016218710389) no X. A publicação foi verificada em 8 de novembro de 2026: 22h24, 31 de outubro de 2026.*

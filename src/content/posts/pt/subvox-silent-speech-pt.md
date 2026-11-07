---
title: "Um pequeno experimento sobre fala silenciosa"
description: "O Subvox testa se o movimento da cabeça captado pelos AirPods Pro distingue algumas palavras articuladas sem voz."
lang: pt
slug: subvox-silent-speech-pt
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

O [Subvox](https://github.com/joeblau/subvox) investiga uma pergunta específica: o movimento dos AirPods Pro contém sinal suficiente para distinguir algumas palavras articuladas em silêncio?

É um protótipo para macOS, não um sistema geral de fala silenciosa. Ele registra aceleração, velocidade de rotação e orientação dos fones, divide cada tentativa em segmentos e os compara com modelos de palavras por alinhamento temporal dinâmico. A tela Train compara a precisão leave-one-out com 500 testes de permutação dos rótulos. Decode mostra as previsões do movimento ao lado da transcrição ao vivo do microfone. Não há modelo de linguagem.

O experimento pode ser inspecionado: gráficos dos sensores, gravações de sessões, seleção de características e limites de rejeição mostram o que está sendo testado. Mas o README descreve o método sem informar uma precisão observada. O sinal também é limitado: cerca de 25 Hz, sobretudo movimentos da cabeça e da mandíbula, não vibrações da voz. Os modelos dependem da pessoa e da sessão e podem mudar quando os fones são recolocados.

O Subvox é um experimento para medir um sinal, não uma prova de que a fala silenciosa está pronta para o uso cotidiano.

[Veja o projeto no GitHub](https://github.com/joeblau/subvox).

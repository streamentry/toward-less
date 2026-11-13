---
title: "Um pequeno experimento sobre fala silenciosa"
description: "Subvox testa se o movimento dos fones distingue algumas palavras articuladas em silêncio."
lang: pt
slug: subvox-silent-speech-pt
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox testa se os movimentos da cabeça captados pelos AirPods Pro conseguem distinguir algumas palavras articuladas em silêncio. É um protótipo para macOS, não um sistema geral de reconhecimento de fala.

O protótipo:

- registra aceleração, rotação e orientação a cerca de 25 Hz; o sinal vem sobretudo dos movimentos da cabeça e da mandíbula, não de vibrações vocais;
- compara segmentos com modelos de palavras específicos de cada usuário e sessão por dynamic time warping;
- compara a classificação leave-one-out com 500 testes de rótulos embaralhados e mostra a transcrição do microfone ao lado das previsões de movimento.

O README descreve o método, mas não apresenta um resultado de precisão observado. Recolocar os fones pode alterar os modelos; o protótipo não usa modelo de linguagem. Ele testa um sinal, mas não demonstra que a fala silenciosa esteja pronta para o uso cotidiano.

Fonte: [README do Subvox](https://github.com/joeblau/subvox/blob/main/README.md) (consultado em 14 de novembro de 2026).

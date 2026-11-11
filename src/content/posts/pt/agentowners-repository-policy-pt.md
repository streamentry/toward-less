---
title: "AGENTOWNERS: políticas de repositório para agentes"
description: "O que o AGENTOWNERS decide, o que não controla e por que ainda está em pré-lançamento."
lang: pt
slug: agentowners-repository-policy-pt
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
O AGENTOWNERS responde a uma pergunta: segundo a política registrada no repositório, um agente de IA pode executar esta ação? O README o descreve como um mecanismo determinístico de regras, não como revisor de código por IA nem como sandbox de execução.

## O que ele decide

- Lê uma política YAML versionada, detecta sinais de agentes, classifica caminhos alterados e infere ações.
- Resolve conflitos nesta ordem: bloquear, exigir aprovação, permitir. Agentes desconhecidos exigem aprovação por padrão; mudanças em workflows e arquivos secretos são bloqueadas.
- A mesma política e as mesmas entradas produzem o mesmo veredito. O mecanismo não chama modelo nem API externa de políticas.

## O que ele não controla

O AGENTOWNERS governa contribuições na fronteira do repositório. Não intercepta chamadas a modelos ou ferramentas fora dali, não isola a execução do código e não avalia sua correção.

## Estado atual

O projeto está em pré-lançamento: os pacotes npm e a Action estável v0 ainda não foram publicados. O README recomenda avaliar a partir do código-fonte e não fixar main em workflows de produção.

## Fonte

[README do AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS#readme), consultado em 11 de novembro de 2026.

---
title: "AGENTOWNERS: políticas de repositório para agentes"
description: "Regras determinísticas para definir quais ações os agentes podem executar."
lang: pt
slug: agentowners-repository-policy-pt
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Um guia explica como agentes devem trabalhar, mas não impõe quais ações estão autorizados a executar. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) acrescenta política determinística em um arquivo YAML versionado no repositório.

O mecanismo detecta agentes, classifica caminhos alterados e avalia regras em ordem fixa: bloquear, exigir aprovação, permitir. Agentes desconhecidos exigem aprovação; mudanças em workflows e arquivos secretos são bloqueadas. O núcleo não usa modelos nem serviços externos de política. O projeto está em pré-lançamento: pacotes npm e Action estável v0 ainda não foram publicados. Não é um sandbox de execução.

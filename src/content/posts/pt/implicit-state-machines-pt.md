---
title: "Encontre as máquinas de estados escondidas no seu app"
description: "Use IA para mapear estados escondidos em sinalizadores e verifique no código quais precisam de um modelo explícito."
author: "C.S Chánh Niệm"
lang: pt
slug: implicit-state-machines-pt
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

Muitos aplicativos guardam estado em sinalizadores espalhados: carregando, erro, editando, conectado. Juntos, eles podem permitir combinações que ninguém planejou, como estar carregando e em erro ao mesmo tempo.

Em uma publicação no X, Steve Ruiz sugeriu pedir a um agente que encontrasse essas máquinas de estado implícitas. Trate o resultado como candidatos a verificar, não como fatos. [1]

Para cada candidato, peça ao agente que mostre:

- os arquivos e as variáveis que o representam;
- os estados e as transições permitidos pelo código;
- quais combinações deveriam ser impossíveis e qual código ainda as permite.

Confira cada afirmação no repositório. Alguns sinalizadores são independentes e não precisam de um modelo formal. Torne uma máquina de estados explícita quando os estados interagem, se multiplicam, causam bugs ou deixam difícil entender o que a funcionalidade pode fazer. Um diagrama só ajuda quando esclarece essas regras.

Deixe o agente propor o mapa; deixe o código confirmá-lo.

### Fonte

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

---
title: "Agentes que entregam sem você"
description: "O agente não é o sistema. A especificação, as tarefas pequenas e o harness são."
author: "C.S Chánh Niệm"
lang: pt
slug: agentes-que-entregam-sem-voce-pt
translationKey: agents-that-ship-without-you-2026
pubDatetime: 2026-11-08T23:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Em uma publicação no X, shikamaru (@shikamarutsai) compartilha um workshop de 41 minutos de Addy Osmani, engenheiro da Anthropic, antes no Google. A frase citada de Osmani é direta: "O Google me contratou por US$ 500 mil a US$ 1,2 milhão por ano porque eu sei fazer agentes de IA escreverem código que não quebra."

A resposta do workshop não é um prompt melhor. É um harness, em cinco passos: refinar a ideia, escrever a especificação, planejar em tarefas pequenas, construir com testes primeiro e, por fim, verificar e revisar.

Passo um: você entrega um pensamento vago, e o agente entrevista você, voltando com três direções. Passo dois: travar os critérios de sucesso, a stack e as perguntas em aberto antes de uma única linha de código. Passo três: quebrar o trabalho em tarefas pequenas, cada uma com critérios de aceitação e uma lista dos arquivos que ela pode tocar. Passo quatro: construir com testes primeiro, do vermelho ao verde, fatia por fatia, para que nada do que já funciona quebre. Passo cinco: verificar e revisar — o agente abre o aplicativo no navegador, verifica a segurança e simplifica o próprio código.

A publicação diz que Osmani abriu o código de todas as 24 skills, e o repositório está perto de 100 mil estrelas. O Google, segundo a publicação, chama isso de "agentic engineering". A publicação cita um texto complementar de @beamnxw, "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup" — salve o progresso, verifique os resultados, reutilize o fluxo de trabalho, para que uma longa execução deixe algo que se possa abrir, evidências que se possam inspecionar e progresso salvo suficiente para continuar amanhã.

Note para onde o trabalho se moveu. Não para ficar observando o agente, mas para o que acontece antes de ele começar: a entrevista, a especificação, a tarefa pequena com sua fronteira desenhada. Um agente que só pode tocar arquivos nomeados, que precisa passar em um teste antes de avançar, que precisa salvar seu progresso — esse agente pode ser deixado sozinho. Um sem fronteira, não.

É a mesma lição de nomear as máquinas de estado: a liberdade que funciona é a liberdade limitada. O harness é a lista dos modos em que a execução pode estar, e as evidências que ela precisa produzir para passar de um para outro.

Vale não exagerar. "Você não precisa" passar semanas construindo isso à mão — mas o harness é, ele mesmo, semanas de julgamento comprimidas em 24 skills e uma lista de verificação. Um agente que verifica a própria segurança e simplifica o próprio código ainda precisa de alguém fora da execução para ler as evidências. Progresso salvo só é útil se for de fato inspecionado, e "verificar e revisar" é um passo, não uma garantia.

A promessa é mais estreita que o discurso, e melhor por isso: menos observação, menos apego à própria execução. Coloque o cuidado na preparação — a especificação, a tarefa pequena, o estado salvo — e depois solte.

**O agente não é o sistema. O harness é.**

*Inspirado por uma publicação de [shikamaru (@shikamarutsai)](https://x.com/shikamarutsai/status/2119197676415877128) no X, sobre o workshop de Addy Osmani sobre agentic engineering, citando "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup", de @beamnxw. A publicação foi verificada em 8 November 2026: 5:37 AM, 8 November 2026.*

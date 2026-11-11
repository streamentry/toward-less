---
title: "Liste antes de corrigir"
description: "Um prompt de auditoria ajuda na manutenção, mas mudanças incertas ainda precisam de revisão humana."
author: "C.S Chánh Niệm"
lang: pt
slug: corrija-o-que-voce-tem-certeza-pt
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Este artigo mostra como usar um prompt de auditoria com IA para encontrar tarefas de manutenção e manter mudanças incertas sob revisão humana.

Em 9 de novembro de 2026, Alex Albert compartilhou um prompt que usa quando surge um modelo novo: examinar um projeto, localizar o que está quebrado ou é desnecessário, corrigir o que parece claro e listar o restante para revisão. O ponto útil é separar alterações de decisões.

A instrução central é: “Fix what you’re sure about and list the rest for me to review.” (em tradução: corrija o que estiver claro e liste o restante para revisão.)

## Três limites

- **Confiança não é evidência.** “Corrija o que você tem certeza” ainda pode gerar uma mudança errada. Peça os arquivos relevantes, os testes e a justificativa antes de aceitar uma correção.
- **“O projeto inteiro” exige um relatório de cobertura.** Peça ao agente que liste o que leu e o que ignorou. Um pedido amplo não prova que todos os arquivos foram revisados.
- **Cada achado pede uma verificação diferente.** Uma correção de bug precisa de testes; uma alegação de desempenho, de medições; uma exclusão, de evidência de que o código não é usado; uma mudança de estilo, de uma convenção clara do projeto.

## Um fluxo mais seguro

- Peça primeiro uma lista priorizada, com caminhos de arquivos e evidências para cada achado.
- Permita apenas alterações pequenas e mecânicas que não mudem o comportamento.
- Encaminhe para aprovação as exclusões, mudanças de comportamento, refatorações entre arquivos e achados incertos.
- Compare o diff com a lista e execute as verificações do projeto.

Use o prompt para criar uma fila de revisão, não para dar autoridade ilimitada ao agente. O limite está na lista revisada por uma pessoa, não na confiança do modelo.

*Fonte: Alex Albert (@alexalbert__), [publicação X 2119884951550386671](https://x.com/alexalbert__/status/2119884951550386671), 9 de novembro de 2026. O X retornou erro 403 nesta revisão; o texto foi conferido em uma [cópia da linha do tempo de Albert no Teapawt](https://teapawt.org/alexalbert__). Trata-se de uma cópia secundária.*

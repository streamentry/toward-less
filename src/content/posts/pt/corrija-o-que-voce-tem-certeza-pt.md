---
title: "Corrija o que você tem certeza"
description: "Alex Albert usa o mesmo prompt em todos os projetos sempre que chega um novo modelo: leia o projeto inteiro, encontre tudo que está quebrado, inconsistente, ineficiente ou não é mais necessário, corrija o que você tem certeza e liste o resto para revisão. O prompt é bom — e a metade que sustenta tudo é a lista, não as correções."
author: "C.S Chánh Niệm"
lang: pt
slug: corrija-o-que-voce-tem-certeza-pt
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Toda vez que chega um novo modelo, Alex Albert usa o mesmo prompt em todos os seus projetos: leia este projeto inteiro e encontre tudo que está quebrado, inconsistente, ineficiente ou não é mais necessário. Corrija o que você tem certeza e liste o resto para eu revisar. Recomendo muito tentar.

É um bom prompt, e a razão de ser bom não é a correção. É a divisão. O prompt divide o trabalho em duas metades — o que o modelo pode mudar por conta própria e o que ele deve trazer de volta para um humano decidir — e é a segunda metade que torna a primeira segura. A maioria dos prompts de agente falha porque dá ao modelo um único trabalho, "conserte," sem nenhum limite. Este desenha o limite dentro da própria instrução.

O prompt também aponta o modelo para o tipo certo de trabalho. Construir é o uso glamouroso de um agente; manter é o uso confiável. Encontrar código morto, nomes inconsistentes, lógica duplicada e coisas que não são mais necessárias é um trabalho limitado, com diffs revisáveis. Uma exclusão errada aparece num diff. Um recurso errado aparece em produção. O prompt de Albert trata o modelo como um zelador com uma lista de verificação, que é o papel em que os agentes são realmente bons, e pede a lista de volta.

Mas o prompt tem três pontos fracos, e vale nomeá-los antes de executá-lo.

Primeiro, "corrija o que você tem certeza." A confiança de um modelo não é calibrada. Modelos erram com confiança exatamente nas coisas que mais lhes parecem certas — uma correção de aparência plausível para um bug sutil, uma "simplificação" que remove um caso especial que sustenta tudo. A segurança do prompt depende de o modelo saber do que ele tem certeza, e isso é justamente o que ele não consegue saber de forma confiável. A metade da lista para revisão é a metade que sustenta tudo precisamente porque não se pode confiar que a metade das correções se vigie a si mesma.

Segundo, "leia este projeto inteiro." Num projeto pequeno, o modelo consegue. Num projeto grande, não — os limites de contexto fazem com que ele amostre, e ele não vai dizer que amostrou. O prompt funciona melhor onde o projeto cabe na janela, e degrada silenciosamente onde não cabe. Se o seu projeto é grande, a versão honesta do prompt nomeia as partes a serem lidas.

Terceiro, o prompt condensa quatro julgamentos diferentes numa só instrução: quebrado, inconsistente, ineficiente, não é mais necessário. Isso é correção, consistência, desempenho e código morto — quatro tipos diferentes de enxergar. Um modelo vai encontrar os fáceis — código morto, desvio de estilo — e perder os difíceis: o bug sutil, a inconsistência arquitetônica que só aparece em três arquivos. Um prompt, quatro trabalhos, e o modelo fará os dois em que é bom e dirá que os outros estão prontos.

Este blog executou algo muito próximo do prompt de Albert, à mão, em si mesmo. Uma auditoria das máquinas de estado implícitas no Toward Less encontrou treze máquinas vivas e quatro fantasmas: duas definições diferentes de "publicado," lógica de tema duplicada em dois lugares, detecção de idioma duplicada com uma função morta, links de paginação apontando para páginas que não existiam. Cada um deles é exatamente o que o prompt de Albert pede — inconsistente, ineficiente, não é mais necessário — e cada um foi encontrado lendo o projeto inteiro e listando o que estava errado antes de corrigir. A lista veio primeiro. As correções vieram depois, num clone limpo, e foram verificadas antes de qualquer push.

Então experimente o prompt. Mas execute-o pela lista, não pelas correções. Leia a lista você mesmo, confira as correções que ele fez com a lista que ele devolveu, e lembre-se de que "tenho certeza disso" é uma frase que um modelo dirá sobre quase qualquer coisa. O prompt é bom porque mantém um humano no circuito. O circuito é o ponto.

*Inspirado pelo post no X ["Every time we have a new model, I run the same simple prompt on all my projects: 'Read this entire project and find everything that's broken, inconsistent, inefficient, or no longer needed. Fix what you're sure about and list the rest for me to review.' highly recommend trying"](https://x.com/alexalbert__/status/2119884951550386671) de [Alex Albert (@alexalbert__)](https://x.com/alexalbert__/status/2119884951550386671). O post foi verificado em 10 de novembro de 2026: 3:08 AM, 10 Nov 2026, 61.5K views. Alex Albert é pesquisador na Anthropic. A auditoria de máquinas de estado do Toward Less mencionada neste post é a auditoria própria do blog, de 8 November 2026, salva em workspace/toward-less/audit/implicit-state-machines-audit.md.*

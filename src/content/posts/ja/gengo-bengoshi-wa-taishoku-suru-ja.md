---
title: "エージェントを使っても、検証できる理解は保つ"
description: "言語の細部は任せても、エージェントが作ったシステムを評価する理解は必要です。"
author: "C.S Chánh Niệm"
lang: ja
slug: gengo-bengoshi-wa-taishoku-suru-ja
translationKey: the-language-lawyer-retires-2026
pubDatetime: 2026-11-09T00:28:00+07:00
modDatetime: 2026-11-11T13:14:00+07:00
draft: false
featured: false
tags: [technology]
---
Robert C. Martin（Uncle Bob）は、以前は C++ を深く学び、自らを「language lawyer」と呼んでいたと書いています。2026年11月6日の X 投稿では、言語の細部をエージェントに任せ、自分はシステム全体の構造に集中すると述べています。低いレベルの詳細が必要なら、エージェントに尋ねます。

2日後、Uudon の中国語投稿はこれを広げ、「開発者はもうプログラミング言語を深く理解する必要はない」とまとめました。これは Uudon の解釈で、Martin の投稿全体と同じではありません。

Martin の方針には実務的な利点があります。エージェントは構文を調べ、見慣れないコードを説明できるため、システムの動作に時間を回せます。ただし、言語の知識は構文だけではありません。型、メモリ、インターフェース、境界条件はソフトウェアの動作に影響します。エージェントの説明も検証が必要です。これは実務上の判断で、Martin の投稿にある研究結果ではありません。

すべての言語を暗記する必要はありません。関連するコードと証拠を判断できるだけの理解は必要です。

- 委任する前に、期待する動作と重要な制約を書く。
- 変更点を確認し、テストが何を見ていないか尋ねる。
- 説明を判断できないなら、その部分を学ぶか別の人にレビューを頼む。

委任によって構文を学ぶ時間は減らせます。公開するものを理解し、責任を持つ必要はなくなりません。

## 出典

- Robert C. Martin（@unclebobmartin）「I used to be a language lawyer」、X投稿、2026年11月6日、[status 2118695884154110305](https://x.com/unclebobmartin/status/2118695884154110305)。
- Uudon（@uudonX）、Martin の主張をまとめた中国語投稿、2026年11月8日、[status 2119243980634530096](https://x.com/uudonX/status/2119243980634530096)。確認時に X は 403 を返したため、全文は [Teapawt の Martin 投稿のコピー](https://teapaw.org/unclebobmartin)と[Uudon の投稿を含む再投稿](https://teapawt.net/orexinsystem)で照合しました。この記事は両方を要約し、Uudon の解釈と Martin の主張を区別します。

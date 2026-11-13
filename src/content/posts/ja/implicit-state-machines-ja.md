---
title: "アプリに隠れた状態機械を見つける"
description: "AIにフラグに隠れた状態を洗い出させ、コードで確かめて、明示的なモデルが必要か判断します。"
author: "C.S Chánh Niệm"
lang: ja
slug: implicit-state-machines-ja
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

多くのアプリでは、読み込み中、エラー、編集中、ログイン済みといった状態が、ばらばらのフラグに保存されています。組み合わさると、読み込み中とエラーが同時に成立するなど、誰も意図していない状態を許すことがあります。

Steve RuizのX投稿は、エージェントにこうした暗黙の状態機械を探させる方法を提案しています。結果は事実ではなく、確認すべき候補として扱います。[1]

候補ごとに、エージェントへ次を示すよう求めます。

- 状態を表すファイルと変数
- コードが許す状態と遷移
- 本来なら起きないはずの組み合わせと、それを許すコード

各指摘をリポジトリで確認します。独立したフラグには形式的なモデルが不要な場合もあります。状態が相互作用する、組み合わせが増える、バグを生む、または機能の挙動が保守担当者に分かりにくいときに、状態機械を明示します。図はルールを分かりやすくするときだけ役立ちます。

地図はエージェントに提案させ、コードで確かめます。

### 出典

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

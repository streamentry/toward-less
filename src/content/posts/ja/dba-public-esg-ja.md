---
title: "U字型のESG結果と、その限界"
description: "DBA論文サイトでは、ESGバックテストの方法と、結果から言える範囲を示しています。"
lang: ja
slug: dba-public-esg-ja
translationKey: dba-public-esg-thesis-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-14T01:16:00+07:00
draft: false
featured: false
tags: [technology]
---

ESGリスクが低いほど、常にリターンが高いのでしょうか。Le Viet HongのDBA学位論文 _The U-Shaped ESG Performance Paradigm_（2026年1月）は、2019〜2024年のS&P 500企業500社を比較します。業種別に標準化したSustainalytics評価でグループを分けます。LightGBMの売買モデルは価格、出来高、テクニカル指標を使い、ESG評価は入力にしません。

論文が報告する過去データでのバックテスト結果です。

- 高リスク群：累積リターン240.35%；最大ドローダウン33.81%。
- 中リスク群：136.63%；32.52%。
- 低リスク群：142.75%；29.08%。

これは一つの過去シミュレーションの結果です。本記事はバックテストを独自に再現していないため、予測や投資ルールとして使える結果ではありません。論文は「ガバナンス主導のリスクプレミアム」を可能な説明として挙げますが、因果関係を証明したとはしていません。

出典：[Le Viet Hong, _The U-Shaped ESG Performance Paradigm_（DBA学位論文、2026年1月）、付録E、表E.2〜E.4およびE.7](https://streamentry.github.io/dba-public/downloads/LVH-20260317.pdf)；[論文サイト](https://streamentry.github.io/dba-public/)；[プロジェクトリポジトリ](https://github.com/streamentry/dba-public)。

---
title: "U字型のESG結果と、その限界"
description: "DBA論文サイトでは、ESGバックテストの方法と、結果から言える範囲を示しています。"
lang: ja
slug: dba-public-esg-ja
translationKey: dba-public-esg-thesis-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

ESGは「リスクが低いほどリターンが高い」という単純な関係として語られがちです。DBA論文 _The U-Shaped ESG Performance Paradigm_ は、その関係がもっと複雑かを検討します。

研究では2019〜2024年のS&P 500企業500社を、業種別に標準化したSustainalytics評価で分類します。LightGBMの売買モデルには価格、出来高、テクニカル指標を使い、ESG評価はグループ分けに使うだけで、モデルへの直接入力にはしません。

報告されたバックテストでは、高リスク群の累積リターンが最も高く240.35%でした。低リスク群は142.75%で、中リスク群の136.63%をわずかに上回り、最大ドローダウンは最小の29.08%でした。これは一つの過去データ・シミュレーションの結果であり、予測や投資選択のルールではありません。

論文は「ガバナンス主導のリスクプレミアム」を考えられる説明として示しますが、因果関係が証明されたとはしていません。サイトでは問い、方法、結果、限界を確認できます。

[論文サイトを見る](https://streamentry.github.io/dba-public/) · [GitHubリポジトリ](https://github.com/streamentry/dba-public)。

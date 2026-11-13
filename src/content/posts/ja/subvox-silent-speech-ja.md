---
title: "無声の口の動きに関する小さな実験"
description: "Subvoxは低頻度のイヤホン動作で少数の無声音声語を区別できるかを試します。"
lang: ja
slug: subvox-silent-speech-ja
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvoxは、AirPods Proの頭部動作データで、声を出さずに口だけで発音した少数の単語を区別できるかを調べます。これはmacOS向けの試作で、汎用的な音声認識システムではありません。

試作では次のことを行います。

- 約25 Hzで加速度、回転、姿勢を記録します。信号は主に頭と顎の動きで、声帯の振動ではありません。
- dynamic time warpingで、ユーザーとセッションごとの単語テンプレートに各区間を照合します。
- leave-one-out分類を500回のラベル置換テストと比較し、動作予測と並べてマイク音声の文字起こしを表示します。

READMEは方法を説明していますが、観測された精度の結果は報告していません。イヤホンを付け直すとテンプレートがずれることがあり、言語モデルも使いません。信号を試す実験であり、無声音声が日常利用に適していることを示すものではありません。

出典：[Subvox README](https://github.com/joeblau/subvox/blob/main/README.md)（2026年11月14日閲覧）。

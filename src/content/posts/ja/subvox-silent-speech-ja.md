---
title: "無声の口の動きに関する小さな実験"
description: "SubvoxはAirPods Proの頭部運動から、声に出さず口を動かした少数の単語を区別できるか試します。"
lang: ja
slug: subvox-silent-speech-ja
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox)が検証するのは、範囲を絞った問いです。AirPods Proの動きのデータで、声を出さずに口を動かした少数の単語を区別できるでしょうか。

これはmacOS用の試作で、汎用的な無声発話システムではありません。ヘッドホンの加速度、回転速度、姿勢を記録し、試行ごとに区切ってから、動的時間伸縮法で単語テンプレートと照合します。Train画面ではleave-one-out精度をラベルを500回入れ替えたテストと比較します。Decode画面では動きからの予測とマイクのリアルタイム文字起こしを並べて表示します。言語モデルは使いません。

センサーグラフ、セッション記録、使う動きの特徴量の選択、棄却しきい値があり、何を試しているか確認できます。ただしREADMEは方法を説明するだけで、実測精度の結果は報告していません。信号も限られています。約25 Hzで、声の振動ではなく主に頭と顎の動きを捉えます。テンプレートは利用者とセッションごとに異なり、イヤホンを付け直すと変わる場合があります。

Subvoxは信号を測る実験であり、無声発話が日常利用に適している証拠ではありません。

[GitHubでプロジェクトを見る](https://github.com/joeblau/subvox)。

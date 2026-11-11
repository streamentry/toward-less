---
title: "AGENTOWNERS：AIエージェント向けリポジトリ方針"
description: "AGENTOWNERSが決めること、制御できないこと、そしてまだプレリリースである理由。"
lang: ja
slug: agentowners-repository-policy-ja
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERSは「リポジトリに記録されたポリシーの下で、AIエージェントはこの操作を実行できるか」という問いに答える。READMEによると、これは決定論的なルールエンジンであり、AIコードレビューでも実行時サンドボックスでもない。

## 決めること

- バージョン管理されたYAMLポリシーを読み、エージェントの兆候を検出し、変更パスを分類して操作を推定する。
- 衝突は「ブロック、承認を要求、許可」の順で解決する。不明なエージェントは既定で承認が必要。ワークフローとシークレットファイルの変更は既定でブロックされる。
- 同じポリシーと入力には同じ判定を返す。モデルやホスト型ポリシーAPIは呼び出さない。

## 制御できないこと

AGENTOWNERSが統制するのはリポジトリ境界での貢献だ。他所でのモデルやツールの呼び出しを遮断せず、コード実行を隔離せず、コードの正しさも評価しない。

## 現在の状態

プロジェクトはプレリリース段階で、npmパッケージと安定版v0 GitHub Actionは未公開。READMEはソースから評価し、本番ワークフローでmainを固定先にしないよう案内している。

## 出典

2026年11月11日に確認した[AGENTOWNERS README](https://github.com/streamentry/AGENTOWNERS#readme)。

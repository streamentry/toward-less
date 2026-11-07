---
title: "AGENTOWNERS：AIエージェント向けリポジトリ方針"
description: "エージェントが実行できる操作を定める決定的なポリシー。"
lang: ja
slug: agentowners-repository-policy-ja
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

エージェント向けガイドは作業方法を説明しますが、操作権限を強制しません。[AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS)は、リポジトリで管理するYAMLファイルに決定的なポリシーを記します。

エンジンはエージェントを検出し、変更パスを分類して、ブロック、承認要求、許可の順に判定します。未知のエージェントには承認が必要で、workflowや秘密ファイルの変更はブロックされます。コアはモデルや外部ポリシーサービスを使いません。npmパッケージと安定版v0 Actionは未公開のプレリリースです。実行時のサンドボックスではありません。

---
title: "URLを貼るだけではストア公開にならない"
description: "Webからアプリを作るデモにも、実装方法、開発者アカウント、ストア審査が必要です。"
author: "C.S Chánh Niệm"
lang: ja
slug: url-wo-haru-dake-ja
translationKey: claude-web-to-app-2026
pubDatetime: 2026-11-10T05:26:00+07:00
draft: false
featured: false
tags: [technology]
---

URLからアプリを作るデモが、ネイティブアプリをそのままストアに公開できる証拠になるのかを確認します。

11月9日の投稿でShipperは「Just paste a URL.」（URLを貼るだけ）と書き、Claude Fable 5.2がMacを操作し、どんなWebサイトでもネイティブのモバイルアプリに変えてストアへ公開できると主張しています。現在見られるミラーの文面はFable 5.2ですが、以前の記事にはOpus 5.5とありました。今回Xは403を返したため、投稿が編集されたのか、以前の転記が誤っていたのかは確認できません。AnthropicはFable 5.2が同日に公開されたと発表していますが、Webからアプリを作る手順はShipperのデモであり、Anthropicの製品発表ではありません。

## 投稿から確認できること

投稿は一連の手順をうたっていますが、生成されたアプリの実装方法は説明していません。添付動画も今回の確認では検証できませんでした。そのため、「どんなサイトでも」「ネイティブアプリになる」という主張は未確認です。

## ストア公開には別の手順がある

- Appleは、Webサイトをそのまま再包装する以上の価値をアプリに求めています。商用のアプリ生成サービスについては、完成したアプリを誰が提出できるかにも規則があります。
- 配布には開発者アカウントが必要です。Apple Developer Programは年99ドル、Google Playは登録時に25ドルを一度支払います。
- ストア審査は別工程です。Appleの目標は、提出の半数以上を24時間以内、90％を48時間以内に審査することです。Googleによると、アカウントによっては7日以上かかることもあります。

生成ツールはアプリのたたき台を作れても、承認を保証したり、公開をワンクリックにしたりはできません。

*出典：Shipperの[X投稿 2119798847295922650](https://x.com/shipper_now/status/2119798847295922650)、2026年11月9日。確認時、Xは403を返したため、現在の文面を[Teapawtのミラー](https://teapawt.org/shipper_now)と照合しました。ミラーではFable 5.2と記載されていますが、以前のOpus 5.5という表記の理由を確認できる編集履歴はありません。[AnthropicのFable 5.2発表](https://www.anthropic.com/claude-fable-and-mythos-5-2)、[Appleの審査ガイドライン](https://developer.apple.com/app-store/review/guidelines/)、[Apple Developer Programの料金](https://developer.apple.com/programs/)、[Appleの審査目標](https://developer.apple.com/help/app-review/after-submitting-for-review/review-status)、[Google Playの公開手順](https://support.google.com/googleplay/android-developer/answer/9859751?hl=en-EN)を確認しました。添付動画は独立に検証していません。*

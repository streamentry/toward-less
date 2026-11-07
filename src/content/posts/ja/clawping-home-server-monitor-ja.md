---
title: "CGNATの内側にある自宅サーバーを監視する"
description: "ClawPingは外向きのheartbeatで自宅サーバーを監視し、受信ポートを開けません。"
lang: ja
slug: clawping-home-server-monitor-ja
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

CGNATの内側にある自宅サーバーには、外部の稼働監視サービスから接続しにくいものです。[ClawPing](https://github.com/cschanhniem/clawping)は接続の向きを逆にし、自宅で動く小さなGoエージェントがCloudflare上の制御プレーンへHTTPSでheartbeatを送ります。

エージェントはディスク使用量、HTTPエンドポイント、Dockerコンテナ、バックアップの新しさを確認します。チェックが失敗したり、デバイスからの報告が止まったりすると、制御プレーンがインシデントを記録しTelegramで通知します。受信ポートの開放、動的DNS、別の監視用VPSは不要です。

役割は限定的です。自宅ネットワークを外部から接続可能にせず、ホームサーバーで問題が起きたときに知らせます。READMEには、SNMP、ログ集約、Grafanaのようなメトリクス画面、大規模なサーバー群の監視は対象外とあります。NAS、ミニPC、自宅サーバー向けの小さなツールであり、総合監視基盤ではありません。

[プロジェクトのREADMEを読む](https://github.com/cschanhniem/clawping)。

---
title: "CGNATの内側にある自宅サーバーを監視する"
description: "ClawPingがCGNATの内側にある家庭用サーバーをどう監視し、何を扱わないか。"
lang: ja
slug: clawping-home-server-monitor-ja
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPingは外向きのHTTPSハートビートを使い、CGNATの内側にある家庭用サーバーを監視する。小さなGoエージェントがCloudflareのコントロールプレーンへ検査結果を送るため、サーバーで受信用ポートを開く必要はない。

## 確認する項目

- ディスク使用量とHTTPエンドポイント
- Dockerコンテナの状態
- バックアップが新しいかどうか

検査に失敗したり端末からの報告が止まったりすると、コントロールプレーンがインシデントを記録し、Telegramで通知する。

## 対象範囲と限界

READMEではNAS、ミニPC、家庭用サーバーを想定している。ClawPingはSNMP、ログ集約、Grafanaのようなメトリクス、大規模なサーバー群の監視には対応しない。対象を絞った稼働監視ツールであり、完全なオブザーバビリティ基盤でもネットワークのセキュリティ境界でもない。

## 出典

[ClawPing README](https://github.com/cschanhniem/clawping#readme)、2026年11月11日確認。

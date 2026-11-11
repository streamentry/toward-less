---
title: "CGNAT 뒤의 홈 서버를 모니터링하기"
description: "ClawPing이 CGNAT 뒤의 홈 서버를 모니터링하는 방식과 지원하지 않는 기능."
lang: ko
slug: clawping-home-server-monitor-ko
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing은 아웃바운드 HTTPS 하트비트로 CGNAT 뒤에 있는 홈 서버를 모니터링한다. 작은 Go 에이전트가 검사 결과를 Cloudflare 컨트롤 플레인에 보내므로 서버에서 인바운드 포트를 열 필요가 없다.

## 확인하는 항목

- 디스크 사용량과 HTTP 엔드포인트
- Docker 컨테이너 상태
- 백업의 최신 여부

검사가 실패하거나 장치의 보고가 끊기면 컨트롤 플레인이 인시던트를 기록하고 Telegram 알림을 보낸다.

## 범위와 한계

README는 NAS, 미니 PC, 홈 서버를 대상으로 한다. ClawPing은 SNMP, 로그 집계, Grafana 방식의 메트릭, 대규모 서버 군 모니터링을 제공하지 않는다. 범위가 좁은 가동 상태 모니터이며, 완전한 옵저버빌리티 플랫폼이나 네트워크 보안 경계는 아니다.

## 출처

[ClawPing README](https://github.com/cschanhniem/clawping#readme), 2026년 11월 11일 확인.

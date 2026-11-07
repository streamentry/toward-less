---
title: "CGNAT 뒤의 홈 서버를 모니터링하기"
description: "ClawPing은 인바운드 포트를 열지 않고 외부로 보내는 heartbeat로 홈 서버를 모니터링합니다."
lang: ko
slug: clawping-home-server-monitor-ko
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

CGNAT 뒤에 있는 홈 서버는 외부 uptime checker가 연결하기 어렵습니다. [ClawPing](https://github.com/cschanhniem/clawping)은 연결 방향을 바꿉니다. 집에서 실행되는 작은 Go agent가 HTTPS로 Cloudflare control plane에 heartbeat를 보냅니다.

Agent는 디스크 사용량, HTTP endpoint, Docker 컨테이너, 백업의 최신 여부를 확인합니다. 검사에 실패하거나 기기 보고가 끊기면 control plane이 incident를 기록하고 Telegram으로 알립니다. 인바운드 포트를 열거나 dynamic DNS를 설정하거나 별도 모니터링 VPS를 유지할 필요가 없습니다.

목표는 제한적이고 분명합니다. 집의 네트워크를 외부에 열지 않은 채 homelab에서 문제가 생기면 알려줍니다. README는 SNMP, 로그 집계, Grafana식 메트릭 대시보드, 대규모 서버 fleet 모니터링은 포함하지 않는다고 설명합니다. NAS, 미니 PC, 홈 서버용 도구이지 종합 observability 플랫폼은 아닙니다.

[프로젝트 README 보기](https://github.com/cschanhniem/clawping).

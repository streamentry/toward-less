---
title: "AGENTOWNERS: AI 에이전트용 저장소 정책"
description: "에이전트가 저장소에서 수행할 작업을 정하는 결정적 정책."
lang: ko
slug: agentowners-repository-policy-ko
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

에이전트 가이드는 일하는 법을 설명하지만 권한을 강제하지 않습니다. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS)는 저장소에 체크인한 YAML 파일로 결정론적 정책을 추가합니다.

엔진은 에이전트를 감지하고 변경 경로를 분류한 뒤 차단, 승인 요구, 허용 순으로 판정합니다. 알 수 없는 에이전트는 승인이 필요하고 workflow와 비밀 파일 변경은 차단됩니다. 코어는 모델이나 외부 정책 서비스를 사용하지 않습니다. npm 패키지와 안정 버전 v0 Action은 아직 공개되지 않은 사전 출시 프로젝트입니다. 런타임 샌드박스는 아닙니다.

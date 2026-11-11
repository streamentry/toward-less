---
title: "AGENTOWNERS: AI 에이전트용 저장소 정책"
description: "AGENTOWNERS가 결정하는 것, 통제할 수 없는 것, 아직 사전 출시 단계인 이유."
lang: ko
slug: agentowners-repository-policy-ko
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS는 저장소에 기록된 정책에 따라 AI 에이전트가 이 저장소 작업을 해도 되는지 판단한다. README는 이를 결정론적 규칙 엔진으로 설명한다. AI 코드 리뷰어나 런타임 샌드박스는 아니다.

## 결정하는 내용

- 버전 관리되는 YAML 정책을 읽고, 에이전트 신호를 탐지하며, 변경 경로를 분류해 작업을 추론한다.
- 충돌은 차단, 승인 요구, 허용 순서로 처리한다. 알 수 없는 에이전트는 기본적으로 승인이 필요하고, 워크플로와 비밀 파일 변경은 기본 차단된다.
- 같은 정책과 입력에는 같은 판정을 낸다. 모델이나 호스팅 정책 API를 호출하지 않는다.

## 통제하지 못하는 내용

AGENTOWNERS는 저장소 경계에서의 기여를 관리한다. 그 밖의 모델·도구 호출을 가로막지 않고, 코드 실행을 격리하지 않으며, 코드의 정확성을 판단하지도 않는다.

## 현재 상태

프로젝트는 사전 출시 단계다. npm 패키지와 안정된 v0 GitHub Action은 아직 공개되지 않았다. README는 소스에서 평가하고 운영 워크플로의 기준을 main에 고정하지 말라고 안내한다.

## 출처

2026년 11월 11일 확인한 [AGENTOWNERS README](https://github.com/streamentry/AGENTOWNERS#readme).

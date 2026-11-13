---
title: "소리 없는 입 모양에 관한 작은 실험"
description: "Subvox는 낮은 주파수의 헤드폰 움직임으로 소리 없는 입 모양 단어를 구분할 수 있는지 시험한다."
lang: ko
slug: subvox-silent-speech-ko
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox는 AirPods Pro의 머리 움직임 데이터로 소리 없이 입 모양만 낸 몇 개 단어를 구분할 수 있는지 시험한다. macOS 프로토타입이며 일반적인 음성 인식 시스템은 아니다.

프로토타입은:

- 약 25 Hz로 가속도, 회전, 자세를 기록한다. 신호는 주로 머리와 턱의 움직임이며 성대 진동이 아니다.
- dynamic time warping으로 구간을 사용자와 세션별 단어 템플릿에 맞춘다.
- leave-one-out 분류를 500회 무작위 레이블 테스트와 비교하고, 움직임 예측 옆에 마이크 음성 기록을 보여준다.

README는 방법을 설명하지만 관찰된 정확도 결과는 보고하지 않는다. 이어버드를 다시 착용하면 템플릿이 달라질 수 있고 언어 모델도 사용하지 않는다. 이 실험은 신호를 시험할 뿐, 무성 발화가 일상 사용에 준비됐음을 보여주지는 않는다.

출처: [Subvox README](https://github.com/joeblau/subvox/blob/main/README.md) (2026년 11월 14일 확인).

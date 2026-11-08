---
title: "소리 없는 입 모양에 관한 작은 실험"
description: "Subvox는 AirPods Pro의 머리 움직임으로 소리 없이 입 모양을 만든 몇 단어를 구별할 수 있는지 시험합니다."
lang: ko
slug: subvox-silent-speech-ko
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox)는 범위를 좁힌 질문을 다룹니다. AirPods Pro의 움직임 데이터에 소리 없이 입 모양을 만든 몇 단어를 구별할 만큼의 신호가 있을까요?

이 앱은 일반적인 무성 발화 시스템이 아니라 macOS 프로토타입입니다. 이어폰의 가속도, 회전 속도, 자세를 기록하고 각 시도를 구간으로 나눈 뒤 동적 시간 왜곡으로 단어 템플릿과 비교합니다. Train 화면은 leave-one-out 정확도를 라벨을 500회 섞은 검정과 비교합니다. Decode 화면은 움직임 예측을 마이크 실시간 전사와 나란히 보여줍니다. 언어 모델은 사용하지 않습니다.

센서 그래프, 세션 녹음, 움직임 특징 선택, 거부 임계값을 통해 무엇을 시험하는지 확인할 수 있습니다. 다만 README는 방법을 설명할 뿐 측정된 정확도 결과는 제시하지 않습니다. 신호도 제한적입니다. 약 25 Hz로, 발성 진동이 아니라 주로 머리와 턱의 움직임을 포착합니다. 템플릿은 사용자와 세션에 따라 달라지고 이어폰을 다시 착용하면 바뀔 수 있습니다.

Subvox는 신호를 측정하는 실험이지, 무성 발화가 일상에서 쓸 준비가 됐다는 증거는 아닙니다.

[GitHub에서 프로젝트 보기](https://github.com/joeblau/subvox).

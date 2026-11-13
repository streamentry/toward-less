---
title: "U자형 ESG 결과와 그 한계"
description: "DBA 논문 사이트는 ESG 백테스트와 방법, 결과로 말할 수 있는 범위를 보여줍니다."
lang: ko
slug: dba-public-esg-ko
translationKey: dba-public-esg-thesis-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-14T01:16:00+07:00
draft: false
featured: false
tags: [technology]
---

ESG 위험이 낮으면 항상 수익률이 높을까? Le Viet Hong의 DBA 논문 _The U-Shaped ESG Performance Paradigm_(2026년 1월)은 2019~2024년 S&P 500 기업 500곳을 비교한다. 업종별로 정규화한 Sustainalytics 등급이 그룹을 정한다. LightGBM 거래 모델은 가격, 거래량, 기술적 특성을 사용하며 ESG 등급을 입력으로 사용하지 않는다.

논문이 보고한 과거 데이터 백테스트 결과는 다음과 같다.

- 고위험 그룹: 누적 수익률 240.35%; 최대 낙폭 33.81%.
- 중위험 그룹: 136.63%; 32.52%.
- 저위험 그룹: 142.75%; 29.08%.

이는 하나의 과거 시뮬레이션 결과다. 이 글은 백테스트를 독립적으로 재현하지 않았으므로 예측이나 투자 규칙으로 볼 수 없다. 논문은 “거버넌스 주도 위험 프리미엄”을 가능한 설명으로 제시하지만, 입증된 원인으로 보지는 않는다.

출처: [Le Viet Hong, _The U-Shaped ESG Performance Paradigm_(DBA 논문, 2026년 1월), 부록 E, 표 E.2–E.4 및 E.7](https://streamentry.github.io/dba-public/downloads/LVH-20260317.pdf); [논문 사이트](https://streamentry.github.io/dba-public/); [프로젝트 저장소](https://github.com/streamentry/dba-public).

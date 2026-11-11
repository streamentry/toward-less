---
title: "에이전트를 써도 검토할 만큼은 이해하기"
description: "언어의 세부는 맡겨도, 에이전트가 만든 시스템을 판단할 이해는 필요합니다."
author: "C.S Chánh Niệm"
lang: ko
slug: eoneo-byeonhosa-neun-eunge-handa-ko
translationKey: the-language-lawyer-retires-2026
pubDatetime: 2026-11-09T00:28:00+07:00
modDatetime: 2026-11-11T13:14:00+07:00
draft: false
featured: false
tags: [technology]
---
Robert C. Martin(Uncle Bob)은 예전에 C++를 깊이 공부했고 자신을 “language lawyer”라고 불렀다고 말합니다. 2026년 11월 6일 X 게시물에서 그는 에이전트가 언어의 세부를 다루고 자신은 시스템의 전체 구조에 집중할 수 있다고 주장합니다. 낮은 수준의 세부가 필요하면 에이전트에게 묻습니다.

이틀 뒤 Uudon의 중국어 게시물은 더 넓은 결론을 내립니다. 이제 개발자는 프로그래밍 언어를 깊이 이해할 필요가 없다는 것입니다. 이는 Uudon의 해석이지 Martin이 게시물 전체에서 말한 입장과 같지는 않습니다.

Martin의 전환에는 실용적인 근거가 있습니다. 에이전트는 문법을 찾아보고 낯선 코드를 설명할 수 있어 시스템 동작에 더 많은 시간을 쓸 수 있습니다. 하지만 언어 지식은 문법에 그치지 않습니다. 타입, 메모리, 인터페이스, 경계 사례는 소프트웨어 동작에 영향을 줄 수 있습니다. 에이전트의 설명도 검토해야 합니다. 이는 실무적 판단이지 Martin의 게시물에 나온 연구 결과는 아닙니다.

모든 언어를 외울 필요는 없습니다. 관련 코드와 증거를 판단할 만큼 이해해야 합니다.

- 일을 맡기기 전에 기대하는 동작과 핵심 제약을 적습니다.
- 변경 내용을 보고 테스트가 놓친 것을 묻습니다.
- 설명을 판단할 수 없다면 해당 부분을 배우거나 다른 검토자에게 확인을 요청합니다.

위임은 문법을 배우는 시간을 줄일 수 있습니다. 배포할 것을 이해하고 책임지는 일까지 없애지는 않습니다.

## 출처

- Robert C. Martin (@unclebobmartin), “I used to be a language lawyer,” 2026년 11월 6일 X 게시물, [status 2118695884154110305](https://x.com/unclebobmartin/status/2118695884154110305).
- Uudon (@uudonX), Martin의 주장을 요약한 중국어 게시물, 2026년 11월 8일, [status 2119243980634530096](https://x.com/uudonX/status/2119243980634530096). 검토 중 X가 403을 반환해 [Teapawt의 Martin 게시물 사본](https://teapaw.org/unclebobmartin)과 [Uudon 게시물이 포함된 재게시물](https://teapawt.net/orexinsystem)에서 전체 내용을 확인했습니다. 이 글은 두 게시물을 요약하며 Uudon의 해석과 Martin의 말을 구분합니다.

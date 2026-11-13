---
title: "앱에 숨어 있는 상태 기계를 찾아라"
description: "AI로 플래그에 숨은 상태를 찾고, 코드로 검증해 명시적 모델이 필요한지 판단하세요."
author: "C.S Chánh Niệm"
lang: ko
slug: implicit-state-machines-ko
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

많은 앱은 로딩, 오류, 편집 중, 로그인 상태를 흩어진 플래그에 저장합니다. 이런 플래그가 함께 작동하면 로딩과 오류가 동시에 참인 것처럼 누구도 의도하지 않은 조합이 허용될 수 있습니다.

Steve Ruiz의 X 게시물은 에이전트에게 이런 암묵적 상태 머신을 찾아보라고 제안합니다. 결과는 사실이 아니라 확인할 후보 목록으로 다루세요. [1]

각 후보에 대해 에이전트가 다음을 제시하게 하세요.

- 상태를 나타내는 파일과 변수
- 코드가 허용하는 상태와 전이
- 불가능해야 할 조합과 이를 허용하는 코드

각 주장을 저장소에서 확인하세요. 서로 독립적인 플래그라면 형식적 모델이 필요하지 않을 수 있습니다. 상태가 서로 영향을 주거나 조합이 늘어나거나 버그를 만들거나 유지보수자가 기능의 동작을 파악하기 어려울 때 상태 머신을 명시하세요. 다이어그램은 규칙을 분명하게 할 때만 도움이 됩니다.

에이전트가 지도를 제안하게 하고, 코드가 맞는지 확인하세요.

### 출처

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

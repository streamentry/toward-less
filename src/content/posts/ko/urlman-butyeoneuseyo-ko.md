---
title: "URL을 붙여 넣어도 앱 스토어 출시가 되지는 않는다"
description: "웹에서 앱을 만드는 데모 뒤에도 구현 방식, 개발자 계정, 스토어 심사가 남아 있습니다."
author: "C.S Chánh Niệm"
lang: ko
slug: urlman-butyeoneuseyo-ko
translationKey: claude-web-to-app-2026
pubDatetime: 2026-11-10T05:26:00+07:00
draft: false
featured: false
tags: [technology]
---

URL을 앱으로 바꾸는 데모가 네이티브 앱을 바로 스토어에 출시할 수 있다는 증거인지 살펴봅니다.

11월 9일 게시물에서 Shipper는 “Just paste a URL.”(URL만 붙여 넣으세요)이라고 쓰며 Claude Fable 5.2가 Mac을 제어하고, 어떤 웹사이트든 네이티브 모바일 앱으로 바꿔 앱 스토어에 올릴 수 있다고 주장합니다. 현재 확인되는 미러에는 Fable 5.2가 적혀 있지만, 이 글의 이전 버전에는 Opus 5.5가 적혀 있었습니다. 검토 당시 X가 403을 반환해 게시물이 수정된 것인지 이전 기록이 잘못된 것인지 확인할 수 없습니다. Anthropic은 Fable 5.2가 같은 날 출시됐다고 확인했지만, 웹을 앱으로 바꾸는 흐름은 Shipper의 데모이지 Anthropic의 제품 발표가 아닙니다.

## 게시물로 확인되는 것

게시물은 작업 흐름을 설명하지만 결과 앱이 어떤 방식으로 구현되는지는 밝히지 않습니다. 첨부 영상도 이번 검토에서 확인하지 못했습니다. 따라서 “어떤 웹사이트든”과 “네이티브 앱”이라는 주장은 여기서 검증되지 않았습니다.

## 스토어에 올리려면 별도 절차가 필요하다

- Apple은 웹사이트를 그대로 다시 포장한 것 이상의 효용을 앱에 요구합니다. 상용 앱 생성 서비스에 대해서는 완성된 앱을 누가 제출할 수 있는지도 제한합니다.
- 배포에는 개발자 계정이 필요합니다. Apple Developer Program은 연 99달러, Google Play 등록비는 1회 25달러입니다.
- 스토어 심사는 별도 단계입니다. Apple은 제출 건의 절반 이상을 24시간 안에, 90%를 48시간 안에 심사하는 것을 목표로 합니다. Google은 일부 계정의 검토가 7일 이상 걸릴 수 있다고 안내합니다.

생성 도구가 앱 초안을 만들 수는 있어도 승인까지 보장하거나 출시를 한 번의 클릭으로 만들지는 못합니다.

*출처: Shipper의 [X 게시물 2119798847295922650](https://x.com/shipper_now/status/2119798847295922650), 2026년 11월 9일. 검토 당시 X가 403을 반환해 현재 문구를 [Teapawt 미러](https://teapawt.org/shipper_now)와 대조했습니다. 미러에는 Fable 5.2가 적혀 있지만, 이전 버전의 Opus 5.5 표기를 설명할 수정 이력은 확인할 수 없습니다. [Anthropic의 Fable 5.2 발표](https://www.anthropic.com/claude-fable-and-mythos-5-2), [Apple App Review 지침](https://developer.apple.com/app-store/review/guidelines/), [Apple Developer Program 요금](https://developer.apple.com/programs/), [Apple 심사 목표](https://developer.apple.com/help/app-review/after-submitting-for-review/review-status), [Google Play 게시 안내](https://support.google.com/googleplay/android-developer/answer/9859751?hl=en-EN)를 확인했습니다. 첨부 영상은 독립적으로 검증하지 않았습니다.*

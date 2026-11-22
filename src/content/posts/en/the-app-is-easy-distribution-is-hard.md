---
title: "The App Is Easy. Getting People to Open It Is Hard."
description: "Nikita Bier's consumer-app lessons through a harder lens: distribution, retention and learning—not just fast shipping."
lang: en
slug: the-app-is-easy-distribution-is-hard
translationKey: ai-built-apps-distribution-is-the-hard-part-2026
pubDatetime: 2026-11-22T10:00:00+07:00
draft: false
featured: false
tags: [technology, business]
---

AI can build an app faster than ever. But it cannot make someone care.

A widely shared Reddit graphic combines ideas attributed to Nikita Bier from [Lenny's Podcast](https://www.usetranscribe.io/yt/bhnfZhJWCWY/viral-growth-strategies) with an app developer's implementation advice. Its strongest message is simple: **building has become cheaper; getting people to open an app is still your job.**

That message is useful. But the real bottleneck is even harder: persuading people to come back.

## Test before you celebrate a launch

A launch is a date on a calendar. A test asks a specific question. Will people who already have a problem try this? Will they return when there is no reminder? Will anyone recommend it without being asked?

Begin with a tiny, sharply defined audience. A product for “everyone who wants to be productive” has no natural first user. A product for adults who struggle to read small numbers in puzzle games has a clearer problem and a clearer place to find initial testers.

A narrow audience is an advantage only when it has **frequent pain, an accessible channel and a reason to switch**. Small does not automatically mean viable.

For iOS, [TestFlight](https://developer.apple.com/testflight/) allows up to 10,000 external testers, including invitations through public links, but an external testing build must first go through Apple's beta review. Those are delivery mechanics, not proof of demand.

## Make value shareable, not sharing compulsory

Bier's work with social apps points to a useful design question: what result would a user genuinely want to show a friend? The screenshot suggests sharing an image of the result rather than only a home-page link.

That can reduce friction. It also risks creating a vanity loop: people share the image, download once, and never return. Sharing is a feature only when it grows out of actual user value.

Measure the chain: **relevant people reached → activated → returned → shared → retained or paid**. The weakest conversion matters more than the largest download count.

## Talk to ten users before building feature twelve

A developer can start with a small event table: first seen, activated, last active, meaningful action completed, and return date. Then talk to the users who return and to those who disappear.

Ask what they were trying to do, what alternative they use, where they got stuck and whether they would be disappointed if the app vanished. Avoid collecting unnecessary personal information. A dashboard identifies where to investigate; conversation explains why.

An important correction to the original playbook: **don't confuse a simple dashboard with a simplistic model**. A daily active count without cohort retention or a definition of meaningful use can mislead.

## Fast shipping is a means, not a moat

With React Native and Expo, [EAS Update](https://docs.expo.dev/eas-update/getting-started/) can ship compatible non-native changes without a new store binary. Native code changes still require a new build, and all updates must comply with platform rules. Remote configuration can support experiments, but it should not be treated as a way around store review.

Polish matters where it influences comprehension, trust and repeat use. It is less valuable when used to conceal an untested proposition.

AI reduces implementation cost. It also lowers competitors' implementation cost. Sustainable advantages have to come from knowing a user better, trusted distribution, accumulated feedback, distinctive design, community, or data rights—not from being able to generate code.

## One small experiment

Pick one audience and one repeated job. Recruit ten relevant people personally. Ask five to use a working prototype without a live demo. Watch where they stop. Follow up after seven days, and ask what, if anything, brought them back.

**Continue** if several users complete the core job independently, at least some return unprompted, and you understand why. **Change or stop** if people praise the idea but cannot be persuaded to use it again.

These are decision heuristics, not universal industry benchmarks.

The scarce resource is no longer the ability to make another app. It is the judgment to discover which one deserves to exist.

*AI wrote the app. Reality still decides whether it matters.*

### Sources and limits

- [Lenny's Podcast: Nikita Bier on consumer app growth](https://www.usetranscribe.io/yt/bhnfZhJWCWY/viral-growth-strategies) — background for attributed ideas, not an independent validation of every number in the graphic.
- [Apple: TestFlight](https://developer.apple.com/testflight/) — external beta testing limits and review requirements.
- [Expo: EAS Update](https://docs.expo.dev/eas-update/getting-started/) and [runtime compatibility](https://docs.expo.dev/eas-update/runtime-versions/) — which changes may be updated without a new binary.

*Claims such as “half of trial decisions come from friends” and “distribution is the scarce skill” are not established universal measurements. This essay treats them as strategic hypotheses.*

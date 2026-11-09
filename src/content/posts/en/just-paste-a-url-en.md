---
title: "Just Paste a URL"
description: "Shipper introduces 'Claude for Web to App': paste a URL, Opus 5.5 takes over your Mac, turns any website into a native mobile app, and launches it on the app stores. The model is real — Opus 5.5 shipped September 22 — and the workflow exists. The launch is a demo dressed as an announcement, and the App Store is not a button."
author: "C.S Chánh Niệm"
lang: en
slug: just-paste-a-url-en
translationKey: claude-web-to-app-2026
pubDatetime: 2026-11-10T05:26:00+07:00
draft: false
featured: false
tags: [technology]
---

Introducing Claude for "Web to App." Turn any website into a native mobile app. Just paste a URL. Opus 5.5 will take over your Mac and turn the original website into a mobile app, then launch on app stores when ready. The poster says he has been using it internally a ton for iOS and Android apps. The video shows a chat window — "Chat it into existence" — and an agent building a polished X clone, screen by screen, in twenty-three seconds.

Two parts of that are real. Opus 5.5 is real: Anthropic released it on September 22, 2026, and it is the current Opus model. And the workflow is real: web-to-app converters exist, and several of them now run MCP servers, so an agent like Claude can drive them — create an app from a URL, set the icon and colours, request builds, and hand back the download links. Paste a URL and watch an agent work is no longer a fantasy. It is a demo you can run today.

What is not real is the framing. "Introducing Claude for Web to App" is written like an Anthropic announcement. It is not one. Anthropic has announced no such feature. The poster is a small account — 1,666 views, 18 likes — showing a demo, and the demo's polish does the work the words don't. The video's own frames give it away: the agent does not convert x.com into an app. It builds a polished X clone — a rebuild, from scratch, in the style of X. A rebuild is a legitimate thing to demo. It is not the same as turning a website into an app, and the post's headline says the second thing while the video shows the first.

Three corrections, and they all sit in the verbs.

First, "turn any website into a native mobile app." There are three ways to do that, and they are not equal. Add the site to your home screen: free and instant, but not in the store. Wrap it in a WebView: fast, but Apple often rejects plain wrappers under its minimum-functionality rule. Rebuild it as a real native app: the honest route, and the one the video actually shows. "Any website" hides the choice between the three, and the choice is the whole job.

Second, "take over your Mac." Computer use is real, and Opus can drive a machine. But "take over" compresses a chain — build, package, sign, submit, review, publish — into one verb, and the chain is where the work lives. The agent can write the code and request the build. It cannot sign your app with your certificate, pay your developer fee, or answer Apple's reviewer.

Third, "launch on app stores when ready." The App Store is not a button. You submit with your own Apple Developer account — $99 a year — and your own Google Play account, and Apple reviews the submission, which takes one to three business days for a first submission and rejects apps that look like thin web wrappers. The poster says he has been using it internally "a ton." Internally is doing a lot of work in that sentence: internal use never meets a reviewer.

None of this makes the demo uninteresting. An agent that rebuilds your website as a mobile app, from a pasted URL, is a real capability, and the MCP plumbing that lets Claude drive a converter is genuinely new. What the post sells is the last mile — the launch — as if it were part of the demo. It isn't. The demo ends where the store begins, and the store is where the work is: signing, submitting, waiting, and being told no by a reviewer who has seen a thousand wrappers before yours.

The honest sentence is shorter than the post's. Paste a URL, and an agent will build you an app-shaped thing in minutes. Getting it into the store is still your job, your accounts, your review, and your rejection risk. The URL is the easy part. It always was.

*Inspired by the X post ["Introducing Claude for 'Web to App.' Turn any website into a native mobile app. Just paste a URL."](https://x.com/shipper_now/status/2119798847295922650) by [Shipper (@shipper_now)](https://x.com/shipper_now/status/2119798847295922650). The post was verified on 10 November 2026: 9:26 PM, 9 Nov 2026, 1,666 views. Claude Opus 5.5 was released by Anthropic on 22 September 2026. The web-to-app workflow via MCP is documented by third-party converters, e.g. [WebToApp's MCP docs](https://www.webtoapp.app/docs/mcp) — which also state that you still submit to the App Store and Google Play yourself. No Anthropic "Web to App" announcement exists.*

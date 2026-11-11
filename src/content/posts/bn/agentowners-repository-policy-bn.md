---
title: "AGENTOWNERS: AI এজেন্টের জন্য রিপোজিটরি নীতি"
description: "AGENTOWNERS কী সিদ্ধান্ত নেয়, কী নিয়ন্ত্রণ করতে পারে না, আর এটি কেন এখনো প্রি-রিলিজে আছে।"
lang: bn
slug: agentowners-repository-policy-bn
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS একটি প্রশ্নের উত্তর দেয়: রিপোজিটরিতে রাখা নীতি অনুযায়ী AI এজেন্ট কি এই রিপোজিটরি-সংক্রান্ত কাজটি করতে পারবে? README একে নির্ধারিত নিয়মের ইঞ্জিন বলে—AI কোড-পর্যালোচক বা রানটাইম স্যান্ডবক্স নয়।

## এটি কী সিদ্ধান্ত নেয়

- সংস্করণযুক্ত YAML নীতি পড়ে, এজেন্টের সংকেত শনাক্ত করে, বদলানো path শ্রেণিবদ্ধ করে এবং কাজ অনুমান করে।
- দ্বন্দ্বের ক্রম: আটকানো, অনুমোদন চাওয়া, অনুমতি দেওয়া। অজানা এজেন্টের জন্য অনুমোদন ডিফল্ট; workflow ও secret ফাইলের পরিবর্তন ডিফল্টে আটকায়।
- একই নীতি ও ইনপুটে একই রায় দেয়। ইঞ্জিন কোনো মডেল বা hosted policy API ডাকে না।

## এটি কী নিয়ন্ত্রণ করতে পারে না

AGENTOWNERS রিপোজিটরির সীমায় অবদান নিয়ন্ত্রণ করে। অন্য জায়গার model/tool call আটকায় না, code execution আলাদা করে না, আর কোড সঠিক কি না তাও বিচার করে না।

## বর্তমান অবস্থা

প্রকল্পটি প্রি-রিলিজে: npm package এবং স্থিতিশীল v0 GitHub Action এখনো প্রকাশিত হয়নি। README source থেকে মূল্যায়ন করতে এবং production workflow-তে main pin না করতে বলে।

## সূত্র

[AGENTOWNERS README](https://github.com/streamentry/AGENTOWNERS#readme), ১১ নভেম্বর ২০২৬-এ যাচাই করা।

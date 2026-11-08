---
title: "AGENTOWNERS: AI এজেন্টের জন্য রিপোজিটরি নীতি"
description: "রিপোজিটরিতে এজেন্টের কাজ নির্ধারণের কার্যকর নিয়ম।"
lang: bn
slug: agentowners-repository-policy-bn
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

এজেন্ট গাইড বলে কীভাবে কাজ করতে হবে, কিন্তু অনুমতি কার্যকরভাবে সীমাবদ্ধ করে না। [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) রিপোজিটরিতে রাখা YAML ফাইলে নির্দিষ্ট নীতি যোগ করে।

ইঞ্জিন agent শনাক্ত করে, বদলানো path শ্রেণিবদ্ধ করে এবং স্থির ক্রমে নিয়ম প্রয়োগ করে: ব্লক, অনুমোদন চাওয়া, অনুমতি। অজানা agent-এর অনুমোদন লাগে; workflow ও secret ফাইলের পরিবর্তন ব্লক হয়। core কোনো মডেল বা বাইরের policy service ব্যবহার করে না। প্রকল্পটি pre-release; npm package ও স্থিতিশীল v0 Action এখনো প্রকাশিত হয়নি। এটি runtime sandbox নয়।

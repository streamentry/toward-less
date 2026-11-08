---
title: "AGENTOWNERS: AI ایجنٹس کے لیے ریپوزٹری پالیسی"
description: "ریپوزٹری میں ایجنٹس کے مجاز اقدامات طے کرنے والی قطعی پالیسی۔"
lang: ur
slug: agentowners-repository-policy-ur
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

ایجنٹ گائیڈ کام کرنے کا طریقہ بتاتی ہے، مگر اختیارات نافذ نہیں کرتی۔ [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) ریپوزٹری میں محفوظ versioned YAML فائل کے ذریعے قطعی پالیسی شامل کرتا ہے۔

انجن ایجنٹ کو شناخت کرکے بدلے ہوئے راستے درجہ بند کرتا اور مقررہ ترتیب میں قواعد لگاتا ہے: روکیں، منظوری مانگیں، اجازت دیں۔ نامعلوم ایجنٹ کو منظوری درکار ہوتی ہے؛ workflow اور secret فائل کی تبدیلیاں بلاک ہوتی ہیں۔ core کوئی ماڈل یا بیرونی پالیسی سروس استعمال نہیں کرتا۔ منصوبہ pre-release ہے؛ npm پیکیج اور مستحکم v0 Action شائع نہیں ہوئے۔ یہ runtime sandbox نہیں۔

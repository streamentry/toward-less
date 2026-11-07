---
title: "AGENTOWNERS: سیاست مخزن برای عامل‌های هوش مصنوعی"
description: "قواعد قطعی برای تعیین کارهای مجاز عامل‌ها در مخزن."
lang: fa
slug: agentowners-repository-policy-fa
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

راهنمای عامل روش کار را توضیح می‌دهد، اما اختیارهای مجاز را اعمال نمی‌کند. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) سیاستی قطعی را در فایل YAML نسخه‌بندی‌شدهٔ مخزن می‌گذارد.

موتور عامل را تشخیص می‌دهد، مسیرهای تغییرکرده را دسته‌بندی می‌کند و با ترتیب ثابت تصمیم می‌گیرد: مسدودکردن، درخواست تأیید، اجازه‌دادن. عامل ناشناخته به تأیید نیاز دارد و تغییر workflow و فایل محرمانه مسدود می‌شود. هسته مدل یا سرویس سیاست خارجی ندارد. پروژه پیش از انتشار است؛ بسته‌های npm و Action پایدار v0 هنوز منتشر نشده‌اند. این ابزار sandbox زمان اجرا نیست.

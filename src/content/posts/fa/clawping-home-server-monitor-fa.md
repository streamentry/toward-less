---
title: "پایش سرور خانگی پشت CGNAT"
description: "ClawPing چگونه سرور خانگی پشت CGNAT را پایش می‌کند و چه چیزهایی را پوشش نمی‌دهد."
lang: fa
slug: clawping-home-server-monitor-fa
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing با heartbeatهای HTTPS خروجی، سرور خانگی پشت CGNAT را پایش می‌کند. یک عامل کوچک Go نتیجهٔ بررسی‌ها را به control plane کلادفلر می‌فرستد، بنابراین نیازی به بازکردن پورت ورودی سرور نیست.

## چه چیزهایی را بررسی می‌کند

- مصرف دیسک و endpointهای HTTP
- سلامت containerهای Docker
- تازه‌بودن نسخهٔ پشتیبان

اگر بررسی‌ای شکست بخورد یا دستگاه گزارش‌دادن را متوقف کند، control plane رخداد را ثبت می‌کند و هشدار Telegram می‌فرستد.

## دامنه و محدودیت‌ها

README این ابزار را برای NAS، mini PC یا سرور خانگی در نظر گرفته است. ClawPing امکانات SNMP، تجمیع log، metricهای شبیه Grafana یا پایش تعداد زیادی سرور را ندارد. این ابزار پایش وضعیت محدودی است؛ نه پلتفرم کامل observability و نه مرز امنیت شبکه.

## منبع

[README ClawPing](https://github.com/cschanhniem/clawping#readme)، بررسی‌شده در ۱۱ نوامبر ۲۰۲۶.

---
title: "پایش سرور خانگی پشت CGNAT"
description: "ClawPing با heartbeat خروجی و بدون بازکردن پورت ورودی، سرور خانگی را پایش می‌کند."
lang: fa
slug: clawping-home-server-monitor-fa
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

دسترسی ابزارهای بیرونی پایش uptime به سرور خانگی پشت CGNAT دشوار است. [ClawPing](https://github.com/cschanhniem/clawping) جهت اتصال را برعکس می‌کند: یک agent کوچک Go در خانه از طریق HTTPS به control plane روی Cloudflare heartbeat می‌فرستد.

Agent فضای دیسک، endpointهای HTTP، کانتینرهای Docker و تازگی نسخه‌های پشتیبان را بررسی می‌کند. اگر بررسی‌ای شکست بخورد یا دستگاه دیگر گزارش نفرستد، control plane رویداد را ثبت می‌کند و از طریق Telegram هشدار می‌دهد. نیازی به بازکردن پورت ورودی، راه‌اندازی dynamic DNS یا نگهداری VPS جداگانه برای پایش نیست.

دامنهٔ کار عمداً محدود است: وقتی چیزی از کار می‌افتد به صاحب homelab خبر بدهد، بدون آنکه شبکهٔ خانه از بیرون قابل‌دسترسی شود. README می‌گوید SNMP، گردآوری log، داشبورد metrics مانند Grafana و پایش ناوگان بزرگ سرورها را پوشش نمی‌دهد. این ابزار کوچکی برای NAS، mini PC یا سرور خانگی است، نه پلتفرم کامل observability.

[خواندن README پروژه](https://github.com/cschanhniem/clawping).

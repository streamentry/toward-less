---
title: "CGNAT کے پیچھے گھریلو سرور کی نگرانی"
description: "ClawPing باہر بھیجے گئے heartbeat سے گھریلو سرور کی نگرانی کرتا ہے، بغیر ان باؤنڈ پورٹ کھولے۔"
lang: ur
slug: clawping-home-server-monitor-ur
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

CGNAT کے پیچھے موجود گھریلو سرور تک باہر سے uptime checker کا پہنچنا مشکل ہوتا ہے۔ [ClawPing](https://github.com/cschanhniem/clawping) رابطے کی سمت بدلتا ہے: گھر میں چلنے والا چھوٹا Go agent HTTPS کے ذریعے Cloudflare کے control plane کو heartbeat بھیجتا ہے۔

Agent ڈسک کا استعمال، HTTP endpoints، Docker containers اور backup کی تازگی دیکھتا ہے۔ کوئی جانچ ناکام ہو یا ڈیوائس کی رپورٹ آنا بند ہو جائے تو control plane واقعہ درج کرکے Telegram پر alert بھیجتا ہے۔ اس کے لیے ان باؤنڈ پورٹ کھولنے، dynamic DNS لگانے یا الگ monitoring VPS چلانے کی ضرورت نہیں۔

اس کا کام محدود اور واضح ہے: homelab کے مالک کو بتانا کہ کچھ خراب ہوا ہے، مگر گھر کے نیٹ ورک کو باہر سے قابلِ رسائی بنائے بغیر۔ README یہ بھی بتاتا ہے کہ اس میں SNMP، log aggregation، Grafana جیسے metrics dashboards یا بڑی مشینوں کے جھنڈ کی نگرانی شامل نہیں۔ یہ NAS، mini PC یا گھریلو سرور کے لیے چھوٹا آلہ ہے، مکمل observability platform نہیں۔

[پروجیکٹ کا README پڑھیں](https://github.com/cschanhniem/clawping)۔

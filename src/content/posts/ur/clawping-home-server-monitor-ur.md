---
title: "CGNAT کے پیچھے گھریلو سرور کی نگرانی"
description: "ClawPing CGNAT کے پیچھے گھریلو سرور کی نگرانی کیسے کرتا ہے، اور اس میں کیا شامل نہیں۔"
lang: ur
slug: clawping-home-server-monitor-ur
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing باہر بھیجی جانے والی HTTPS heartbeats کے ذریعے CGNAT کے پیچھے گھریلو سرور کی نگرانی کرتا ہے۔ ایک چھوٹا Go ایجنٹ Cloudflare control plane کو نتائج بھیجتا ہے، اس لیے سرور پر inbound port کھولنے کی ضرورت نہیں۔

## یہ کیا جانچتا ہے

- ڈسک کا استعمال اور HTTP endpoints
- Docker containers کی حالت
- بیک اپ کتنا تازہ ہے

اگر کوئی جانچ ناکام ہو یا ڈیوائس رپورٹ کرنا بند کر دے تو control plane واقعہ درج کرتا اور Telegram alert بھیجتا ہے۔

## دائرہ اور حدود

README اسے NAS، mini PC یا گھریلو سرور کے لیے بیان کرتی ہے۔ ClawPing میں SNMP، لاگ جمع کرنا، Grafana جیسے metrics یا بڑی server fleet کی نگرانی شامل نہیں۔ یہ محدود uptime monitor ہے، مکمل observability platform یا network security boundary نہیں۔

## ماخذ

[ClawPing README](https://github.com/cschanhniem/clawping#readme)، 11 نومبر 2026 کو دیکھی گئی۔

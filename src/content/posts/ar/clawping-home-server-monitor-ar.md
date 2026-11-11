---
title: "مراقبة خادم منزلي خلف CGNAT"
description: "كيف يراقب ClawPing خادمًا منزليًا خلف CGNAT، وما الوظائف التي لا يوفرها."
lang: ar
slug: clawping-home-server-monitor-ar
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
يراقب ClawPing خادمًا منزليًا خلف CGNAT عبر نبضات HTTPS صادرة. يرسل وكيل Go صغير نتائج الفحوص إلى مستوى تحكم على Cloudflare، لذلك لا يحتاج الخادم إلى فتح منفذ وارد.

## ما الذي يفحصه؟

- استخدام القرص ونقاط HTTP
- سلامة حاويات Docker
- حداثة النسخ الاحتياطية

يسجل مستوى التحكم الحوادث ويرسل تنبيهات Telegram عند فشل فحص أو توقف جهاز عن الإبلاغ.

## النطاق والحدود

يوجه README الأداة إلى NAS أو حاسوب صغير أو خادم منزلي. لا يوفر ClawPing مراقبة SNMP أو تجميع السجلات أو مقاييس على نمط Grafana أو إدارة أساطيل كبيرة. إنه أداة محدودة لمراقبة التوافر، وليس منصة ملاحظة كاملة أو حاجزًا لأمن الشبكة.

## المصدر

[README الخاص بـ ClawPing](https://github.com/cschanhniem/clawping#readme)، تمت مراجعته في 11 نوفمبر 2026.

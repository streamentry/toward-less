---
title: "مراقبة خادم منزلي خلف CGNAT"
description: "يراقب ClawPing الخوادم المنزلية عبر نبضات اتصال صادرة من دون فتح منافذ واردة."
lang: ar
slug: clawping-home-server-monitor-ar
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

يصعب على خدمة مراقبة خارجية الوصول مباشرة إلى خادم منزلي خلف CGNAT. يعكس [ClawPing](https://github.com/cschanhniem/clawping) اتجاه الاتصال: يرسل برنامج Go صغير يعمل محلياً نبضات HTTPS إلى مستوى تحكم على Cloudflare.

يفحص البرنامج مساحة القرص ونقاط HTTP وحاويات Docker وحداثة النسخ الاحتياطية. ويسجل مستوى التحكم الحوادث ويرسل تنبيهات عبر Telegram عند فشل فحص أو توقف جهاز عن الإبلاغ. لا يتطلب ذلك فتح منفذ وارد أو إعداد DNS ديناميكي أو صيانة خادم VPS منفصل للمراقبة.

فكرته محددة: إخبار صاحب المختبر المنزلي عند تعطل شيء من دون جعل شبكته المنزلية قابلة للاتصال من الخارج. ويوضح README ما لا يقدمه حالياً: SNMP أو تجميع السجلات أو لوحات المقاييس مثل Grafana أو مراقبة أساطيل كبيرة. إنه أداة صغيرة لـ NAS أو حاسوب صغير أو خادم منزلي، وليس منصة مراقبة شاملة.

[اقرأ README المشروع](https://github.com/cschanhniem/clawping).

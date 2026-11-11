---
title: "CGNAT के पीछे घरेलू सर्वर की निगरानी"
description: "ClawPing CGNAT के पीछे घरेलू सर्वर की निगरानी कैसे करता है और इसमें क्या शामिल नहीं है।"
lang: hi
slug: clawping-home-server-monitor-hi
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing बाहर की ओर भेजे गए HTTPS heartbeat से CGNAT के पीछे घरेलू सर्वर की निगरानी करता है। छोटा Go agent जाँच के नतीजे Cloudflare control plane को भेजता है, इसलिए घरेलू सर्वर पर inbound port खोलने की ज़रूरत नहीं।

## यह क्या जाँचता है

- डिस्क का उपयोग और HTTP endpoints
- Docker containers की स्थिति
- बैकअप नया है या नहीं

किसी जाँच के विफल होने या डिवाइस की रिपोर्ट बंद होने पर control plane घटना दर्ज करता है और Telegram alert भेजता है।

## दायरा और सीमाएँ

README इसे NAS, mini PC या घर के सर्वर के लिए रखती है। ClawPing में SNMP, log aggregation, Grafana जैसे metrics या बड़े server fleet की निगरानी नहीं है। यह सीमित uptime monitor है, पूरा observability platform या network security boundary नहीं।

## स्रोत

[ClawPing README](https://github.com/cschanhniem/clawping#readme), 11 नवंबर 2026 को जाँची गई।

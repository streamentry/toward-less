---
title: "CGNAT के पीछे घरेलू सर्वर की निगरानी"
description: "ClawPing बिना इनबाउंड पोर्ट खोले, बाहर भेजे गए heartbeat से घरेलू सर्वर की निगरानी करता है।"
lang: hi
slug: clawping-home-server-monitor-hi
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

CGNAT के पीछे चल रहे घरेलू सर्वर तक बाहरी uptime checker आसानी से नहीं पहुँच सकता। [ClawPing](https://github.com/cschanhniem/clawping) कनेक्शन की दिशा उलटता है: घर पर चलने वाला छोटा Go agent HTTPS के ज़रिए Cloudflare के control plane को heartbeat भेजता है।

Agent डिस्क का उपयोग, HTTP endpoints, Docker containers और बैकअप की ताज़गी जाँचता है। कोई जाँच विफल हो या डिवाइस की रिपोर्ट आना बंद हो जाए, तो control plane घटना दर्ज करके Telegram पर सूचना भेजता है। इसके लिए इनबाउंड पोर्ट खोलने, dynamic DNS लगाने या अलग monitoring VPS चलाने की ज़रूरत नहीं है।

इसका काम सीमित और साफ़ है: homelab उपयोगकर्ता को बताना कि कुछ बंद हुआ है, बिना घरेलू नेटवर्क को बाहर से पहुँच योग्य बनाए। README यह भी बताता है कि इसमें अभी क्या नहीं है: SNMP, log aggregation, Grafana जैसे metrics या बड़ी मशीनों के समूह की निगरानी। यह NAS, mini PC या घर के सर्वर के लिए छोटा उपकरण है, पूरा observability platform नहीं।

[प्रोजेक्ट README पढ़ें](https://github.com/cschanhniem/clawping)।

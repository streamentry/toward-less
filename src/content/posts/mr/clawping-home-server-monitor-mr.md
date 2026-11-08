---
title: "CGNAT मागे असलेल्या घरच्या सर्व्हरवर लक्ष ठेवणे"
description: "ClawPing इनबाउंड पोर्ट न उघडता बाहेर पाठवलेल्या heartbeat द्वारे घरच्या सर्व्हरचे निरीक्षण करते."
lang: mr
slug: clawping-home-server-monitor-mr
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

CGNAT मागे असलेल्या घरच्या सर्व्हरपर्यंत बाहेरील uptime checker ला पोहोचणे कठीण असते. [ClawPing](https://github.com/cschanhniem/clawping) जोडणीची दिशा उलटते: घरात चालणारा छोटा Go agent HTTPS द्वारे Cloudflare वरील control plane कडे heartbeat पाठवतो.

Agent डिस्कचा वापर, HTTP endpoints, Docker containers आणि backup किती ताजा आहे हे तपासतो. एखादी तपासणी अयशस्वी झाली किंवा device कडून अहवाल येणे थांबले तर control plane घटना नोंदवून Telegram वर सूचना पाठवतो. इनबाउंड port उघडणे, dynamic DNS लावणे किंवा वेगळा monitoring VPS सांभाळणे गरजेचे नाही.

याचे काम मर्यादित आणि स्पष्ट आहे: घरचे नेटवर्क बाहेरून उघडे न करता homelab मध्ये काही बिघडल्यास मालकाला कळवणे. README मध्ये SNMP, log aggregation, Grafanaसारखे metrics dashboard किंवा मोठ्या server fleet चे monitoring नसल्याचेही स्पष्ट आहे. हे NAS, mini PC किंवा घरच्या server साठीचे साधन आहे; पूर्ण observability platform नाही.

[GitHub वर प्रकल्पाचे README पाहा](https://github.com/cschanhniem/clawping).

---
title: "CGNAT मागे असलेल्या घरच्या सर्व्हरवर लक्ष ठेवणे"
description: "ClawPing CGNAT मागील घरगुती सर्व्हर कसा तपासतो आणि त्यात काय नाही."
lang: mr
slug: clawping-home-server-monitor-mr
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing बाहेर जाणाऱ्या HTTPS heartbeat द्वारे CGNAT मागील घरगुती सर्व्हर तपासतो. एक छोटा Go agent तपासणीचे निकाल Cloudflare control plane ला पाठवतो, त्यामुळे सर्व्हरवर inbound port उघडण्याची गरज नसते.

## ते काय तपासते

- डिस्कचा वापर आणि HTTP endpoints
- Docker containers ची स्थिती
- बॅकअप किती नवीन आहे

तपासणी अयशस्वी झाली किंवा उपकरणाकडून अहवाल येणे थांबले तर control plane घटना नोंदवतो आणि Telegram सूचना पाठवतो.

## व्याप्ती आणि मर्यादा

README नुसार हे NAS, mini PC किंवा घरगुती सर्व्हरसाठी आहे. ClawPing मध्ये SNMP, log aggregation, Grafana-शैलीचे metrics किंवा मोठ्या server fleet चे monitoring नाही. हे मर्यादित uptime monitor आहे; पूर्ण observability platform किंवा network security boundary नाही.

## स्रोत

[ClawPing README](https://github.com/cschanhniem/clawping#readme), 11 November 2026 रोजी तपासले.

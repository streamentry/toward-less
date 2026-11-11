---
title: "CGNAT-এর পেছনে থাকা বাড়ির সার্ভার পর্যবেক্ষণ"
description: "CGNAT-এর পেছনে থাকা ঘরের সার্ভার ClawPing কীভাবে নজরে রাখে, এবং এতে কী নেই।"
lang: bn
slug: clawping-home-server-monitor-bn
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing বাইরে পাঠানো HTTPS heartbeat দিয়ে CGNAT-এর পেছনের ঘরের সার্ভার পর্যবেক্ষণ করে। ছোট Go agent Cloudflare control plane-এ পরীক্ষার ফল পাঠায়, তাই সার্ভারে inbound port খুলতে হয় না।

## কী পরীক্ষা করে

- ডিস্কের ব্যবহার ও HTTP endpoint
- Docker container-এর অবস্থা
- ব্যাকআপ কতটা নতুন

কোনো পরীক্ষা ব্যর্থ হলে বা ডিভাইসের রিপোর্ট বন্ধ হলে control plane ঘটনা নথিবদ্ধ করে এবং Telegram alert পাঠায়।

## পরিসর ও সীমা

README অনুযায়ী এটি NAS, mini PC বা ঘরের সার্ভারের জন্য। ClawPing-এ SNMP, log aggregation, Grafana-ধাঁচের metrics বা বড় server fleet monitoring নেই। এটি সীমিত uptime monitor; পূর্ণ observability platform বা network security boundary নয়।

## সূত্র

[ClawPing README](https://github.com/cschanhniem/clawping#readme), ১১ নভেম্বর ২০২৬-এ যাচাই করা।

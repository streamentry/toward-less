---
title: "CGNAT-এর পেছনে থাকা বাড়ির সার্ভার পর্যবেক্ষণ"
description: "ClawPing ইনবাউন্ড পোর্ট না খুলে বাইরে পাঠানো heartbeat দিয়ে বাড়ির সার্ভার পর্যবেক্ষণ করে।"
lang: bn
slug: clawping-home-server-monitor-bn
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

CGNAT-এর পেছনে থাকা বাড়ির সার্ভারে বাইরে থেকে uptime checker পৌঁছাতে পারে না। [ClawPing](https://github.com/cschanhniem/clawping) সংযোগের দিক উল্টে দেয়: বাড়িতে চলা ছোট Go agent HTTPS দিয়ে Cloudflare-এর control plane-এ heartbeat পাঠায়।

Agent ডিস্কের ব্যবহার, HTTP endpoint, Docker container এবং backup কতটা নতুন তা পরীক্ষা করে। কোনো পরীক্ষা ব্যর্থ হলে বা ডিভাইস রিপোর্ট পাঠানো বন্ধ করলে control plane ঘটনা নথিবদ্ধ করে Telegram-এ সতর্কবার্তা পাঠায়। ইনবাউন্ড পোর্ট খুলতে, dynamic DNS বসাতে বা আলাদা monitoring VPS চালাতে হয় না।

এর কাজ সীমিত ও স্পষ্ট: homelab মালিককে জানানো যে কিছু বন্ধ হয়েছে, কিন্তু বাড়ির নেটওয়ার্ককে বাইরে থেকে সংযোগযোগ্য না করা। README-তে এটাও বলা আছে যে এতে SNMP, log aggregation, Grafana-ধরনের metric dashboard বা বড় server fleet monitoring নেই। NAS, mini PC বা বাড়ির সার্ভারের জন্য এটি ছোট একটি সরঞ্জাম, পূর্ণ observability platform নয়।

[প্রকল্পের README পড়ুন](https://github.com/cschanhniem/clawping)।

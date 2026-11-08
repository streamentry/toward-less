---
title: "เฝ้าดูเซิร์ฟเวอร์ที่บ้านหลัง CGNAT"
description: "ClawPing เฝ้าดูเซิร์ฟเวอร์ที่บ้านด้วย heartbeat ขาออก โดยไม่ต้องเปิดพอร์ตรับเข้า"
lang: th
slug: clawping-home-server-monitor-th
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

เซิร์ฟเวอร์ที่บ้านหลัง CGNAT มักให้บริการตรวจ uptime จากภายนอกเชื่อมต่อเข้าไปได้ยาก [ClawPing](https://github.com/cschanhniem/clawping) กลับทิศทางการเชื่อมต่อ: agent Go ขนาดเล็กที่บ้านส่ง heartbeat ผ่าน HTTPS ไปยัง control plane บน Cloudflare

Agent ตรวจการใช้ดิสก์ endpoint HTTP คอนเทนเนอร์ Docker และความใหม่ของข้อมูลสำรอง หากการตรวจล้มเหลวหรืออุปกรณ์หยุดรายงาน control plane จะบันทึกเหตุขัดข้องและส่งการแจ้งเตือนผ่าน Telegram วิธีนี้ไม่ต้องเปิดพอร์ตรับเข้า ตั้ง dynamic DNS หรือดูแล VPS สำหรับเฝ้าระวังแยกต่างหาก

ขอบเขตงานชัดเจน: แจ้งเจ้าของ homelab เมื่อมีบางอย่างเสีย โดยไม่ทำให้เครือข่ายในบ้านเปิดให้คนนอกเชื่อมต่อ README ระบุด้วยว่ายังไม่มี SNMP การรวม log แดชบอร์ด metrics แบบ Grafana หรือการเฝ้าระวังเครื่องจำนวนมาก เป็นเครื่องมือขนาดเล็กสำหรับ NAS, mini PC หรือเซิร์ฟเวอร์ที่บ้าน ไม่ใช่แพลตฟอร์ม observability ครบวงจร

[อ่าน README ของโครงการ](https://github.com/cschanhniem/clawping)

---
title: "AGENTOWNERS: นโยบายคลังโค้ดสำหรับ AI agent"
description: "กฎที่กำหนดว่า agent ทำอะไรได้บ้างในคลังโค้ด"
lang: th
slug: agentowners-repository-policy-th
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

คู่มือ agent อธิบายวิธีทำงาน แต่ไม่ได้บังคับขอบเขตสิทธิ์ [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) เพิ่มนโยบายที่แน่นอนผ่านไฟล์ YAML ในคลังโค้ด

เอนจินตรวจ agent จัดประเภทไฟล์ที่เปลี่ยน และใช้ลำดับตายตัว: บล็อก ขออนุมัติ อนุญาต agent ที่ไม่รู้จักต้องขออนุมัติ ส่วนการแก้ workflow และไฟล์ความลับถูกบล็อก core ไม่ใช้โมเดลหรือนโยบายจากบริการภายนอก โครงการยังไม่เปิดตัว แพ็กเกจ npm และ Action v0 ยังไม่เผยแพร่ และนี่ไม่ใช่ runtime sandbox

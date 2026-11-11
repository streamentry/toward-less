---
title: "Memantau pelayan rumah di sebalik CGNAT"
description: "Cara ClawPing memantau pelayan rumah di sebalik CGNAT dan perkara yang tidak disediakannya."
lang: ms
slug: clawping-home-server-monitor-ms
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing memantau pelayan rumah di sebalik CGNAT melalui heartbeat HTTPS keluar. Ejen Go yang kecil menghantar hasil semakan ke control plane Cloudflare, jadi pelayan tidak perlu membuka port masuk.

## Perkara yang disemak

- Penggunaan cakera dan endpoint HTTP
- Kesihatan container Docker
- Sama ada sandaran masih terkini

Control plane merekodkan insiden dan menghantar amaran Telegram apabila semakan gagal atau peranti berhenti melapor.

## Skop dan batas

README menyasarkan NAS, mini PC atau pelayan rumah. ClawPing tidak menyediakan SNMP, pengumpulan log, metrik seperti Grafana atau pemantauan armada besar. Ia pemantau uptime yang khusus, bukan platform kebolehcerapan lengkap atau sempadan keselamatan rangkaian.

## Sumber

[README ClawPing](https://github.com/cschanhniem/clawping#readme), disemak pada 11 November 2026.

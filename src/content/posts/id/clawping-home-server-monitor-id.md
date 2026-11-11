---
title: "Memantau server rumahan di balik CGNAT"
description: "Cara ClawPing memantau server rumahan di balik CGNAT dan hal-hal yang tidak dicakupnya."
lang: id
slug: clawping-home-server-monitor-id
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing memantau server rumahan di balik CGNAT melalui heartbeat HTTPS keluar. Agen Go kecil mengirim hasil pemeriksaan ke control plane Cloudflare, sehingga server tidak perlu membuka port masuk.

## Yang diperiksa

- Penggunaan disk dan endpoint HTTP
- Kesehatan container Docker
- Apakah cadangan masih baru

Control plane mencatat insiden dan mengirim peringatan Telegram ketika pemeriksaan gagal atau perangkat berhenti melapor.

## Cakupan dan batas

README menujukannya untuk NAS, mini PC, atau server rumahan. ClawPing tidak menyediakan SNMP, agregasi log, metrik seperti Grafana, atau pemantauan armada besar. Ini monitor uptime dengan cakupan sempit, bukan platform observabilitas lengkap atau batas keamanan jaringan.

## Sumber

[README ClawPing](https://github.com/cschanhniem/clawping#readme), diperiksa pada 11 November 2026.

---
title: "Memantau server rumahan di balik CGNAT"
description: "ClawPing memantau server rumahan melalui heartbeat keluar tanpa membuka port masuk."
lang: id
slug: clawping-home-server-monitor-id
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Server rumahan di balik CGNAT sulit dijangkau oleh pemantau uptime dari luar. [ClawPing](https://github.com/cschanhniem/clawping) membalik arah koneksi: agent Go kecil di rumah mengirim heartbeat HTTPS ke control plane di Cloudflare.

Agent memeriksa penggunaan disk, endpoint HTTP, kontainer Docker, dan kebaruan cadangan. Control plane mencatat insiden dan mengirim peringatan Telegram ketika pemeriksaan gagal atau perangkat berhenti melapor. Tidak perlu membuka port masuk, mengatur DNS dinamis, atau merawat VPS pemantauan terpisah.

Ruang lingkupnya sengaja terbatas: memberi tahu pemilik homelab saat ada yang rusak tanpa membuat jaringan rumah dapat diakses dari luar. README juga menyebut hal yang belum dicakup: SNMP, agregasi log, dasbor metrik seperti Grafana, dan pemantauan armada besar. Ini alat kecil untuk NAS, mini PC, atau server rumah, bukan platform observabilitas lengkap.

[Baca README proyek](https://github.com/cschanhniem/clawping).

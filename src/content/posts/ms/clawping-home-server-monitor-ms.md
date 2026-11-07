---
title: "Memantau pelayan rumah di sebalik CGNAT"
description: "ClawPing memantau pelayan rumah melalui heartbeat keluar tanpa membuka port masuk."
lang: ms
slug: clawping-home-server-monitor-ms
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

Pelayan rumah di sebalik CGNAT sukar dicapai oleh pemantau uptime dari luar. [ClawPing](https://github.com/cschanhniem/clawping) membalikkan arah sambungan: agent Go kecil di rumah menghantar heartbeat HTTPS ke control plane di Cloudflare.

Agent memeriksa penggunaan cakera, endpoint HTTP, kontena Docker dan kesegaran sandaran. Control plane merekodkan insiden dan menghantar amaran Telegram apabila semakan gagal atau peranti berhenti melapor. Tiada port masuk perlu dibuka, dynamic DNS disediakan, atau VPS pemantauan berasingan perlu dijaga.

Skopnya khusus: memberitahu pemilik homelab apabila sesuatu rosak tanpa menjadikan rangkaian rumah boleh dicapai dari luar. README juga menyatakan perkara yang belum disediakan: SNMP, pengumpulan log, papan pemuka metrik seperti Grafana atau pemantauan banyak pelayan. Ini alat kecil untuk NAS, mini PC atau pelayan rumah, bukan platform observability lengkap.

[Baca README projek](https://github.com/cschanhniem/clawping).

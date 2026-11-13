---
title: "Temukan mesin state yang tersembunyi di aplikasi Anda"
description: "Gunakan AI untuk memetakan status tersembunyi dalam flag, lalu periksa kode dan tentukan mana yang perlu dimodelkan secara eksplisit."
author: "C.S Chánh Niệm"
lang: id
slug: implicit-state-machines-id
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

Banyak aplikasi menyimpan status dalam flag yang tersebar: memuat, error, mengedit, masuk. Jika digabungkan, flag itu dapat membentuk keadaan yang tidak pernah direncanakan, seperti memuat dan error sekaligus.

Dalam unggahan di X, Steve Ruiz menyarankan agar agen diminta menemukan mesin status implisit. Perlakukan hasilnya sebagai kandidat untuk diperiksa, bukan fakta. [1]

Untuk setiap kandidat, minta agen menunjukkan:

- file dan variabel yang mewakilinya;
- status dan transisi yang diizinkan kode;
- kombinasi yang seharusnya mustahil serta kode yang masih mengizinkannya.

Periksa setiap klaim di repositori. Sebagian flag berdiri sendiri dan tidak perlu model formal. Buat mesin status eksplisit ketika status saling berinteraksi, kombinasinya bertambah, memicu bug, atau membuat pengelola sulit memahami kemampuan fitur. Diagram hanya berguna bila memperjelas aturan tersebut.

Biarkan agen mengusulkan peta; biarkan kode memastikannya.

### Sumber

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

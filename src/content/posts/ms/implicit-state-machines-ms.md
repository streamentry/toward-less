---
title: "Cari mesin keadaan yang tersembunyi dalam aplikasi anda"
description: "Gunakan AI untuk memetakan keadaan yang tersembunyi dalam bendera, kemudian semak kod dan tentukan yang perlu dimodelkan dengan jelas."
author: "C.S Chánh Niệm"
lang: ms
slug: implicit-state-machines-ms
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

Banyak aplikasi menyimpan keadaan dalam bendera yang bertaburan: sedang memuat, ralat, menyunting, log masuk. Apabila digabungkan, bendera ini boleh menghasilkan keadaan yang tidak dirancang, seperti sedang memuat dan ralat pada masa yang sama.

Dalam satu hantaran di X, Steve Ruiz mencadangkan supaya ejen diminta mencari mesin keadaan tersirat ini. Anggap hasilnya sebagai calon untuk disemak, bukan fakta. [1]

Bagi setiap calon, minta ejen menunjukkan:

- fail dan pemboleh ubah yang mewakilinya;
- keadaan serta peralihan yang dibenarkan oleh kod;
- gabungan yang sepatutnya mustahil dan kod yang masih membenarkannya.

Semak setiap dakwaan dalam repositori. Sesetengah bendera tidak berkaitan dan tidak memerlukan model formal. Nyatakan mesin keadaan dengan jelas apabila keadaan saling berinteraksi, bertambah banyak, menyebabkan pepijat atau menyukarkan penjaga memahami fungsi sesuatu ciri. Gambar rajah hanya berguna jika menjelaskan peraturan itu.

Biarkan ejen mencadangkan peta; biarkan kod mengesahkannya.

### Sumber

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

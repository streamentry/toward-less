---
title: "Cari mesin keadaan yang tersembunyi dalam aplikasi anda"
description: "Tanya di mana aplikasi anda menyimpan keadaannya, dan namakan mod-mod yang sebenarnya boleh berlaku."
author: "C.S Chánh Niệm"
lang: ms
slug: implicit-state-machines-ms
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Kebanyakan aplikasi tidak mempunyai satu mesin keadaan sahaja. Ia mempunyai banyak mesin, tanpa nama.

Satu bendera sedang memuat di sini, satu bendera ralat di sana, satu bendera sedang mengedit, satu bendera sudah log masuk. Setiap satu kelihatan kecil apabila dilihat sendiri. Bersama-sama, ia bergabung menjadi mod yang tidak dipilih oleh sesiapa: sedang memuat dan mengalami ralat pada masa yang sama, sedang mengedit sesuatu yang sudah tidak wujud, sudah disimpan dan belum disimpan pada masa yang sama.

Dalam satu hantaran di X, Steve Ruiz (@steveruizok) mencadangkan satu gesaan: *“find all of the implicit state machines in my app”* — cari semua mesin keadaan tersirat dalam aplikasi saya.

Minta senarai itu beserta bukti. Di manakah setiap mesin itu berada dalam kod? Dalam keadaan apakah ia boleh berada? Apakah yang memindahkannya dari satu keadaan ke keadaan lain? Gabungan manakah yang tidak boleh berlaku, dan gabungan manakah yang tidak sepatutnya berlaku tetapi berlaku?

Menamakannya adalah perkara utama, bukan melukis gambar rajah. Apabila sesuatu mod sudah mempunyai nama, anda boleh bertanya sama ada ia sepatutnya wujud. Selalunya jawapannya tidak — dan mengeluarkannya lebih mudah daripada mengendalikannya.

Bukan setiap bendera memerlukan mesin formal. Itu hanya menukar satu jenis kekusutan dengan jenis yang lain. Sesebuah mesin wajar dinamakan apabila keadaannya semakin bertambah, apabila pepijat timbul kerana aplikasi berada dalam dua mod serentak, atau apabila pembaca baharu tidak dapat menyatakan apa yang boleh dilakukan oleh aplikasi itu.

AI boleh tersilap dalam hal ini. Biarkan ia mencadangkan mesin-mesin itu; biarkan kod yang mengujinya.

**Semakin sedikit keadaan yang mungkin, semakin jelas apa yang dilihat.**

*Diilhamkan oleh hantaran [Steve Ruiz (@steveruizok)](https://x.com/steveruizok/status/2116552016218710389) di X. Hantaran itu disahkan pada 8 November 2026: 10:24 malam, 31 Oktober 2026.*

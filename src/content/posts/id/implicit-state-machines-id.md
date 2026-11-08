---
title: "Temukan mesin state yang tersembunyi di aplikasi Anda"
description: "Tanyakan di mana aplikasi Anda menyimpan statenya, dan beri nama mode-mode yang benar-benar bisa terjadi."
author: "C.S Chánh Niệm"
lang: id
slug: implicit-state-machines-id
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Sebagian besar aplikasi tidak hanya memiliki satu mesin state. Mereka memiliki banyak mesin, tanpa nama.

Sebuah flag loading di sini, flag error di sana, flag editing, flag sudah login. Masing-masing terlihat kecil jika dilihat sendiri. Bersama-sama, mereka bergabung menjadi mode-mode yang tidak dipilih siapa pun: sedang loading sekaligus error, sedang mengedit sesuatu yang sudah tidak ada, tersimpan sekaligus belum tersimpan pada saat yang sama.

Dalam sebuah unggahan di X, Steve Ruiz (@steveruizok) menyarankan sebuah prompt: *“find all of the implicit state machines in my app”* — temukan semua mesin state implisit di aplikasi saya.

Mintalah daftar itu beserta bukti. Di mana masing-masing mesin itu berada dalam kode? Dalam state apa saja ia bisa berada? Apa yang memindahkannya dari satu state ke state lain? Kombinasi mana yang tidak mungkin terjadi, dan kombinasi mana yang seharusnya tidak terjadi tetapi terjadi?

Memberi nama adalah intinya, bukan menggambar diagram. Begitu sebuah mode memiliki nama, Anda bisa bertanya apakah mode itu seharusnya ada. Sering kali jawabannya tidak — dan menghapusnya lebih sederhana daripada menanganinya.

Tidak setiap flag membutuhkan mesin formal. Itu hanya menukar satu jenis kekacauan dengan jenis lain. Sebuah mesin layak diberi nama ketika state-state bertambah banyak, ketika sebuah bug muncul karena aplikasi berada dalam dua mode sekaligus, atau ketika pembaca baru tidak bisa mengatakan apa yang bisa dilakukan aplikasi itu.

AI bisa salah dalam hal ini. Biarkan ia mengusulkan mesin-mesin itu; biarkan kode yang mengujinya.

**Semakin sedikit state yang mungkin, semakin jelas yang terlihat.**

*Terinspirasi oleh unggahan [Steve Ruiz (@steveruizok)](https://x.com/steveruizok/status/2116552016218710389) di X. Unggahan tersebut diverifikasi pada 8 November 2026: 22.24, 31 Oktober 2026.*

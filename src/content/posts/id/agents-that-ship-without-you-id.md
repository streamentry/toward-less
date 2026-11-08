---
title: "Agen yang Mengirim Tanpa Anda"
description: "Agen bukanlah sistemnya. Spesifikasi, tugas-tugas kecil, dan harness-lah sistemnya."
author: "C.S Chánh Niệm"
lang: id
slug: agen-yang-mengirim-tanpa-anda-id
translationKey: agents-that-ship-without-you-2026
pubDatetime: 2026-11-08T23:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Dalam sebuah unggahan di X, shikamaru (@shikamarutsai) membagikan lokakarya 41 menit oleh Addy Osmani, seorang insinyur Anthropic yang sebelumnya bekerja di Google. Kalimat Osmani yang dikutip sangat lugas: "Google mempekerjakan saya dengan gaji $500K–$1,2 juta setahun karena saya tahu cara membuat agen AI menulis kode yang tidak rusak."

Jawaban lokakarya itu bukanlah prompt yang lebih baik. Jawabannya adalah sebuah harness, dalam lima langkah: mempertajam gagasan, menulis spesifikasi, merencanakan dalam tugas-tugas kecil, membangun dengan tes terlebih dahulu, lalu memverifikasi dan meninjau.

Langkah satu: masukkan gagasan yang masih samar, dan agen akan mewawancarai Anda, lalu kembali dengan tiga arah. Langkah dua: kunci kriteria keberhasilan, tumpukan teknologi, dan pertanyaan-pertanyaan yang masih terbuka sebelum satu baris kode pun ditulis. Langkah tiga: pecah pekerjaan menjadi tugas-tugas kecil, masing-masing dengan kriteria penerimaan dan daftar berkas yang boleh disentuhnya. Langkah empat: bangun dengan tes terlebih dahulu, dari merah ke hijau, potongan demi potongan, supaya tidak ada yang sudah berjalan menjadi rusak. Langkah lima: verifikasi dan tinjau — agen membuka aplikasi di peramban, memeriksa keamanan, dan menyederhanakan kodenya sendiri.

Unggahan itu mengatakan Osmani membuka kode sumber untuk ke-24 skill-nya, dan repositorinya mendekati 100 ribu bintang. Google, kata unggahan itu, menyebut ini "agentic engineering". Unggahan itu mengutip tulisan pendamping oleh @beamnxw, "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup" — simpan kemajuan, verifikasi hasil, gunakan kembali alur kerja, sehingga proses yang panjang meninggalkan sesuatu yang bisa dibuka, bukti yang bisa diperiksa, dan cukup kemajuan yang tersimpan untuk dilanjutkan besok.

Perhatikan ke mana pekerjaan itu berpindah. Bukan ke mengawasi agen, melainkan ke apa yang terjadi sebelum agen mulai: wawancara, spesifikasi, tugas kecil dengan batas yang sudah digambar. Agen yang hanya boleh menyentuh berkas-berkas yang disebutkan, yang harus lolos tes sebelum melangkah, yang harus menyimpan kemajuannya — agen itu bisa ditinggal sendiri. Agen tanpa batas tidak bisa.

Itulah pelajaran yang sama seperti menamai state machine: kebebasan yang berhasil adalah kebebasan yang dibatasi. Harness adalah daftar mode yang boleh dimasuki oleh proses itu, dan bukti yang harus dihasilkannya untuk berpindah dari satu mode ke mode lain.

Ada baiknya tidak melebih-lebihkan. "Anda tidak harus" menghabiskan berminggu-minggu membangun ini dengan tangan — tetapi harness itu sendiri adalah penilaian berminggu-minggu yang dipadatkan menjadi 24 skill dan sebuah daftar periksa. Agen yang memeriksa keamanannya sendiri dan menyederhanakan kodenya sendiri tetap membutuhkan seseorang di luar proses itu untuk membaca buktinya. Kemajuan yang tersimpan hanya berguna jika benar-benar diperiksa, dan "verifikasi dan tinjau" adalah sebuah langkah, bukan jaminan.

Janjinya lebih sempit daripada gembar-gembornya, dan justru karena itu lebih baik: lebih sedikit mengawasi, lebih sedikit keterikatan pada proses itu sendiri. Letakkan perhatian pada persiapan — spesifikasi, tugas kecil, keadaan yang tersimpan — lalu lepaskan.

**Agen bukanlah sistemnya. Harness-lah sistemnya.**

*Terinspirasi oleh unggahan dari [shikamaru (@shikamarutsai)](https://x.com/shikamarutsai/status/2119197676415877128) di X, tentang lokakarya Addy Osmani mengenai agentic engineering, yang mengutip "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup" karya @beamnxw. Unggahan itu diverifikasi pada 8 November 2026: 5:37 AM, 8 November 2026.*

---
title: "Buat Daftar Sebelum Memperbaiki"
description: "Prompt audit dapat menemukan pekerjaan pemeliharaan, tetapi perubahan yang belum pasti tetap perlu diperiksa manusia."
author: "C.S Chánh Niệm"
lang: id
slug: perbaiki-apa-yang-kamu-yakini-id
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Artikel ini menunjukkan cara memakai prompt audit AI untuk menemukan masalah pemeliharaan sambil menyerahkan perubahan yang belum pasti kepada manusia.

Pada 9 November 2026, Alex Albert membagikan prompt yang ia gunakan saat model baru hadir: periksa proyek, cari bagian yang rusak atau tidak diperlukan, perbaiki yang tampak jelas, dan daftarkan sisanya untuk ditinjau. Manfaatnya adalah pemisahan antara perubahan dan keputusan.

Inti instruksinya: “Fix what you’re sure about and list the rest for me to review.” (artinya: perbaiki yang jelas dan daftarkan sisanya untuk ditinjau.)

## Tiga batas

- **Keyakinan bukan bukti.** “Perbaiki yang kamu yakini” tetap bisa menghasilkan perubahan yang keliru. Minta file terkait, pengujian, dan alasannya sebelum menerima perbaikan.
- **“Seluruh proyek” perlu laporan cakupan.** Minta agen menyebutkan file yang dibaca dan yang dilewati. Instruksi luas tidak membuktikan semua file telah diperiksa.
- **Temuan berbeda perlu pemeriksaan berbeda.** Perbaikan bug perlu diuji; klaim kinerja perlu diukur; penghapusan perlu bukti bahwa kode tidak dipakai; perubahan gaya perlu mengikuti aturan proyek yang jelas.

## Alur yang lebih aman

- Minta daftar temuan berprioritas, jalur file, dan bukti sebelum perubahan dibuat.
- Izinkan hanya perubahan kecil dan mekanis yang tidak mengubah perilaku.
- Kembalikan penghapusan, perubahan perilaku, refaktor lintas file, dan temuan yang belum pasti untuk disetujui.
- Cocokkan diff dengan daftar, lalu jalankan pemeriksaan proyek.

Gunakan prompt untuk membuat antrean tinjauan, bukan memberi agen wewenang tanpa batas. Batasnya ada pada daftar yang diperiksa manusia, bukan pada keyakinan model.

*Sumber: Alex Albert (@alexalbert__), [post X 2119884951550386671](https://x.com/alexalbert__/status/2119884951550386671), 9 November 2026. X mengembalikan 403 saat peninjauan ini; teksnya dicocokkan dengan [salinan linimasa Albert di Teapawt](https://teapawt.org/alexalbert__). Itu salinan sekunder.*

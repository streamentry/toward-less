---
title: "Kamulah Loop-nya"
description: "Tingkat 0–7 membantu mendiagnosis agen kode, tetapi bukan model universal atau jalur wajib menuju otonomi."
author: "C.S Chánh Niệm"
lang: id
slug: kamulah-loopnya-id
translationKey: harness-loops-graphs-2026
pubDatetime: 2026-11-10T05:31:00+07:00
draft: false
featured: false
tags: [technology]
---
X Article m4lka menjelaskan sistem agen kode dalam tingkat 0–7: total delapan tahap jika dihitung mulai dari nol. Model ini memisahkan fungsi yang sering dicampur oleh tim:

- 0, chat: seseorang mengoordinasikan setiap langkah.
- 1, harness: model mendapat alat dan akses berkas.
- 2, status dan izin: memori bertahan dan batas diterapkan.
- 3, siklus pemeriksaan: tes dapat gagal; “model berkata sudah selesai” bukan pemeriksaan.
- 4, umpan balik: percobaan ulang dibatasi dan kegagalan berulang dieskalasikan.
- 5, graf: dependensi nyata dibuat eksplisit.
- 6, gerbang dan jalur kembali: pekerjaan yang lolos tetap, hanya kegagalan yang dijalankan ulang.
- 7, pembelajaran: kegagalan menghasilkan batasan untuk lapisan yang bertanggung jawab.

Ini model desain untuk agen perangkat lunak, bukan skala yang tervalidasi secara empiris. Tes dan build dapat diulang; penulisan, desain, dan negosiasi sering bergantung pada penilaian tanpa tes deterministik.

Tingkat ini alat diagnosis, bukan jalur wajib. Tugas sekali jalan berbiaya rendah mungkin cukup dikerjakan lewat chat. Pemeriksaan dapat dirancang sebelum membangun seluruh harness. Tambahkan lapisan ketika biaya kegagalan membenarkan upaya itu. Menentukan gerbang berdasarkan biaya membatalkan perubahan adalah heuristik, bukan hukum.

Tingkat terakhir juga sulit diukur: “kelas kegagalan yang sama” bergantung pada cara orang mengelompokkan kegagalan setelah terjadi. Tetapkan kategori terlebih dahulu dan pantau apakah biaya kegagalan berulang turun.

Model ini membantu menata desain agen kode; model ini tidak membuktikan agen dapat bekerja tanpa pengawasan atau semua tugas memerlukan seluruh lapisan.

Sumber: m4lka, [“Harness, Loops, Graphs: What Each Layer Fixes and What It Breaks”, X Article, 25 Oktober 2026 (status 2114338456750997922)](https://x.com/m4lkxx/status/2114338456750997922). Halaman X tidak dapat dimuat ulang dalam revisi ini; kutipan langsung dihapus.

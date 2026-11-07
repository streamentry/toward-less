---
title: "Eksperimen kecil tentang ujaran tanpa suara"
description: "Subvox menguji apakah gerakan kepala dari AirPods Pro dapat membedakan beberapa kata yang dibentuk tanpa suara."
lang: id
slug: subvox-silent-speech-id
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox) mengajukan pertanyaan terbatas: apakah data gerak AirPods Pro cukup untuk membedakan beberapa kata yang dibentuk dengan mulut tanpa suara?

Ini prototipe macOS, bukan sistem ujaran tanpa suara untuk penggunaan umum. Aplikasi merekam percepatan, laju rotasi, dan orientasi headphone, membagi setiap percobaan menjadi segmen, lalu mencocokkannya dengan templat kata memakai dynamic time warping. Layar Train membandingkan akurasi leave-one-out dengan 500 pengujian permutasi label. Layar Decode menampilkan prediksi gerakan di samping transkrip mikrofon langsung. Aplikasi ini tidak memakai model bahasa.

Eksperimennya dapat diperiksa: grafik sensor, rekaman sesi, pilihan fitur gerak, dan ambang penolakan memperlihatkan apa yang diuji. Namun README menjelaskan metodenya tanpa melaporkan hasil akurasi terukur. Sinyalnya juga terbatas: sekitar 25 Hz, terutama gerakan kepala dan rahang, bukan getaran suara. Templat bergantung pada pengguna dan sesi, dan dapat bergeser saat earbud dipasang ulang.

Subvox adalah eksperimen untuk mengukur sinyal, bukan bukti bahwa ujaran tanpa suara siap digunakan sehari-hari.

[Lihat proyek di GitHub](https://github.com/joeblau/subvox).

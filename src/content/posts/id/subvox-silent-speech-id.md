---
title: "Eksperimen kecil tentang ujaran tanpa suara"
description: "Subvox menguji apakah gerakan headphone dapat membedakan beberapa kata yang diucapkan tanpa suara."
lang: id
slug: subvox-silent-speech-id
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox menguji apakah data gerakan kepala dari AirPods Pro dapat membedakan beberapa kata yang diucapkan tanpa suara. Ini prototipe macOS, bukan sistem pengenalan ucapan umum.

Prototipe ini:

- merekam akselerasi, rotasi, dan sikap pada sekitar 25 Hz; sinyalnya terutama gerakan kepala dan rahang, bukan getaran suara;
- mencocokkan segmen dengan template kata khusus pengguna dan sesi menggunakan dynamic time warping;
- membandingkan klasifikasi leave-one-out dengan 500 uji label acak dan menampilkan transkrip mikrofon di samping prediksi gerakan.

README menjelaskan metodenya, tetapi tidak melaporkan hasil akurasi yang diamati. Memasang ulang earbud dapat menggeser template; prototipe ini tidak memakai model bahasa. Eksperimen ini menguji sebuah sinyal, bukan membuktikan bahwa bicara tanpa suara siap digunakan sehari-hari.

Sumber: [README Subvox](https://github.com/joeblau/subvox/blob/main/README.md) (diakses 14 November 2026).

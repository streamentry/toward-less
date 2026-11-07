---
title: "Eksperimen kecil tentang pertuturan tanpa suara"
description: "Subvox menguji sama ada gerakan kepala AirPods Pro dapat membezakan beberapa perkataan yang dibentuk tanpa suara."
lang: ms
slug: subvox-silent-speech-ms
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox) menguji satu soalan yang khusus: adakah data gerakan AirPods Pro cukup untuk membezakan beberapa perkataan yang dibentuk dengan mulut tanpa suara?

Ini prototaip macOS, bukan sistem pertuturan senyap umum. Aplikasi ini merekodkan pecutan, kadar putaran dan orientasi fon kepala, membahagikan setiap percubaan kepada segmen, kemudian memadankannya dengan templat perkataan menggunakan dynamic time warping. Skrin Train membandingkan ketepatan leave-one-out dengan 500 ujian permutasi label. Skrin Decode memaparkan ramalan gerakan bersama transkripsi langsung mikrofon. Tiada model bahasa digunakan.

Eksperimen ini boleh diperiksa: graf sensor, rakaman sesi, pilihan ciri gerakan dan ambang penolakan menunjukkan perkara yang diuji. Namun README menerangkan kaedah tanpa melaporkan keputusan ketepatan yang diukur. Isyaratnya juga terbatas: kira-kira 25 Hz, kebanyakannya gerakan kepala dan rahang, bukan getaran suara. Templat bergantung pada pengguna dan sesi, dan boleh berubah apabila fon telinga dipasang semula.

Subvox ialah eksperimen untuk mengukur isyarat, bukan bukti bahawa pertuturan senyap sudah sesuai untuk kegunaan harian.

[Lihat projek di GitHub](https://github.com/joeblau/subvox).

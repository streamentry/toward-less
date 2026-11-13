---
title: "Eksperimen kecil tentang pertuturan tanpa suara"
description: "Subvox menguji sama ada gerakan fon telinga dapat membezakan beberapa perkataan tanpa suara."
lang: ms
slug: subvox-silent-speech-ms
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox menguji sama ada data gerakan kepala daripada AirPods Pro dapat membezakan beberapa perkataan yang dibentuk tanpa suara. Ini prototaip macOS, bukan sistem pengecaman pertuturan umum.

Prototaip ini:

- merekod pecutan, putaran dan orientasi pada kira-kira 25 Hz; isyaratnya kebanyakannya gerakan kepala dan rahang, bukan getaran suara;
- memadankan segmen dengan templat perkataan khusus pengguna dan sesi menggunakan dynamic time warping;
- membandingkan klasifikasi leave-one-out dengan 500 ujian label rawak dan memaparkan transkrip mikrofon di sebelah ramalan gerakan.

README menerangkan kaedahnya tetapi tidak melaporkan hasil ketepatan yang diperhatikan. Memasang semula fon telinga boleh mengubah templat; prototaip ini tidak menggunakan model bahasa. Ia menguji satu isyarat, bukan membuktikan pertuturan tanpa suara sesuai untuk kegunaan harian.

Sumber: [README Subvox](https://github.com/joeblau/subvox/blob/main/README.md) (diakses pada 14 November 2026).

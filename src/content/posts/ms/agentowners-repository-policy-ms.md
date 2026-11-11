---
title: "AGENTOWNERS: dasar repositori untuk ejen AI"
description: "Perkara yang diputuskan AGENTOWNERS, perkara yang tidak dapat dikawalnya, dan sebab projek ini masih prapelancaran."
lang: ms
slug: agentowners-repository-policy-ms
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS menjawab satu soalan: menurut dasar dalam repositori, bolehkah ejen AI melakukan tindakan ini pada repositori? README menerangkannya sebagai enjin peraturan deterministik, bukannya penyemak kod AI atau kotak pasir masa jalan.

## Perkara yang diputuskan

- Membaca dasar YAML berversi, mengesan isyarat ejen, mengelaskan laluan yang berubah dan membuat inferens tentang tindakan.
- Menyelesaikan konflik mengikut urutan: sekat, minta kelulusan, benarkan. Ejen tidak dikenali memerlukan kelulusan secara lalai; perubahan pada aliran kerja dan fail rahsia disekat.
- Dasar dan input yang sama menghasilkan keputusan yang sama. Enjin tidak memanggil model atau API dasar terhos.

## Perkara yang tidak dapat dikawal

AGENTOWNERS mengawal sumbangan pada sempadan repositori. Ia tidak memintas panggilan model atau alat di tempat lain, mengasingkan pelaksanaan kod atau menilai ketepatan kod.

## Status semasa

Projek ini masih prapelancaran: pakej npm dan GitHub Action stabil v0 belum diterbitkan. README menyarankan penilaian daripada sumber dan tidak menetapkan main sebagai rujukan aliran kerja produksi.

## Sumber

[README AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS#readme), disemak pada 11 November 2026.

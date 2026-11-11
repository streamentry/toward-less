---
title: "AGENTOWNERS: kebijakan repositori untuk agen AI"
description: "Apa yang diputuskan AGENTOWNERS, apa yang tidak dapat dikendalikannya, dan mengapa proyek ini masih pra-rilis."
lang: id
slug: agentowners-repository-policy-id
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS menjawab satu pertanyaan: menurut kebijakan yang tersimpan di repositori, bolehkah agen AI melakukan tindakan ini? README menggambarkannya sebagai mesin aturan deterministik, bukan peninjau kode AI atau sandbox runtime.

## Yang diputuskan

- Membaca kebijakan YAML berversi, mendeteksi sinyal agen, mengelompokkan path yang berubah, dan menyimpulkan tindakan.
- Menyelesaikan konflik dengan urutan: blokir, minta persetujuan, izinkan. Agen yang tidak dikenal memerlukan persetujuan secara default; perubahan workflow dan berkas rahasia diblokir.
- Kebijakan dan masukan yang sama menghasilkan putusan yang sama. Mesin tidak memanggil model atau API kebijakan ter-host.

## Yang tidak dapat dikendalikan

AGENTOWNERS mengatur kontribusi di batas repositori. Ia tidak mencegat panggilan model atau alat di tempat lain, mengisolasi eksekusi kode, atau menilai kebenaran kode.

## Status saat ini

Proyek masih pra-rilis: paket npm dan GitHub Action stabil v0 belum diterbitkan. README menyarankan evaluasi dari sumber dan tidak mematok workflow produksi ke main.

## Sumber

[README AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS#readme), diperiksa pada 11 November 2026.

---
title: "AGENTOWNERS: kebijakan repositori untuk agen AI"
description: "Aturan deterministik untuk menentukan tindakan agen di repositori."
lang: id
slug: agentowners-repository-policy-id
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Panduan agen menjelaskan cara kerja, tetapi tidak menegakkan batas tindakan yang boleh dilakukan. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) menambahkan kebijakan deterministik melalui berkas YAML di repositori.

Mesinnya mendeteksi agen, mengelompokkan jalur berubah, lalu menerapkan urutan tetap: blokir, minta persetujuan, izinkan. Agen tak dikenal perlu persetujuan; perubahan workflow dan berkas rahasia diblokir. Intinya tidak memakai model atau layanan kebijakan eksternal. Proyek masih pra-rilis: paket npm dan Action stabil v0 belum terbit. Kebijakan repositori bukan sandbox runtime.

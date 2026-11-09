---
title: "Perbaiki Apa yang Kamu Yakini"
description: "Alex Albert menjalankan prompt yang sama di setiap proyek setiap kali ada model baru: baca seluruh proyek, temukan semua yang rusak, tidak konsisten, tidak efisien, atau tidak lagi dibutuhkan, perbaiki apa yang kamu yakini, dan daftarkan sisanya untuk ditinjau. Prompt itu bagus — dan bagian yang menahan beban adalah daftarnya, bukan perbaikannya."
author: "C.S Chánh Niệm"
lang: id
slug: perbaiki-apa-yang-kamu-yakini-id
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Setiap kali ada model baru, Alex Albert menjalankan prompt yang sama di semua proyeknya: baca seluruh proyek ini dan temukan semua yang rusak, tidak konsisten, tidak efisien, atau tidak lagi dibutuhkan. Perbaiki apa yang kamu yakini dan daftarkan sisanya untuk saya tinjau. Sangat saya sarankan untuk dicoba.

Prompt itu bagus, dan alasan ia bagus bukan perbaikannya. Melainkan pembagiannya. Prompt itu membagi pekerjaan menjadi dua bagian — apa yang boleh diubah model sendiri, dan apa yang harus dibawa kembali untuk diputuskan manusia — dan bagian kedua itulah yang membuat bagian pertama aman. Kebanyakan prompt agen gagal karena memberi model satu tugas, "perbaiki," tanpa batas. Prompt ini menggambar batasnya di dalam instruksinya sendiri.

Prompt itu juga mengarahkan model ke jenis pekerjaan yang tepat. Membangun adalah penggunaan agen yang glamor; merawat adalah penggunaan yang bisa diandalkan. Menemukan kode mati, penamaan yang tidak konsisten, logika yang diduplikasi, dan hal-hal yang tidak lagi dibutuhkan adalah pekerjaan yang terbatas, dengan diff yang bisa ditinjau. Penghapusan yang salah muncul di diff. Fitur yang salah muncul di produksi. Prompt Albert memperlakukan model sebagai petugas kebersihan dengan daftar periksa, peran yang sebenarnya dikuasai agen, dan meminta daftar itu kembali.

Tetapi prompt itu punya tiga titik lemah, dan layak disebut sebelum Anda menjalankannya.

Pertama, "perbaiki apa yang kamu yakini." Keyakinan model tidak terkalibrasi. Model salah dengan penuh percaya diri justru pada hal-hal yang tampak paling pasti baginya — perbaikan yang tampak masuk akal untuk bug yang halus, "penyederhanaan" yang menghapus kasus khusus yang menopang segalanya. Keamanan prompt bergantung pada model yang tahu apa yang ia yakini, dan itulah satu hal yang tidak bisa ia ketahui dengan andal. Bagian daftar-untuk-ditinjau adalah bagian yang menahan beban justru karena bagian perbaikan tidak bisa dipercaya untuk mengawasi dirinya sendiri.

Kedua, "baca seluruh proyek ini." Pada proyek kecil, model bisa. Pada proyek besar, tidak bisa — batas konteks berarti ia mengambil sampel, dan ia tidak akan memberi tahu bahwa ia mengambil sampel. Prompt ini bekerja paling baik di mana proyek muat dalam jendela, dan diam-diam memburuk di mana tidak muat. Jika proyek Anda besar, versi jujur dari prompt menyebutkan bagian-bagian yang harus dibaca.

Ketiga, prompt ini menggabungkan empat penilaian berbeda ke dalam satu instruksi: rusak, tidak konsisten, tidak efisien, tidak lagi dibutuhkan. Itu adalah kebenaran, konsistensi, kinerja, dan kode mati — empat jenis penglihatan yang berbeda. Model akan menemukan yang mudah — kode mati, penyimpangan gaya — dan melewatkan yang sulit: bug yang halus, ketidakkonsistenan arsitektur yang hanya muncul di tiga berkas. Satu prompt, empat pekerjaan, dan model akan mengerjakan dua yang ia kuasai dan melaporkan yang lain sebagai selesai.

Blog ini menjalankan sesuatu yang sangat mirip dengan prompt Albert, dengan tangan, pada dirinya sendiri. Sebuah audit atas mesin keadaan implisit di Toward Less menemukan tiga belas mesin yang hidup dan empat hantu: dua definisi berbeda tentang "diterbitkan," logika tema yang diduplikasi di dua tempat, deteksi bahasa yang diduplikasi dengan fungsi mati, tautan paginasi yang mengarah ke halaman yang tidak ada. Setiap satu di antaranya persis seperti yang diminta prompt Albert — tidak konsisten, tidak efisien, tidak lagi dibutuhkan — dan setiap satu ditemukan dengan membaca seluruh proyek dan mendaftar apa yang salah sebelum memperbaikinya. Daftar datang lebih dulu. Perbaikan menyusul, dalam klon yang bersih, dan diverifikasi sebelum ada yang di-push.

Jadi cobalah prompt itu. Tetapi jalankan untuk daftarnya, bukan untuk perbaikannya. Baca daftarnya sendiri, periksa perbaikan yang dibuatnya terhadap daftar yang dikembalikannya, dan ingatlah bahwa "saya yakin tentang ini" adalah kalimat yang akan diucapkan model tentang hampir apa saja. Prompt itu bagus karena menjaga manusia tetap dalam putaran. Putaran itulah intinya.

*Terinspirasi oleh post X ["Every time we have a new model, I run the same simple prompt on all my projects: 'Read this entire project and find everything that's broken, inconsistent, inefficient, or no longer needed. Fix what you're sure about and list the rest for me to review.' highly recommend trying"](https://x.com/alexalbert__/status/2119884951550386671) oleh [Alex Albert (@alexalbert__)](https://x.com/alexalbert__/status/2119884951550386671). Post tersebut diverifikasi pada 10 November 2026: 3:08 AM, 10 Nov 2026, 61.5K views. Alex Albert adalah peneliti di Anthropic. Audit mesin keadaan Toward Less yang disebut dalam post ini adalah audit blog itu sendiri pada 8 November 2026, tersimpan di workspace/toward-less/audit/implicit-state-machines-audit.md.*

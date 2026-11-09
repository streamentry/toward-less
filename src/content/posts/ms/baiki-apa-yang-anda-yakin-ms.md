---
title: "Baiki Apa yang Anda Yakin"
description: "Alex Albert menjalankan gesaan yang sama pada setiap projek setiap kali model baharu tiba: baca seluruh projek, cari semua yang rosak, tidak konsisten, tidak cekap, atau tidak lagi diperlukan, baiki apa yang anda yakin, dan senaraikan selebihnya untuk disemak. Gesaan itu bagus — dan bahagian yang menanggung beban ialah senarai, bukan pembaikan."
author: "C.S Chánh Niệm"
lang: ms
slug: baiki-apa-yang-anda-yakin-ms
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Setiap kali model baharu tiba, Alex Albert menjalankan gesaan yang sama pada semua projeknya: "Baca seluruh projek ini dan cari semua yang rosak, tidak konsisten, tidak cekap, atau tidak lagi diperlukan. Baiki apa yang anda yakin dan senaraikan selebihnya untuk saya semak." Sangat disyorkan untuk mencuba.

Ia gesaan yang baik, dan sebab ia baik bukan terletak pada pembaikan. Ia terletak pada pembahagian. Gesaan itu membahagikan kerja kepada dua bahagian — apa yang model boleh ubah sendiri, dan apa yang ia mesti bawa pulang untuk manusia putuskan — dan bahagian kedua itulah yang menjadikan bahagian pertama selamat. Kebanyakan gesaan ejen gagal kerana ia memberi model satu tugas, "baikkannya," tanpa sempadan. Gesaan ini melukis sempadan di dalam arahan itu sendiri.

Gesaan itu juga mengarahkan model kepada jenis kerja yang betul. Membina ialah penggunaan ejen yang glamor; menyelenggara ialah penggunaan yang boleh diharap. Mencari kod mati, penamaan yang tidak konsisten, logik yang berulang, dan perkara yang tidak lagi diperlukan ialah kerja yang terbatas dengan diff yang boleh disemak. Pemadaman yang salah muncul dalam diff. Ciri yang salah muncul dalam pengeluaran. Gesaan Albert menganggap model sebagai janitor dengan senarai semak, iaitu peranan yang sebenarnya ejen mahir, dan ia meminta senarai semak itu dikembalikan.

Tetapi gesaan ini mempunyai tiga titik lembut, dan ia wajar disebut sebelum anda menjalankannya.

Pertama, "baiki apa yang anda yakin." Keyakinan model tidak ditentukur. Model sering salah dengan yakin tentang perkara yang kelihatan paling pasti baginya — pembaikan yang kelihatan munasabah untuk pepijat yang halus, "pemudahan" yang membuang kes khas yang menanggung beban. Keselamatan gesaan bergantung pada model yang tahu apa yang ia yakin, dan itu satu-satunya perkara yang ia tidak boleh tahu dengan boleh diharap. Bahagian senarai-untuk-semakan ialah bahagian yang menanggung beban tepat kerana bahagian pembaikan tidak boleh dipercayai untuk mengawal dirinya sendiri.

Kedua, "baca seluruh projek ini." Pada projek kecil, model boleh. Pada projek besar, ia tidak boleh — had konteks bermakna ia mengambil sampel, dan ia tidak akan memberitahu anda ia mengambil sampel. Gesaan ini berfungsi paling baik di mana projek itu muat dalam tetingkap, dan merosot secara senyap di mana ia tidak muat. Jika projek anda besar, versi gesaan yang jujur menamakan bahagian yang perlu dibaca.

Ketiga, gesaan ini menggabungkan empat pertimbangan berbeza ke dalam satu arahan: rosak, tidak konsisten, tidak cekap, tidak lagi diperlukan. Itu ketepatan, konsistensi, prestasi, dan kod mati — empat cara melihat yang berbeza. Model akan menemui yang mudah — kod mati, hanyutan gaya — dan terlepas yang sukar: pepijat yang halus, ketidakkonsistenan seni bina yang hanya muncul merentasi tiga fail. Satu gesaan, empat tugas, dan model akan melakukan dua yang ia mahir dan melaporkan yang lain sebagai selesai.

Blog ini pernah menjalankan sesuatu yang sangat hampir dengan gesaan Albert, dengan tangan, pada dirinya sendiri. Audit mesin keadaan tersirat dalam Toward Less menemui tiga belas yang masih hidup dan empat yang hanya bayangan: dua takrifan berbeza tentang "published," logik tema yang digandakan di dua tempat, pengesanan bahasa yang digandakan dengan fungsi yang mati, pautan penomboran yang menunjuk ke halaman yang tidak wujud. Setiap satu daripadanya tepat seperti yang diminta oleh gesaan Albert — tidak konsisten, tidak cekap, tidak lagi diperlukan — dan setiap satunya ditemui dengan membaca seluruh projek dan menyenaraikan apa yang salah sebelum membaikinya. Senarai dahulu. Pembaikan menyusul, dalam klon yang bersih, dan disahkan sebelum apa-apa ditolak naik.

Jadi cubalah gesaan itu. Tetapi jalankannya untuk senarai, bukan untuk pembaikan. Baca senarai itu sendiri, semak pembaikan yang dibuatnya berbanding senarai yang dikembalikannya, dan ingat bahawa "Saya yakin tentang ini" ialah ayat yang model akan ucapkan tentang hampir apa sahaja. Gesaan itu baik kerana ia mengekalkan manusia dalam gelung. Gelung itulah maksudnya.

*Diilhamkan oleh siaran X ["Setiap kali kami mempunyai model baharu, saya menjalankan gesaan mudah yang sama pada semua projek saya: 'Baca seluruh projek ini dan cari semua yang rosak, tidak konsisten, tidak cekap, atau tidak lagi diperlukan. Baiki apa yang anda yakin dan senaraikan selebihnya untuk saya semak.' sangat disyorkan untuk mencuba"](https://x.com/alexalbert__/status/2119884951550386671) oleh [Alex Albert (@alexalbert__)](https://x.com/alexalbert__/status/2119884951550386671). Siaran itu disahkan pada 10 November 2026: 3:08 AM, 10 Nov 2026, 61.5K views. Alex Albert ialah Research di Anthropic. Audit mesin keadaan Toward Less yang disebut dalam siaran ini ialah audit blog sendiri pada 8 November 2026, yang disimpan di workspace/toward-less/audit/implicit-state-machines-audit.md.*

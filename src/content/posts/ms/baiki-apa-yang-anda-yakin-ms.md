---
title: "Senaraikan Sebelum Membetulkan"
description: "Prompt audit boleh mencari kerja penyelenggaraan, tetapi perubahan yang meragukan tetap perlu disemak manusia."
author: "C.S Chánh Niệm"
lang: ms
slug: baiki-apa-yang-anda-yakin-ms
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Artikel ini menerangkan cara menggunakan prompt audit AI untuk mencari isu penyelenggaraan sambil menyerahkan perubahan yang meragukan kepada manusia.

Pada 9 November 2026, Alex Albert berkongsi prompt yang digunakannya setiap kali model baharu muncul: periksa projek, cari perkara yang rosak atau tidak diperlukan, betulkan yang nampak jelas, dan senaraikan selebihnya untuk semakan. Kegunaannya ialah memisahkan kerja membetulkan daripada membuat keputusan.

Arahan utamanya ialah: “Fix what you’re sure about and list the rest for me to review.” (maksudnya, betulkan yang jelas dan senaraikan selebihnya untuk disemak.)

## Tiga batas

- **Keyakinan bukan bukti.** Arahan “betulkan perkara yang anda pasti” masih boleh menghasilkan perubahan yang salah. Minta fail berkaitan, ujian dan sebab sebelum menerima pembetulan.
- **“Seluruh projek” memerlukan laporan liputan.** Minta ejen menyenaraikan fail yang dibaca dan yang dilangkau. Arahan yang luas tidak membuktikan setiap fail telah diperiksa.
- **Setiap penemuan memerlukan semakan berlainan.** Pembaikan pepijat perlu diuji; dakwaan prestasi perlu diukur; pemadaman perlu disokong bukti bahawa kod tidak digunakan; perubahan gaya perlu mengikut konvensyen projek yang jelas.

## Aliran kerja yang lebih selamat

- Minta senarai penemuan mengikut keutamaan, bersama laluan fail dan bukti, sebelum perubahan dibuat.
- Benarkan hanya perubahan kecil dan mekanikal yang tidak mengubah tingkah laku.
- Serahkan pemadaman, perubahan tingkah laku, refaktor merentas fail dan penemuan yang tidak pasti untuk kelulusan.
- Bandingkan diff dengan senarai, kemudian jalankan semakan projek.

Gunakan prompt untuk menyediakan senarai semakan, bukan memberikan kuasa tanpa had kepada ejen. Batasnya ialah senarai yang diteliti manusia, bukan keyakinan model.

*Sumber: Alex Albert (@alexalbert__), [siaran X 2119884951550386671](https://x.com/alexalbert__/status/2119884951550386671), 9 November 2026. X memulangkan ralat 403 semasa semakan ini; teks dipadankan dengan [salinan garis masa Albert di Teapawt](https://teapawt.org/alexalbert__). Salinan ini bersifat sekunder.*

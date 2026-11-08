---
title: "Peguam Bahasa Bersara"
description: "Uncle Bob Martin menghabiskan akhir tahun 80-an menguasai C++ sepenuhnya. Kini beliau menganggap pemahaman mendalam tentang sesuatu bahasa sebagai pembaziran masa dan usaha yang amat besar, dan menyerahkannya kepada ejen-ejennya. Apa yang bersara bersama peguam bahasa — dan apa yang tidak."
author: "C.S Chánh Niệm"
lang: ms
slug: peguam-bahasa-bersara-ms
translationKey: the-language-lawyer-retires-2026
pubDatetime: 2026-11-09T00:28:00+07:00
draft: false
featured: false
tags: [technology]
---

Lelaki yang menulis *Clean Code* — buku yang mengajar satu generasi pengatur cara untuk mengambil berat tentang nama, fungsi, dan perincian — telah mengumumkan persaraannya daripada perincian. Pada 6 November 2026, Robert C. Martin, Uncle Bob, menulis bahawa beliau pernah menjadi peguam bahasa. Pada akhir tahun 80-an beliau mempelajari ARM, Annotated Reference Manual untuk C++. Beliau mengenali bahasa itu luar dan dalam. Beliau boleh membuatnya melakukan aksi akrobatik. Beliau telah menghantar banyak kod menggunakannya. Banyak sekali.

"Saya telah menyerang bahasa-bahasa lain dengan intensiti dan kedalaman yang serupa. Sehinggalah baru-baru ini, itu semata-mata satu-satunya cara untuk menjadi mahir dalam membina sistem perisian."

Sehinggalah baru-baru ini. "Saya kini menganggap pemahaman mendalam tentang sesuatu bahasa sebagai pembaziran masa dan usaha yang amat besar. Saya tidak mahu mempelajari Rust, atau Golang, atau Typescript, atau mana-mana daripada ribuan bahasa lain di luar sana. Saya akan serahkan itu kepada ejen-ejen saya."

Dua hari kemudian, uudon membuat kesimpulan dalam bahasa Cina: tidak ada lagi keperluan untuk memahami sesuatu bahasa pengaturcaraan secara mendalam. Serahkan semuanya kepada ejen. Apa yang paling anda perlu fahami ialah bentuk keseluruhan sistem — sistem dan subsistem, bukan perinciannya.

Dari segi ekonomi, ini sukar dipertikaikan. Pengetahuan peringkat sintaks dahulunya mahal untuk diperoleh dan kini murah untuk disewa. Kemahiran peguam bahasa — menyimpan seluruh bahasa di dalam kepala, mengetahui apa yang akan dilakukannya dalam kes-kes pinggir — telah dijadikan komoditi oleh ejen yang menyimpannya dengan lebih baik. Apa yang belum dijadikan komoditi ialah mengetahui apa yang sepatutnya dilakukan oleh sistem, di mana ia boleh rosak, dan rupa bentuk sesuatu yang baik. Catatan Uncle Bob ini, pada terasnya, ialah pengagihan semula perhatian: daripada bahasa kepada gestalt.

Namun perbezaan ini wajar diteliti sekali lagi, kerana mengenali sesuatu bahasa luar dan dalam tidak pernah semata-mata tentang sintaks. Bahasa ialah cara berfikir, bukan senarai kosa kata. C++ mengajar anda tentang ingatan dan kos. Rust mengajar pemilikan. TypeScript mengajar jenis sebagai kontrak. Apabila anda menyerahkan bahasa kepada ejen, anda menyerahkan pemikiran yang bahasa itu lakukan untuk anda — kecuali anda menyimpan model yang bahasa itu berikan kepada anda. Perincian itu tidak hilang; ia berpindah. Sempadan subsistem ialah perincian. Mod kegagalan ialah perincian. Kontrak antara muka ialah perincian. "Saya tidak perlu memeriksa gear" adalah benar sehingga mesin berhenti — dan kemudian orang yang tidak boleh membaca gear tidak dapat memberitahu sama ada penjelasan ejen tentang pemberhentian itu betul.

Uncle Bob membiarkan satu pintu terbuka, dan itu ialah ayat paling penting dalam catatan itu: "Jika saya benar-benar perlu memahami sesuatu perincian pada peringkat gear, saya akan menyoal ejen-ejen saya." Menyoal ialah kemahiran sekarang. Tetapi menyoal memerlukan mengetahui apa yang hendak ditanya, dan mengenali jawapan yang salah apabila anda menerimanya. Anda tidak boleh menyoal apa yang anda tidak boleh nilai. Bentuknya sama seperti masalah penyerahan: anda boleh menyerahkan kerja kepada ejen, tetapi bukan akauntabiliti. Ejen boleh menyimpan bahasa itu. Pertimbangan sama ada keluarannya betul masih perlu tinggal di suatu tempat, dan satu-satunya tempat ia boleh tinggal ialah dalam diri seseorang yang cukup memahami untuk memeriksa.

Terdapat juga sesuatu yang benar-benar membebaskan di sini, dan adalah tidak adil untuk mengabaikannya. Peguam bahasa menghabiskan bertahun-tahun menghafal apa yang kini diingati oleh mesin. Gestalt — melihat sistem dan subsistem secara menyeluruh — sentiasa menjadi kemahiran yang lebih jarang, dan ia sentiasa kelaparan oleh masa yang dimakan oleh sintaks. Jika persaraan peguam bahasa membebaskan perhatian untuk sistem, itu adalah keuntungan sebenar, bukan kerugian. Persoalannya ialah sama ada perhatian itu benar-benar pergi ke sana, atau sama ada ia pergi kepada menonton ejen bekerja dan memanggilnya pemahaman.

Perincian itu tidak mati. Ia bertukar alamat. Peguam bahasa bersara; pembaca sistem mengambil mejanya. Persoalan bagi pembaca bukan sama ada hendak mempelajari Rust atau Go. Ia adalah sama ada, apabila ejen menyerahkan sebuah sistem kepada anda, anda masih dapat membezakan sistem yang baik daripada yang buruk — dan sama ada anda tahu apa yang hendak ditanya apabila anda tidak dapat membezakannya.

*Diilhamkan oleh catatan X oleh [uudon (@uudonX)](https://x.com/uudonx/status/2119243980634530096) (8:41 pagi, 8 November 2026, 19,430 tontonan), yang memetik [Uncle Bob Martin (@unclebobmartin)](https://x.com/unclebobmartin/status/2118695884154110305) (8:23 malam, 6 November 2026, 417.5K tontonan). Catatan berbahasa Cina dibaca dalam bahasa asalnya; catatan yang dipetik disahkan sepenuhnya di URL-nya sendiri.*

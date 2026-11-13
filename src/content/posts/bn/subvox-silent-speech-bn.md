---
title: "নীরবে মুখে বলা শব্দ নিয়ে ছোট পরীক্ষা"
description: "Subvox পরীক্ষা করে কম-ফ্রিকোয়েন্সির headphone motion দিয়ে নীরব মুখ-উচ্চারিত শব্দ আলাদা করা যায় কি না।"
lang: bn
slug: subvox-silent-speech-bn
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox পরীক্ষা করে AirPods Pro-এর মাথার নড়াচড়ার তথ্য দিয়ে নীরবে মুখে উচ্চারিত কয়েকটি শব্দ আলাদা করা যায় কি না। এটি macOS-এর prototype, সাধারণ speech-recognition system নয়।

Prototype-টি:

- প্রায় 25 Hz-এ acceleration, rotation ও attitude রেকর্ড করে; সংকেতটি মূলত মাথা ও চোয়ালের নড়াচড়া, কণ্ঠস্বরের কম্পন নয়;
- dynamic time warping দিয়ে প্রতিটি segment-কে ব্যবহারকারী ও session-নির্দিষ্ট শব্দের template-এর সঙ্গে মেলায়;
- leave-one-out classification-কে 500টি shuffled-label পরীক্ষার সঙ্গে তুলনা করে এবং motion prediction-এর পাশে microphone transcript দেখায়।

README পদ্ধতি বর্ণনা করে, কিন্তু পর্যবেক্ষিত accuracy ফল দেয় না। AirPods আবার পরলে template বদলে যেতে পারে; prototype-এ language model নেই। এটি একটি signal পরীক্ষা করে, নীরব কথা দৈনন্দিন ব্যবহারের জন্য প্রস্তুত—এটি প্রমাণ করে না।

সূত্র: [Subvox README](https://github.com/joeblau/subvox/blob/main/README.md) (১৪ নভেম্বর ২০২৬-এ দেখা)।

---
title: "خاموش منہ کی حرکت پر ایک چھوٹا تجربہ"
description: "Subvox جانچتا ہے کہ کیا headphones کی حرکت سے چند خاموشی سے ادا کیے گئے الفاظ پہچانے جا سکتے ہیں۔"
lang: ur
slug: subvox-silent-speech-ur
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox یہ آزماتا ہے کہ کیا AirPods Pro کی سر کی حرکت کے ڈیٹا سے خاموشی سے منہ سے ادا کیے گئے چند الفاظ الگ پہچانے جا سکتے ہیں۔ یہ macOS کا prototype ہے، عام speech-recognition نظام نہیں۔

یہ prototype:

- تقریباً 25 Hz پر acceleration، rotation اور attitude ریکارڈ کرتا ہے؛ سگنل زیادہ تر سر اور جبڑے کی حرکت ہے، آواز کی vibration نہیں؛
- dynamic time warping سے ہر حصے کو مخصوص صارف اور session کے لفظی templates سے ملاتا ہے؛
- leave-one-out classification کا موازنہ 500 shuffled-label tests سے کرتا ہے اور motion predictions کے ساتھ microphone transcript دکھاتا ہے۔

README طریقہ بتاتا ہے لیکن دیکھی گئی accuracy کا نتیجہ نہیں دیتا۔ earbuds دوبارہ لگانے سے templates بدل سکتے ہیں؛ prototype میں language model نہیں۔ یہ ایک signal آزماتا ہے، یہ ثابت نہیں کرتا کہ خاموش speech روزمرہ استعمال کے لیے تیار ہے۔

ماخذ: [Subvox README](https://github.com/joeblau/subvox/blob/main/README.md) (14 نومبر 2026 کو دیکھا گیا).

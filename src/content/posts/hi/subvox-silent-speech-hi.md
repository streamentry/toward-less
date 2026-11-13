---
title: "मौन मुख-उच्चारण पर एक छोटा प्रयोग"
description: "Subvox जाँचता है कि कम-आवृत्ति headphone motion से कुछ मुँह-बोले शब्द पहचाने जा सकते हैं या नहीं।"
lang: hi
slug: subvox-silent-speech-hi
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox यह जाँचता है कि क्या AirPods Pro के सिर-गतिशीलता डेटा से चुपचाप मुँह से बोले गए कुछ शब्द अलग पहचाने जा सकते हैं। यह macOS prototype है, सामान्य speech-recognition system नहीं।

यह prototype:

- लगभग 25 Hz पर acceleration, rotation और attitude दर्ज करता है; संकेत मुख्यतः सिर और जबड़े की गति है, vocal vibration नहीं;
- dynamic time warping से खंडों को व्यक्ति और session के अनुसार बने शब्द-templates से मिलाता है;
- leave-one-out classification की तुलना 500 shuffled-label tests से करता है और motion prediction के साथ microphone transcript दिखाता है।

README विधि बताता है, पर देखी गई accuracy का परिणाम नहीं देता। AirPods फिर से लगाने पर templates बदल सकते हैं; prototype में language model नहीं है। यह एक signal जाँचता है, यह साबित नहीं करता कि silent speech रोज़मर्रा के उपयोग के लिए तैयार है।

स्रोत: [Subvox README](https://github.com/joeblau/subvox/blob/main/README.md) (14 नवंबर 2026 को देखा गया)।

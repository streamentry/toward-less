---
title: "निःशब्द ओठांच्या हालचालींवरील छोटा प्रयोग"
description: "Subvox कमी-दराच्या headphone motion वरून काही शब्द ओठांनी ओळखता येतात का हे तपासते."
lang: mr
slug: subvox-silent-speech-mr
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox AirPods Pro मधील डोक्याच्या हालचालींच्या डेटावरून आवाज न काढता ओठांनी उच्चारलेले काही शब्द ओळखता येतात का, हे तपासते. हा macOS prototype आहे; सर्वसाधारण speech-recognition system नाही.

Prototype:

- सुमारे 25 Hz वर acceleration, rotation आणि attitude नोंदवतो; संकेत मुख्यतः डोके व जबड्याच्या हालचालींचा आहे, आवाजाच्या कंपनांचा नाही;
- dynamic time warping वापरून प्रत्येक segment वापरकर्ता आणि session-विशिष्ट शब्द नमुन्यांशी जुळवतो;
- leave-one-out वर्गीकरणाची 500 shuffled-label tests शी तुलना करतो आणि motion prediction सोबत microphone transcript दाखवतो.

README पद्धत सांगते, पण निरीक्षित accuracy परिणाम देत नाही. earbuds पुन्हा लावल्यास नमुने बदलू शकतात; prototype मध्ये language model नाही. हा संकेत मोजण्याचा प्रयोग आहे, मूक वाणी रोजच्या वापरासाठी तयार असल्याचा पुरावा नाही.

स्रोत: [Subvox README](https://github.com/joeblau/subvox/blob/main/README.md) (14 नोव्हेंबर 2026 रोजी पाहिले).

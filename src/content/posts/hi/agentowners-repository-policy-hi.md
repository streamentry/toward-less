---
title: "AGENTOWNERS: AI एजेंटों के लिए रिपॉज़िटरी नीति"
description: "AGENTOWNERS क्या तय करता है, क्या नियंत्रित नहीं कर सकता, और यह अभी प्री-रिलीज़ क्यों है।"
lang: hi
slug: agentowners-repository-policy-hi
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS एक सवाल का जवाब देता है: रिपॉज़िटरी में रखी नीति के अनुसार क्या AI एजेंट यह रिपॉज़िटरी कार्रवाई कर सकता है? README इसे तयशुदा नियमों वाला इंजन बताती है—AI समीक्षक या रनटाइम सैंडबॉक्स नहीं।

## यह क्या तय करता है

- संस्करणित YAML नीति पढ़ता है, एजेंट संकेत पहचानता है, बदले हुए paths वर्गीकृत करता है और कार्रवाइयों का अनुमान लगाता है।
- टकराव का क्रम है: रोकें, मंज़ूरी माँगें, अनुमति दें। अज्ञात एजेंट के लिए मंज़ूरी डिफ़ॉल्ट है; workflow और secret फ़ाइलों में बदलाव डिफ़ॉल्ट रूप से रुकते हैं।
- एक ही नीति और इनपुट से एक ही निर्णय मिलता है। इंजन किसी मॉडल या hosted policy API को नहीं बुलाता।

## यह क्या नियंत्रित नहीं करता

AGENTOWNERS रिपॉज़िटरी की सीमा पर योगदान नियंत्रित करता है। यह दूसरी जगहों पर model/tool calls नहीं रोकता, code execution को अलग नहीं करता और code correctness नहीं जाँचता।

## मौजूदा स्थिति

परियोजना प्री-रिलीज़ है: npm packages और स्थिर v0 GitHub Action प्रकाशित नहीं हुए हैं। README source से मूल्यांकन करने और production workflow को main पर pin न करने को कहती है।

## स्रोत

[AGENTOWNERS README](https://github.com/streamentry/AGENTOWNERS#readme), 11 नवंबर 2026 को जाँची गई।

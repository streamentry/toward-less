---
title: "AGENTOWNERS: AI एजंटसाठी रिपॉझिटरी धोरण"
description: "रिपॉझिटरीत एजंट कोणती कामे करू शकतात हे ठरवणारे नियम."
lang: mr
slug: agentowners-repository-policy-mr
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

एजंट मार्गदर्शक काम कसे करावे हे सांगते, पण परवानगीची अंमलबजावणी करत नाही. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) रिपॉझिटरीतील versioned YAML फाइलमधून निश्चित धोरण जोडते.

इंजिन एजंट ओळखते, बदललेले मार्ग वर्गीकृत करते आणि ब्लॉक, मंजुरी, परवानगी या ठरलेल्या क्रमाने निर्णय घेते. अज्ञात एजंटला मंजुरी लागते; workflow व secret फाइलमधील बदल थांबवले जातात. Core मॉडेल किंवा बाह्य धोरण सेवा वापरत नाही. npm packages आणि स्थिर v0 Action अद्याप प्रकाशित नाहीत. हा runtime sandbox नाही.

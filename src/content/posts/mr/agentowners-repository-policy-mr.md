---
title: "AGENTOWNERS: AI एजंटसाठी रिपॉझिटरी धोरण"
description: "AGENTOWNERS काय ठरवते, काय नियंत्रित करू शकत नाही आणि प्रकल्प अजून प्री-रिलीज का आहे."
lang: mr
slug: agentowners-repository-policy-mr
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS एका प्रश्नाचे उत्तर देते: रिपॉझिटरीतील धोरणानुसार AI एजंट ही कृती करू शकतो का? README त्याचे वर्णन निर्धारक नियम-इंजिन असे करते; AI कोड-परीक्षक किंवा रनटाइम सँडबॉक्स असे नाही.

## ते काय ठरवते

- आवृत्ती असलेले YAML धोरण वाचते, एजंटचे संकेत ओळखते, बदललेले paths वर्गीकृत करते आणि कृतीचा अंदाज लावते.
- विरोधी नियमांचा क्रम: रोखा, मंजुरी मागा, परवानगी द्या. अज्ञात एजंटला मंजुरी आवश्यक; workflow आणि secret फाइलमधील बदल डीफॉल्टने रोखले जातात.
- समान धोरण आणि इनपुटवर समान निर्णय मिळतो. इंजिन मॉडेल किंवा hosted policy API वापरत नाही.

## ते काय नियंत्रित करू शकत नाही

AGENTOWNERS रिपॉझिटरीच्या सीमेवरील योगदान नियंत्रित करते. बाहेरील model/tool calls अडवत नाही, कोड चालवणे वेगळे ठेवत नाही आणि कोड बरोबर आहे का हे तपासत नाही.

## सध्याची स्थिती

प्रकल्प प्री-रिलीज आहे: npm पॅकेजेस आणि स्थिर v0 GitHub Action प्रकाशित झालेले नाहीत. README नुसार source वरून मूल्यमापन करा आणि production workflow ला main वर pin करू नका.

## स्रोत

11 नोव्हेंबर 2026 रोजी तपासलेले [AGENTOWNERS README](https://github.com/streamentry/AGENTOWNERS#readme).

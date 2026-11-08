---
title: "AGENTOWNERS: AI एजेंटों के लिए रिपॉज़िटरी नीति"
description: "रिपॉज़िटरी में एजेंटों की कार्रवाइयों पर लागू होने वाले निश्चित नियम।"
lang: hi
slug: agentowners-repository-policy-hi
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

एजेंट गाइड बताती है कि एजेंट को कैसे काम करना चाहिए, लेकिन उसके अधिकार लागू नहीं करती। [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) रिपॉज़िटरी में रखी YAML फ़ाइल से निश्चित नीति जोड़ता है।

इंजन एजेंट पहचानता है, बदले पथ वर्गीकृत करता है और नियमों का तय क्रम लागू करता है: रोकें, मंज़ूरी माँगें, अनुमति दें। अज्ञात एजेंटों को मंज़ूरी चाहिए; workflow और secret फ़ाइल बदलाव डिफ़ॉल्ट में रुकते हैं। Core मॉडल या बाहरी policy service नहीं चलाता। परियोजना अभी pre-release है; npm पैकेज और स्थिर v0 Action प्रकाशित नहीं हुए। यह runtime sandbox नहीं है।

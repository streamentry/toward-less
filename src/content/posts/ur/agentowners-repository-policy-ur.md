---
title: "AGENTOWNERS: AI ایجنٹس کے لیے ریپوزٹری پالیسی"
description: "AGENTOWNERS کیا طے کرتا ہے، کیا قابو نہیں کر سکتا، اور یہ ابھی پری ریلیز کیوں ہے۔"
lang: ur
slug: agentowners-repository-policy-ur
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS ایک سوال کا جواب دیتا ہے: ذخیرے میں درج پالیسی کے مطابق کیا AI ایجنٹ یہ ذخیرہ جاتی کارروائی کر سکتا ہے؟ README اسے قواعد کے ایک قطعی انجن کے طور پر بیان کرتی ہے، AI کوڈ ریویوئر یا رن ٹائم سینڈ باکس کے طور پر نہیں۔

## یہ کیا طے کرتا ہے

- ورژن والی YAML پالیسی پڑھتا، ایجنٹ کے اشارے پہچانتا، بدلے ہوئے paths کی درجہ بندی کرتا اور کارروائی کا اندازہ لگاتا ہے۔
- ٹکراؤ اس ترتیب سے حل ہوتے ہیں: روکیں، منظوری لازم کریں، اجازت دیں۔ نامعلوم ایجنٹ کے لیے منظوری طے شدہ ہے؛ workflow اور secret فائلوں کی تبدیلیاں طے شدہ طور پر رکتی ہیں۔
- ایک ہی پالیسی اور ان پٹ سے ایک ہی فیصلہ نکلتا ہے۔ انجن کسی ماڈل یا hosted policy API کو نہیں بلاتا۔

## یہ کیا قابو نہیں کر سکتا

AGENTOWNERS ذخیرے کی حد پر شراکتوں کو منظم کرتا ہے۔ یہ دوسری جگہوں پر model یا tool calls نہیں روکتا، کوڈ کے عمل کو الگ نہیں کرتا، اور کوڈ کی درستگی نہیں جانچتا۔

## موجودہ حیثیت

منصوبہ ابھی پری ریلیز ہے: npm پیکیج اور مستحکم v0 GitHub Action شائع نہیں ہوئے۔ README کہتی ہے کہ source سے جانچیں اور production workflow کو main پر pin نہ کریں۔

## ماخذ

[AGENTOWNERS README](https://github.com/streamentry/AGENTOWNERS#readme)، 11 نومبر 2026 کو دیکھی گئی۔

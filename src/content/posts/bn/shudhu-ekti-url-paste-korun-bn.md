---
title: "URL দিলেই অ্যাপ স্টোরে অ্যাপ প্রকাশ হয় না"
description: "ওয়েব থেকে অ্যাপ বানানোর ডেমোর পরও implementation, developer account ও store review বাকি থাকে।"
author: "C.S Chánh Niệm"
lang: bn
slug: shudhu-ekti-url-paste-korun-bn
translationKey: claude-web-to-app-2026
pubDatetime: 2026-11-10T05:26:00+07:00
draft: false
featured: false
tags: [technology]
---

URL থেকে অ্যাপ তৈরির একটি ডেমো কি সত্যিই native অ্যাপ বানিয়ে স্টোরে প্রকাশের প্রমাণ দেয়—এই লেখায় তা পরীক্ষা করা হয়েছে।

৯ নভেম্বরের পোস্টে Shipper লেখে: “Just paste a URL.” (শুধু একটি URL পেস্ট করুন।) পোস্টে দাবি করা হয়, Claude Fable 5.2 Mac নিয়ন্ত্রণ করে যেকোনো ওয়েবসাইটকে native মোবাইল অ্যাপে বদলে অ্যাপ স্টোরে দিতে পারে। বর্তমানে দেখা mirror-এ Fable 5.2 লেখা; এই লেখার আগের সংস্করণে ছিল Opus 5.5। এই পর্যালোচনায় X 403 দেখিয়েছে, তাই পোস্টটি বদলেছে নাকি আগের পাঠে ভুল ছিল তা নিশ্চিত করা যায়নি। Anthropic নিশ্চিত করেছে যে Fable 5.2 সেদিনই প্রকাশিত হয়েছিল; ওয়েব-থেকে-অ্যাপ workflow-টি Shipper-এর ডেমো, Anthropic-এর ঘোষিত পণ্য নয়।

## পোস্টটি কী প্রমাণ করে

এটি একটি workflow বর্ণনা করে, কিন্তু তৈরি অ্যাপটি কীভাবে বাস্তবায়িত হয় তা বলে না। সংযুক্ত ভিডিওও এই পর্যালোচনায় যাচাই করা যায়নি। তাই “যেকোনো ওয়েবসাইট” ও “native অ্যাপ” দাবিগুলো এখানে যাচাইহীন।

## স্টোরে প্রকাশ করতে এখনও যা লাগে

- Apple চায় অ্যাপটি শুধু ওয়েবসাইট পুনরায় প্যাকেজ করার চেয়ে বেশি উপযোগিতা দিক। বাণিজ্যিক app-generation template-এর নিয়মে কে তৈরি অ্যাপ জমা দিতে পারবে, সেটিও সীমাবদ্ধ।
- বিতরণের জন্য developer account দরকার: Apple Developer Program বছরে ৯৯ ডলার; Google Play-তে একবার ২৫ ডলার নিবন্ধন ফি।
- স্টোরের review আলাদা ধাপ। Apple-এর লক্ষ্য ২৪ ঘণ্টায় অন্তত অর্ধেক এবং ৪৮ ঘণ্টায় ৯০% জমা পরীক্ষা করা। Google জানায়, কিছু account-এর review সাত দিন বা তার বেশি লাগতে পারে।

একটি generator প্রাথমিক অ্যাপ তৈরি করতে পারে। এটি অনুমোদন নিশ্চিত করে না, আর প্রকাশকে এক ক্লিকের কাজও করে না।

*সূত্র: Shipper, [X পোস্ট 2119798847295922650](https://x.com/shipper_now/status/2119798847295922650), ৯ নভেম্বর ২০২৬। এই পর্যালোচনায় X 403 দেখিয়েছে; বর্তমান পাঠ [Teapawt mirror](https://teapawt.org/shipper_now) থেকে মিলিয়ে দেখা হয়েছে। Mirror-এ Fable 5.2 লেখা; edit history না থাকায় আগের Opus 5.5 উল্লেখের কারণ জানা যায়নি। ১১ নভেম্বর ২০২৬-এ [Anthropic-এর Fable 5.2 ঘোষণা](https://www.anthropic.com/claude-fable-and-mythos-5-2), [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/), [Apple Developer Program-এর ফি](https://developer.apple.com/programs/), [Apple-এর review লক্ষ্য](https://developer.apple.com/help/app-review/after-submitting-for-review/review-status) এবং [Google Play-এর প্রকাশনা নির্দেশিকা](https://support.google.com/googleplay/android-developer/answer/9859751?hl=en-EN) যাচাই করা হয়েছে। সংযুক্ত ভিডিও স্বাধীনভাবে যাচাই করা হয়নি।*

---
title: "一次关于无声发音的小实验"
description: "Subvox 测试低频耳机运动信号能否区分少量无声口型词语。"
lang: zh
slug: subvox-silent-speech-zh
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox 探索 AirPods Pro 的头部运动数据能否区分少量无声口型词语。这是 macOS 原型，不是通用语音识别系统。

该原型：

- 以约 25 Hz 记录加速度、旋转和姿态；信号主要来自头部和下颌运动，而非声带振动；
- 用动态时间规整，将片段与特定用户、特定会话的词语模板匹配；
- 将留一法分类与 500 次打乱标签测试比较，并把麦克风转写文本显示在运动预测旁。

README 说明了测试方法，但没有报告实测准确率。重新佩戴耳机可能改变模板；原型也没有语言模型。它测试的是一种信号，并未证明无声语音已适合日常使用。

来源：[Subvox README](https://github.com/joeblau/subvox/blob/main/README.md)（访问于 2026 年 11 月 14 日）。

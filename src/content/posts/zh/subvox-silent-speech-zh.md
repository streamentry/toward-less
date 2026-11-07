---
title: "一次关于无声发音的小实验"
description: "Subvox测试AirPods Pro的头部运动数据能否区分少量无声默念的词。"
lang: zh
slug: subvox-silent-speech-zh
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox)提出了一个范围很窄的问题：AirPods Pro的运动数据能否区分几个无声默念的词？

它是一个macOS原型，不是通用的无声语音系统。程序记录耳机的加速度、旋转速率和姿态，将每次尝试切成片段，再用动态时间规整与训练好的词语模板匹配。Train界面以留一法准确率和500次标签随机置换作比较。Decode界面把运动信号的预测与实时麦克风转写并排显示。它不使用语言模型。

实验过程可以检查：传感器曲线、会话记录、可选运动特征和拒识阈值都展示了正在测试什么。不过，README介绍了评估方法，却没有报告实际测得的准确率。信号本身也有限：约25 Hz，主要反映头部和下颌动作，而非发声振动。模板因人和会话而异，重新佩戴耳机也可能改变信号。

Subvox是在测量一种信号，不是无声语音已经适合日常使用的证据。

[在GitHub查看项目](https://github.com/joeblau/subvox)。

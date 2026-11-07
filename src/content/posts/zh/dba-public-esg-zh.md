---
title: "U形ESG结果及其边界"
description: "一个DBA论文网站展示ESG回测、研究方法，以及结果所能说明的范围。"
lang: zh
slug: dba-public-esg-zh
translationKey: dba-public-esg-thesis-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

人们常把ESG理解成一条简单的直线：ESG风险越低，回报越高。DBA论文《The U-Shaped ESG Performance Paradigm》探讨这种关系是否可能没有那么直接。

研究按经行业标准化的Sustainalytics评级，将2019–2024年的500家标普500公司分组。LightGBM交易模型使用价格、成交量和技术指标；ESG评级用于划分样本组，而非直接作为模型输入。

论文报告的回测中，高风险组累计回报最高，为240.35%。低风险组为142.75%，略高于中风险组的136.63%，且最大回撤最低，为29.08%。这些是一次历史模拟的结果，不是预测，也不是选股规则。

论文提出“治理驱动风险溢价”作为一种可能解释，但将其视为假设，而非已证实的因果机制。项目网站把研究问题、方法、结果和边界集中展示，方便读者查阅。

[查看论文网站](https://streamentry.github.io/dba-public/) · [查看代码仓库](https://github.com/streamentry/dba-public)。

---
title: "U形ESG结果及其边界"
description: "一个DBA论文网站展示ESG回测、研究方法，以及结果所能说明的范围。"
lang: zh
slug: dba-public-esg-zh
translationKey: dba-public-esg-thesis-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-14T01:16:00+07:00
draft: false
featured: false
tags: [technology]
---

ESG 风险越低，回报就一定越高吗？Le Viet Hong 的 DBA 学位论文 _The U-Shaped ESG Performance Paradigm_（2026 年 1 月）比较了 2019 至 2024 年间标普 500 的 500 家公司。经行业标准化的 Sustainalytics 评级用于划分组别。LightGBM 交易模型使用价格、成交量和技术指标，不把 ESG 评级作为模型输入。

论文报告的历史回测结果如下：

- 高风险组：累计回报 240.35%；最大回撤 33.81%。
- 中风险组：136.63%；32.52%。
- 低风险组：142.75%；29.08%。

这些是一次历史模拟的结果。本文没有独立复现这项回测，因此不能把结果当作预测或投资规则。论文提出“治理驱动风险溢价”作为一种可能解释，但没有证明因果关系。

来源：[Le Viet Hong，《The U-Shaped ESG Performance Paradigm》（DBA 学位论文，2026 年 1 月），附录 E，表 E.2–E.4 和 E.7](https://streamentry.github.io/dba-public/downloads/LVH-20260317.pdf)；[论文网站](https://streamentry.github.io/dba-public/)；[项目仓库](https://github.com/streamentry/dba-public)。

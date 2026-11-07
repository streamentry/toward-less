---
title: "Kết quả ESG hình chữ U, cùng những giới hạn"
description: "Trang luận án DBA trình bày một backtest ESG, phương pháp và giới hạn của kết quả."
lang: vi
slug: dba-public-esg-vi
translationKey: dba-public-esg-thesis-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

ESG thường được hiểu như một đường thẳng: rủi ro ESG càng thấp thì lợi nhuận càng cao. Luận án _The U-Shaped ESG Performance Paradigm_ xem xét liệu mối quan hệ đó có thể phức tạp hơn.

Nghiên cứu DBA chia 500 công ty thuộc S&P 500 thành các nhóm theo xếp hạng Sustainalytics đã chuẩn hóa theo ngành, trong giai đoạn 2019–2024. Mô hình giao dịch LightGBM dùng dữ liệu giá, khối lượng và đặc trưng kỹ thuật; điểm ESG dùng để chia nhóm, không phải đầu vào trực tiếp của mô hình.

Trong backtest được báo cáo, nhóm rủi ro cao có lợi nhuận tích lũy cao nhất (240,35%). Nhóm rủi ro thấp đạt 142,75%, nhỉnh hơn nhóm trung bình ở mức 136,63%, và có mức sụt giảm tối đa thấp nhất (29,08%). Đây là kết quả của một mô phỏng lịch sử, không phải dự báo hay quy tắc chọn khoản đầu tư.

Luận án nêu “phần bù rủi ro do quản trị” như một cách giải thích có thể có, nhưng xem đó là giả thuyết chứ chưa phải quan hệ nhân quả đã được chứng minh. Trang dự án trình bày câu hỏi, phương pháp, kết quả và giới hạn để người đọc dễ kiểm tra.

[Xem trang luận án](https://streamentry.github.io/dba-public/) · [Xem kho mã nguồn](https://github.com/streamentry/dba-public).

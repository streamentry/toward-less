---
title: "Một thử nghiệm nhỏ về lời nói thầm"
description: "Subvox thử xem chuyển động tai nghe có phân biệt được vài từ mấp máy không thành tiếng không."
lang: vi
slug: subvox-thu-nghiem-noi-tham-vi
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox đặt câu hỏi: chuyển động đầu từ AirPods Pro có phân biệt được một số từ được mấp máy không thành tiếng không? Đây là nguyên mẫu cho macOS, không phải hệ thống nhận dạng lời nói tổng quát.

Nguyên mẫu:

- ghi gia tốc, chuyển động quay và tư thế ở khoảng 25 Hz; tín hiệu chủ yếu là chuyển động đầu và hàm, không phải rung động giọng nói;
- so khớp từng đoạn với mẫu từ riêng theo người dùng và phiên bằng dynamic time warping;
- so sánh phân loại leave-one-out với 500 phép tráo nhãn và hiển thị bản chép lời từ micro bên cạnh dự đoán chuyển động.

README mô tả phương pháp nhưng không báo cáo độ chính xác quan sát được. Đeo lại tai nghe có thể làm lệch mẫu; nguyên mẫu không dùng mô hình ngôn ngữ. Thử nghiệm đo một tín hiệu, không chứng minh lời nói thầm đã sẵn sàng cho sử dụng hằng ngày.

Nguồn: [README Subvox](https://github.com/joeblau/subvox/blob/main/README.md) (truy cập ngày 14/11/2026).

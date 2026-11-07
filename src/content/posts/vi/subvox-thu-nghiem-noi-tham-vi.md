---
title: "Một thử nghiệm nhỏ về lời nói thầm"
description: "Subvox thử xem chuyển động của AirPods Pro có phân biệt được một nhóm từ được mấp máy không thành tiếng hay không."
lang: vi
slug: subvox-thu-nghiem-noi-tham-vi
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox) đặt một câu hỏi hẹp: chuyển động từ AirPods Pro có phân biệt được vài từ được mấp máy trong im lặng không?

Đây là nguyên mẫu cho macOS, không phải hệ thống nhận dạng lời nói thầm dùng chung. Ứng dụng ghi gia tốc, tốc độ quay và tư thế của tai nghe, chia từng lần thử thành đoạn, rồi so với mẫu từ đã thu bằng dynamic time warping. Màn hình Train đánh giá độ chính xác leave-one-out và so với 500 lần tráo nhãn. Màn hình Decode đặt dự đoán từ chuyển động cạnh bản chép lời trực tiếp từ mic. Ứng dụng không dùng mô hình ngôn ngữ.

Thí nghiệm có thể quan sát: biểu đồ cảm biến, bản ghi phiên, lựa chọn loại dữ liệu chuyển động và ngưỡng loại bỏ đều cho thấy đang kiểm tra điều gì. Nhưng README mô tả phương pháp mà chưa nêu kết quả độ chính xác thực nghiệm. Tín hiệu cũng hạn chế: khoảng 25 Hz, chủ yếu là chuyển động đầu và hàm chứ không phải rung động giọng nói. Mẫu phụ thuộc người dùng và phiên; đeo lại tai nghe có thể làm tín hiệu thay đổi.

Subvox là thử nghiệm đo một tín hiệu, chưa phải bằng chứng rằng lời nói thầm đã sẵn sàng cho sử dụng hằng ngày.

[Xem dự án trên GitHub](https://github.com/joeblau/subvox).

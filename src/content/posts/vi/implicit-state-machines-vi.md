---
title: "Tìm những cỗ máy trạng thái đang ẩn trong ứng dụng của bạn"
description: "Dùng AI để lập bản đồ trạng thái ẩn trong các cờ, rồi kiểm tra mã và quyết định điều gì cần mô hình hóa rõ."
author: "C.S Chánh Niệm"
lang: vi
slug: implicit-state-machines-vi
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
modDatetime: 2026-11-14T00:01:43+07:00
draft: false
featured: false
tags: [technology]
---

Nhiều ứng dụng lưu trạng thái trong các cờ rải rác: đang tải, lỗi, đang sửa, đã đăng nhập. Khi kết hợp, chúng có thể tạo ra những trạng thái không ai dự định, như vừa đang tải vừa báo lỗi.

Bài đăng X của Steve Ruiz đề xuất nhờ tác nhân tìm các máy trạng thái ẩn này. Hãy xem kết quả là các giả thuyết cần kiểm tra, không phải sự thật. [1]

Với mỗi giả thuyết, yêu cầu tác nhân chỉ ra:

- tệp và biến đang biểu diễn trạng thái đó;
- các trạng thái và chuyển tiếp mà mã cho phép;
- tổ hợp nào đáng lẽ không thể xảy ra và đoạn mã nào vẫn cho phép chúng.

Kiểm tra từng nhận định trong kho mã. Một số cờ độc lập và không cần mô hình trạng thái hình thức. Chỉ nên biểu diễn máy trạng thái rõ ràng khi các trạng thái tương tác, tổ hợp tăng lên, gây lỗi hoặc khiến người bảo trì khó hiểu tính năng có thể làm gì. Sơ đồ chỉ hữu ích khi giúp làm rõ các quy tắc đó.

Để tác nhân đề xuất bản đồ; để mã xác nhận.

### Nguồn

Steve Ruiz (@steveruizok), X post, 31 October 2026, status 2116552016218710389. The post was verified on 8 November; a direct fetch returned 403 on 14 November. Exact prompt: “find all of the implicit state machines in my app”. [Original post](https://x.com/steveruizok/status/2116552016218710389).

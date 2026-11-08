---
title: "Tìm những cỗ máy trạng thái đang ẩn trong ứng dụng của bạn"
description: "Hãy hỏi ứng dụng lưu trạng thái ở đâu, và gọi tên những chế độ mà nó thực sự có thể rơi vào."
author: "C.S Chánh Niệm"
lang: vi
slug: implicit-state-machines-vi
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Hầu hết ứng dụng không chỉ có một cỗ máy trạng thái. Chúng có nhiều cỗ máy, mà không cỗ máy nào được gọi tên.

Một cờ đang tải ở đây, một cờ lỗi ở kia, một cờ đang chỉnh sửa, một cờ đã đăng nhập. Mỗi cờ nhìn riêng thì nhỏ. Gộp lại, chúng tạo thành những chế độ không ai chọn: vừa đang tải vừa báo lỗi, đang sửa một thứ đã không còn tồn tại, vừa đã lưu vừa chưa lưu cùng lúc.

Trong một bài đăng trên X, Steve Ruiz (@steveruizok) gợi ý một câu lệnh: *“find all of the implicit state machines in my app”* — hãy tìm tất cả những cỗ máy trạng thái ngầm trong ứng dụng của tôi.

Hãy xin danh sách đó kèm bằng chứng. Mỗi cỗ máy nằm ở đâu trong mã? Nó có thể ở những trạng thái nào? Điều gì chuyển nó từ trạng thái này sang trạng thái khác? Những tổ hợp nào không thể xảy ra, và những tổ hợp nào không nên xảy ra nhưng vẫn xảy ra?

Gọi tên chúng mới là điều quan trọng, không phải vẽ sơ đồ. Khi một chế độ đã có tên, ta có thể hỏi nó có nên tồn tại hay không. Thường câu trả lời là không — và bỏ nó đi đơn giản hơn là xử lý nó.

Không phải cờ nào cũng cần một cỗ máy chính thức. Làm vậy chỉ là đổi một kiểu rối rắm lấy một kiểu khác. Một cỗ máy đáng được gọi tên khi các trạng thái nhân lên, khi một lỗi xuất phát từ việc ứng dụng ở hai chế độ cùng lúc, hoặc khi người mới đọc mã không thể biết ứng dụng có thể làm gì.

AI có thể sai về điều này. Hãy để nó đề xuất các cỗ máy; để mã nguồn kiểm chứng chúng.

**Ít trạng thái có thể xảy ra hơn, thấy rõ hơn.**

*Nguồn cảm hứng: bài đăng của [Steve Ruiz (@steveruizok)](https://x.com/steveruizok/status/2116552016218710389) trên X. Bài đăng đã được xác minh ngày 8 tháng 11 năm 2026: 10:24 PM, 31 tháng 10 năm 2026.*

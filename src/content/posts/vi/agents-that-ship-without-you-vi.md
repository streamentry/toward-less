---
title: "Những agent giao hàng mà không cần bạn"
description: "Agent không phải là hệ thống. Bản đặc tả, những việc nhỏ, và bộ khung mới là hệ thống."
author: "C.S Chánh Niệm"
lang: vi
slug: agent-giao-hang-ma-khong-can-ban-vi
translationKey: agents-that-ship-without-you-2026
pubDatetime: 2026-11-08T23:00:00+07:00
draft: false
featured: false
tags: [technology]
---
Một bài đăng của shikamaru trên X giới thiệu workshop của Addy Osmani về cách xây dựng agent viết mã đáng tin cậy. Ý chính không phải là tìm một prompt hay hơn, mà là tạo một bộ khung kiểm soát agent:

- Làm rõ mục tiêu và tiêu chí thành công.
- Viết đặc tả, gồm công nghệ sử dụng, tiêu chí nghiệm thu và câu hỏi còn mở.
- Chia việc thành các phần nhỏ, giới hạn rõ tệp được sửa và điều kiện hoàn thành.
- Xây dựng từng phần và kiểm thử liên tục.
- Mở kết quả trong trình duyệt, xem xét bảo mật và kiểm tra các thay đổi.

Cách làm này chuyển công sức sang trước và sau mỗi lần chạy. Agent nhận phần việc có giới hạn; người phụ trách có bằng chứng để xem xét. Ranh giới rõ giúp dễ giám sát hơn, nhưng không tự làm cho agent đáng tin cậy.

Xây bộ khung cần thời gian và phán đoán. Kiểm thử đạt không chứng minh mã đúng hay an toàn; agent cũng không thể tự đánh giá bảo mật một cách độc lập. Trước khi phát hành, con người vẫn cần xem các thay đổi và bằng chứng.

Mục tiêu không phải bỏ giám sát, mà là tạo một lần chạy có thể kiểm tra, tiếp tục hoặc dừng.

Nguồn: [Bài đăng X của shikamaru (@shikamarutsai), ngày 8 tháng 11 năm 2026 (mã trạng thái 2119197676415877128)](https://x.com/shikamarutsai/status/2119197676415877128), về workshop của Addy Osmani về kỹ thuật phát triển với agent.

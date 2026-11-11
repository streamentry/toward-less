---
title: "Dùng agent mà không bỏ quyền phán đoán"
description: "Giao việc ít rủi ro; kiểm tra việc quan trọng và chịu trách nhiệm về thứ được phát hành."
author: "C.S Chánh Niệm"
lang: vi
slug: uy-thac-tri-hoan-dau-hang-vi
translationKey: offloading-deferral-surrender-2026
pubDatetime: 2026-11-08T23:00:00+07:00
modDatetime: 2026-11-11T12:43:00+07:00
draft: false
featured: false
tags: [technology]
---
Bài X ngày 3 tháng 11 năm 2026 của Addy Osmani hỏi cách giữ quyền phán đoán khi làm việc với agent. Ông mô tả ba trạng thái:

- **Ủy thác:** giao việc nhưng vẫn chịu trách nhiệm về kết quả.
- **Phó mặc:** dùng đầu ra của mô hình làm đầu vào tiếp theo mà không kiểm tra lại giả thuyết.
- **Đầu hàng về nhận thức** (thuật ngữ Osmani ghi nhận là của Steven Shaw và Gideon Nave): nhận đầu ra làm kết luận của mình mà không kiểm tra kỹ.

Quá trình trượt dần. Osmani cho rằng câu trả lời trôi chảy và các bước kiểm tra đạt có thể khiến ta thôi xem kỹ. Đây là mô hình làm việc của ông, không phải kết quả thực nghiệm được xác lập trong bài này.

## Mức rà soát nên theo mức rủi ro

- Có thể giao hẳn những lựa chọn mà sai cũng không gây thiệt hại đáng kể.
- Hãy kiểm tra quyết định ảnh hưởng đến người dùng, an toàn, tiền bạc hoặc người khác. Xem bước kiểm tra chứng minh điều gì và bỏ sót điều gì.
- Không cần hiểu toàn bộ một codebase lớn. Hãy dựng lại phần cần dùng từ mã, kiểm thử, log hoặc lời giải thích.
- Tự viết giả thuyết và tiêu chí hoàn thành trước khi yêu cầu agent. Nếu không giải thích được vì sao kết quả đáng tin, đừng duyệt.

Hãy dành đủ thời gian để chịu trách nhiệm về thứ được phát hành. Nếu đầu ra tăng nhanh hơn khả năng kiểm chứng, cải thiện các bước kiểm tra hoặc giảm tốc độ. Người duyệt vẫn chịu trách nhiệm về kết quả.

## Nguồn

- Addy Osmani (@addyosmani), “Critical thinking when agents do the work”, bài X ngày 3 tháng 11 năm 2026. X không cho mở trực tiếp trong lần rà soát này; toàn văn được đối chiếu qua [bản sao trên Xrticles](https://xrticles.com/article/critical-thinking-when-agents-do-the-work). [Bài gốc](https://x.com/i/article/2116367635365695488) · [bài đăng của tác giả](https://x.com/addyosmani/status/2117512471930167377). Bài này diễn giải lại nguồn.

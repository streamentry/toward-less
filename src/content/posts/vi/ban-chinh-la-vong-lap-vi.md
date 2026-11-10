---
title: "Bạn Chính Là Vòng Lặp"
description: "Các cấp 0–7 giúp chẩn đoán hệ thống agent viết mã, nhưng không phải mô hình phổ quát hay lộ trình bắt buộc."
author: "C.S Chánh Niệm"
lang: vi
slug: ban-chinh-la-vong-lap-vi
translationKey: harness-loops-graphs-2026
pubDatetime: 2026-11-10T05:31:00+07:00
draft: false
featured: false
tags: [technology]
---
X Article của m4lka mô tả hệ thống agent viết mã qua các cấp 0–7, tức tám cấp nếu đếm từ 0. Mô hình tách những chức năng mà các nhóm thường gộp chung:

- 0, trò chuyện: con người điều phối mọi bước.
- 1, harness: mô hình có công cụ và quyền truy cập tệp.
- 2, trạng thái và quyền hạn: bộ nhớ được giữ lại, ranh giới được áp dụng.
- 3, vòng kiểm tra: một phép thử có thể thất bại; câu “mô hình nói đã xong” không phải phép kiểm tra.
- 4, phản hồi: giới hạn số lần thử lại và chuyển lên xử lý khi lỗi lặp lại.
- 5, đồ thị: thể hiện rõ các quan hệ phụ thuộc thực tế.
- 6, cổng và đường quay lại: giữ nguyên phần đã đạt; chỉ chạy lại phần lỗi.
- 7, học hỏi: lỗi tạo ra ràng buộc cho lớp chịu trách nhiệm.

Đây là mô hình thiết kế cho agent phần mềm, chưa phải thang đo được kiểm chứng thực nghiệm. Kiểm thử và build có thể lặp lại; viết lách, thiết kế và đàm phán thường dựa vào phán đoán, không có bài kiểm tra tất định.

Các cấp là công cụ chẩn đoán, không phải lộ trình bắt buộc. Việc một lần, ít rủi ro có thể chỉ cần trò chuyện. Nhóm có thể thiết kế phép kiểm tra hữu ích trước khi dựng harness đầy đủ. Chỉ thêm lớp khi chi phí thất bại biện minh cho công sức. Đặt cổng theo chi phí hoàn tác là một kinh nghiệm thực hành, không phải quy luật.

Cấp cuối cũng khó đo: “cùng một loại lỗi” phụ thuộc vào cách con người phân nhóm lỗi sau khi xảy ra. Hãy định nghĩa nhóm trước và theo dõi xem chi phí của lỗi lặp lại có giảm không.

Mô hình giúp sắp xếp cách thiết kế agent viết mã. Nó không chứng minh agent có thể làm việc không cần giám sát hay mọi việc đều cần đủ mọi lớp.

Nguồn: m4lka, [“Harness, Loops, Graphs: What Each Layer Fixes and What It Breaks,” X Article, ngày 25 tháng 10 năm 2026 (mã trạng thái 2114338456750997922)](https://x.com/m4lkxx/status/2114338456750997922). Không tải lại được trang X trong lần chỉnh sửa này nên đã bỏ trích dẫn trực tiếp.

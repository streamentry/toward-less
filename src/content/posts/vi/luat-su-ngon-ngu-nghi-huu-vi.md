---
title: "Dùng agent, nhưng vẫn cần hiểu đủ để rà soát"
description: "Có thể giao agent xử lý chi tiết ngôn ngữ, nhưng vẫn cần hiểu đủ để đánh giá hệ thống nó tạo ra."
author: "C.S Chánh Niệm"
lang: vi
slug: luat-su-ngon-ngu-nghi-huu-vi
translationKey: the-language-lawyer-retires-2026
pubDatetime: 2026-11-09T00:28:00+07:00
modDatetime: 2026-11-11T13:14:00+07:00
draft: false
featured: false
tags: [technology]
---
Robert C. Martin (Uncle Bob) kể rằng ông từng học C++ rất sâu và tự gọi mình là “language lawyer”. Trong bài X ngày 6 tháng 11 năm 2026, ông cho rằng agent có thể xử lý chi tiết ngôn ngữ để ông tập trung vào cấu trúc tổng thể của hệ thống. Khi cần hiểu sâu một chi tiết, ông sẽ hỏi agent.

Hai ngày sau, bài đăng tiếng Trung của Uudon đưa ra kết luận rộng hơn: lập trình viên không còn cần hiểu sâu các ngôn ngữ lập trình. Đó là cách Uudon diễn giải, không phải toàn bộ quan điểm Martin nêu trong bài.

Lập luận của Martin có cơ sở thực tế: agent có thể tra cú pháp và giải thích đoạn mã lạ, giúp ta dành thời gian cho hành vi của hệ thống. Nhưng hiểu ngôn ngữ còn bao gồm kiểu dữ liệu, bộ nhớ, giao diện và trường hợp biên — những yếu tố có thể ảnh hưởng đến việc phần mềm có chạy đúng hay không. Lời giải thích của agent cũng cần được kiểm tra. Đây là nhận định thực hành, không phải kết quả nghiên cứu trong bài của Martin.

Không cần ghi nhớ mọi ngôn ngữ. Cần hiểu đủ phần liên quan để đánh giá mã và bằng chứng.

- Nêu hành vi mong đợi và các điều kiện quan trọng trước khi giao việc.
- Kiểm tra phần thay đổi và hỏi các bài kiểm thử còn bỏ sót điều gì.
- Nếu không đánh giá được lời giải thích, hãy học phần đó hoặc nhờ người khác rà soát.

Giao việc có thể giảm thời gian học cú pháp. Nó không loại bỏ nhu cầu hiểu và chịu trách nhiệm về thứ được phát hành.

## Nguồn

- Robert C. Martin (@unclebobmartin), “I used to be a language lawyer”, bài X ngày 6 tháng 11 năm 2026, [status 2118695884154110305](https://x.com/unclebobmartin/status/2118695884154110305).
- Uudon (@uudonX), bài đăng tiếng Trung tóm tắt quan điểm của Martin, ngày 8 tháng 11 năm 2026, [status 2119243980634530096](https://x.com/uudonX/status/2119243980634530096). X trả về 403 khi rà soát; toàn văn hai bài được đối chiếu qua [bản sao bài của Martin trên Teapawt](https://teapaw.org/unclebobmartin) và [bản đăng lại có bài của Uudon](https://teapawt.net/orexinsystem). Bài này diễn giải cả hai và phân biệt phần tóm tắt của Uudon với lời Martin.

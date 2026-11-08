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

Trong một bài đăng trên X, shikamaru (@shikamarutsai) chia sẻ một buổi workshop dài 41 phút của Addy Osmani, một kỹ sư tại Anthropic, trước đây làm việc ở Google. Câu trích từ Osmani rất thẳng: "Google thuê tôi với mức lương $500K–$1.2M một năm vì tôi biết cách khiến các agent AI viết code không bị hỏng."

Câu trả lời của buổi workshop không phải là một prompt tốt hơn. Đó là một bộ khung (harness), gồm năm bước: làm rõ ý tưởng, viết bản đặc tả, lập kế hoạch thành những việc nhỏ, xây dựng theo hướng kiểm thử trước, rồi xác minh và rà soát.

Bước một: đưa vào một ý nghĩ mơ hồ, và agent sẽ phỏng vấn bạn, rồi quay lại với ba hướng đi. Bước hai: chốt tiêu chí thành công, công nghệ sử dụng, và những câu hỏi còn mở trước khi viết một dòng code nào. Bước ba: chia công việc thành những việc nhỏ, mỗi việc có tiêu chí nghiệm thu và danh sách các file mà nó được phép chạm vào. Bước bốn: xây dựng theo hướng kiểm thử trước, từ đỏ sang xanh, từng lát một, để không thứ gì đang chạy tốt bị phá vỡ. Bước năm: xác minh và rà soát — agent mở ứng dụng trong trình duyệt, kiểm tra bảo mật, và đơn giản hóa chính code của nó.

Bài đăng nói rằng Osmani đã mở mã nguồn toàn bộ 24 skills, và repo đó đã gần 100K stars. Google, theo bài đăng, gọi cách làm này là "agentic engineering". Bài đăng trích một bài viết đi kèm của @beamnxw, "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup" — lưu tiến độ, xác minh kết quả, tái sử dụng quy trình, để một lần chạy dài để lại thứ gì đó bạn có thể mở ra, bằng chứng bạn có thể kiểm tra, và đủ tiến độ đã lưu để tiếp tục vào ngày mai.

Hãy để ý xem công việc đã chuyển đi đâu. Không phải chuyển sang việc ngồi xem agent, mà chuyển sang những gì diễn ra trước khi nó bắt đầu: cuộc phỏng vấn, bản đặc tả, việc nhỏ với ranh giới đã được vạch ra. Một agent chỉ được chạm vào những file đã nêu tên, phải vượt qua kiểm thử trước khi tiếp tục, phải lưu tiến độ của nó — agent đó có thể được để yên một mình. Một agent không có ranh giới thì không.

Đó cũng là bài học như khi gọi tên các cỗ máy trạng thái: sự tự do có hiệu quả là sự tự do có giới hạn. Bộ khung là danh sách những chế độ mà lần chạy được phép ở trong, và bằng chứng mà nó phải đưa ra để chuyển từ chế độ này sang chế độ khác.

Cũng đáng để không thổi phồng nó. "Bạn không phải" tự tay xây dựng thứ này trong nhiều tuần — nhưng bản thân bộ khung đã là nhiều tuần phán đoán, được nén lại thành 24 skills và một danh sách kiểm tra. Một agent tự kiểm tra bảo mật của nó và tự đơn giản hóa code của nó vẫn cần một người đứng ngoài lần chạy để đọc bằng chứng. Tiến độ đã lưu chỉ hữu ích nếu thực sự được kiểm tra, và "xác minh và rà soát" là một bước, không phải một đảm bảo.

Lời hứa hẹp hơn lời quảng cáo, và vì thế mà tốt hơn: ít phải ngồi xem hơn, ít bám víu vào chính lần chạy hơn. Hãy đặt sự cẩn trọng vào phần chuẩn bị — bản đặc tả, việc nhỏ, trạng thái đã lưu — rồi buông tay.

**Agent không phải là hệ thống. Bộ khung mới là hệ thống.**

*Được gợi cảm hứng từ một bài đăng của [shikamaru (@shikamarutsai)](https://x.com/shikamarutsai/status/2119197676415877128) trên X, về buổi workshop của Addy Osmani về agentic engineering, trích bài viết "Make Opus 5.5 Finish Long Tasks: A Reusable Harness Engineering Setup" của @beamnxw. Bài đăng đã được xác minh ngày 8 tháng 11 năm 2026: 5:37 AM, 8 tháng 11 năm 2026.*

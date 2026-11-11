---
title: "Lập danh sách trước khi sửa"
description: "Prompt kiểm tra mã có thể tìm ra việc cần bảo trì, nhưng thay đổi chưa rõ vẫn cần người duyệt."
author: "C.S Chánh Niệm"
lang: vi
slug: sua-nhung-gi-ban-chac-chan-vi
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Bài viết này chỉ cách dùng một prompt kiểm tra mã để tìm việc cần bảo trì, đồng thời giữ các thay đổi chưa rõ lại cho người duyệt.

Ngày 9 tháng 11 năm 2026, Alex Albert chia sẻ prompt anh dùng mỗi khi có mô hình mới: xem toàn bộ dự án, tìm chỗ hỏng hoặc không còn cần thiết, sửa phần có vẻ rõ ràng và liệt kê phần còn lại để người dùng xem. Điểm hữu ích là ranh giới giữa việc được sửa và việc cần quyết định.

Điểm cốt lõi nằm ở lời dặn: “Fix what you’re sure about and list the rest for me to review.” (dịch ý: sửa phần bạn thấy chắc chắn, còn lại thì để người dùng xem xét.)

## Ba giới hạn

- **Tự tin không đồng nghĩa có bằng chứng.** “Sửa phần bạn chắc chắn” vẫn có thể tạo ra thay đổi sai. Hãy yêu cầu đường dẫn tệp liên quan, kiểm thử và lý do trước khi nhận sửa đổi.
- **“Toàn bộ dự án” cần danh sách phạm vi.** Yêu cầu agent ghi rõ đã đọc phần nào và bỏ qua phần nào. Một lời nhắc rộng không chứng minh mọi tệp đã được xem.
- **Mỗi loại phát hiện cần cách kiểm tra riêng.** Sửa lỗi cần kiểm thử; khẳng định về hiệu năng cần số đo; xóa mã cần bằng chứng rằng mã không được dùng; sửa phong cách cần quy ước rõ của dự án.

## Quy trình an toàn hơn

- Yêu cầu liệt kê phát hiện theo mức ưu tiên, kèm đường dẫn tệp và bằng chứng, trước khi sửa.
- Chỉ cho phép sửa nhỏ, máy móc và không làm đổi hành vi.
- Gửi các thay đổi về hành vi, xóa mã, sửa nhiều tệp và phát hiện chưa chắc chắn để người duyệt quyết định.
- Đối chiếu diff với danh sách, rồi chạy các bước kiểm tra của dự án.

Hãy dùng prompt để tạo hàng đợi cần xem xét, không phải để trao quyền vô hạn cho agent. Ranh giới nằm ở danh sách người duyệt, không nằm ở mức độ tự tin của mô hình.

*Nguồn: Alex Albert (@alexalbert__), [bài đăng số 2119884951550386671 trên X](https://x.com/alexalbert__/status/2119884951550386671), ngày 9 tháng 11 năm 2026. X trả lỗi 403 trong lần kiểm tra này; nội dung được đối chiếu với [bản sao trên Teapawt về dòng bài đăng của Albert](https://teapawt.org/alexalbert__). Đây là bản sao thứ cấp.*

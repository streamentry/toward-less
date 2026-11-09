---
title: "Sửa Những Gì Bạn Chắc Chắn"
description: "Alex Albert chạy cùng một prompt trên mọi dự án mỗi khi có mô hình mới: đọc toàn bộ dự án, tìm mọi thứ hỏng, không nhất quán, kém hiệu quả, hoặc không còn cần nữa, sửa những gì chắc chắn, và liệt kê phần còn lại để xem xét. Prompt này hay — và nửa mang tính quyết định là danh sách, không phải phần sửa."
author: "C.S Chánh Niệm"
lang: vi
slug: sua-nhung-gi-ban-chac-chan-vi
translationKey: audit-prompt-2026
pubDatetime: 2026-11-10T05:20:00+07:00
draft: false
featured: false
tags: [technology]
---

Mỗi khi có mô hình mới, Alex Albert chạy cùng một prompt trên mọi dự án của mình: hãy đọc toàn bộ dự án này và tìm mọi thứ hỏng, không nhất quán, kém hiệu quả, hoặc không còn cần nữa. Sửa những gì bạn chắc chắn và liệt kê phần còn lại để tôi xem xét. Rất nên thử.

Đó là một prompt hay, và lý do nó hay không nằm ở phần sửa. Nó nằm ở sự phân tách. Prompt chia công việc thành hai nửa — những gì mô hình được tự thay đổi, và những gì nó phải mang về để con người quyết định — và nửa thứ hai mới là thứ làm cho nửa thứ nhất an toàn. Hầu hết prompt cho agent thất bại vì chúng giao cho mô hình một việc duy nhất, "sửa đi," mà không có ranh giới. Prompt này vẽ ranh giới ngay trong chính câu lệnh.

Prompt cũng hướng mô hình vào đúng loại việc. Xây dựng là cách dùng agent hào nhoáng; bảo trì mới là cách dùng đáng tin cậy. Tìm code chết, tên gọi không nhất quán, logic trùng lặp, và những thứ không còn cần nữa là công việc có giới hạn với các diff có thể xem xét. Một lần xóa sai sẽ lộ ra trong diff. Một tính năng sai sẽ lộ ra ở production. Prompt của Albert đối xử với mô hình như một người lao công có checklist, đó là vai trò mà agent thực sự làm tốt, và nó yêu cầu trả lại checklist.

Nhưng prompt có ba điểm mềm, và đáng gọi tên trước khi bạn chạy nó.

Thứ nhất, "sửa những gì bạn chắc chắn." Độ tự tin của mô hình không được hiệu chỉnh. Mô hình tự tin sai về đúng những thứ trông chắc chắn nhất với chúng — một cách sửa hợp lý cho một lỗi tinh vi, một lần "đơn giản hóa" loại bỏ một trường hợp đặc biệt mang tính quyết định. Sự an toàn của prompt phụ thuộc vào việc mô hình biết nó chắc chắn về điều gì, và đó chính là điều nó không thể biết một cách đáng tin cậy. Nửa liệt-kê-để-xem-xét mới là nửa mang tính quyết định, chính vì nửa sửa chữa không thể tự kiểm soát chính mình.

Thứ hai, "đọc toàn bộ dự án này." Với dự án nhỏ, mô hình làm được. Với dự án lớn, nó không thể — giới hạn ngữ cảnh nghĩa là nó lấy mẫu, và nó sẽ không nói với bạn rằng nó đã lấy mẫu. Prompt hoạt động tốt nhất khi dự án vừa trong cửa sổ ngữ cảnh, và âm thầm suy giảm khi không vừa. Nếu dự án của bạn lớn, phiên bản trung thực của prompt sẽ nêu tên những phần cần đọc.

Thứ ba, prompt gộp bốn phán đoán khác nhau vào một câu lệnh: hỏng, không nhất quán, kém hiệu quả, không còn cần nữa. Đó là tính đúng đắn, tính nhất quán, hiệu năng, và code chết — bốn kiểu nhìn khác nhau. Mô hình sẽ tìm những cái dễ — code chết, phong cách lệch lạc — và bỏ lỡ những cái khó: lỗi tinh vi, sự không nhất quán về kiến trúc chỉ lộ ra khi nhìn qua ba file. Một prompt, bốn việc, và mô hình sẽ làm hai việc nó giỏi và báo cáo những việc còn lại như đã xong.

Blog này đã chạy một thứ rất gần với prompt của Albert, bằng tay, trên chính nó. Một cuộc kiểm tra các state machine ẩn trong Toward Less đã tìm ra mười ba state machine đang hoạt động và bốn state machine ma: hai định nghĩa khác nhau về "đã xuất bản," logic theme trùng lặp ở hai nơi, phát hiện ngôn ngữ trùng lặp với một hàm chết, các liên kết phân trang trỏ tới những trang không tồn tại. Mỗi cái trong số đó đúng là những gì prompt của Albert yêu cầu — không nhất quán, kém hiệu quả, không còn cần nữa — và mỗi cái đều được tìm ra bằng cách đọc toàn bộ dự án và liệt kê những gì sai trước khi sửa. Danh sách đến trước. Các bản sửa theo sau, trong một bản sao sạch, và được kiểm tra trước khi push bất cứ thứ gì.

Vậy hãy thử prompt này. Nhưng hãy chạy nó vì danh sách, không phải vì các bản sửa. Tự đọc danh sách, đối chiếu các bản sửa nó đã thực hiện với danh sách nó trả về, và nhớ rằng "Tôi chắc chắn về điều này" là câu mà một mô hình sẽ nói về gần như mọi thứ. Prompt hay vì nó giữ con người trong vòng lặp. Vòng lặp mới là điểm mấu chốt.

*Lấy cảm hứng từ bài đăng trên X ["Mỗi khi có mô hình mới, tôi chạy cùng một prompt đơn giản trên mọi dự án của mình: 'Hãy đọc toàn bộ dự án này và tìm mọi thứ hỏng, không nhất quán, kém hiệu quả, hoặc không còn cần nữa. Sửa những gì bạn chắc chắn và liệt kê phần còn lại để tôi xem xét.' Rất nên thử"](https://x.com/alexalbert__/status/2119884951550386671) của [Alex Albert (@alexalbert__)](https://x.com/alexalbert__/status/2119884951550386671). Bài đăng đã được xác minh vào ngày 10 tháng 11 năm 2026: 3:08 AM, 10 Nov 2026, 61.5K lượt xem. Alex Albert làm nghiên cứu tại Anthropic. Cuộc kiểm tra state machine của Toward Less được nhắc trong bài này là cuộc kiểm tra nội bộ của blog vào ngày 8 tháng 11 năm 2026, lưu tại workspace/toward-less/audit/implicit-state-machines-audit.md.*

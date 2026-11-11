---
title: "AGENTOWNERS: chính sách cho agent trong kho mã nguồn"
description: "AGENTOWNERS quyết định điều gì, không thể kiểm soát điều gì và vì sao dự án vẫn ở giai đoạn tiền phát hành."
lang: vi
slug: agentowners-repository-policy-vi
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:01:00+07:00
draft: false
featured: false
tags: [technology]
---
AGENTOWNERS trả lời một câu hỏi: theo chính sách được lưu trong kho mã, agent AI có được phép thực hiện hành động này không? README mô tả một bộ máy quy tắc tất định, không phải công cụ đánh giá mã bằng AI hay sandbox lúc chạy.

## Nó quyết định điều gì?

- Đọc chính sách YAML có phiên bản, nhận diện tín hiệu agent, phân loại đường dẫn bị sửa và suy ra hành động.
- Giải quyết xung đột theo thứ tự: chặn, yêu cầu phê duyệt, cho phép. Agent chưa biết phải xin phê duyệt; thay đổi workflow và tệp bí mật bị chặn mặc định.
- Cùng chính sách và đầu vào sẽ cho cùng kết quả. Bộ máy không gọi mô hình hay API chính sách được lưu trữ.

## Nó không kiểm soát được gì?

AGENTOWNERS quản lý đóng góp tại ranh giới kho mã. Nó không chặn lời gọi mô hình hay công cụ ở nơi khác, cô lập việc thực thi mã hoặc đánh giá tính đúng đắn của mã.

## Trạng thái hiện tại

Dự án còn ở giai đoạn tiền phát hành: các gói npm và GitHub Action v0 ổn định chưa được công bố. README khuyên nên đánh giá từ mã nguồn và không ghim workflow sản xuất vào nhánh main.

## Nguồn

[README của AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS#readme), kiểm tra ngày 11 tháng 11 năm 2026.

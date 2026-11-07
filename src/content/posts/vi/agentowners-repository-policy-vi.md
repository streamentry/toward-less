---
title: "AGENTOWNERS: chính sách cho agent trong kho mã nguồn"
description: "Một lớp quy tắc xác định agent được làm gì trong kho mã nguồn."
lang: vi
slug: agentowners-repository-policy-vi
translationKey: agentowners-repository-policy-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Tài liệu agent giải thích cách làm việc, nhưng không thể cưỡng chế giới hạn quyền. [AGENTOWNERS](https://github.com/streamentry/AGENTOWNERS) thêm chính sách xác định bằng một tệp YAML được lưu trong kho mã nguồn.

Bộ máy nhận diện agent, phân loại đường dẫn đã đổi, suy ra hành động và áp dụng quy tắc theo thứ tự cố định: chặn, yêu cầu phê duyệt, cho phép. Agent chưa biết mặc định phải xin duyệt; thay đổi workflow và tệp bí mật mặc định bị chặn. Phần lõi không dùng mô hình hay dịch vụ chính sách bên ngoài. Dự án chưa phát hành: gói npm và Action ổn định v0 chưa được công bố. Chính sách kho mã không phải sandbox lúc chạy.

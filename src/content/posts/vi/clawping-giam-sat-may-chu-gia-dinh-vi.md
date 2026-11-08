---
title: "Giám sát máy chủ gia đình sau CGNAT"
description: "ClawPing dùng heartbeat gửi ra ngoài để giám sát máy chủ gia đình mà không mở cổng kết nối vào."
lang: vi
slug: clawping-giam-sat-may-chu-gia-dinh-vi
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Máy chủ gia đình nằm sau CGNAT thường khó để dịch vụ giám sát bên ngoài kết nối tới. [ClawPing](https://github.com/cschanhniem/clawping) đảo chiều kết nối: một agent Go nhỏ chạy tại nhà gửi heartbeat HTTPS ra ngoài đến control plane trên Cloudflare.

Agent kiểm tra dung lượng đĩa, các địa chỉ HTTP, container Docker và độ mới của bản sao lưu. Control plane theo dõi sự cố và gửi cảnh báo qua Telegram khi một kiểm tra thất bại hoặc thiết bị ngừng báo về. Cách này không cần mở cổng vào, dùng dynamic DNS hay duy trì một VPS riêng để giám sát.

Điểm đáng chú ý là phạm vi hẹp: báo cho chủ homelab biết khi có thứ hỏng mà không biến mạng gia đình thành nơi người ngoài có thể kết nối. README cũng nói rõ những gì công cụ chưa làm: SNMP, thu thập log, bảng metrics kiểu Grafana hay giám sát đội máy lớn. Đây là công cụ quy mô nhỏ cho NAS, mini PC hoặc máy chủ tại nhà, không phải nền tảng observability đầy đủ.

[Đọc README của dự án](https://github.com/cschanhniem/clawping).

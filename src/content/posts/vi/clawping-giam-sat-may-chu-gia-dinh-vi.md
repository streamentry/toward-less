---
title: "Giám sát máy chủ gia đình sau CGNAT"
description: "ClawPing giám sát máy chủ gia đình sau CGNAT như thế nào và công cụ này không bao gồm những gì."
lang: vi
slug: clawping-giam-sat-may-chu-gia-dinh-vi
translationKey: clawping-home-server-monitor-2026
pubDatetime: 2026-11-07T00:00:00+07:00
modDatetime: 2026-11-11T16:10:00+07:00
draft: false
featured: false
tags: [technology]
---
ClawPing giám sát máy chủ gia đình sau CGNAT bằng heartbeat HTTPS gửi ra ngoài. Một agent Go nhỏ gửi các kết quả kiểm tra đến control plane trên Cloudflare, nên máy chủ gia đình không cần mở cổng vào.

## Công cụ kiểm tra gì?

- Mức sử dụng đĩa và endpoint HTTP
- Tình trạng container Docker
- Bản sao lưu có còn mới hay không

Control plane theo dõi sự cố và gửi cảnh báo Telegram khi một phép kiểm tra thất bại hoặc thiết bị ngừng báo về.

## Phạm vi và giới hạn

README hướng đến NAS, mini PC hoặc máy chủ gia đình. ClawPing không có SNMP, tổng hợp log, chỉ số kiểu Grafana hay giám sát đội máy chủ lớn. Đây là công cụ kiểm tra tình trạng hoạt động hẹp, không phải nền tảng observability đầy đủ hay ranh giới bảo mật mạng.

## Nguồn

[README ClawPing](https://github.com/cschanhniem/clawping#readme), kiểm tra ngày 11 tháng 11 năm 2026.

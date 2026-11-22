---
title: "Kỹ sư phần mềm không phải người gõ code"
description: "AI giúp tạo code nhanh hơn. Nhưng hiểu vấn đề, kiểm chứng hệ thống và chịu trách nhiệm vẫn là công việc của kỹ sư."
lang: vi
slug: ky-su-phan-mem-khong-phai-nguoi-go-code
translationKey: software-engineering-is-not-typing-code-2026
pubDatetime: 2026-11-22T12:00:00+07:00
draft: false
featured: false
tags: [technology, work]
---

Một bình luận trên Reddit nói khá thẳng: “Bạn là kỹ sư phần mềm. Bạn tạo ra phần mềm, không phải cỗ máy gõ code.” Nếu AI có thể viết phần lớn mã nguồn, có lẽ nghề kỹ sư chỉ đang chuyển lên một tầng trừu tượng mới.

Lập luận ấy có phần đúng. Nhưng nếu dừng ở đó, ta bỏ qua điều quan trọng nhất.

**Viết code chưa bao giờ là toàn bộ công việc. Nhưng hiểu hệ thống mình xây dựng cũng chưa bao giờ là điều tùy chọn.**

## Công cụ không phải mục đích

Phần lớn lập trình viên không tự viết compiler, thiết kế CPU hay chế tạo chip. Chúng ta đứng trên nhiều tầng trừu tượng do người khác tạo ra. Thư viện thay thế đoạn code lặp lại. Ngôn ngữ bậc cao giúp ta không phải xử lý từng lệnh máy. Nhờ vậy, ta giải được những vấn đề lớn hơn với chi phí thấp hơn.

AI có thể trở thành một tầng trừu tượng như thế. Thay vì tự viết từng hàm, kỹ sư mô tả hành vi mong muốn, xem xét bản triển khai, kiểm thử rồi điều chỉnh. Chi phí triển khai thấp hơn có thể khiến nhiều ý tưởng trước đây quá đắt trở nên khả thi.

Nhưng **sinh code không đồng nghĩa với kỹ nghệ phần mềm**. Kỹ nghệ còn là tìm đúng vấn đề, hiểu ràng buộc, xác định điều kiện thành công, thiết kế cho tình huống hỏng và duy trì một hệ thống đáng tin.

## Ví dụ compiler có giới hạn

Một compiler hoạt động theo những quy tắc tương đối ổn định. Với cùng mã nguồn, bộ công cụ và cấu hình, kết quả thường có thể tái lập. AI lại có thể tạo mã trông rất hợp lý nhưng sai, hiểu nhầm yêu cầu chưa được nói rõ hoặc đưa lỗi bảo mật vào hệ thống với vẻ ngoài đầy tự tin.

Điều đó không khiến AI vô dụng. Nó thay đổi vị trí cần đặt sự cẩn trọng.

Khi giao nhiều việc triển khai hơn cho AI, ta cần đặc tả rõ hơn, thay đổi đủ nhỏ để review, kiểm thử tự động, kiểm tra bảo mật, giám sát vận hành và người chịu trách nhiệm cuối cùng. Bản test do AI viết cũng có thể sai. AI viết code rồi tự viết test cho code ấy không đủ chứng minh rằng yêu cầu ban đầu đã đúng.

**Một tầng trừu tượng tốt che đi phức tạp không cần thiết, chứ không che luôn các lỗi mà ta vẫn phải hiểu.**

## Phản biện mạnh nhất: người lao động thực sự bị ảnh hưởng

So sánh AI với máy khoan thay cuốc chim bỏ qua tác động của cơ giới hóa lên việc làm và quyền thương lượng của người lao động. Năng suất tăng không bảo đảm mọi kỹ sư đều được hưởng lợi. Một số công việc có thể thu hẹp, con đường học nghề của người mới có thể khó hơn, và phần lớn giá trị tăng thêm có thể thuộc về người sở hữu vốn hoặc kênh phân phối.

Những lo ngại ấy không đơn giản là cái tôi bị tổn thương. Gọi người lo lắng là “thợ gõ code” né tránh câu hỏi về đào tạo, thu nhập và trách nhiệm.

Nhưng chiều ngược lại cũng đúng: đã dành nhiều năm học một công cụ không có nghĩa cách làm cũ phải được giữ mãi. Công sức đã bỏ ra không khiến quy trình trở nên thiêng liêng.

## Thứ ngày càng khan hiếm

Giá trị của kỹ sư ngày càng nằm ở những câu hỏi không thể giải chỉ bằng thêm một nghìn dòng mã:

- **Có nên xây không?** Người dùng có vấn đề thật không, và phần mềm có phải giải pháp phù hợp?
- **Điều gì phải đúng?** Hành vi, bảo mật, quyền riêng tư và giới hạn thất bại nào là bắt buộc?
- **Biết đúng bằng cách nào?** Có thể kiểm chứng kết quả độc lập với thực tế?
- **Ai chịu hậu quả?** Khi hệ thống lỗi, ai tìm nguyên nhân, sửa và rút kinh nghiệm?

Những câu hỏi này vốn luôn quan trọng. AI khiến việc bỏ qua chúng trở nên nhanh và rẻ hơn, nên hậu quả đôi khi còn lớn hơn.

## Đừng bám chấp vào code. Cũng đừng tôn thờ AI.

Có một chiếc bẫy bản ngã ở cả hai phía. Một người gắn giá trị bản thân với khả năng viết mã. Người khác gắn tiến bộ với bất kỳ thứ gì mô hình mới nhất tạo ra. Cả hai đều nhầm công cụ với con người mình.

Kỹ sư giỏi vẫn tò mò về những tầng bên dưới ngay cả khi công cụ tầng trên làm phần lớn việc. Họ giải thích được giả định của hệ thống, thấy được điểm gãy và sẵn sàng đổi hướng khi thực tế cho thấy mình sai.

Một phép thử nhỏ: giao cho AI một nhiệm vụ có tiêu chí chấp nhận rõ ràng. Trước khi merge, hỏi xem kỹ sư khác có thể tái lập kiểm thử, hiểu tình huống lỗi và vận hành thay đổi ấy an toàn không. Nếu chưa, code có thể đã xong, nhưng kỹ nghệ thì chưa.

**Mục tiêu không phải viết nhiều code hơn hay ít code hơn. Mục tiêu là tạo phần mềm đáng sử dụng và chịu trách nhiệm về thứ mình đưa vào thế giới.**

### Ghi chú nguồn

Bài luận phát triển từ ảnh chụp bình luận Reddit của *ConcerningThirst* do người đọc cung cấp. So sánh với máy khoan và nhận định AI chỉ là tầng trừu tượng tốt hơn là lập luận của người bình luận, không phải dữ kiện được kiểm chứng độc lập. Bài viết phân tích ý tưởng, không tán thành những lời công kích cá nhân.

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Obfuscator có ảnh hưởng đến hiệu năng code không?",
    answer: "Không. Code đã obfuscate vẫn chạy với tốc độ gần như tương đương code gốc. Chúng tôi tối ưu hóa quá trình làm rối để đảm bảo hiệu năng tốt nhất, thường chỉ giảm 1-3% tốc độ.",
  },
  {
    question: "Có thể dịch ngược code đã obfuscate không?",
    answer: "Rất khó. Chúng tôi sử dụng nhiều lớp bảo vệ: mã hóa AES-256, đổi tên biến, xóa comment, anti-debug, và watermarking. Việc dịch ngược đòi hỏi thời gian và công sức khổng lồ, gần như không khả thi.",
  },
  {
    question: "Hỗ trợ những ngôn ngữ lập trình nào?",
    answer: "Hiện tại chúng tôi hỗ trợ đầy đủ Python và JavaScript/TypeScript. Trong tương lai gần sẽ bổ sung thêm Java, C#, và Go.",
  },
  {
    question: "Code đã obfuscate có chạy trên mọi môi trường không?",
    answer: "Có. Code đã obfuscate chạy bình thường trên mọi môi trường Python/JavaScript tiêu chuẩn. Không cần cài thêm thư viện hay công cụ đặc biệt.",
  },
  {
    question: "Dữ liệu code của tôi có được lưu trữ không?",
    answer: "Không. Chúng tôi xử lý obfuscate trực tiếp và không lưu trữ mã nguồn của bạn. Toàn bộ quá trình diễn ra trong phiên làm việc của bạn, đảm bảo bảo mật tuyệt đối.",
  },
  {
    question: "Có thể hủy gói đăng ký bất cứ lúc nào không?",
    answer: "Có. Bạn có thể hủy gói đăng ký bất cứ lúc nào mà không phát sinh phí. Sau khi hủy, bạn vẫn sử dụng được dịch vụ đến hết kỳ thanh toán.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="docs" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground mb-2">
            <span>Câu hỏi thường gặp</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Bạn có <span className="gradient-text">câu hỏi?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chúng tôi có câu trả lời
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-primary/30 bg-card card-glow"
                  : "border-border/50 bg-card/50 hover:border-border"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className={`font-medium transition-colors ${openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

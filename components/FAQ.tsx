import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Meowt có ảnh hưởng đến hiệu năng code không?",
    answer: "Không đáng kể. Code đã obfuscate vẫn chạy với tốc độ gần như tương đương code gốc. Chúng tôi tối ưu hóa quá trình làm rối để đảm bảo hiệu năng tốt nhất, thường chỉ giảm 1-3% tốc độ thực thi.",
  },
  {
    question: "WebAssembly Layer hoạt động như thế nào?",
    answer: "WASM Layer biên dịch một phần code Python sang WebAssembly binary, tạo lớp bảo vệ đa nền tảng. Code được nhúng trong WASM khó dịch ngược hơn nhiều so với Python thuần, vì WASM là định dạng binary cấp thấp.",
  },
  {
    question: "KVM 2.0 (Custom Stack VM) là gì?",
    answer: "KVM 2.0 là máy ảo stack tùy chỉnh do Meow team phát triển. Nó chạy code trong môi trường ảo hóa độc quyền, khiến việc debug và phân tích runtime trở nên cực kỳ khó khăn. KVM 2.0 là lớp bảo vệ mạnh nhất của Meowt.",
  },
  {
    question: "File đã obfuscate được lưu ở đâu?",
    answer: "File .py đã mã hóa được tự động tải lên Catbox (catbox.moe) và trả về link tải trực tiếp. Bạn có thể chia sẻ link này an toàn - file đã được bảo vệ hoàn toàn và không thể đọc nội dung gốc.",
  },
  {
    question: "Có giới hạn số dòng code không?",
    answer: "Gói Free giới hạn 500 dòng/file. Gói Pro và Enterprise không giới hạn dòng code. Hệ thống xử lý hàng nghìn dòng code trong vài giây nhờ tối ưu hóa backend FastAPI.",
  },
  {
    question: "Dữ liệu code của tôi có được lưu trữ không?",
    answer: "Không. Chúng tôi xử lý obfuscate trực tiếp và không lưu trữ mã nguồn gốc của bạn. File kết quả được tải lên Catbox với link ngẫu nhiên, không thể đoán. Lịch sử obfuscate chỉ lưu trong trình duyệt của bạn (localStorage).",
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

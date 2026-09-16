import { Upload, Shield, Lock, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Tải lên mã nguồn",
    description: "Kéo thả hoặc dán mã Python / JavaScript của bạn vào trình obfuscate. Hỗ trợ file .py, .js, .ts.",
    step: "01",
  },
  {
    icon: Shield,
    title: "Cấu hình bảo vệ",
    description: "Chọn mức độ obfuscate, bật/tắt mã hóa, watermark, anti-debug. Tùy chỉnh theo nhu cầu của bạn.",
    step: "02",
  },
  {
    icon: Lock,
    title: "Mã hóa tự động",
    description: "Hệ thống mã hóa và làm rối code trong vài giây. Sử dụng AES-256 và kỹ thuật obfuscation tiên tiến.",
    step: "03",
  },
  {
    icon: Download,
    title: "Tải xuống kết quả",
    description: "Nhận file đã được bảo vệ, sẵn sàng để phân phối. Code vẫn chạy bình thường nhưng không thể đọc.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.02]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground mb-2">
            <Shield className="w-4 h-4 text-accent" />
            <span>Quy trình</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Bảo vệ code trong{" "}
            <span className="gradient-text">4 bước đơn giản</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Từ mã nguồn gốc đến file được bảo vệ hoàn toàn chỉ trong vài giây
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-4 group-hover:from-primary/25 group-hover:to-accent/25 transition-all">
                  <step.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border/50 items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

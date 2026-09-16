import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "Miễn phí",
    description: "Dành cho cá nhân thử nghiệm",
    features: [
      { text: "Obfuscate code cơ bản", included: true },
      { text: "Hỗ trợ Python & JavaScript", included: true },
      { text: "Tối đa 100 dòng / file", included: true },
      { text: "Mã hóa AES-128", included: true },
      { text: "Watermarking", included: false },
      { text: "Anti-debug", included: false },
      { text: "Hỗ trợ ưu tiên", included: false },
    ],
    cta: "Bắt đầu miễn phí",
    highlight: false,
  },
  {
    name: "Pro",
    price: "299K",
    period: "/tháng",
    description: "Dành cho freelancer & team nhỏ",
    features: [
      { text: "Obfuscate code nâng cao", included: true },
      { text: "Hỗ trợ Python & JavaScript", included: true },
      { text: "Không giới hạn dòng code", included: true },
      { text: "Mã hóa AES-256", included: true },
      { text: "Watermarking độc nhất", included: true },
      { text: "Anti-debug & anti-tamper", included: true },
      { text: "Hỗ trợ ưu tiên 24/7", included: true },
    ],
    cta: "Dùng thử Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    description: "Dành cho doanh nghiệp lớn",
    features: [
      { text: "Tất cả tính năng Pro", included: true },
      { text: "On-premise deployment", included: true },
      { text: "API tích hợp riêng", included: true },
      { text: "Custom obfuscation rules", included: true },
      { text: "SLA 99.99% uptime", included: true },
      { text: "Dedicated support", included: true },
      { text: "Training & onboarding", included: true },
    ],
    cta: "Liên hệ tư vấn",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground mb-2">
            <span>Bảng giá</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Chọn gói <span className="gradient-text">phù hợp</span> với bạn
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bắt đầu miễn phí, nâng cấp khi bạn cần. Không phí ẩn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlight
                  ? "bg-card border-primary/50 card-glow scale-105 gradient-border"
                  : "bg-card border-border/50 hover:border-primary/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold">
                  Phổ biến nhất
                </div>
              )}

              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                {plan.price !== "Liên hệ" && plan.price !== "0" && (
                  <span className="text-sm text-muted-foreground">đ</span>
                )}
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground line-through"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_30px_hsl(270_100%_65%/0.4)]"
                    : "border border-border hover:border-primary/50 hover:bg-secondary/50 text-foreground"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import { Shield, Lock, Zap, FileLock2, KeyRound, Eye, Fingerprint, Boxes, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Deep Control Flow Flattening",
    description: "Làm phẳng luồng điều khiển và ẩn lời gọi hàm, khiến việc phân tích logic trở nên cực kỳ khó khăn.",
    badge: "Deep",
  },
  {
    icon: Boxes,
    title: "WebAssembly Layer",
    description: "Lớp binary đa nền tảng WASM, biên dịch code Python sang WebAssembly để bảo vệ cấp độ binary.",
    badge: "WASM",
  },
  {
    icon: Cpu,
    title: "Custom Stack VM KVM 2.0",
    description: "Máy ảo stack tùy chỉnh KVM 2.0, chạy code trong môi trường ảo hóa độc quyền, chống debug hiệu quả.",
    badge: "KVM 2.0",
  },
  {
    icon: KeyRound,
    title: "Watermarking độc nhất",
    description: "Nhúng watermark tác giả vào header file, giúp truy vết nguồn gốc nếu code bị rò rỉ trái phép.",
    badge: "Watermark",
  },
  {
    icon: Eye,
    title: "Chống Reverse Engineering",
    description: "Làm rối code thông minh, xóa comment, đổi tên biến và hàm, khiến việc dịch ngược gần như bất khả thi.",
    badge: "Anti-RE",
  },
  {
    icon: FileLock2,
    title: "Catbox Upload tự động",
    description: "File đã mã hóa được tự động tải lên Catbox, trả về link tải an toàn, sẵn sàng phân phối.",
    badge: "Catbox",
  },
];

const Features = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground mb-2">
            <Shield className="w-4 h-4 text-primary" />
            <span>Tính năng bảo vệ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Bảo vệ code với{" "}
            <span className="gradient-text">công nghệ tiên tiến</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bộ công cụ bảo vệ mã nguồn Python toàn diện, từ Deep Obfuscation đến WebAssembly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow spotlight overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono-code text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                {feature.badge}
              </div>

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

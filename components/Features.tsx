import { Shield, Lock, Zap, FileLock2, KeyRound, Eye, Fingerprint } from "lucide-react";

const features = [
  {
    icon: FileLock2,
    title: "Mã hóa mã nguồn",
    description: "Mã hóa toàn bộ mã nguồn Python và JavaScript bằng thuật toán AES-256, đảm bảo không ai có thể đọc hoặc sao chép code của bạn.",
    badge: "AES-256",
  },
  {
    icon: KeyRound,
    title: "Quản lý khóa bí mật",
    description: "Tự động tạo và quản lý khóa mã hóa an toàn. Mỗi file được bảo vệ bằng một khóa duy nhất, không thể crack.",
    badge: "Key Rotation",
  },
  {
    icon: Eye,
    title: "Chống reverse engineering",
    description: "Làm rối code thông minh, xóa bỏ mọi comment, đổi tên biến và hàm, khiến việc dịch ngược trở nên bất khả thi.",
    badge: "Anti-RE",
  },
  {
    icon: Fingerprint,
    title: "Watermarking",
    description: "Nhúng watermark độc nhất vào mỗi bản phân phối, giúp truy vết nguồn gốc nếu code bị rò rỉ.",
    badge: "Traceable",
  },
  {
    icon: Zap,
    title: "Tốc độ siêu nhanh",
    description: "Xử lý hàng nghìn dòng code trong chưa tới 1 giây. Tối ưu hóa hiệu năng, không ảnh hưởng tốc độ chạy.",
    badge: "<1s",
  },
  {
    icon: Lock,
    title: "Bảo vệ runtime",
    description: "Ngăn chặn debug, anti-tamper, và phát hiện môi trường ảo. Code chỉ chạy trong môi trường được phép.",
    badge: "Anti-Debug",
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
            Bộ công cụ bảo vệ mã nguồn toàn diện, từ mã hóa đến chống dịch ngược
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
              <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono text-primary opacity-60 group-hover:opacity-100 transition-opacity">
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

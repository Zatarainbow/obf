import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Code2, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      {/* Floating icons */}
      <div className="absolute top-10 left-10 opacity-20 animate-float">
        <Code2 className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Terminal className="w-16 h-16 text-accent" />
      </div>
      <div className="absolute top-1/2 left-20 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <Lock className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute top-20 right-20 opacity-15 animate-float" style={{ animationDelay: '0.5s' }}>
        <Shield className="w-12 h-12 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span>Bảo vệ ngay hôm nay</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Bắt đầu bảo vệ</span> mã nguồn ngay hôm nay
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn lập trình viên đang sử dụng Meowt Obfuscator của Meow team.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate("/app")}
              className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_40px_hsl(187_100%_50%/0.4)] group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              <span className="relative flex items-center">
                Bắt đầu obf
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="gradient-border group relative overflow-hidden" onClick={() => navigate("/app")}>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Xem hướng dẫn</span>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Miễn phí. Không cần đăng ký. Bảo vệ code ngay lập tức.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

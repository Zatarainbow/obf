import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Bắt đầu bảo vệ</span> mã nguồn ngay hôm nay
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Tham gia cùng hàng nghìn lập trình viên đang sử dụng công cụ obfuscator của chúng tôi.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 group">
            Bắt đầu miễn phí
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="gradient-border">
            Liên hệ tư vấn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

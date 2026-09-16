import { Shield, Github, Twitter, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border/50 py-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-lg">Meowt</span>
                <span className="text-xs text-muted-foreground font-mono-code">v5.2</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Next-Generation Cross-Platform Python Protection & WebAssembly Security. Bảo vệ mã nguồn Python bởi Meow team.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors">
                <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors">
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass border border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors">
                <Mail className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Sản phẩm</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate("/app")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Công cụ Obfuscate</button></li>
              <li><a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tính năng</a></li>
              <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Quy trình</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Bảng giá</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Tài nguyên</h4>
            <ul className="space-y-2">
              <li><a href="https://obfpy.vercel.app/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Docs</a></li>
              <li><a href="https://obfpy.vercel.app/openapi.json" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">OpenAPI Schema</a></li>
              <li><a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hướng dẫn</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Meow team</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Liên hệ</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Điều khoản</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Bảo mật</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Meow team. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

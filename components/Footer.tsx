import { Shield, Github, Twitter, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-base sm:text-lg">Meowt</span>
                <span className="text-xs text-muted-foreground font-mono-code">v5.2</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex gap-2.5 sm:gap-3">
              <a href="#" className="w-9 h-9 min-h-[36px] rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 min-h-[36px] rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 min-h-[36px] rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors" aria-label="Email">
                <Mail className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{t.footer.colProducts}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate("/app")} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.toolObf}</button></li>
              <li><a href="#products" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.features}</a></li>
              <li><a href="#how-it-works" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.workflow}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{t.footer.colResources}</h4>
            <ul className="space-y-2">
              <li><a href="https://obfpy.vercel.app/docs" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.apiDocs}</a></li>
              <li><a href="https://obfpy.vercel.app/openapi.json" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.openapi}</a></li>
              <li><a href="#docs" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.faq}</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.guide}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{t.footer.colCompany}</h4>
            <ul className="space-y-2 flex flex-wrap gap-x-6 gap-y-2 sm:block sm:space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.aboutUs}</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.contact}</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.terms}</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.privacy}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            {t.footer.rights}
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
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

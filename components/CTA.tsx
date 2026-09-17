import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Code2, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const CTA = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px] sm:blur-[120px]" />

      {/* Floating icons */}
      <div className="hidden sm:block absolute top-10 left-10 opacity-20 animate-float">
        <Code2 className="w-16 h-16 text-primary" />
      </div>
      <div className="hidden sm:block absolute bottom-10 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Terminal className="w-16 h-16 text-accent" />
      </div>
      <div className="hidden md:block absolute top-1/2 left-20 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <Lock className="w-12 h-12 text-primary" />
      </div>
      <div className="hidden md:block absolute top-20 right-20 opacity-15 animate-float" style={{ animationDelay: '0.5s' }}>
        <Shield className="w-12 h-12 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border border-border/50 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span>{t.cta.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">{t.cta.heading1}</span> {t.cta.heading2}
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t.cta.desc}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <Button
              size="lg"
              onClick={() => navigate("/app")}
              className="w-full sm:w-auto h-12 text-sm sm:text-base bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_40px_hsl(187_100%_50%/0.4)] group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              <span className="relative flex items-center justify-center">
                {t.cta.btnStart}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 text-sm sm:text-base gradient-border group relative overflow-hidden" onClick={() => navigate("/app")}>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">{t.cta.btnDocs}</span>
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
            {t.cta.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

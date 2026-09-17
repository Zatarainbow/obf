import { Shield, Zap, FileLock2, KeyRound, Eye, Boxes, Cpu } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const featureIcons = [Zap, Boxes, Cpu, KeyRound, Eye, FileLock2];

const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-12 sm:py-20 md:py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border border-border/50 text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span>{t.features.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            {t.features.heading1}{" "}
            <span className="gradient-text">{t.features.heading2}</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {t.features.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index] || Shield;
            return (
              <div
                key={index}
                className="group relative p-5 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow spotlight overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 px-2 py-0.5 sm:py-1 rounded-md bg-primary/10 border border-primary/20 text-[11px] sm:text-xs font-mono-code text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                  {feature.badge}
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

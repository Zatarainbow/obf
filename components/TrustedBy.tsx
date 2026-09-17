import { Shield, Lock, Code2, Terminal, FileCode2, KeyRound } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const logos = [
  { icon: Shield, name: "FPT Software" },
  { icon: Code2, name: "VNG Corporation" },
  { icon: Terminal, name: "Tiki" },
  { icon: FileCode2, name: "Momo" },
  { icon: KeyRound, name: "Viettel" },
  { icon: Lock, name: "Shopee VN" },
  { icon: Shield, name: "Zalo" },
  { icon: Code2, name: "Sapo" },
  { icon: Terminal, name: "Base.vn" },
  { icon: FileCode2, name: "MISA" },
  { icon: KeyRound, name: "Lazada" },
  { icon: Lock, name: "VnPay" },
];

const TrustedBy = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-16 border-t border-b border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <p className="text-center text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm uppercase tracking-wider">
          {t.trustedBy.title}
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1.5 sm:gap-2 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/30 group-hover:scale-110 transition-all">
                <logo.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center truncate max-w-full">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

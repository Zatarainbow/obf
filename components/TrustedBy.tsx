import { Shield, Lock, Code2, Terminal, FileCode2, KeyRound } from "lucide-react";

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
  return (
    <section className="py-16 border-t border-b border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
          Được tin dùng bởi các công ty hàng đầu
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/30 group-hover:scale-110 transition-all">
                <logo.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
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

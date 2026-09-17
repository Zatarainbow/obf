import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Code2, Sparkles, Zap, Terminal, FileCode2 } from "lucide-react";
import MatrixRain from "./MatrixRain";
import ParticleField from "./ParticleField";
import GlowingOrb from "./GlowingOrb";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const AnimatedIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div
    className="relative group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity animate-pulse" />
    <div className="relative p-4 rounded-2xl glass border border-border/50 animate-float">
      {children}
    </div>
  </div>
);

const codeLines = [
  { text: "# Meowt Obfuscator v5.2", color: "text-muted-foreground" },
  { text: "import hashlib, base64", color: "text-primary" },
  { text: "from cryptography.fernet import Fernet", color: "text-primary" },
  { text: "", color: "" },
  { text: "def protect(source):", color: "text-accent" },
  { text: "    key = Fernet.generate_key()", color: "text-foreground/70" },
  { text: "    cipher = Fernet(key)", color: "text-foreground/70" },
  { text: "    encoded = cipher.encrypt(", color: "text-foreground/70" },
  { text: "        source.encode()", color: "text-foreground/50" },
  { text: "    )", color: "text-foreground/70" },
  { text: "    return base64.b64encode(encoded)", color: "text-foreground/70" },
];

const obfuscatedLines = [
  { text: "# Meowt v5.2 | WM: Meow team", color: "text-muted-foreground/50" },
  { text: "gASVwAAAAAAAAACMBXBweeSlgLGSlgBG", color: "text-primary/60" },
  { text: "LgCMA2tleZSMA2FiY6QulgCWlIWUjAZG", color: "text-accent/60" },
  { text: "ZXJudJQulgCMA2VuY6QulgCMB2VuY29k", color: "text-primary/60" },
  { text: "ZJSMBmJhc2U2NJSFgZSFlIwGZW5jb2Rl", color: "text-accent/60" },
  { text: "lIWUjAZGZXJuZXQulgCMA2V5lJSlgJSl", color: "text-primary/60" },
  { text: "gZSFlIwGc291cmNllIwGZW5jb2RlZJSU", color: "text-accent/60" },
  { text: "jAZjaXBoZXKUjAZGZXJuZXSlA5SFlIwG", color: "text-primary/60" },
  { text: "YmFzZTY0lIWUjAZGbmNvZGWUjAZjaXBo", color: "text-accent/60" },
  { text: "ZXKUjAZGZXJuZXSlA5SFlIWUjAZGZW5j", color: "text-primary/60" },
  { text: "b2RllIwGc291cmNllIwGZW5jb2RlZJSU", color: "text-accent/60" },
];

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showObfuscated, setShowObfuscated] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          setTimeout(() => setShowObfuscated(true), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const activeLines = showObfuscated ? obfuscatedLines : codeLines;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Particle Canvas */}
      <ParticleField />

      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Glowing orbs */}
      <GlowingOrb className="top-20 left-10" size="lg" color="primary" />
      <GlowingOrb className="bottom-20 right-20" size="xl" color="accent" />
      <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="xl" color="mixed" />

      {/* Matrix rain background */}
      <MatrixRain />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground group hover:border-primary/50 transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="relative">
                {t.hero.badge}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <Zap className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '500ms' }} />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">{t.hero.title1}</span>
              <br />
              <span className="text-foreground">{t.hero.title2}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              <span className="text-foreground/80 font-medium">{t.hero.subtitleHighlight1}</span>,{" "}
              <span className="text-foreground/80 font-medium">{t.hero.subtitleHighlight2}</span> {t.hero.subtitleEnd}
            </p>

            <p className="text-muted-foreground max-w-lg leading-relaxed">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/app")}
                className="relative bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_40px_hsl(187_100%_50%/0.4)] group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                <span className="relative flex items-center">
                  {t.hero.btnStart}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="gradient-border group relative overflow-hidden" onClick={() => navigate("/app")}>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">{t.hero.btnDocs}</span>
              </Button>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold gradient-text">v5.2</div>
                <div className="text-sm text-muted-foreground">{t.hero.statVer}</div>
              </div>
              <div className="w-px bg-border/50" />
              <div>
                <div className="text-2xl font-bold gradient-text">WASM</div>
                <div className="text-sm text-muted-foreground">{t.hero.statWasm}</div>
              </div>
              <div className="w-px bg-border/50" />
              <div>
                <div className="text-2xl font-bold gradient-text">KVM2</div>
                <div className="text-sm text-muted-foreground">{t.hero.statVm}</div>
              </div>
            </div>
          </div>

          {/* Right content - Code encryption visual */}
          <div className="relative flex justify-center lg:justify-end animate-fadeIn-delay-3">
            <div className="relative w-full max-w-md">
              {/* Central glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-r from-primary to-accent rounded-full blur-[80px] opacity-20 animate-pulse" />
              </div>

              {/* Code window */}
              <div className="relative code-window scan-line">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Terminal className="w-3.5 h-3.5" />
                    <span className="font-mono-code">{showObfuscated ? "obfuscated.py" : "source.py"}</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${showObfuscated ? "bg-accent animate-pulse" : "bg-primary animate-pulse"}`} />
                    <span className="text-xs text-muted-foreground">{showObfuscated ? t.hero.terminalProtected : t.hero.terminalProcessing}</span>
                  </div>
                </div>

                {/* Code content */}
                <div className="p-4 min-h-[340px] text-sm leading-relaxed font-mono-code">
                  {activeLines.slice(0, Math.max(visibleLines, showObfuscated ? obfuscatedLines.length : 0)).map((line, i) => (
                    <div key={i} className="flex gap-3 group hover:bg-primary/5 -mx-4 px-4 transition-colors">
                      <span className="text-muted-foreground/40 select-none w-6 text-right">{i + 1}</span>
                      <span className={`${line.color} ${showObfuscated ? "encrypt-text" : ""} transition-all`}>
                        {line.text || "\u00A0"}
                      </span>
                    </div>
                  ))}
                  {!showObfuscated && visibleLines < codeLines.length && (
                    <div className="flex gap-3 mt-1">
                      <span className="text-muted-foreground/40 select-none w-6 text-right">{visibleLines + 1}</span>
                      <span className="typing-cursor text-primary" />
                    </div>
                  )}
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-border/50 text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>UTF-8</span>
                    <span className="font-mono-code">Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {showObfuscated ? (
                      <>
                        <Lock className="w-3.5 h-3.5 text-accent" />
                        <span className="text-accent">Protected</span>
                      </>
                    ) : (
                      <>
                        <Shield className="w-3.5 h-3.5 text-primary animate-pulse" />
                        <span className="text-primary">Encrypting...</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating mini icons */}
              <div className="absolute -top-6 -left-6 animate-float" style={{ animationDelay: '0ms' }}>
                <AnimatedIcon>
                  <Code2 className="w-8 h-8 text-primary" />
                </AnimatedIcon>
              </div>
              <div className="absolute -bottom-6 -right-6 animate-float" style={{ animationDelay: '500ms' }}>
                <AnimatedIcon delay={500}>
                  <Lock className="w-8 h-8 text-accent" />
                </AnimatedIcon>
              </div>
              <div className="absolute top-1/2 -right-10 animate-float" style={{ animationDelay: '750ms' }}>
                <AnimatedIcon delay={750}>
                  <Shield className="w-7 h-7 text-primary" />
                </AnimatedIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

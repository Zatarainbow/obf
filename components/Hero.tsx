import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Code2, Sparkles, Zap } from "lucide-react";
import MatrixRain from "./MatrixRain";
import ParticleField from "./ParticleField";
import GlowingOrb from "./GlowingOrb";

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

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Particle field */}
      <ParticleField />
      
      {/* Background effects */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Glowing orbs */}
      <GlowingOrb className="top-20 left-10" size="lg" color="primary" />
      <GlowingOrb className="bottom-20 right-20" size="xl" color="accent" />
      <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="xl" color="mixed" />
      
      {/* Matrix rain effect */}
      <MatrixRain />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, hsl(270, 100%, 65%) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(270, 100%, 65%) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground group hover:border-primary/50 transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="relative">
                Công cụ bảo vệ mã nguồn hàng đầu Việt Nam
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <Zap className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '500ms' }} />
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Obfuscator</span>
              <br />
              <span className="text-foreground">Python & JavaScript</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              <span className="text-foreground/80 font-medium">Bảo vệ tối đa</span>,{" "}
              <span className="text-foreground/80 font-medium">dễ dàng</span> sử dụng
            </p>

            {/* Description */}
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Bảo vệ mã nguồn Python và JavaScript của bạn khỏi việc sao chép trái phép. 
              Mã hóa, làm rối và bảo mật code một cách chuyên nghiệp.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="relative bg-foreground text-background hover:bg-foreground/90 group overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                <span className="relative flex items-center">
                  Bắt đầu Obfuscate
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="gradient-border group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Xem hướng dẫn</span>
              </Button>
            </div>
          </div>

          {/* Right content - Animated Icons */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Central glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full blur-[60px] animate-pulse" />
              </div>
              
              {/* Python Icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0ms' }}>
                <AnimatedIcon>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3776AB]" fill="currentColor">
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z"/>
                      <path d="M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                    </svg>
                    <span className="text-lg font-bold text-foreground">Python</span>
                  </div>
                </AnimatedIcon>
              </div>

              {/* JavaScript Icon */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '500ms' }}>
                <AnimatedIcon delay={500}>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#F7DF1E]" fill="currentColor">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>
                    <span className="text-lg font-bold text-foreground">JavaScript</span>
                  </div>
                </AnimatedIcon>
              </div>

              {/* Shield Icon - Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '250ms' }}>
                <AnimatedIcon delay={250}>
                  <Shield className="w-10 h-10 text-primary" />
                </AnimatedIcon>
              </div>

              {/* Lock Icon - Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '750ms' }}>
                <AnimatedIcon delay={750}>
                  <Lock className="w-10 h-10 text-accent" />
                </AnimatedIcon>
              </div>

              {/* Code Icon - Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-60 animate-glow" />
                  <div className="relative p-6 rounded-3xl glass border border-border/50">
                    <Code2 className="w-16 h-16 text-foreground animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

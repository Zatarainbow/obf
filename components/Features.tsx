import { Shield, CreditCard, Key, Lock, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "PCI Compliance",
    description: "Achieve and maintain PCI DSS compliance without the complexity. We handle the security infrastructure.",
  },
  {
    icon: CreditCard,
    title: "Payments Optimization",
    description: "Route payments intelligently across multiple PSPs to maximize acceptance rates and minimize costs.",
  },
  {
    icon: Key,
    title: "Network Tokens",
    description: "Replace card numbers with network tokens to improve authorization rates and reduce fraud.",
  },
  {
    icon: Lock,
    title: "Key Management",
    description: "Enterprise-grade key management for secure wallet operations and cryptographic needs.",
  },
  {
    icon: Zap,
    title: "3D Secure",
    description: "Implement strong customer authentication with a seamless, conversion-optimized flow.",
  },
  {
    icon: Globe,
    title: "Card Issuing",
    description: "Launch card programs faster with compliant infrastructure and flexible APIs.",
  },
];

const Features = () => {
  return (
    <section id="products" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Accelerate your business with a{" "}
            <span className="gradient-text">first-class payments stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to secure, optimize, and scale your payment operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 card-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

const GlowingOrb = ({ 
  className = "", 
  size = "lg",
  color = "primary" 
}: { 
  className?: string; 
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "accent" | "mixed";
}) => {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  const colors = {
    primary: "from-primary/30 to-primary/10",
    accent: "from-accent/30 to-accent/10",
    mixed: "from-primary/25 via-accent/20 to-primary/10",
  };

  return (
    <div className={`absolute ${sizes[size]} ${className}`}>
      <div 
        className={`
          absolute inset-0 rounded-full 
          bg-gradient-radial ${colors[color]}
          blur-[80px] animate-pulse
        `}
        style={{ animationDuration: "4s" }}
      />
      <div 
        className={`
          absolute inset-4 rounded-full 
          bg-gradient-radial ${colors[color]}
          blur-[60px] animate-pulse
        `}
        style={{ animationDuration: "3s", animationDelay: "1s" }}
      />
    </div>
  );
};

export default GlowingOrb;

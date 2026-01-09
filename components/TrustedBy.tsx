const logos = ["Rippling", "Cartrawler", "Sorare", "Uniswap", "Sling", "SafetyWing", "Ramp", "Stitch", "XP", "Overwolf", "Duffel", "Humaans"];

const TrustedBy = () => {
  return (
    <section className="py-16 border-t border-border/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8">Được tin dùng bởi các công ty hàng đầu</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {logos.map((logo) => (
            <span key={logo} className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

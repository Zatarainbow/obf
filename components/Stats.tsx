import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: Stat[] = [
  { value: 10, suffix: "M+", label: "Dòng code đã bảo vệ" },
  { value: 99.9, suffix: "%", label: "Tỷ lệ thành công", decimals: 1 },
  { value: 50, suffix: "K+", label: "Lập trình viên tin dùng" },
  { value: 0.8, suffix: "s", label: "Thời gian xử lý TB", decimals: 1 },
];

const useCountUp = (target: number, duration: number = 2000, decimals: number = 0, start: boolean) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
};

const StatItem = ({ stat, start }: { stat: Stat; start: boolean }) => {
  const displayValue = useCountUp(stat.value, 2000, stat.decimals || 0, start);

  return (
    <div className="text-center group">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
        {displayValue}{stat.suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">
        {stat.label}
      </div>
    </div>
  );
};

const Stats = () => {
  const [startCounting, setStartCounting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 rounded-2xl glass border border-border/50"
        >
          {stats.map((stat, index) => (
            <div key={index} className={index < stats.length - 1 ? "lg:border-r border-border/30" : ""}>
              <StatItem stat={stat} start={startCounting} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

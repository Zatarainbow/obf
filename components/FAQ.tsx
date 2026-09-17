import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section id="docs" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground mb-2">
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.faq.heading1} <span className="gradient-text">{t.faq.heading2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.faq.desc}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-primary/30 bg-card card-glow"
                  : "border-border/50 bg-card/50 hover:border-border"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className={`font-medium transition-colors ${openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

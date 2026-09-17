import React from "react";
import { useLanguage } from "@/lib/i18n";

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = "", compact = false }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-lg border border-border/60 bg-secondary/40 p-0.5 text-xs font-mono-code ${className}`}>
      <button
        type="button"
        onClick={() => setLang("vi")}
        className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all ${
          lang === "vi"
            ? "bg-primary text-primary-foreground font-semibold shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Tiếng Việt"
      >
        <span>🇻🇳</span>
        {!compact && <span>VI</span>}
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`flex items-center gap-1 px-2 py-1 rounded-md transition-all ${
          lang === "en"
            ? "bg-primary text-primary-foreground font-semibold shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="English"
      >
        <span>🇬🇧</span>
        {!compact && <span>EN</span>}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

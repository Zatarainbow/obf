import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.preview, href: "#preview" },
    { name: t.nav.features, href: "#products" },
    { name: t.nav.howItWorks, href: "#how-it-works" },
    { name: t.nav.faq, href: "#docs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-b border-border/50">
        <div className="container mx-auto px-3 sm:px-4 py-1.5 sm:py-2 text-center text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
          <span className="text-primary font-semibold">Meowt v5.2:</span>{" "}
          <span className="hidden xs:inline">{t.nav.announcement} </span>
          <button
            onClick={() => navigate("/app")}
            className="text-foreground hover:text-primary transition-colors underline font-medium ml-1"
          >
            {t.nav.tryNow}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="glass border-b border-border/50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <button onClick={() => navigate("/")} className="flex items-center gap-2 group shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_hsl(187_100%_50%/0.3)]">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-semibold text-base sm:text-lg tracking-tight">Meowt</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground font-mono-code">v5.2</span>
              </div>
            </button>

            {/* Desktop / Tablet Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <div className="glass rounded-full py-1 px-1 flex items-center justify-start border border-border/40">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 lg:px-4 py-1.5 text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/60 whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons & Language Switcher for Desktop / Tablet */}
            <div className="hidden md:flex items-center gap-2 lg:gap-2.5 shrink-0">
              <LanguageSwitcher />
              <Button
                size="sm"
                onClick={() => navigate("/app")}
                className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_20px_hsl(187_100%_50%/0.4)] text-xs lg:text-sm h-9 px-3.5 lg:px-4"
              >
                {t.nav.startObf}
              </Button>
            </div>

            {/* Mobile menu button & Compact Lang Switcher */}
            <div className="md:hidden flex items-center gap-1.5 sm:gap-2">
              <LanguageSwitcher compact />
              <button
                className="p-2 rounded-lg hover:bg-secondary/60 text-foreground transition-colors touch-manipulation"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden glass border-t border-border/50 animate-fadeIn bg-background/95 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center min-h-[44px] px-4 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-xl transition-colors text-sm font-medium touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 space-y-2.5 border-t border-border/50">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent text-white h-11 font-semibold text-sm shadow-[0_0_20px_hsl(187_100%_50%/0.3)] touch-manipulation"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/app");
                  }}
                >
                  {t.nav.startObf}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

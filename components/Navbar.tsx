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
        <div className="container mx-auto px-4 py-2 text-center text-sm text-muted-foreground">
          <span className="text-primary">Meowt v5.2:</span> {t.nav.announcement}{" "}
          <button onClick={() => navigate("/app")} className="text-foreground hover:text-primary transition-colors underline">
            {t.nav.tryNow}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => navigate("/")} className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-lg">Meowt</span>
                <span className="text-xs text-muted-foreground font-mono-code">v5.2</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <div className="glass rounded-full py-1 gap-1 px-[4px] flex items-center justify-start">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons & Language Switcher */}
            <div className="hidden md:flex items-center gap-2.5">
              <LanguageSwitcher />
              <Button
                size="sm"
                onClick={() => navigate("/app")}
                className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_20px_hsl(187_100%_50%/0.4)]"
              >
                {t.nav.startObf}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher compact />
              <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass border-t border-border/50 animate-fadeIn">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-2 border-t border-border/50">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent text-white"
                  onClick={() => { setIsOpen(false); navigate("/app"); }}
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

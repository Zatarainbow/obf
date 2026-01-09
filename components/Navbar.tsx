import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: "Products",
    href: "#products"
  }, {
    name: "Customers",
    href: "#customers"
  }, {
    name: "Pricing",
    href: "#pricing"
  }, {
    name: "Docs",
    href: "#docs"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-b border-border/50">
        
      </div>

      {/* Main navbar */}
      <div className="glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">​N</span>
              </div>
              <span className="font-semibold text-lg">​Trần  Bảo Ngọc    </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <div className="glass rounded-full py-1 gap-1 px-[4px] flex items-center justify-start">
                {navLinks.map(link => <a key={link.name} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50">
                    {link.name}
                  </a>)}
              </div>
            </div>

            {/* CTA Buttons */}
            

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden glass border-t border-border/50 animate-fadeIn">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map(link => <a key={link.name} href={link.href} className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors">
                  {link.name}
                </a>)}
              <div className="pt-4 space-y-2 border-t border-border/50">
                <Button variant="ghost" className="w-full justify-start">
                  Log in
                </Button>
                <Button variant="outline" className="w-full gradient-border">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;
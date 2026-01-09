const footerLinks = {
  Products: ["PCI Compliance", "Network Tokens", "3D Secure", "Card Issuing", "BIN Lookup"],
  Solutions: ["Multi-PSP", "Card Issuing", "Wallet Management", "Enterprise"],
  Resources: ["Documentation", "API Reference", "Blog", "Changelog"],
  Company: ["About", "Careers", "Customers", "Contact"]
};
const Footer = () => {
  return <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Evervault. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
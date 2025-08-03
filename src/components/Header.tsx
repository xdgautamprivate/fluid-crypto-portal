import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Products",
      items: ["Exchange", "Buy Crypto", "Sell Crypto", "Bridge", "Crypto Loans"]
    },
    {
      label: "Business",
      items: ["Exchange Listing", "Affiliate Program", "API"]
    },
    {
      label: "Support",
      items: ["How it Works", "FAQ", "Contact Support"]
    },
    {
      label: "About",
      items: ["About Us", "News", "Press", "Partners", "Contacts"]
    },
    {
      label: "Explore",
      items: ["Blog", "Academy", "Price Predictions", "Calculator"]
    }
  ];

  return (
    <header className="relative z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
            <span className="text-xl font-bold">
              SWAP<span className="text-accent">SPACE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-card border border-border shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              EN
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Account
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 py-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <p className="font-medium text-sm text-foreground mb-2">{item.label}</p>
                  <div className="pl-4 space-y-1">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navItems = [
    { key: "home", label: t.nav.home },
    { key: "about", label: t.nav.about },
    { key: "services", label: t.nav.services },
    { key: "testimonials", label: t.nav.testimonials },
    { key: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "he" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button onClick={() => scrollTo("home")} className="font-display text-xl font-semibold text-primary">
          {t.nav.brand}
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className={`flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => scrollTo(item.key)}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors border border-border rounded-full px-3 py-1.5"
          >
            <Globe size={16} />
            <span>{language === "en" ? "עברית" : "English"}</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            {language === "en" ? "עב" : "EN"}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => scrollTo(item.key)}
                  className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

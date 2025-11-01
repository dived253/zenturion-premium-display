import { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/zenturion-logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Über Uns', href: '#about' },
    { label: 'Flotte', href: '#fleet' },
    { label: 'Bewertungen', href: '#testimonials' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img src={logoImage} alt="ZENTURION Logo" className="h-12 w-12 rounded-full shadow-glow" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">ZENTURION</span>
              <span className="text-xs text-muted-foreground">Premium Car Rental</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://instagram.com/zenturion.autovermietung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button size="sm" className="bg-gradient-gold border-0 shadow-glow">
              Jetzt Anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com/zenturion.autovermietung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <Button size="sm" className="bg-gradient-gold border-0">
                Jetzt Anfragen
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

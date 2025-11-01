import { Instagram, Mail, Phone } from 'lucide-react';
import logoImage from '@/assets/zenturion-logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="ZENTURION Logo" className="h-12 w-12 rounded-full shadow-glow" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">ZENTURION</span>
                <span className="text-xs text-muted-foreground">Premium Car Rental</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Exklusive Mietwagen Vermittlung für höchste Ansprüche. 
              Premium Cars – NRW & Umgebung.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/zenturion.autovermietung"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-smooth"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-smooth" />
              </a>
              <a
                href="mailto:info@zenturion.de"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-smooth"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-smooth" />
              </a>
              <a
                href="tel:+49123456789"
                className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-smooth"
              >
                <Phone className="h-5 w-5 text-muted-foreground hover:text-primary transition-smooth" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                  Über Uns
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-muted-foreground hover:text-primary transition-smooth">
                  Flotte
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-smooth">
                  Bewertungen
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Mietbedingungen
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} ZENTURION Premium Car Rental. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

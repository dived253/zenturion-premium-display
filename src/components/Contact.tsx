import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Anfrage gesendet!',
      description: 'Wir melden uns schnellstmöglich bei Ihnen.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const whatsappNumber = '+49123456789'; // Replace with actual number
  const whatsappMessage = encodeURIComponent('Hallo, ich interessiere mich für eine Premium-Fahrzeugvermietung bei ZENTURION.');

  return (
    <section id="contact" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Jetzt <span className="text-gradient">Anfragen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kontaktieren Sie uns für Ihre exklusive Fahrzeugvermietung
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ihr Name"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">E-Mail *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ihre@email.de"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Telefon</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+49 ..."
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Nachricht *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Welches Fahrzeug interessiert Sie? Wann benötigen Sie es?"
                  className="bg-background border-border min-h-32"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-gold border-0 text-black font-semibold hover:scale-105 transition-smooth">
                <Send className="mr-2 h-4 w-4" />
                Anfrage senden
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Quick Contact Buttons */}
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Schnellkontakt</h3>
              <div className="space-y-3">
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white border-0"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Anfrage
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-black"
                  onClick={() => window.open('https://www.instagram.com/zenturion.autovermietung', '_blank')}
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram Nachricht
                </Button>
              </div>
            </Card>

            {/* Contact Details */}
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Standort</div>
                    <div className="text-muted-foreground">NRW & Umgebung</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Telefon</div>
                    <a href={`tel:${whatsappNumber}`} className="text-muted-foreground hover:text-primary transition-smooth">
                      +49 123 456 789
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">E-Mail</div>
                    <a href="mailto:info@zenturion.de" className="text-muted-foreground hover:text-primary transition-smooth">
                      info@zenturion.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Instagram className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Instagram</div>
                    <a
                      href="https://www.instagram.com/zenturion.autovermietung"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      @zenturion.autovermietung
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Geschäftszeiten</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Montag - Freitag</span>
                  <span className="font-medium text-foreground">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span className="font-medium text-foreground">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag</span>
                  <span className="font-medium text-foreground">Nach Vereinbarung</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

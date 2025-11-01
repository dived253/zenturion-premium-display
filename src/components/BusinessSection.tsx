import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Briefcase, Calendar, ArrowRight } from 'lucide-react';

const BusinessSection = () => {
  const businessServices = [
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Beeindrucken Sie Ihre Geschäftspartner mit exklusiven Fahrzeugen bei Firmenevents.',
    },
    {
      icon: Briefcase,
      title: 'Geschäftsreisen',
      description: 'Stilvoller Transport für Führungskräfte und wichtige Geschäftsreisen.',
    },
    {
      icon: Calendar,
      title: 'Langzeitmiete',
      description: 'Flexible Lösungen für längerfristige Projekte und Kooperationen.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Business</span> Lösungen
          </h2>
          <p className="text-lg text-muted-foreground">
            Maßgeschneiderte Premium-Fahrzeuglösungen für Ihr Unternehmen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {businessServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border p-6 text-center hover:border-primary transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-dark border-border p-8 md:p-12 max-w-4xl mx-auto text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Interessiert an einer <span className="text-gradient">Business-Partnerschaft</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für individuelle Angebote und langfristige Kooperationen. 
            Wir erstellen maßgeschneiderte Lösungen für Ihr Unternehmen.
          </p>
          <Button className="bg-gradient-gold border-0 text-black font-semibold hover:scale-105 transition-smooth group">
            Business Anfrage senden
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default BusinessSection;

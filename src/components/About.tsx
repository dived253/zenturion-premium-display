import { Shield, Award, Clock, HeartHandshake } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Höchste Qualität',
      description: 'Exklusive Premium-Fahrzeuge in perfektem Zustand',
    },
    {
      icon: Award,
      title: 'Exzellenter Service',
      description: 'Persönliche Beratung und VIP-Betreuung',
    },
    {
      icon: Clock,
      title: 'Flexible Mietdauer',
      description: 'Stunden-, Tages- oder Wochenvermietung möglich',
    },
    {
      icon: HeartHandshake,
      title: 'Vertrauen & Diskretion',
      description: 'Seriöse Abwicklung mit höchster Vertraulichkeit',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Über <span className="text-gradient">ZENTURION</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir sind Ihr exklusiver Partner für Premium-Fahrzeugvermietung in NRW und Umgebung. 
            Mit jahrelanger Erfahrung und einer Leidenschaft für Luxusautomobile bieten wir Ihnen 
            Zugang zu den begehrtesten Fahrzeugen der Welt. Von Rolls-Royce über Lamborghini bis 
            zu Mercedes G-Klasse – bei uns finden Sie das perfekte Fahrzeug für jeden besonderen Anlass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border p-6 hover:border-primary transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card border border-border rounded-lg">
            <div>
              <div className="text-3xl font-bold text-gradient">359+</div>
              <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-gradient">10+</div>
              <div className="text-sm text-muted-foreground">Premium Fahrzeuge</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">Zufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

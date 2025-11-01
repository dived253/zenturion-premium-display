import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gauge, Zap, Users } from 'lucide-react';
import rollsRoyceImage from '@/assets/rolls-royce-dark.jpg';
import lamborghiniImage from '@/assets/lamborghini-urus-yellow.jpg';
import mercedesImage from '@/assets/mercedes-g-class-hero.jpg';
import audiImage from '@/assets/audi-rs6-dark.jpg';

const Fleet = () => {
  const cars = [
    {
      name: 'Rolls-Royce Ghost',
      category: 'Luxury Sedan',
      image: rollsRoyceImage,
      specs: {
        power: '571 PS',
        acceleration: '4.8s',
        seats: '4-5',
      },
      description: 'Höchster Luxus und Eleganz. Der Inbegriff automobiler Perfektion.',
    },
    {
      name: 'Lamborghini Urus',
      category: 'Super SUV',
      image: lamborghiniImage,
      specs: {
        power: '650 PS',
        acceleration: '3.6s',
        seats: '4-5',
      },
      description: 'Italienische Leidenschaft trifft auf SUV-Vielseitigkeit.',
      featured: true,
    },
    {
      name: 'Mercedes G63 AMG',
      category: 'Luxury SUV',
      image: mercedesImage,
      specs: {
        power: '585 PS',
        acceleration: '4.5s',
        seats: '5',
      },
      description: 'Unverwechselbare Ikone mit brutaler Performance.',
    },
    {
      name: 'Audi RS6 Avant',
      category: 'Performance Wagon',
      image: audiImage,
      specs: {
        power: '600 PS',
        acceleration: '3.6s',
        seats: '5',
      },
      description: 'Sportliche Eleganz mit unglaublicher Alltagstauglichkeit.',
    },
  ];

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere <span className="text-gradient">Premium Flotte</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entdecken Sie unsere exklusive Auswahl an Premium-Fahrzeugen. 
            Jedes Auto wird persönlich ausgewählt und in makellosem Zustand gehalten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cars.map((car, index) => (
            <Card
              key={index}
              className={`group bg-card border-border overflow-hidden hover:border-primary transition-smooth animate-fade-in ${
                car.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`grid ${car.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {car.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-gold rounded-full text-black text-sm font-semibold">
                      Bestseller
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-primary font-semibold mb-2">{car.category}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{car.name}</h3>
                    <p className="text-muted-foreground mb-6">{car.description}</p>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Leistung</div>
                          <div className="font-semibold text-foreground">{car.specs.power}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">0-100 km/h</div>
                          <div className="font-semibold text-foreground">{car.specs.acceleration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Sitze</div>
                          <div className="font-semibold text-foreground">{car.specs.seats}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-gold border-0 text-black font-semibold hover:scale-105 transition-smooth group">
                    Jetzt Anfragen
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Weitere exklusive Fahrzeuge auf Anfrage verfügbar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fleet;

import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael R.',
      role: 'Geschäftsführer',
      rating: 5,
      text: 'Absolut professioneller Service! Der Lamborghini Urus war in perfektem Zustand und die Übergabe reibungslos. Für besondere Anlässe die perfekte Wahl.',
    },
    {
      name: 'Sarah K.',
      role: 'Event Managerin',
      rating: 5,
      text: 'Für unser Firmen-Event war die G-Klasse die perfekte Wahl. Diskretion und Service auf höchstem Niveau. Sehr empfehlenswert!',
    },
    {
      name: 'Thomas B.',
      role: 'Unternehmer',
      rating: 5,
      text: 'Der Rolls-Royce Ghost hat für unvergessliche Momente gesorgt. Die Beratung war exzellent und der gesamte Prozess völlig unkompliziert.',
    },
    {
      name: 'Julia M.',
      role: 'Marketing Direktorin',
      rating: 5,
      text: 'Schnelle Reaktion, faire Preise und absolute Top-Qualität. Wir haben schon mehrfach bei ZENTURION gemietet und waren jedes Mal begeistert.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Was unsere <span className="text-gradient">Kunden sagen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertrauen Sie auf die Erfahrungen unserer zufriedenen VIP-Kunden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border p-8 hover:border-primary transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center text-black font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

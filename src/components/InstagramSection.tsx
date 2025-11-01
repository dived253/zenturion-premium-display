import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rollsRoyceImage from '@/assets/rolls-royce-ghost.jpg';
import lamborghiniImage from '@/assets/lamborghini-urus.jpg';
import mercedesImage from '@/assets/mercedes-g-class.jpg';
import audiImage from '@/assets/audi-rs6.jpg';
import heroImage from '@/assets/hero-rolls-royce.jpg';

const InstagramSection = () => {
  const instagramImages = [
    rollsRoyceImage,
    lamborghiniImage,
    mercedesImage,
    audiImage,
    heroImage,
    lamborghiniImage,
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Folgen Sie uns auf <span className="text-gradient">Instagram</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            @zenturion.autovermietung
          </p>
          <Button 
            className="bg-gradient-gold border-0 text-black font-semibold hover:scale-105 transition-smooth"
            onClick={() => window.open('https://instagram.com/zenturion.autovermietung', '_blank')}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Auf Instagram folgen
          </Button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/zenturion.autovermietung"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-smooth flex items-center justify-center">
                <Instagram className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-smooth transform scale-75 group-hover:scale-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

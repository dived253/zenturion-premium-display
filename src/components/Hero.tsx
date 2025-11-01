import { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rollsRoyceImage from '@/assets/rolls-royce-dark.jpg';
import lamborghiniImage from '@/assets/lamborghini-urus-yellow.jpg';
import mercedesImage from '@/assets/mercedes-g-class-hero.jpg';
import audiDarkImage from '@/assets/audi-rs6-dark.jpg';
import audiWhiteImage from '@/assets/audi-rs6-white.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [rollsRoyceImage, lamborghiniImage, mercedesImage, audiDarkImage, audiWhiteImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block text-foreground">ZENTURION</span>
            <span className="block text-gradient mt-2">PREMIUM</span>
            <span className="block text-foreground mt-2">CAR RENTAL</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Exklusive Mietwagen Vermittlung für höchste Ansprüche<br />
            Premium Cars – NRW & Umgebung
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-gold border-0 text-black font-semibold shadow-glow hover:scale-105 transition-smooth group"
            >
              Jetzt anfragen & stilvoll fahren
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-black transition-smooth group"
            >
              <Play className="mr-2 h-4 w-4" />
              Flotte ansehen
            </Button>
          </div>

          {/* Image Indicators */}
          <div className="flex items-center justify-center gap-2 pt-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentImageIndex ? 'w-12 bg-primary' : 'w-6 bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

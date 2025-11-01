import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import InstagramSection from '@/components/InstagramSection';
import Contact from '@/components/Contact';
import BusinessSection from '@/components/BusinessSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Testimonials />
        <InstagramSection />
        <BusinessSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

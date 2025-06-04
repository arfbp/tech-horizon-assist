
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      ref={heroAnimation.elementRef}
      className={`py-24 px-4 text-center hero-bg relative overflow-hidden transition-all duration-1000 ${
        heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-5xl relative">
        <div className={`transition-all duration-1000 delay-300 ${
          heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Jasa Install Ulang Laptop & Komputer,{' '}
            <span className="text-pintu-gradient">Troubleshoot & Cloud Server</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Layanan profesional untuk semua kebutuhan teknologi Anda. Dari install ulang OS hingga setup server homelab, kami siap membantu dengan respon cepat dan bergaransi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="pintu-button-primary text-lg px-10 py-6 rounded-xl pintu-glow-strong font-semibold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Clock className="h-5 w-5 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="bg-dark-800/10 backdrop-blur-sm border-2 border-pintu-400/50 text-pintu-400 hover:bg-pintu-500 hover:text-dark-900 transition-all duration-300 text-lg px-10 py-6 rounded-xl font-semibold">
              Lihat Layanan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      ref={heroAnimation.elementRef}
      className={`py-24 px-4 text-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden transition-all duration-1000 ${
        heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-5xl relative">
        <div className={`transition-all duration-1000 delay-300 ${
          heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-gray-800">
            Jasa Install Ulang Laptop & Komputer,{' '}
            <span className="bg-gradient-to-r from-pintu-600 to-pintu-500 bg-clip-text text-transparent">Troubleshoot & Cloud Server</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Layanan profesional untuk semua kebutuhan teknologi Anda. Dari install ulang OS hingga setup server homelab, kami siap membantu dengan respon cepat dan bergaransi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-pintu-600 to-pintu-500 text-white hover:from-pintu-700 hover:to-pintu-600 text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all font-semibold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Clock className="h-5 w-5 mr-2" />
              Konsultasi Gratis
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-pintu-500 text-pintu-700 hover:bg-pintu-50 text-lg px-10 py-6 rounded-xl font-semibold">
              Lihat Layanan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

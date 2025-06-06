
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ComparisonSection = () => {
  const comparisonAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={comparisonAnimation.elementRef}
      className={`py-24 px-4 bg-white relative overflow-hidden transition-all duration-1000 ${
        comparisonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-5xl relative">
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          comparisonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Remote vs On-Site Support</h2>
          <p className="text-gray-600 text-xl font-medium">Pilih metode yang sesuai dengan kebutuhan Anda</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <Card className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-pintu-300 transition-all duration-500 shadow-md ${
            comparisonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transitionDelay: comparisonAnimation.isVisible ? '400ms' : '0ms',
            transitionDuration: '800ms'
          }}>
            <CardContent className="p-0">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 mr-4">
                  <Zap className="h-8 w-8 text-pintu-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Remote Support</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {["Bantuan instan dalam menit", "Biaya lebih ekonomis", "Cocok untuk troubleshooting software", "Aman dengan enkripsi end-to-end"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-pintu-600 mr-4 flex-shrink-0" />
                    <span className="font-medium text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/remote-support">
                <Button className="bg-gradient-to-r from-pintu-600 to-pintu-500 text-white hover:from-pintu-700 hover:to-pintu-600 w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Mulai Remote Session
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-pintu-300 transition-all duration-500 shadow-md ${
            comparisonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transitionDelay: comparisonAnimation.isVisible ? '600ms' : '0ms',
            transitionDuration: '800ms'
          }}>
            <CardContent className="p-0">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 mr-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">On-Site Support</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {["Penanganan hardware langsung", "Install ulang OS & software", "Upgrade komponen hardware", "Setup server & network"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-pintu-600 mr-4 flex-shrink-0" />
                    <span className="font-medium text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/6287859114643?text=Halo,%20saya%20ingin%20membuat%20jadwal%20kunjungan%20on-site%20support" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-pintu-600 to-pintu-500 text-white hover:from-pintu-700 hover:to-pintu-600 w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Buat Jadwal Kunjungan
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

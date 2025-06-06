
import { Zap, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhyChooseUsSection = () => {
  const aboutAnimation = useScrollAnimation({ threshold: 0.2 });

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Respon Cepat",
      description: "Layanan dalam 24 jam, emergency support tersedia untuk masalah urgent"
    },
    {
      icon: <Award className="h-8 w-8 text-pintu-600" />,
      title: "Berpengalaman",
      description: "Tim teknisi berpengalaman 7+ tahun di bidang IT"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Bergaransi",
      description: (
        <div>
          Garansi layanan 30 hari untuk semua jenis perbaikan dan instalasi
          <div className="text-xs mt-1 opacity-75">
            <Link to="/TnC" className="underline hover:text-pintu-600 transition-colors">
              *syarat dan ketentuan berlaku
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      id="about" 
      ref={aboutAnimation.elementRef}
      className={`py-24 px-4 bg-white transition-all duration-1000 ${
        aboutAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl relative">
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          aboutAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Mengapa Pilih Kami?</h2>
          <p className="text-gray-600 text-xl font-medium">Komitmen kami untuk memberikan layanan terbaik</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-800 ${
                aboutAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: aboutAnimation.isVisible ? `${400 + index * 150}ms` : '0ms'
              }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-2xl shadow-lg mb-8 border border-gray-200">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
              <div className="text-gray-600 leading-relaxed font-medium">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;


import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Settings, Computer, HardDrive, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const servicesAnimation = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      icon: <Laptop className="h-10 w-10 text-pintu-400" />,
      title: "Install Ulang Windows & Linux",
      description: "Reinstallasi OS laptop, PC, dan MacBook dengan sistem Windows, Linux, atau macOS. Proses cepat dan aman.",
      features: ["Windows 10/11", "Ubuntu/Linux Mint", "macOS Support"]
    },
    {
      icon: <Settings className="h-10 w-10 text-electric" />,
      title: "Remote Troubleshooting",
      description: "Bantuan remote untuk mengatasi masalah software dan konfigurasi sistem secara real-time.",
      features: ["Akses Remote Aman", "Diagnosis Real-time", "Panduan Step-by-step"]
    },
    {
      icon: <Computer className="h-10 w-10 text-pintu-300" />,
      title: "Setup Server Homelab",
      description: "Konfigurasi personal cloud, NAS, dan self-hosted services untuk kebutuhan digital rumah modern.",
      features: ["Personal Cloud", "Media Server", "Home Automation"]
    },
    {
      icon: <HardDrive className="h-10 w-10 text-success-DEFAULT" />,
      title: "Upgrade Hardware",
      description: "Peningkatan performa dengan upgrade RAM, SSD, dan komponen hardware terbaru.",
      features: ["RAM & SSD Upgrade", "Peripheral Setup", "Performance Tuning"]
    }
  ];

  return (
    <section 
      id="services" 
      ref={servicesAnimation.elementRef}
      className={`py-24 px-4 tech-bg transition-all duration-1000 ${
        servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&auto=format&q=80')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto max-w-7xl relative">
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Layanan Profesional Kami</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto font-medium">
            Solusi lengkap untuk semua kebutuhan teknologi Anda dengan standar profesional tertinggi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-dark-800/70 backdrop-blur-xl border border-pintu-500/30 rounded-2xl p-8 hover:bg-dark-700/80 hover:border-pintu-400/50 transition-all duration-500 shadow-lg ${
                servicesAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: servicesAnimation.isVisible ? `${400 + index * 100}ms` : '0ms',
                transitionDuration: '800ms'
              }}
            >
              <CardContent className="p-0">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 p-4 rounded-2xl bg-gradient-to-br from-pintu-500/10 to-pintu-600/5 shadow-inner border border-pintu-500/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <Check className="h-4 w-4 text-pintu-400 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

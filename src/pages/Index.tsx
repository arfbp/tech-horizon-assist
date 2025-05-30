
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Laptop, 
  Settings, 
  Zap, 
  HardDrive, 
  Users, 
  Check, 
  Phone,
  Computer
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Kami akan menghubungi Anda dalam 24 jam.",
    });
    setFormData({ name: '', email: '', issue: '' });
  };

  const services = [
    {
      icon: <Laptop className="h-8 w-8 text-tech-blue" />,
      title: "Install Ulang Windows & Linux",
      description: "Reinstallasi OS laptop, PC, dan MacBook dengan sistem Windows, Linux, atau macOS",
      features: ["Windows 10/11", "Ubuntu/Linux Mint", "macOS Support"]
    },
    {
      icon: <Settings className="h-8 w-8 text-tech-blue" />,
      title: "Remote Troubleshooting",
      description: "Bantuan remote untuk mengatasi masalah software dan konfigurasi sistem",
      features: ["Akses Remote Aman", "Diagnosis Real-time", "Panduan Step-by-step"]
    },
    {
      icon: <Computer className="h-8 w-8 text-tech-blue" />,
      title: "Setup Server Homelab",
      description: "Konfigurasi personal cloud, NAS, dan self-hosted services di rumah",
      features: ["Personal Cloud", "Media Server", "Home Automation"]
    },
    {
      icon: <HardDrive className="h-8 w-8 text-tech-blue" />,
      title: "Upgrade Hardware",
      description: "Peningkatan performa dengan upgrade RAM, SSD, dan komponen lainnya",
      features: ["RAM & SSD Upgrade", "Peripheral Setup", "Performance Tuning"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-6 w-6 text-tech-green" />,
      title: "Respon Cepat",
      description: "Layanan dalam 24 jam, emergency support tersedia"
    },
    {
      icon: <Users className="h-6 w-6 text-tech-green" />,
      title: "Berpengalaman",
      description: "Tim teknisi bersertifikat dengan pengalaman 5+ tahun"
    },
    {
      icon: <Check className="h-6 w-6 text-tech-green" />,
      title: "Bergaransi",
      description: "Garansi layanan 30 hari untuk semua jenis perbaikan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-tech-gray to-white">
      {/* Header */}
      <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">TechSupport Pro</div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-tech-blue transition-colors">Layanan</a>
              <a href="#about" className="text-gray-600 hover:text-tech-blue transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-600 hover:text-tech-blue transition-colors">Kontak</a>
            </div>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <Button className="bg-tech-green hover:bg-tech-green/90 text-black font-medium">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-6 border-tech-blue/30 text-tech-blue">
                Profesional & Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Jasa Install Ulang Laptop & Komputer,{' '}
                <span className="gradient-text">Troubleshoot & Cloud Server</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Layanan profesional untuk semua kebutuhan teknologi Anda. Dari install ulang OS hingga setup server homelab, kami siap membantu dengan respon cepat dan bergaransi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-tech-blue hover:bg-tech-blue/90 text-lg px-8 py-6 glow-effect"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Konsultasi Gratis
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Lihat Layanan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Profesional Kami</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Solusi lengkap untuk semua kebutuhan teknologi Anda dengan standar profesional tertinggi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="tech-card group animate-fade-in hover:animate-float">
                  <CardContent className="p-6">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <Check className="h-3 w-3 text-tech-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-20 px-4 bg-tech-gray/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Pilih Kami?</h2>
              <p className="text-gray-600 text-lg">Komitmen kami untuk memberikan layanan terbaik</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Remote vs On-Site Support</h2>
              <p className="text-gray-600 text-lg">Pilih metode yang sesuai dengan kebutuhan Anda</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="tech-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="h-8 w-8 text-tech-blue mr-3" />
                    <h3 className="text-2xl font-bold">Remote Support</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-tech-green mr-3" />
                      Bantuan instan dalam menit
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-tech-green mr-3" />
                      Biaya lebih ekonomis
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-tech-green mr-3" />
                      Cocok untuk troubleshooting software
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-tech-green mr-3" />
                      Aman dengan enkripsi end-to-end
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full border-tech-blue text-tech-blue">
                    Mulai Remote Session
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="tech-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Users className="h-8 w-8 text-tech-green mr-3" />
                    <h3 className="text-2xl font-bold">On-Site Support</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-tech-green mr-3" />
                      Penanganan hardware langsung
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-tech-green mr-3" />
                      Install ulang OS & software
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-tech-green mr-3" />
                      Upgrade komponen hardware
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-tech-green mr-3" />
                      Setup server & network
                    </li>
                  </ul>
                  <Button className="w-full bg-tech-green hover:bg-tech-green/90 text-black">
                    Buat Jadwal Kunjungan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-tech-gray/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 text-lg">Konsultasi gratis untuk menentukan solusi terbaik</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-tech-blue mr-3" />
                    <span>+62 812-3456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Computer className="h-5 w-5 text-tech-blue mr-3" />
                    <span>support@techsupportpro.id</span>
                  </div>
                  <div className="flex items-start">
                    <Settings className="h-5 w-5 text-tech-blue mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Area Layanan</p>
                      <p className="text-gray-600">Jakarta & sekitarnya</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-sm text-gray-600 mb-4">Jam Operasional:</p>
                  <p className="text-sm">Senin - Jumat: 08:00 - 20:00</p>
                  <p className="text-sm">Sabtu: 09:00 - 17:00</p>
                  <p className="text-sm">Minggu: Emergency only</p>
                </div>
              </div>
              
              <Card className="tech-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Nama Lengkap"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="border-gray-200 focus:border-tech-blue"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="border-gray-200 focus:border-tech-blue"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Jelaskan masalah atau kebutuhan Anda..."
                        value={formData.issue}
                        onChange={(e) => setFormData({...formData, issue: e.target.value})}
                        required
                        rows={4}
                        className="border-gray-200 focus:border-tech-blue"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-tech-blue hover:bg-tech-blue/90">
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">TechSupport Pro</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Solusi profesional untuk semua kebutuhan teknologi Anda. Melayani area Jakarta dan sekitarnya.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-tech-blue transition-colors">Install Ulang OS</a></li>
                <li><a href="#" className="hover:text-tech-blue transition-colors">Remote Support</a></li>
                <li><a href="#" className="hover:text-tech-blue transition-colors">Hardware Upgrade</a></li>
                <li><a href="#" className="hover:text-tech-blue transition-colors">Server Setup</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+62 812-3456-7890</li>
                <li>support@techsupportpro.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">WhatsApp</h4>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-tech-green text-black px-4 py-2 rounded-lg font-medium hover:bg-tech-green/90 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Chat Sekarang
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 TechSupport Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

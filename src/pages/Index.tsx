
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Laptop, Settings, Zap, HardDrive, Users, Check, Phone, Computer, Shield, Clock, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll animation hooks for each section
  const heroAnimation = useScrollAnimation({ threshold: 0.3 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.2 });
  const aboutAnimation = useScrollAnimation({ threshold: 0.2 });
  const comparisonAnimation = useScrollAnimation({ threshold: 0.2 });
  const contactAnimation = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          issue: formData.issue
        }
      });

      if (error) throw error;

      toast({
        title: "Pesan Berhasil Dikirim!",
        description: "Pesan Anda telah diterima dan akan dibalas oleh admin dalam waktu dekat. Untuk respon cepat, hubungi WhatsApp di +62 878-5911-4643",
        duration: 6000
      });
      
      setFormData({
        name: '',
        email: '',
        issue: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Pesan Berhasil Dikirim!",
        description: "Pesan Anda telah diterima dan akan dibalas oleh admin dalam waktu dekat. Untuk respon cepat, hubungi WhatsApp di +62 878-5911-4643",
        variant: "default",
        duration: 6000
      });
      
      setFormData({
        name: '',
        email: '',
        issue: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8 text-electric" />,
      title: "Respon Cepat",
      description: "Layanan dalam 24 jam, emergency support tersedia untuk masalah urgent"
    },
    {
      icon: <Award className="h-8 w-8 text-pintu-400" />,
      title: "Berpengalaman",
      description: "Tim teknisi berpengalaman 7+ tahun di bidang IT"
    },
    {
      icon: <Shield className="h-8 w-8 text-success-DEFAULT" />,
      title: "Bergaransi",
      description: (
        <div>
          Garansi layanan 30 hari untuk semua jenis perbaikan dan instalasi
          <div className="text-xs mt-1 opacity-75">
            <Link to="/TnC" className="underline hover:text-pintu-300 transition-colors">
              *syarat dan ketentuan berlaku
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-dark-700/60 bg-dark-800/95 backdrop-blur-xl sticky top-0 z-50 pintu-glow">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold font-mono text-pintu-gradient bg-transparent">InstallUlang</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-pintu-400 hover:text-pintu-300 transition-colors font-medium">Layanan</a>
              <a href="#about" className="text-pintu-400 hover:text-pintu-300 transition-colors font-medium">Tentang</a>
              <a href="#contact" className="text-pintu-400 hover:text-pintu-300 transition-colors font-medium">Kontak</a>
            </div>
            <a href="https://wa.me/6287859114643" target="_blank" rel="noopener noreferrer">
              <Button className="pintu-button-primary rounded-xl px-6 py-2">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
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

        {/* Services Section */}
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

        {/* Why Choose Us */}
        <section 
          id="about" 
          ref={aboutAnimation.elementRef}
          className={`py-24 px-4 section-bg transition-all duration-1000 ${
            aboutAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop&auto=format&q=80')] opacity-5 bg-cover bg-center"></div>
          <div className="container mx-auto max-w-6xl relative">
            <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
              aboutAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Mengapa Pilih Kami?</h2>
              <p className="text-gray-300 text-xl font-medium">Komitmen kami untuk memberikan layanan terbaik</p>
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
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-dark-700/90 backdrop-blur-sm rounded-2xl shadow-lg mb-8 pintu-glow border border-dark-600/50">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <div className="text-gray-300 leading-relaxed font-medium">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section 
          ref={comparisonAnimation.elementRef}
          className={`py-24 px-4 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden transition-all duration-1000 ${
            comparisonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop&auto=format&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="container mx-auto max-w-5xl relative">
            <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
              comparisonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Remote vs On-Site Support</h2>
              <p className="text-gray-300 text-xl font-medium">Pilih metode yang sesuai dengan kebutuhan Anda</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <Card className={`bg-dark-800/70 backdrop-blur-xl border border-electric/30 rounded-2xl p-8 hover:bg-dark-700/80 hover:border-electric/50 transition-all duration-500 shadow-lg ${
                comparisonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: comparisonAnimation.isVisible ? '400ms' : '0ms',
                transitionDuration: '800ms'
              }}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-electric to-pintu-500 text-dark-900 mr-4 shadow-lg">
                      <Zap className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Remote Support</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["Bantuan instan dalam menit", "Biaya lebih ekonomis", "Cocok untuk troubleshooting software", "Aman dengan enkripsi end-to-end"].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-pintu-400 mr-4 flex-shrink-0" />
                        <span className="font-medium text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/remote-support">
                    <Button className="bg-gradient-to-r from-electric to-pintu-500 hover:from-pintu-500 hover:to-success-light text-dark-900 w-full py-4 text-lg font-semibold rounded-xl shadow-lg">
                      Mulai Remote Session
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className={`bg-dark-800/70 backdrop-blur-xl border border-success-DEFAULT/30 rounded-2xl p-8 hover:bg-dark-700/80 hover:border-success-DEFAULT/50 transition-all duration-500 shadow-lg ${
                comparisonAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: comparisonAnimation.isVisible ? '600ms' : '0ms',
                transitionDuration: '800ms'
              }}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-success-DEFAULT to-success-dark text-white mr-4 shadow-lg">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">On-Site Support</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["Penanganan hardware langsung", "Install ulang OS & software", "Upgrade komponen hardware", "Setup server & network"].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-pintu-400 mr-4 flex-shrink-0" />
                        <span className="font-medium text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/6287859114643?text=Halo,%20saya%20ingin%20membuat%20jadwal%20kunjungan%20on-site%20support" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-success-DEFAULT to-success-dark hover:from-success-dark hover:to-pintu-500 text-white w-full py-4 text-lg font-semibold rounded-xl shadow-lg">
                      Buat Jadwal Kunjungan
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          ref={contactAnimation.elementRef}
          className={`py-24 px-4 section-bg transition-all duration-1000 ${
            contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1920&h=1080&fit=crop&auto=format&q=80')] opacity-5 bg-cover bg-center"></div>
          <div className="container mx-auto max-w-5xl relative">
            <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
              contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hubungi Kami</h2>
              <p className="text-gray-300 text-xl font-medium">Konsultasi gratis untuk menentukan solusi terbaik</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className={`transition-all duration-800 ${
                contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: contactAnimation.isVisible ? '400ms' : '0ms'
              }}>
                <h3 className="text-2xl font-bold mb-8 text-white">Informasi Kontak</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="h-6 w-6 text-pintu-400" />,
                      text: "+62 878-5911-4643"
                    },
                    {
                      icon: <Computer className="h-6 w-6 text-electric" />,
                      text: "support@installulang.web.id"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-dark-800/90 backdrop-blur-sm rounded-xl shadow-md border border-dark-700/50">
                      {item.icon}
                      <span className="ml-4 font-medium text-gray-300">{item.text}</span>
                    </div>
                  ))}
                  
                  <div className="flex items-start p-4 bg-dark-800/90 backdrop-blur-sm rounded-xl shadow-md border border-dark-700/50">
                    <Settings className="h-6 w-6 text-success-DEFAULT mt-1" />
                    <div className="ml-4">
                      <p className="font-bold text-white">Area Layanan</p>
                      <p className="text-gray-300">Jakarta & sekitarnya</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-dark-800/90 backdrop-blur-sm rounded-xl shadow-md border border-dark-700/50">
                  <p className="font-bold text-white mb-4">Jam Operasional:</p>
                  <div className="space-y-2 text-gray-300">
                    <p>Konfirmasi lewat kontak</p>
                  </div>
                </div>
              </div>
              
              <Card className={`bg-dark-800/95 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-8 shadow-xl transition-all duration-800 ${
                contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: contactAnimation.isVisible ? '600ms' : '0ms'
              }}>
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-8 text-white">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input 
                        placeholder="Nama Lengkap" 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        required 
                        className="border-dark-600 focus:border-pintu-500 bg-dark-700 py-4 text-lg rounded-xl shadow-sm text-white placeholder:text-gray-400" 
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                        required 
                        className="border-dark-600 focus:border-pintu-500 bg-dark-700 py-4 text-lg rounded-xl shadow-sm text-white placeholder:text-gray-400" 
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Jelaskan masalah atau kebutuhan Anda..." 
                        value={formData.issue} 
                        onChange={(e) => setFormData({ ...formData, issue: e.target.value })} 
                        required 
                        rows={5} 
                        className="border-dark-600 focus:border-pintu-500 bg-dark-700 text-lg rounded-xl shadow-sm text-white placeholder:text-gray-400" 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-pintu-600 to-pintu-500 text-dark-900 w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:from-pintu-700 hover:to-pintu-600 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-950 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-mono text-pintu-gradient">InstallUlang</h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                Solusi profesional untuk semua kebutuhan teknologi Anda. Melayani area Jakarta dan sekitarnya.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Layanan</h4>
              <ul className="space-y-3 text-gray-300">
                {["Install Ulang OS", "Remote Support", "Hardware Upgrade", "Server Setup"].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-pintu-400 transition-colors font-medium">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Kontak</h4>
              <ul className="space-y-3 text-gray-300 font-medium">
                <li>+62 878-5911-4643</li>
                <li>support@installulang.web.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">WhatsApp</h4>
              <a href="https://wa.me/6287859114643" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-electric to-pintu-500 text-dark-900 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Phone className="h-5 w-5 mr-2" />
                Chat Sekarang
              </a>
            </div>
          </div>
          <div className="border-t border-dark-800 mt-12 pt-8 text-center text-gray-300">
            <p className="font-medium">© 2025 InstallUlang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

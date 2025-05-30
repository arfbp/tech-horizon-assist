import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Laptop, Settings, Zap, HardDrive, Users, Check, Phone, Computer, Shield, Clock, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Index = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Kami akan menghubungi Anda dalam 24 jam."
    });
    setFormData({
      name: '',
      email: '',
      issue: ''
    });
  };
  const services = [{
    icon: <Laptop className="h-10 w-10 text-tech-blue" />,
    title: "Install Ulang Windows & Linux",
    description: "Reinstallasi OS laptop, PC, dan MacBook dengan sistem Windows, Linux, atau macOS. Proses cepat dan aman.",
    features: ["Windows 10/11", "Ubuntu/Linux Mint", "macOS Support"]
  }, {
    icon: <Settings className="h-10 w-10 text-tech-cyan" />,
    title: "Remote Troubleshooting",
    description: "Bantuan remote untuk mengatasi masalah software dan konfigurasi sistem secara real-time.",
    features: ["Akses Remote Aman", "Diagnosis Real-time", "Panduan Step-by-step"]
  }, {
    icon: <Computer className="h-10 w-10 text-tech-green" />,
    title: "Setup Server Homelab",
    description: "Konfigurasi personal cloud, NAS, dan self-hosted services untuk kebutuhan digital rumah modern.",
    features: ["Personal Cloud", "Media Server", "Home Automation"]
  }, {
    icon: <HardDrive className="h-10 w-10 text-tech-purple" />,
    title: "Upgrade Hardware",
    description: "Peningkatan performa dengan upgrade RAM, SSD, dan komponen hardware terbaru.",
    features: ["RAM & SSD Upgrade", "Peripheral Setup", "Performance Tuning"]
  }];
  const whyChooseUs = [{
    icon: <Zap className="h-8 w-8 text-tech-cyan" />,
    title: "Respon Cepat",
    description: "Layanan dalam 24 jam, emergency support tersedia untuk masalah urgent"
  }, {
    icon: <Award className="h-8 w-8 text-tech-green" />,
    title: "Berpengalaman",
    description: "Tim teknisi bersertifikat dengan pengalaman 5+ tahun di bidang IT"
  }, {
    icon: <Shield className="h-8 w-8 text-tech-purple" />,
    title: "Bergaransi",
    description: "Garansi layanan 30 hari untuk semua jenis perbaikan dan instalasi"
  }];
  return <div className="min-h-screen bg-tech-slate-50">
      {/* Header */}
      <header className="border-b border-tech-slate-200/60 bg-white/90 backdrop-blur-lg sticky top-0 z-50 tech-glow">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold font-mono gradient-text">InstallUlang</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-tech-slate-600 hover:text-tech-blue transition-colors font-medium">Layanan</a>
              <a href="#about" className="text-tech-slate-600 hover:text-tech-blue transition-colors font-medium">Tentang</a>
              <a href="#contact" className="text-tech-slate-600 hover:text-tech-blue transition-colors font-medium">Kontak</a>
            </div>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <Button className="tech-button-primary rounded-xl px-6 py-2">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 px-4 text-center hero-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto max-w-5xl relative">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-8 border-tech-blue/30 text-tech-blue bg-white/80 backdrop-blur-sm text-sm font-medium py-[13px] px-[34px] my-0 mx-0">
                Profesional & Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-tech-slate-900">
                Jasa Install Ulang Laptop & Komputer,{' '}
                <span className="gradient-text">Troubleshoot & Cloud Server</span>
              </h1>
              <p className="text-xl md:text-2xl text-tech-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                Layanan profesional untuk semua kebutuhan teknologi Anda. Dari install ulang OS hingga setup server homelab, kami siap membantu dengan respon cepat dan bergaransi.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="tech-button-primary text-lg px-10 py-6 rounded-xl tech-glow-strong font-semibold" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  <Clock className="h-5 w-5 mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              })} className="tech-button-secondary text-lg px-10 py-6 rounded-xl font-bold bg-[tech-blue-dark] bg-yellow-400 hover:bg-yellow-300 text-blue-500">
                  Lihat Layanan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tech-slate-900">Layanan Profesional Kami</h2>
              <p className="text-tech-slate-600 text-xl max-w-3xl mx-auto font-medium">
                Solusi lengkap untuk semua kebutuhan teknologi Anda dengan standar profesional tertinggi
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => <Card key={index} className={`tech-card group animate-fade-in-up animate-delay-${index * 200}`}>
                  <CardContent className="p-0">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300 p-4 rounded-2xl bg-gradient-to-br from-tech-slate-50 to-white">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-tech-slate-900">{service.title}</h3>
                    <p className="text-tech-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-tech-slate-500">
                          <Check className="h-4 w-4 text-tech-green mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-24 px-4 section-bg">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tech-slate-900">Mengapa Pilih Kami?</h2>
              <p className="text-tech-slate-600 text-xl font-medium">Komitmen kami untuk memberikan layanan terbaik</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {whyChooseUs.map((item, index) => <div key={index} className={`text-center animate-slide-in-left animate-delay-${index * 200}`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-8 tech-glow">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-tech-slate-900">{item.title}</h3>
                  <p className="text-tech-slate-600 leading-relaxed font-medium">{item.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tech-slate-900">Remote vs On-Site Support</h2>
              <p className="text-tech-slate-600 text-xl font-medium">Pilih metode yang sesuai dengan kebutuhan Anda</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="tech-card animate-fade-in-up">
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-tech-blue to-tech-cyan text-white mr-4">
                      <Zap className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-tech-slate-900">Remote Support</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["Bantuan instan dalam menit", "Biaya lebih ekonomis", "Cocok untuk troubleshooting software", "Aman dengan enkripsi end-to-end"].map((item, idx) => <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-tech-green mr-4 flex-shrink-0" />
                        <span className="font-medium text-tech-slate-700">{item}</span>
                      </li>)}
                  </ul>
                  <Button className="tech-button-secondary w-full py-4 text-lg font-semibold">
                    Mulai Remote Session
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="tech-card animate-fade-in-up animate-delay-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-tech-green to-tech-cyan text-white mr-4">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-tech-slate-900">On-Site Support</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["Penanganan hardware langsung", "Install ulang OS & software", "Upgrade komponen hardware", "Setup server & network"].map((item, idx) => <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-tech-green mr-4 flex-shrink-0" />
                        <span className="font-medium text-tech-slate-700">{item}</span>
                      </li>)}
                  </ul>
                  <Button className="tech-button-primary w-full py-4 text-lg font-semibold">
                    Buat Jadwal Kunjungan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 section-bg">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tech-slate-900">Hubungi Kami</h2>
              <p className="text-tech-slate-600 text-xl font-medium">Konsultasi gratis untuk menentukan solusi terbaik</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="animate-slide-in-left">
                <h3 className="text-2xl font-bold mb-8 text-tech-slate-900">Informasi Kontak</h3>
                <div className="space-y-6">
                  {[{
                  icon: <Phone className="h-6 w-6 text-tech-blue" />,
                  text: "+62 812-3456-7890"
                }, {
                  icon: <Computer className="h-6 w-6 text-tech-cyan" />,
                  text: "support@techsupportpro.id"
                }].map((item, idx) => <div key={idx} className="flex items-center p-4 bg-white/80 rounded-xl backdrop-blur-sm">
                      {item.icon}
                      <span className="ml-4 font-medium text-tech-slate-700">{item.text}</span>
                    </div>)}
                  
                  <div className="flex items-start p-4 bg-white/80 rounded-xl backdrop-blur-sm">
                    <Settings className="h-6 w-6 text-tech-green mt-1" />
                    <div className="ml-4">
                      <p className="font-bold text-tech-slate-900">Area Layanan</p>
                      <p className="text-tech-slate-600">Jakarta & sekitarnya</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-white/80 rounded-xl backdrop-blur-sm">
                  <p className="font-bold text-tech-slate-900 mb-4">Jam Operasional:</p>
                  <div className="space-y-2 text-tech-slate-600">
                    <p>Senin - Jumat: 08:00 - 20:00</p>
                    <p>Sabtu: 09:00 - 17:00</p>
                    <p>Minggu: Emergency only</p>
                  </div>
                </div>
              </div>
              
              <Card className="tech-card animate-fade-in-up animate-delay-200">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-8 text-tech-slate-900">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input placeholder="Nama Lengkap" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} required className="border-tech-slate-200 focus:border-tech-blue bg-white/80 backdrop-blur-sm py-4 text-lg rounded-xl" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} required className="border-tech-slate-200 focus:border-tech-blue bg-white/80 backdrop-blur-sm py-4 text-lg rounded-xl" />
                    </div>
                    <div>
                      <Textarea placeholder="Jelaskan masalah atau kebutuhan Anda..." value={formData.issue} onChange={e => setFormData({
                      ...formData,
                      issue: e.target.value
                    })} required rows={5} className="border-tech-slate-200 focus:border-tech-blue bg-white/80 backdrop-blur-sm text-lg rounded-xl" />
                    </div>
                    <Button type="submit" className="tech-button-primary w-full py-4 text-lg font-semibold rounded-xl">
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
      <footer className="bg-tech-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-mono gradient-text">InstallUlang</h3>
              <p className="text-tech-slate-400 leading-relaxed font-medium">
                Solusi profesional untuk semua kebutuhan teknologi Anda. Melayani area Jakarta dan sekitarnya.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Layanan</h4>
              <ul className="space-y-3 text-tech-slate-400">
                {["Install Ulang OS", "Remote Support", "Hardware Upgrade", "Server Setup"].map(item => <li key={item}>
                    <a href="#" className="hover:text-tech-cyan transition-colors font-medium">{item}</a>
                  </li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Kontak</h4>
              <ul className="space-y-3 text-tech-slate-400 font-medium">
                <li>+62 812-3456-7890</li>
                <li>support@techsupportpro.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">WhatsApp</h4>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-tech-green to-tech-cyan text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <Phone className="h-5 w-5 mr-2" />
                Chat Sekarang
              </a>
            </div>
          </div>
          <div className="border-t border-tech-slate-800 mt-12 pt-8 text-center text-tech-slate-400">
            <p className="font-medium">© 2025 InstallUlang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, Share2, Shield, Zap, Clock, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const RemoteSupport = () => {
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText('123 456 789');
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const steps = [
    {
      step: 1,
      title: "Download AnyDesk",
      description: "Klik tombol download di bawah untuk mengunduh AnyDesk secara gratis",
      icon: <Download className="h-6 w-6 text-mint" />,
      action: "download"
    },
    {
      step: 2,
      title: "Install & Jalankan",
      description: "Install AnyDesk dan jalankan aplikasinya. Tidak perlu membuat akun",
      icon: <Zap className="h-6 w-6 text-sage-600" />,
      action: "install"
    },
    {
      step: 3,
      title: "Bagikan ID AnyDesk",
      description: "Salin ID AnyDesk Anda dan kirimkan kepada teknisi kami via WhatsApp",
      icon: <Share2 className="h-6 w-6 text-forest-DEFAULT" />,
      action: "share"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-sage-600" />,
      title: "Aman & Terenkripsi",
      description: "Koneksi end-to-end encryption dengan standar keamanan tinggi"
    },
    {
      icon: <Zap className="h-8 w-8 text-mint" />,
      title: "Akses Instan",
      description: "Bantuan langsung tanpa perlu menunggu teknisi datang ke lokasi"
    },
    {
      icon: <Clock className="h-8 w-8 text-forest-DEFAULT" />,
      title: "24/7 Available",
      description: "Layanan remote support tersedia kapan saja sesuai kebutuhan"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="border-b border-sage-200/60 bg-white/95 backdrop-blur-xl sticky top-0 z-50 sage-glow">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-sage-600 hover:text-sage-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="text-2xl font-bold font-mono text-sage-gradient">Remote Support</div>
            </div>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <Button className="sage-button-primary rounded-xl px-6 py-2">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 hero-bg relative overflow-hidden">
          <div className="container mx-auto max-w-4xl relative text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Remote Support dengan <span className="text-sage-gradient">AnyDesk</span>
            </h1>
            <p className="text-xl text-sage-100 mb-8 max-w-2xl mx-auto">
              Dapatkan bantuan teknis langsung melalui remote access yang aman dan mudah digunakan
            </p>
            <Badge className="bg-mint/20 text-mint-light border-mint/30 text-lg px-4 py-2">
              Gratis & Aman
            </Badge>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 section-bg">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sage-50 to-white rounded-2xl shadow-inner">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-sage-800">{feature.title}</h3>
                    <p className="text-sage-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 px-4 nature-bg">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-sage-800">Panduan Remote Support</h2>
              <p className="text-sage-600 text-xl">3 langkah mudah untuk mendapatkan bantuan remote</p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-sage-600 to-sage-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {step.step}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {step.icon}
                          <h3 className="text-2xl font-bold text-sage-800">{step.title}</h3>
                        </div>
                        <p className="text-sage-600 text-lg leading-relaxed mb-4">{step.description}</p>
                        
                        {step.action === 'download' && (
                          <a href="https://anydesk.com/id/downloads" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-gradient-to-r from-mint to-mint-dark text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                              <Download className="h-5 w-5 mr-2" />
                              Download AnyDesk Gratis
                            </Button>
                          </a>
                        )}
                        
                        {step.action === 'share' && (
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                              onClick={handleCopyId}
                              variant="outline"
                              className="border-2 border-sage-400 text-sage-700 hover:bg-sage-500 hover:text-white px-6 py-3 rounded-xl"
                            >
                              {copiedId ? (
                                <>
                                  <CheckCircle className="h-5 w-5 mr-2" />
                                  ID Tersalin!
                                </>
                              ) : (
                                <>
                                  <Share2 className="h-5 w-5 mr-2" />
                                  Contoh ID: 123 456 789
                                </>
                              )}
                            </Button>
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                              <Button className="sage-button-primary px-8 py-3 rounded-xl">
                                <Phone className="h-5 w-5 mr-2" />
                                Kirim via WhatsApp
                              </Button>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-sage-800 to-sage-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Siap Mendapatkan Bantuan?</h2>
            <p className="text-sage-100 text-xl mb-8 max-w-2xl mx-auto">
              Tim teknisi kami siap membantu menyelesaikan masalah komputer Anda secara remote
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://anydesk.com/id/downloads" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-mint to-mint-dark text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="h-5 w-5 mr-2" />
                  Download AnyDesk
                </Button>
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-sage-800 px-10 py-4 text-lg rounded-xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Hubungi Teknisi
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RemoteSupport;

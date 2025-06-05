import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, CheckCircle, XCircle, Phone, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsAndConditions = () => {
  const warrantyItems = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Install ulang sistem operasi",
      subtitle: "(Windows, Linux, dsb.)"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Service ringan",
      subtitle: "(optimasi sistem, cleaning software, driver)"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Instalasi software standar",
      subtitle: "(Microsoft Office, browser, PDF reader, dsb.)"
    }
  ];

  const coverageItems = [
    "Perbaikan ulang gratis jika sistem mengalami masalah yang sama seperti saat pertama kali dibawa",
    "Instal ulang ulang tanpa biaya jika terjadi kegagalan booting/OS corrupt selama masa garansi (bukan akibat virus atau pengguna)",
    "Perbaikan konfigurasi software yang sebelumnya sudah diinstal oleh tim kami"
  ];

  const exclusions = [
    {
      title: "Kesalahan pengguna",
      subtitle: "(hapus file penting, instal software sembarangan, setting BIOS/boot salah)"
    },
    {
      title: "Infeksi virus/malware",
      subtitle: "setelah penggunaan oleh pelanggan"
    },
    {
      title: "Perubahan partisi hard disk",
      subtitle: "dual boot yang tidak dilakukan oleh teknisi kami"
    },
    {
      title: "Kerusakan hardware",
      subtitle: "(RAM, harddisk, SSD, mainboard, dsb.)"
    },
    {
      title: "Update Windows/driver/software",
      subtitle: "yang menyebabkan crash akibat koneksi internet pelanggan"
    },
    {
      title: "Intervensi dari pihak ketiga",
      subtitle: "(dibawa ke tempat servis lain selama masa garansi)"
    }
  ];

  const claimSteps = [
    "Hubungi kami melalui WhatsApp/Email dengan mencantumkan nama, tanggal servis, dan masalah yang dihadapi",
    "Bawa perangkat kembali ke tempat layanan (atau teknisi kami kunjungi kembali jika sesuai perjanjian)",
    "Tim kami akan melakukan diagnosis ulang dan memberikan layanan perbaikan tanpa biaya apabila klaim sesuai syarat"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold font-mono text-pintu-gradient bg-transparent">
              InstallUlang
            </Link>
            <Link to="/">
              <Button className="bg-gradient-to-r from-pintu-600 to-pintu-500 text-white hover:from-pintu-700 hover:to-pintu-600 rounded-xl px-6 py-2 shadow-lg hover:shadow-xl transition-all">
                Kembali ke Beranda
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pintu-500 to-pintu-600 rounded-2xl shadow-lg mb-8">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Syarat & Ketentuan <span className="text-pintu-gradient">Garansi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Ketentuan garansi layanan InstallUlang untuk memberikan kepastian dan perlindungan terbaik bagi pelanggan
            </p>
          </div>

          {/* Masa Garansi */}
          <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mb-12 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg">
                  <Clock className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">1. Masa Garansi</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Garansi berlaku selama <span className="font-bold text-pintu-600">30 hari kalender</span> terhitung sejak tanggal layanan dilakukan.
              </p>
            </CardContent>
          </Card>

          {/* Jenis Layanan */}
          <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mb-12 animate-fade-in-up animate-delay-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white mr-4 shadow-lg">
                  <Shield className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">2. Jenis Layanan yang Termasuk Garansi</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 font-medium">Garansi ini berlaku untuk layanan berikut:</p>
              <div className="grid md:grid-cols-3 gap-6">
                {warrantyItems.map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-6 border-2 border-green-200 hover:border-green-300 transition-colors">
                    <div className="flex items-start mb-4">
                      {item.icon}
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cakupan Garansi */}
          <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mb-12 animate-fade-in-up animate-delay-400">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-pintu-500 to-pintu-600 text-white mr-4 shadow-lg">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">3. Cakupan Garansi</h2>
              </div>
              <div className="space-y-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tidak Termasuk Garansi */}
          <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mb-12 animate-fade-in-up animate-delay-600">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white mr-4 shadow-lg">
                  <XCircle className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">4. Tidak Termasuk Dalam Garansi</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 font-medium">Garansi tidak berlaku jika kerusakan disebabkan oleh:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {exclusions.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-red-50 rounded-xl border-2 border-red-200">
                    <XCircle className="h-5 w-5 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-red-700 mb-1">{item.title}</p>
                      <p className="text-sm text-red-600">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prosedur Klaim */}
          <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mb-12 animate-fade-in-up animate-delay-800">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-pintu-500 text-white mr-4 shadow-lg">
                  <Phone className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">5. Prosedur Klaim Garansi</h2>
              </div>
              <div className="space-y-6">
                {claimSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-pintu-500 to-pintu-600 text-white rounded-full font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Catatan Tambahan */}
          <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up animate-delay-1000">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white mr-4 shadow-lg">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">6. Catatan Tambahan</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
                  <p className="text-amber-800 font-medium leading-relaxed">
                    <strong>Data pelanggan</strong> sepenuhnya menjadi tanggung jawab pelanggan. Kami menyarankan untuk backup data sebelum proses instal ulang.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl border-2 border-amber-200">
                  <p className="text-amber-800 font-medium leading-relaxed">
                    Kami <strong>tidak menjamin</strong> pemulihan data yang hilang selama servis atau klaim garansi.
                  </p>
                </div>
                <div className="p-4 bg-pintu-50 rounded-xl border-2 border-pintu-200">
                  <p className="text-pintu-800 font-medium leading-relaxed">
                    Dengan menggunakan layanan kami, pelanggan dianggap telah <strong>membaca dan menyetujui</strong> syarat & ketentuan ini.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center mt-16 animate-fade-in-up animate-delay-1200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ada Pertanyaan tentang Garansi?</h3>
            <p className="text-gray-600 mb-8 font-medium">Hubungi kami untuk konsultasi lebih lanjut</p>
            <a href="https://wa.me/6287859114643?text=Halo,%20saya%20ingin%20bertanya%20tentang%20syarat%20dan%20ketentuan%20garansi" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-pintu-600 to-pintu-500 text-white hover:from-pintu-700 hover:to-pintu-600 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Phone className="h-5 w-5 mr-2" />
                Hubungi WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-800 py-8 px-4 mt-16">
        <div className="container mx-auto max-w-6xl text-center">
          <Link to="/" className="text-2xl font-bold font-mono text-pintu-gradient mb-4 inline-block">
            InstallUlang
          </Link>
          <p className="text-gray-600">© 2025 InstallUlang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;

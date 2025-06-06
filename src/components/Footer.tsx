
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-mono bg-gradient-to-r from-pintu-600 to-pintu-500 bg-clip-text text-transparent">InstallUlang</h3>
            <p className="text-gray-300 leading-relaxed font-medium">
              Solusi profesional untuk semua kebutuhan teknologi Anda. Melayani area Jakarta dan sekitarnya.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Layanan</h4>
            <ul className="space-y-3 text-gray-300">
              {["Install Ulang OS", "Remote Support", "Hardware Upgrade", "Server Setup"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-pintu-500 transition-colors font-medium">{item}</a>
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
            <a href="https://wa.me/6287859114643" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-pintu-600 to-pintu-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Phone className="h-5 w-5 mr-2" />
              Chat Sekarang
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p className="font-medium">© 2025 InstallUlang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
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
  );
};

export default Header;

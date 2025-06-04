
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ComparisonSection from '@/components/ComparisonSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ComparisonSection />
        <ContactSection />
      </main>

      <Footer />
      
      <script dangerouslySetInnerHTML={{
        __html: `
          window.handleCaptchaSuccess = function(token) {
            window.dispatchEvent(new CustomEvent('captcha-success', { detail: token }));
          };
          
          window.handleCaptchaError = function() {
            window.dispatchEvent(new CustomEvent('captcha-error'));
          };
          
          window.addEventListener('captcha-success', function(e) {
            console.log('Captcha completed with token:', e.detail);
          });
          
          window.addEventListener('captcha-error', function() {
            console.log('Captcha error occurred');
          });
        `
      }} />
    </div>
  );
};

export default Index;

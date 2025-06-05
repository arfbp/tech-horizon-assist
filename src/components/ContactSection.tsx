
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Computer, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

declare global {
  interface Window {
    turnstile: {
      render: (element: string | HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
        theme?: string;
      }) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaWidgetId, setCaptchaWidgetId] = useState<string | null>(null);

  const contactAnimation = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const renderCaptcha = () => {
      if (window.turnstile && !captchaWidgetId) {
        const widgetId = window.turnstile.render('#turnstile-widget', {
          sitekey: '0x4AAAAAABgIoVU0xNFC8S5d',
          callback: (token: string) => {
            setCaptchaToken(token);
          },
          'error-callback': () => {
            setCaptchaToken(null);
            toast({
              title: "Captcha Error",
              description: "Terjadi kesalahan dengan captcha. Silakan coba lagi.",
              variant: "destructive"
            });
          },
          'expired-callback': () => {
            setCaptchaToken(null);
          },
          theme: 'light'
        });
        setCaptchaWidgetId(widgetId);
      }
    };

    // Check if script is already loaded
    if (window.turnstile) {
      renderCaptcha();
    } else {
      // Wait for script to load
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkTurnstile);
          renderCaptcha();
        }
      }, 100);

      return () => clearInterval(checkTurnstile);
    }
  }, [captchaWidgetId, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      toast({
        title: "Captcha Required",
        description: "Mohon selesaikan captcha terlebih dahulu",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          issue: formData.issue,
          captchaToken: captchaToken
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
      setCaptchaToken(null);
      
      // Reset captcha
      if (window.turnstile && captchaWidgetId) {
        window.turnstile.reset(captchaWidgetId);
      }
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
      setCaptchaToken(null);
      
      // Reset captcha
      if (window.turnstile && captchaWidgetId) {
        window.turnstile.reset(captchaWidgetId);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={contactAnimation.elementRef}
      className={`py-24 px-4 bg-white transition-all duration-1000 ${
        contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-5xl relative">
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Hubungi Kami</h2>
          <p className="text-gray-600 text-xl font-medium">Konsultasi gratis untuk menentukan solusi terbaik</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className={`transition-all duration-800 ${
            contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transitionDelay: contactAnimation.isVisible ? '400ms' : '0ms'
          }}>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Informasi Kontak</h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="h-6 w-6 text-pintu-600" />,
                  text: "+62 878-5911-4643"
                },
                {
                  icon: <Computer className="h-6 w-6 text-blue-600" />,
                  text: "support@installulang.web.id"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  {item.icon}
                  <span className="ml-4 font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
              
              <div className="flex items-start p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <Settings className="h-6 w-6 text-green-600 mt-1" />
                <div className="ml-4">
                  <p className="font-bold text-gray-800">Area Layanan</p>
                  <p className="text-gray-600">Jakarta & sekitarnya</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <p className="font-bold text-gray-800 mb-4">Jam Operasional:</p>
              <div className="space-y-2 text-gray-600">
                <p>Konfirmasi lewat kontak</p>
              </div>
            </div>
          </div>
          
          <Card className={`bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl transition-all duration-800 hover:shadow-2xl ${
            contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transitionDelay: contactAnimation.isVisible ? '600ms' : '0ms'
          }}>
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Nama Lengkap" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    required 
                    className="border-2 border-gray-300 focus:border-pintu-500 bg-white py-4 text-lg rounded-xl shadow-sm text-gray-800 placeholder:text-gray-500 hover:border-gray-400 transition-colors" 
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    required 
                    className="border-2 border-gray-300 focus:border-pintu-500 bg-white py-4 text-lg rounded-xl shadow-sm text-gray-800 placeholder:text-gray-500 hover:border-gray-400 transition-colors" 
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Jelaskan masalah atau kebutuhan Anda..." 
                    value={formData.issue} 
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })} 
                    required 
                    rows={5} 
                    className="border-2 border-gray-300 focus:border-pintu-500 bg-white text-lg rounded-xl shadow-sm text-gray-800 placeholder:text-gray-500 hover:border-gray-400 transition-colors" 
                  />
                </div>
                <div className="flex justify-center">
                  <div id="turnstile-widget" className="mb-4"></div>
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !captchaToken}
                  className="bg-gradient-to-r from-pintu-600 to-pintu-500 text-white w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:from-pintu-700 hover:to-pintu-600 transition-all duration-300 disabled:opacity-50 hover:shadow-xl"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

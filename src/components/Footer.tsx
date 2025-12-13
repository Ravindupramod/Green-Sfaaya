import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-serif text-3xl font-bold">
                  <span className="text-primary">Thaara</span> Residence
                </h3>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-background/50">Boutique Hotel</p>
              </div>
            </div>
            <p className="text-background/60 font-sans text-sm leading-relaxed max-w-md mb-6">
              {t('footer.description')}
            </p>
            <p className="text-background/40 font-serif text-sm italic">
              "Where timeless elegance meets refined comfort"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-background/90">Explore</h4>
            <nav className="space-y-3">
              {[
                { to: '/', label: 'nav.home' },
                { to: '/rooms', label: 'nav.rooms' },
                { to: '/gallery', label: 'nav.gallery' },
                { to: '/attractions', label: 'nav.attractions' },
                { to: '/contact', label: 'nav.contact' },
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="block text-background/50 hover:text-primary transition-colors duration-300 font-sans text-sm"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-background/90">{t('nav.contact')}</h4>
            <div className="space-y-4">
              <a href="tel:+94779084494" className="flex items-center space-x-3 text-background/50 hover:text-primary transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-sans text-sm">+94 77 908 4494</span>
              </a>
              <a href="mailto:info@thaararesidence.com" className="flex items-center space-x-3 text-background/50 hover:text-primary transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-sans text-sm">info@thaararesidence.com</span>
              </a>
              <div className="flex items-start space-x-3 text-background/50">
                <div className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-sans text-sm">{t('contact.address')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 font-sans text-sm">
              © {new Date().getFullYear()} Thaara Residence. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-background/30 font-sans text-xs">Historic City of Anuradhapura, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

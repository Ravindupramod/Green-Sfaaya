import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              <span className="text-primary">Thaara</span> Residence
            </h3>
            <p className="text-background/70 font-sans text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-background/70 hover:text-primary transition-colors font-sans text-sm">
                {t('nav.home')}
              </Link>
              <Link to="/rooms" className="block text-background/70 hover:text-primary transition-colors font-sans text-sm">
                {t('nav.rooms')}
              </Link>
              <Link to="/gallery" className="block text-background/70 hover:text-primary transition-colors font-sans text-sm">
                {t('nav.gallery')}
              </Link>
              <Link to="/attractions" className="block text-background/70 hover:text-primary transition-colors font-sans text-sm">
                {t('nav.attractions')}
              </Link>
              <Link to="/contact" className="block text-background/70 hover:text-primary transition-colors font-sans text-sm">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t('nav.contact')}</h4>
            <div className="space-y-3">
              <a href="tel:+94779084494" className="flex items-center space-x-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-sans text-sm">+94 77 908 4494</span>
              </a>
              <a href="mailto:info@thaararesidence.com" className="flex items-center space-x-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="font-sans text-sm">info@thaararesidence.com</span>
              </a>
              <div className="flex items-start space-x-3 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="font-sans text-sm">{t('contact.address')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/50 font-sans text-sm">
            © {new Date().getFullYear()} Thaara Residence. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

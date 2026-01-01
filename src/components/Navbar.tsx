import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/rooms', label: 'nav.rooms' },
    { path: '/gallery', label: 'nav.gallery' },
    { path: '/attractions', label: 'nav.attractions' },
    { path: '/virtual-tour', label: 'nav.virtualTour' },
    { path: '/contact', label: 'nav.contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${scrolled
        ? 'bg-background/80 backdrop-blur-luxury shadow-luxury border-b border-white/10 py-2'
        : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 transition-all duration-500">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group perspective-1000">
            <div className="relative transform transition-transform duration-500 group-hover:rotate-12">
              <Sparkles className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-gradient-gold tracking-wide transition-all duration-300 group-hover:tracking-wider">Green Safaaya</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1 opacity-80">Boutique Hotel</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 font-sans text-xs font-medium uppercase tracking-wider transition-all duration-500 rounded-full ${isActive(link.path)
                    ? 'text-primary bg-white/10 shadow-sm'
                    : 'text-foreground/70 hover:text-primary hover:bg-white/5'
                  }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>

          {/* Language Toggle, Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'si' : 'en')}
              className="flex items-center space-x-2 text-foreground/70 hover:text-primary hover:bg-white/5 rounded-full px-4 h-10 border border-transparent hover:border-white/10 transition-all duration-300"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-bold tracking-wider">{language === 'en' ? 'සිං' : 'EN'}</span>
            </Button>

            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-xs uppercase tracking-widest font-bold px-8 h-10 rounded-full shadow-luxury hover:shadow-luxury-lg hover:scale-105 transition-all duration-500">
                Book Suite
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'si' : 'en')}
              className="flex items-center space-x-1 text-foreground/70"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium">{language === 'en' ? 'සිං' : 'EN'}</span>
            </Button>

            <button
              className="p-2 text-foreground/70 hover:text-primary transition-colors hover:bg-white/5 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in relative z-50">
            <div className="bg-background/95 backdrop-blur-luxury rounded-3xl border border-white/10 p-6 shadow-luxury mt-2">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 font-sans text-sm uppercase tracking-wider font-medium transition-all duration-300 rounded-xl ${isActive(link.path)
                        ? 'text-primary bg-primary/10 pl-6'
                        : 'text-foreground/70 hover:bg-white/5 hover:pl-6'
                      }`}
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm uppercase tracking-widest font-bold py-6 rounded-xl shadow-luxury">
                    Book Your Stay
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

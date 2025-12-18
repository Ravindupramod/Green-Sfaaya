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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-luxury shadow-luxury border-b border-primary/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-gradient-gold tracking-wide">Thaara</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">Residence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 font-sans text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive(link.path) 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {t(link.label)}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Language Toggle, Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'si' : 'en')}
              className="flex items-center space-x-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-full px-4"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-wider">{language === 'en' ? 'සිං' : 'EN'}</span>
            </Button>
            
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm font-semibold px-6 rounded-full shadow-luxury hover:shadow-luxury-lg transition-all duration-500">
                Book Now
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
              className="p-2 text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="bg-card/95 backdrop-blur-luxury rounded-2xl border border-primary/10 p-4 shadow-luxury">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 font-sans text-sm font-medium transition-all duration-300 rounded-xl ${
                    isActive(link.path) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground/70 hover:bg-primary/5'
                  }`}
                >
                  {t(link.label)}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border/50">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold rounded-xl">
                    Book Now
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

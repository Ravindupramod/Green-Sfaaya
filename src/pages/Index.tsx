import { Link } from 'react-router-dom';
import { Wifi, Tv, Bath, Wind, Car, Coffee, Star, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import RoomCard from '@/components/RoomCard';
import heroImage from '@/assets/hero.jpeg';
import room1 from '@/assets/room_1.jpeg';
import room2 from '@/assets/room_2.jpeg';
import room from '@/assets/room.jpeg';
import viewImage from '@/assets/view_2.jpeg';

const Index = () => {
  const { t, language } = useLanguage();

  const amenities = [
    { icon: Wifi, labelKey: 'amenities.wifi' },
    { icon: Tv, labelKey: 'amenities.tv' },
    { icon: Bath, labelKey: 'amenities.bathroom' },
    { icon: Wind, labelKey: 'amenities.ac' },
    { icon: Car, labelKey: 'amenities.parking' },
    { icon: Coffee, labelKey: 'amenities.balcony' },
  ];

  const featuredRooms = [
    { image: room1, titleKey: 'room.deluxe', descKey: 'room.deluxe.desc', price: 85 },
    { image: room2, titleKey: 'room.superior', descKey: 'room.superior.desc', price: 95 },
    { image: room, titleKey: 'room.family', descKey: 'room.family.desc', price: 120 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Thaara Residence"
            className="w-full h-full object-cover scale-105 animate-[zoomOut_20s_ease-out_forwards]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
          <div className="absolute inset-0 bg-luxury-radial" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-luxury rounded-full mb-6 border border-primary/30">
              <Star className="h-4 w-4 text-gold-light" fill="currentColor" />
              <span className="font-sans text-sm uppercase tracking-[0.2em] text-gold-light">
                {t('hero.welcome')}
              </span>
              <Star className="h-4 w-4 text-gold-light" fill="currentColor" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow-luxury">
              Thaara Residence
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
              {t('hero.tagline')}
            </p>
            <div className="flex items-center justify-center gap-2 text-white/70 mb-10">
              <MapPin className="h-4 w-4" />
              <span className="font-sans text-sm tracking-wide">New Town, Anuradhapura, Sri Lanka</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8 py-6 bg-luxury-gradient hover:opacity-90 shadow-luxury hover-glow">
                <Link to="/rooms">
                  {t('hero.explore')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 bg-white/10 backdrop-blur-luxury border-white/30 text-white hover:bg-white hover:text-foreground">
                <Link to="/contact">{t('hero.inquire')}</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-[scrollDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-radial opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="font-sans text-sm uppercase tracking-widest">{language === 'en' ? 'Welcome' : 'සාදරයෙන් පිළිගනිමු'}</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t('about.title')}
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed text-lg mb-8">
                {t('about.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg">
                  <Star className="h-5 w-5 text-primary" fill="currentColor" />
                  <span className="font-sans text-sm text-foreground">{language === 'en' ? 'Premium Quality' : 'උසස් තත්ත්වය'}</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-sans text-sm text-foreground">{language === 'en' ? 'Prime Location' : 'ප්‍රධාන ස්ථානය'}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src={viewImage}
                alt="Thaara Residence View"
                className="relative rounded-2xl shadow-luxury-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-luxury border border-border">
                <div className="text-4xl font-serif font-bold text-primary">10+</div>
                <div className="font-sans text-sm text-muted-foreground">{language === 'en' ? 'Years of Excellence' : 'වසර 10+ ක විශිෂ්ටත්වය'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-secondary relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="font-sans text-sm uppercase tracking-widest">{language === 'en' ? 'Our Services' : 'අපගේ සේවාවන්'}</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              {t('amenities.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-8 bg-card rounded-2xl shadow-sm hover-lift border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <amenity.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="font-sans text-sm text-center text-card-foreground font-medium">
                  {t(amenity.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="font-sans text-sm uppercase tracking-widest">{language === 'en' ? 'Accommodations' : 'නවාතැන්'}</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('rooms.title')}
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('rooms.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base hover-glow">
              <Link to="/rooms">
                {t('rooms.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground via-foreground/95 to-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-radial opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'en' ? 'Experience Luxury in the Heart of History' : 'ඉතිහාසයේ හදවතේ සුඛෝපභෝගීත්වය අත්විඳින්න'}
            </h2>
            <p className="font-sans text-lg text-white/80 mb-10 leading-relaxed">
              {language === 'en' 
                ? 'Book your stay at Thaara Residence and discover the perfect blend of modern comfort and ancient wonder.'
                : 'තාර නිවාසයේ ඔබේ නවාතැන් වෙන් කරගෙන නූතන සුවපහසුව සහ පුරාණ විශ්මයේ පරිපූර්ණ සම්මිශ්‍රණය සොයා ගන්න.'
              }
            </p>
            <Button asChild size="lg" className="text-base px-10 py-6 bg-luxury-gradient hover:opacity-90 shadow-luxury hover-glow">
              <Link to="/contact">
                {language === 'en' ? 'Make a Reservation' : 'වෙන් කිරීමක් කරන්න'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
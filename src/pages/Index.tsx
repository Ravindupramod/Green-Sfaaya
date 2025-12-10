import { Link } from 'react-router-dom';
import { Wifi, Tv, Bath, Wind, Car, Coffee } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import RoomCard from '@/components/RoomCard';
import heroImage from '@/assets/hero.jpeg';
import room1 from '@/assets/room_1.jpeg';
import room2 from '@/assets/room_2.jpeg';
import room from '@/assets/room.jpeg';

const Index = () => {
  const { t } = useLanguage();

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
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Thaara Residence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl animate-fade-in">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-gold-light mb-4">
              {t('hero.welcome')}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
              Thaara Residence
            </h1>
            <p className="font-sans text-lg text-white/90 mb-8 max-w-xl mx-auto">
              {t('hero.tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/rooms">{t('hero.explore')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-transparent border-white text-white hover:bg-white hover:text-foreground">
                <Link to="/contact">{t('hero.inquire')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t('amenities.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm hover-lift"
              >
                <amenity.icon className="h-8 w-8 text-primary mb-3" />
                <span className="font-sans text-sm text-center text-card-foreground">
                  {t(amenity.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('rooms.title')}
            </h2>
            <p className="font-sans text-muted-foreground">
              {t('rooms.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/rooms">{t('rooms.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

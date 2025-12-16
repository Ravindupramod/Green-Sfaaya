import { Link } from 'react-router-dom';
import { Wifi, Tv, Bath, Wind, Car, Coffee, Star, MapPin, ArrowRight, Sparkles, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import RoomCard from '@/components/RoomCard';
import Testimonials from '@/components/Testimonials';
import ExclusivePackages from '@/components/ExclusivePackages';
import SEO from '@/components/SEO';
import heroImage from '@/assets/hero.jpeg';
import masterBedroom1 from '@/assets/rooms/master-bedroom-1.jpeg';
import masterBedroom2 from '@/assets/rooms/master-bedroom-2.jpeg';
import singleRoom1 from '@/assets/rooms/single-room-1.jpeg';
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
    { image: masterBedroom1, titleKey: 'room.master1', descKey: 'room.master1.desc', price: 85 },
    { image: masterBedroom2, titleKey: 'room.master2', descKey: 'room.master2.desc', price: 85 },
    { image: singleRoom1, titleKey: 'room.single1', descKey: 'room.single1.desc', price: 55 },
  ];

  return (
    <>
      <SEO
        title="Thaara Residence | Luxury Boutique Hotel in Anuradhapura, Sri Lanka"
        description="Discover refined elegance at Thaara Residence, an exclusive boutique hotel near UNESCO World Heritage sites in Anuradhapura, Sri Lanka. Experience unparalleled luxury and comfort."
        keywords="Anuradhapura luxury hotel, boutique accommodation Sri Lanka, UNESCO heritage sites hotel, exclusive residence Anuradhapura"
        url="https://thaararesidence.com"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Thaara Residence"
            className="w-full h-full object-cover scale-105 animate-[zoomOut_20s_ease-out_forwards]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/80" />
          <div className="absolute inset-0 bg-luxury-radial opacity-40" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-32 left-10 w-48 h-48 border border-primary/20 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-40 right-16 w-32 h-32 border border-primary/30 rounded-full opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-shimmer" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-shimmer" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-5xl animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-background/10 backdrop-blur-luxury rounded-full mb-8 border border-primary/30">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-sans text-sm uppercase tracking-[0.25em] text-primary">
                {language === 'en' ? 'Exclusive Luxury' : 'සුවිශේෂී සුඛෝපභෝගීත්වය'}
              </span>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 text-shadow-luxury tracking-tight">
              Thaara
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light text-primary mt-2">Residence</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/85 mb-6 max-w-2xl mx-auto leading-relaxed font-light">
              {language === 'en' 
                ? 'Where timeless elegance meets refined comfort in the historic city of Anuradhapura'
                : 'ඓතිහාසික අනුරාධපුර නගරයේ සදාකාලික අලංකාරය සවිස්තරාත්මක සුවපහසුව හමුවන තැන'
              }
            </p>
            <div className="flex items-center justify-center gap-2 text-white/60 mb-12">
              <Leaf className="h-4 w-4 text-accent" />
              <span className="font-sans text-sm tracking-widest uppercase">New Town, Anuradhapura</span>
              <Leaf className="h-4 w-4 text-accent" />
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild size="lg" className="text-base px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury hover-glow font-semibold tracking-wide">
                <Link to="/rooms">
                  {language === 'en' ? 'Explore Suites' : 'කාමර සොයන්න'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-10 py-7 bg-white/5 backdrop-blur-luxury border-white/20 text-white hover:bg-white hover:text-foreground transition-all duration-500">
                <Link to="/attractions">
                  {language === 'en' ? 'Heritage Sites' : 'උරුම ස්ථාන'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-[scrollDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Elegance Banner */}
      <section className="py-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-center">
            <div className="hidden md:block w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <p className="font-serif text-lg text-foreground/80 italic">
              {language === 'en' 
                ? '"Experience the art of refined living in the ancient kingdom"'
                : '"පුරාණ රාජධානියේ සවිස්තරාත්මක ජීවන කලාව අත්විඳින්න"'
              }
            </p>
            <div className="hidden md:block w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary/5 rounded-full" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-primary/5 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-3 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-sans text-sm uppercase tracking-[0.25em] text-primary font-medium">
                  {language === 'en' ? 'Our Story' : 'අපගේ කතාව'}
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                {language === 'en' ? 'A Retreat of' : 'නිවාතැනක්'}
                <span className="block text-gradient-gold">{language === 'en' ? 'Timeless Elegance' : 'සදාකාලික අලංකාරය'}</span>
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed text-lg mb-6">
                {t('about.description')}
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed mb-10">
                {language === 'en'
                  ? 'Nestled in the heart of this historic city, our residence offers an exquisite retreat for discerning travelers seeking refined comfort and proximity to ancient wonders.'
                  : 'මෙම ඓතිහාසික නගරයේ හදවතේ පිහිටි අපගේ නිවාසය, විශිෂ්ට සුවපහසුව සහ පුරාණ අද්භූත දේ ආසන්නයේ සොයන විචක්ෂණ සංචාරකයන් සඳහා විශිෂ්ට නවාතැනක් ලබා දෙයි.'
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-4 bg-secondary/80 rounded-xl border border-primary/10">
                  <Star className="h-5 w-5 text-primary" fill="currentColor" />
                  <span className="font-sans text-sm text-foreground font-medium">{language === 'en' ? 'Premium Quality' : 'උසස් තත්ත්වය'}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4 bg-secondary/80 rounded-xl border border-primary/10">
                  <Leaf className="h-5 w-5 text-accent" />
                  <span className="font-sans text-sm text-foreground font-medium">{language === 'en' ? 'Serene Ambiance' : 'සන්සුන් වාතාවරණය'}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4 bg-secondary/80 rounded-xl border border-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-sans text-sm text-foreground font-medium">{language === 'en' ? 'Prime Location' : 'ප්‍රධාන ස්ථානය'}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 rounded-3xl blur-2xl" />
              <img
                src={viewImage}
                alt="Thaara Residence View"
                className="relative rounded-2xl shadow-luxury-lg w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-card/95 backdrop-blur-luxury p-8 rounded-2xl shadow-luxury border border-primary/10">
                <div className="text-5xl font-serif font-bold text-gradient-gold">10+</div>
                <div className="font-sans text-sm text-muted-foreground mt-1">{language === 'en' ? 'Years of Excellence' : 'වසර 10+ ක විශිෂ්ටත්වය'}</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-accent/90 backdrop-blur-luxury px-6 py-4 rounded-xl shadow-luxury">
                <div className="font-sans text-xs uppercase tracking-wider text-accent-foreground/80">Near</div>
                <div className="font-serif text-lg font-semibold text-accent-foreground">UNESCO Sites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-28 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="font-sans text-sm uppercase tracking-[0.25em] text-primary font-medium">
                {language === 'en' ? 'Thoughtful Amenities' : 'සැලකිලිමත් පහසුකම්'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              {t('amenities.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm hover-lift border border-border/50 hover:border-primary/20 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-5 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl mb-5 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
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
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-accent/3 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="font-sans text-sm uppercase tracking-[0.25em] text-primary font-medium">
                {language === 'en' ? 'Refined Accommodations' : 'සැපසුව නවාතැන්'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('rooms.title')}
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
              {language === 'en' 
                ? 'Each room is designed as a peaceful retreat, blending comfort with the tranquil essence of Anuradhapura'
                : 'සෑම කාමරයක්ම අනුරාධපුරයේ සන්සුන් සාරය සමඟ සුවපහසුව මිශ්‍ර කරමින් සාමකාමී නවාතැනක් ලෙස නිර්මාණය කර ඇත'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredRooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="px-10 py-7 text-base border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500">
              <Link to="/rooms">
                {t('rooms.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Exclusive Packages Section */}
      <ExclusivePackages />

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-foreground via-foreground/95 to-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_40%)]" />
        
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/15 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-8 opacity-80" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {language === 'en' ? 'Begin Your' : 'ඔබේ'}
              <span className="block text-gradient-gold">{language === 'en' ? 'Extraordinary Stay' : 'විශේෂ නවාතැන් අත්දැකීම'}</span>
            </h2>
            <p className="font-sans text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Indulge in the perfect harmony of luxury and heritage. Reserve your exclusive retreat in the heart of historic Anuradhapura.'
                : 'සුඛෝපභෝගීත්වය සහ උරුමයේ පරිපූර්ණ සමගිය භුක්ති විඳින්න. ඓතිහාසික අනුරාධපුරයේ හදවතේ ඔබේ විශේෂ නිවාතැන වෙන් කරගන්න.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild size="lg" className="text-base px-12 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-luxury hover-glow font-semibold tracking-wide">
                <Link to="/contact">
                  {language === 'en' ? 'Reserve Your Stay' : 'ඔබේ නවාතැන වෙන් කරන්න'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-12 py-7 bg-transparent border-white/20 text-white hover:bg-white/10 transition-all duration-500">
                <Link to="/attractions">
                  {language === 'en' ? 'Explore Sacred Sites' : 'ශුද්ධ ස්ථාන ගවේෂණය'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index;
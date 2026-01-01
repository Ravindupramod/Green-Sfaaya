import { Link } from 'react-router-dom';
import { Wifi, Tv, Bath, Wind, Car, Coffee, Star, MapPin, ArrowRight, Sparkles, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import RoomCard from '@/components/RoomCard';
import Testimonials from '@/components/Testimonials';

import SEO from '@/components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/Reveal';
import NatureOverlay from '@/components/NatureOverlay';
import FeatureCarousel from '@/components/FeatureCarousel';
// Images now served from public directory


const Index = () => {
  const { t, language } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  const amenities = [
    { icon: Wifi, labelKey: 'amenities.wifi' },
    { icon: Tv, labelKey: 'amenities.tv' },
    { icon: Bath, labelKey: 'amenities.bathroom' },
    { icon: Wind, labelKey: 'amenities.ac' },
    { icon: Car, labelKey: 'amenities.parking' },
    { icon: Coffee, labelKey: 'amenities.balcony' },
  ];

  const featuredRooms = [
    { image: "/bed rooms/Master bedroom .jpeg", titleKey: 'room.master1', descKey: 'room.master1.desc', price: 85 },
    { image: "/bed rooms/Master bedroom 1.jpeg", titleKey: 'room.master2', descKey: 'room.master2.desc', price: 85 },
    { image: "/bed rooms/single bedroom.jpeg", titleKey: 'room.single1', descKey: 'room.single1.desc', price: 55 },
  ];

  return (
    <>
      <SEO
        title="Green Safaaya | Luxury Boutique Hotel in Anuradhapura, Sri Lanka"
        description="Discover pure serenity at Green Safaaya, an exclusive boutique hotel near UNESCO World Heritage sites in Anuradhapura, Sri Lanka. Experience unparalleled luxury and comfort."
        keywords="Anuradhapura luxury hotel, boutique accommodation Sri Lanka, UNESCO heritage sites hotel, Green Safaaya Anuradhapura"
        url="https://greensafaaya.com"
      />
      <div className="min-h-screen">
        <NatureOverlay />
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative h-screen min-h-[800px] overflow-hidden">
          {/* Background with Parallax */}
          <div className="absolute inset-0">
            <motion.img
              style={{ y }}
              src="/View/front view.jpeg"
              alt="Green Safaaya"
              className="w-full h-full object-cover scale-110"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
          </div>

          {/* Hero Content - Magazine Layout */}
          <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              {/* Main Heading */}
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/10"
                >
                  <Star className="h-3 w-3 text-primary" fill="currentColor" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/90">
                    {language === 'en' ? 'Premier Boutique Hotel' : 'ප්‍රමුඛතම බුටික් හෝටලය'}
                  </span>
                </motion.div>

                <h1 className="font-serif text-white leading-[0.85] relative z-20 mix-blend-overlay">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[15vw] md:text-[10rem] font-bold tracking-tighter text-white drop-shadow-2xl"
                    style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
                  >
                    Green
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-[13vw] md:text-[9rem] font-light italic text-primary/90 ml-[8vw] md:ml-40 -mt-6 md:-mt-12 drop-shadow-2xl"
                    style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
                  >
                    Safaaya
                  </motion.div>
                </h1>
              </div>

              {/* Subtext and CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="md:max-w-xs md:mb-8 md:text-right"
              >
                <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed font-light mb-8">
                  {language === 'en'
                    ? 'Experience the seamless blend of ancient heritage and modern luxury in Anuradhapura\'s most exclusive sanctuary.'
                    : 'අනුරාධපුරයේ පැරණි උරුමය සහ නවීන සුඛෝපභෝගීත්වය එක්වන අපගේ සුවිශේෂී නවාතැන අත්විඳින්න.'
                  }
                </p>

                <div className="flex flex-col gap-4">
                  <Button asChild size="lg" className="h-14 text-sm uppercase tracking-widest bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 rounded-none">
                    <Link to="/rooms">
                      {language === 'en' ? 'View Suites' : 'කාමර බලන්න'}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>


          </div>
        </section>

        <Reveal>
          {/* Elegance Banner with Organic Divider */}
          <section className="py-12 relative">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] text-primary/5 fill-current">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
            </div>

            <div className="container mx-auto px-4 mt-8">
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

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] text-background fill-current">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
            </div>
          </section>
        </Reveal>

        {/* About Section - Magazine Layout */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Subtle nature details */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Visual Side */}
                <div className="lg:col-span-7 relative group">
                  <div className="relative z-10 overflow-hidden rounded-lg">
                    <img
                      src="/Balcony/Balcony view.jpeg"
                      alt="Green Safaaya View"
                      className="w-full h-[600px] object-cover transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-10 -right-10 z-20 bg-background p-8 rounded-full shadow-2xl border border-primary/10 hidden md:block">
                    <div className="text-center">
                      <span className="block font-serif text-5xl text-primary">10</span>
                      <span className="block font-sans text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Years of<br />Excellence</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 flex flex-col justify-center h-full pt-10">
                  <div className="mb-8 pl-6 border-l w-px h-20 bg-primary/20"></div>

                  <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-primary mb-6 block">
                    {language === 'en' ? 'Our Heritage' : 'අපගේ උරුමය'}
                  </span>

                  <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-8 leading-[1.1]">
                    {language === 'en' ? 'A Sanctuary of' : 'නිවාතැනක්'}
                    <i className="block font-light text-muted-foreground mt-2">{language === 'en' ? 'Pure Serenity' : 'පරිපූර්ණ සන්සුන්කම'}</i>
                  </h2>

                  <p className="font-sans text-base text-muted-foreground leading-loose mb-10 font-light text-justify">
                    {t('about.description')}
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-4 border-t border-border pt-10">
                    <div>
                      <h4 className="font-serif text-2xl mb-2 text-foreground">Tranquil</h4>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {language === 'en' ? 'Peaceful surroundings ensuring a restful stay.' : 'සන්සුන් පරිසරය.'}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl mb-2 text-foreground">Historic</h4>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {language === 'en' ? 'Moments away from UNESCO World Heritage sites.' : 'ලෝක උරුම අඩවි අසල.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Amenities Section - Clean Grid */}
        <section className="py-24 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-xl">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">
                    {language === 'en' ? 'Comforts' : 'පහසුකම්'}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl">
                    {t('amenities.title')}
                  </h2>
                </div>
                <div className="w-full md:w-auto flex-1 md:mx-10 opacity-50 flex items-center justify-center">
                  <svg width="100%" height="20" viewBox="0 0 400 20" preserveAspectRatio="none" className="text-primary/40 fill-none stroke-current">
                    <path d="M0,10 Q50,0 100,10 T200,10 T300,10 T400,10" strokeWidth="1" />
                    <path d="M0,10 Q50,20 100,10 T200,10 T300,10 T400,10" strokeWidth="1" className="opacity-50" />
                  </svg>
                </div>
                <p className="font-sans text-xs text-muted-foreground max-w-xs leading-relaxed text-right hidden md:block">
                  Everything you need for a perfect stay, curated with attention to detail.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border/30 border border-border/30 overflow-hidden rounded-lg">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center p-8 bg-background hover:bg-secondary/20 transition-all duration-500 aspect-square cursor-default relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <amenity.icon className="h-6 w-6 text-foreground/60 group-hover:text-primary transition-colors duration-500 relative z-10 mb-4" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-500 relative z-10 text-center">
                      {t(amenity.labelKey)}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured Rooms Section */}
        <section className="py-28 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-accent/3 to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <Reveal>
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
            </Reveal>
            <Reveal delay={0.2}>
              <FeatureCarousel>
                {featuredRooms.map((room, index) => (
                  <div key={index} className="px-2"> { /* Add padding wrapper for spacing */}
                    <RoomCard {...room} />
                  </div>
                ))}
              </FeatureCarousel>
              <div className="text-center mt-16">
                <Button asChild variant="outline" size="lg" className="px-10 py-7 text-base border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500">
                  <Link to="/rooms">
                    {t('rooms.viewAll')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials Section */}
        <Reveal>
          <Testimonials />
        </Reveal>



        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-foreground via-foreground/95 to-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_40%)]" />

          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/15 rounded-full" />

          <div className="container mx-auto px-4 relative z-10">
            <Reveal>
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
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
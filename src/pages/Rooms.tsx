import { useLanguage } from '@/contexts/LanguageContext';
import RoomCard from '@/components/RoomCard';
import SEO from '@/components/SEO';
import { Sparkles, Bed, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';
import NatureOverlay from '@/components/NatureOverlay';
// Room images are now served from public directory


const roomsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Rooms at Green Safaaya",
  "description": "Boutique accommodation options at Green Safaaya, Anuradhapura",
  "itemListElement": [
    {
      "@type": "HotelRoom",
      "name": "Master Bedroom I",
      "description": "Elegant master bedroom with king-size bed and premium furnishings",
      "occupancy": { "@type": "QuantitativeValue", "value": 2 },
      "offers": { "@type": "Offer", "price": "85", "priceCurrency": "USD" }
    },
    {
      "@type": "HotelRoom",
      "name": "Master Bedroom II",
      "description": "Spacious master bedroom with natural lighting and warm ambiance",
      "occupancy": { "@type": "QuantitativeValue", "value": 2 },
      "offers": { "@type": "Offer", "price": "85", "priceCurrency": "USD" }
    },
    {
      "@type": "HotelRoom",
      "name": "Single Room I",
      "description": "Cozy single room with double bed and elegant furnishings",
      "occupancy": { "@type": "QuantitativeValue", "value": 1 },
      "offers": { "@type": "Offer", "price": "55", "priceCurrency": "USD" }
    },
    {
      "@type": "HotelRoom",
      "name": "Single Room II",
      "description": "Charming single room with warm natural light",
      "occupancy": { "@type": "QuantitativeValue", "value": 1 },
      "offers": { "@type": "Offer", "price": "55", "priceCurrency": "USD" }
    }
  ]
};

const Rooms = () => {
  const { t, language } = useLanguage();

  const rooms = [
    {
      image: "/bed rooms/Master bedroom .jpeg",
      titleKey: 'room.master1',
      descKey: 'room.master1.desc',
      price: 85,
      roomType: 'master'
    },
    {
      image: "/bed rooms/Master bedroom 1.jpeg",
      titleKey: 'room.master2',
      descKey: 'room.master2.desc',
      price: 85,
      roomType: 'master'
    },
    {
      image: "/bed rooms/single bedroom.jpeg",
      titleKey: 'room.single1',
      descKey: 'room.single1.desc',
      price: 55,
      roomType: 'single'
    },
    {
      image: "/bed rooms/single bedroom 2.jpeg",
      titleKey: 'room.single2',
      descKey: 'room.single2.desc',
      price: 55,
      roomType: 'single'
    },
  ];

  return (
    <>
      <SEO
        title="Rooms & Suites"
        description="Explore our boutique rooms at Green Safaaya. 2 sophisticated master bedrooms and 2 cozy single rooms with modern amenities near Anuradhapura's heritage sites."
        keywords="Anuradhapura hotel rooms, boutique accommodation Sri Lanka, master bedroom Anuradhapura, Green Safaaya rooms"
        url="https://greensafaaya.com/rooms"
        structuredData={roomsStructuredData}
      />
      <div className="min-h-screen">
        <NatureOverlay />

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-8">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary">
                  {language === 'en' ? 'Refined Comfort' : 'සැපසුව සුවපහසුව'}
                </span>
              </div>

              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-foreground mb-8 tracking-tighter leading-[0.9]">
                {language === 'en' ? 'Our' : 'අපගේ'} <span className="text-muted-foreground italic font-light">{language === 'en' ? 'Suites' : 'කාමර'}</span>
              </h1>

              <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
                {language === 'en'
                  ? 'Four thoughtfully appointed rooms designed for your comfort, each offering a unique blend of modern amenities and timeless charm.'
                  : 'ඔබේ සුවපහසුව සඳහා නිර්මාණය කරන ලද අලංකාර කාමර හතරක්, එක් එක් කාමරය නවීන පහසුකම් සහ කාලාතීත ආකර්ෂණය පිළිබඳ අනන්‍ය සම්මිශ්‍රණයක් ලබා දෙයි.'
                }
              </p>

              {/* Room Count Badges */}
              <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-3 px-5 py-3 bg-secondary/30 backdrop-blur-sm border border-border/40 rounded-full hover:border-primary/30 transition-colors duration-300">
                  <Bed className="w-4 h-4 text-primary" />
                  <span className="font-sans text-xs text-foreground tracking-wide">
                    {language === 'en' ? '2 Master Bedrooms' : 'ප්‍රධාන නිදන කාමර 2'}
                  </span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-secondary/30 backdrop-blur-sm border border-border/40 rounded-full hover:border-primary/30 transition-colors duration-300">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-sans text-xs text-foreground tracking-wide">
                    {language === 'en' ? '2 Single Rooms' : 'තනි කාමර 2'}
                  </span>
                </div>
              </div>

              <div className="mt-12 flex justify-center opacity-30">
                <svg width="100" height="20" viewBox="0 0 100 20" className="text-primary fill-current">
                  <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-20 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_50%)]" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Master Bedrooms Section */}
            <div className="mb-24">
              <Reveal>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-primary/30" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary">
                      {language === 'en' ? 'Luxury Suites' : 'සුඛෝපභෝගී කාමර'}
                    </span>
                    <div className="h-px w-8 bg-primary/30" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">
                    {language === 'en' ? 'Master Bedrooms' : 'ප්‍රධාන නිදන කාමර'}
                  </h2>
                  <p className="font-sans text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
                    {language === 'en'
                      ? 'Spacious and elegant rooms for couples and discerning travelers'
                      : 'යුවළ සහ විචක්ෂණ සංචාරකයන් සඳහා පුළුල් හා අලංකාර කාමර'}
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {rooms.filter(r => r.roomType === 'master').map((room, index) => (
                  <div key={`master-${index}`}>
                    <RoomCard {...room} />
                  </div>
                ))}
              </div>
            </div>

            {/* Single Rooms Section */}
            <div className="mb-12">
              <Reveal>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-primary/30" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary">
                      {language === 'en' ? 'Cozy Retreats' : 'සුවපහසු නවාතැන්'}
                    </span>
                    <div className="h-px w-8 bg-primary/30" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">
                    {language === 'en' ? 'Single Rooms' : 'තනි කාමර'}
                  </h2>
                  <p className="font-sans text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
                    {language === 'en'
                      ? 'Cozy and comfortable rooms perfect for solo travelers'
                      : 'තනි සංචාරකයන් සඳහා සුවපහසු හ කාමර'}
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {rooms.filter(r => r.roomType === 'single').map((room, index) => (
                  <div key={`single-${index}`}>
                    <RoomCard {...room} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Info Banner - Glassmorphism */}
        <div className="container mx-auto px-4 pb-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/20">
              <div className="absolute inset-0 bg-primary/5 backdrop-blur-md"></div>
              {/* Noise overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

              <div className="relative z-10 py-16 px-6 text-center">
                <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">
                  {language === 'en' ? 'Special Rates for Extended Stays' : 'දිගු නවාතැන් සඳහා විශේෂ මිල ගණන්'}
                </h3>
                <p className="font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light mb-8">
                  {language === 'en'
                    ? 'Planning an extended getaway? Contact us for exclusive weekly and monthly rates tailored for discerning travelers.'
                    : 'දිගු නිවාඩුවක් සැලසුම් කරනවාද? විචක්ෂණ සංචාරකයන් සඳහා සකස් කළ සතිපතා සහ මාසික විශේෂ මිල ගණන් සඳහා අප අමතන්න.'
                  }
                </p>

                <div className="w-16 h-px bg-primary/20 mx-auto"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Rooms;

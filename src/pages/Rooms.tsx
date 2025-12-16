import { useLanguage } from '@/contexts/LanguageContext';
import RoomCard from '@/components/RoomCard';
import SEO from '@/components/SEO';
import VirtualTour from '@/components/VirtualTour';
import { Sparkles, Bed, Users } from 'lucide-react';
import masterBedroom1 from '@/assets/rooms/master-bedroom-1.jpeg';
import masterBedroom2 from '@/assets/rooms/master-bedroom-2.jpeg';
import singleRoom1 from '@/assets/rooms/single-room-1.jpeg';
import singleRoom2 from '@/assets/rooms/single-room-2.jpeg';

const roomsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Rooms at Thaara Residence",
  "description": "Boutique accommodation options at Thaara Residence, Anuradhapura",
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
      image: masterBedroom1, 
      titleKey: 'room.master1', 
      descKey: 'room.master1.desc', 
      price: 85,
      roomType: 'master'
    },
    { 
      image: masterBedroom2, 
      titleKey: 'room.master2', 
      descKey: 'room.master2.desc', 
      price: 85,
      roomType: 'master'
    },
    { 
      image: singleRoom1, 
      titleKey: 'room.single1', 
      descKey: 'room.single1.desc', 
      price: 55,
      roomType: 'single'
    },
    { 
      image: singleRoom2, 
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
        description="Explore our boutique rooms at Thaara Residence. 2 elegant master bedrooms and 2 cozy single rooms with modern amenities near Anuradhapura's heritage sites."
        keywords="Anuradhapura hotel rooms, boutique accommodation Sri Lanka, master bedroom Anuradhapura, single room heritage hotel"
        url="https://thaararesidence.com/rooms"
        structuredData={roomsStructuredData}
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
          <div className="absolute inset-0 bg-luxury-radial opacity-50" />
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-full" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-sans text-sm text-primary tracking-wide">
                {language === 'en' ? 'Refined Comfort' : 'සැපසුව සුවපහසුව'}
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              {t('rooms.title')}
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Four elegantly appointed rooms designed for your comfort, each offering a unique blend of modern amenities and timeless charm'
                : 'ඔබේ සුවපහසුව සඳහා නිර්මාණය කරන ලද අලංකාර කාමර හතරක්, එක් එක් කාමරය නවීන පහසුකම් සහ කාලාතීත ආකර්ෂණය පිළිබඳ අනන්‍ය සම්මිශ්‍රණයක් ලබා දෙයි'
              }
            </p>
            
            {/* Room Count Badges */}
            <div className="mt-8 flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                <Bed className="w-5 h-5 text-primary" />
                <span className="font-sans text-sm text-foreground">
                  {language === 'en' ? '2 Master Bedrooms' : 'ප්‍රධාන නිදන කාමර 2'}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-sans text-sm text-foreground">
                  {language === 'en' ? '2 Single Rooms' : 'තනි කාමර 2'}
                </span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-20 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Master Bedrooms Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {language === 'en' ? 'Master Bedrooms' : 'ප්‍රධාන නිදන කාමර'}
                </h2>
                <p className="font-sans text-muted-foreground">
                  {language === 'en' 
                    ? 'Spacious and elegant rooms for couples and discerning travelers' 
                    : 'යුවළ සහ විචක්ෂණ සංචාරකයන් සඳහා පුළුල් හා අලංකාර කාමර'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {rooms.filter(r => r.roomType === 'master').map((room, index) => (
                  <RoomCard key={index} {...room} />
                ))}
              </div>
            </div>
            
            {/* Single Rooms Section */}
            <div>
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {language === 'en' ? 'Single Rooms' : 'තනි කාමර'}
                </h2>
                <p className="font-sans text-muted-foreground">
                  {language === 'en' 
                    ? 'Cozy and comfortable rooms perfect for solo travelers' 
                    : 'තනි සංචාරකයන් සඳහා සුවපහසු හා සුවපහසු කාමර'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {rooms.filter(r => r.roomType === 'single').map((room, index) => (
                  <RoomCard key={index} {...room} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <VirtualTour />

        {/* Info Banner */}
        <section className="py-16 bg-gradient-to-r from-secondary via-card to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-luxury-radial opacity-30" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Special Rates for Extended Stays' : 'දිගු නවාතැන් සඳහා විශේෂ මිල ගණන්'}
            </h3>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Planning an extended getaway? Contact us for exclusive weekly and monthly rates tailored for discerning travelers.'
                : 'දිගු නිවාඩුවක් සැලසුම් කරනවාද? විචක්ෂණ සංචාරකයන් සඳහා සකස් කළ සතිපතා සහ මාසික විශේෂ මිල ගණන් සඳහා අප අමතන්න.'
              }
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rooms;

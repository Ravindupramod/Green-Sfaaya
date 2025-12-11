import { useLanguage } from '@/contexts/LanguageContext';
import RoomCard from '@/components/RoomCard';
import { Sparkles } from 'lucide-react';
import room from '@/assets/room.jpeg';
import room1 from '@/assets/room_1.jpeg';
import room2 from '@/assets/room_2.jpeg';
import balcony from '@/assets/balcony.jpeg';

const Rooms = () => {
  const { t, language } = useLanguage();

  const rooms = [
    { image: room1, titleKey: 'room.deluxe', descKey: 'room.deluxe.desc', price: 85 },
    { image: room2, titleKey: 'room.superior', descKey: 'room.superior.desc', price: 95 },
    { image: room, titleKey: 'room.family', descKey: 'room.family.desc', price: 120 },
    { image: balcony, titleKey: 'room.executive', descKey: 'room.executive.desc', price: 150 },
  ];

  return (
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
              ? 'Each room is thoughtfully designed as a peaceful sanctuary, where modern luxury meets spiritual tranquility'
              : 'සෑම කාමරයක්ම නූතන සුඛෝපභෝගීත්වය අධ්‍යාත්මික සන්සුන්කම හමුවන සාමකාමී සෙවණැල්ලක් ලෙස සැලකිල්ලෙන් නිර්මාණය කර ඇත'
            }
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-gradient-to-r from-secondary via-card to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-radial opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Special Rates for Extended Stays' : 'දිගු නවාතැන් සඳහා විශේෂ මිල ගණන්'}
          </h3>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Planning a spiritual retreat? Contact us for exclusive weekly and monthly rates tailored for pilgrims and meditation practitioners.'
              : 'අධ්‍යාත්මික භාවනා නවාතැනක් සැලසුම් කරනවාද? වන්දනාකරුවන් සහ භාවනා අභ්‍යාසකයින් සඳහා සකස් කළ සතිපතා සහ මාසික විශේෂ මිල ගණන් සඳහා අප අමතන්න.'
            }
          </p>
        </div>
      </section>
    </div>
  );
};

export default Rooms;

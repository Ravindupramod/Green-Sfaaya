import { useLanguage } from '@/contexts/LanguageContext';
import RoomCard from '@/components/RoomCard';
import room from '@/assets/room.jpeg';
import room1 from '@/assets/room_1.jpeg';
import room2 from '@/assets/room_2.jpeg';
import balcony from '@/assets/balcony.jpeg';

const Rooms = () => {
  const { t } = useLanguage();

  const rooms = [
    { image: room1, titleKey: 'room.deluxe', descKey: 'room.deluxe.desc', price: 85 },
    { image: room2, titleKey: 'room.superior', descKey: 'room.superior.desc', price: 95 },
    { image: room, titleKey: 'room.family', descKey: 'room.family.desc', price: 120 },
    { image: balcony, titleKey: 'room.executive', descKey: 'room.executive.desc', price: 150 },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('rooms.title')}
          </h1>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;

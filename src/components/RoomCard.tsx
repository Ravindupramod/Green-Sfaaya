import { Link } from 'react-router-dom';
import { Wifi, Tv, Bath, Wind } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface RoomCardProps {
  image: string;
  titleKey: string;
  descKey: string;
  price: number;
}

const RoomCard = ({ image, titleKey, descKey, price }: RoomCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden hover-lift bg-card border-border">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full">
          <span className="font-sans text-sm font-semibold">${price}</span>
          <span className="font-sans text-xs">/{t('rooms.perNight')}</span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-card-foreground">{t(titleKey)}</h3>
        <p className="text-muted-foreground font-sans text-sm mb-4 line-clamp-2">
          {t(descKey)}
        </p>
        <div className="flex items-center gap-4 mb-4 text-muted-foreground">
          <Wifi className="h-4 w-4" />
          <Tv className="h-4 w-4" />
          <Bath className="h-4 w-4" />
          <Wind className="h-4 w-4" />
        </div>
        <Button asChild className="w-full">
          <Link to="/contact">{t('rooms.inquire')}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoomCard;

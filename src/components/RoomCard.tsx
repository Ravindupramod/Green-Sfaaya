import { Link } from 'react-router-dom';
import { Wifi, Tv, Bath, Wind, ArrowRight, Star } from 'lucide-react';
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
    <Card className="group overflow-hidden hover-lift bg-card border-border/50 shadow-sm hover:shadow-luxury">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-luxury-gradient text-primary-foreground px-4 py-2 rounded-full shadow-luxury">
          <span className="font-sans text-lg font-bold">${price}</span>
          <span className="font-sans text-xs opacity-90">/{t('rooms.perNight')}</span>
        </div>
        <div className="absolute top-4 left-4 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-3 w-3 text-gold-light fill-current" />
          ))}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-2xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
          {t(titleKey)}
        </h3>
        <p className="text-muted-foreground font-sans text-sm mb-5 leading-relaxed line-clamp-2">
          {t(descKey)}
        </p>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
            <Wifi className="h-3.5 w-3.5 text-primary" />
            <span className="font-sans text-xs text-muted-foreground">WiFi</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
            <Tv className="h-3.5 w-3.5 text-primary" />
            <span className="font-sans text-xs text-muted-foreground">TV</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
            <Bath className="h-3.5 w-3.5 text-primary" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
            <Wind className="h-3.5 w-3.5 text-primary" />
          </div>
        </div>
        <Button asChild className="w-full group/btn bg-primary hover:bg-primary/90">
          <Link to="/contact" className="flex items-center justify-center gap-2">
            {t('rooms.inquire')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
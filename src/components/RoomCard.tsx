import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Star, Wifi, Tv, Bath, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from './Reveal';

interface RoomCardProps {
  image: string;
  titleKey: string;
  descKey: string;
  price: number;
}

const RoomCard = ({ image, titleKey, descKey, price }: RoomCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="group relative isolate h-[500px] w-full overflow-hidden rounded-3xl bg-secondary/20 shadow-lg ring-1 ring-white/10 dark:ring-white/5 transition-all duration-500 hover:shadow-2xl">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image}
          alt={t(titleKey)}
          className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
            <Star className="h-3 w-3 text-gold" fill="currentColor" />
            <span>Premium Suite</span>
          </div>
        </Reveal>

        <h3 className="mb-2 font-serif text-3xl font-medium tracking-tight text-white transition-transform duration-500 group-hover:-translate-y-2">
          {t(titleKey)}
        </h3>
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
      </div>
    </div>
  );
};

export default RoomCard;
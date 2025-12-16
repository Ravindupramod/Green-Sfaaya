import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Key, ExternalLink } from 'lucide-react';

interface LocationPoint {
  name: string;
  nameSi: string;
  coordinates: [number, number];
  type: 'hotel' | 'heritage';
  distance?: string;
}

const locations: LocationPoint[] = [
  {
    name: 'Thaara Residence',
    nameSi: 'තාර නිවාසය',
    coordinates: [80.4037, 8.3114],
    type: 'hotel',
  },
  {
    name: 'Ruwanwelisaya Stupa',
    nameSi: 'රුවන්වැලිසෑය',
    coordinates: [80.3961, 8.3467],
    type: 'heritage',
    distance: '4 km',
  },
  {
    name: 'Jaya Sri Maha Bodhi',
    nameSi: 'ජය ශ්‍රී මහා බෝධිය',
    coordinates: [80.3970, 8.3448],
    type: 'heritage',
    distance: '4.2 km',
  },
  {
    name: 'Jetavanaramaya',
    nameSi: 'ජේතවනාරාමය',
    coordinates: [80.4024, 8.3517],
    type: 'heritage',
    distance: '4.5 km',
  },
  {
    name: 'Abhayagiri Monastery',
    nameSi: 'අභයගිරි විහාරය',
    coordinates: [80.3994, 8.3633],
    type: 'heritage',
    distance: '5.8 km',
  },
  {
    name: 'Thuparamaya',
    nameSi: 'ථූපාරාමය',
    coordinates: [80.3958, 8.3530],
    type: 'heritage',
    distance: '4.7 km',
  },
  {
    name: 'Isurumuniya Temple',
    nameSi: 'ඉසුරුමුණිය විහාරය',
    coordinates: [80.3890, 8.3303],
    type: 'heritage',
    distance: '2.5 km',
  },
  {
    name: 'Twin Ponds (Kuttam Pokuna)',
    nameSi: 'කුට්ටම් පොකුණ',
    coordinates: [80.3994, 8.3617],
    type: 'heritage',
    distance: '5.6 km',
  },
  {
    name: 'Mihintale',
    nameSi: 'මිහින්තලය',
    coordinates: [80.5111, 8.3508],
    type: 'heritage',
    distance: '12 km',
  },
];

const LocationMap = () => {
  const { language } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [tokenInput, setTokenInput] = useState('');

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [80.4037, 8.34],
        zoom: 11.5,
        pitch: 30,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        setIsMapLoaded(true);

        // Add markers for each location
        locations.forEach((location) => {
          const el = document.createElement('div');
          el.className = 'custom-marker';
          
          if (location.type === 'hotel') {
            el.innerHTML = `
              <div class="relative">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rotate-45 -z-10"></div>
              </div>
            `;
          } else {
            el.innerHTML = `
              <div class="relative">
                <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
            `;
          }

          const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold text-foreground">${language === 'en' ? location.name : location.nameSi}</h3>
                ${location.distance ? `<p class="text-xs text-muted-foreground mt-1">${language === 'en' ? 'Distance from hotel:' : 'හෝටලයේ සිට දුර:'} ${location.distance}</p>` : ''}
                ${location.type === 'hotel' ? `<p class="text-xs text-primary font-medium mt-1">${language === 'en' ? 'Your Stay' : 'ඔබේ නවාතැන'}</p>` : ''}
              </div>
            `);

          new mapboxgl.Marker(el)
            .setLngLat(location.coordinates)
            .setPopup(popup)
            .addTo(map.current!);
        });
      });

      map.current.on('error', () => {
        setIsMapLoaded(false);
        setMapboxToken('');
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setIsMapLoaded(false);
    }
  };

  const handleTokenSubmit = () => {
    if (tokenInput.trim()) {
      setMapboxToken(tokenInput.trim());
      localStorage.setItem('mapbox_token', tokenInput.trim());
      initializeMap(tokenInput.trim());
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setTokenInput(savedToken);
      initializeMap(savedToken);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-sans text-sm uppercase tracking-[0.25em] text-primary font-medium">
              {language === 'en' ? 'Location' : 'ස්ථානය'}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'en' ? 'Explore' : 'ගවේෂණය කරන්න'}
            <span className="block text-gradient-gold">{language === 'en' ? 'Heritage Sites' : 'උරුම ස්ථාන'}</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'Discover the ancient wonders of Anuradhapura, all within easy reach of Thaara Residence'
              : 'අනුරාධපුරයේ පුරාණ ආශ්චර්යයන් සොයා ගන්න, සියල්ල තාර නිවාසයට පහසුවෙන් ළඟා විය හැකිය'
            }
          </p>
        </div>

        {!mapboxToken ? (
          <div className="max-w-xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-luxury border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Key className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {language === 'en' ? 'Enable Interactive Map' : 'අන්තර්ක්‍රියාකාරී සිතියම සක්‍රීය කරන්න'}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {language === 'en' ? 'Enter your Mapbox public token' : 'ඔබගේ Mapbox පොදු ටෝකනය ඇතුළත් කරන්න'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="pk.eyJ1Ijo..."
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  className="font-mono text-sm"
                />
                <Button 
                  onClick={handleTokenSubmit} 
                  className="w-full"
                  disabled={!tokenInput.trim()}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Load Map' : 'සිතියම පූරණය කරන්න'}
                </Button>
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {language === 'en' ? 'Get your free Mapbox token' : 'ඔබගේ නොමිලේ Mapbox ටෝකනය ලබාගන්න'}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div 
              ref={mapContainer} 
              className="w-full h-[500px] md:h-[600px] rounded-2xl shadow-luxury-lg border border-border/50 overflow-hidden"
            />
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50">
              <h4 className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-3">
                {language === 'en' ? 'Legend' : 'පුරාවෘත්ත'}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <span className="font-sans text-sm text-foreground">Thaara Residence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-accent rounded-full" />
                  <span className="font-sans text-sm text-foreground">
                    {language === 'en' ? 'UNESCO Sites' : 'යුනෙස්කෝ ස්ථාන'}
                  </span>
                </div>
              </div>
            </div>

            {/* Sites list */}
            <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50 max-h-[300px] overflow-y-auto hidden md:block">
              <h4 className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-3">
                {language === 'en' ? 'Nearby Sites' : 'අවට ස්ථාන'}
              </h4>
              <div className="space-y-2">
                {locations.filter(l => l.type === 'heritage').slice(0, 5).map((location, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4">
                    <span className="font-sans text-sm text-foreground truncate max-w-[140px]">
                      {language === 'en' ? location.name : location.nameSi}
                    </span>
                    <span className="font-sans text-xs text-muted-foreground whitespace-nowrap">
                      {location.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationMap;

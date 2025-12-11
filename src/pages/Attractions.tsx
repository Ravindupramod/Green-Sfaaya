import { MapPin, Clock, Star, Compass } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import attraction images
import ruwanwelisaya from '@/assets/attractions/ruwanwelisaya.jpg';
import jayaSriMahaBodhi from '@/assets/attractions/jaya-sri-maha-bodhi.jpg';
import isurumuniya from '@/assets/attractions/isurumuniya.jpg';
import thuparamaya from '@/assets/attractions/thuparamaya.jpg';
import abhayagiri from '@/assets/attractions/abhayagiri.jpg';
import jetavanaramaya from '@/assets/attractions/jetavanaramaya.jpg';
import twinPonds from '@/assets/attractions/twin-ponds.jpg';
import mihintale from '@/assets/attractions/mihintale.jpg';

const Attractions = () => {
  const { t, language } = useLanguage();

  const attractions = [
    {
      name: { en: 'Ruwanwelisaya Stupa', si: 'රුවන්වැලිසෑය' },
      description: {
        en: 'One of the most sacred Buddhist stupas, built by King Dutugemunu in 140 BC. A magnificent white dome that towers over the ancient city, standing at 103 meters tall.',
        si: 'ක්‍රි.පූ. 140 දී දුටුගැමුණු රජු විසින් ඉදිකරන ලද වඩාත්ම පූජනීය බෞද්ධ ස්තූපයකි. මීටර් 103ක් උස සුදු පැහැති විශාල කුම්භයකි.',
      },
      distance: '5 km',
      time: '10 min',
      image: ruwanwelisaya,
      highlight: true,
      tag: { en: 'UNESCO Site', si: 'යුනෙස්කෝ අඩවිය' },
    },
    {
      name: { en: 'Jaya Sri Maha Bodhi', si: 'ජය ශ්‍රී මහා බෝධිය' },
      description: {
        en: 'The sacred Bo Tree, grown from a sapling of the original tree under which Buddha attained enlightenment. Over 2,300 years old, it is the oldest documented tree in the world.',
        si: 'බුදුරදුන් බුද්ධත්වය ලැබූ මුල් ගසේ පැලයකින් වැඩුණු පූජනීය බෝ ගස. අවුරුදු 2,300කට වැඩි පැරණි, ලෝකයේ පැරණිතම ලේඛනගත ගසයි.',
      },
      distance: '4.5 km',
      time: '8 min',
      image: jayaSriMahaBodhi,
      highlight: true,
      tag: { en: 'Sacred Site', si: 'පූජනීය ස්ථානය' },
    },
    {
      name: { en: 'Isurumuniya Temple', si: 'ඉසුරුමුණිය විහාරය' },
      description: {
        en: 'Ancient rock temple famous for its exquisite stone carvings, including the renowned "Isurumuniya Lovers" sculpture. Built in the 3rd century BC with a beautiful lotus pond.',
        si: '"ඉසුරුමුණිය ප්‍රේමීන්" ප්‍රසිද්ධ ගල් කැටයම් ඇතුළු ප්‍රශස්ත ගල් කැටයම් සඳහා ප්‍රසිද්ධ පුරාණ ගල් විහාරය.',
      },
      distance: '6 km',
      time: '12 min',
      image: isurumuniya,
      highlight: false,
      tag: { en: 'Rock Temple', si: 'ගල් විහාරය' },
    },
    {
      name: { en: 'Thuparamaya', si: 'ථූපාරාමය' },
      description: {
        en: 'The first dagoba built in Sri Lanka after the introduction of Buddhism in 3rd century BC. Houses the right collarbone relic of Lord Buddha.',
        si: 'බුදුදහම හඳුන්වාදීමෙන් පසු ශ්‍රී ලංකාවේ ඉදිකළ පළමු දාගැබ. බුදුරදුන්ගේ දකුණු අකුල් ධාතු තැන්පත් කර ඇත.',
      },
      distance: '5.5 km',
      time: '11 min',
      image: thuparamaya,
      highlight: false,
      tag: { en: 'First Stupa', si: 'පළමු ස්තූපය' },
    },
    {
      name: { en: 'Abhayagiri Dagoba', si: 'අභයගිරි දාගැබ' },
      description: {
        en: 'Once one of the largest structures in the ancient world, standing at 75 meters. This massive stupa was the centerpiece of a great monastery complex housing 5,000 monks.',
        si: 'එකල ලෝකයේ විශාලතම ව්‍යුහයන්ගෙන් එකක් වූ මෙම දැවැන්ත ස්තූපය මහා විහාරයක මධ්‍යස්ථානය විය.',
      },
      distance: '7 km',
      time: '15 min',
      image: abhayagiri,
      highlight: true,
      tag: { en: 'Monastery', si: 'විහාරය' },
    },
    {
      name: { en: 'Jetavanaramaya', si: 'ජේතවනාරාමය' },
      description: {
        en: 'The tallest stupa in the ancient world at 122 meters and third tallest structure after the pyramids. A UNESCO World Heritage Site and architectural marvel.',
        si: 'පුරාණ ලෝකයේ උසම ස්තූපය මීටර් 122 සහ පිරමීඩවලට පසු තුන්වන උසම ව්‍යුහය. යුනෙස්කෝ ලෝක උරුම අඩවියකි.',
      },
      distance: '6.5 km',
      time: '13 min',
      image: jetavanaramaya,
      highlight: true,
      tag: { en: 'UNESCO Site', si: 'යුනෙස්කෝ අඩවිය' },
    },
    {
      name: { en: 'Kuttam Pokuna (Twin Ponds)', si: 'කුට්ටම් පොකුණ' },
      description: {
        en: 'Ancient bathing pools built for Buddhist monks in the 9th century. Masterpieces of ancient hydraulic engineering with ornate stone carvings and underground water filtration.',
        si: '9 වන සියවසේ බෞද්ධ භික්ෂූන් සඳහා ඉදිකරන ලද පුරාණ ස්නාන තටාක. පුරාණ ජලසම්පාදන ඉංජිනේරු විද්‍යාවේ අති විශිෂ්ට නිර්මාණයකි.',
      },
      distance: '7.5 km',
      time: '16 min',
      image: twinPonds,
      highlight: false,
      tag: { en: 'Heritage', si: 'උරුමය' },
    },
    {
      name: { en: 'Mihintale', si: 'මිහින්තලය' },
      description: {
        en: 'The sacred mountain where Buddhism was first introduced to Sri Lanka in 247 BC. Climb 1,840 steps to reach the summit and enjoy panoramic views of the ancient city.',
        si: 'ක්‍රි.පූ. 247 දී ශ්‍රී ලංකාවට බුදුදහම ප්‍රථම වරට හඳුන්වා දුන් පූජනීය කන්ද. පියගැට පෙළ 1,840ක් නැග මුදුනට ළඟා වන්න.',
      },
      distance: '12 km',
      time: '25 min',
      image: mihintale,
      highlight: true,
      tag: { en: 'Sacred Mountain', si: 'පූජනීය කන්ද' },
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Compass className="h-4 w-4 text-primary" />
            <span className="font-sans text-sm text-primary font-medium tracking-wide">
              {language === 'en' ? 'UNESCO World Heritage' : 'යුනෙස්කෝ ලෝක උරුමය'}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('attractions.title')}
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('attractions.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Star className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              {language === 'en' ? 'Must-Visit Sacred Sites' : 'අනිවාර්යයෙන් නැරඹිය යුතු පූජනීය ස්ථාන'}
            </h2>
            <Star className="h-5 w-5 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Featured Grid - Larger Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {attractions.filter(a => a.highlight).slice(0, 4).map((attraction, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card border-border hover-lift cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {attraction.tag[language]}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {attraction.name[language]}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="font-sans">{attraction.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span className="font-sans">{attraction.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {attraction.description[language]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Attractions - Smaller Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.filter(a => !a.highlight || attractions.filter(x => x.highlight).indexOf(a) >= 4).map((attraction, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card border-border hover-lift cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                    {attraction.tag[language]}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                    {attraction.name[language]}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-3 line-clamp-2">
                    {attraction.description[language]}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span className="font-sans">{attraction.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary" />
                      <span className="font-sans">{attraction.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Experience Ancient History' : 'පුරාණ ඉතිහාසය අත්විඳින්න'}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                {language === 'en' 
                  ? 'Thaara Residence is perfectly located to explore all UNESCO World Heritage sites in Anuradhapura. Our concierge can arrange guided tours, transportation, and provide detailed information about each sacred site.'
                  : 'අනුරාධපුරයේ සියලුම යුනෙස්කෝ ලෝක උරුම අඩවි ගවේෂණය කිරීමට තාර නිවාසය පරිපූර්ණ ස්ථානයක පිහිටා ඇත. අපගේ සේවකයින්ට මාර්ගෝපදේශිත සංචාර, ප්‍රවාහනය සහ සෑම පූජනීය ස්ථානයක් ගැනම සවිස්තරාත්මක තොරතුරු සැපයිය හැකිය.'
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-sans text-foreground">{language === 'en' ? '8 UNESCO Sites Nearby' : 'අසල යුනෙස්කෝ අඩවි 8ක්'}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-sans text-foreground">{language === 'en' ? 'All within 30 min drive' : 'සියල්ල මිනිත්තු 30 ඇතුළත'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            {t('contact.location')}
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31582.83099254844!2d80.37864!3d8.3114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf4f0e0e7f7d7%3A0x4c9f0a0a0a0a0a0a!2sNew%20Town%2C%20Anuradhapura!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thaara Residence Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;

import { MapPin, Clock, Star, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import NatureOverlay from '@/components/NatureOverlay';

// Import attraction images
// Attraction images are now served from public directory


const attractionsStructuredData = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Anuradhapura Sacred City",
  "description": "UNESCO World Heritage Site featuring ancient Buddhist monuments, stupas, and the sacred Bo Tree",
  "touristType": ["Buddhist Pilgrims", "Spiritual Travelers", "History Enthusiasts"],
  "includesAttraction": [
    { "@type": "TouristAttraction", "name": "Ruwanwelisaya Stupa", "description": "Sacred Buddhist stupa built by King Dutugemunu" },
    { "@type": "TouristAttraction", "name": "Jaya Sri Maha Bodhi", "description": "The oldest documented tree in the world, over 2,300 years old" },
    { "@type": "TouristAttraction", "name": "Isurumuniya Temple", "description": "Ancient rock temple with famous stone carvings" },
    { "@type": "TouristAttraction", "name": "Thuparamaya", "description": "First dagaba built in Sri Lanka after introduction of Buddhism" },
    { "@type": "TouristAttraction", "name": "Abhayagiri Monastery", "description": "Ancient Buddhist monastery and stupa complex" },
    { "@type": "TouristAttraction", "name": "Jetavanaramaya", "description": "One of the tallest ancient structures in the world" },
    { "@type": "TouristAttraction", "name": "Kuttam Pokuna (Twin Ponds)", "description": "Ancient bathing pools with sophisticated hydraulic engineering" },
    { "@type": "TouristAttraction", "name": "Mihintale", "description": "Birthplace of Buddhism in Sri Lanka" }
  ]
};

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
      image: "/ruwanweliseya.jpg",
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
      image: "/Jaya-Siri-Maha-Bodhi.jpg",
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
      image: "/isurumuniya.jpg",
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
      image: "/Thuparamaya.webp",
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
      image: "/abhayagiri-stupa-is-located.jpg",
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
      image: "/jethawanaramaya.jpg",
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
      image: "/Kuttam Pokuna (Twin Ponds).jpg",
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
      image: "/Mihintale_1920x700.jpg",
      highlight: true,
      tag: { en: 'Sacred Mountain', si: 'පූජනීය කන්ද' },
    },
  ];

  return (
    <>
      <SEO
        title="Nearby Attractions"
        description="Discover UNESCO World Heritage Buddhist sites near Green Safaaya including Ruwanwelisaya, Jaya Sri Maha Bodhi, and Mihintale. Perfect base for your heritage exploration."
        keywords="Anuradhapura attractions, UNESCO sites Sri Lanka, Buddhist temples, Ruwanwelisaya, Sacred Bo Tree, Mihintale"
        url="https://greensafaaya.com/attractions"
        structuredData={attractionsStructuredData}
      />
      <div className="min-h-screen">
        <NatureOverlay />

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-8">
                <Compass className="h-3 w-3 text-primary" />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary">
                  {language === 'en' ? 'History & Heritage' : 'ඉතිහාසය සහ උරුමය'}
                </span>
              </div>

              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-foreground mb-8 tracking-tighter leading-[0.9]">
                {language === 'en' ? 'Unesco' : 'යුනෙස්කෝ'} <span className="text-muted-foreground italic font-light">{language === 'en' ? 'Sites' : 'අඩවි'}</span>
              </h1>

              <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
                {t('attractions.subtitle')}
              </p>

              <div className="mt-12 flex justify-center opacity-30">
                <svg width="100" height="20" viewBox="0 0 100 20" className="text-primary fill-current">
                  <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured Attractions */}
        <section className="py-16 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.primary.DEFAULT)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <Reveal>
              <div className="flex items-center justify-center gap-3 mb-12">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                <Star className="h-4 w-4 text-primary" />
                <h2 className="font-serif text-2xl font-semibold text-foreground tracking-wide">
                  {language === 'en' ? 'Must-Visit Sacred Sites' : 'අනිවාර්යයෙන් නැරඹිය යුතු පූජනීය ස්ථාන'}
                </h2>
                <Star className="h-4 w-4 text-primary" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
            </Reveal>

            {/* Featured Grid - Larger Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {attractions.filter(a => a.highlight).slice(0, 4).map((attraction, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <Card
                    className="group overflow-hidden bg-card border-border hover-lift cursor-pointer h-full"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.name[language]}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                        {attraction.tag[language]}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-serif text-2xl font-bold text-white mb-2">
                          {attraction.name[language]}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
                    <CardContent className="p-6 relative">
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        {attraction.description[language]}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>

            {/* More Attractions - Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {attractions.filter(a => !a.highlight || attractions.filter(x => x.highlight).indexOf(a) >= 4).map((attraction, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <Card
                    className="group overflow-hidden bg-card border-border hover-lift cursor-pointer h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.name[language]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                        {attraction.tag[language]}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                        {attraction.name[language]}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {attraction.description[language]}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-primary/20">
                <div className="absolute inset-0 bg-primary/5 backdrop-blur-md"></div>
                <div className="relative z-10 p-8 md:p-12 text-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {language === 'en' ? 'Experience Ancient History' : 'පුරාණ ඉතිහාසය අත්විඳින්න'}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                    {language === 'en'
                      ? 'Green Safaaya is perfectly located to explore all UNESCO World Heritage sites in Anuradhapura. Our concierge can arrange guided tours, transportation, and provide detailed information about each sacred site.'
                      : 'අනුරාධපුරයේ සියලුම යුනෙස්කෝ ලෝක උරුම අඩවි ගවේෂණය කිරීමට Green Safaaya නිවාසය පරිපූර්ණ ස්ථානයක පිහිටා ඇත. අපගේ සේවකයින්ට මාර්ගෝපදේශිත සංචාර, ප්‍රවාහනය සහ සෑම පූජනීය ස්ථානයක් ගැනම සවිස්තරාත්මක තොරතුරු සැපයිය හැකිය.'
                    }
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-sm rounded-full border border-border shadow-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-sans text-foreground">{language === 'en' ? '8 UNESCO Sites Nearby' : 'අසල යුනෙස්කෝ අඩවි 8ක්'}</span>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-sm rounded-full border border-border shadow-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-sans text-foreground">{language === 'en' ? 'All within 30 min drive' : 'සියල්ල මිනිත්තු 30 ඇතුළත'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>


      </div>
    </>
  );
};

export default Attractions;

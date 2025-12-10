import { MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Attractions = () => {
  const { t, language } = useLanguage();

  const attractions = [
    {
      name: { en: 'Ruwanwelisaya Stupa', si: 'රුවන්වැලිසෑය' },
      description: {
        en: 'One of the most sacred Buddhist stupas, built by King Dutugemunu in 140 BC. A magnificent white dome that towers over the ancient city.',
        si: 'ක්‍රි.පූ. 140 දී දුටුගැමුණු රජු විසින් ඉදිකරන ලද වඩාත්ම පූජනීය බෞද්ධ ස්තූපයකි.',
      },
      distance: '5 km',
      time: '10 min',
    },
    {
      name: { en: 'Jaya Sri Maha Bodhi', si: 'ජය ශ්‍රී මහා බෝධිය' },
      description: {
        en: 'The sacred Bo Tree, grown from a sapling of the original tree under which Buddha attained enlightenment. Over 2,300 years old.',
        si: 'බුදුරදුන් බුද්ධත්වය ලැබූ මුල් ගසේ පැලයකින් වැඩුණු පූජනීය බෝ ගස. අවුරුදු 2,300කට වැඩි පැරණි.',
      },
      distance: '4.5 km',
      time: '8 min',
    },
    {
      name: { en: 'Isurumuniya Temple', si: 'ඉසුරුමුණිය විහාරය' },
      description: {
        en: 'Ancient rock temple famous for its stone carvings, including the renowned "Isurumuniya Lovers" sculpture.',
        si: '"ඉසුරුමුණිය ප්‍රේමීන්" ප්‍රසිද්ධ ගල් කැටයම් ඇතුළු ගල් කැටයම් සඳහා ප්‍රසිද්ධ පුරාණ ගල් විහාරය.',
      },
      distance: '6 km',
      time: '12 min',
    },
    {
      name: { en: 'Thuparamaya', si: 'ථූපාරාමය' },
      description: {
        en: 'The first dagoba built in Sri Lanka after the introduction of Buddhism. Houses the right collarbone relic of Buddha.',
        si: 'බුදුදහම හඳුන්වාදීමෙන් පසු ශ්‍රී ලංකාවේ ඉදිකළ පළමු දාගැබ. බුදුරදුන්ගේ දකුණු අකුල් ධාතු තැන්පත් කර ඇත.',
      },
      distance: '5.5 km',
      time: '11 min',
    },
    {
      name: { en: 'Abhayagiri Dagoba', si: 'අභයගිරි දාගැබ' },
      description: {
        en: 'Once one of the largest structures in the ancient world. This massive stupa was the centerpiece of a great monastery.',
        si: 'එකල ලෝකයේ විශාලතම ව්‍යුහයන්ගෙන් එකක් වූ මෙම දැවැන්ත ස්තූපය මහා විහාරයක මධ්‍යස්ථානය විය.',
      },
      distance: '7 km',
      time: '15 min',
    },
    {
      name: { en: 'Jetavanaramaya', si: 'ජේතවනාරාමය' },
      description: {
        en: 'The tallest stupa in the ancient world and the third tallest structure after the pyramids. A UNESCO World Heritage Site.',
        si: 'පුරාණ ලෝකයේ උසම ස්තූපය සහ පිරමීඩවලට පසු තුන්වන උසම ව්‍යුහය. යුනෙස්කෝ ලෝක උරුම අඩවියකි.',
      },
      distance: '6.5 km',
      time: '13 min',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('attractions.title')}
          </h1>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            {t('attractions.subtitle')}
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover-lift bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                    {attraction.name[language]}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">
                    {attraction.description[language]}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-sans">{attraction.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-sans">{attraction.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-center text-foreground mb-8">
            {t('contact.location')}
          </h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
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

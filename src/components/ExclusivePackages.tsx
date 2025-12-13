import { Link } from 'react-router-dom';
import { Heart, Landmark, Calendar, ArrowRight, Sparkles, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ExclusivePackages = () => {
  const { language } = useLanguage();

  const packages = [
    {
      icon: Heart,
      title: language === 'en' ? 'Romantic Getaway' : 'ආදර නිවාඩුව',
      description: language === 'en' 
        ? 'An intimate escape for couples featuring candlelit dinners, private heritage tours, and luxurious suite accommodations.'
        : 'විලාසිතා නවාතැන්, පෞද්ගලික උරුම සංචාර සහ ඉටිපන්දම් රාත්‍රී භෝජන සහිත යුවළයන් සඳහා සමීපතම පලායාම.',
      duration: language === 'en' ? '2 Nights / 3 Days' : 'රාත්‍රී 2 / දින 3',
      guests: language === 'en' ? '2 Guests' : 'අමුත්තන් 2',
      price: 299,
      highlights: [
        language === 'en' ? 'Candlelit dinner' : 'ඉටිපන්දම් රාත්‍රී භෝජනය',
        language === 'en' ? 'Couples spa treatment' : 'යුවළ ස්පා ප්‍රතිකාර',
        language === 'en' ? 'Sunrise heritage tour' : 'හිරු නැගීමේ උරුම සංචාරය',
      ],
      accent: 'from-rose-500/20 to-pink-500/10',
      iconBg: 'bg-rose-500/10',
      iconColor: 'text-rose-500',
    },
    {
      icon: Landmark,
      title: language === 'en' ? 'Heritage Discovery' : 'උරුම ගවේෂණය',
      description: language === 'en' 
        ? 'Immerse yourself in the ancient wonders of Anuradhapura with guided tours to all UNESCO World Heritage sites.'
        : 'සියලුම UNESCO ලෝක උරුම ස්ථානවලට මාර්ගෝපදේශක සංචාර සමඟ අනුරාධපුරයේ පුරාණ අද්භූත දේ තුළ ගිල්වෙන්න.',
      duration: language === 'en' ? '3 Nights / 4 Days' : 'රාත්‍රී 3 / දින 4',
      guests: language === 'en' ? 'Up to 4 Guests' : 'අමුත්තන් 4 දක්වා',
      price: 449,
      highlights: [
        language === 'en' ? 'Private guide' : 'පෞද්ගලික මාර්ගෝපදේශකයා',
        language === 'en' ? 'All 8 heritage sites' : 'සියලුම උරුම ස්ථාන 8',
        language === 'en' ? 'Traditional cuisine' : 'සාම්ප්‍රදායික ආහාර',
      ],
      accent: 'from-primary/20 to-amber-500/10',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: Calendar,
      title: language === 'en' ? 'Weekend Escape' : 'සති අන්ත නිවාඩුව',
      description: language === 'en' 
        ? 'The perfect weekend retreat to unwind and explore. Includes premium dining and curated local experiences.'
        : 'ලිහිල් වීමට සහ ගවේෂණය කිරීමට පරිපූර්ණ සති අන්ත නිවාතැන. ප්‍රිමියම් ආහාර සහ තෝරාගත් දේශීය අත්දැකීම් ඇතුළත්.',
      duration: language === 'en' ? '2 Nights / 3 Days' : 'රාත්‍රී 2 / දින 3',
      guests: language === 'en' ? 'Up to 2 Guests' : 'අමුත්තන් 2 දක්වා',
      price: 199,
      highlights: [
        language === 'en' ? 'Late checkout' : 'ප්‍රමාද පිටවීම',
        language === 'en' ? 'Gourmet breakfast' : 'විශේෂ උදෑසන ආහාරය',
        language === 'en' ? 'Sunset viewing' : 'හිරු බැසීම නැරඹීම',
      ],
      accent: 'from-accent/20 to-emerald-500/10',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.05),transparent_50%)]" />
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/5 rounded-full" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-accent/5 rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-sans text-sm uppercase tracking-[0.25em] text-primary font-medium">
              {language === 'en' ? 'Curated Experiences' : 'විශේෂ අත්දැකීම්'}
            </span>
            <Sparkles className="h-4 w-4 text-primary" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'en' ? 'Exclusive Packages' : 'විශේෂ පැකේජ'}
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'Discover our thoughtfully crafted packages designed to elevate your stay into an unforgettable experience'
              : 'ඔබේ නවාතැන් අමතක නොවන අත්දැකීමක් බවට උසස් කිරීමට නිර්මාණය කර ඇති අපගේ විශේෂ පැකේජ සොයා ගන්න'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex p-4 ${pkg.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <pkg.icon className={`h-8 w-8 ${pkg.iconColor}`} />
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {pkg.title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Duration & Guests */}
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary/70" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary/70" />
                    <span>{pkg.guests}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-8">
                  {pkg.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span className="text-sm text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between pt-6 border-t border-border/50">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {language === 'en' ? 'Starting from' : 'සිට'}
                    </span>
                    <div className="font-serif text-3xl font-bold text-gradient-gold">
                      ${pkg.price}
                    </div>
                  </div>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link to="/contact">
                      {language === 'en' ? 'Inquire' : 'විමසන්න'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-sans text-muted-foreground mb-6">
            {language === 'en' 
              ? 'Looking for a custom experience? We can tailor a package just for you.'
              : 'අභිරුචි අත්දැකීමක් සොයනවාද? අපට ඔබ වෙනුවෙන්ම පැකේජයක් සකස් කළ හැක.'
            }
          </p>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="px-10 py-7 text-base border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500"
          >
            <Link to="/contact">
              {language === 'en' ? 'Contact Us' : 'අප අමතන්න'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExclusivePackages;

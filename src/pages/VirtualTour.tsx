import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import VirtualTourComponent from '@/components/VirtualTour';
import { Camera } from 'lucide-react';

const VirtualTour = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEO 
        title={language === 'en' ? 'Explore Our Spaces - Green Safaaya' : 'අපගේ අවකාශයන් - ග්‍රීන් සෆායා'}
        description={language === 'en' 
          ? 'Explore the elegant rooms and facilities at Green Safaaya in Anuradhapura' 
          : 'අනුරාධපුරයේ ග්‍රීන් සෆායාහි අලංකාර කාමර සහ පහසුකම් ගවේෂණය කරන්න'}
      />
      
      <main className="min-h-screen pt-24 bg-background">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-secondary via-card to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-luxury-radial opacity-30" />
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                <Camera className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                  {language === 'en' ? 'Interior Gallery' : 'අභ්‍යන්තර ගැලරිය'}
                </span>
                <Camera className="w-5 h-5 text-primary" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                {language === 'en' ? 'Explore Our Spaces' : 'අපගේ අවකාශයන් ගවේෂණය කරන්න'}
              </h1>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                {language === 'en' 
                  ? 'Discover the refined elegance and thoughtful details of our accommodations. Each space is designed for comfort, warmth, and an unforgettable stay.'
                  : 'අපගේ නවාතැන්වල සියුම් අලංකාරත්වය සහ චින්තනශීලී විස්තර සොයා ගන්න. සෑම අවකාශයක්ම සුවපහසුව, උණුසුම සහ අමතක නොවන රැඳීමක් සඳහා නිර්මාණය කර ඇත.'}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Component */}
        <VirtualTourComponent />
      </main>
    </>
  );
};

export default VirtualTour;

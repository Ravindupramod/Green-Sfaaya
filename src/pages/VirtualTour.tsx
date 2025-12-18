import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import VirtualTourComponent from '@/components/VirtualTour';
import { Sparkles } from 'lucide-react';

const VirtualTour = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEO 
        title={language === 'en' ? 'Virtual Tour - Thaara Residence' : 'අතත්‍ය චාරිකාව - තාර රෙසිඩන්ස්'}
        description={language === 'en' 
          ? 'Take a virtual tour of Thaara Residence rooms and facilities in Anuradhapura' 
          : 'අනුරාධපුරයේ තාර රෙසිඩන්ස් කාමර සහ පහසුකම් අතත්‍ය චාරිකාවක් බලන්න'}
      />
      
      <main className="min-h-screen pt-24 bg-background">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-secondary via-card to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-luxury-radial opacity-30" />
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                  {language === 'en' ? 'Explore Our Spaces' : 'අපගේ අවකාශයන් ගවේෂණය කරන්න'}
                </span>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                {language === 'en' ? 'Virtual Tour' : 'අතත්‍ය චාරිකාව'}
              </h1>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                {language === 'en' 
                  ? 'Experience the elegance and comfort of Thaara Residence through our interactive 3D virtual tour. Explore every corner of our beautifully appointed rooms and facilities.'
                  : 'අපගේ අන්තර්ක්‍රියාකාරී 3D අතත්‍ය චාරිකාව හරහා තාර රෙසිඩන්ස්හි අලංකාරත්වය සහ සුවපහසුව අත්විඳින්න. අපගේ සුන්දරව සකසා ඇති කාමර සහ පහසුකම්වල සෑම කෙළවරක්ම ගවේෂණය කරන්න.'}
              </p>
            </div>
          </div>
        </section>

        {/* Virtual Tour Component */}
        <VirtualTourComponent />
      </main>
    </>
  );
};

export default VirtualTour;

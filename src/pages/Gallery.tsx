import { useState } from 'react';
import { X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import hero from '@/assets/hero.jpeg';
import room from '@/assets/room.jpeg';
import room1 from '@/assets/room_1.jpeg';
import room2 from '@/assets/room_2.jpeg';
import balcony from '@/assets/balcony.jpeg';
import balcony1 from '@/assets/balcony_1.jpeg';
import view2 from '@/assets/view_2.jpeg';
import front from '@/assets/front.jpeg';
import washroom2 from '@/assets/washroom_2.jpeg';
import washroom3 from '@/assets/washroom_3.jpeg';

const Gallery = () => {
  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const images = [
    { src: hero, category: 'Property', title: { en: 'Property Entrance', si: 'දේපල ප්‍රවේශය' } },
    { src: front, category: 'Property', title: { en: 'Front View', si: 'ඉදිරිපස දර්ශනය' } },
    { src: room, category: 'Rooms', title: { en: 'Deluxe Room', si: 'ඩීලක්ස් කාමරය' } },
    { src: room1, category: 'Rooms', title: { en: 'Superior Room', si: 'සුපීරියර් කාමරය' } },
    { src: room2, category: 'Rooms', title: { en: 'Family Suite', si: 'පවුල් සූට්' } },
    { src: balcony, category: 'Views', title: { en: 'Balcony View', si: 'බැල්කනි දර්ශනය' } },
    { src: balcony1, category: 'Views', title: { en: 'Morning View', si: 'උදෑසන දර්ශනය' } },
    { src: view2, category: 'Views', title: { en: 'Scenic View', si: 'සුන්දර දර්ශනය' } },
    { src: washroom2, category: 'Bathrooms', title: { en: 'Modern Bathroom', si: 'නවීන නාන කාමරය' } },
    { src: washroom3, category: 'Bathrooms', title: { en: 'Premium Bathroom', si: 'ප්‍රිමියම් නාන කාමරය' } },
  ];

  const categories = ['All', 'Property', 'Rooms', 'Views', 'Bathrooms'];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Camera className="h-4 w-4 text-primary" />
            <span className="font-sans text-sm text-primary font-medium tracking-wide">
              {language === 'en' ? 'Visual Experience' : 'දෘශ්‍ය අත්දැකීම'}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t('gallery.title')}
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b border-border/50 backdrop-blur-luxury">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-luxury'
                    : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category === 'All' ? (language === 'en' ? 'All Photos' : 'සියලුම ඡායාරූප') : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`${index === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'}`}>
                  <img
                    src={image.src}
                    alt={image.title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="font-sans text-xs text-white/70 uppercase tracking-wider mb-1">{image.category}</span>
                  <h3 className="font-serif text-xl text-white font-semibold">{image.title[language]}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-luxury rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/98 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 p-2 bg-white/10 rounded-full backdrop-blur-luxury"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 p-2 bg-white/10 rounded-full backdrop-blur-luxury"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image */}
          <div 
            className="relative max-w-5xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].title[language]}
              className="max-w-full max-h-[80vh] object-contain animate-scale-in rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 rounded-b-lg">
              <span className="font-sans text-xs text-white/70 uppercase tracking-wider">{filteredImages[selectedIndex].category}</span>
              <h3 className="font-serif text-2xl text-white font-semibold">{filteredImages[selectedIndex].title[language]}</h3>
              <p className="font-sans text-sm text-white/70 mt-1">{selectedIndex + 1} / {filteredImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
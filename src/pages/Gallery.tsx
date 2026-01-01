import { useState } from 'react';
import { X, Camera, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';
import Reveal from '@/components/Reveal';
import NatureOverlay from '@/components/NatureOverlay';
// Images now served from public directory
const Gallery = () => {
  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const images = [
    // Property / Exterior
    { src: "/View/front view.jpeg", category: 'Property', title: { en: 'Front View', si: 'ඉදිරිපස දර්ශනය' } },
    { src: "/View/front.jpeg", category: 'Property', title: { en: 'Entrance', si: 'පිවිසුම' } },
    { src: "/View/front2.jpeg", category: 'Property', title: { en: 'Exterior View', si: 'බාහිර දර්ශනය' } },
    { src: "/View/Car park.jpeg", category: 'Property', title: { en: 'Car Park', si: 'වාහන නැවතුම් පොළ' } },

    // Rooms
    { src: "/bed rooms/Master bedroom .jpeg", category: 'Rooms', title: { en: 'Master Bedroom I', si: 'ප්‍රධාන නිදන කාමරය I' } },
    { src: "/bed rooms/Master bedroom 1.jpeg", category: 'Rooms', title: { en: 'Master Bedroom I View', si: 'ප්‍රධාන නිදන කාමරය I දර්ශනය' } },
    { src: "/bed rooms/master bedroom view.jpeg", category: 'Rooms', title: { en: 'Master Bedroom Detail', si: 'ප්‍රධාන නිදන කාමරය විස්තර' } },
    { src: "/bed rooms/single bedroom.jpeg", category: 'Rooms', title: { en: 'Single Room I', si: 'තනි කාමරය I' } },
    { src: "/bed rooms/single bedroom 2.jpeg", category: 'Rooms', title: { en: 'Single Room II', si: 'තනි කාමරය II' } },
    { src: "/bed rooms/single bedroom view.jpeg", category: 'Rooms', title: { en: 'Single Room View', si: 'තනි කාමර දර්ශනය' } },
    { src: "/bed rooms/single bedroom1.jpeg", category: 'Rooms', title: { en: 'Bedroom Interior', si: 'නිදන කාමරය ඇතුළත' } },

    // Views / Balcony
    { src: "/Balcony/Balcony view.jpeg", category: 'Views', title: { en: 'Panoramic Balcony View', si: 'පුළුල් බැල්කනි දර්ශනය' } },
    { src: "/Balcony/Balcony area2.jpeg", category: 'Views', title: { en: 'Balcony Area', si: 'බැල්කනි ප්‍රදේශය' } },
    { src: "/Balcony/bacony outdoor .jpeg", category: 'Views', title: { en: 'Outdoor Terrace', si: 'එළිමහන් ටෙරස්' } },
    { src: "/Balcony/balcony living area.jpeg", category: 'Views', title: { en: 'Balcony Living Area', si: 'බැල්කනි විසිත්ත කාමරය' } },
    { src: "/Balcony/stair case.jpeg", category: 'Views', title: { en: 'Staircase', si: 'පඩි පෙළ' } },

    // Amenities (Dining & Bathroom)
    { src: "/Dinning area/Dinning area inside .jpeg", category: 'Amenities', title: { en: 'Dining Area Interior', si: 'ආහාර කාමරය ඇතුළත' } },
    { src: "/Dinning area/Dinning table area.jpeg", category: 'Amenities', title: { en: 'Dining Table', si: 'ආහාර මේසය' } },
    { src: "/Dinning area/WhatsApp Image 2025-12-28 at 14.24.36.jpeg", category: 'Amenities', title: { en: 'Dining Setup', si: 'ආහාර මේස සැකසුම' } },
    { src: "/Bathrooms/attached bathroom.jpeg", category: 'Amenities', title: { en: 'Ensuite Bathroom', si: 'යාබද නාන කාමරය' } },
    { src: "/Bathrooms/attached bathroom2.jpeg", category: 'Amenities', title: { en: 'Modern Shower', si: 'නවීන නාන කාමරය' } },
    { src: "/Bathrooms/attached bathroom 3.jpeg", category: 'Amenities', title: { en: 'Bathroom Amenities', si: 'නාන කාමර පහසුකම්' } },
  ];

  const categories = ['All', 'Property', 'Rooms', 'Views', 'Amenities'];

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
    <>
      <SEO
        title="Photo Gallery"
        description="Explore our luxury rooms, stunning views, and modern amenities at Green Safaaya through our photo gallery. See why guests love their stay experience."
        keywords="Green Safaaya photos, Anuradhapura hotel gallery, hotel room photos Sri Lanka, boutique hotel images"
        url="https://greensafaaya.com/gallery"
      />
      <div className="min-h-screen">
        <NatureOverlay />

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.primary.DEFAULT)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"></div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-64 h-64 border border-primary/5 rounded-full animate-spin-slow duration-[30s]" />
          <div className="absolute bottom-10 left-10 w-40 h-40 border border-primary/10 rounded-full" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full mb-8">
                <Camera className="h-3 w-3 text-primary" />
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary">
                  {language === 'en' ? 'Visual Experience' : 'දෘශ්‍ය අත්දැකීම'}
                </span>
              </div>

              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-foreground mb-8 tracking-tighter leading-[0.9]">
                {t('gallery.title')}
              </h1>

              <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
                {t('gallery.subtitle')}
              </p>

              <div className="mt-12 flex justify-center opacity-30">
                <svg width="100" height="20" viewBox="0 0 100 20" className="text-primary fill-current">
                  <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background sticky top-16 z-40 border-b border-border/50 backdrop-blur-luxury">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-medium transition-all duration-500 ${activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-luxury scale-105'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-primary/5 hover:text-primary hover:scale-105'
                      }`}
                  >
                    {category === 'All' ? (language === 'en' ? 'All Photos' : 'සියලුම ඡායාරූප') : category}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,theme(colors.primary.DEFAULT)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative overflow-hidden rounded-2xl cursor-pointer group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                      }`}
                  >
                    <div className={`${index === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'}`}>
                      <img
                        src={image.src}
                        alt={image.title[language]}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="font-sans text-[10px] text-white/70 uppercase tracking-[0.2em] mb-2">{image.category}</span>
                      <h3 className="font-serif text-2xl text-white font-medium">{image.title[language]}</h3>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 border border-white/20">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
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
    </>
  );
};

export default Gallery;
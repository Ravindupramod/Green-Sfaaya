import { useState } from 'react';
import { X } from 'lucide-react';
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
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: hero, category: 'Property' },
    { src: front, category: 'Property' },
    { src: room, category: 'Rooms' },
    { src: room1, category: 'Rooms' },
    { src: room2, category: 'Rooms' },
    { src: balcony, category: 'Views' },
    { src: balcony1, category: 'Views' },
    { src: view2, category: 'Views' },
    { src: washroom2, category: 'Bathrooms' },
    { src: washroom3, category: 'Bathrooms' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('gallery.title')}
          </h1>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
              >
                <img
                  src={image.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
                <span className="absolute bottom-2 left-2 text-xs font-sans text-white bg-foreground/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain animate-scale-in"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Expand, Home, Bath, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import masterBedroom1 from '@/assets/rooms/master-bedroom-1.jpeg';
import masterBedroom2 from '@/assets/rooms/master-bedroom-2.jpeg';
import singleRoom1 from '@/assets/rooms/single-room-1.jpeg';
import singleRoom2 from '@/assets/rooms/single-room-2.jpeg';
import bathroom from '@/assets/rooms/bathroom.jpeg';
import diningArea from '@/assets/rooms/dining-area.jpeg';

interface RoomGallery {
  id: string;
  name: string;
  nameSi: string;
  image: string;
  description: string;
  descriptionSi: string;
  category: 'bedroom' | 'bathroom' | 'common';
}

const roomGalleries: RoomGallery[] = [
  {
    id: 'master1',
    name: 'Master Bedroom I',
    nameSi: 'ප්‍රධාන නිදන කාමරය I',
    image: masterBedroom1,
    description: 'Elegant master bedroom with king-size bed and premium wooden furnishings',
    descriptionSi: 'කිං-සයිස් ඇඳ සහ උසස් ලී ගෘහ භාණ්ඩ සහිත අලංකාර ප්‍රධාන නිදන කාමරය',
    category: 'bedroom',
  },
  {
    id: 'master2',
    name: 'Master Bedroom II',
    nameSi: 'ප්‍රධාන නිදන කාමරය II',
    image: masterBedroom2,
    description: 'Spacious master bedroom with natural lighting and warm ambiance',
    descriptionSi: 'ස්වාභාවික ආලෝකය සහ උණුසුම් වාතාවරණය සහිත පුළුල් ප්‍රධාන නිදන කාමරය',
    category: 'bedroom',
  },
  {
    id: 'single1',
    name: 'Single Room I',
    nameSi: 'තනි කාමරය I',
    image: singleRoom1,
    description: 'Cozy single room with elegant wooden furniture and essential amenities',
    descriptionSi: 'අලංකාර ලී ගෘහ භාණ්ඩ සහ අත්‍යවශ්‍ය පහසුකම් සහිත සුවපහසු තනි කාමරය',
    category: 'bedroom',
  },
  {
    id: 'single2',
    name: 'Single Room II',
    nameSi: 'තනි කාමරය II',
    image: singleRoom2,
    description: 'Charming single room with warm natural light and premium bedding',
    descriptionSi: 'උණුසුම් ස්වාභාවික ආලෝකය සහ උසස් ඇඳ ඇතිරිලි සහිත ආකර්ෂණීය තනි කාමරය',
    category: 'bedroom',
  },
  {
    id: 'bathroom',
    name: 'Modern Bathroom',
    nameSi: 'නවීන නාන කාමරය',
    image: bathroom,
    description: 'Contemporary bathroom with premium fixtures and elegant design',
    descriptionSi: 'ප්‍රීමියම් සවිකෘත සහ අලංකාර නිර්මාණය සහිත සමකාලීන නාන කාමරය',
    category: 'bathroom',
  },
  {
    id: 'dining',
    name: 'Dining Area',
    nameSi: 'ආහාර කාමරය',
    image: diningArea,
    description: 'Elegant common dining space with wooden furnishings',
    descriptionSi: 'ලී ගෘහ භාණ්ඩ සහිත අලංකාර පොදු ආහාර අවකාශය',
    category: 'common',
  },
];

const categoryIcons = {
  bedroom: Home,
  bathroom: Bath,
  common: UtensilsCrossed,
};

const VirtualTour = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<RoomGallery | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (room: RoomGallery, index: number) => {
    setSelectedImage(room);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % roomGalleries.length);
    setSelectedImage(roomGalleries[(lightboxIndex + 1) % roomGalleries.length]);
  };

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + roomGalleries.length) % roomGalleries.length;
    setLightboxIndex(newIndex);
    setSelectedImage(roomGalleries[newIndex]);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Elegant Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomGalleries.map((room, index) => {
            const IconComponent = categoryIcons[room.category];
            return (
              <div
                key={room.id}
                className="group relative overflow-hidden rounded-xl bg-card border border-border/30 shadow-lg hover:shadow-luxury-lg transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(room, index)}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={language === 'en' ? room.name : room.nameSi}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full">
                    <IconComponent className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground capitalize">
                      {room.category}
                    </span>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-primary/90 backdrop-blur-sm rounded-full">
                    <Expand className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl font-semibold text-white mb-2">
                    {language === 'en' ? room.name : room.nameSi}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {language === 'en' ? room.description : room.descriptionSi}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 group"
            onClick={() => openLightbox(roomGalleries[0], 0)}
          >
            <Expand className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            {language === 'en' ? 'View Full Gallery' : 'සම්පූර්ණ ගැලරිය බලන්න'}
          </Button>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-[90vh] p-0 bg-foreground/95 backdrop-blur-xl border-none">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-3 bg-background/20 backdrop-blur-sm rounded-full text-white hover:bg-background/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-background/20 backdrop-blur-sm rounded-full text-white hover:bg-background/40 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-background/20 backdrop-blur-sm rounded-full text-white hover:bg-background/40 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image */}
          {selectedImage && (
            <div className="w-full h-full flex items-center justify-center p-8">
              <div className="relative max-w-5xl w-full">
                <img
                  src={selectedImage.image}
                  alt={language === 'en' ? selectedImage.name : selectedImage.nameSi}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {language === 'en' ? selectedImage.name : selectedImage.nameSi}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {language === 'en' ? selectedImage.description : selectedImage.descriptionSi}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-3 bg-background/30 backdrop-blur-md rounded-2xl max-w-[90%] overflow-x-auto">
            {roomGalleries.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => {
                  setSelectedImage(room);
                  setLightboxIndex(idx);
                }}
                className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                  idx === lightboxIndex
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-transparent scale-110'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-background/20 backdrop-blur-sm rounded-full">
            <span className="text-white text-sm font-medium">
              {lightboxIndex + 1} / {roomGalleries.length}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VirtualTour;

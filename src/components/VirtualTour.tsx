import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Expand, Home, Bath, UtensilsCrossed, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Images now served from public directory

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
    image: "/bed rooms/Master bedroom .jpeg",
    description: 'Elegant master bedroom with king-size bed and premium wooden furnishings',
    descriptionSi: 'කිං-සයිස් ඇඳ සහ උසස් ලී ගෘහ භාණ්ඩ සහිත අලංකාර ප්‍රධාන නිදන කාමරය',
    category: 'bedroom',
  },
  {
    id: 'master2',
    name: 'Master Bedroom II',
    nameSi: 'ප්‍රධාන නිදන කාමරය II',
    image: "/bed rooms/Master bedroom 1.jpeg",
    description: 'Spacious master bedroom with natural lighting and warm ambiance',
    descriptionSi: 'ස්වාභාවික ආලෝකය සහ උණුසුම් වාතාවරණය සහිත පුළුල් ප්‍රධාන නිදන කාමරය',
    category: 'bedroom',
  },
  {
    id: 'single1',
    name: 'Single Room I',
    nameSi: 'තනි කාමරය I',
    image: "/bed rooms/single bedroom.jpeg",
    description: 'Cozy single room with elegant wooden furniture and essential amenities',
    descriptionSi: 'අලංකාර ලී ගෘහ භාණ්ඩ සහ අත්‍යවශ්‍ය පහසුකම් සහිත සුවපහසු තනි කාමරය',
    category: 'bedroom',
  },
  {
    id: 'single2',
    name: 'Single Room II',
    nameSi: 'තනි කාමරය II',
    image: "/bed rooms/single bedroom 2.jpeg",
    description: 'Charming single room with warm natural light and premium bedding',
    descriptionSi: 'උණුසුම් ස්වාභාවික ආලෝකය සහ උසස් ඇඳ ඇතිරිලි සහිත ආකර්ෂණීය තනි කාමරය',
    category: 'bedroom',
  },
  {
    id: 'bathroom',
    name: 'Modern Bathroom',
    nameSi: 'නවීන නාන කාමරය',
    image: "/Bathrooms/attached bathroom.jpeg",
    description: 'Contemporary bathroom with premium fixtures and elegant design',
    descriptionSi: 'ප්‍රීමියම් සවිකෘත සහ අලංකාර නිර්මාණය සහිත සමකාලීන නාන කාමරය',
    category: 'bathroom',
  },
  {
    id: 'dining',
    name: 'Dining Area',
    nameSi: 'ආහාර කාමරය',
    image: "/Dinning area/Dinning table area.jpeg",
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

interface VideoGallery {
  id: string;
  title: string;
  titleSi: string;
  src: string;
  description: string;
  descriptionSi: string;
}

const videos: VideoGallery[] = [
  {
    id: 'master-video',
    title: 'Master Bedroom Walkthrough',
    titleSi: 'ප්‍රධාන නිදන කාමරයේ වීඩියෝ දසුන',
    src: '/bed rooms/master bedroom video .mp4',
    description: 'Experience the spaciousness and elegance of our master suite.',
    descriptionSi: 'අපගේ ප්‍රධාන කාමරයේ විශාලත්වය සහ අලංකාරය අත්විඳින්න.'
  },
  {
    id: 'single1-video',
    title: 'Single Room I Tour',
    titleSi: 'තනි කාමරය I වීඩියෝ දසුන',
    src: '/bed rooms/single bedroom .mp4',
    description: 'A closer look at the cozy comfort of our single room.',
    descriptionSi: 'අපගේ තනි කාමරයේ සුවපහසුව දෙස සමීප බැල්මක්.'
  },
  {
    id: 'single2-video',
    title: 'Single Room II Tour',
    titleSi: 'තනි කාමරය II වීඩියෝ දසුන',
    src: '/bed rooms/single bedroom 2 vview.mp4',
    description: 'Explore the natural lighting and ambiance of our second single room.',
    descriptionSi: 'අපගේ දෙවන තනි කාමරයේ ස්වාභාවික ආලෝකය සහ වාතාවරණය ගවේෂණය කරන්න.'
  },
  {
    id: 'bathroom-video',
    title: 'Bathroom Amenities',
    titleSi: 'නාන කාමර පහසුකම්',
    src: '/Bathrooms/attached bathroom.mp4',
    description: 'Modern fixtures and pristine cleanliness.',
    descriptionSi: 'නවීන උපාංග සහ පිරිසිදුකම.'
  }
];

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

        {/* Video Walkthroughs Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <Play className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                {language === 'en' ? 'Motion Gallery' : 'චලන ගැලරිය'}
              </span>
              <Play className="w-5 h-5 text-primary" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              {language === 'en' ? 'Video Walkthroughs' : 'වීඩියෝ දර්ශන'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group overflow-hidden rounded-2xl bg-card border border-border/30 shadow-lg hover:shadow-luxury-lg transition-all duration-300">
                <div className="relative bg-black flex justify-center items-center">
                  <video
                    controls
                    className="w-full h-auto max-h-[80vh] object-contain"
                    poster={video.src.includes('master') ? "/bed rooms/Master bedroom .jpeg" :
                      video.src.includes('single bedroom .mp4') ? "/bed rooms/single bedroom.jpeg" :
                        video.src.includes('single bedroom 2') ? "/bed rooms/single bedroom 2.jpeg" :
                          "/Bathrooms/attached bathroom.jpeg"}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {language === 'en' ? video.title : video.titleSi}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? video.description : video.descriptionSi}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${idx === lightboxIndex
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

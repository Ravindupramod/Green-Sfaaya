import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useTexture, Html } from '@react-three/drei';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Eye, ChevronLeft, ChevronRight, X, Maximize2, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import * as THREE from 'three';

import room1 from '@/assets/room_1.jpeg';
import room2 from '@/assets/room_2.jpeg';
import room from '@/assets/room.jpeg';
import balcony from '@/assets/balcony.jpeg';
import balcony1 from '@/assets/balcony_1.jpeg';
import washroom2 from '@/assets/washroom_2.jpeg';
import washroom3 from '@/assets/washroom_3.jpeg';
import view2 from '@/assets/view_2.jpeg';

interface RoomScene {
  id: string;
  name: string;
  nameSi: string;
  images: string[];
  description: string;
  descriptionSi: string;
}

const roomScenes: RoomScene[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    nameSi: 'ඩිලක්ස් කාමරය',
    images: [room1, room2],
    description: 'Experience refined comfort with elegant furnishings and modern amenities',
    descriptionSi: 'අලංකාර ගෘහ භාණ්ඩ සහ නවීන පහසුකම් සහිත සැපසුව සුවපහසුව අත්විඳින්න',
  },
  {
    id: 'family',
    name: 'Family Suite',
    nameSi: 'පවුල් සූට්',
    images: [room, balcony],
    description: 'Spacious suite with premium amenities perfect for family stays',
    descriptionSi: 'පවුල් නවාතැන් සඳහා පරිපූර්ණ ප්‍රීමියම් පහසුකම් සහිත පුළුල් සූට්',
  },
  {
    id: 'balcony',
    name: 'Private Balcony',
    nameSi: 'පුද්ගලික බැල්කනිය',
    images: [balcony, balcony1, view2],
    description: 'Breathtaking views from your private outdoor space',
    descriptionSi: 'ඔබේ පුද්ගලික එළිමහන් අවකාශයෙන් විශ්මයජනක දර්ශන',
  },
  {
    id: 'bathroom',
    name: 'Luxury Bathroom',
    nameSi: 'සුඛෝපභෝගී නාන කාමරය',
    images: [washroom2, washroom3],
    description: 'Modern bathrooms with premium fixtures and amenities',
    descriptionSi: 'ප්‍රීමියම් සවිකෘත සහ පහසුකම් සහිත නවීන නාන කාමර',
  },
];

function ImagePlane({ imageUrl, position }: { imageUrl: string; position: [number, number, number] }) {
  const texture = useTexture(imageUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  
  return (
    <mesh position={position} rotation={[0, 0, 0]}>
      <planeGeometry args={[4, 3]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

function RoomShowcase({ images }: { images: string[] }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <Suspense fallback={
        <Html center>
          <div className="text-primary font-sans text-sm">Loading...</div>
        </Html>
      }>
        {images.map((img, idx) => {
          const angle = (idx / images.length) * Math.PI * 2;
          const radius = images.length > 1 ? 2.5 : 0;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius - 2;
          return (
            <ImagePlane
              key={idx}
              imageUrl={img}
              position={[x, 0, z]}
            />
          );
        })}
      </Suspense>
      <Environment preset="apartment" />
    </>
  );
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

const VirtualTour = () => {
  const { language } = useLanguage();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const currentScene = roomScenes[currentSceneIndex];

  const nextScene = () => {
    setCurrentSceneIndex((prev) => (prev + 1) % roomScenes.length);
  };

  const prevScene = () => {
    setCurrentSceneIndex((prev) => (prev - 1 + roomScenes.length) % roomScenes.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-sans text-sm uppercase tracking-[0.25em] text-primary font-medium">
              {language === 'en' ? 'Virtual Experience' : 'අතථ්‍ය අත්දැකීම'}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'en' ? '360° Room' : '360° කාමර'}
            <span className="block text-gradient-gold">{language === 'en' ? 'Virtual Tour' : 'අතථ්‍ය චාරිකාව'}</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'Explore our luxurious accommodations in stunning 3D. Drag to rotate, scroll to zoom.'
              : 'අපගේ සුඛෝපභෝගී නවාතැන් විශිෂ්ට 3D තුළ ගවේෂණය කරන්න. කරකවන්න ඇදගන්න, විශාලනය කිරීමට අනුචලනය කරන්න.'
            }
          </p>
        </div>

        {/* Room Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {roomScenes.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setCurrentSceneIndex(idx)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                idx === currentSceneIndex
                  ? 'bg-primary text-primary-foreground shadow-luxury'
                  : 'bg-card border border-border/50 text-foreground/70 hover:border-primary/30 hover:text-primary'
              }`}
            >
              {language === 'en' ? scene.name : scene.nameSi}
            </button>
          ))}
        </div>

        {/* 3D Viewer */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/10] bg-card rounded-2xl overflow-hidden shadow-luxury-lg border border-border/50">
            <Suspense fallback={<LoadingSpinner />}>
              <Canvas>
                <RoomShowcase images={currentScene.images} />
              </Canvas>
            </Suspense>

            {/* Navigation Arrows */}
            <button
              onClick={prevScene}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/30 transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextScene}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/30 transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Room Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {language === 'en' ? currentScene.name : currentScene.nameSi}
              </h3>
              <p className="font-sans text-sm text-white/70">
                {language === 'en' ? currentScene.description : currentScene.descriptionSi}
              </p>
            </div>

            {/* Controls hint */}
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-background/60 backdrop-blur-sm rounded-full">
              <RotateCcw className="w-3.5 h-3.5 text-foreground/60" />
              <span className="font-sans text-xs text-foreground/60">
                {language === 'en' ? 'Drag to rotate' : 'කරකවන්න ඇදගන්න'}
              </span>
            </div>
          </div>

          {/* Scene indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {roomScenes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSceneIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSceneIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Full screen dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="flex justify-center mt-8">
              <Button 
                variant="outline" 
                className="px-8 py-6 text-base border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-500"
              >
                <Maximize2 className="w-5 h-5 mr-2" />
                {language === 'en' ? 'View Full Screen' : 'සම්පූර්ණ තිරය බලන්න'}
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-[90vh] p-0 bg-foreground border-none">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full h-full">
              <Suspense fallback={<LoadingSpinner />}>
                <Canvas>
                  <RoomShowcase images={currentScene.images} />
                </Canvas>
              </Suspense>
            </div>
            {/* Room selector in fullscreen */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-background/80 backdrop-blur-sm rounded-full">
              {roomScenes.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => setCurrentSceneIndex(idx)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-medium transition-all ${
                    idx === currentSceneIndex
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {language === 'en' ? scene.name : scene.nameSi}
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VirtualTour;

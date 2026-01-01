import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface CarouselProps {
    children: React.ReactNode[];
    className?: string;
    autoplay?: boolean;
}

const FeatureCarousel = ({ children, className, autoplay = true }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const { language } = useLanguage();

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);

        // Auto-play functionality
        let intervalId: NodeJS.Timeout;
        if (autoplay) {
            intervalId = setInterval(() => {
                if (emblaApi.canScrollNext()) {
                    emblaApi.scrollNext();
                } else {
                    emblaApi.scrollTo(0);
                }
            }, 5000);
        }

        return () => {
            emblaApi.off('select', onSelect);
            if (intervalId) clearInterval(intervalId);
        };
    }, [emblaApi, onSelect, autoplay]);

    return (
        <div className={cn("relative group", className)}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {children.map((child, index) => (
                        <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                            <div className="h-full">
                                {child}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:pointer-events-auto">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground h-12 w-12 shadow-lg"
                    onClick={scrollPrev}
                >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous slide</span>
                </Button>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:pointer-events-auto">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground h-12 w-12 shadow-lg"
                    onClick={scrollNext}
                >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next slide</span>
                </Button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {children.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            index === selectedIndex ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                        )}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeatureCarousel;

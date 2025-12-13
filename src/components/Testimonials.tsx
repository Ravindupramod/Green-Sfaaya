import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'United Kingdom',
    quote: {
      en: 'Thaara Residence exceeded all expectations. The attention to detail, impeccable service, and stunning views made our anniversary trip absolutely unforgettable.',
      si: 'තාර රෙසිඩන්ස් සියලු අපේක්ෂාවන් ඉක්මවා ගියා. විස්තර කෙරෙහි අවධානය, නිර්දෝෂී සේවාව සහ අපූරු දර්ශන අපගේ සංවත්සර චාරිකාව සම්පූර්ණයෙන්ම අමතක නොවන එකක් කළා.',
    },
    rating: 5,
    type: 'Anniversary',
  },
  {
    name: 'Dr. Rajesh Sharma',
    location: 'India',
    quote: {
      en: 'An oasis of tranquility near the heritage sites. The hosts provided exceptional hospitality - elegant rooms, gourmet breakfast, and genuine warmth throughout our stay.',
      si: 'උරුම ස්ථාන ආසන්නයේ සන්සුන්භාවයේ ජලාවාසයක්. අයිතිකරුවන් විශිෂ්ට ආගන්තුක සත්කාරය ලබා දුන්නා - අලංකාර කාමර, ප්‍රශස්ත උදෑසන ආහාරය, සහ අපගේ නවාතැන පුරාවට සැබෑ උණුසුම.',
    },
    rating: 5,
    type: 'Heritage Tour',
  },
  {
    name: 'Emma & James Foster',
    location: 'Australia',
    quote: {
      en: 'We spent a wonderful week exploring the ancient ruins. The sophisticated atmosphere and prime location made our cultural journey complete. Highly recommended for discerning travelers.',
      si: 'අපි පුරාණ නටබුන් ගවේෂණය කරමින් අපූරු සතියක් ගත කළා. නවීන වාතාවරණය සහ ප්‍රධාන පිහිටීම අපගේ සංස්කෘතික ගමන සම්පූර්ණ කළා. විචක්ෂණ සංචාරකයන්ට විශේෂයෙන් නිර්දේශ කරනවා.',
    },
    rating: 5,
    type: 'Extended Stay',
  },
];

const Testimonials = () => {
  const { language } = useLanguage();

  return (
    <section className="py-28 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute top-20 right-20 w-72 h-72 border border-primary/5 rounded-full" />
      <div className="absolute bottom-20 left-20 w-56 h-56 border border-primary/5 rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-sans text-sm uppercase tracking-[0.25em] text-primary font-medium">
              {language === 'en' ? 'Guest Experiences' : 'අමුත්තන්ගේ අත්දැකීම්'}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === 'en' ? 'Words from Our' : 'අපගේ'}
            <span className="block text-gradient-gold">{language === 'en' ? 'Distinguished Guests' : 'විශිෂ්ට අමුත්තන්ගේ වචන'}</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'Discover how our guests experienced unparalleled luxury and created lasting memories during their stay'
              : 'අපගේ ආගන්තුකයන් ඔවුන්ගේ නවාතැන් සමයේදී අසමසම සුඛෝපභෝගීත්වය අත්විඳ දිගුකාලීන මතකයන් නිර්මාණය කළ ආකාරය සොයා ගන්න'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover-lift border border-border/50 hover:border-primary/20 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 p-3 bg-primary rounded-xl shadow-luxury">
                <Quote className="h-5 w-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-foreground/80 leading-relaxed mb-8 min-h-[120px]">
                "{testimonial.quote[language as 'en' | 'si']}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-border/50">
                <div>
                  <div className="font-serif text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
                <div className="px-3 py-1 bg-accent/10 rounded-full">
                  <span className="font-sans text-xs text-accent font-medium">
                    {testimonial.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'si';

interface Translations {
  [key: string]: {
    en: string;
    si: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', si: 'මුල් පිටුව' },
  'nav.rooms': { en: 'Rooms', si: 'කාමර' },
  'nav.gallery': { en: 'Gallery', si: 'ගැලරිය' },
  'nav.attractions': { en: 'Attractions', si: 'ආකර්ෂණ' },
  'nav.contact': { en: 'Contact', si: 'සම්බන්ධ වන්න' },

  // Hero
  'hero.welcome': { en: 'Welcome to', si: 'සාදරයෙන් පිළිගනිමු' },
  'hero.tagline': { en: 'Experience Luxury in the Heart of Ancient Anuradhapura', si: 'පුරාණ අනුරාධපුරයේ හදවතෙහි සුඛෝපභෝගී අත්දැකීම' },
  'hero.explore': { en: 'Explore Rooms', si: 'කාමර බලන්න' },
  'hero.inquire': { en: 'Make an Inquiry', si: 'විමසීමක් කරන්න' },

  // About Section
  'about.title': { en: 'About Thaara Residence', si: 'තාර නිවාසය ගැන' },
  'about.description': { en: 'Nestled in the serene New Town of Anuradhapura, Thaara Residence offers a perfect blend of modern comfort and traditional Sri Lankan hospitality. Our elegantly designed rooms feature private balconies with stunning views, ensuring a memorable stay near the sacred ancient city.', si: 'අනුරාධපුරයේ නිස්කලංක නව නගරයේ පිහිටි තාර නිවාසය නවීන සුවපහසුව සහ සම්ප්‍රදායික ශ්‍රී ලාංකික ආගන්තුක සත්කාරයේ පරිපූර්ණ සම්මිශ්‍රණයක් ලබා දෙයි.' },

  // Amenities
  'amenities.title': { en: 'Our Amenities', si: 'අපගේ පහසුකම්' },
  'amenities.wifi': { en: 'Free WiFi', si: 'නොමිලේ වයිෆයි' },
  'amenities.balcony': { en: 'Private Balcony', si: 'පෞද්ගලික බැල්කනිය' },
  'amenities.tv': { en: 'Flat Screen TV', si: 'පැතලි තිර රූපවාහිනිය' },
  'amenities.bathroom': { en: 'Private Bathroom', si: 'පෞද්ගලික නාන කාමරය' },
  'amenities.ac': { en: 'Air Conditioning', si: 'වායු සමීකරණය' },
  'amenities.parking': { en: 'Free Parking', si: 'නොමිලේ වාහන නැවතුම' },

  // Rooms
  'rooms.title': { en: 'Our Rooms', si: 'අපගේ කාමර' },
  'rooms.subtitle': { en: 'Choose your perfect stay', si: 'ඔබේ පරිපූර්ණ නවාතැන තෝරන්න' },
  'rooms.perNight': { en: 'per night', si: 'රාත්‍රියකට' },
  'rooms.inquire': { en: 'Inquire Now', si: 'දැන් විමසන්න' },
  'rooms.viewAll': { en: 'View All Rooms', si: 'සියලුම කාමර බලන්න' },

  // Room Types
  'room.deluxe': { en: 'Deluxe Room', si: 'ඩිලක්ස් කාමරය' },
  'room.deluxe.desc': { en: 'Spacious room with king-size bed, private balcony with garden view, and modern amenities.', si: 'කිං-සයිස් ඇඳ, උද්‍යාන දර්ශනය සහිත පෞද්ගලික බැල්කනිය සහ නවීන පහසුකම් සහිත පුළුල් කාමරය.' },
  'room.superior': { en: 'Superior Room', si: 'සුපීරියර් කාමරය' },
  'room.superior.desc': { en: 'Elegant room featuring twin beds, scenic balcony views, and premium bathroom facilities.', si: 'ද්විත්ව ඇඳන්, දර්ශනීය බැල්කනි දසුන් සහ උසස් නාන කාමර පහසුකම් සහිත අලංකාර කාමරය.' },
  'room.family': { en: 'Family Suite', si: 'පවුල් සූට්' },
  'room.family.desc': { en: 'Perfect for families, featuring multiple beds, spacious living area, and connecting bathroom.', si: 'පවුල් සඳහා පරිපූර්ණ, බහු ඇඳන්, පුළුල් නිවාස ප්‍රදේශය සහ සම්බන්ධ නාන කාමරය.' },
  'room.executive': { en: 'Executive Suite', si: 'එක්සෙක්යුටිව් සූට්' },
  'room.executive.desc': { en: 'Luxurious suite with premium furnishings, panoramic views, and exclusive amenities.', si: 'උසස් ගෘහ භාණ්ඩ, පැනරමික දර්ශන සහ සුවිශේෂී පහසුකම් සහිත සුඛෝපභෝගී සූට්.' },

  // Gallery
  'gallery.title': { en: 'Photo Gallery', si: 'ඡායාරූප ගැලරිය' },
  'gallery.subtitle': { en: 'Explore our beautiful property', si: 'අපගේ අලංකාර දේපල ගවේෂණය කරන්න' },

  // Attractions
  'attractions.title': { en: 'Nearby Attractions', si: 'අවට ආකර්ෂණ' },
  'attractions.subtitle': { en: 'Discover the ancient wonders of Anuradhapura', si: 'අනුරාධපුරයේ පුරාණ ආශ්චර්යයන් සොයා ගන්න' },
  'attractions.distance': { en: 'Distance from hotel', si: 'හෝටලයේ සිට දුර' },

  // Contact
  'contact.title': { en: 'Contact Us', si: 'අප අමතන්න' },
  'contact.subtitle': { en: 'Make an inquiry or get in touch', si: 'විමසීමක් කරන්න හෝ සම්බන්ධ වන්න' },
  'contact.name': { en: 'Full Name', si: 'සම්පූර්ණ නම' },
  'contact.email': { en: 'Email Address', si: 'විද්‍යුත් තැපැල් ලිපිනය' },
  'contact.phone': { en: 'Phone Number', si: 'දුරකථන අංකය' },
  'contact.checkin': { en: 'Check-in Date', si: 'පැමිණෙන දිනය' },
  'contact.checkout': { en: 'Check-out Date', si: 'පිටවන දිනය' },
  'contact.roomType': { en: 'Room Type', si: 'කාමර වර්ගය' },
  'contact.message': { en: 'Message', si: 'පණිවුඩය' },
  'contact.send': { en: 'Send Inquiry', si: 'විමසීම යවන්න' },
  'contact.whatsapp': { en: 'Chat on WhatsApp', si: 'WhatsApp හි කතා කරන්න' },
  'contact.location': { en: 'Location', si: 'ස්ථානය' },
  'contact.address': { en: 'New Town, Anuradhapura, Sri Lanka', si: 'නව නගරය, අනුරාධපුරය, ශ්‍රී ලංකාව' },

  // Footer
  'footer.rights': { en: 'All rights reserved', si: 'සියලුම අයිතිවාසිකම් ඇවිරිණි' },
  'footer.description': { en: 'Your gateway to exploring the ancient wonders of Anuradhapura with modern comfort.', si: 'නවීන සුවපහසුව සමඟ අනුරාධපුරයේ පුරාණ ආශ්චර්යයන් ගවේෂණය කිරීමට ඔබේ පිවිසුම.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

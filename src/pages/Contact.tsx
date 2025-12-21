import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "LodgingBusiness",
    "name": "Green Safaaya",
    "telephone": "+94779084494",
    "email": "info@greensafaaya.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New Town",
      "addressLocality": "Anuradhapura",
      "addressRegion": "North Central Province",
      "addressCountry": "LK"
    }
  }
};

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    roomType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = encodeURIComponent(
      `Hello! I would like to make a booking inquiry.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nRoom Type: ${formData.roomType}\nMessage: ${formData.message}`
    );
    
    window.open(`https://wa.me/94779084494?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: 'Opening WhatsApp',
      description: 'Your inquiry details have been prepared for WhatsApp.',
    });
  };

  return (
    <>
      <SEO
        title="Contact & Book"
        description="Book your stay at Green Safaaya or inquire about our luxury rooms in Anuradhapura. Contact us via WhatsApp, phone, or our inquiry form."
        keywords="book hotel Anuradhapura, contact Green Safaaya, hotel reservation Sri Lanka, luxury accommodation booking"
        url="https://greensafaaya.com/contact"
        structuredData={contactStructuredData}
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
        <div className="absolute inset-0 bg-luxury-radial opacity-50" />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-shimmer" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-shimmer" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-sans text-sm text-primary tracking-wide">Get in Touch</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            {t('contact.title')}
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl blur-xl" />
              <div className="relative bg-card/80 backdrop-blur-luxury p-10 rounded-2xl shadow-luxury border border-primary/10">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Reserve Your Stay</h2>
                  <p className="font-sans text-muted-foreground">Complete the form below and we'll respond within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-sans text-sm font-medium text-foreground">{t('contact.name')}</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="font-sans bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-sans text-sm font-medium text-foreground">{t('contact.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="font-sans bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-sans text-sm font-medium text-foreground">{t('contact.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="font-sans bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="checkin" className="font-sans text-sm font-medium text-foreground">{t('contact.checkin')}</Label>
                      <Input
                        id="checkin"
                        type="date"
                        required
                        value={formData.checkin}
                        onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
                        className="font-sans bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout" className="font-sans text-sm font-medium text-foreground">{t('contact.checkout')}</Label>
                      <Input
                        id="checkout"
                        type="date"
                        required
                        value={formData.checkout}
                        onChange={(e) => setFormData({ ...formData, checkout: e.target.value })}
                        className="font-sans bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="roomType" className="font-sans text-sm font-medium text-foreground">{t('contact.roomType')}</Label>
                    <Select
                      value={formData.roomType}
                      onValueChange={(value) => setFormData({ ...formData, roomType: value })}
                    >
                      <SelectTrigger className="font-sans bg-background/50 border-border/50 focus:border-primary/50">
                        <SelectValue placeholder="Select your preferred room" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="master">Master Bedroom ($85/night)</SelectItem>
                        <SelectItem value="single">Single Room ($55/night)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-sans text-sm font-medium text-foreground">{t('contact.message')}</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="font-sans bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about any special requests or preferences..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold tracking-wide py-6 text-base shadow-luxury hover:shadow-luxury-lg transition-all duration-500" 
                    size="lg"
                  >
                    {t('contact.send')}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Connect With Us</h2>
                <p className="font-sans text-muted-foreground mb-8">We're here to assist with your stay</p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+94779084494"
                    className="group flex items-center gap-5 p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-luxury transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
                      <p className="font-sans font-semibold text-lg text-card-foreground">+94 77 908 4494</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/94779084494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-luxury transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">WhatsApp</p>
                      <p className="font-sans font-semibold text-lg text-card-foreground">{t('contact.whatsapp')}</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@greensafaaya.com"
                    className="group flex items-center gap-5 p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-luxury transition-all duration-500"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                      <p className="font-sans font-semibold text-lg text-card-foreground">info@greensafaaya.com</p>
                    </div>
                  </a>

                  <div className="group flex items-center gap-5 p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1">{t('contact.location')}</p>
                      <p className="font-sans font-semibold text-lg text-card-foreground">{t('contact.address')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-luxury border border-primary/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d986.979870317069!2d80.40116506367119!3d8.310800527672626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1765465614575!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Green Safaaya Location"
                  />
                </div>
              </div>
              
              {/* Google Maps Link */}
              <a 
                href="https://maps.app.goo.gl/KtMBGaZqseJDPtqY9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Experience Banner */}
      <section className="py-16 bg-gradient-to-r from-secondary via-card to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-radial opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Your Heritage Experience Awaits
          </h3>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Located in the historic city of Anuradhapura, Green Safaaya offers refined elegance 
            and proximity to UNESCO World Heritage sites for an unforgettable cultural experience.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;

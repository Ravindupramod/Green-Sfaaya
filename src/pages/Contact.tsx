import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h1>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-sans">{t('contact.name')}</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-sans">{t('contact.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-sans">{t('contact.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin" className="font-sans">{t('contact.checkin')}</Label>
                    <Input
                      id="checkin"
                      type="date"
                      required
                      value={formData.checkin}
                      onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
                      className="font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout" className="font-sans">{t('contact.checkout')}</Label>
                    <Input
                      id="checkout"
                      type="date"
                      required
                      value={formData.checkout}
                      onChange={(e) => setFormData({ ...formData, checkout: e.target.value })}
                      className="font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roomType" className="font-sans">{t('contact.roomType')}</Label>
                  <Select
                    value={formData.roomType}
                    onValueChange={(value) => setFormData({ ...formData, roomType: value })}
                  >
                    <SelectTrigger className="font-sans">
                      <SelectValue placeholder="Select a room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deluxe">{t('room.deluxe')}</SelectItem>
                      <SelectItem value="superior">{t('room.superior')}</SelectItem>
                      <SelectItem value="family">{t('room.family')}</SelectItem>
                      <SelectItem value="executive">{t('room.executive')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans">{t('contact.message')}</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="font-sans"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  {t('contact.send')}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+94779084494"
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-muted-foreground">Phone</p>
                      <p className="font-sans font-medium text-card-foreground">+94 77 908 4494</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/94779084494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-sans font-medium text-card-foreground">{t('contact.whatsapp')}</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@thaararesidence.com"
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-muted-foreground">Email</p>
                      <p className="font-sans font-medium text-card-foreground">info@thaararesidence.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm text-muted-foreground">{t('contact.location')}</p>
                      <p className="font-sans font-medium text-card-foreground">{t('contact.address')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31582.83099254844!2d80.37864!3d8.3114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf4f0e0e7f7d7%3A0x4c9f0a0a0a0a0a0a!2sNew%20Town%2C%20Anuradhapura!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thaara Residence Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

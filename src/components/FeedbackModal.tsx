import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const FeedbackModal = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset after showing success
            setTimeout(() => {
                setIsOpen(false);
                setIsSuccess(false);
                setRating(0);
            }, 2000);
        }, 1500);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold uppercase tracking-wider shadow-luxury hover:shadow-luxury-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Share Your Story' : 'ඔබේ කතාව බෙදාගන්න'}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] border-none bg-transparent shadow-none p-0 overflow-hidden">
                <div className="relative bg-card/95 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Animated Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                    </div>

                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative z-10"
                            >
                                <div className="text-center mb-8">
                                    <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                                        {language === 'en' ? 'Rate Your Stay' : 'ඔබේ අත්දැකීම ශ්‍රේණිගත කරන්න'}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {language === 'en' ? 'Your feedback helps us create better experiences.' : 'ඔබේ අදහස් අපට වඩා හොඳ සේවාවක් ලබා දීමට උපකාරී වේ.'}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Star Rating */}
                                    <div className="flex justify-center gap-2 mb-8">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                className="relative group focus:outline-none transition-transform hover:scale-110"
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                onClick={() => setRating(star)}
                                            >
                                                <Star
                                                    className={`w-8 h-8 transition-colors duration-200 ${star <= (hoverRating || rating)
                                                            ? 'text-primary fill-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]'
                                                            : 'text-muted-foreground/30 fill-transparent'
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Input
                                                    placeholder={language === 'en' ? "Your Name" : "ඔබේ නම"}
                                                    required
                                                    className="bg-secondary/50 border-white/10 focus:border-primary/50"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Input
                                                    placeholder={language === 'en' ? "Location (Country)" : "රට"}
                                                    required
                                                    className="bg-secondary/50 border-white/10 focus:border-primary/50"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Input
                                                placeholder={language === 'en' ? "Stay Type (e.g. Anniversary)" : "සංචාර වර්ගය"}
                                                className="bg-secondary/50 border-white/10 focus:border-primary/50"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Textarea
                                                placeholder={language === 'en' ? "Share your experience..." : "ඔබේ අත්දැකීම විස්තර කරන්න..."}
                                                required
                                                className="min-h-[120px] bg-secondary/50 border-white/10 focus:border-primary/50 resize-none"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide shadow-lg group"
                                        disabled={isSubmitting || rating === 0}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Processing...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                {language === 'en' ? 'Submit Feedback' : 'ඉදිරිපත් කරන්න'}
                                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                                    {language === 'en' ? 'Thank You!' : 'ස්තූතියි!'}
                                </h3>
                                <p className="text-muted-foreground">
                                    {language === 'en' ? 'Your feedback helps us shine brighter.' : 'ඔබගේ අදහස් අපට වටිනවා.'}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FeedbackModal;

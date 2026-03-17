import AboutSection from '@/components/AboutSection';
import AdBanner from '@/components/AdBanner';
import CTASection from '@/components/CTASection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import PhoneToChat from '@/components/PhoneToChat';
import PulseGrid from '@/components/PulseGrid';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
        id="top"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16"
      >
        <PulseGrid />

        <div className="relative z-10 w-full max-w-lg text-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center justify-center gap-2.5"
          >
            <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">WAssistant</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-3">
              Chat on <span className="text-primary">WhatsApp</span>
              <br />
              without saving contacts
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Enter any phone number and start a WhatsApp conversation instantly. No contact saving
              needed — free, private, and fast.
            </p>
          </motion.div>

          {/* Core feature */}
          <PhoneToChat />
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* Ad Banner */}
      <div className="container mx-auto px-6">
        <AdBanner slot="7135284713" className="w-full max-w-3xl mx-auto my-8" />
      </div>

      {/* How It Works */}
      <HowItWorks />

      {/* About */}
      <AboutSection />

      {/* CTA */}
      <CTASection />

      {/* Ad Banner */}
      <div className="container mx-auto px-6">
        <AdBanner slot="7135284713" className="w-full max-w-3xl mx-auto my-8" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

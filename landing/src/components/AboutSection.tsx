import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">
              About WAssistant
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Built for everyday WhatsApp users
            </h2>
          </div>

          <div className="glass-surface rounded-2xl p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">WAssistant</span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              WAssistant is a free utility app designed to make WhatsApp easier to use. Whether you
              need to quickly message someone without saving their number, generate a QR code for
              your business's WhatsApp, or create shareable chat links — WAssistant handles it all
              in a clean, privacy-focused interface.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The app was born out of a simple frustration: to message someone on WhatsApp, you
              first have to save their contact. That's inconvenient when you just want to send a
              quick message to a delivery driver, a shop, or someone you met briefly. WAssistant
              solves this by letting you open a WhatsApp chat with any phone number — instantly.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond the core phone-to-chat feature, WAssistant includes tools that businesses and
              professionals find valuable: QR code generation for storefronts and business cards,
              shareable chat links with pre-filled messages, vCard creation for sharing contact
              details, and OCR-powered phone number extraction from images and screenshots.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Privacy is at the heart of WAssistant. All phone numbers and data are processed
              locally on your device. Nothing is sent to external servers. The app uses Firebase
              Analytics only for understanding which features are most popular, helping us improve
              the experience.
            </p>

            <div className="border-t border-border pt-6 mt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Disclaimer:</strong> WAssistant is an
                independent third-party utility tool. It is not affiliated with, endorsed by, or
                officially connected to WhatsApp Inc. or Meta Platforms, Inc. WhatsApp is a
                registered trademark of WhatsApp LLC.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

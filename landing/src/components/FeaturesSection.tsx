import { motion } from 'framer-motion';
import { MessageSquare, QrCode, ScanText, Share2, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Chat Without Saving',
    description:
      'Start a WhatsApp conversation with any phone number instantly — no need to add them to your contacts first. Perfect for one-time chats with delivery drivers, businesses, or new acquaintances.',
    link: 'https://wassistant-707.web.app',
  },
  {
    icon: QrCode,
    title: 'QR Code Generator',
    description:
      'Generate scannable QR codes linked to your WhatsApp number. Ideal for business cards, storefronts, flyers, and websites so customers can reach you with a single scan.',
    link: 'https://wassistant-707.web.app',
  },
  {
    icon: Share2,
    title: 'Chat Link Creator',
    description:
      'Create shareable wa.me links with pre-filled messages. Add them to your social media bios, email signatures, or websites to let people message you directly on WhatsApp.',
    link: 'https://wassistant-707.web.app',
  },
  {
    icon: ScanText,
    title: 'OCR Text Recognition',
    description:
      'Extract phone numbers from images, screenshots, or business cards using your camera. The built-in OCR engine processes everything locally on your device for complete privacy.',
    link: 'https://wassistant-707.web.app',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'All processing happens on your device. No phone numbers, messages, or contacts are ever uploaded to external servers. Your data stays yours — always.',
    link: 'https://wassistant-707.web.app',
  },
  {
    icon: Smartphone,
    title: 'Works Everywhere',
    description:
      'Available as an Android app on Google Play and as a web app at wassistant.site. Use it on your phone, tablet, or desktop browser — no installation required for the web version.',
    link: 'https://wassistant-707.web.app',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-wa-green mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-wa-text">
            Powerful WhatsApp tools, all in one place
          </h2>
          <p className="text-wa-muted mt-4 max-w-2xl mx-auto">
            WAssistant gives you everything you need to communicate on WhatsApp more efficiently —
            whether you're a business owner, freelancer, or everyday user.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.a
              key={feature.title}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="glass-surface rounded-xl p-8 group hover:border-wa-green/30 transition-colors cursor-pointer block"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-lg bg-wa-green/10 border border-wa-green/20 flex items-center justify-center group-hover:bg-wa-green/20 transition-colors">
                  <feature.icon className="h-5 w-5 text-wa-green" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-wa-text mb-2">{feature.title}</h3>
              <p className="text-sm text-wa-muted leading-relaxed">{feature.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

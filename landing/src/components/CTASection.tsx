import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-surface rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-surface rounded-full px-4 py-1.5 mb-6">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Free to Use
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-wa-text mb-4">
              Start chatting smarter today
            </h2>
            <p className="text-lg text-wa-muted max-w-lg mx-auto mb-10">
              Download WAssistant on Android or use the web version right here — no sign-up
              required. Just enter a number and chat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.itlab.wassistant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-wa-green text-black font-semibold px-8 py-3.5 rounded-xl btn-press hover:brightness-110 signal-glow text-base"
              >
                <Smartphone className="h-5 w-5" />
                Get on Google Play
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wassistant-707.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-wa-surface border border-white/10 rounded-xl px-8 py-3.5 text-wa-text font-medium btn-press hover:bg-wa-card text-base"
              >
                <Globe className="h-5 w-5 text-wa-green" />
                Use Web Version
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Free forever · No account needed · Privacy focused
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

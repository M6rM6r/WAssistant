import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import PulseGrid from './PulseGrid';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <PulseGrid />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 glass-surface rounded-full px-4 py-1.5 mb-8"
          >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Anti-Ban Engine Active
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-wa-text mb-6 leading-[1.1]">
            Chat on
            <br />
            <span className="text-wa-green">WhatsApp</span>
          </h1>

          <p className="text-lg md:text-xl text-wa-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Enter any phone number and start a WhatsApp conversation instantly. No contact saving
            needed — free, private, and fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg btn-press hover:brightness-110 signal-glow text-base"
            >
              Start Free Campaign
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 glass-surface rounded-lg px-8 py-3.5 text-foreground font-medium btn-press hover:bg-secondary text-base"
            >
              <Shield className="h-4 w-4 text-primary" />
              View Safety Features
            </a>
          </div>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '50K+', label: 'Active Users' },
            { value: '1M+', label: 'Messages Sent' },
            { value: '4.8★', label: 'App Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-mono text-wa-text tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-wa-muted mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

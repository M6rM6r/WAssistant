import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-surface border-b border-border/50"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Zap className="h-4 w-4 text-primary" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">WAssistant</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="/faq.html"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </a>
          <a
            href="/guide.html"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Guide
          </a>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.itlab.wassistant"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg btn-press hover:brightness-110 signal-glow"
        >
          Get the App
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

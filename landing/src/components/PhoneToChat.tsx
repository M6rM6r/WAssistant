import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const PhoneToChat = () => {
  const [phone, setPhone] = useState('+966 ');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');

    if (!/^\+?\d{7,15}$/.test(cleaned)) {
      setError('Enter a valid phone number (e.g. +1234567890)');
      return;
    }

    setError('');
    const digits = cleaned.startsWith('+') ? cleaned.slice(1) : cleaned;
    window.open(`https://wa.me/${encodeURIComponent(digits)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="w-full max-w-md mx-auto"
    >
      <div className="glass-surface rounded-2xl p-6 space-y-4">
        <label
          htmlFor="phone"
          className="block text-xs font-mono uppercase tracking-widest text-muted-foreground"
        >
          Phone Number
        </label>
        <div className="flex gap-3">
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+1 234 567 8900"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (error) setError('');
            }}
            maxLength={20}
            className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
          <button
            type="submit"
            title="Start WhatsApp Chat"
            aria-label="Start WhatsApp Chat"
            className="bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-lg btn-press hover:brightness-110 signal-glow flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="h-5 w-5" />
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        {error && <p className="text-xs text-destructive font-mono">{error}</p>}
      </div>
    </motion.form>
  );
};

export default PhoneToChat;

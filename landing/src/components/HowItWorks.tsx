import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Enter a Phone Number',
    description:
      'Type or paste any international phone number with country code. No need to save it to your contacts — just enter it directly into the input field.',
  },
  {
    number: '02',
    title: 'Tap to Chat',
    description:
      'Press the chat button and WAssistant opens WhatsApp directly to a conversation with that number. Works with WhatsApp on your phone or WhatsApp Web on desktop.',
  },
  {
    number: '03',
    title: 'Start Messaging',
    description:
      "You're now chatting on WhatsApp without ever saving the contact. When you're done, close the chat — no leftover contacts cluttering your phone.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Three simple steps to start chatting
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            WAssistant removes the friction from WhatsApp. No more asking "Can you save my number
            first?" — just type and chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                <span className="text-2xl font-bold font-mono text-primary">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

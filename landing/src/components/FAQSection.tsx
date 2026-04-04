import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does WAssistant allow me to text on WhatsApp without saving a contact?",
    answer: "WAssistant leverages the official WhatsApp API ('wa.me' links). When you enter a phone number and tap 'Chat', WAssistant generates an instant secure link that opens your WhatsApp or WhatsApp Web directly to a chat window with that specific number. No contacts need to be saved in your phonebook, saving you time and keeping your contacts list clean."
  },
  {
    question: "Is this service really free to use?",
    answer: "Yes, WAssistant is a completely free utility tool. We provide this service to help users, businesses, and professionals communicate more efficiently on WhatsApp. Our web platform does include minimal advertising to support hosting costs, but the core features will always remain free."
  },
  {
    question: "Are my chat messages or phone numbers stored anywhere?",
    answer: "Absolutely not. Privacy is our top priority. WAssistant operates entirely client-side, meaning phone numbers are processed locally on your device or browser. We do not store, intercept, or track any conversations or phone numbers you communicate with. Your text goes directly to WhatsApp."
  },
  {
    question: "Can I use WAssistant for my business?",
    answer: "Yes, many businesses rely on WAssistant. If you frequently interact with delivery drivers, prospective clients, or one-time customers, using our tool keeps your business phonebook organized. Additionally, our QR code and Chat Link generator features allow you to create custom links for your customers to reach you easily from your website or social media."
  },
  {
    question: "Does this work on mobile and desktop?",
    answer: "WAssistant is fully responsive and works beautifully on any device. On a mobile device, tapping the chat button will open the native WhatsApp application. On a desktop or laptop computer, it will open WhatsApp Web or the WhatsApp Desktop app, creating a seamless experience across all your devices."
  },
  {
    question: "Is WAssistant affiliated with WhatsApp or Meta?",
    answer: "No, WAssistant is an independent utility application created to enhance your messaging experience. It is not affiliated with, officially endorsed by, or connected to WhatsApp Inc. or Meta Platforms, Inc. We simply utilize the public API tools provided by WhatsApp for developers."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative bg-background">
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
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Learn more about using WAssistant
            </h2>
            <p className="text-muted-foreground mt-4">
              Here are detailed answers to the most common questions our users have about privacy, functionality, and using our utility tool.
            </p>
          </div>

          <div className="glass-surface rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold text-[15px] md:text-base hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

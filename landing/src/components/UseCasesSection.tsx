import { motion } from 'framer-motion';
import { Briefcase, ShoppingCart, Truck, User } from 'lucide-react';

const useCases = [
  {
    icon: Truck,
    title: 'Delivery Drivers & Logistics',
    description: 'When waiting for a package or coordinating a drop-off, sending a quick WhatsApp message to a delivery driver is the fastest way to communicate. WAssistant allows you to enter the driver\'s number provided in your delivery app and text them instantly without permanently adding them to your phone\'s contact list. This protects your privacy while ensuring successful deliveries.'
  },
  {
    icon: ShoppingCart,
    title: 'Sales & E-Commerce',
    description: 'Small business owners answering inquiries from social media or local classifieds deal with dozens of temporary phone numbers daily. Using WAssistant, sellers can quickly reply to leads and coordinate sales on WhatsApp. Additionally, using our QR generator on product pages allows buyers to initiate chats perfectly formatted for instant inquiries.'
  },
  {
    icon: Briefcase,
    title: 'Freelancers & Consultants',
    description: 'Freelancers often network and exchange phone numbers during events, webinars, or brief meetings. Instead of bloating your personal contact book with hundreds of one-time connections, WAssistant offers a streamlined approach. Follow up instantly on WhatsApp using their number for a quick introduction, saving the contact only if a professional relationship develops.'
  },
  {
    icon: User,
    title: 'Everyday Personal Use',
    description: 'Whether you are inquiring about a rental listing, talking to customer support of a local retail store, or coordinating a meetup with someone you found online, keeping your address book completely clean is a massive advantage. WAssistant ensures your core contacts remain people you actually know, while still letting you utilize WhatsApp\'s secure platform for all one-off communications.'
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
};

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 relative bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">
            Practical Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How WAssistant simplifies communication
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            Sending a WhatsApp message without saving the number isn't just about saving a few taps. For many professionals and individuals, it changes how they manage their digital privacy and daily communications. Explore the common ways people utilize our platform.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              variants={item}
              className="glass-surface rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex flex-shrink-0 items-center justify-center">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;

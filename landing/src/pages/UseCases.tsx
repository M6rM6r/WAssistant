import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  CheckCircle,
  GraduationCap,
  Heart,
  Home,
  MessageCircle,
  Plane,
  ShoppingBag,
  Truck,
  Users,
} from 'lucide-react';

const useCases = [
  {
    icon: Briefcase,
    title: 'Business & Sales',
    description:
      'Streamline customer communication without cluttering your phone contacts. Perfect for sales teams, customer support, and business networking.',
    scenarios: [
      'Quick client follow-ups without saving numbers',
      'One-time vendor communications',
      'Event coordination with temporary contacts',
      'Customer support ticket handling',
      'Sales inquiry responses',
    ],
    testimonial: {
      quote:
        'WAssistant helped us reduce contact list clutter by 80% while improving response times.',
      author: 'Sales Manager, Tech Startup',
    },
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce & Delivery',
    description:
      'Coordinate deliveries and customer pickups efficiently. Contact drivers and customers without adding them to your personal contacts.',
    scenarios: [
      'Contact delivery drivers for instructions',
      'Notify customers about arrivals',
      'Coordinate pickup times',
      'Handle delivery issues instantly',
      'Update customers on delays',
    ],
    testimonial: {
      quote:
        'Essential tool for our delivery coordination. Saves time and keeps personal contacts clean.',
      author: 'Operations Manager, Delivery Service',
    },
  },
  {
    icon: Truck,
    title: 'Service Providers',
    description:
      'Plumbers, electricians, cleaners, and other service professionals can communicate with clients without mixing personal and business contacts.',
    scenarios: [
      'Schedule appointments with new clients',
      'Send arrival notifications',
      'Share service completion updates',
      'Request access instructions',
      'Handle billing inquiries',
    ],
    testimonial: {
      quote:
        'Finally, a clean way to message clients without my phone being full of one-time numbers.',
      author: 'Independent Contractor',
    },
  },
  {
    icon: Calendar,
    title: 'Events & Conferences',
    description:
      'Network at events without adding every contact to your phone. Follow up with connections professionally and efficiently.',
    scenarios: [
      'Quick networking follow-ups',
      'Speaker coordination',
      'Attendee communication',
      'Last-minute event changes',
      'Post-event thank you messages',
    ],
    testimonial: {
      quote:
        'Perfect for conference networking. I can follow up immediately without adding 50+ contacts.',
      author: 'Event Coordinator',
    },
  },
  {
    icon: Home,
    title: 'Real Estate',
    description:
      'Real estate agents can manage multiple property inquiries and coordinate viewings without overwhelming their contact list.',
    scenarios: [
      'Schedule property viewings',
      'Send location details',
      'Coordinate with sellers',
      'Update on offers and bids',
      'Share property documents',
    ],
    testimonial: {
      quote: 'Manages 20+ daily inquiries without contact chaos. Game changer for real estate.',
      author: 'Real Estate Agent',
    },
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Teachers and students can communicate for projects, assignments, and coordination without sharing personal contact details.',
    scenarios: [
      'Group project coordination',
      'Assignment clarifications',
      'Parent-teacher quick updates',
      'Study group organization',
      'Event planning',
    ],
    testimonial: {
      quote: 'Great for student communication while maintaining professional boundaries.',
      author: 'University Professor',
    },
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description:
      'Medical professionals can coordinate with patients for appointments, follow-ups, and test results while maintaining privacy.',
    scenarios: [
      'Appointment reminders',
      'Test result notifications',
      'Prescription refill requests',
      'Follow-up scheduling',
      'General health inquiries',
    ],
    testimonial: {
      quote: 'Maintains patient privacy while enabling efficient communication.',
      author: 'Healthcare Administrator',
    },
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description:
      'Hotels, tour guides, and travel services can communicate with guests and coordinate logistics without permanent contact sharing.',
    scenarios: [
      'Guest arrival coordination',
      'Tour guide communication',
      'Local recommendation sharing',
      'Emergency contact updates',
      'Booking confirmations',
    ],
    testimonial: {
      quote: 'Seamless guest communication without language barriers or contact sharing.',
      author: 'Hotel Manager',
    },
  },
];

const stats = [
  { number: '50K+', label: 'Daily Users' },
  { number: '2M+', label: 'Messages Sent' },
  { number: '150+', label: 'Countries' },
  { number: '99.9%', label: 'Uptime' },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Real-World Applications
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How People Use WAssistant
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover how professionals across industries use WAssistant to streamline
              communication and boost productivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Common Scenarios
                  </h4>
                  <ul className="space-y-2">
                    {useCase.scenarios.map((scenario, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {scenario}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <p className="text-sm text-foreground italic mb-2">
                    "{useCase.testimonial.quote}"
                  </p>
                  <p className="text-xs text-muted-foreground">— {useCase.testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="glass-surface rounded-2xl p-8 md:p-12 text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to streamline your communication?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who use WAssistant daily to simplify their WhatsApp
              messaging.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { 
  MessageCircle, 
  QrCode, 
  Link2, 
  UserPlus, 
  History, 
  Globe, 
  Smartphone, 
  Shield, 
  Zap,
  Clock,
  Palette,
  Share2
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Direct WhatsApp Messaging",
    description: "Message any phone number on WhatsApp without saving it to your contacts. Perfect for one-time conversations and keeping your contact list organized.",
    benefits: [
      "No contact saving required",
      "Works with international numbers",
      "Pre-fill custom messages",
      "Instant WhatsApp Web/Mobile opening"
    ]
  },
  {
    icon: QrCode,
    title: "Custom QR Code Generator",
    description: "Create branded QR codes for your business or personal use. Customers can scan and instantly start a WhatsApp conversation with you.",
    benefits: [
      "Customizable colors and design",
      "Add your logo",
      "High-resolution download",
      "Print-ready formats"
    ]
  },
  {
    icon: Link2,
    title: "Shareable Chat Links",
    description: "Generate short, shareable links that open WhatsApp conversations. Use them in emails, social media, or marketing materials.",
    benefits: [
      "Short URL format",
      "Custom message templates",
      "Track click engagement",
      "Easy social sharing"
    ]
  },
  {
    icon: UserPlus,
    title: "vCard Generator",
    description: "Create digital contact cards that can be easily shared and saved. Include all your contact information in a standardized format.",
    benefits: [
      "Professional contact cards",
      "QR code integration",
      "Standard vCard format",
      "Instant contact saving"
    ]
  },
  {
    icon: History,
    title: "Message History",
    description: "Keep track of your recent conversations and frequently contacted numbers. Quick access to your messaging history.",
    benefits: [
      "Recent numbers list",
      "Quick re-messaging",
      "Local storage only",
      "Privacy-focused"
    ]
  },
  {
    icon: Globe,
    title: "International Support",
    description: "Full support for international phone numbers with automatic country code detection and formatting.",
    benefits: [
      "200+ country codes",
      "Automatic formatting",
      "Country flags",
      "Local number validation"
    ]
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Use WAssistant on any device - mobile, tablet, or desktop. Seamless experience across all platforms.",
    benefits: [
      "Web app - no install needed",
      "Mobile apps available",
      "Syncs across devices",
      "Responsive design"
    ]
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your privacy is our priority. No data collection, no tracking, no account required. All processing happens client-side.",
    benefits: [
      "No account required",
      "No data storage",
      "End-to-end encryption",
      "GDPR compliant"
    ]
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed. Generate links and QR codes instantly with our high-performance infrastructure.",
    benefits: [
      "Sub-second generation",
      "Optimized images",
      "CDN delivery",
      "99.9% uptime"
    ]
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "WAssistant is available 24/7 with no downtime. Our reliable infrastructure ensures you can always connect.",
    benefits: [
      "24/7 availability",
      "No maintenance windows",
      "Global CDN",
      "Auto-scaling"
    ]
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description: "Personalize your experience with multiple theme options and dark mode support for comfortable viewing.",
    benefits: [
      "Dark mode",
      "Multiple color schemes",
      "Accessibility support",
      "System theme detection"
    ]
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your WhatsApp links and QR codes across all platforms with one-click sharing options.",
    benefits: [
      "Social media sharing",
      "Email integration",
      "Embed codes",
      "Download options"
    ]
  }
];

export default function FeaturesPage() {
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
              <Zap className="w-4 h-4" />
              Powerful Features
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need for WhatsApp Messaging
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              WAssistant provides a complete suite of tools to enhance your WhatsApp communication experience. From QR codes to chat links, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Choose WAssistant?
            </h2>
            
            <div className="glass-surface rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-primary/5 border-b border-border font-semibold text-foreground">
                <div>Feature</div>
                <div className="text-center">WAssistant</div>
                <div className="text-center">Others</div>
              </div>
              
              {[
                ["No registration required", "✓", "✗"],
                ["Free to use", "✓", "Limited"],
                ["Custom QR codes", "✓", "✗"],
                ["Message templates", "✓", "✗"],
                ["vCard generator", "✓", "✗"],
                ["Privacy focused", "✓", "✗"],
                ["Cross-platform", "✓", "Limited"],
                ["Open source", "✓", "✗"]
              ].map(([feature, us, them], index) => (
                <div 
                  key={feature} 
                  className={`grid grid-cols-3 gap-4 p-4 ${index % 2 === 0 ? 'bg-card/50' : ''}`}
                >
                  <div className="text-foreground">{feature}</div>
                  <div className="text-center text-primary font-bold">{us}</div>
                  <div className="text-center text-muted-foreground">{them}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

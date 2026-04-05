import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Shield, Zap, Users, Smartphone, Globe, Lock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "How to Message on WhatsApp Without Saving Contacts",
    icon: MessageCircle,
    content: `WhatsApp is one of the most popular messaging apps worldwide, but it has a limitation - you typically need to save someone's phone number to send them a message. This can clutter your contacts list, especially for one-time conversations.

WAssistant solves this problem by using WhatsApp's official "wa.me" API links. Here's how it works:

1. Enter the phone number with country code
2. Add an optional pre-filled message
3. Click "Chat" to open WhatsApp directly
4. Start messaging without saving the contact

This is perfect for:
- Contacting delivery drivers
- Reaching customer service
- Connecting with temporary business contacts
- Avoiding contact list clutter

The service is completely free and works on both mobile and desktop devices.`,
    date: "December 2024",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Understanding WhatsApp Privacy & Security",
    icon: Shield,
    content: `Privacy is a top concern for messaging apps. WhatsApp uses end-to-end encryption, which means only you and the person you're messaging can read your conversations.

Key privacy features:
- End-to-end encryption on all messages
- No message storage on WhatsApp servers
- Two-factor authentication support
- Disappearing messages option
- Privacy settings for profile photo, status, and last seen

When using WAssistant, your privacy is protected because:
- We don't store any phone numbers you enter
- Messages go directly through WhatsApp
- No data is collected or shared
- All processing happens client-side

Learn how to maximize your WhatsApp privacy settings and use the app securely for both personal and business communication.`,
    date: "December 2024",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "QR Codes for Business: Complete Guide",
    icon: Zap,
    content: `QR codes have become essential for modern business communication. They allow instant connections without typing phone numbers or searching for contacts.

Benefits of WhatsApp QR codes:
- Instant customer connection
- No typing errors
- Professional appearance
- Easy to share on marketing materials
- Trackable engagement

How businesses use QR codes:
- Customer support lines
- Order inquiries
- Appointment bookings
- Feedback collection
- Product information requests

WAssistant generates customizable QR codes that you can brand with your logo and colors. Place them on business cards, flyers, websites, and product packaging to make it easy for customers to reach you.

Best practices for QR code placement and design to maximize scan rates and customer engagement.`,
    date: "December 2024",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "WhatsApp Business vs Personal: Which to Use?",
    icon: Users,
    content: `WhatsApp offers two main versions: WhatsApp Messenger (personal) and WhatsApp Business. Choosing the right one depends on your needs.

WhatsApp Business features:
- Business profile with hours and website
- Automated greeting and away messages
- Quick replies for common questions
- Labels for organizing chats
- Catalog showcase
- Statistics and analytics

When to use Business:
- You have a business or side hustle
- You need professional presence
- You want automation features
- You need to organize customer chats

When personal is fine:
- Occasional selling to friends
- Small-scale informal selling
- No need for automation
- Prefer simpler interface

Learn the differences and choose the best option for your communication needs.`,
    date: "December 2024",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Cross-Platform WhatsApp: Web, Desktop & Mobile",
    icon: Smartphone,
    content: `WhatsApp works seamlessly across multiple platforms, allowing you to stay connected wherever you are.

WhatsApp Web/Desktop:
- Access from any browser
- Full keyboard for faster typing
- Easy file sharing from computer
- Syncs with mobile app
- QR code login for security

Mobile app features:
- Voice and video calls
- Location sharing
- Camera integration
- Push notifications
- Contact integration

Using WAssistant across platforms:
- Generate links on desktop, open on mobile
- Create QR codes on any device
- Consistent experience everywhere
- No app installation required for web version

Tips for managing WhatsApp across multiple devices and maintaining sync between platforms.`,
    date: "December 2024",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "International Messaging: Country Codes & Tips",
    icon: Globe,
    content: `Messaging internationally requires understanding country codes and format requirements. Here's everything you need to know.

Country code format:
- Always include the + symbol or country code prefix
- Remove leading zeros from local numbers
- Examples: +1 for USA, +44 for UK, +91 for India

Common mistakes to avoid:
- Forgetting the country code
- Including spaces or special characters
- Adding the leading zero after country code
- Wrong country code selection

International messaging tips:
- Save country codes in your contacts
- Use international format for business
- Consider time zones when messaging
- Check data rates when roaming

WAssistant handles country code selection automatically with our country picker, ensuring your messages reach the right destination every time.`,
    date: "December 2024",
    readTime: "3 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              WhatsApp Tips & Guides
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Master WhatsApp Communication
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive guides, tips, and best practices for getting the most out of WhatsApp for personal and business use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <article.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  
                  <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {article.content.slice(0, 200)}...
                  </div>
                  
                  <button className="mt-4 text-primary font-medium text-sm hover:underline">
                    Read full article →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="glass-surface rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to simplify your WhatsApp messaging?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Try WAssistant free - no signup required. Message anyone on WhatsApp without saving contacts.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Start Messaging
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

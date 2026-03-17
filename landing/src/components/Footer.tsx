import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">WAssistant</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Free WhatsApp utility tools. Chat without saving contacts, generate QR codes, create
              chat links, and extract phone numbers from images.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Resources</h4>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <a href="/guide.html" className="hover:text-foreground transition-colors">
                How-To Guide
              </a>
              <a href="/faq.html" className="hover:text-foreground transition-colors">
                FAQ
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.itlab.wassistant"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Google Play Store
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <a href="/privacy_policy.html" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms.html" className="hover:text-foreground transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WAssistant. All rights reserved. WAssistant is not
            affiliated with WhatsApp Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

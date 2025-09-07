import { Separator } from '@/components/ui/separator';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">ACM</h3>
              <p className="text-muted-foreground leading-relaxed">
                Association for Computing Machinery - Leading innovation and fostering growth in our industry through 
                dedication, expertise, and unwavering commitment to excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Events
                </button>
              </div>
            </div>

            {/* Contact Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-secondary">Contact</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('bearers')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Office Bearers
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </button>
                <a 
                  href="mailto:info@acm.org"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  info@acm.org
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-secondary">Connect</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  123 Business District<br />
                  Professional Plaza, Suite 456
                </p>
                <p className="text-muted-foreground">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          {/* Prominent Social Media Section */}
          <div className="text-center mt-12 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-secondary">Follow Us</h3>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://linkedin.com/company/acm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 hover:from-blue-500/30 hover:to-blue-600/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
                  <Linkedin size={24} className="text-blue-600" />
                </div>
                <span className="text-sm font-medium text-blue-600">LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com/acm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-orange-400/10 hover:from-pink-500/30 hover:via-purple-500/25 hover:to-orange-400/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow">
                  <Instagram size={24} className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
                </div>
                <span className="text-sm font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Instagram</span>
              </a>
            </div>
          </div>

          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 ACM. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
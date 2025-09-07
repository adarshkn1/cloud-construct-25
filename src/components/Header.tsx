import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 floating-card mx-4 mt-4">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0aba8bed-56c4-44b7-b086-b99cf941fea3.png" 
              alt="ACM Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-primary">
              ASSOCIATION OF COMPUTER MACHINERY
            </span>
            <img 
              src="/lovable-uploads/279f697b-2005-4700-a806-4db33a5fbfa1.png" 
              alt="Partner Logos" 
              className="h-12 ml-4"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('bearers')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Office Bearers
            </button>
            <button 
              onClick={() => scrollToSection('membership')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Membership
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('bearers')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Office Bearers
              </button>
              <button 
                onClick={() => scrollToSection('membership')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Membership
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
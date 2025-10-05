import { Button } from '@/components/ui/button';
import newBackground from '@/assets/new-background.jpg';
import heroRightNew from '@/assets/hero-right-new.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${newBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-2 w-full">
        <div className="floating-card w-full mx-auto" style={{ paddingTop: '62px', paddingBottom: '62px', paddingLeft: '48px', paddingRight: '48px' }}>
          <div className="flex items-center justify-center gap-8">
            {/* Left Image - ACM Logo */}
            <div className="hidden lg:block">
              <img 
                src="/lovable-uploads/0aba8bed-56c4-44b7-b086-b99cf941fea3.png" 
                alt="ACM Logo" 
                className="w-64 h-80 object-contain rounded-lg shadow-elegant bg-white/10 p-4"
              />
            </div>
            
            {/* Central Content */}
            <div className="text-center">
              <h1 className="font-bold mb-6 text-primary" style={{ fontSize: '30px' }}>
                ACM Student Chapter: Your Gateway to Success in Computer Science
              </h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed mx-auto text-center">
                Welcome to the ACM (Association for Computing Machinery) Student Chapter, where computer science students come together to learn, grow, and shape the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            
            {/* Right Image - GAT Student Chapter Logo */}
            <div className="hidden lg:block">
              <img 
                src={heroRightNew} 
                alt="GAT ACM Student Chapter" 
                className="w-64 h-80 object-contain rounded-lg shadow-elegant bg-white/10 p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
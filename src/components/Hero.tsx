import { Button } from '@/components/ui/button';
import buildingBackground from '@/assets/building-background.jpg';
import heroLeft from '@/assets/hero-left.jpg';
import heroRight from '@/assets/hero-right.jpg';

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
        backgroundImage: `url(${buildingBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-2">
        <div className="floating-card p-12 w-full max-w-[90vw] mx-auto">
          <div className="flex items-center justify-center gap-8">
            {/* Left Image */}
            <div className="hidden lg:block">
              <img 
                src={heroLeft} 
                alt="Professional team" 
                className="w-48 h-64 object-cover rounded-lg shadow-elegant"
              />
            </div>
            
            {/* Central Content */}
            <div className="text-center">
              <h1 className="font-bold mb-6 text-primary" style={{ fontSize: '30px' }}>
                ACM Student Chapter: Your Gateway to Success in Computer Science
              </h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed max-w-2xl text-center">
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
            
            {/* Right Image */}
            <div className="hidden lg:block">
              <img 
                src={heroRight} 
                alt="Modern architecture" 
                className="w-48 h-64 object-cover rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
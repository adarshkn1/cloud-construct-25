import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import DynamicCarousel from '@/components/DynamicCarousel';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import Pioneers from '@/components/Pioneers';
import FacultyCore from '@/components/FacultyCore';
import OfficeBearers from '@/components/OfficeBearers';
import Membership from '@/components/Membership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import newBackground from '@/assets/new-background.jpg';

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${newBackground})`,
      }}
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-background/20 backdrop-blur-[1px]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <DynamicCarousel />
        <Events />
        <Gallery />
        <Pioneers />
        <FacultyCore />
        <OfficeBearers />
        <Membership />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

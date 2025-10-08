import { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import rocs1 from '@/assets/gallery/rocs-1.jpg';
import rocs2 from '@/assets/gallery/rocs-2.jpg';
import rocs3 from '@/assets/gallery/rocs-3.jpg';
import rocs4 from '@/assets/gallery/rocs-4.jpg';
import rocs5 from '@/assets/gallery/rocs-5.jpg';
import rocs6 from '@/assets/gallery/rocs-6.jpg';
import rocs7 from '@/assets/gallery/rocs-7.jpg';

const Gallery = () => {
  const [api, setApi] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  const galleryImages = [
    { id: 1, src: rocs1, alt: "ACM ROCS 2025 - Registration desk at BMSCE" },
    { id: 2, src: rocs2, alt: "ACM ROCS 2025 - Interactive workshop session" },
    { id: 3, src: rocs3, alt: "ACM ROCS 2025 - Inauguration ceremony" },
    { id: 4, src: rocs4, alt: "ACM ROCS 2025 - Team ACM-GAT group photo" },
    { id: 5, src: rocs5, alt: "ACM ROCS 2025 - Full event participants" },
    { id: 6, src: rocs6, alt: "ACM ROCS 2025 - Lamp lighting ceremony" },
    { id: 7, src: rocs7, alt: "ACM ROCS 2025 - Outdoor group photo" },
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Gallery
          </h2>
          
          {/* ACM ROCS 2025 Hover Card */}
          <div 
            className="mt-12 transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isHovered ? (
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-center text-secondary">
                    ACM ROCS 2025
                  </CardTitle>
                  <CardDescription className="text-center text-lg mt-4">
                    Team ACM-GAT had an amazing experience being part of ROCS (Research Opportunities in Computer Science), 
                    a 2-day tech orientation packed with learning and collaboration with our friends at ACM BMSCE and ACM INDIA!
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground italic">
                  Hover to view photos and full details
                </CardContent>
              </Card>
            ) : (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 text-secondary">
                  ACM ROCS 2025
                </h3>
                
                <div className="max-w-4xl mx-auto mb-8">
                  <p className="text-muted-foreground leading-relaxed text-center mb-4">
                    Team ACM-GAT had an amazing experience being part of ROCS (Research Opportunities in Computer Science), 
                    a 2-day tech orientation packed with learning and collaboration with our friends at ACM BMSCE and ACM INDIA!
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed text-center mb-4">
                    From insightful sessions to interactive discussions, the event helped participants dive deeper into the 
                    world of technology, innovation, and community building. We were inspired by distinguished speakers like 
                    Jayant Haritsa (IISc Bangalore), Dr. Yogesh Simmhan (IISc Bangalore), Karthikeyan Shanmugam (Google DeepMind India), 
                    Meenakshi D'Souza (IIIT Bangalore), and many more who shared their valuable insights.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed text-center mb-8">
                    It was truly inspiring to witness the power of collective learning and the vibrant ACM spirit that connects 
                    chapters together. Looking forward for more such Collaborations with various ACM CHAPTERS!
                  </p>
                </div>

                <Carousel
                  setApi={setApi}
                  className="w-full"
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {galleryImages.map((image) => (
                      <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                        <div className="p-1">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                  <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                </Carousel>

                {/* Progress indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

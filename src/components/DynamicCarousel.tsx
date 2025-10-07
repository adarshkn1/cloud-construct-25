import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DynamicCarousel = () => {
  const [api, setApi] = useState<any>(null);

  const carouselData = [
    {
      id: 1,
      title: "Skill Development",
      description: "Hands-on workshops, competitions, and technical sessions on emerging technologies.",
      category: "Learning",
      image: "💻",
      stats: "500+ Workshops"
    },
    {
      id: 2,
      title: "Career Growth",
      description: "Opportunities for internships, conferences, and recognition through ACM scholarships and awards.",
      category: "Advancement",
      image: "🚀",
      stats: "Global Opportunities"
    },
    {
      id: 3,
      title: "Access to Knowledge",
      description: "ACM Digital Library, leading research papers, journals, and magazines",
      category: "Resources",
      image: "📖",
      stats: "50000+ Papers"
    },
    {
      id: 4,
      title: "Global Networking",
      description: "Connect with professionals, researchers, and students across the world.",
      category: "Network",
      image: "🌍",
      stats: "190+ Countries"
    },
    {
      id: 5,
      title: "Community & Collaboration",
      description: "A chance to work on impactful projects, share ideas, and be part of a supportive tech community.",
      category: "Together",
      image: "👥",
      stats: "Active Community"
    }
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Benefits of Joining ACM Student Chapter
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Unlock opportunities, build skills, and connect with the global tech community.
          </p>
          
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselData.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="floating-card border-none shadow-none h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="text-6xl mb-4">{item.image}</div>
                      <Badge variant="secondary" className="w-fit mx-auto mb-2">
                        {item.category}
                      </Badge>
                      <CardTitle className="text-xl text-secondary">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-2xl font-bold text-accent">{item.stats}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
          
          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          
          {/* Closing message */}
          <p className="text-center text-muted-foreground mt-8 text-lg">
            Becoming a member of ACM and its Student Chapter opens the door to a world of opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default DynamicCarousel;
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
      title: "Innovation Excellence",
      description: "Driving technological advancement through innovative solutions and strategic partnerships.",
      category: "Technology",
      image: "🚀",
      stats: "500+ Projects"
    },
    {
      id: 2,
      title: "Global Reach",
      description: "Expanding our presence across international markets with sustainable growth strategies.",
      category: "Business",
      image: "🌍",
      stats: "50+ Countries"
    },
    {
      id: 3,
      title: "Expert Team",
      description: "World-class professionals dedicated to delivering exceptional results and client satisfaction.",
      category: "People",
      image: "👥",
      stats: "200+ Experts"
    },
    {
      id: 4,
      title: "Sustainable Future",
      description: "Committed to environmental responsibility and building a sustainable future for generations.",
      category: "Environment",
      image: "🌱",
      stats: "Carbon Neutral"
    },
    {
      id: 5,
      title: "Digital Transformation",
      description: "Leading the digital revolution with cutting-edge technologies and innovative solutions.",
      category: "Digital",
      image: "💻",
      stats: "AI Powered"
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
            Our Excellence
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover what makes us leaders in our field through our key achievements and capabilities.
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
        </div>
      </div>
    </section>
  );
};

export default DynamicCarousel;
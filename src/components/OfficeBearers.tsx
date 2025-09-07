import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Mail, Phone } from 'lucide-react';
const seemaHegde = '/lovable-uploads/cc7d8e35-31dd-460b-86c1-0164600f910b.png';
import michaelChen from '@/assets/bearers/michael-chen.jpg';
import emilyRodriguez from '@/assets/bearers/emily-rodriguez.jpg';
import davidThompson from '@/assets/bearers/david-thompson.jpg';

const OfficeBearers = () => {
  const bearers = [
    {
      name: "Dr. Seema B Hegde",
      position: "Faculty Sponsor",
      email: "seema.hegde@gat.ac.in",
      phone: "+1 (555) 123-4567",
      bio: "Leading the organization with over 15 years of industry experience and a passion for innovation.",
      photo: seemaHegde
    },
    {
      name: "Michael Chen",
      position: "Vice President",
      email: "vp@organization.com",
      phone: "+1 (555) 234-5678",
      bio: "Driving strategic initiatives and fostering partnerships that align with our organizational goals.",
      photo: michaelChen
    },
    {
      name: "Emily Rodriguez",
      position: "Secretary",
      email: "secretary@organization.com",
      phone: "+1 (555) 345-6789",
      bio: "Ensuring smooth operations and maintaining excellent communication across all departments.",
      photo: emilyRodriguez
    },
    {
      name: "David Thompson",
      position: "Treasurer",
      email: "treasurer@organization.com",
      phone: "+1 (555) 456-7890",
      bio: "Managing financial resources with precision and ensuring fiscal responsibility and transparency.",
      photo: davidThompson
    }
  ];

  return (
    <section id="bearers" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Office Bearers
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 2,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {bearers.map((bearer, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="floating-card border-none shadow-none">
                    <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={bearer.photo} alt={bearer.name} />
                        <AvatarFallback>{bearer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl text-secondary">{bearer.name}</CardTitle>
                        <p className="text-accent font-semibold">{bearer.position}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {bearer.bio}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Mail size={16} />
                          <a 
                            href={`mailto:${bearer.email}`}
                            className="hover:text-primary transition-colors"
                          >
                            {bearer.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Phone size={16} />
                          <a 
                            href={`tel:${bearer.phone}`}
                            className="hover:text-primary transition-colors"
                          >
                            {bearer.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OfficeBearers;
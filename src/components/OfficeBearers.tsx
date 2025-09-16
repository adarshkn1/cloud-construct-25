import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Mail, Phone, Linkedin } from 'lucide-react';
import seemaHegde from '@/assets/bearers/seema-hegde.jpg';
import abhishekR from '@/assets/bearers/abhishek-r.jpg';
import nithyaLakshmi from '@/assets/bearers/nithya-lakshmi.jpg';
import dhanushMP from '@/assets/bearers/dhanush-mp.jpg';
import joannaNatalie from '@/assets/bearers/joanna-natalie.jpg';
import adamAhmed from '@/assets/bearers/adam-ahmed.jpg';

const OfficeBearers = () => {
  const bearers = [
    {
      name: "Dr. Seema B Hegde",
      position: "Faculty Sponsor",
      email: "seema.hegde@gat.ac.in",
      phone: "+91 9916308755",
      linkedin: "https://www.linkedin.com/in/dr-seema-b-hegde-4915b523?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      photo: seemaHegde,
      showContact: true
    },
    {
      name: "Abhishek R",
      position: "Chapter Chairman",
      email: "chairman@organization.com",
      phone: "+91 9353646127",
      linkedin: "https://www.linkedin.com/in/abhisecr/",
      photo: abhishekR,
      showContact: true
    },
    {
      name: "Joanna Natalie R",
      position: "Secretary",
      email: "secretary@organization.com",
      phone: "+91 8861435426",
      linkedin: "https://www.linkedin.com/in/joannanatalie2612",
      photo: joannaNatalie,
      showContact: true
    },
    {
      name: "Nithya Lakshmi G V",
      position: "Chapter Vice Chairman",
      linkedin: "https://www.linkedin.com/in/nithya-lakshmi-gv-b7464a28b",
      photo: nithyaLakshmi,
      showContact: false
    },
    {
      name: "Dhanush M P",
      position: "Treasurer",
      linkedin: "https://www.linkedin.com/in/dhanush-mp-15b083266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      photo: dhanushMP,
      showContact: false
    },
    {
      name: "Adam Ahmed Yahya",
      position: "Web Master",
      linkedin: "https://www.linkedin.com/in/adamahmedyahya",
      photo: adamAhmed,
      showContact: false
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
                      <div className="space-y-2">
                        {bearer.showContact && bearer.email && (
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Mail size={16} />
                            <a 
                              href={`mailto:${bearer.email}`}
                              className="hover:text-primary transition-colors"
                            >
                              {bearer.email}
                            </a>
                          </div>
                        )}
                        {bearer.showContact && bearer.phone && (
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Phone size={16} />
                            <a 
                              href={`tel:${bearer.phone}`}
                              className="hover:text-primary transition-colors"
                            >
                              {bearer.phone}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Linkedin size={16} />
                          <a 
                            href={bearer.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            LinkedIn Profile
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
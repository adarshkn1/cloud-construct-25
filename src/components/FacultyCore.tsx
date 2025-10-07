import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Mail, Phone, Linkedin } from 'lucide-react';
import seemaHegde from '@/assets/bearers/seema-hegde.jpg';
import kumaraswamyS from '@/assets/bearers/kumaraswamy-s.jpg';

const FacultyCore = () => {
  const faculty = [
    {
      name: "Kumaraswamy S",
      position: "Faculty Advisor",
      email: "skswamy@gat.ac.in",
      phone: "+91 98863 63412",
      linkedin: "https://linkedin.com/in/dr-kumaraswamy-s-278bb32b",
      photo: kumaraswamyS,
      showContact: true
    },
    {
      name: "Dr. Seema B Hegde",
      position: "Faculty Sponsor",
      email: "seema.hegde@gat.ac.in",
      phone: "+91 9916308755",
      linkedin: "https://www.linkedin.com/in/dr-seema-b-hegde-4915b523?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      photo: seemaHegde,
      showContact: true
    }
  ];

  return (
    <section id="faculty" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Faculty Core
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Meet the esteemed faculty co-ordinators whose guidance and support are instrumental to the growth and success of our chapter
          </p>
          
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {faculty.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="floating-card border-none shadow-none">
                    <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage 
                          src={member.photo} 
                          alt={member.name}
                        />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl text-secondary">{member.name}</CardTitle>
                        <p className="text-accent font-semibold">{member.position}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {member.showContact && member.email && (
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Mail size={16} />
                            <a 
                              href={`mailto:${member.email}`}
                              className="hover:text-primary transition-colors"
                            >
                              {member.email}
                            </a>
                          </div>
                        )}
                        {member.showContact && member.phone && (
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Phone size={16} />
                            <a 
                              href={`tel:${member.phone}`}
                              className="hover:text-primary transition-colors"
                            >
                              {member.phone}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Linkedin size={16} />
                          <a 
                            href={member.linkedin}
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
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FacultyCore;

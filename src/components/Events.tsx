import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  const events = [
    {
      title: "Annual Conference 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Grand Convention Center",
      description: "Join us for our flagship annual conference featuring industry leaders, innovative presentations, and networking opportunities."
    },
    {
      title: "Professional Development Workshop",
      date: "April 8, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Main Office Building",
      description: "Enhance your skills with our comprehensive workshop covering the latest industry trends and best practices."
    },
    {
      title: "Community Outreach Program",
      date: "May 20, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Community Center",
      description: "Be part of our community initiative aimed at making a positive impact through volunteer work and social engagement."
    }
  ];

  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="floating-card border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{event.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
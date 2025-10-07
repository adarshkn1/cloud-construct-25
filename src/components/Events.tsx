import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import acmInvitation from '@/assets/acm-invitation.png';

const Events = () => {
  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Upcoming Events
          </h2>
          
          <div className="flex justify-center">
            <img 
              src={acmInvitation} 
              alt="ACM Student Chapter Inauguration - October 10th, 2025 at GAT Auditorium" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
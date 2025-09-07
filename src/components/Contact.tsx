import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Contact Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Get in Touch
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="How can we help you?" 
                    className="border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={5}
                    className="border-border focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Contact Information
              </h3>
              <div className="space-y-6">
                <Card className="floating-card border-none shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Address</h4>
                        <p className="text-muted-foreground">
                          123 Business District<br />
                          Professional Plaza, Suite 456<br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card border-none shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Phone className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Phone</h4>
                        <p className="text-muted-foreground">
                          Main: +1 (555) 123-4567<br />
                          Toll Free: +1 (800) 123-4567
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card border-none shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Mail className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Email</h4>
                        <p className="text-muted-foreground">
                          info@organization.com<br />
                          support@organization.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="floating-card border-none shadow-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
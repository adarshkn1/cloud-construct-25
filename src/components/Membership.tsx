import { CheckCircle, Users, CreditCard, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Membership = () => {
  const benefits = [
    "Access to exclusive events and workshops",
    "Professional networking opportunities",
    "Monthly newsletter and industry updates",
    "Priority registration for conferences",
    "Member-only resources and publications",
    "Discounted rates on training programs"
  ];

  const eligibilityItems = [
    "Professionals in related industry fields",
    "Students pursuing relevant degrees",
    "Organizations and corporate entities",
    "International applicants welcome"
  ];

  const membershipTypes = [
    {
      type: "Individual",
      price: "$50",
      period: "Annual",
      description: "Perfect for individual professionals"
    },
    {
      type: "Student",
      price: "$25",
      period: "Annual",
      description: "Special rate for students with valid ID"
    },
    {
      type: "Corporate",
      price: "$200",
      period: "Annual",
      description: "For organizations and companies"
    }
  ];

  return (
    <section id="membership" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Membership
          </h2>
          
          {/* Eligibility Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-secondary flex items-center">
              <Users className="mr-3" size={28} />
              Eligibility
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {eligibilityItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-secondary">
              Membership Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Details Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-secondary flex items-center">
              <CreditCard className="mr-3" size={28} />
              Membership Fees
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {membershipTypes.map((membership, index) => (
                <Card key={index} className="floating-card border-none shadow-none">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-primary">{membership.type}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {membership.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-secondary">{membership.price}</span>
                      <span className="text-muted-foreground ml-2">/ {membership.period}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Registration Section */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-6 text-secondary">
              Ready to Join?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Become a member today and unlock exclusive benefits, networking opportunities, 
              and access to our professional community.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdAy7uxacFMvPkDoAoiarz05_1oYXlrKeeLk-BvDXyPLUxZHg/viewform?usp=sharing', '_blank')}
            >
              Register Now
              <ExternalLink className="ml-2" size={20} />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Registration opens in a new window
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
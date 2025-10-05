import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2 } from 'lucide-react';

const Pioneers = () => {
  const pioneers = [
    { name: "Alan Turing", title: "Father of theoretical computer science" },
    { name: "Donald Knuth", title: "Pioneer of algorithms and author of The Art of Computer Programming" },
    { name: "Barbara Liskov", title: "Turing Award winner, programming language innovator" },
    { name: "Vinton Cerf", title: "Co-designer of the Internet protocol (TCP/IP)" },
    { name: "Tim Berners-Lee", title: "Inventor of the World Wide Web" },
    { name: "Andrew Ng", title: "AI researcher and co-founder of Coursera" }
  ];

  const companies = [
    { name: "Google", contribution: "AI research, large-scale computing" },
    { name: "Microsoft", contribution: "Cloud, software ecosystems, developer platforms" },
    { name: "IBM", contribution: "Quantum computing, enterprise solutions" },
    { name: "Intel", contribution: "High-performance processors and computing innovation" },
    { name: "Amazon", contribution: "Cloud computing (AWS), large-scale systems" }
  ];

  return (
    <section id="pioneers" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Pioneers of ACM
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pioneers Column */}
            <Card className="floating-card border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Notable Pioneers</h3>
                </div>
                <div className="space-y-4">
                  {pioneers.map((pioneer, index) => (
                    <div key={index} className="border-l-4 border-primary/30 pl-4 py-2">
                      <h4 className="font-bold text-lg text-primary">{pioneer.name}</h4>
                      <p className="text-muted-foreground text-sm">{pioneer.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Industry Contributors Column */}
            <Card className="floating-card border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Building2 className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Major Industry Contributors</h3>
                </div>
                <div className="space-y-4">
                  {companies.map((company, index) => (
                    <div key={index} className="border-l-4 border-accent/30 pl-4 py-2">
                      <h4 className="font-bold text-lg text-accent">{company.name}</h4>
                      <p className="text-muted-foreground text-sm">{company.contribution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pioneers;

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            About Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We are committed to excellence in everything we do. Our organization 
                strives to create meaningful impact through innovative solutions, 
                collaborative partnerships, and unwavering dedication to our core values.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With years of experience and a team of dedicated professionals, 
                we continue to set new standards in our industry while maintaining 
                our commitment to integrity and quality.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Our Values
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Excellence</h4>
                  <p className="text-muted-foreground">
                    We pursue the highest standards in all our endeavors.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                  <p className="text-muted-foreground">
                    We embrace change and drive forward-thinking solutions.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg mb-2">Integrity</h4>
                  <p className="text-muted-foreground">
                    We operate with honesty and transparency in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
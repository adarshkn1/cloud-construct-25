const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="floating-card p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            About Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Our Mission
              </h3>
              <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                <p>To provide a collaborative platform for students to explore and excel in computing and emerging technologies through knowledge sharing, research, and innovation.</p>
                <p>To nurture professional skills, ethical values, and leadership qualities in line with ACM's global standards and GAT's institutional goals.</p>
                <p>To organize technical events, workshops, hackathons, and seminars that bridge academia, industry, and research.</p>
                <p>To encourage participation in global ACM initiatives, competitions, and communities for continuous learning and growth.</p>
                <p>To promote inclusivity, creativity, and social responsibility in leveraging computing for the betterment of society.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                To foster a vibrant community of innovators and leaders in computing, nurturing curiosity and creativity while empowering students with knowledge, skills, and values to drive technological progress and inspire minds toward building impactful solutions for a sustainable digital future.
              </p>

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
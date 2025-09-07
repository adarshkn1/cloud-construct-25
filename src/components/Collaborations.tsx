import React, { useState, useEffect, useRef } from 'react';
import { Building, Cpu, Zap, Globe, Database, Code, Shield, Smartphone, Cloud, Layers, Workflow, Sparkles } from 'lucide-react';

const Collaborations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const companies = [
    { name: "TechCorp", icon: Building, color: "from-red-500 to-pink-500", bgColor: "bg-red-50 dark:bg-red-950/20" },
    { name: "InnovateGroup", icon: Cpu, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50 dark:bg-blue-950/20" },
    { name: "FutureWorks", icon: Zap, color: "from-yellow-500 to-orange-500", bgColor: "bg-yellow-50 dark:bg-yellow-950/20" },
    { name: "NextGen", icon: Globe, color: "from-green-500 to-emerald-500", bgColor: "bg-green-50 dark:bg-green-950/20" },
    { name: "ProSolutions", icon: Database, color: "from-purple-500 to-violet-500", bgColor: "bg-purple-50 dark:bg-purple-950/20" },
    { name: "GlobalTech", icon: Code, color: "from-orange-500 to-red-500", bgColor: "bg-orange-50 dark:bg-orange-950/20" },
    { name: "SmartSystems", icon: Shield, color: "from-indigo-500 to-blue-500", bgColor: "bg-indigo-50 dark:bg-indigo-950/20" },
    { name: "DataFlow", icon: Smartphone, color: "from-pink-500 to-rose-500", bgColor: "bg-pink-50 dark:bg-pink-950/20" },
    { name: "CloudSync", icon: Cloud, color: "from-sky-500 to-blue-500", bgColor: "bg-sky-50 dark:bg-sky-950/20" },
    { name: "LayerTech", icon: Layers, color: "from-slate-500 to-gray-500", bgColor: "bg-slate-50 dark:bg-slate-950/20" },
    { name: "FlowCore", icon: Workflow, color: "from-teal-500 to-green-500", bgColor: "bg-teal-50 dark:bg-teal-950/20" },
    { name: "SparkleAI", icon: Sparkles, color: "from-amber-500 to-yellow-500", bgColor: "bg-amber-50 dark:bg-amber-950/20" }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="collaborations" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Trusted Partnerships</span>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Working alongside industry leaders to deliver exceptional solutions and drive innovation forward
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-7xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          {/* Floating grid of company cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {companies.map((company, index) => {
              const IconComponent = company.icon;
              const delay = index * 100;
              
              // Calculate magnetic effect
              const magnetStrength = 15;
              const distanceFromMouse = Math.sqrt(
                Math.pow(mousePosition.x * magnetStrength, 2) + 
                Math.pow(mousePosition.y * magnetStrength, 2)
              );
              const magnetX = mousePosition.x * (magnetStrength / (1 + distanceFromMouse * 0.1));
              const magnetY = mousePosition.y * (magnetStrength / (1 + distanceFromMouse * 0.1));
              
              return (
                <div
                  key={company.name}
                  className="group relative"
                  style={{
                    animation: `fade-in 0.8s ease-out ${delay}ms both`,
                  }}
                >
                  <div
                    className={`
                      relative p-6 rounded-2xl border border-white/20 backdrop-blur-sm
                      transform transition-all duration-300 ease-out
                      hover:scale-110 hover:-rotate-2 hover:shadow-2xl hover:shadow-blue-500/20
                      ${company.bgColor}
                    `}
                    style={{
                      transform: `
                        translate3d(${magnetX}px, ${magnetY}px, 0)
                        perspective(1000px)
                        rotateX(${mousePosition.y * 2}deg)
                        rotateY(${mousePosition.x * 2}deg)
                      `,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Gradient overlay */}
                    <div 
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    {/* Icon container */}
                    <div className="relative z-10 flex flex-col items-center space-y-4">
                      <div 
                        className={`
                          w-16 h-16 rounded-xl bg-gradient-to-br ${company.color} 
                          flex items-center justify-center shadow-lg
                          transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12
                        `}
                        style={{
                          animation: `pulse 3s ease-in-out infinite`,
                          animationDelay: `${delay}ms`
                        }}
                      >
                        <IconComponent 
                          size={28} 
                          className="text-white drop-shadow-sm"
                        />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="font-semibold text-foreground text-sm md:text-base group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {company.name}
                        </h3>
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 mx-auto mt-1" />
                      </div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ animation: 'float 2s ease-in-out infinite' }} />
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                         style={{ animation: 'float 2.5s ease-in-out infinite reverse' }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background animated elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Partners", value: "12+" },
            { label: "Projects", value: "150+" },
            { label: "Countries", value: "25+" },
            { label: "Success Rate", value: "98%" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-4 rounded-xl bg-white/50 dark:bg-card/30 backdrop-blur-sm border border-white/20"
              style={{ animation: `fade-in 0.8s ease-out ${800 + index * 100}ms both` }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
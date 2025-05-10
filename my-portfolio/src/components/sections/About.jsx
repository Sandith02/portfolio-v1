import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Trigger animation when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
    
    const section = document.getElementById('about-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  // Preload the profile image
  useEffect(() => {
    const img = new Image();
    img.src = '/src/assets/about-me.png';
    img.onload = () => setImageLoaded(true);
    
    // Return early if image is already in browser cache
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section id="about-section" className="relative py-24 overflow-hidden bg-[#010a0f]">
      {/* Background gradient and effects - matching the hero section */}
      <div className="absolute inset-0 z-0">
        {/* Dark background base */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        
        {/* Grid pattern overlay like the hero buttons tech section */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(rgba(98, 113, 131, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(98, 113, 131, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Subtle metal grid effect like in hero */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-cover bg-center" 
            style={{
              backgroundImage: 'url(/src/assets/bg19.jpeg)',
              filter: 'grayscale(100%) brightness(10%)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section title with same gradient as hero section */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold font-orbitron mb-4 inline-block relative bg-gradient-to-r from-[#c7cdd3] to-[#627183] bg-clip-text text-transparent"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            About Me
          </h2>
          
          {/* Subtle divider like in hero section */}
          <div 
            className="h-px w-[120px] mx-auto mt-2"
            style={{
              background: 'linear-gradient(to right, transparent, #627183, transparent)',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out 0.3s'
            }}
          ></div>
        </div>
        
        {/* Main content with glass card effect */}
        <div className="relative rounded-lg overflow-hidden backdrop-blur-sm"
          style={{
            background: 'rgba(20, 25, 35, 0.3)',
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.3)',
            borderTop: '1px solid rgba(98, 113, 131, 0.2)',
            borderLeft: '1px solid rgba(98, 113, 131, 0.2)',
            borderRight: '1px solid rgba(0, 0, 0, 0.2)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-10">
            {/* Profile image with styling similar to hero */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div 
                className="relative w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              >
                {/* Square frame matching hero aesthetics */}
                <div className="absolute inset-[-12px] rounded-xl border border-[#4c5869]/30"></div>
                
                {/* Image container */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#4c5869]/50 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0a1220] to-[#0a0a0a]">
                    {imageLoaded && (
                      <img 
                        src="/src/assets/about-me.png"
                        alt="Sandith Sithmaka Thenuwara" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div 
              className="lg:col-span-8 flex flex-col justify-center text-gray-300 font-michroma"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(2rem)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
              }}
            >
              <p className="mb-6 leading-7 text-lg tracking-wide">
                I am a Computer Science student at the University of Westminster, passionate about developing 
                creative solutions to technical challenges. With strong attention to detail and a drive to continuously 
                learn new technologies, I'm seeking opportunities to contribute to impactful projects where I can 
                apply and expand my programming skills.
              </p>
              
              <p className="mb-6 leading-7 text-lg tracking-wide">
                My experience spans full-stack development, with particular strength in React, Spring Boot applications and 
                MERN stack applications. I'm dedicated to creating clean, efficient code and delivering exceptional 
                user experiences that combine technical excellence with intuitive design.
              </p>
              
              <p className="mb-8 leading-7 text-lg tracking-wide">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or enjoying outdoor activities.
              </p>
              
              {/* Button styled like hero buttons */}
              <div className="flex justify-start mt-4">
                <a 
                  href="/src/assets/Sandith_Thenuwara_CV.pdf" 
                  download
                  className="bg-[#4c5869]/50 hover:bg-[#53627b] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 font-orbitron hover:shadow-lg flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technologies section - matching hero's tech grid */}
        <div className="mt-16">
          {/* <h3 className="text-lg font-semibold text-[#c7cdd3] mb-6 font-orbitron tracking-wider text-center">
            TECHNOLOGIES
          </h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {["React", "Java", "JavaScript", "Spring Boot", "MongoDB"].map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-900/20 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:bg-gray-800/40 transition-all duration-300 flex flex-col items-center justify-center hover:scale-105"
                style={{
                  animation: isVisible ? `techFadeIn 0.5s ease-out forwards ${index * 80}ms` : 'none',
                  opacity: 0
                }}
              >
                <span className="text-gray-300 text-sm font-orbitron">{tech}</span>
              </div>
            ))}
          </div> */}
          
          {/* Animated divider matching hero section */}
          <div className="mt-8 h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#627183] to-transparent animate-pulse-subtle"></div>
        </div>
      </div>
      
      {/* Add global animation for effects */}
      <style jsx>{`
        @keyframes techFadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-pulse-subtle {
          animation: pulse 3s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
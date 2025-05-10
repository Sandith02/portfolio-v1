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
    <section id="about-section" className="relative overflow-hidden bg-black">
      {/* Notched top shape for section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#05011b]">
        {/* SVG for the notched shape */}
        <svg className="absolute top-0 left-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 64">
          <path
            d="M0,0 L360,0 L440,64 L1000,64 L1080,0 L1440,0 L1440,64 L0,64 Z"
            fill="#111827" 
          />
        </svg>
      </div>
      
      {/* Main content section with background */}
      <div className="pt-16 bg-[#111827]"> {/* Add padding to account for the notched top */}
        <div className="container mx-auto px-6 py-16 relative z-10">
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
          
          {/* Main content with simple layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Profile image with styling similar to hero */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end items-start">
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
          
          {/* Bottom divider */}
          <div className="mt-16 h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#627183] to-transparent animate-pulse-subtle"></div>
        </div>
      </div>
      
      {/* Notched bottom shape for section (if you want it to match top) */}
      <div className="relative bg-[#111827]">
        {/* SVG for the notched shape */}
        <svg className="w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 64">
          <path
            d="M0,0 L1440,0 L1440,64 L1080,64 L1000,0 L440,0 L360,64 L0,64 Z"
            fill="#111827" 
          />
        </svg>
      </div>
      
      {/* Add global animation for effects */}
      <style jsx>{`
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
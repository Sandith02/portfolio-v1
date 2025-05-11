// src/components/AboutSection.jsx
import React, { useState, useEffect } from 'react';
import { Download, Code, Server, Database, Layout } from 'lucide-react';

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

  // Skills from your CV
  const skills = [
    { category: "Frontend", items: ["React", "React Native", "JavaScript", "HTML/CSS", "Tailwind"] },
    { category: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express.js", "Python"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "Jest"] }
  ];

  return (
    <section id="about-section" className="relative py-20 overflow-hidden">
      {/* Dark background with diagonal lines */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(to bottom, rgba(9, 14, 21, 0.95), rgba(5, 7, 12, 0.98))'
      }}></div>
      
      {/* Diagonal lines pattern */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 2px,
            rgba(70, 90, 110, 0.1) 2px,
            rgba(70, 90, 110, 0.1) 4px
          )`
        }}
      ></div>
      
      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(100, 120, 140, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(100, 120, 140, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 
            className="text-5xl md:text-6xl font-bold font-orbitron text-gray-200 mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            About Me
          </h2>
          <div className="h-px w-[120px] mx-auto mt-2" style={{
            background: 'linear-gradient(to right, transparent, #2a3a50, transparent)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out 0.3s'
          }}></div>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Profile image */}
          <div 
            className="lg:col-span-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}
          >
            <div className="relative overflow-hidden rounded-md h-full" style={{
              background: 'rgba(15, 20, 30, 0.5)',
              borderTop: '1px solid rgba(100, 120, 140, 0.2)',
              borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
              borderRight: '1px solid rgba(10, 15, 25, 0.2)',
              borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
            }}>
              {/* Inner diagonal lines */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 2px,
                    rgba(70, 90, 110, 0.1) 2px,
                    rgba(70, 90, 110, 0.1) 4px
                  )`
                }}
              ></div>
              
              <div className="p-6 md:p-8 relative z-10 flex flex-col items-center h-full">
                {/* Profile Photo */}
                <div className="relative rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden border-2 border-[#2a3a50] mb-6">
                  {imageLoaded ? (
                    <img 
                      src="/src/assets/about-me.png"
                      alt="Sandith Sithmaka Thenuwara" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#101620] to-[#0a0b0e] animate-pulse"></div>
                  )}
                </div>
                
                <h3 className="text-2xl font-orbitron text-gray-200 mb-2">Sandith Sithmaka</h3>
                <p className="text-[#8c96b5] text-center mb-3">Web Developer & CS Student</p>
                <p className="text-[#8c96b5] text-center text-sm mb-6">
                  Moratuwa, Western Province, Sri Lanka<br />
                  +94 76 692 6418<br />
                  lhthenuwara@gmail.com
                </p>
                
                <a 
                  href="/src/assets/Sandith_Thenuwara_CV.pdf" 
                  download
                  className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center space-x-2 font-orbitron border border-gray-700/50 hover:border-[#2a3a50] hover:shadow-[0_0_15px_rgba(160,180,204,0.15)] mt-auto"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* About details */}
          <div 
            className="lg:col-span-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(2rem)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
            }}
          >
            <div className="relative overflow-hidden rounded-md h-full" style={{
              background: 'rgba(15, 20, 30, 0.5)',
              borderTop: '1px solid rgba(100, 120, 140, 0.2)',
              borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
              borderRight: '1px solid rgba(10, 15, 25, 0.2)',
              borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
            }}>
              {/* Inner diagonal lines */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 2px,
                    rgba(70, 90, 110, 0.1) 2px,
                    rgba(70, 90, 110, 0.1) 4px
                  )`
                }}
              ></div>
              
              <div className="p-6 md:p-8 relative z-10">
                <h3 className="text-xl font-orbitron text-gray-200 mb-6 border-l-2 border-[#2a3a50] pl-3">
                  Background
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p className="leading-7">
                    I am a Computer Science student passionate about developing creative solutions to technical
                    challenges. With strong attention to detail and a drive to continuously learn new technologies, I am
                    seeking opportunities to contribute to impactful projects where I can apply and expand my
                    programming skills.
                  </p>
                  
                  <p className="leading-7">
                    My experience spans full-stack development, with particular strength in React, Spring Boot applications, and
                    MERN stack applications. I'm dedicated to creating clean, efficient code and delivering exceptional 
                    user experiences that combine technical excellence with intuitive design.
                  </p>
                  
                  <p className="leading-7">
                    When I'm not coding, you'll find me participating in competitions like IEEE-Xtreme, exploring new technologies, contributing to open-source projects, or engaging in club activities.
                  </p>
                </div>
                
                <h3 className="text-xl font-orbitron text-gray-200 mt-10 mb-6 border-l-2 border-[#2a3a50] pl-3">
                  Skills
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-2 mb-1">
                        {index === 0 && <Layout className="text-[#a0b4cc] w-4 h-4" />}
                        {index === 1 && <Server className="text-[#a0b4cc] w-4 h-4" />}
                        {index === 2 && <Database className="text-[#a0b4cc] w-4 h-4" />}
                        {index === 3 && <Code className="text-[#a0b4cc] w-4 h-4" />}
                        <h4 className="text-[#a0b4cc] font-orbitron text-sm">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-800/80 text-gray-300 text-xs py-1 px-3 rounded-md border border-gray-700/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects & Education - Timeline */}
        <div 
          className="mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s'
          }}
        >
          <div className="relative overflow-hidden rounded-md" style={{
            background: 'rgba(15, 20, 30, 0.5)',
            borderTop: '1px solid rgba(100, 120, 140, 0.2)',
            borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
            borderRight: '1px solid rgba(10, 15, 25, 0.2)',
            borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
          }}>
            {/* Inner diagonal lines */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 2px,
                  rgba(70, 90, 110, 0.1) 2px,
                  rgba(70, 90, 110, 0.1) 4px
                )`
              }}
            ></div>
            
            <div className="p-6 md:p-8 relative z-10">
              <h3 className="text-xl font-orbitron text-gray-200 mb-8 border-l-2 border-[#2a3a50] pl-3">
                Education & Projects
              </h3>
              
              <div className="space-y-8">
                {/* Timeline item - Education */}
                <div className="relative pl-8 pb-8 border-l border-gray-700">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#101620] border-2 border-[#2a3a50] rounded-full"></div>
                  <div className="mb-1">
                    <span className="text-[#a0b4cc] font-orbitron text-sm">2023 - Present</span>
                  </div>
                  <h4 className="text-lg text-gray-200 font-orbitron mb-2">BSc (Hons) in Computer Science</h4>
                  <p className="text-gray-400">University of Westminster</p>
                </div>
                
                {/* Timeline item - Education */}
                <div className="relative pl-8 pb-8 border-l border-gray-700">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#101620] border-2 border-[#2a3a50] rounded-full"></div>
                  <div className="mb-1">
                    <span className="text-[#a0b4cc] font-orbitron text-sm">2012 - 2020</span>
                  </div>
                  <h4 className="text-lg text-gray-200 font-orbitron mb-2">Saint Aloysius' College</h4>
                  <p className="text-gray-400">Galle</p>
                </div>
                
                {/* Timeline item - DoctorAid */}
                <div className="relative pl-8 pb-8 border-l border-gray-700">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#101620] border-2 border-[#2a3a50] rounded-full"></div>
                  <div className="mb-1">
                    <span className="text-[#a0b4cc] font-orbitron text-sm">Oct 2024 - Present</span>
                  </div>
                  <h4 className="text-lg text-gray-200 font-orbitron mb-2">DoctorAid</h4>
                  <p className="text-gray-300 mt-2">
                    A web application designed for doctors using React, JavaScript, and Vite, enabling patient management. Includes a patient-facing mobile application developed with React Native for appointment booking and digital prescription access.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md">MERN Stack</span>
                    <span className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md">Tailwind CSS</span>
                    <span className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md">React Native</span>
                  </div>
                  <div className="mt-3">
                    <a href="https://doctoraid.site" target="_blank" rel="noopener noreferrer" className="text-[#a0b4cc] hover:underline text-sm mr-4">View Live</a>
                    <a href="https://github.com/DoctorAid" target="_blank" rel="noopener noreferrer" className="text-[#a0b4cc] hover:underline text-sm">GitHub</a>
                  </div>
                </div>
                
                {/* Timeline item - Ticket Booking System */}
                <div className="relative pl-8 pb-8 border-l border-gray-700">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#101620] border-2 border-[#2a3a50] rounded-full"></div>
                  <div className="mb-1">
                    <span className="text-[#a0b4cc] font-orbitron text-sm">Nov 2024 - Dec 2024</span>
                  </div>
                  <h4 className="text-lg text-gray-200 font-orbitron mb-2">Ticket Booking System</h4>
                  <p className="text-gray-300 mt-2">
                    Developed a concurrent ticket booking system using Spring Boot with RESTful APIs for core functionalities, ensuring thread safety and data consistency. Implemented OOP principles and synchronization mechanisms to prevent double bookings and race conditions.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md">React</span>
                    <span className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md">Spring Boot</span>
                    <span className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md">Java</span>
                  </div>
                  <div className="mt-3">
                    <a href="https://github.com/Sandith02/OOP-CW" target="_blank" rel="noopener noreferrer" className="text-[#a0b4cc] hover:underline text-sm">GitHub</a>
                  </div>
                </div>
                
                {/* Timeline item - Real-state Website */}
                <div className="relative pl-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#101620] border-2 border-[#2a3a50] rounded-full"></div>
                  <div className="mb-1">
                    <span className="text-[#a0b4cc] font-orbitron text-sm">Dec 2024</span>
                  </div>
                  <h4 className="text-lg text-gray-200 font-orbitron mb-2">Real-Estate Website</h4>
                  <p className="text-gray-300 mt-2">
                    Developed a modern and responsive real estate website using React and Tailwind CSS. Used React components to build dynamic and interactive features, enabling users to easily search, filter, and view property listings.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md">React</span>
                    <span className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md">CSS</span>
                  </div>
                  <div className="mt-3">
                    <a href="https://github.com/Sandith02/Real-State-Web-Frontend" target="_blank" rel="noopener noreferrer" className="text-[#a0b4cc] hover:underline text-sm">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
      
      {/* Animated divider at bottom */}
      <div className="mt-16 h-px w-full max-w-xs mx-auto" style={{
        background: 'linear-gradient(to right, transparent, #2a3a50, transparent)',
        animation: 'pulse 3s infinite'
      }}></div>
      
      {/* Add global animation for effects */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Server, 
  Database, 
  Globe, 
  PenTool, 
  Layers, 
  FileCode, 
  Terminal, 
  Github, 
  GitBranch, 
  MonitorSmartphone,
  Coffee,
  Layout
} from 'lucide-react';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({
    title: false,
    description: false,
    buttons: false,
    technologiesTitle: false,
    technologies: false
  });
  
  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = '/src/assets/bg19.jpeg';
    img.onload = () => setIsImageLoaded(true);
    
    // Return early if image is already in browser cache
    if (img.complete) {
      setIsImageLoaded(true);
    }
  }, []);
  
  // Trigger the animations sequentially after the image is loaded
  useEffect(() => {
    if (isImageLoaded) {
      // Stagger the animations for each element
      const animationSequence = [
        { element: 'title', delay: 300 },
        { element: 'description', delay: 600 },
        { element: 'buttons', delay: 800 },
        { element: 'technologiesTitle', delay: 1000 },
        { element: 'technologies', delay: 1200 }
      ];
      
      animationSequence.forEach(({ element, delay }) => {
        setTimeout(() => {
          setAnimatedElements(prev => ({ ...prev, [element]: true }));
        }, delay);
      });
    }
  }, [isImageLoaded]);
  
  // Technology icons using Lucide React icons
  const technologies = [
    {
      name: "Python",
      icon: <Code className="w-8 h-8 mb-2" />,
      color: "text-blue-500"
    },
    {
      name: "Java",
      icon: <Coffee className="w-8 h-8 mb-2" />,
      color: "text-red-500"
    },
    {
      name: "JavaScript",
      icon: <FileCode className="w-8 h-8 mb-2" />,
      color: "text-yellow-500"
    },
    {
      name: "React",
      icon: <Layers className="w-8 h-8 mb-2" />,
      color: "text-cyan-400"
    },
    {
      name: "React Native",
      icon: <MonitorSmartphone className="w-8 h-8 mb-2" />,
      color: "text-cyan-400"
    },
    {
      name: "Spring Boot",
      icon: <Server className="w-8 h-8 mb-2" />,
      color: "text-green-500"
    },
    {
      name: "Node.js",
      icon: <Terminal className="w-8 h-8 mb-2" />,
      color: "text-green-600"
    },
    {
      name: "Express",
      icon: <Server className="w-8 h-8 mb-2" />,
      color: "text-white"
    },
    {
      name: "MySQL",
      icon: <Database className="w-8 h-8 mb-2" />,
      color: "text-blue-600"
    },
    {
      name: "MongoDB",
      icon: <Database className="w-8 h-8 mb-2" />,
      color: "text-green-500"
    },
    {
      name: "Git",
      icon: <GitBranch className="w-8 h-8 mb-2" />,
      color: "text-orange-500"
    },
    {
      name: "Tailwind",
      icon: <Layout className="w-8 h-8 mb-2" />,
      color: "text-teal-400"
    },
    {
      name: "Docker",
      icon: <Globe className="w-8 h-8 mb-2" />,
      color: "text-blue-500"
    },
    {
      name: "Figma",
      icon: <PenTool className="w-8 h-8 mb-2" />,
      color: "text-purple-500"
    },
    {
      name: "GitHub",
      icon: <Github className="w-8 h-8 mb-2" />,
      color: "text-gray-200"
    }
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Fallback gradient background - shows immediately */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>
      
      {/* Background image - only rendered after loading */}
      {isImageLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-fadein"
          style={{
            backgroundImage: 'url(/src/assets/bg19.jpeg)',
            height: '100vh',
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      )}
      
      {/* Content positioned over the background */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Title with slide-down and fade-in animation */}
        <h1 
          style={{
            transition: 'all 1.2s',
            transform: animatedElements.title ? 'translateY(0)' : 'translateY(-30px)',
            opacity: animatedElements.title ? 1 : 0
          }}
          className="text-5xl md:text-[45px] font-bold mt-25 mb-4 bg-gradient-to-r from-[#8e9fb1] to-[#5e6c7d] bg-clip-text text-transparent font-orbitron tracking-[0.05em]"
        >
          Hello I'm
        </h1>

        <h1 
          style={{
            transition: 'all 1.8s',
            transform: animatedElements.title ? 'translateY(0)' : 'translateY(-30px)',
            opacity: animatedElements.title ? 1 : 0
          }}
          className="text-5xl md:text-6xl font-bold  mb-10 bg-gradient-to-r from-[#c7cdd3] to-[#627183] bg-clip-text text-transparent font-orbitron"
        >
          Sandith Sithmaka Thenuwara
        </h1>
       
        {/* Description with fade-in animation */}
        <p 
          style={{
            transition: 'all 2s',
            transitionDelay: '0.1s',
            transform: animatedElements.description ? 'translateY(0)' : 'translateY(10px)',
            opacity: animatedElements.description ? 1 : 0
          }}
          className="text-xl md:text-[20px] mb-8 font-michroma text-gray-300 max-w-2xl font-[100] tracking-[0.09em]"
        >
          Web Developer specializing in creating modern, responsive, and user-friendly digital experiences
        </p>
       
        {/* Buttons with fade-in and scale animation */}
        <div 
          style={{
            transition: 'all 1s',
            transform: animatedElements.buttons ? 'scale(1)' : 'scale(0.95)',
            opacity: animatedElements.buttons ? 1 : 0
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/projects"
            className="bg-[#4c5869]/50 hover:bg-[#53627b] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 font-orbitron hover:shadow-lg"
            style={{transition: 'all 0.3s'}}
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-[#4c5869] hover:border-[#53627b] text-[#dadae1] font-medium py-3 px-8 rounded-lg transition-all duration-300 font-orbitron hover:shadow-lg"
            style={{transition: 'all 0.3s'}}
          >
            Get In Touch
          </Link>
        </div>
       
        {/* Technologies section with animations */}
        <div className="mt-16 w-full max-w-4xl">
          {/* Technologies title with slide-in animation */}
          <h3 
            style={{
              transition: 'all 2s',
              transform: animatedElements.technologiesTitle ? 'translateY(0)' : 'translateY(10px)',
              opacity: animatedElements.technologiesTitle ? 1 : 0
            }}
            className="text-lg font-semibold text-[#c7cdd3] mb-6 font-orbitron tracking-wider"
          >
            TECHNOLOGIES
          </h3>
          
          {/* Grid container with staggered fade-in for child elements */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-gray-900/20 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:bg-gray-800/40 transition-all duration-300 flex flex-col items-center justify-center hover:scale-105"
                style={{
                  animation: animatedElements.technologies ? 'techFadeIn 0.5s ease-out forwards' : 'none',
                  animationDelay: `${index * 80}ms`,
                  opacity: 0
                }}
              >
                <div 
                  className={`${tech.color}`}
                  style={{transition: 'transform 0.3s'}}
                >
                  {tech.icon}
                </div>
                <span className="text-gray-300 text-sm font-orbitron">{tech.name}</span>
              </div>
            ))}
          </div>
          
          {/* Animated divider with pulse effect */}
          <div 
            style={{
              transition: 'opacity 1s',
              opacity: animatedElements.technologies ? 1 : 0
            }}
            className="mt-8 h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#627183] to-transparent animate-pulse-subtle"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
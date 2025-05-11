// src/components/ProjectsSection.jsx
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Layers, Database } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
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
    
    const section = document.getElementById('projects-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "DoctorAid",
      description: "A web application designed for doctors using React, JavaScript, and Vite, enabling patient management. Includes a patient-facing mobile application developed with React Native for appointment booking and digital prescription access.",
      image: "/src/assets/projects/doctoraid.png", // You'll need to add this image
      tags: ["React", "JavaScript", "Vite", "React Native", "MERN"],
      category: "full-stack",
      demo: "https://doctoraid.site",
      github: "https://github.com/DoctorAid",
      featured: true
    },
    {
      id: 2,
      title: "Ticket Booking System",
      description: "Developed a concurrent ticket booking system using Spring Boot with RESTful APIs for core functionalities, ensuring thread safety and data consistency. Implemented OOP principles and synchronization mechanisms to prevent double bookings and race conditions.",
      image: "/src/assets/projects/ticket-booking.png", // You'll need to add this image
      tags: ["React", "Spring Boot", "Java", "REST API"],
      category: "back-end",
      github: "https://github.com/Sandith02/OOP-CW",
      featured: true
    },
    {
      id: 3,
      title: "Real-Estate Website",
      description: "Developed a modern and responsive real estate website using React and Tailwind CSS. Used React components to build dynamic and interactive features, enabling users to easily search, filter, and view property listings.",
      image: "/src/assets/projects/real-estate.png", // You'll need to add this image
      tags: ["React", "CSS"],
      category: "front-end",
      github: "https://github.com/Sandith02/Real-State-Web-Frontend",
      featured: true
    },
    {
      id: 4,
      title: "E-Commerce Site",
      description: "An E-Commerce site using HTML and CSS alongside with JavaScript, contributed for store and checkout functions. Applied modern CSS techniques including Flexbox and Grid layouts to ensure mobile responsiveness.",
      image: "/src/assets/projects/ecommerce.png", // You'll need to add this image
      tags: ["JavaScript", "HTML", "CSS"],
      category: "front-end",
      featured: false
    }
  ];

  // Filter categories
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'full-stack', name: 'Full Stack' },
    { id: 'front-end', name: 'Frontend' },
    { id: 'back-end', name: 'Backend' }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects-section" className="relative py-20 overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold font-orbitron text-gray-200 mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            My Projects
          </h2>
          <div className="h-px w-[120px] mx-auto mt-2" style={{
            background: 'linear-gradient(to right, transparent, #2a3a50, transparent)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out 0.3s'
          }}></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-orbitron text-sm tracking-wide"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out 0.5s'
            }}
          >
            Here are some of the projects I've worked on. Each project has helped me develop new skills and overcome unique challenges.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(1rem)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s'
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-md font-orbitron text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gray-800/80 text-[#a0b4cc] border border-[#2a3a50] shadow-[0_0_10px_rgba(160,180,204,0.1)]'
                  : 'bg-transparent text-gray-400 border border-gray-700/50 hover:border-[#2a3a50] hover:text-[#a0b4cc]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="relative overflow-hidden rounded-md group"
              style={{
                background: 'rgba(15, 20, 30, 0.5)',
                borderTop: '1px solid rgba(100, 120, 140, 0.2)',
                borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
                borderRight: '1px solid rgba(10, 15, 25, 0.2)',
                borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + index * 0.1}s`
              }}
            >
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
              
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                {/* Placeholder gradient if image is not available */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2330] to-[#0a1520]"></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-gray-800/80 text-[#a0b4cc] text-xs py-1 px-2 rounded-md z-10 border border-[#2a3a50]">
                    Featured
                  </div>
                )}
                
                {/* Project tech icon */}
                <div className="absolute bottom-3 left-3 bg-gray-800/80 p-2 rounded-md z-10 border border-gray-700/50">
                  {project.category === 'full-stack' && <Layers className="text-[#a0b4cc] w-5 h-5" />}
                  {project.category === 'front-end' && <Code className="text-[#a0b4cc] w-5 h-5" />}
                  {project.category === 'back-end' && <Database className="text-[#a0b4cc] w-5 h-5" />}
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl text-gray-200 font-orbitron mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-800/60 text-[#8c96b5] text-xs py-1 px-2 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-3 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800/70 p-2 rounded-md text-gray-300 hover:text-[#a0b4cc] hover:bg-gray-800 transition-all duration-300"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800/70 p-2 rounded-md text-gray-300 hover:text-[#a0b4cc] hover:bg-gray-800 transition-all duration-300"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub CTA */}
        <div 
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out 1.2s'
          }}
        >
          <a 
            href="https://github.com/SandithSithmaka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 font-medium py-3 px-6 rounded-md transition-all duration-300 space-x-2 font-orbitron border border-gray-700/50 hover:border-[#2a3a50] hover:shadow-[0_0_15px_rgba(160,180,204,0.15)]"
          >
            <Github className="w-5 h-5 mr-2" />
            <span>View More Projects on GitHub</span>
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Check out my GitHub profile for more projects and contributions.
          </p>
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

export default ProjectsSection;
// src/components/SkillsComponent.jsx
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Monitor, 
  PenTool, 
  Layers, 
  FileCode, 
  Terminal, 
  Github, 
  GitBranch, 
  MonitorSmartphone,
  Coffee,
  Layout,
  Cpu,
  Wrench,
  Globe
} from 'lucide-react';

const SkillsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  // Skill categories and their respective skills with experience levels
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Monitor className="w-5 h-5 text-cyan-400" />,
      skills: [
        { 
          name: "React", 
          icon: <Layers className="w-4 h-4 text-cyan-400" />,
          level: "Intermediate",
          description: "Component architecture, hooks, context API, state management"
        },
        { 
          name: "React Native", 
          icon: <MonitorSmartphone className="w-4 h-4 text-cyan-400" />,
          level: "Intermediate",
          description: "Cross-platform mobile app development"
        },
        { 
          name: "JavaScript", 
          icon: <FileCode className="w-4 h-4 text-yellow-500" />,
          level: "Advanced",
          description: "ES6+, async/await, DOM manipulation"
        },
        { 
          name: "HTML/CSS", 
          icon: <Layout className="w-4 h-4 text-blue-400" />,
          level: "Advanced",
          description: "Semantic HTML, CSS Grid, Flexbox"
        },
        { 
          name: "Tailwind CSS", 
          icon: <Layout className="w-4 h-4 text-teal-400" />,
          level: "Advanced",
          description: "Utility-first CSS framework"
        }
      ]
    },
    {
      name: "Backend",
      icon: <Server className="w-5 h-5 text-green-500" />,
      skills: [
        { 
          name: "Java", 
          icon: <Coffee className="w-4 h-4 text-red-500" />,
          level: "Advanced",
          description: "OOP, multithreading, collections"
        },
        { 
          name: "Spring Boot", 
          icon: <Code className="w-4 h-4 text-green-500" />,
          level: "Intermediate",
          description: "RESTful APIs, dependency injection, JPA"
        },
        { 
          name: "Node.js", 
          icon: <Terminal className="w-4 h-4 text-green-600" />,
          level: "Intermediate",
          description: "Server-side JavaScript, event-driven architecture"
        },
        { 
          name: "Express.js", 
          icon: <Server className="w-4 h-4 text-gray-300" />,
          level: "Intermediate",
          description: "API development, middleware, routing"
        },
        { 
          name: "Python", 
          icon: <Code className="w-4 h-4 text-blue-500" />,
          level: "Intermediate",
          description: "Data manipulation, backend development"
        }
      ]
    },
    {
      name: "Database",
      icon: <Database className="w-5 h-5 text-blue-500" />,
      skills: [
        { 
          name: "MongoDB", 
          icon: <Database className="w-4 h-4 text-green-500" />,
          level: "Advanced",
          description: "Schema design, aggregation, indexing"
        },
        { 
          name: "MySQL", 
          icon: <Database className="w-4 h-4 text-blue-600" />,
          level: "Intermediate",
          description: "Relational DB design, queries, optimization"
        }
      ]
    },
    {
      name: "Tools & Others",
      icon: <Wrench className="w-5 h-5 text-gray-300" />,
      skills: [
        { 
          name: "Git", 
          icon: <GitBranch className="w-4 h-4 text-orange-500" />,
          level: "Advanced",
          description: "Version control, branching, collaboration"
        },
        { 
          name: "Docker", 
          icon: <Globe className="w-4 h-4 text-blue-500" />,
          level: "Intermediate",
          description: "Containerization, Docker Compose"
        },
        { 
          name: "Figma", 
          icon: <PenTool className="w-4 h-4 text-purple-500" />,
          level: "Intermediate",
          description: "UI design, prototyping, collaboration"
        },
        { 
          name: "Jest", 
          icon: <Cpu className="w-4 h-4 text-red-400" />,
          level: "Beginner",
          description: "Unit testing, mocking"
        }
      ]
    }
  ];

  // Experience level indicator (replaces percentage bars)
  const getLevelIndicator = (level) => {
    const colors = {
      "Beginner": "bg-gray-600",
      "Intermediate": "bg-[#2a3a50]",
      "Advanced": "bg-[#a0b4cc]"
    };
    
    const dots = {
      "Beginner": 1,
      "Intermediate": 2,
      "Advanced": 3
    };
    
    return (
      <div className="flex space-x-1">
        {[...Array(3)].map((_, index) => (
          <div 
            key={index}
            className={`h-2 w-2 rounded-full ${index < dots[level] ? colors[level] : 'bg-gray-800'}`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills-section" className="relative py-20 overflow-hidden">
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
            My Skills
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
            Here's a showcase of my technical skills and experience across different domains.
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="relative overflow-hidden rounded-md"
              style={{
                background: 'rgba(15, 20, 30, 0.5)',
                borderTop: '1px solid rgba(100, 120, 140, 0.2)',
                borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
                borderRight: '1px solid rgba(10, 15, 25, 0.2)',
                borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + categoryIndex * 0.1}s`
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
              
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-800/70 p-2 rounded-md mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-orbitron text-gray-200 border-l-2 border-[#2a3a50] pl-3">
                    {category.name}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gray-800/30 p-3 rounded-md border border-gray-700/30 hover:border-[#2a3a50] transition-all hover:bg-gray-800/40"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(1rem)',
                        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + categoryIndex * 0.1 + skillIndex * 0.05}s`
                      }}
                    >
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="mr-2">
                              {skill.icon}
                            </div>
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#a0b4cc] text-xs">{skill.level}</span>
                            {getLevelIndicator(skill.level)}
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional tech skills box */}
        <div 
          className="mt-12 relative overflow-hidden rounded-md"
          style={{
            background: 'rgba(15, 20, 30, 0.5)',
            borderTop: '1px solid rgba(100, 120, 140, 0.2)',
            borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
            borderRight: '1px solid rgba(10, 15, 25, 0.2)',
            borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s'
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
          
          <div className="p-6 relative z-10">
            <div className="flex items-center mb-6">
              <div className="bg-gray-800/70 p-2 rounded-md mr-3">
                <Globe className="w-5 h-5 text-[#a0b4cc]" />
              </div>
              <h3 className="text-xl font-orbitron text-gray-200 border-l-2 border-[#2a3a50] pl-3">
                Other Technologies & Skills
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {[
                "TypeScript", "RESTful APIs", "Netlify",  
                "Responsive Design", "UI/UX", "GSAP", "Vercel", "CI/CD", "Agile", "Scrum",
                "Problem Solving", "Team Collaboration", "Technical Writing"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-800/50 text-gray-300 px-3 py-2 rounded-md border border-gray-700/50 hover:scale-105 transition-transform hover:border-[#2a3a50]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                    transition: `all 0.5s ease ${1 + index * 0.03}s`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Learning next section */}
        <div 
          className="mt-8 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out 1.2s'
          }}
        >
          <h3 className="text-lg font-orbitron text-[#a0b4cc] mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "TypeScript", "DevOps", "AWS", "Three.js"].map((skill, index) => (
              <span 
                key={index}
                className="bg-[#101620] text-[#a0b4cc] px-3 py-2 rounded-md border border-[#2a3a50] hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
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

export default SkillsComponent;
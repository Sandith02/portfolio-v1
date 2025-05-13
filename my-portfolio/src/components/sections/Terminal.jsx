// src/components/TerminalButton.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowRight, Command, Code, FileCode, Database } from 'lucide-react';

const TerminalButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Sample commands to cycle through
  const commands = [
    "cat projects/doctoraid.txt",
    "ls -la skills/",
    "cd projects",
    "whoami",
    "cat about.txt"
  ];
  
  // Cycle through commands every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animation trigger when component enters viewport
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
    
    const section = document.getElementById('terminal-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();
    };
  }, []);
  
  return (
    <section id="terminal-section" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(to bottom, rgba(9, 14, 21, 0.98), rgba(5, 7, 12, 0.95))'
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
      
      {/* Animated particles/stars effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(25)].map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              backgroundColor: 'rgba(160, 180, 204, ' + (Math.random() * 0.5 + 0.1) + ')',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-gray-800/50 border border-gray-700/50 text-[#a0b4cc] text-sm font-orbitron">
            <Command className="inline-block w-4 h-4 mr-2" />
            <span>Terminal Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron text-white mb-6 leading-tight">
            Explore My Portfolio <span className="text-[#a0b4cc]">Through</span> CLI
          </h2>
          <div className="h-px w-[120px] mx-auto mt-2 mb-6" style={{
            background: 'linear-gradient(to right, transparent, #2a3a50, transparent)'
          }}></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover my projects, skills, and experience through an interactive command-line interface.
            Perfect for developers and tech enthusiasts who prefer keyboard-driven exploration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side: Terminal preview */}
          <div 
            className="lg:col-span-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <div className="relative rounded-md overflow-hidden shadow-xl" style={{
              background: 'rgba(15, 20, 30, 0.7)',
              borderTop: '1px solid rgba(100, 120, 140, 0.2)',
              borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
              borderRight: '1px solid rgba(10, 15, 25, 0.2)',
              borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
            }}>
              {/* Terminal header */}
              <div className="bg-gray-800/80 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-gray-400 text-xs font-mono">sandith@portfolio:~/projects</div>
              </div>
              
              {/* Terminal content */}
              <div className="p-6 font-mono text-sm space-y-4">
                {/* Command 1 */}
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span>whoami</span>
                </div>
                <div className="text-gray-300">Sandith Sithmaka Thenuwara - Full Stack Developer</div>
                
                {/* Command 2 */}
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span>ls -la skills/</span>
                </div>
                <div className="text-gray-300 space-y-1">
                  <div>drwxr-xr-x frontend/</div>
                  <div>drwxr-xr-x backend/</div>
                  <div>drwxr-xr-x databases/</div>
                  <div>drwxr-xr-x tools/</div>
                </div>
                
                {/* Dynamic command with animation */}
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span className="command-animation">{commands[currentCommandIndex]}</span>
                  <span className="inline-block w-2 h-4 bg-[#a0b4cc] ml-1 cursor-blink"></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Features list and button */}
          <div 
            className="lg:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(2rem)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
            }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-orbitron text-[#a0b4cc] mb-4">Terminal Features</h3>
              
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800/70 p-3 rounded-md">
                  <FileCode className="text-[#a0b4cc] w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-200 font-orbitron mb-1">Explore Projects</h4>
                  <p className="text-gray-400 text-sm">
                    Navigate through my projects using familiar Unix-like commands.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800/70 p-3 rounded-md">
                  <Code className="text-[#a0b4cc] w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-200 font-orbitron mb-1">View Skills</h4>
                  <p className="text-gray-400 text-sm">
                    Check out my technical skills and experience with simple commands.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800/70 p-3 rounded-md">
                  <Database className="text-[#a0b4cc] w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-200 font-orbitron mb-1">Interactive Experience</h4>
                  <p className="text-gray-400 text-sm">
                    History navigation, tab completion, and realistic terminal behavior.
                  </p>
                </div>
              </div>
              
              {/* Launch button with hover effect */}
              <div className="mt-8">
                <Link
                  to="/terminal"
                  className="bg-gray-800/80 hover:bg-[#2a3a50] text-gray-200 font-medium py-4 px-6 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 font-orbitron border border-gray-700/50 hover:border-[#a0b4cc] hover:shadow-[0_0_15px_rgba(160,180,204,0.15)] w-full"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Terminal className={`w-5 h-5 mr-2 transition-all duration-300 ${isHovered ? 'text-[#a0b4cc]' : 'text-gray-200'}`} />
                  <span>Launch Terminal</span>
                  <ArrowRight className={`w-4 h-4 ml-2 transition-all duration-300 ${isHovered ? 'transform translate-x-1 text-[#a0b4cc]' : 'text-gray-200'}`} />
                </Link>
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
      
      {/* Add animation styles */}
      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .command-animation {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TerminalButton;
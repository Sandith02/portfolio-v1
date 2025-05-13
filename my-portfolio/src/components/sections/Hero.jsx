// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Code, 
//   Server, 
//   Database, 
//   Globe, 
//   PenTool, 
//   Layers, 
//   FileCode, 
//   Terminal, 
//   Github, 
//   GitBranch, 
//   MonitorSmartphone,
//   Coffee,
//   Layout
// } from 'lucide-react';

// const Hero = () => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const [animatedElements, setAnimatedElements] = useState({
//     title: false,
//     description: false,
//     buttons: false,
//     technologiesTitle: false,
//     technologies: false
//   });
  
//   // Preload the background image
//   useEffect(() => {
//     const img = new Image();
//     img.src = '/src/assets/bg19.jpeg';
//     img.onload = () => setIsImageLoaded(true);
    
//     // Return early if image is already in browser cache
//     if (img.complete) {
//       setIsImageLoaded(true);
//     }
//   }, []);
  
//   // Trigger the animations sequentially after the image is loaded
//   useEffect(() => {
//     if (isImageLoaded) {
//       // Stagger the animations for each element
//       const animationSequence = [
//         { element: 'title', delay: 300 },
//         { element: 'description', delay: 600 },
//         { element: 'buttons', delay: 800 },
//         { element: 'technologiesTitle', delay: 1000 },
//         { element: 'technologies', delay: 1200 }
//       ];
      
//       animationSequence.forEach(({ element, delay }) => {
//         setTimeout(() => {
//           setAnimatedElements(prev => ({ ...prev, [element]: true }));
//         }, delay);
//       });
//     }
//   }, [isImageLoaded]);
  
//   // Technology icons using Lucide React icons
//   const technologies = [
//     {
//       name: "Python",
//       icon: <Code className="w-8 h-8 mb-2" />,
//       color: "text-blue-500"
//     },
//     {
//       name: "Java",
//       icon: <Coffee className="w-8 h-8 mb-2" />,
//       color: "text-red-500"
//     },
//     {
//       name: "JavaScript",
//       icon: <FileCode className="w-8 h-8 mb-2" />,
//       color: "text-yellow-500"
//     },
//     {
//       name: "React",
//       icon: <Layers className="w-8 h-8 mb-2" />,
//       color: "text-cyan-400"
//     },
//     {
//       name: "React Native",
//       icon: <MonitorSmartphone className="w-8 h-8 mb-2" />,
//       color: "text-cyan-400"
//     },
//     {
//       name: "Spring Boot",
//       icon: <Server className="w-8 h-8 mb-2" />,
//       color: "text-green-500"
//     },
//     {
//       name: "Node.js",
//       icon: <Terminal className="w-8 h-8 mb-2" />,
//       color: "text-green-600"
//     },
//     {
//       name: "Express",
//       icon: <Server className="w-8 h-8 mb-2" />,
//       color: "text-white"
//     },
//     {
//       name: "MySQL",
//       icon: <Database className="w-8 h-8 mb-2" />,
//       color: "text-blue-600"
//     },
//     {
//       name: "MongoDB",
//       icon: <Database className="w-8 h-8 mb-2" />,
//       color: "text-green-500"
//     },
//     {
//       name: "Git",
//       icon: <GitBranch className="w-8 h-8 mb-2" />,
//       color: "text-orange-500"
//     },
//     {
//       name: "Tailwind",
//       icon: <Layout className="w-8 h-8 mb-2" />,
//       color: "text-teal-400"
//     },
//     {
//       name: "Docker",
//       icon: <Globe className="w-8 h-8 mb-2" />,
//       color: "text-blue-500"
//     },
//     {
//       name: "Figma",
//       icon: <PenTool className="w-8 h-8 mb-2" />,
//       color: "text-purple-500"
//     },
//     {
//       name: "GitHub",
//       icon: <Github className="w-8 h-8 mb-2" />,
//       color: "text-gray-200"
//     }
//   ];

//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Fallback gradient background - shows immediately */}
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>
      
//       {/* Background image - only rendered after loading */}
//       {isImageLoaded && (
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-fadein"
//           style={{
//             backgroundImage: 'url(/src/assets/bg19.jpeg)',
//             height: '100vh',
//           }}
//         >
//           {/* Overlay to ensure text readability */}
//           <div className="absolute inset-0 bg-black/70"></div>
//         </div>
//       )}
      
//       {/* Content positioned over the background */}
//       <div className="relative z-10 h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
//         {/* Title with slide-down and fade-in animation */}
//         <h1 
//           style={{
//             transition: 'all 1.2s',
//             transform: animatedElements.title ? 'translateY(0)' : 'translateY(-30px)',
//             opacity: animatedElements.title ? 1 : 0
//           }}
//           className="text-5xl md:text-[45px] font-bold mt-25 mb-4 bg-gradient-to-r from-[#8e9fb1] to-[#5e6c7d] bg-clip-text text-transparent font-orbitron tracking-[0.05em]"
//         >
//           Hello I'm
//         </h1>

//         <h1 
//           style={{
//             transition: 'all 1.8s',
//             transform: animatedElements.title ? 'translateY(0)' : 'translateY(-30px)',
//             opacity: animatedElements.title ? 1 : 0
//           }}
//           className="text-5xl md:text-6xl font-bold  mb-10 bg-gradient-to-r from-[#c7cdd3] to-[#627183] bg-clip-text text-transparent font-orbitron"
//         >
//           Sandith Sithmaka Thenuwara
//         </h1>
       
//         {/* Description with fade-in animation */}
//         <p 
//           style={{
//             transition: 'all 2s',
//             transitionDelay: '0.1s',
//             transform: animatedElements.description ? 'translateY(0)' : 'translateY(10px)',
//             opacity: animatedElements.description ? 1 : 0
//           }}
//           className="text-xl md:text-[20px] mb-8 font-michroma text-gray-300 max-w-2xl font-[100] tracking-[0.09em]"
//         >
//           Web Developer specializing in creating modern, responsive, and user-friendly digital experiences
//         </p>
       
//         {/* Buttons with fade-in and scale animation */}
//         <div 
//           style={{
//             transition: 'all 1s',
//             transform: animatedElements.buttons ? 'scale(1)' : 'scale(0.95)',
//             opacity: animatedElements.buttons ? 1 : 0
//           }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <Link
//             to="/projects"
//             className="bg-[#4c5869]/50 hover:bg-[#53627b] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 font-orbitron hover:shadow-lg"
//             style={{transition: 'all 0.3s'}}
//           >
//             View My Projects
//           </Link>
//           <Link
//             to="/contact"
//             className="bg-transparent border-2 border-[#4c5869] hover:border-[#53627b] text-[#dadae1] font-medium py-3 px-8 rounded-lg transition-all duration-300 font-orbitron hover:shadow-lg"
//             style={{transition: 'all 0.3s'}}
//           >
//             Get In Touch
//           </Link>
//         </div>
       
//         {/* Technologies section with animations */}
//         <div className="mt-16 w-full max-w-4xl">
//           {/* Technologies title with slide-in animation */}
//           <h3 
//             style={{
//               transition: 'all 2s',
//               transform: animatedElements.technologiesTitle ? 'translateY(0)' : 'translateY(10px)',
//               opacity: animatedElements.technologiesTitle ? 1 : 0
//             }}
//             className="text-lg font-semibold text-[#c7cdd3] mb-6 font-orbitron tracking-wider"
//           >
//             TECHNOLOGIES
//           </h3>
          
//           {/* Grid container with staggered fade-in for child elements */}
//           <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
//             {technologies.map((tech, index) => (
//               <div 
//                 key={index} 
//                 className="bg-gray-900/20 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:bg-gray-800/40 transition-all duration-300 flex flex-col items-center justify-center hover:scale-105"
//                 style={{
//                   animation: animatedElements.technologies ? 'techFadeIn 0.5s ease-out forwards' : 'none',
//                   animationDelay: `${index * 80}ms`,
//                   opacity: 0
//                 }}
//               >
//                 <div 
//                   className={`${tech.color}`}
//                   style={{transition: 'transform 0.3s'}}
//                 >
//                   {tech.icon}
//                 </div>
//                 <span className="text-gray-300 text-sm font-orbitron">{tech.name}</span>
//               </div>
//             ))}
//           </div>
          
//           {/* Animated divider with pulse effect */}
//           <div 
//             style={{
//               transition: 'opacity 1s',
//               opacity: animatedElements.technologies ? 1 : 0
//             }}
//             className="mt-8 h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#627183] to-transparent animate-pulse-subtle"
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// src/components/HeroSection.jsx
// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Code, Terminal, Database, Layout } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
  
//   // Animation trigger when component mounts
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, []);
  
//   // Tech stack items
//   const techStack = [
//     { name: "React", icon: <Layout className="w-4 h-4" /> },
//     { name: "Node.js", icon: <Terminal className="w-4 h-4" /> },
//     { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
//     { name: "Java", icon: <Code className="w-4 h-4" /> },
//     { name: "Spring Boot", icon: <Code className="w-4 h-4" /> },
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
//       {/* Dark background with gradient */}
//       <div className="absolute inset-0 z-0" style={{
//         background: 'linear-gradient(to bottom, rgba(9, 14, 21, 0.98), rgba(5, 7, 12, 0.95))'
//       }}></div>
      
//       {/* Diagonal lines pattern */}
//       <div 
//         className="absolute inset-0 opacity-20 z-0"
//         style={{
//           backgroundImage: `repeating-linear-gradient(
//             -45deg,
//             transparent,
//             transparent 2px,
//             rgba(70, 90, 110, 0.1) 2px,
//             rgba(70, 90, 110, 0.1) 4px
//           )`
//         }}
//       ></div>
      
//       {/* Tech grid pattern */}
//       <div className="absolute inset-0 opacity-5 z-0" style={{
//         backgroundImage: `
//           linear-gradient(rgba(100, 120, 140, 0.1) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(100, 120, 140, 0.1) 1px, transparent 1px)
//         `,
//         backgroundSize: '30px 30px'
//       }}></div>

//       {/* Animated particles/stars effect */}
//       <div className="absolute inset-0 z-0">
//         {[...Array(50)].map((_, index) => (
//           <div 
//             key={index}
//             className="absolute rounded-full"
//             style={{
//               width: Math.random() * 3 + 1 + 'px',
//               height: Math.random() * 3 + 1 + 'px',
//               backgroundColor: 'rgba(160, 180, 204, ' + (Math.random() * 0.5 + 0.1) + ')',
//               top: Math.random() * 100 + '%',
//               left: Math.random() * 100 + '%',
//               animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`
//             }}
//           ></div>
//         ))}
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//           {/* Left content - 7 columns */}
//           <div 
//             className="lg:col-span-7 text-center lg:text-left"
//             style={{
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateY(0)' : 'translateY(2rem)',
//               transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
//             }}
//           >
//             <div className="inline-block px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-4 text-[#a0b4cc] text-sm font-orbitron">
//               <span>Full Stack Developer</span>
//             </div>
            
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron text-white mb-6 leading-tight">
//               Building <span className="text-[#a0b4cc]">Digital</span> Experiences That <span className="text-[#a0b4cc]">Matter</span>
//             </h1>
            
//             <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
//               I'm Sandith Sithmaka, a Computer Science student passionate about developing creative solutions to technical challenges. I create responsive web applications with modern technologies.
//             </p>
            
//             <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//               <Link 
//                 to="/projects" 
//                 className="bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 font-orbitron border border-gray-700/50 hover:border-[#2a3a50] hover:shadow-[0_0_15px_rgba(160,180,204,0.15)]"
//               >
//                 <span>View My Work</span>
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Link>
              
//               <Link 
//                 to="/contact" 
//                 className="bg-transparent hover:bg-gray-800/50 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 font-orbitron border border-gray-700/50 hover:border-[#2a3a50]"
//               >
//                 <span>Get In Touch</span>
//               </Link>
//             </div>
            
//             {/* Tech stack */}
//             <div className="mt-12 max-w-xl mx-auto lg:mx-0">
//               <p className="text-gray-400 text-sm font-orbitron mb-4">TECH STACK</p>
//               <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
//                 {techStack.map((tech, index) => (
//                   <div 
//                     key={index}
//                     className="bg-gray-800/50 px-3 py-2 rounded-md border border-gray-700/50 flex items-center space-x-2 text-gray-300"
//                     style={{
//                       opacity: isLoaded ? 1 : 0,
//                       transform: isLoaded ? 'translateY(0)' : 'translateY(1rem)',
//                       transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.1}s`
//                     }}
//                   >
//                     {tech.icon}
//                     <span className="text-sm">{tech.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Right content - 5 columns - Terminal animation */}
//           <div 
//             className="lg:col-span-5 hidden lg:block"
//             style={{
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateX(0)' : 'translateX(2rem)',
//               transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
//             }}
//           >
//             <div className="relative rounded-md overflow-hidden shadow-xl" style={{
//               background: 'rgba(15, 20, 30, 0.7)',
//               borderTop: '1px solid rgba(100, 120, 140, 0.2)',
//               borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
//               borderRight: '1px solid rgba(10, 15, 25, 0.2)',
//               borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
//             }}>
//               {/* Terminal header */}
//               <div className="bg-gray-800/80 px-4 py-2 flex items-center">
//                 <div className="flex space-x-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="ml-4 text-gray-400 text-xs font-mono">sandith@portfolio:~/projects</div>
//               </div>
              
//               {/* Terminal content */}
//               <div className="p-6 font-mono text-sm space-y-4">
//                 <div className="text-gray-400">
//                   <span className="text-[#a0b4cc]">$ </span>
//                   <span className="typing-animation">whoami</span>
//                 </div>
//                 <div className="text-gray-300">Sandith Sithmaka Thenuwara - Computer Science Student</div>
                
//                 <div className="text-gray-400">
//                   <span className="text-[#a0b4cc]">$ </span>
//                   <span className="typing-animation" style={{ animationDelay: '1s' }}>ls -la skills/</span>
//                 </div>
//                 <div className="text-gray-300 space-y-1">
//                   <div>drwxr-xr-x frontend/</div>
//                   <div>drwxr-xr-x backend/</div>
//                   <div>drwxr-xr-x databases/</div>
//                   <div>drwxr-xr-x tools/</div>
//                 </div>
                
//                 <div className="text-gray-400">
//                   <span className="text-[#a0b4cc]">$ </span>
//                   <span className="typing-animation" style={{ animationDelay: '2s' }}>cat about.txt</span>
//                 </div>
//                 <div className="text-gray-300">
//                   Passionate about creating modern, responsive, and user-friendly web applications. Currently pursuing a degree in Computer Science with a focus on full-stack development.
//                 </div>
                
//                 <div className="text-gray-400">
//                   <span className="text-[#a0b4cc]">$ </span>
//                   <span className="typing-animation" style={{ animationDelay: '3s' }}>find . -name "latest_project"</span>
//                 </div>
//                 <div className="text-gray-300">./projects/DoctorAid</div>
                
//                 <div className="text-gray-400">
//                   <span className="text-[#a0b4cc]">$ </span>
//                   <span className="typing-animation" style={{ animationDelay: '4s' }}>npm run start</span>
//                 </div>
//                 <div className="text-[#a0b4cc]">Starting development server...</div>
//                 <div className="text-green-400">Ready to collaborate! Server running at http://localhost:3000</div>
                
//                 <div className="text-gray-400">
//                   <span className="text-[#a0b4cc]">$ </span>
//                   <span className="cursor-animation">_</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       <div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
//         style={{
//           opacity: isLoaded ? 0.7 : 0,
//           transition: 'opacity 1s ease-in-out 1.5s'
//         }}
//       >
//         <span className="text-gray-400 text-sm font-orbitron mb-2">Scroll Down</span>
//         <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center">
//           <div className="w-1 h-2 bg-gray-400 rounded-full mt-1 animate-bounce-slow"></div>
//         </div>
//       </div>
      
//       {/* Add global animation styles */}
//       <style jsx>{`
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.1; }
//           50% { opacity: 0.7; }
//         }
        
//         @keyframes blink {
//           0%, 100% { opacity: 0; }
//           50% { opacity: 1; }
//         }
        
//         @keyframes typing {
//           from { width: 0 }
//           to { width: 100% }
//         }
        
//         .typing-animation {
//           display: inline-block;
//           overflow: hidden;
//           white-space: nowrap;
//           animation: typing 2s steps(30, end);
//         }
        
//         .cursor-animation {
//           display: inline-block;
//           width: 8px;
//           height: 15px;
//           background-color: #a0b4cc;
//           animation: blink 1s infinite;
//         }
        
//         .animate-bounce-slow {
//           animation: bounce 1.5s infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Terminal, Database, Layout, Coffee, FileCode, GitBranch, Globe, PenTool, Github, MonitorSmartphone, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animation trigger when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Updated tech stack items to match your original component
  const techStack = [
    { name: "Python", icon: <Code className="w-4 h-4" />, color: "text-blue-500" },
    { name: "Java", icon: <Coffee className="w-4 h-4" />, color: "text-red-500" },
    { name: "JavaScript", icon: <FileCode className="w-4 h-4" />, color: "text-yellow-500" },
    { name: "React", icon: <Layout className="w-4 h-4" />, color: "text-cyan-400" },
    { name: "React Native", icon: <MonitorSmartphone className="w-4 h-4" />, color: "text-cyan-400" },
    { name: "Spring Boot", icon: <Code className="w-4 h-4" />, color: "text-green-500" },
    { name: "Node.js", icon: <Terminal className="w-4 h-4" />, color: "text-green-600" },
    { name: "Express", icon: <Server className="w-4 h-4" />, color: "text-white" },
    { name: "MySQL", icon: <Database className="w-4 h-4" />, color: "text-blue-600" },
    { name: "MongoDB", icon: <Database className="w-4 h-4" />, color: "text-green-500" },
    { name: "Git", icon: <GitBranch className="w-4 h-4" />, color: "text-orange-500" },
    { name: "Tailwind", icon: <Layout className="w-4 h-4" />, color: "text-teal-400" },
    { name: "Docker", icon: <Globe className="w-4 h-4" />, color: "text-blue-500" },
    { name: "Figma", icon: <PenTool className="w-4 h-4" />, color: "text-purple-500" },
    { name: "GitHub", icon: <Github className="w-4 h-4" />, color: "text-gray-200" }
  ];
  
  const scrollToSection = (sectionId) => {
  gsap.to(window, {
    duration: 1.2, 
    scrollTo: {
      y: `#${sectionId}`,
      offsetY: 50 // Offset if needed
    },
    ease: "sine.inOut" // Many easing options available
  });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      {/* Dark background with gradient */}
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
        {[...Array(50)].map((_, index) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content - 7 columns */}
          <div 
            className="lg:col-span-7 text-center lg:text-left"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(2rem)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-4 text-[#a0b4cc] text-sm font-orbitron">
              <span>Full Stack Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron text-white mb-6 leading-tight">
              Building <span className="text-[#a0b4cc]">Digital</span> Experiences That <span className="text-[#a0b4cc]">Matter</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              I'm Sandith Sithmaka Thenuwara, a Computer Science undergraduate passionate about developing creative solutions to technical challenges. I create responsive web applications with modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gray-800/80 hover:bg-gray-700/80 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 font-orbitron border border-gray-700/50 hover:border-[#2a3a50] hover:shadow-[0_0_15px_rgba(160,180,204,0.15)]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-transparent hover:bg-gray-800/50 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 font-orbitron border border-gray-700/50 hover:border-[#2a3a50]"
              >
                <span>Get In Touch</span>
              </button>
            </div>
            
            {/* Tech stack */}
            <div className="mt-12 max-w-xl mx-auto lg:mx-0">
              <p className="text-gray-400 text-sm font-orbitron mb-4">TECH STACK</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 px-3 py-2 rounded-md border border-gray-700/50 flex items-center space-x-2 text-gray-300 hover:scale-105 transition-transform"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'translateY(0)' : 'translateY(1rem)',
                      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.05}s`
                    }}
                  >
                    <span className={tech.color}>{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right content - 5 columns - Terminal animation */}
          <div 
            className="lg:col-span-5 hidden lg:block"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(2rem)',
              transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
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
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span className="typing-animation">whoami</span>
                </div>
                <div className="text-gray-300">Sandith Sithmaka Thenuwara - Computer Science Student</div>
                
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span className="typing-animation" style={{ animationDelay: '1s' }}>ls -la skills/</span>
                </div>
                <div className="text-gray-300 space-y-1">
                  <div>drwxr-xr-x frontend/</div>
                  <div>drwxr-xr-x backend/</div>
                  <div>drwxr-xr-x databases/</div>
                  <div>drwxr-xr-x tools/</div>
                </div>
                
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span className="typing-animation" style={{ animationDelay: '2s' }}>cat about.txt</span>
                </div>
                <div className="text-gray-300">
                  Passionate about creating modern, responsive, and user-friendly web applications. Currently pursuing a degree in Computer Science with a focus on full-stack development.
                </div>
                
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span className="typing-animation" style={{ animationDelay: '3s' }}>find . -name "latest_project"</span>
                </div>
                <div className="text-gray-300">./projects/DoctorAid</div>
                
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span className="typing-animation" style={{ animationDelay: '4s' }}>npm run start</span>
                </div>
                <div className="text-[#a0b4cc]">Starting development server...</div>
                <div className="text-green-400">Ready to collaborate! Server running at http://localhost:3000</div>
                
                <div className="text-gray-400">
                  <span className="text-[#a0b4cc]">$ </span>
                  <span className="cursor-animation">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        style={{
          opacity: isLoaded ? 0.7 : 0,
          transition: 'opacity 1s ease-in-out 1.5s'
        }}
      >
        <span className="text-gray-400 text-sm font-orbitron mb-2">Scroll Down</span>
        <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-1 animate-bounce-slow"></div>
        </div>
      </div>
      
      {/* Add global animation styles */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(30, end);
        }
        
        .cursor-animation {
          display: inline-block;
          width: 8px;
          height: 15px;
          background-color: #a0b4cc;
          animation: blink 1s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
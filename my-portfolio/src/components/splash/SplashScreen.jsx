// import React, { useState, useEffect } from 'react';

// const SplashScreen = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);
//   const [expanding, setExpanding] = useState(false);

//   useEffect(() => {
//     // Gradually increase the progress counter
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         // Calculate new progress with a slight acceleration curve
//         const newProgress = prev + (100 - prev) / 40;
//         return newProgress >= 100 ? 100 : newProgress;
//       });
//     }, 50);

//     // Show splash screen for a short time before calling onComplete
//     const timer = setTimeout(() => {
//       clearInterval(progressInterval);
//       setProgress(100);
//       setIsComplete(true);
      
//       setTimeout(() => {
//         setExpanding(true);
        
//         setTimeout(() => {
//           if (onComplete) onComplete();
//         }, 1); // Transition duration
//       }, 4000); // Time to show completed state
//     }, 10000); // Show splash screen for 5 seconds
    
//     return () => {
//       clearTimeout(timer);
//       clearInterval(progressInterval);
//     };
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       {/* Background image with improved responsive handling */}
//       <div
//         className={`w-full h-full absolute transition-opacity duration-800 ease-in-out ${
//           expanding ? 'opacity-0' : 'opacity-100'
//         }`}
//         style={{
//           backgroundImage: 'url(/src/assets/bg12.jpeg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       />
      
//       {/* Content overlay with responsive text sizes */}
//       <div className={`relative z-10 text-center px-4 sm:px-6 max-w-full transition-opacity bduration-500 ${
//         expanding ? 'opacity-0' : 'opacity-100'
//       }`}>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white font-orbitron tracking-wider">
//           Welcome to My Arena
//         </h1>
        
//         {!isComplete ? (
//           <div className="flex flex-col items-center">
//             {/* Numeric counter */}
//             <div className="mb-2 flex items-baseline justify-center">
//               <span className="text-3xl font-bold text-white font-orbitron">{Math.floor(progress)}</span>
//               <span className="text-xl text-white/70 font-orbitron">%</span>
//             </div>
            
//             {/* Minimal progress bar (optional) */}
//             <div className="w-40 h-px bg-white/20 mb-3 relative overflow-hidden">
//               <div 
//                 className="h-full bg-white/80 absolute top-0 left-0 transition-all duration-300 ease-out"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
            
//             <p className="text-lg sm:text-xl text-white/80 font-orbitron">Loading...</p>
//           </div>
//         ) : (
//           <p className="text-lg sm:text-xl text-white/80 animate-pulse font-orbitron">Entering...</p>
//         )}
//       </div>
//               {/* Copyright notice */}
//       <div className="absolute bottom-4 left-0 right-0 text-center z-10 px-3">
//         <p className="text-xs sm:text-[15px] text-white/90 font-michroma">© 2025 Sandith Sithmaka Thenuwara</p>
//       </div>

//     </div>
//   );
// };

// export default SplashScreen;

// src/components/EnhancedSplashScreen.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Code, Server, Database, Layout } from 'lucide-react';

// const SplashScreen = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);
//   const [expanding, setExpanding] = useState(false);
//   const [currentText, setCurrentText] = useState('');
//   const [terminalLines, setTerminalLines] = useState([]);
//   const terminalRef = useRef(null);
  
//   const terminalTexts = [
//     { text: "$ initializing system...", delay: 500 },
//     { text: "$ loading dependencies...", delay: 1500 },
//     { text: "$ importing components...", delay: 3000 },
//     { text: "$ connecting data sources...", delay: 4500 },
//     { text: "$ optimizing ui elements...", delay: 6000 },
//     { text: "$ applying animations...", delay: 7500 },
//     { text: "$ finalizing portfolio...", delay: 9000 },
//     { text: "$ system ready. Welcome!", delay: 10000 }
//   ];

//   useEffect(() => {
//     // Gradually increase the progress counter
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         // Calculate new progress with a slight acceleration curve
//         const newProgress = prev + (100 - prev) / 40;
//         return newProgress >= 100 ? 100 : newProgress;
//       });
//     }, 50);
    
//     // Show splash screen for a short time before calling onComplete
//     const timer = setTimeout(() => {
//       clearInterval(progressInterval);
//       setProgress(100);
//       setIsComplete(true);
      
//       setTimeout(() => {
//         setExpanding(true);
        
//         setTimeout(() => {
//           if (onComplete) onComplete();
//         }, 1000); // Transition duration
//       }, 2000); // Time to show completed state
//     }, 11000); // Show splash screen for 11 seconds
    
//     return () => {
//       clearTimeout(timer);
//       clearInterval(progressInterval);
//     };
//   }, [onComplete]);

//   // Handle terminal text animation
//   useEffect(() => {
//     // Type writer effect for each terminal line
//     const typeWriterTimers = terminalTexts.map(({ text, delay }) => {
//       return setTimeout(() => {
//         setCurrentText(text);
//         setTerminalLines(prev => [...prev, text]);
        
//         // Scroll terminal to bottom when new line is added
//         if (terminalRef.current) {
//           terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//         }
//       }, delay);
//     });
    
//     return () => {
//       typeWriterTimers.forEach(timer => clearTimeout(timer));
//     };
//   }, []);

//   // Random particle generation for background effect
//   const particles = Array.from({ length: 50 }, (_, i) => ({
//     id: i,
//     size: Math.random() * 3 + 1,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     animationDuration: Math.random() * 15 + 10,
//     animationDelay: Math.random() * 5,
//     opacity: Math.random() * 0.5 + 0.1
//   }));

//   // Tech icons that appear during loading
//   const techIcons = [
//     <Layout className="w-8 h-8 text-cyan-400" key="react" />,
//     <Server className="w-8 h-8 text-green-500" key="node" />,
//     <Database className="w-8 h-8 text-blue-500" key="db" />,
//     <Code className="w-8 h-8 text-yellow-500" key="js" />,
//     <Terminal className="w-8 h-8 text-white" key="terminal" />
//   ];

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#080c11]">
//       {/* Animated particles background */}
//       <div className="absolute inset-0 overflow-hidden">
//         {particles.map(particle => (
//           <div
//             key={particle.id}
//             className="absolute rounded-full"
//             style={{
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               backgroundColor: `rgba(160, 180, 204, ${particle.opacity})`,
//               top: `${particle.y}%`,
//               left: `${particle.x}%`,
//               animation: `float ${particle.animationDuration}s infinite ${particle.animationDelay}s, pulse 3s infinite ${particle.animationDelay}s`
//             }}
//           />
//         ))}
//       </div>
      
//       {/* Grid lines */}
//       <div 
//         className="absolute inset-0 opacity-20 z-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(100, 120, 140, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(100, 120, 140, 0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: '30px 30px'
//         }}
//       ></div>
      
//       {/* Main content with fade effect */}
//       <div className={`relative z-10 text-center px-4 sm:px-6 transition-all duration-1000 ${
//         expanding ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
//       }`}>
//         {/* Logo/name */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#a0b4cc] to-[#8c96b5] bg-clip-text text-transparent font-orbitron tracking-wider">
//           Sandith Sithmaka
//         </h1>
        
//         {/* Terminal window */}
//         <div className="max-w-md mx-auto mb-8 overflow-hidden rounded-md" style={{
//           background: 'rgba(15, 20, 30, 0.7)',
//           borderTop: '1px solid rgba(100, 120, 140, 0.2)',
//           borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
//           borderRight: '1px solid rgba(10, 15, 25, 0.2)',
//           borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
//         }}>
//           {/* Terminal header */}
//           <div className="bg-gray-800/80 px-4 py-2 flex items-center">
//             <div className="flex space-x-2">
//               <div className="w-3 h-3 rounded-full bg-red-500"></div>
//               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//             </div>
//             <div className="ml-4 text-gray-400 text-xs font-mono">sandith@portfolio:~/loading</div>
//           </div>
          
//           {/* Terminal content */}
//           <div 
//             ref={terminalRef}
//             className="p-4 font-mono text-sm text-left h-48 overflow-y-auto text-gray-300 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
//           >
//             {terminalLines.map((line, index) => (
//               <div key={index} className="mb-1">{line}</div>
//             ))}
//             <div className="flex items-center">
//               <span className="text-[#a0b4cc] mr-2">$</span>
//               <span>{currentText.substring(2)}</span>
//               <span className="inline-block w-2 h-4 bg-white ml-1 animate-blink"></span>
//             </div>
//           </div>
//         </div>
        
//         {/* Progress visualization */}
//         <div className="mb-8">
//           {!isComplete ? (
//             <div className="flex flex-col items-center">
//               {/* Tech icons that rotate during loading */}
//               <div className="flex justify-center space-x-4 mb-4">
//                 {techIcons.map((icon, index) => (
//                   <div
//                     key={index}
//                     className="transition-all duration-300"
//                     style={{
//                       opacity: progress > (index * 20) ? 1 : 0.2,
//                       transform: progress > (index * 20) ? 'translateY(0)' : 'translateY(10px)'
//                     }}
//                   >
//                     {icon}
//                   </div>
//                 ))}
//               </div>
              
//               {/* Progress bar */}
//               <div className="w-64 h-1 bg-gray-800 rounded-full mb-3 overflow-hidden">
//                 <div
//                   className="h-full rounded-full transition-all duration-300 ease-out"
//                   style={{ 
//                     width: `${progress}%`,
//                     background: 'linear-gradient(90deg, #2a3a50, #a0b4cc)'
//                   }}
//                 />
//               </div>
              
//               {/* Progress percentage */}
//               <div className="flex items-baseline justify-center">
//                 <span className="text-3xl font-bold text-[#a0b4cc] font-orbitron">{Math.floor(progress)}</span>
//                 <span className="text-xl text-[#627183] font-orbitron">%</span>
//               </div>
//             </div>
//           ) : (
//             <div className="text-lg text-[#a0b4cc] font-orbitron animate-pulse">
//               Portfolio ready. Entering...
//             </div>
//           )}
//         </div>
//       </div>
      
//       {/* Footer copyright notice */}
//       <div className="absolute bottom-4 left-0 right-0 text-center z-10 px-3">
//         <p className="text-sm text-gray-400 font-orbitron">© {new Date().getFullYear()} Sandith Sithmaka Thenuwara</p>
//       </div>
      
//       {/* Animation styles */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0); }
//           50% { transform: translate(10px, -10px); }
//         }
        
//         @keyframes pulse {
//           0%, 100% { opacity: 0.1; }
//           50% { opacity: 0.7; }
//         }
        
//         @keyframes blink {
//           0%, 100% { opacity: 0; }
//           50% { opacity: 1; }
//         }
        
//         .scrollbar-thin::-webkit-scrollbar {
//           width: 4px;
//         }
        
//         .scrollbar-thumb-gray-700::-webkit-scrollbar-thumb {
//           background-color: #374151;
//           border-radius: 2px;
//         }
        
//         .scrollbar-track-transparent::-webkit-scrollbar-track {
//           background-color: transparent;
//         }
        
//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SplashScreen;

// src/components/SplashScreen.jsx
// src/components/SplashScreen.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code, Server, Database, Layout, Coffee, FileCode, GitBranch, Globe, PenTool, MonitorSmartphone } from 'lucide-react';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [expanding, setExpanding] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const terminalRef = useRef(null);
  
  const commands = [
    "$ initializing system...",
    "$ loading dependencies...",
    "$ importing components...",
    "$ connecting data sources...",
    "$ optimizing ui elements...",
    "$ applying animations...",
    "$ finalizing portfolio...",
    "$ system ready. Welcome!"
  ];

  // Handle progress animation
  useEffect(() => {
    // Gradually increase the progress counter
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        // Calculate new progress with a slight acceleration curve
        const newProgress = prev + (100 - prev) / 40;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);
    
    // Show splash screen for a short time before calling onComplete
    const timer = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setIsComplete(true);
      
      setTimeout(() => {
        setExpanding(true);
        
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000); // Transition duration
      }, 2000); // Time to show completed state
    }, 11000); // Show splash screen for 11 seconds
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Handle typewriter effect
  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const command = commands[currentCommandIndex];
      
      if (currentCharIndex < command.length) {
        // Type current character
        const typingTimer = setTimeout(() => {
          setCurrentCommand(command.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, 30); // Speed of typing
        
        return () => clearTimeout(typingTimer);
      } else {
        // Command completed, add to terminal lines and start next command
        const nextCommandTimer = setTimeout(() => {
          // Add completed command to terminal lines
          setTerminalLines(prev => [...prev, command]);
          
          // Reset character index and move to next command
          setCurrentCharIndex(0);
          setCurrentCommandIndex(currentCommandIndex + 1);
          setCurrentCommand('');
          
          // Scroll terminal to bottom when new line is added
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        }, 500); // Delay before next command
        
        return () => clearTimeout(nextCommandTimer);
      }
    }
  }, [currentCommandIndex, currentCharIndex, commands]);

  // Tech icons that appear during loading - expanded to match your tech stack
  const techIcons = [
    { icon: <Layout className="w-6 h-6" />, name: "React", color: "text-cyan-400" },
    { icon: <MonitorSmartphone className="w-6 h-6" />, name: "React Native", color: "text-cyan-400" },
    { icon: <FileCode className="w-6 h-6" />, name: "JavaScript", color: "text-yellow-500" },
    { icon: <Coffee className="w-6 h-6" />, name: "Java", color: "text-red-500" },
    { icon: <Code className="w-6 h-6" />, name: "Spring Boot", color: "text-green-500" },
    { icon: <Terminal className="w-6 h-6" />, name: "Node.js", color: "text-green-600" },
    { icon: <Server className="w-6 h-6" />, name: "Express", color: "text-white" },
    { icon: <Database className="w-6 h-6" />, name: "MongoDB", color: "text-green-500" },
    { icon: <Database className="w-6 h-6" />, name: "MySQL", color: "text-blue-500" }
  ];

  // Create stars/particles
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 5
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background - dark with subtle grid */}
      <div className="absolute inset-0 bg-[#080c11]">
        {/* Tech grid pattern */}
        <div 
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 120, 140, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 120, 140, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        ></div>

        {/* Particles effect */}
        {particles.map((particle) => (
          <div 
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: `rgba(160, 180, 204, ${particle.opacity})`,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              animation: `twinkle ${particle.duration}s infinite ${particle.delay}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Content with fade effect */}
      <div 
        className={`relative z-10 text-center px-4 sm:px-6 max-w-full transition-all duration-1000 ${
          expanding ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
      >
        {/* Welcome message with code-style design */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#a0b4cc] to-[#8c96b5] bg-clip-text text-transparent font-orbitron tracking-wider">
            &lt;Beyond /&gt; Code
          </h1>
          <p className="text-lg text-gray-400 mt-2 font-michroma">
            Turning vision into digital reality
          </p>
        </div>
        
        {/* Terminal window */}
        <div className="max-w-md mx-auto mb-8 overflow-hidden rounded-md shadow-xl" style={{
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
            <div className="ml-4 text-gray-400 text-xs font-mono">sandith@portfolio:~/loading</div>
          </div>
          
          {/* Terminal content */}
          <div 
            ref={terminalRef}
            className="p-4 font-mono text-sm text-left h-40 overflow-y-auto text-gray-300"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#374151 transparent'
            }}
          >
            {terminalLines.map((line, index) => (
              <div key={index} className="mb-1">
                {line}
              </div>
            ))}
            {currentCommand && (
              <div className="flex">
                <span>{currentCommand}</span>
                <span className="inline-block w-2 h-4 bg-white ml-1" style={{animation: 'blink 1s infinite'}}></span>
              </div>
            )}
          </div>
        </div>
        
        {/* Tech stack icons */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
            {techIcons.map((tech, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center transition-all duration-500 ${
                  progress > (index * 11) ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                }`}
              >
                <div className={`${tech.color} mb-1`}>
                  {tech.icon}
                </div>
                <span className="text-gray-400 text-xs">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress indicator */}
        {!isComplete ? (
          <div className="flex flex-col items-center">
            {/* Progress bar */}
            <div className="w-64 h-1 bg-gray-800 rounded-full mb-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #2a3a50, #a0b4cc)'
                }}
              />
            </div>
            
            {/* Percentage counter */}
            <div className="flex items-baseline justify-center">
              <span className="text-2xl font-bold text-[#a0b4cc] font-orbitron">{Math.floor(progress)}</span>
              <span className="text-lg text-[#627183] font-orbitron">%</span>
            </div>
          </div>
        ) : (
          <p className="text-lg text-[#a0b4cc] font-orbitron" style={{animation: 'pulse 2s infinite'}}>
            {progress === 100 ? "Entering Portfolio..." : "Loading..."}
          </p>
        )}
      </div>
      
      {/* Copyright notice */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-10 px-3">
        <p className="text-xs sm:text-sm text-gray-400 font-orbitron">
          © {new Date().getFullYear()} Sandith Sithmaka Thenuwara
        </p>
      </div>
      
      {/* Animation styles */}
      <style jsx="true">{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
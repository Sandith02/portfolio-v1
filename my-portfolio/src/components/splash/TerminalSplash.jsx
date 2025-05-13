// src/components/terminal/TerminalSplash.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TerminalSplash = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentCommand, setCurrentCommand] = useState('');
  const [terminalLines, setTerminalLines] = useState([]);
  const terminalRef = useRef(null);
  
  const navigate = useNavigate();
  
  // Terminal initialization commands
  const commands = [
    { text: "initializing terminal session...", delay: 300 },
    { text: "loading filesystem...", delay: 1200 },
    { text: "connecting to portfolio database...", delay: 2200 },
    { text: "importing projects...", delay: 3000 },
    { text: "configuring command interface...", delay: 4000 },
    { text: "setting environment variables...", delay: 5000 },
    { text: "terminal ready. welcome to sandith's cli.", delay: 6000 }
  ];

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 - prev) / 30;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);
    
    // Auto-complete after animation finishes
    const timer = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
    }, 7000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Handle terminal text display
  useEffect(() => {
    // Sequentially display commands
    commands.forEach(({ text, delay }) => {
      setTimeout(() => {
        setCurrentCommand(text);
        setTerminalLines(prev => [...prev, `$ ${text}`]);
        
        // Scroll terminal to bottom when new line is added
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, delay);
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#080c11]">
      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(100, 120, 140, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(100, 120, 140, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Diagonal lines pattern */}
      <div 
        className="absolute inset-0 opacity-10 z-0"
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
      
      <div className="container max-w-2xl mx-auto px-4 z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-orbitron text-[#a0b4cc] mb-2">Terminal Interface</h1>
          <p className="text-gray-400 text-sm">Initializing command-line environment...</p>
        </div>
        
        {/* Terminal window */}
        <div className="relative rounded-md overflow-hidden shadow-xl mb-6" style={{
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
            <div className="ml-4 text-gray-400 text-xs font-mono">sandith@portfolio:~/terminal</div>
          </div>
          
          {/* Terminal content */}
          <div 
            ref={terminalRef}
            className="p-4 font-mono text-sm h-64 overflow-y-auto bg-[#0c1219]"
          >
            {terminalLines.map((line, index) => (
              <div key={index} className="mb-1 text-gray-300">{line}</div>
            ))}
            <div className="flex items-center text-gray-300">
              <span className="text-[#a0b4cc] mr-2">$</span>
              <span>{currentCommand}</span>
              <span className="inline-block w-2 h-4 bg-[#a0b4cc] ml-1 cursor-blink"></span>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="bg-gray-800/50 h-1 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-[#2a3a50] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>Initializing terminal environment...</span>
          <span>{Math.floor(progress)}%</span>
        </div>
        
        {/* Skip button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => onComplete && onComplete()}
            className="bg-transparent hover:bg-gray-800/50 text-[#a0b4cc] text-sm font-medium py-2 px-4 rounded-md transition-all duration-300 border border-gray-700/50 hover:border-[#2a3a50]"
          >
            Skip Loading
          </button>
        </div>
      </div>
      
      {/* Footer copyright notice */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-10 px-3">
        <p className="text-xs text-gray-500 font-orbitron">
          © {new Date().getFullYear()} Sandith Sithmaka Thenuwara
        </p>
      </div>
      
      <style jsx="true">{`
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TerminalSplash;
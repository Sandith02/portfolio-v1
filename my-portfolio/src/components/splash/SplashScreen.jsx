import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [expanding, setExpanding] = useState(false);

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
        }, 1); // Transition duration
      }, 4000); // Time to show completed state
    }, 10000); // Show splash screen for 5 seconds
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background image with improved responsive handling */}
      <div
        className={`w-full h-full absolute transition-opacity duration-800 ease-in-out ${
          expanding ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: 'url(/src/assets/bg12.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content overlay with responsive text sizes */}
      <div className={`relative z-10 text-center px-4 sm:px-6 max-w-full transition-opacity bduration-500 ${
        expanding ? 'opacity-0' : 'opacity-100'
      }`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white font-orbitron tracking-wider">
          Welcome to My Arena
        </h1>
        
        {!isComplete ? (
          <div className="flex flex-col items-center">
            {/* Numeric counter */}
            <div className="mb-2 flex items-baseline justify-center">
              <span className="text-3xl font-bold text-white font-orbitron">{Math.floor(progress)}</span>
              <span className="text-xl text-white/70 font-orbitron">%</span>
            </div>
            
            {/* Minimal progress bar (optional) */}
            <div className="w-40 h-px bg-white/20 mb-3 relative overflow-hidden">
              <div 
                className="h-full bg-white/80 absolute top-0 left-0 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <p className="text-lg sm:text-xl text-white/80 font-orbitron">Loading...</p>
          </div>
        ) : (
          <p className="text-lg sm:text-xl text-white/80 animate-pulse font-orbitron">Entering...</p>
        )}
      </div>
              {/* Copyright notice */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-10 px-3">
        <p className="text-xs sm:text-[15px] text-white/90 font-michroma">© 2025 Sandith Sithmaka Thenuwara</p>
      </div>

    </div>
  );
};

export default SplashScreen;
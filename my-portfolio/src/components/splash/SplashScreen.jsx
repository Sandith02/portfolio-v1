import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [expanding, setExpanding] = useState(false);

  useEffect(() => {
    // Show splash screen for a short time before calling onComplete
    const timer = setTimeout(() => {
      setIsComplete(true);
      
      setTimeout(() => {
        setExpanding(true);
        
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 800); // Transition duration
      }, 500); // Time to show completed state
    }, 2000); // Show splash screen for 2 seconds
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background image from your assets folder */}
      <div 
        className={`w-full h-full absolute transition-opacity duration-800 ease-in-out ${
          expanding ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: 'url(/src/assets/bg1.jpeg)', // Update this path to match your actual bg image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content overlay */}
      <div className={`relative z-10 text-center px-6 transition-opacity duration-500 ${
        expanding ? 'opacity-0' : 'opacity-100'
      }`}>
          <h1 className="text-5xl font-bold mb-3 text-white font-orbitron tracking-wider">
          Welcome to my arena
        </h1>
        {!isComplete ? (
          <p className="text-xl text-white/80 animate-pulse">Loading...</p>
        ) : (
          <p className="text-xl text-white/80 animate-pulse">Entering...</p>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
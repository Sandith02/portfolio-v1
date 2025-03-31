import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [expanding, setExpanding] = useState(false);

  useEffect(() => {
    // Simulating loading progress
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          
          // After showing "Onboard" for a moment, start expanding
          setTimeout(() => {
            setExpanding(true);
            
            // After expansion animation, trigger the complete callback
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 1000); // Expansion duration
          }, 800); // Time to show "Onboard" text
          
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20); // Update every 20ms for a total of ~2 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div 
        className={`bg-gray-900 rounded-lg shadow-lg text-white text-center overflow-hidden transition-all duration-1000 ease-in-out ${
          expanding ? 'fixed inset-0 rounded-none' : 'w-64 p-6'
        }`}
      >
        {!expanding && (
          <div className="px-4 py-6">
            <h2 className="text-xl font-bold mb-4">
              {isComplete ? 'Onboard' : 'Loading'}
            </h2>
            
            {!isComplete && (
              <>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400">{progress}%</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
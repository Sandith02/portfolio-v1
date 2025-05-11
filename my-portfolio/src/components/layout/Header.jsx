// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Track scroll position to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      {/* Gradient noise background - only visible when scrolled */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          // backgroundImage: `
          //   linear-gradient(to bottom, #101114, #0a0b0e),
          //   url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
          // `,
          // boxShadow: '0 4px 30px #00000040',
          // borderBottom: '1px solid #2a2c33'
          backgroundImage: `
            linear-gradient(to bottom, #101114,  #060d13),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
          `,
          boxShadow: '0 4px 30px #00000040',
          borderBottom: '1px solid #2a2c33'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop three-section layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl lg:text-2xl font-bold font-orbitron text-[#b6bbc2]">
              Sandith Sithmaka
            </Link>
          </div>
          
          {/* Center: Navigation */}
          <nav className="flex-grow flex justify-center">
            <ul className="flex font-orbitron space-x-8">
              <li>
                <NavLink to="/" className={({isActive}) =>
                  isActive 
                    ? "text-[#b6bbc2] font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-[#627183]" 
                    : "text-white hover:text-[#b6bbc2] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#627183] after:transition-all hover:after:w-full"
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive}) =>
                  isActive 
                    ? "text-[#b6bbc2] font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-[#627183]" 
                    : "text-white hover:text-[#b6bbc2] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#627183] after:transition-all hover:after:w-full"
                }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({isActive}) =>
                  isActive 
                    ? "text-[#b6bbc2] font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-[#627183]" 
                    : "text-white hover:text-[#b6bbc2] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#627183] after:transition-all hover:after:w-full"
                }>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({isActive}) =>
                  isActive 
                    ? "text-[#b6bbc2] font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-[#627183]" 
                    : "text-white hover:text-[#b6bbc2] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#627183] after:transition-all hover:after:w-full"
                }>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          
          {/* Right: GitHub button */}
          <div className="flex-shrink-0">
            <a 
              href="https://github.com/SandithSithmaka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#20212880] hover:bg-[#353740b3] text-white font-orbitron py-2 px-4 rounded-md transition-all duration-300 flex items-center border border-[#47495880] hover:border-[#5b5e6eb3] hover:shadow-[0_0_15px_rgba(100,149,237,0.15)]"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
        
        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between">
          <Link to="/" className="text-xl font-bold font-orbitron text-[#b6bbc2]">
            Sandith Sithmaka
          </Link>
          
          <div className="flex items-center space-x-3">
            {/* GitHub icon for mobile */}
            <a 
              href="https://github.com/SandithSithmaka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#627183] hover:text-[#b6bbc2] transition-all group"
              aria-label="GitHub"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* Mobile menu button */}
            <button
              className="text-[#627183] hover:text-[#b6bbc2] transition-all group font-orbitron focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation dropdown with matching gradient background */}
      {isMenuOpen && (
        <div 
          className="md:hidden mt-2 relative"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, #101114, #0a0b0e),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
            `,
            boxShadow: '0 4px 30px #00000040',
            borderBottom: '1px solid #2a2c33'
          }}
        >
          <ul className="flex flex-col px-8 py-5 font-orbitron">
            <li className="py-2">
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "text-[#b6bbc2] font-medium" : "text-white hover:text-[#b6bbc2]"}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/about"
                className={({isActive}) => isActive ? "text-[#b6bbc2] font-medium" : "text-white hover:text-[#b6bbc2]"}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/projects"
                className={({isActive}) => isActive ? "text-[#b6bbc2] font-medium" : "text-white hover:text-[#b6bbc2]"}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                to="/contact"
                className={({isActive}) => isActive ? "text-[#b6bbc2] font-medium" : "text-white hover:text-[#b6bbc2]"}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
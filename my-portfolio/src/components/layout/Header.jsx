// src/components/layout/Header.jsx
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">Your Name</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
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
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className={({isActive}) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-300"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-300"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({isActive}) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-300"}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive}) => 
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-300"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col px-4 py-2">
            <li className="py-2">
              <NavLink 
                to="/" 
                className={({isActive}) => isActive ? "text-blue-400 font-medium" : "hover:text-blue-300"}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? "text-blue-400 font-medium" : "hover:text-blue-300"}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink 
                to="/projects" 
                className={({isActive}) => isActive ? "text-blue-400 font-medium" : "hover:text-blue-300"}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink 
                to="/contact" 
                className={({isActive}) => isActive ? "text-blue-400 font-medium" : "hover:text-blue-300"}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
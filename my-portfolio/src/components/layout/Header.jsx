// src/components/layout/Header.jsx
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Your Name</Link>
        <nav>
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
    </header>
  )
}

export default Header
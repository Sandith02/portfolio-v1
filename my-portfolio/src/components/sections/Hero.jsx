import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
          Web Developer specializing in creating modern, responsive, and user-friendly digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            View My Projects
          </Link>
          <Link 
            to="/contact" 
            className="bg-transparent border-2 border-blue-500 hover:bg-blue-900/30 text-blue-400 font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-4 bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-1">Frontend</h3>
            <p className="text-gray-400">React, JavaScript, HTML, CSS</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-1">Backend</h3>
            <p className="text-gray-400">Node.js, Express, MongoDB</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-1">Design</h3>
            <p className="text-gray-400">Figma, UI/UX, Tailwind CSS</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-1">Tools</h3>
            <p className="text-gray-400">Git, VS Code, Docker</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
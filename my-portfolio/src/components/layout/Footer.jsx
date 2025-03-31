// src/components/layout/Footer.jsx
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Contact</h3>
              <p className="text-gray-400">youremail@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
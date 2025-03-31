// In src/components/sections/Hero.jsx
import React from 'react'

const Hero = () => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl mb-8">Web Developer & Designer</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
          View My Projects
        </button>
      </div>
    </div>
  )
}

export default Hero
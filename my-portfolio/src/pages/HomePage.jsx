import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'

const HomePage = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product catalog, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg' // Placeholder image path
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather application using external APIs to display current conditions and forecasts.',
      technologies: ['React', 'API Integration', 'CSS Modules'],
      image: '/project2.jpg' // Placeholder image path
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity tool for managing tasks with categorization, priorities, and progress tracking.',
      technologies: ['React', 'Redux', 'Firebase'],
      image: '/project3.jpg' // Placeholder image path
    }
  ];

  return (
    <div className=" text-white">
      {/* Hero Section */}
      
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link to="/projects" className="text-blue-400 hover:text-blue-300 flex items-center">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/projects`} className="text-blue-400 hover:text-blue-300 flex items-center">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Me Preview Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400 text-lg">
                I'm a passionate web developer with expertise in creating beautiful, functional, and user-friendly digital experiences.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-64 h-64 rounded-full bg-gray-800 flex-shrink-0">
                {/* Profile image placeholder */}
              </div>
              
              <div>
                <p className="text-gray-300 mb-4">
                  With over 5 years of experience in web development, I specialize in building modern applications
                  using React, Node.js, and other cutting-edge technologies. I'm dedicated to creating clean,
                  efficient code and delivering exceptional user experiences.
                </p>
                <p className="text-gray-300 mb-6">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or enjoying outdoor activities.
                </p>
                
                <Link 
                  to="/about" 
                  className="inline-block bg-transparent border-2 border-blue-500 hover:bg-blue-900/30 text-blue-400 font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects, full-time positions, and consulting work.
            If you're interested in working together, let's get in touch!
          </p>
          
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { CornerDownRight, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3e5075b8-a471-460b-9099-9b8e6b47fe16', // Your Web3Forms API key
          ...formData,
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 6000);
  };
  
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Dark background with diagonal lines */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(to bottom, rgba(9, 14, 21, 0.95), rgba(5, 7, 12, 0.98))'
      }}></div>
      
      {/* Diagonal lines pattern */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 2px,
            rgba(70, 90, 110, 0.1) 2px,
            rgba(70, 90, 110, 0.1) 4px
          )`
        }}
      ></div>
      
      {/* Tech grid pattern like in the hero image */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: `
          linear-gradient(rgba(100, 120, 140, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(100, 120, 140, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron text-gray-200 mb-4">
            Get In Touch
          </h2>
          <div className="h-px w-[120px] mx-auto mt-2" style={{
            background: 'linear-gradient(to right, transparent, #2a3a50, transparent)'
          }}></div>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto font-orbitron text-sm tracking-wide">
            Have a project in mind or want to collaborate? Feel free to reach out through the form below or directly via email.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact information - 2 columns */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            <div className="relative overflow-hidden rounded-md" style={{
              background: 'rgba(15, 20, 30, 0.5)',
              borderTop: '1px solid rgba(100, 120, 140, 0.2)',
              borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
              borderRight: '1px solid rgba(10, 15, 25, 0.2)',
              borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
            }}>
              {/* Inner diagonal lines */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 2px,
                    rgba(70, 90, 110, 0.1) 2px,
                    rgba(70, 90, 110, 0.1) 4px
                  )`
                }}
              ></div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-orbitron text-gray-200 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-800/70 p-3 rounded-md">
                      <Mail className="text-[#a0b4cc] w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 font-orbitron">Email</p>
                      <a href="mailto:lhthenuwara@gmail.com" className="text-gray-200 hover:text-[#a0b4cc] transition-colors">
                        lhthenuwara@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-800/70 p-3 rounded-md">
                      <MapPin className="text-[#a0b4cc] w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 font-orbitron">Location</p>
                      <p className="text-gray-200">
                        Moratuwa, Western Province, Sri Lanka
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-800/70 p-3 rounded-md">
                      <Phone className="text-[#a0b4cc] w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 font-orbitron">Phone</p>
                      <p className="text-gray-200">
                        +97 76 692 6418
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-gray-300 mb-4 font-orbitron">Connect</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/Sandith02" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800/70 p-2 rounded-md text-gray-300 hover:text-[#a0b4cc] hover:bg-gray-800 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/sandith02/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800/70 p-2 rounded-md text-gray-300 hover:text-[#a0b4cc] hover:bg-gray-800 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://x.com/Sandith02?t=uzExcgCq8Ui_uAnHYh5kJg&s=09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800/70 p-2 rounded-md text-gray-300 hover:text-[#a0b4cc] hover:bg-gray-800 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-md" style={{
              background: 'rgba(15, 20, 30, 0.5)',
              borderTop: '1px solid rgba(100, 120, 140, 0.2)',
              borderLeft: '1px solid rgba(100, 120, 140, 0.2)',
              borderRight: '1px solid rgba(10, 15, 25, 0.2)',
              borderBottom: '1px solid rgba(10, 15, 25, 0.2)',
            }}>
              {/* Inner diagonal lines */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 2px,
                    rgba(70, 90, 110, 0.1) 2px,
                    rgba(70, 90, 110, 0.1) 4px
                  )`
                }}
              ></div>
              
              <div className="p-6 md:p-8 relative z-10">
                <h3 className="text-xl font-orbitron text-gray-200 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm mb-2 font-orbitron">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-700/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a3a50] focus:border-transparent transition-all duration-300"
                      placeholder="Sandith Sithmaka Thenuwara"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2 font-orbitron">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-700/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a3a50] focus:border-transparent transition-all duration-300"
                      placeholder="lhthenuwara@gmail.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-400 text-sm mb-2 font-orbitron">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-700/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a3a50] focus:border-transparent transition-all duration-300"
                      placeholder="Let me know how I can help..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center space-x-2 font-orbitron border border-gray-700/50 hover:border-[#2a3a50] hover:shadow-[0_0_15px_rgba(160,180,204,0.15)]"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <CornerDownRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  
                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-[#101620] border border-[#2a3a50] text-[#a0b4cc] px-4 py-3 rounded-md text-sm font-orbitron flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6276 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="#a0b4cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#a0b4cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-[#121620] border border-[#2a3048] text-[#8c96b5] px-4 py-3 rounded-md text-sm font-orbitron flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8c96b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V12" stroke="#8c96b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16H12.01" stroke="#8c96b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
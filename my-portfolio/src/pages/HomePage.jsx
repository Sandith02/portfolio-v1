import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/About'
const HomePage = () => {
  return (
    <div className=" ">
      <section className="">
        <Hero />
      </section>
  
      <section className=" ">
        <AboutSection />
      </section>
    </div>
  )
}

export default HomePage
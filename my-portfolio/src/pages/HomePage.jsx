import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/About'
import ContactSection from '../components/sections/Contact'
import ProjectsSection from '../components/sections/Projects'
import SkillsComponent from '../components/sections/Skills'
const HomePage = () => {
  return (
    <div className=" ">
      <section className="">
        <Hero />
      </section>
  
      <section className=" ">
        <AboutSection />
      </section>

      <section className=" ">
        <SkillsComponent />
      </section>

      <section className=" ">
        <ProjectsSection />
      </section>

      <section className=" ">
        <ContactSection/>
      </section>

    </div>
  )
}

export default HomePage
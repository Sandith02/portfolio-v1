import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/About'
import ContactSection from '../components/sections/Contact'
import ProjectsSection from '../components/sections/Projects'
import SkillsComponent from '../components/sections/Skills'
import TerminalButton from '../components/sections/Terminal'

const HomePage = () => {
  return (
    <div className="">
      <section id="hero">
        <Hero />
      </section>
 
      <section id="terminal">
        <TerminalButton />
      </section>
     
      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsComponent />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection/>
      </section>
    </div>
  )
}

export default HomePage
// src/app/page.js (PURE SERVER COMPONENT)

import Hero from './(sections)/hero/Hero';
import About from './(sections)/about/About';
import Skills from './(sections)/skills/Skills';
import Projects from './(sections)/projects/Projects';
import Certifications from './(sections)/certifications/Certifications';
import Contact from './(sections)/contact/Contact';
// This component MUST be marked 'use client' and handle the motion import
import SectionFadeIn from './components/SectionFadeIn'; 

export default function Home() {
  return (
    <>
      <SectionFadeIn id="hero">
        <Hero /> 
      </SectionFadeIn>
      
      <SectionFadeIn id="about">
        <About />
      </SectionFadeIn>
      
      <SectionFadeIn id="skills">
        <Skills />
      </SectionFadeIn>
      
      <SectionFadeIn id="projects">
        <Projects />
      </SectionFadeIn>
      
      <SectionFadeIn id="certifications">
        <Certifications />
      </SectionFadeIn>
      
      <SectionFadeIn id="contact">
        <Contact />
      </SectionFadeIn>
    </>
  );
}
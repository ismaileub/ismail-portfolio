import React, { useRef } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionName) => {
    const element = sections[sectionName]?.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white dark:bg-background-dark grid-pattern text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <div ref={sections.home}>
        <Hero scrollToSection={scrollToSection} />
      </div>
      <div ref={sections.about}>
        <About />
      </div>
      <div ref={sections.services}>
        <Services />
      </div>
      <div ref={sections.projects}>
        <Projects />
      </div>
      <div ref={sections.skills}>
        <Skills />
      </div>
      <div ref={sections.education}>
        <Education />
      </div>
      <div ref={sections.contact}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

import React, { useRef, useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionName) => {
    const element = sections[sectionName]?.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-background-dark grid-pattern text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Navbar scrollToSection={scrollToSection} />
      <div ref={sections.home}>
        <Hero />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className=" bottom-10 mt-20  flex-col items-center hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-slate-600 dark:text-slate-400 text-sm">
          Scroll to explore
        </span>
        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
          arrow_downward
        </span>
      </motion.div>
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
      <div ref={sections.experience}>
        <Experience />
      </div>
      <div ref={sections.education}>
        <Education />
      </div>
      <div ref={sections.contact}>
        <Contact />
      </div>
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:bg-primary/90 transition-all"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      )}
    </div>
  );
}

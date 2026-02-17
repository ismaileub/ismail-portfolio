import { motion } from "framer-motion";

import { config } from "../../data/config";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const { personal, social, resume } = config;

  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const textRef = useRef(null);

  useEffect(() => {
    let index = 0;
    let typingTimeout;
    let deletingTimeout;

    const typeText = () => {
      const title = titles[index];
      let charIndex = 0;

      const typeStep = () => {
        if (!textRef.current) return;
        textRef.current.textContent = title.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex < title.length) {
          typingTimeout = setTimeout(typeStep, 100); // typing speed
        } else {
          deletingTimeout = setTimeout(deleteText, 1000); // pause before deleting
        }
      };

      typeStep();
    };

    const deleteText = () => {
      const title = titles[index];
      let charIndex = title.length;

      const deleteStep = () => {
        if (!textRef.current) return;
        textRef.current.textContent = title.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex > 0) {
          deletingTimeout = setTimeout(deleteStep, 60); // delete speed
        } else {
          index = (index + 1) % titles.length; // next title
          typingTimeout = setTimeout(typeText, 300); // small pause before typing next
        }
      };

      deleteStep();
    };

    typeText();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [titles]);

  return (
    /* Hero Header */
    <header
      id="home"
      className="relative mt-4  pt-20 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {personal.available && (
            <motion.div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6">
              <motion.span
                className="w-2 h-2 rounded-full bg-primary mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              ></motion.span>
              Available for new projects
            </motion.div>
          )}

          <motion.h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Hi, I'm {personal.name}
          </motion.h1>

          <motion.h2 className="font-display text-3xl md:text-5xl font-bold text-gradient mb-8">
            <span ref={textRef}></span>
            <span className="blinking-cursor">|</span>
          </motion.h2>

          <motion.p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
            {personal.description}
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-6">
            <motion.a
              href={resume}
              download
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.div className="flex items-center gap-4">
              {[
                {
                  Icon: MdEmail,
                  href: social.email,
                  label: "Email",
                  ring: "ring-red-500/40",
                  bg: "bg-red-500/10",
                  color: "text-red-500",
                },
                {
                  Icon: FaLinkedin,
                  href: social.linkedin,
                  label: "LinkedIn",
                  ring: "ring-sky-600/40",
                  bg: "bg-sky-600/10",
                  color: "text-sky-600",
                },
                {
                  Icon: FaGithub,
                  href: social.github,
                  label: "GitHub",
                  ring: "ring-gray-900/40 dark:ring-white/30",
                  bg: "bg-gray-900/10 dark:bg-white/10",
                  color: "text-gray-900 dark:text-white",
                },
              ].map(({ Icon, href, label, ring, bg, color }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} ring-1 ${ring} hover:translate-y-[-4px] hover:shadow-lg hover:shadow-primary/20 transition-all`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={`text-2xl ${color}`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Glow effect strictly behind the circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-pink-500 to-purple-800 rounded-full blur-[30px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />

            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-tr from-primary via-pink-500 to-purple-800 overflow-hidden shadow-xl transition-all duration-500 relative">
              {/* Default Image */}
              <img
                alt="Profile"
                className="w-full h-full object-cover rounded-full transition-opacity duration-500 group-hover:opacity-0"
                src="https://i.ibb.co.com/Y5QLrwF/profile-Me.jpg"
              />
              {/* Hover Image */}
              <img
                alt="Profile Hover"
                className="w-full h-full object-cover rounded-full absolute inset-0 p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
                src="https://res.cloudinary.com/duiwtyjee/image/upload/v1769528300/488641707_18043093400605035_800053857556079585_n_bfaitq.jpg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTheme } from "../../context/ThemeContext";
import { config } from "../../data/config";

export default function Hero({ scrollToSection }) {
  const { isDark, toggleTheme } = useTheme();
  const { personal, social } = config;

  return (
    <>
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-background-dark/70 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {personal.name}<span className="text-primary">&lt;/&gt;</span>
            </span>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <span className="material-symbols-outlined dark:hidden text-slate-700">
                dark_mode
              </span>
              <span className="material-symbols-outlined hidden dark:block text-yellow-400">
                light_mode
              </span>
            </Button>
          </motion.div>
          <motion.div className="hidden md:flex items-center space-x-10 text-sm font-medium">
            {[
              "home",
              "about",
              "services",
              "projects",
              "skills",
              "education",
              "contact",
            ].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-primary transition-colors capitalize"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Header */}
      <header
        id="home"
        className="relative min-h-screen pt-20 flex items-center overflow-hidden"
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

            <motion.h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-8">
              {personal.role}
            </motion.h2>

            <motion.p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
              {personal.description}
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-6">
              <motion.a
                href="#"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
              <motion.div className="flex items-center gap-4">
                {[{ icon: "mail", href: social.email }, { icon: "badge", href: social.linkedin }].map((item, idx) => (
                  <motion.a
                    key={idx}
                    className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:bg-white/10 transition-colors"
                    href={item.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
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
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-tr from-primary via-pink-500 to-purple-800 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)]">
                <img
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                  src="https://i.ibb.co.com/Y5QLrwF/profile-Me.jpg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-slate-600 dark:text-slate-400 text-sm mb-2">
            Scroll to explore
          </span>
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
            arrow_downward
          </span>
        </motion.div>
      </header>
    </>
  );
}

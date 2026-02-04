import React from "react";
import { motion } from "framer-motion";

import { Button } from "../ui/button";
import { useTheme } from "../../context/ThemeContext";
import { config } from "../../data/config";

export default function Navbar({ scrollToSection }) {
  const { toggleTheme } = useTheme();
  const { personal } = config;

  return (
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
            {personal.name}
            <span className="text-primary">&lt;/&gt;</span>
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
  );
}

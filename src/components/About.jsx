import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";

export default function About({ onNavigate }) {
  const { isDark, toggleTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const skills = [
    {
      icon: "code",
      title: "Web Application Development",
      color: "primary",
      hoverColor: "hover:bg-primary",
    },
    {
      icon: "smartphone",
      title: "Mobile Application Development",
      color: "pink-500",
      hoverColor: "hover:bg-pink-500",
    },
    {
      icon: "psychology",
      title: "Problem Solving",
      color: "indigo-500",
      hoverColor: "hover:bg-indigo-500",
    },
  ];

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-background-light dark:bg-background-dark min-h-screen overflow-x-hidden">
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
              <motion.button
                onClick={() => onNavigate("portfolio")}
                className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors"
              >
                Meriem<span className="text-primary">&lt;/&gt;</span>
              </motion.button>
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
              <motion.button
                onClick={() => onNavigate("portfolio")}
                className="hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Home
              </motion.button>
              <motion.button
                className="text-primary font-semibold"
                whileHover={{ y: -2 }}
              >
                About
              </motion.button>
            </motion.div>
          </div>
        </motion.nav>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                linear-gradient(to right, rgba(168, 85, 247, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
              `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated Blobs */}
      <motion.div
        className="fixed -top-48 -left-48 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="fixed -bottom-48 -right-48 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      ></motion.div>

      {/* Dark Mode Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="material-symbols-outlined block dark:hidden">
          dark_mode
        </span>
        <span className="material-symbols-outlined hidden dark:block text-yellow-400">
          light_mode
        </span>
      </motion.button>

      {/* Main Content */}
      <motion.main
        className="relative z-10 container mx-auto px-6 py-20 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <motion.div
            className="h-1.5 w-20 bg-primary mx-auto rounded-full"
            layoutId="underline"
          ></motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
          variants={containerVariants}
        >
          {/* Profile Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-pink-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-tr from-primary via-pink-500 to-purple-800 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNdzs06ufEnfZk2A-wZ2RPb9n6o659bp4JWk7TO04AuANHve0x3uUJ1tLdj7eFzEo14CYtznZiGR-YLtCe_x9Nqii-M8WzkHiCsQeoTUP4O3T1UHpqHeuI2bp-3KHbnU2ogfMXFUZWApy3xN6ooonXBaipweZPAze7TIzG45eA5YTRGs0DjIQLCefRyP2cQf1Cy4ccobwrsfsOt6yTFN45k9XgQRxLkA6BnRSyShmanq8syhSuFySoNWPXLey59TdgPzKEVp9-YKc"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent">
                  I'm Meriem Benfekhadou
                </span>
              </h3>
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                <p>
                  Software Engineering Master's student at{" "}
                  <span className="font-semibold text-primary">USTHB</span> and
                  freelance web/mobile developer in Algiers.
                </p>
                <p>
                  I create tailored solutions using{" "}
                  <span className="text-primary font-medium">
                    Laravel, React, Flutter
                  </span>
                  , and more for startups and businesses looking to scale their
                  digital presence.
                </p>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-1 gap-4 max-w-lg"
              variants={containerVariants}
            >
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="glass-card p-5 flex items-center gap-5 rounded-2xl group/card cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-${skill.color}/10 flex items-center justify-center text-${skill.color} ${skill.hoverColor} group-hover/card:text-white transition-colors duration-300`}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="text-xl font-semibold tracking-wide">
                    {skill.title}
                  </span>
                  <motion.div
                    className={`ml-auto opacity-0 group-hover/card:opacity-100 transition-opacity text-${skill.color}`}
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div className="pt-4" variants={itemVariants}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-lg shadow-primary/25"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}

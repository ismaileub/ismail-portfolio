import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "../../data/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.6,
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("fullStack");
  const { projects } = config;

  const tabs = [
    { id: "fullStack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "others", label: "Others" },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 container mx-auto px-6 overflow-hidden"
    >
      <motion.div
        className="text-center mb-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 font-display"
          variants={itemVariants}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-4"
          variants={containerVariants}
        >
          {tabs?.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all relative ${
                activeTab === tab.id
                  ? "text-white"
                  : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -z-10 shadow-lg shadow-primary/25"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {projects[activeTab]?.map((project, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-5 rounded-3xl flex flex-col h-full group hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <motion.div
                className="rounded-2xl overflow-hidden mb-6 aspect-[16/10]"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  src={project.image}
                />
              </motion.div>

              {/* Description */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white py-3 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    code
                  </span>
                  Repository
                </motion.a>

                <motion.a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo
                  <span className="material-symbols-outlined text-[20px]">
                    play_circle
                  </span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

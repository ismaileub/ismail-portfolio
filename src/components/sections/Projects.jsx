import React, { useState } from "react";
import { motion } from "framer-motion";

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "E-commerce UI",
      description:
        "A clean, focused checkout UI for an e-commerce platform. Designed to reduce friction and maximize conversions through clear layout, validation, and trust-building elements.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDTC6Jyx1e_lumAX8CG3m6KH-RBaHABKLjCNgrNr-uOvTKaeoBdUfAEvvLTDsFhBPLL1sMoc3jPGQESdPykS3D-zKsc0Ew6vTznc4a7e8mC-JkU2Ffd389YMOUAFXnILwd63ws_6MxMRLT8GleaGLE_TwF2mGXFSm1hohC6E2WGulXGUMDu4-HGpulz7bn5fYW8TTLTaDNuKtNDIULADK53oDKy3SsAAmbKOKztXX9i8B3v638awdjysTm6B4bs5NPS4vJjNZGIDIE",
    },
    {
      title: "Dashboard UI",
      description:
        "Clinic management dashboard built for clarity and efficiency. Prioritizes quick access to patient data, appointment stats, and admin tools via clear layout and visual hierarchy.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBj6Wh_ch9vsYi7ZUsR-r-iOpmSfIsHdKibhfNiXc2l4ANLF-feezKzcUhYdCmRT7CgA0DbphaLgUlCHlvjfGIW_fWnw5XTUBfzHH5AAnvDYInXJbMHIqjab8ajXO7f6Kf7YnXQyDt0Yz9uGJJ0I_HfcZJOmLkZ2u9QuzXKUh1IHzHj1YYMdzDj-gE5nsLCzkHS2FwZNXOZMMMnA2NQQGiAHfkTepA6oQu3QA2qykgxcvgzz-N8s-VytCtyuVlRxijAfxSCMmzphyk",
    },
    {
      title: "Corporate Agri-food",
      description:
        "Corporate website for an Algerian agri-food distributor, focused on trust-building through clear structure, strong visuals, and intuitive navigation.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCJwovOM8FgTUnq_zLldyZfYZuaQuC1sjF4ZLJdSbReOAz1W1A1RHr6LAS9ihwNwF8S_mIM9UcfvKdUXwPqQ5VJLzJk0WXWwnxXLr0tAuvvuAnRFLnt_jFA5Cs5oDQSM2iio9mJ_L3HdmvSRndqPTYixTcmhFRjShBuKFzvnTnB0LcZDjQoPS4C_Utc0h37b-iol84s0PGFHhA4rLRtUD91lAkueYnYbTggkk48QV2iieFS_lbxEUCfDjN_lDvXAeUaXpwd6WtiNTk",
    },
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
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8"
          variants={itemVariants}
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-4"
          variants={containerVariants}
        >
          {["Web Application", "Mobile application"].map((category, idx) => (
            <motion.button
              key={idx}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                idx === 0
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-primary/25"
                  : "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-5 rounded-3xl flex flex-col h-full group hover:border-primary/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            {/* Project Image */}
            <motion.div className="rounded-2xl overflow-hidden mb-6 aspect-[16/10]" whileHover={{ scale: 1.05 }}>
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500"
                src={project.image}
              />
            </motion.div>

            {/* Description */}
            <div className="flex-grow">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white py-3 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Repository
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Demo
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

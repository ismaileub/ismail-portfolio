import React from "react";
import { motion } from "framer-motion";
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

export default function Services() {
  const { services } = config;

  return (
    <section
      id="services"
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
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          variants={itemVariants}
        >
          <span className="text-primary">Services</span>
        </motion.h2>
        <motion.div
          className="h-1.5 w-20 bg-primary mx-auto rounded-full"
          variants={itemVariants}
        ></motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className={`mb-8 relative ${service.colorCode}`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span
                className={`material-symbols-outlined !text-6xl ${service.colorCode} drop-shadow-[0_0_15px_rgba(${
                  service.color === "orange"
                    ? "249,115,22"
                    : service.color === "green"
                      ? "34,197,94"
                      : service.color === "pink"
                        ? "236,72,153"
                        : "20,184,166"
                },0.4)]`}
                style={{ fontSize: "60px" }}
              >
                {service.icon}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className={`text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:${service.colorCode} transition-colors`}
              whileHover={{ color: service.colorCode }}
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

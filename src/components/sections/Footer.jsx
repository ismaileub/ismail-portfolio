import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Footer = () => {
  return (
    <div>
      <motion.footer
        className="relative w-full border-t border-primary/30 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Glowing separator line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[1px] bg-primary shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left: Navigation Links */}
            <motion.div
              className="flex flex-col gap-4 order-2 md:order-1 items-center md:items-start"
              variants={itemVariants}
            >
              <h5 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                Navigation
              </h5>
              <nav className="flex flex-col gap-3">
                {["Home", "About", "Projects", "Contact"].map((link, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() =>
                      scrollToSection && scrollToSection(link.toLowerCase())
                    }
                    className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-all hover:shadow-[0_0_8px_rgba(168,85,247,0.8)] w-fit"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Center: Branding & Copyright */}
            <motion.div
              className="flex flex-col items-center justify-center gap-6 order-1 md:order-2"
              variants={itemVariants}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                  ISMAIL&lt;/&gt;
                </h4>
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/20 rounded-full"
                  animate={{ width: [32, 48, 32] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </motion.div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-slate-600 dark:text-slate-400 text-xs font-normal text-center max-w-[200px] leading-relaxed">
                  Crafting digital experiences with precision and passion.
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-[10px] font-medium uppercase tracking-tighter mt-4">
                  © 2024 Meriem Benfekhadou. All rights reserved.
                </p>
              </div>
            </motion.div>

            {/* Right: Tech Stack & Social */}
            <motion.div
              className="flex flex-col gap-6 order-3 items-center md:items-end"
              variants={itemVariants}
            >
              {/* Tech Stack */}
              <motion.div
                className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 transition-all hover:border-primary/40 group"
                whileHover={{ borderColor: "rgba(168, 85, 247, 0.4)" }}
              >
                <div className="flex flex-col items-center md:items-end gap-3">
                  <p className="text-slate-600 dark:text-slate-400 text-xs font-medium tracking-wide">
                    Built with modern tech
                  </p>
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="material-symbols-outlined text-xl">
                        atm
                      </span>
                      <span className="text-[11px] font-bold">REACT</span>
                    </motion.div>
                    <div className="w-[1px] h-4 bg-slate-300 dark:bg-white/10"></div>
                    <motion.div
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="material-symbols-outlined text-xl">
                        palette
                      </span>
                      <span className="text-[11px] font-bold">TAILWIND</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Social Icons */}
              <motion.div className="flex gap-4" variants={containerVariants}>
                {[
                  { icon: "code", label: "GitHub" },
                  { icon: "terminal", label: "Terminal" },
                  { icon: "alternate_email", label: "Email" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;

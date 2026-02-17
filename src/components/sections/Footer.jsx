import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "https://facebook.com",
    color: "#1877F2",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com",
    color: "#000000",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com",
    color: "linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4)",
    isGradient: true,
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com",
    color: "#0A66C2",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com",
    color: "#181717",
  },
  {
    icon: <FaDiscord />,
    link: "https://discord.com",
    color: "#5865F2",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-primary/30 mt-20">
      {/* Glowing separator line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-primary shadow-[0_0_15px_rgba(168,85,247,0.4)]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Email & Contact */}
          <motion.div
            className="flex flex-col gap-3 items-center md:items-start"
            variants={itemVariants}
          >
            <h5 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Contact
            </h5>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
              Email:{" "}
              <a
                href="mailto:ismail301515@gmail.com"
                className="hover:text-primary"
              >
                ismail301515@gmail.com
              </a>
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-xs">
              Available for freelance projects & collaborations.
            </p>
          </motion.div>

          {/* Center: Branding */}
          <motion.div
            className="flex flex-col items-center justify-center gap-6"
            variants={itemVariants}
          >
            <motion.div className="relative group" whileHover={{ scale: 1.05 }}>
              <h4 className="text-3xl font-bold leading-none tracking-tight bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                ISMAIL&lt;/&gt;
              </h4>
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/20 rounded-full"
                animate={{ width: [32, 48, 32] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <p className="text-slate-600 dark:text-slate-400 text-xs font-normal text-center max-w-[220px] leading-relaxed">
              Crafting digital experiences with precision and passion.
            </p>

            <p className="text-slate-500 dark:text-slate-500 text-[10px] font-medium uppercase tracking-tighter mt-4 text-center">
              © 2026 Ismail Hossain
            </p>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            className="flex flex-col gap-6 items-center md:items-end"
            variants={itemVariants}
          >
            <h5 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Connect with me
            </h5>

            <motion.div
              className="flex gap-4 flex-wrap justify-center md:justify-end"
              variants={containerVariants}
            >
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-slate-200 dark:bg-white/5 
      text-slate-600 dark:text-slate-400
      transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.25,
                    y: -6,
                    background: social.isGradient ? social.color : social.color,
                    color: social.isGradient ? "#fff" : "#fff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "transparent",
                  }}
                >
                  {social.icon}
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
        />
      </div>
    </footer>
  );
};

export default Footer;

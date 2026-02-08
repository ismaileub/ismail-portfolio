import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  TbCode,
  TbCertificate,
  TbUserCode,
  TbDevices,
  TbRocket,
  TbArrowRight,
  TbArrowUpRight,
} from "react-icons/tb";

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const focusAreas = [
    {
      icon: <TbCode className="text-2xl" />,
      title: "Clean Architecture",
      desc: "Scalable & maintainable codebases.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <TbDevices className="text-2xl" />,
      title: "Responsive Design",
      desc: "Pixel-perfect across all screen sizes.",
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      icon: <TbUserCode className="text-2xl" />,
      title: "Modern UI/UX",
      desc: "Engaging & intuitive user journeys.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: <TbRocket className="text-2xl" />,
      title: "Performance Focus",
      desc: "Lightning fast load times & transitions.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle floating animation for the profile container
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Mouse tilt effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } =
          containerRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(imageRef.current, {
          rotateY: x * 15,
          rotateX: -y * 15,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      containerRef.current?.addEventListener("mousemove", handleMouseMove);
      return () =>
        containerRef.current?.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="relative py-10 lg:py-20 px-4 overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-bold text-slate-200/5 dark:text-white/5 pointer-events-none select-none z-0">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 font-display neon-text text-slate-900 dark:text-white"
          >
            Personal Odyssey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-[#bc9ab3] text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Beyond the backticks and brackets, I am a developer dedicated to
            merging aesthetic design with high-performance engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Profile Section (Left) */}
          <div className="relative flex justify-center">
            <div ref={imageRef} className="relative transition-transform-gpu">
              {/* Main Image Frame */}
              <div className="relative w-72 h-80 md:w-96 md:h-[450px] rounded-3xl overflow-hidden glass-card p-2 border border-white/20 shadow-2xl skew-y-1 rotate-1 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-500 z-10" />
                <img
                  alt="Ismail Hossain"
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
                  src="https://res.cloudinary.com/duiwtyjee/image/upload/v1769528300/488641707_18043093400605035_800053857556079585_n_bfaitq.jpg"
                />

                {/* Info Overlay */}
                <div className="absolute bottom-10 left-6 right-6 z-20 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm font-medium tracking-widest uppercase opacity-80 mb-1">
                    Ismail Hossain
                  </p>
                  <p className="text-xl font-bold">MERN Stack Innovator</p>
                </div>
              </div>

              {/* Floating Element: Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 md:-right-10 glass-card p-4 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <TbCertificate className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-tighter text-slate-500 dark:text-slate-400 font-bold">
                      Degree
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      B.Sc in CSE
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element: Project Count */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 md:-left-10 glass-card p-4 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md z-30"
              >
                {/* <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <TbRocket className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-tighter text-slate-500 dark:text-slate-400 font-bold">
                      Experience
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      2+ Years
                    </p>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </div>

          {/* Text Section (Right) */}
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold"
              >
                <span className="text-slate-900 dark:text-white">
                  Crafting Digital{" "}
                </span>
                <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
                  Masterpieces
                </span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
              >
                <p>
                  I'm a Full Stack Developer currently pursuing my Computer
                  Science degree at the{" "}
                  <span className="font-bold text-slate-900 dark:text-white border-b-2 border-primary/30">
                    European University of Bangladesh
                  </span>
                  . My journey is fueled by a passion for solving complex
                  problems through code.
                </p>
                <p>
                  Specializing in the{" "}
                  <span className="text-primary font-bold">MERN Stack</span>, I
                  build applications that aren't just functional, but are built
                  for scale and speed. I believe every pixel has a purpose.
                </p>
              </motion.div>
            </div>

            {/* Focus Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="group glass-card p-5 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-[10px] bg-white dark:bg-[#0a0a0a] flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-transparent transition-colors">
                      {area.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {area.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                    {area.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl overflow-hidden transition-all hover:pr-12 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 transition-all group-hover:text-white">
                  Get Full CV
                </span>
                <TbArrowUpRight className="relative z-10 text-xl group-hover:translate-x-4 transition-transform duration-300 group-hover:text-white" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

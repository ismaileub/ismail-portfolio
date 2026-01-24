import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const primaryColor = ""; // Magenta primary from the design

  return (
    <section id="skills" className="relative py-20 lg:py-32 px-4 lg:px-40 overflow-hidden transition-colors duration-300">
      {/* Light Leaks Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] light-leak pointer-events-none opacity-50 dark:opacity-100"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] light-leak pointer-events-none opacity-50 dark:opacity-100"></div>

      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display neon-text text-slate-900 dark:text-white">
            Technical Arsenal
          </h1>
          <p className="text-slate-600 dark:text-[#bc9ab3] text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Crafting high-performance digital experiences with a modern full-stack
            toolkit. Focused on scalability, speed, and sleek UI.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
          {/* Frontend Block (8 columns) */}
          <div className="lg:col-span-8 glass-card rounded-2xl p-8 flex flex-col border border-primary/10 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] bg-white/50 dark:bg-[rgba(255,0,191,0.03)] backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-[#ff00bf] text-3xl">brush</span>
              <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Frontend Development</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Skill Tile: React */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#ff00bf] text-3xl transition-transform group-hover:scale-110">atm</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">Advanced</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">React</h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* Skill Tile: TypeScript */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#ff00bf] text-3xl transition-transform group-hover:scale-110">code</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">Expert</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">TypeScript</h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* Skill Tile: Next.js */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#ff00bf] text-3xl transition-transform group-hover:scale-110">layers</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">Advanced</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Next.js</h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* Skill Tile: Tailwind */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#ff00bf] text-3xl transition-transform group-hover:scale-110">palette</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">Expert</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Tailwind CSS</h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* Skill Tile: Framer Motion */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#ff00bf] text-3xl transition-transform group-hover:scale-110">motion_mode</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">Intermediate</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Framer Motion</h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* Skill Tile: Three.js */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[#ff00bf] text-3xl transition-transform group-hover:scale-110">view_in_ar</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">Learning</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Three.js</h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Block (4 columns) */}
          <div className="lg:col-span-4 glass-card rounded-2xl p-8 flex flex-col border border-primary/10 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] bg-white/50 dark:bg-[rgba(255,0,191,0.03)] backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-[#ff00bf] text-3xl">database</span>
              <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Backend</h2>
            </div>
            <div className="flex flex-col gap-5">
              {/* Node.js */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <span className="material-symbols-outlined text-[#ff00bf]">javascript</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">Node.js</span>
                    <span className="text-xs text-[#ff00bf] font-bold">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* PostgreSQL */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <span className="material-symbols-outlined text-[#ff00bf]">storage</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">PostgreSQL</span>
                    <span className="text-xs text-[#ff00bf] font-bold">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* MongoDB */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <span className="material-symbols-outlined text-[#ff00bf]">table_rows</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">MongoDB</span>
                    <span className="text-xs text-[#ff00bf] font-bold">80%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              {/* GraphQL */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <span className="material-symbols-outlined text-[#ff00bf]">hub</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">GraphQL</span>
                    <span className="text-xs text-[#ff00bf] font-bold">75%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Cloud (Full Width Bottom or 2/3) */}
          <div className="lg:col-span-12 glass-card rounded-2xl p-8 mt-2 border border-primary/10 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] bg-white/50 dark:bg-[rgba(255,0,191,0.03)] backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-[#ff00bf] text-3xl">construction</span>
              <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Tools &amp; Ecosystem</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Docker */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-primary/5 dark:border-white/5 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                <span className="material-symbols-outlined text-[#ff00bf] text-4xl">box</span>
                <span className="text-slate-900 dark:text-white font-medium">Docker</span>
              </div>
              {/* Git */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-primary/5 dark:border-white/5 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                <span className="material-symbols-outlined text-[#ff00bf] text-4xl">account_tree</span>
                <span className="text-slate-900 dark:text-white font-medium">Git / GitHub</span>
              </div>
              {/* AWS */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-primary/5 dark:border-white/5 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                <span className="material-symbols-outlined text-[#ff00bf] text-4xl">cloud</span>
                <span className="text-slate-900 dark:text-white font-medium">AWS</span>
              </div>
              {/* Figma */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-primary/5 dark:border-white/5 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                <span className="material-symbols-outlined text-[#ff00bf] text-4xl">draw</span>
                <span className="text-slate-900 dark:text-white font-medium">Figma</span>
              </div>
              {/* Jest */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-primary/5 dark:border-white/5 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                <span className="material-symbols-outlined text-[#ff00bf] text-4xl">check_circle</span>
                <span className="text-slate-900 dark:text-white font-medium">Jest</span>
              </div>
              {/* CI/CD */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-primary/5 dark:border-white/5 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
                <span className="material-symbols-outlined text-[#ff00bf] text-4xl">refresh</span>
                <span className="text-slate-900 dark:text-white font-medium">CI/CD</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#ff00bf]/10 border border-[#ff00bf]/30 p-12 text-center group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff00bf]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4 relative z-10">Ready to build something extraordinary?</h2>
          <p className="text-slate-600 dark:text-[#bc9ab3] mb-8 max-w-xl mx-auto relative z-10 text-lg">I'm currently available for freelance work and full-time opportunities. Let's talk about your next project.</p>
          <button className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff00bf] rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,191,0.5)] text-white">
            <span>Get in Touch</span>
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </section>
  );
}

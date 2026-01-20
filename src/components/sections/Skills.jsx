import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-32 px-4 lg:px-40">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-white tracking-tight text-5xl md:text-6xl font-bold leading-tight pb-4 neon-text">
          Technical Arsenal
        </h1>
        <p className="text-[#bc9ab3] text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Crafting high-performance digital experiences with a modern full-stack
          toolkit. Focused on scalability, speed, and sleek UI.
        </p>
      </div>

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
        {/* Frontend Block (8 columns) */}
        <div className="lg:col-span-8 glass-card rounded-2xl p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">
              brush
            </span>
            <h2 className="text-white text-2xl font-bold tracking-tight">
              Frontend Development
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "React", level: 90, icon: "atm", badge: "Advanced" },
              { name: "TypeScript", level: 95, icon: "code", badge: "Expert" },
              { name: "Next.js", level: 85, icon: "layers", badge: "Advanced" },
              {
                name: "Tailwind CSS",
                level: 98,
                icon: "palette",
                badge: "Expert",
              },
              {
                name: "Framer Motion",
                level: 70,
                icon: "motion_mode",
                badge: "Intermediate",
              },
              {
                name: "Three.js",
                level: 40,
                icon: "view_in_ar",
                badge: "Learning",
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="group flex flex-col gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold px-2 py-1 rounded bg-primary/10">
                    {skill.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{skill.name}</h3>
                  <div className="w-full bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Block (4 columns) */}
        <div className="lg:col-span-4 glass-card rounded-2xl p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">
              database
            </span>
            <h2 className="text-white text-2xl font-bold tracking-tight">
              Backend
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { name: "Node.js", level: 85, icon: "javascript" },
              { name: "PostgreSQL", level: 90, icon: "storage" },
              { name: "MongoDB", level: 80, icon: "table_rows" },
              { name: "GraphQL", level: 75, icon: "hub" },
            ].map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="size-12 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <span className="material-symbols-outlined text-primary">
                    {skill.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-bold">{skill.name}</span>
                    <span className="text-xs text-primary font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-primary h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Cloud (Full Width) */}
        <div className="lg:col-span-12 glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">
              construction
            </span>
            <h2 className="text-white text-2xl font-bold tracking-tight">
              Tools & Ecosystem
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Docker", icon: "box" },
              { name: "Git / GitHub", icon: "account_tree" },
              { name: "AWS", icon: "cloud" },
              { name: "Figma", icon: "draw" },
              { name: "Jest", icon: "check_circle" },
              { name: "CI/CD", icon: "refresh" },
            ].map((tool, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-primary text-4xl">
                  {tool.icon}
                </span>
                <span className="text-white font-medium text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-primary/10 border border-primary/30 p-12 text-center group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <h2 className="text-white text-3xl font-bold mb-4 relative z-10">
          Ready to build something extraordinary?
        </h2>
        <p className="text-[#bc9ab3] mb-8 max-w-xl mx-auto relative z-10 text-lg">
          I'm currently available for freelance work and full-time
          opportunities. Let's talk about your next project.
        </p>
        <motion.button
          className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,191,0.5)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get in Touch</span>
          <span className="material-symbols-outlined">send</span>
        </motion.button>
      </div>
    </section>
  );
}

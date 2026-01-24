import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      status: "Current Pursuit",
      degree: "Master’s in Software Engineering",
      school: "USTHB",
      year: "2022 — Present",
      icon: "school",
      focusTitle: "Key Focus Areas",
      focus: [
        "Distributed Systems",
        "Advanced Web Architecture",
        "Cloud Computing",
      ],
      description:
        "Focusing on scalable backend infrastructures and microservices. Researching decentralized data management strategies.",
    },
    {
      status: "Graduated",
      degree: "Bachelor’s in Computer Science",
      school: "University of Computer Science",
      year: "2019 — 2022",
      icon: "workspace_premium",
      focusTitle: "Core Curriculum",
      focus: [
        "Algorithms & Data Structures",
        "Database Management",
        "UI/UX Design",
      ],
      description:
        "Graduated with Honors. Developed an AI-driven project management tool as a capstone project.",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 blur-[100px] rounded-full" />
          <h2 className="text-slate-900 dark:text-white tracking-tighter text-5xl md:text-7xl font-bold font-display">
            Academic <span className="text-primary italic">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-white/50 text-lg tracking-widest uppercase mt-3">
            Building the foundation of innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-[60px_1fr] gap-x-10 px-4 md:px-10">
          {/* Vertical Line */}
          <div className="absolute left-[34px] md:left-[74px] top-0 bottom-0 timeline-line bg-slate-200 dark:bg-white/10 w-0.5" />

          {education.map((edu, index) => (
            <React.Fragment key={index}>
              {/* Timeline Dot */}
              <div className="flex flex-col items-center pt-8 z-10">
                <div className="size-6 rounded-full bg-primary neon-glow ring-8 ring-primary/10 dark:ring-primary/20" />
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-1 flex-col py-4"
              >
                <div className="glass-card p-6 md:p-8 rounded-2xl group hover:border-primary/50 transition-all duration-500 bg-white/50 dark:bg-white/5 border-primary/10 dark:border-white/10 shadow-lg dark:shadow-none">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                        {edu.status}
                      </span>

                      <h3 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold">
                        {edu.degree}
                      </h3>

                      <p className="text-primary/90 dark:text-primary/80 text-lg font-medium">
                        {edu.school} | {edu.year}
                      </p>
                    </div>

                    <span className="material-symbols-outlined text-primary/40 text-4xl group-hover:scale-110 transition-transform">
                      {edu.icon}
                    </span>
                  </div>

                  <div className="h-px w-full bg-slate-200 dark:bg-white/10 my-6" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Focus */}
                    <div className="space-y-3">
                      <h4 className="text-slate-800 dark:text-white/90 font-bold uppercase text-xs tracking-widest">
                        {edu.focusTitle}
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {edu.focus.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 text-sm text-slate-700 dark:text-white/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <h4 className="text-slate-800 dark:text-white/90 font-bold uppercase text-xs tracking-widest">
                        Highlights
                      </h4>
                      <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

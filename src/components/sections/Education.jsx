import React from "react";
import { motion } from "framer-motion";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "../../public/lottie/study.json";

export default function Education() {
  const education = [
    {
      status: "Current Pursuit",
      degree: "BSc in Computer Science & Engineering",
      school: "European University of Bangladesh",
      year: "2023 — Present",
      icon: "school",
    },
    {
      status: "Graduated",
      degree: "HSC (Science)",
      school: "Chatkhil Panchgaon Mahbub Govt. College",
      year: "2020 — 2022",
      icon: "workspace_premium",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-10  transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-10 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/10 blur-[100px] rounded-full" />
          <h2 className="text-slate-900 dark:text-white tracking-tighter text-5xl md:text-7xl font-bold font-display">
            Academic <span className="text-primary italic">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-white/50 text-lg tracking-widest uppercase mt-3">
            Building the foundation of innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Timeline Cards */}
          <div className="relative w-full lg:w-2/3 px-4 md:px-10">
            {/* Vertical Line */}
            <div className="absolute left-7 md:left-14 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10" />

            <div className="grid grid-cols-[auto_1fr] gap-x-6">
              {education.map((edu, index) => (
                <React.Fragment key={index}>
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center pt-8 z-10">
                    <div className="w-6 h-6 rounded-full bg-primary neon-glow ring-8 ring-primary/10 dark:ring-primary/20" />
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-1 flex-col py-4"
                  >
                    <div className="glass-card p-6 md:p-8 rounded-2xl group border border-primary/20 dark:border-primary/30 bg-white/10 dark:bg-white/5/40 shadow-[0_0_25px_rgba(129,140,248,0.4)] hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] transition-all duration-500 backdrop-blur-xl">
                      <div className="flex flex-no-wrap justify-between items-start gap-4 mb-4">
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
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent my-6" />
                    </div>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Lottie Animation - floating card */}
          <div className="w-full lg:w-1/3 flex justify-center mb-10 lg:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-sky-500/10 shadow-[0_0_50px_rgba(56,189,248,0.45)] backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden ">
              <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_transparent_55%)] opacity-60" />
              <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

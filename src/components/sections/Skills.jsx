import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { skillsData } from "../../data/skills";
import { skillsImage } from "../../utils/skillImage";
import { FaReact, FaNodeJs, FaDatabase, FaPalette } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiSass,
  SiGithub,
  SiJavascript,
  SiGreensock,
  SiRender,
  SiReactquery,
  SiMongoose,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { AntigravityIcon } from "../../utils/Antigravity";

export default function Skills() {
  const primaryColor = ""; // Magenta primary from the design

  const skillToIcon = {
    GSAP: <SiGreensock className="text-[#88ce02] text-3xl" />,
    Github: <SiGithub className="text-white text-3xl" />,

    Vercel: <SiVercel className="text-white text-3xl" />,
    Netlify: <SiNetlify className="text-[#00C7B7] text-3xl" />,
    Postman: <SiPostman className="text-[#FF6C37] text-3xl" />,

    Redux: <SiRedux className="text-[#764ABC] text-3xl" />,
    Sass: <SiSass className="text-[#CC6699] text-3xl" />,
    "Framer Motion": <SiFramer className="text-white text-3xl" />,
    Render: <SiRender className="text-white text-3xl" />,
    "TanStack Query": <SiReactquery className="text-[#FF4154] text-3xl" />,
    Mongoose: <SiMongoose className="text-[#880000] text-3xl" />,
    VSCode: <TbBrandVscode className="text-[#007ACC] text-3xl" />,
    Antigravity: <AntigravityIcon />,
  };

  return (
    <section
      id="skills"
      className="relative  mx-auto py-6 lg:py-12 px-4   overflow-hidden transition-colors duration-300"
    >
      {/* Light Leaks Background Elements */}

      <div className=" relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display neon-text text-slate-900 dark:text-white">
            Technical Arsenal
          </h1>
          <p className="text-slate-600 dark:text-[#bc9ab3] text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Crafting high-performance digital experiences with a modern
            full-stack toolkit. Focused on scalability, speed, and sleek UI.
          </p>
        </div>

        {/* Skills Bento Grid */}

        <div className=" max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 pb-5">
          {/* Frontend Block (8 columns) */}
          <div className="lg:col-span-8 glass-card rounded-2xl p-8 flex flex-col border border-primary/10 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] bg-white/50 dark:bg-[rgba(255,0,191,0.03)] backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <FaReact className="text-[#ff00bf] text-3xl" />
              <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">
                Frontend Development
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* React */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <FaReact className="text-[#61DBFB] text-3xl transition-transform group-hover:scale-110" />
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">
                    Advanced
                  </span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                    React
                  </h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
              {/* js */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <SiJavascript className="text-[#F7DF1E] text-3xl transition-transform group-hover:scale-110" />
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">
                    Expert
                  </span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                    Javascript
                  </h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* TypeScript */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <SiTypescript className="text-[#3178C6] text-3xl transition-transform group-hover:scale-110" />
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">
                    Expert
                  </span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                    TypeScript
                  </h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* Next.js */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <SiNextdotjs className="text-[#000000] text-3xl transition-transform group-hover:scale-110" />
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">
                    Advanced
                  </span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                    Next.js
                  </h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <SiTailwindcss className="text-[#06B6D4] text-3xl transition-transform group-hover:scale-110" />
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">
                    Expert
                  </span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                    Tailwind CSS
                  </h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* Framer Motion */}
              {/* <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <SiFramer className="text-[#0055FF] text-3xl transition-transform group-hover:scale-110" />
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">
                    Intermediate
                  </span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                    Framer Motion
                  </h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div> */}

              {/* Redux */}
              <div className="group flex flex-col gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 hover:border-[#ff00bf]/40 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between">
                  <SiRedux className="text-[#764ABC] text-3xl transition-transform group-hover:scale-110" />
                  <span className="text-[10px] uppercase tracking-widest text-[#ff00bf] font-bold px-2 py-1 rounded bg-[#ff00bf]/10">
                    Advanced
                  </span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                    Redux Toolkit
                  </h3>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff00bf] to-pink-400 h-full shadow-[0_0_8px_rgba(255,0,191,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* Javascript */}
            </div>
          </div>

          {/* Backend Block (4 columns) */}
          <div className="lg:col-span-4 glass-card rounded-2xl p-8 flex flex-col border border-primary/10 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] bg-white/50 dark:bg-[rgba(255,0,191,0.03)] backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <FaDatabase className="text-[#ff00bf] text-3xl" />
              <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">
                Backend
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              {/* Node.js */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <FaNodeJs className="text-[#339933] text-2xl transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">
                      Node.js
                    </span>
                    <span className="text-xs text-[#ff00bf] font-bold">
                      85%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* Express.js */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <SiExpress className="text-white text-2xl transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">
                      Express.js
                    </span>
                    <span className="text-xs text-[#ff00bf] font-bold">
                      85%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* PostgreSQL */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <SiPostgresql className="text-[#336791] text-2xl transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">
                      PostgreSQL
                    </span>
                    <span className="text-xs text-[#ff00bf] font-bold">
                      90%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* MongoDB */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <SiMongodb className="text-[#47A248] text-3xl transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">
                      MongoDB
                    </span>
                    <span className="text-xs text-[#ff00bf] font-bold">
                      80%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>

              {/* GraphQL */}
              {/* <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-primary/5 dark:border-white/10 shadow-sm dark:shadow-none">
                <div className="size-12 flex items-center justify-center rounded-lg bg-[#ff00bf]/10 border border-[#ff00bf]/20">
                  <SiGraphql className="text-[#E10098] text-3xl transition-transform group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-900 dark:text-white font-bold">
                      GraphQL
                    </span>
                    <span className="text-xs text-[#ff00bf] font-bold">
                      75%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-white/10 h-1 rounded-full">
                    <motion.div
                      className="bg-[#ff00bf] h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="relative w-full rounded-2xl overflow-hidden bg-[#ff00bf]/10 border border-[#ff00bf]/30 p-12 text-center group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff00bf]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4 relative z-10">
            Ready to build something extraordinary?
          </h2>
          <p className="text-slate-600 dark:text-[#bc9ab3] mb-8 max-w-xl mx-auto relative z-10 text-lg">
            I'm currently available for freelance work and full-time
            opportunities. Let's talk about your next project.
          </p>
          <button className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff00bf] rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,191,0.5)] text-white">
            <span>Get in Touch</span>
            <span className="material-symbols-outlined">send</span>
          </button>
        </div> */}

        <div className="relative z-10 border-t my-4 lg:my-12 border-[#25213b]">
          {/* glow */}
          <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 blur-3xl opacity-20"></div>

          {/* top divider */}
          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-full">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
            </div>
          </div>

          {/* title */}
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ff00bf] text-4xl">
                construction
              </span>
              <h2 className="text-slate-900 dark:text-white text-2xl md:text-4xl font-bold tracking-tight">
                Tools &amp; Ecosystem
              </h2>
            </div>
          </div>

          {/* marquee - line 1 */}
          <div className="w-full my-4">
            <Marquee gradient={false} speed={60} direction="left" pauseOnHover>
              {skillsData
                .slice(0, Math.ceil(skillsData.length / 2))
                .map((skill, id) => (
                  <div
                    key={id}
                    className="w-36 min-w-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                  >
                    <div className="w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-all duration-500">
                      <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-full">
                          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-3 p-6">
                        <div className="h-8 sm:h-10 flex items-center justify-center">
                          {skillsImage(skill) ? (
                            <img
                              src={skillsImage(skill)}
                              alt={skill}
                              className="h-full w-auto"
                            />
                          ) : (
                            skillToIcon[skill] || (
                              <span className="material-symbols-outlined text-white">
                                code
                              </span>
                            )
                          )}
                        </div>
                        <p className="text-white text-sm sm:text-lg">{skill}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </Marquee>
          </div>

          {/* marquee - line 2 */}
          <div className="w-full my-4">
            <Marquee gradient={false} speed={60} direction="right" pauseOnHover>
              {skillsData
                .slice(Math.ceil(skillsData.length / 2))
                .map((skill, id) => (
                  <div
                    key={id}
                    className="w-36 min-w-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                  >
                    <div className="w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-all duration-500">
                      <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-full">
                          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-3 p-6">
                        <div className="h-8 sm:h-10 flex items-center justify-center">
                          {skillsImage(skill) ? (
                            <img
                              src={skillsImage(skill)}
                              alt={skill}
                              className="h-full w-auto"
                            />
                          ) : (
                            skillToIcon[skill] || (
                              <span className="material-symbols-outlined text-white">
                                code
                              </span>
                            )
                          )}
                        </div>
                        <p className="text-white text-sm sm:text-lg">{skill}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </Marquee>
          </div>

          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-full">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

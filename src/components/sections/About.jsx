import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { icon: "code", title: "Web Application Development", color: "primary" },
    {
      icon: "smartphone",
      title: "Mobile Application Development",
      color: "pink-500",
    },
    { icon: "psychology", title: "Problem Solving", color: "indigo-500" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 px-4 lg:px-40 container mx-auto"
    >
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
        {/* Profile Image */}
        <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative group">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-pink-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-tr from-primary via-pink-500 to-purple-800 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                src="https://instagram.fdac198-2.fna.fbcdn.net/v/t51.75761-15/488641707_18043093400605035_800053857556079585_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzYwNDc2NzAyMDI1Mzk5NTI4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjg2NHg4NjQuc2RyLkMzIn0%3D&_nc_ohc=Xk_lmfyKnCUQ7kNvwEmMPE4&_nc_oc=AdmB4NbrZ-Y0G4EYZ5mMaKER9kVobFHgWGDsL94YGFJEind6i-pYXrLEnRAc58oQvC0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fdac198-2.fna&_nc_gid=Lk8VgZc_oou_LODrPMxHhg&oh=00_AfprLoigIPjlAvtxYyAJI7oDailau6sU2wQXFYE59Dc3Fw&oe=69754068"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent">
                I'm Ismail Hossain
              </span>
            </h3>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              <p>
                Software Engineering Master's student at
                <span className="font-semibold text-primary"> USTHB</span> and
                freelance web/mobile developer in Algiers.
              </p>
              <p>
                I create tailored solutions using
                <span className="text-primary font-medium">
                  {" "}
                  Laravel, React, Flutter
                </span>
                , and more for startups and businesses looking to scale their
                digital presence.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-4 max-w-lg">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-5 flex items-center gap-5 rounded-2xl group/card cursor-pointer"
                whileHover={{ x: 8 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${skill.color}/10 flex items-center justify-center text-${skill.color} hover:bg-${skill.color} group-hover/card:text-white transition-colors duration-300`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {skill.icon}
                  </span>
                </div>
                <span className="text-xl font-semibold tracking-wide">
                  {skill.title}
                </span>
                <motion.div
                  className={`ml-auto opacity-0 group-hover/card:opacity-100 transition-opacity text-${skill.color}`}
                >
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <motion.a
              href="#"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

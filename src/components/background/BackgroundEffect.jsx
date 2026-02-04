// import React from "react";
// import {
//   FaReact,
//   FaNodeJs,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
//   FaFigma,
//   FaFire,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiExpress,
//   SiMongodb,
//   SiFirebase,
//   SiVercel,
//   SiTypescript,
//   SiPostgresql,
// } from "react-icons/si";

// // Enhanced Floating Background with Glassmorphism
// const BackgroundEffect = () => {
//   // Tech icons for dark/light mode with adjusted opacity
//   const techIconsDark = [
//     { icon: <FaReact className="text-cyan-400" />, name: "React" },
//     { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
//     { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
//     { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
//     { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
//     { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
//     { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
//     { icon: <SiExpress className="text-gray-300" />, name: "Express" },
//     { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
//     { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
//     { icon: <FaFigma className="text-purple-500" />, name: "Figma" },
//     { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
//     { icon: <SiVercel className="text-white" />, name: "Vercel" },
//     { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
//     { icon: <SiPostgresql className="text-indigo-300" />, name: "PostgreSQL" },
//   ];

//   const techIconsLight = [
//     { icon: <FaReact className="text-cyan-600" />, name: "React" },
//     { icon: <SiNextdotjs className="text-gray-900" />, name: "Next.js" },
//     { icon: <FaJs className="text-yellow-600" />, name: "JavaScript" },
//     { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
//     { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
//     { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" },
//     { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
//     { icon: <SiExpress className="text-gray-700" />, name: "Express" },
//     { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
//     { icon: <FaGitAlt className="text-orange-700" />, name: "Git" },
//     { icon: <FaFigma className="text-purple-600" />, name: "Figma" },
//     { icon: <FaFire className="text-red-500" />, name: "Firebase" },
//     { icon: <SiVercel className="text-gray-900" />, name: "Vercel" },
//     { icon: <SiTypescript className="text-blue-700" />, name: "TypeScript" },
//     { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
//   ];

//   return (
//     <>
//       {/* Light Mode Background */}
//       <div className="fixed inset-0 z-0 overflow-hidden dark:hidden">
//         {/* Light mode gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/90 to-purple-50/90"></div>

//         {/* Light mode subtle pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//           }}
//         ></div>

//         {/* Floating tech icons - Light mode - Reduced opacity and better movement */}
//         {techIconsLight.map((tech, i) => (
//           <div
//             key={`light-${tech.name}-${i}`}
//             className="absolute flex items-center justify-center"
//             style={{
//               top: `${20 + ((i * 6) % 65)}%`,
//               left: `${10 + ((i * 12) % 82)}%`,
//               animation: `tech-float-light ${18 + i * 3}s ease-in-out infinite`,
//               animationDelay: `${i * 0.5}s`,
//               opacity: 0.15 + Math.random() * 0.1,
//               transform: `rotate(${i % 2 === 0 ? "5deg" : "-5deg"})`,
//             }}
//           >
//             <div className="text-3xl opacity-75">{tech.icon}</div>
//           </div>
//         ))}

//         {/* Subtle moving lines - Light */}
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div
//             key={`light-line-${i}`}
//             className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-300/10 to-transparent"
//             style={{
//               top: `${15 + i * 14}%`,
//               left: "-10%",
//               width: "120%",
//               animation: `line-move-light ${15 + i * 3}s linear infinite`,
//               animationDelay: `${i * 1}s`,
//               opacity: 0.05,
//             }}
//           />
//         ))}

//         {/* Moving dots pattern - Light */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 0.5px, transparent 0.5px)`,
//             backgroundSize: "40px 40px",
//             opacity: 0.03,
//             animation: "grid-move-light 20s linear infinite",
//           }}
//         ></div>
//       </div>

//       {/* Dark Mode Background */}
//       <div className="fixed inset-0 z-0 overflow-hidden hidden dark:block">
//         {/* Dark mode gradient with more opacity */}
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>

//         {/* Subtle grid pattern for dark mode - Removed circuit lines, keeping only dots */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #00ffaa 1px, transparent 1px)`,
//             backgroundSize: "80px 80px",
//           }}
//         ></div>

//         {/* Floating tech icons - Dark mode - Reduced opacity */}
//         {techIconsDark.map((tech, i) => (
//           <div
//             key={`dark-${tech.name}-${i}`}
//             className="absolute flex items-center justify-center"
//             style={{
//               top: `${20 + ((i * 6) % 65)}%`,
//               left: `${16 + ((i * 12) % 82)}%`,
//               animation: `tech-float-dark ${22 + i * 4}s ease-in-out infinite`,
//               animationDelay: `${i * 0.7}s`,
//               opacity: 0.12 + Math.random() * 0.08,
//               transform: `rotate(${i % 2 === 0 ? "5deg" : "-5deg"})`,
//             }}
//           >
//             <div className="text-3xl opacity-70">{tech.icon}</div>
//           </div>
//         ))}

//         {/* Binary rain effect - Dark only with slower movement */}
//         {Array.from({ length: 20 }).map((_, i) => (
//           <div
//             key={`binary-${i}`}
//             className="absolute top-0 font-mono text-xs text-green-400/5 tracking-widest whitespace-nowrap"
//             style={{
//               left: `${5 + i * 5}%`,
//               animation: `binary-fall ${25 + Math.random() * 15}s linear infinite`,
//               animationDelay: `${Math.random() * 10}s`,
//             }}
//           >
//             {Array.from({ length: 10 })
//               .map(() => (Math.random() > 0.5 ? "1" : "0"))
//               .join(" ")}
//           </div>
//         ))}

//         {/* Moving glowing dots - Dark only */}
//         {Array.from({ length: 15 }).map((_, i) => (
//           <div
//             key={`dot-${i}`}
//             className="absolute w-[2px] h-[2px] rounded-full bg-cyan-400/15"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `dot-move ${15 + Math.random() * 10}s linear infinite`,
//               animationDelay: `${Math.random() * 5}s`,
//               boxShadow: "0 0 3px rgba(0, 255, 255, 0.1)",
//             }}
//           />
//         ))}

//         {/* Moving particle trails */}
//         {Array.from({ length: 8 }).map((_, i) => (
//           <div
//             key={`particle-${i}`}
//             className="absolute w-[1px] h-[1px] rounded-full bg-gradient-to-r from-transparent via-cyan-500/8 to-transparent"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `particle-trail ${20 + Math.random() * 15}s linear infinite`,
//               animationDelay: `${Math.random() * 8}s`,
//               opacity: 0.02,
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default BackgroundEffect;

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const BackgroundEffect = () => {
  const techIconsDark = [
    { icon: <FaReact className="text-cyan-400" />, side: "left" },
    { icon: <SiExpress className="text-gray-300" />, side: "left" },
    { icon: <SiPostgresql className="text-indigo-300" />, side: "left" },

    { icon: <SiNextdotjs className="text-white" /> },
    { icon: <FaJs className="text-yellow-400" /> },
    { icon: <FaHtml5 className="text-orange-500" /> },
    { icon: <FaCss3Alt className="text-blue-500" /> },
    { icon: <SiTailwindcss className="text-cyan-300" /> },
    { icon: <FaNodeJs className="text-green-500" /> },
    { icon: <SiMongodb className="text-green-400" /> },
    { icon: <FaGitAlt className="text-orange-600" /> },
    { icon: <FaFigma className="text-purple-500" /> },
    { icon: <SiFirebase className="text-yellow-500" /> },
    { icon: <SiVercel className="text-white" /> },
    { icon: <SiTypescript className="text-blue-400" /> },
  ];

  const expandedDark = [...techIconsDark, ...techIconsDark.slice(0, 6)];

  return (
    <>
      {/* ================= DARK MODE ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden hidden dark:block">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900" />

        {/* Existing floating icons */}
        {expandedDark.map((tech, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${15 + ((i * 7) % 70)}%`,
              left:
                tech.side === "left"
                  ? `${4 + i * 6}%`
                  : `${25 + ((i * 10) % 65)}%`,
              animation: `tech-float-dark ${22 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
              opacity: 0.14,
            }}
          >
            <div style={{ fontSize: `${22 + (i % 3) * 6}px` }}>{tech.icon}</div>
          </div>
        ))}

        {/* ================= EXTRA LEFT ICONS ================= */}

        {/* Middle Left */}
        <div className="absolute left-[6%] top-[45%] opacity-25 animate-[tech-float-dark_20s_ease-in-out_infinite]">
          <FaReact className="text-3xl text-cyan-400" />
        </div>

        <div className="absolute left-[10%] top-[55%] opacity-20 animate-[tech-float-dark_26s_ease-in-out_infinite]">
          <SiExpress className="text-3xl text-gray-300" />
        </div>

        {/* Bottom Left */}
        <div className="absolute left-[7%] bottom-[18%] opacity-20 animate-[tech-float-dark_24s_ease-in-out_infinite]">
          <SiPostgresql className="text-3xl text-indigo-300" />
        </div>

        <div className="absolute left-[12%] bottom-[8%] opacity-15 animate-[tech-float-dark_30s_ease-in-out_infinite]">
          <FaNodeJs className="text-3xl text-green-500" />
        </div>
      </div>

      {/* ================= TOP RIGHT EXTRA ICONS ================= */}

      <div className="absolute right-[6%] top-[10%] opacity-20 animate-[tech-float-dark_22s_ease-in-out_infinite]">
        <SiNextdotjs className="text-3xl text-white" />
      </div>

      <div className="absolute right-[10%] top-[22%] opacity-15 animate-[tech-float-dark_28s_ease-in-out_infinite]">
        <SiVercel className="text-3xl text-white" />
      </div>
    </>
  );
};

export default BackgroundEffect;

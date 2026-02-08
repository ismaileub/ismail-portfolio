import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const Experience = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardWrapRef = useRef(null);
  const cardRef = useRef(null);
  const sweepRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const wrap = cardWrapRef.current;
    const card = cardRef.current;
    const sweep = sweepRef.current;

    if (!section || !heading || !wrap || !card) return;

    // --- GSAP Scroll Reveal ---
    gsap.fromTo(
      heading,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
        },
      },
    );

    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      },
    );

    // --- 3D Tilt Effect ---
    const rx = gsap.quickTo(card, "rotationX", {
      duration: 0.5,
      ease: "power2",
    });
    const ry = gsap.quickTo(card, "rotationY", {
      duration: 0.5,
      ease: "power2",
    });

    const handleMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rx(-y * 15);
      ry(x * 15);
    };

    const handleLeave = () => {
      rx(0);
      ry(0);
    };

    wrap.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);

    // --- Light Sweep Animation ---
    if (sweep) {
      gsap.to(sweep, {
        xPercent: 250,
        duration: 3,
        repeat: -1,
        ease: "power2.inOut",
        repeatDelay: 1,
      });
    }

    return () => {
      wrap.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative  lg:pb-14 px-6 overflow-hidden bg-transparent "
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ff00bf]/3 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/3 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-10">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-7xl font-bold tracking-tighter mb-4 font-display">
            Career <span className="text-[#ff00bf] italic">Trajectory</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#ff00bf] to-violet-600 mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 dark:text-[#bc9ab3] text-lg font-medium tracking-widest uppercase">
            The Beginning of Innovation
          </p>
        </div>

        {/* The Card Container */}
        <div ref={cardWrapRef} className="perspective-1000 max-w-2xl mx-auto">
          <div
            ref={cardRef}
            className="relative group rounded-[2.5rem] p-10 md:p-16 overflow-hidden border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/[0.02] backdrop-blur-2xl shadow-2xl transition-all duration-300"
          >
            {/* Reflection sweep */}
            <div
              ref={sweepRef}
              className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] pointer-events-none z-10"
            />

            {/* Glowing Border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,0,191,0.15),transparent_40%)]" />

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center text-center">
              {/* Profile/Role Icon */}
              {/* <div className="mb-8 p-6 rounded-3xl bg-gradient-to-br from-[#ff00bf]/20 to-violet-600/20 border border-[#ff00bf]/30 shadow-[0_0_30px_rgba(255,0,191,0.2)]">
                <span className="material-symbols-outlined text-5xl md:text-6xl text-[#ff00bf] animate-bounce-slow">
                  rocket_launch
                </span>
              </div> */}

              <h3 className="text-2xl md:text-4xl text-nowrap font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                Aspiring Software Engineer
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <span className="px-4 py-1.5 rounded-full bg-[#ff00bf]/10 border border-[#ff00bf]/30 text-[#ff00bf] text-sm font-bold uppercase tracking-tighter shadow-[0_0_15px_rgba(255,0,191,0.2)] animate-pulse">
                  Open for Internship
                </span>
                <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-bold uppercase tracking-tighter">
                  MERN Stack
                </span>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

              <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[#ff00bf] font-black text-2xl tracking-tighter">
                    FRESHER
                  </span>
                  <span className="text-slate-500 dark:text-[#bc9ab3] text-xs font-bold uppercase tracking-[0.2em]">
                    Experience
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 border-l border-white/10">
                  <span className="text-violet-400 font-black text-2xl tracking-tighter">
                    ACTIVE
                  </span>
                  <span className="text-slate-500 dark:text-[#bc9ab3] text-xs font-bold uppercase tracking-[0.2em]">
                    Availability
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-10 py-4 bg-gradient-to-r from-[#ff00bf] to-violet-600 rounded-2xl text-white font-black text-lg shadow-[0_15px_30px_rgba(255,0,191,0.4)] hover:shadow-[0_20px_40px_rgba(255,0,191,0.6)] transition-all flex items-center gap-3 group/btn"
              >
                Looking for Opportunities
                <span className="material-symbols-outlined translate-x-0 group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

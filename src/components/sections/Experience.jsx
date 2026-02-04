import React, { useState } from "react";

const experiences = [
  {
    id: "senior",
    orbLabel: "Senior Full Stack",
    orbSubtitle: "Tech Corp",
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "Jan 2021 — Present",
    scope:
      "Leading the engineering team in architectural design and implementation of a distributed microservices platform. Focused on high-availability, scalability, and seamless user experiences for over 2M active users.",
    techStack: [
      "TypeScript",
      "Next.js 14",
      "Node.js",
      "PostgreSQL",
      "AWS Lambda",
      "GraphQL",
    ],
    outcomes: [
      "Increased platform performance by 45% through aggressive caching and DB optimization.",
      "Reduced deployment cycles from 2 weeks to 2 days using robust CI/CD pipelines.",
      "Mentored 5 junior developers into mid-level positions within 18 months.",
    ],
    wrapperAnimation: "animate-[orbit-exp-1_40s_linear_infinite]",
    sizeClass: "size-24",
    gradientClass: "bg-gradient-to-br from-[#f20db9]/40 to-[#f20db9]/10",
    borderClass: "border-[#f20db9]/50",
    glowClass: "orb-glow-primary",
  },
  {
    id: "fullstack",
    orbLabel: "Full Stack Engineer",
    orbSubtitle: "SaaS Labs",
    title: "Full Stack Engineer",
    company: "SaaS Labs",
    period: "Jul 2019 — Dec 2020",
    scope:
      "Designed and implemented end-to-end features for a multi-tenant SaaS platform, collaborating closely with product and design to ship improvements on a weekly cadence.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "REST APIs",
    ],
    outcomes: [
      "Improved onboarding funnel, increasing trial-to-paid conversion by 18%.",
      "Cut average response times by 35% via query optimization and caching.",
      "Introduced coding standards and review workflows adopted across the team.",
    ],
    wrapperAnimation: "animate-[orbit-exp-2_44s_linear_infinite]",
    sizeClass: "size-20",
    gradientClass: "bg-gradient-to-br from-[#00f2ff]/40 to-[#00f2ff]/10",
    borderClass: "border-[#00f2ff]/50",
    glowClass: "orb-glow-accent",
  },
  {
    id: "freelance",
    orbLabel: "Freelance",
    orbSubtitle: "",
    title: "Freelance Web Developer",
    company: "Independent",
    period: "2017 — Present",
    scope:
      "Partnering with startups and small businesses to design, build, and ship performant web applications and marketing sites tuned for conversion.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Stripe",
      "Headless CMS",
    ],
    outcomes: [
      "Delivered 20+ projects end-to-end with consistent 5★ client feedback.",
      "Implemented SEO and performance optimizations leading to 2x organic traffic for key clients.",
      "Built reusable design systems to speed up future delivery by ~30%.",
    ],
    wrapperAnimation: "animate-[orbit-exp-5_36s_linear_infinite]",
    sizeClass: "size-16",
    gradientClass:
      "bg-gradient-to-br from-[#1b102c] via-[#f20db9]/20 to-transparent",
    borderClass: "border-white/20",
    glowClass: "orb-glow-soft",
  },
  {
    id: "uiintern",
    orbLabel: "UI/UX\nIntern",
    orbSubtitle: "",
    title: "UI/UX Intern",
    company: "Creative Studio",
    period: "Jun 2018 — Dec 2018",
    scope:
      "Collaborated with designers to translate Figma prototypes into responsive interfaces, ensuring visual consistency and accessibility across devices.",
    techStack: [
      "Figma",
      "React",
      "Tailwind CSS",
      "Design Systems",
      "Accessibility",
      "Prototyping",
    ],
    outcomes: [
      "Helped redesign core onboarding flows, reducing drop-off by 12%.",
      "Documented UI patterns that evolved into the team's first design system.",
      "Supported usability testing sessions and implemented feedback cycles.",
    ],
    wrapperAnimation: "animate-[orbit-exp-4_40s_linear_infinite]",
    sizeClass: "size-20",
    gradientClass:
      "bg-gradient-to-br from-[#1b102c] via-[#f20db9]/18 to-transparent",
    borderClass: "border-white/20",
    glowClass: "orb-glow-soft",
  },
  {
    id: "consultant",
    orbLabel: "Web Consultant",
    orbSubtitle: "",
    title: "Web Consultant",
    company: "Various Clients",
    period: "2020 — Present",
    scope:
      "Advising teams on architecture, performance, and DX improvements to help them modernize legacy stacks and ship more reliably.",
    techStack: [
      "System Design",
      "Performance Audits",
      "Next.js",
      "Node.js",
      "Cloud Infrastructure",
      "Monitoring",
    ],
    outcomes: [
      "Led audits that uncovered issues causing 40% slower page loads, then guided remediation.",
      "Helped teams adopt better observability practices, reducing MTTR for incidents.",
      "Consulted on migration plans from monoliths to service-oriented architectures.",
    ],
    wrapperAnimation: "animate-[orbit-exp-3_38s_linear_infinite]",
    sizeClass: "size-20",
    gradientClass:
      "bg-gradient-to-tr from-[#1b102c] via-[#f20db9]/16 to-transparent",
    borderClass: "border-white/15",
    glowClass: "orb-glow-soft",
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState("senior");
  const [hoveredId, setHoveredId] = useState(null);

  const activeExperience =
    experiences.find((exp) => exp.id === activeId) || experiences[0];

  return (
    <section
      id="experience"
      className="relative py-20 lg:py-32 px-4 lg:px-10 overflow-hidden"
    >
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-[#f20db9] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2">
          Portfolio Cluster
        </h2>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Experience Orbit
        </h1>
        <p className="text-white/60 mt-4 max-w-md mx-auto text-sm md:text-base">
          Explore my journey through interactive clusters. Click a node to view
          technical breakdown.
        </p>
      </div>
      <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-stretch gap-8 rounded-3xl border border-white/10 backdrop-blur-2xl">
        {/* Orbital Cluster Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative min-h-[500px] lg:min-h-[600px]">
          {/* Orbit / Cluster Container */}
          <div className="relative w-full max-w-[620px] aspect-square flex items-center justify-center">
            {/* Central Core (slightly smaller) */}
            <div className="absolute size-20 md:size-24 rounded-full bg-white/5 border border-white/20 flex flex-col items-center justify-center backdrop-blur-xl z-20 shadow-[0_0_50px_rgba(255,255,255,0.18)]">
              <span className="material-symbols-outlined text-[#f20db9] text-3xl md:text-4xl">
                hub
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-[#f20db9]/80 uppercase mt-2">
                Core
              </span>
            </div>

            {/* Orbit Rings (one per sphere, spaced for clarity) */}
            <div className="absolute size-[220px] border border-white/5 rounded-full shadow-[0_0_40px_rgba(88,28,135,0.25)]" />
            <div className="absolute size-[320px] border border-white/5 rounded-full shadow-[0_0_40px_rgba(88,28,135,0.22)]" />
            <div className="absolute size-[420px] border border-white/5 rounded-full shadow-[0_0_40px_rgba(88,28,135,0.18)]" />
            <div className="absolute size-[520px] border border-white/5 rounded-full shadow-[0_0_40px_rgba(88,28,135,0.14)]" />
            <div className="absolute size-[620px] border border-white/5 rounded-full shadow-[0_0_40px_rgba(88,28,135,0.1)]" />

            {/* Experience Orbs */}
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              const isHovered = exp.id === hoveredId;

              const animationPlayState =
                isActive || isHovered ? "paused" : "running";

              return (
                <div
                  key={exp.id}
                  className={`absolute inset-0 flex items-center justify-center pointer-events-none ${exp.wrapperAnimation}`}
                  style={{ animationPlayState }}
                >
                  <button
                    type="button"
                    className="pointer-events-auto"
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() =>
                      setHoveredId((current) =>
                        current === exp.id ? null : current,
                      )
                    }
                    onClick={() => setActiveId(exp.id)}
                  >
                    <div
                      className={`${
                        exp.sizeClass
                      } rounded-full ${exp.gradientClass} ${exp.borderClass} flex flex-col items-center justify-center p-3 md:p-4 text-center backdrop-blur-md ${
                        exp.glowClass
                      } transition-all duration-500 group hover:scale-105 hover:border-[#f20db9]`}
                    >
                      <span className="text-white text-[10px] md:text-xs font-bold leading-tight whitespace-pre-line">
                        {exp.orbLabel}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details Side Panel */}
        <aside className="w-full lg:w-[420px] xl:w-[450px] bg-background-dark/80 backdrop-blur-2xl border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col p-6 md:p-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 md:size-14 rounded-xl bg-[#f20db9]/20 border border-[#f20db9]/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#f20db9] text-2xl md:text-3xl">
                  terminal
                </span>
              </div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {activeExperience.title}
                </h3>
                <p className="text-[#f20db9] font-medium text-sm md:text-base">
                  {activeExperience.company} | {activeExperience.period}
                </p>
              </div>
            </div>

            {/* Tabs (static UI) */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-lg mb-8 text-xs md:text-sm">
              <button className="flex-1 py-2 font-bold bg-white/10 text-white rounded-md flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-xs">info</span>
                Overview
              </button>
              <button className="flex-1 py-2 font-medium text-white/70 hover:text-white transition-colors flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-xs">code</span>
                Stack
              </button>
              <button className="flex-1 py-2 font-medium text-white/70 hover:text-white transition-colors flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-xs">
                  monitoring
                </span>
                Outcomes
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <section>
                <h4 className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                  Project Scope
                </h4>
                <p className="text-white/80 leading-relaxed text-sm">
                  {activeExperience.scope}
                </p>
              </section>

              <section>
                <h4 className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                  Core Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExperience.techStack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white/70 text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                  Key Outcomes
                </h4>
                <ul className="space-y-3">
                  {activeExperience.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 items-start">
                      <span className="material-symbols-outlined text-[#f20db9] text-sm mt-0.5">
                        check_circle
                      </span>
                      <p className="text-sm text-white/80">{outcome}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </aside>

        {/* Decorative particles within section */}
        <div className="pointer-events-none">
          <div className="absolute top-10 left-10 size-1 bg-white rounded-full blur-[1px] opacity-30" />
          <div className="absolute top-20 right-16 size-1 bg-[#f20db9] rounded-full blur-[1px] opacity-30" />
          <div className="absolute bottom-10 left-1/3 size-1 bg-[#00f2ff] rounded-full blur-[1px] opacity-30" />
          <div className="absolute top-1/2 right-1/4 size-1 bg-white rounded-full blur-[1px] opacity-20" />
          <div className="absolute bottom-16 right-10 size-1 bg-[#f20db9] rounded-full blur-[1px] opacity-25" />
        </div>
      </div>
    </section>
  );
}

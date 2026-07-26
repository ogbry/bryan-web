"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    accent: "from-blue-500 to-cyan-500",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Redux",
      "TailwindCSS",
      "MaterialUI",
      "Recoil",
      "Context API",
      "Expo",
    ],
  },
  {
    category: "Backend",
    accent: "from-cyan-500 to-sky-600",
    items: ["Node.js", "FastAPI", "Express", "RESTful APIs", "NestJS"],
  },
  {
    category: "Databases",
    accent: "from-sky-500 to-blue-600",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "Supabase"],
  },
  {
    category: "Cloud & AI",
    accent: "from-blue-600 to-indigo-600",
    items: [
      "AWS",
      "Deepgram",
      "GPT API",
      "ChatGPT",
      "Claude",
      "Google Cloud Platform",
      "Firebase",
    ],
  },
  {
    category: "Dev Tools",
    accent: "from-indigo-500 to-blue-600",
    items: ["Git", "Docker", "Webpack", "Cypress", "VS Code", "Antigravity", "Render", "CI/CD"],
  },
  {
    category: "Languages",
    accent: "from-sky-600 to-cyan-500",
    items: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
  },
];

// Flattened, de-duplicated list of headline techs for the scrolling strip.
const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "AWS",
  "Google Cloud",
  "Docker",
  "TailwindCSS",
  "React Native",
  "Redux",
  "GPT API",
  "Claude",
  "Git",
  "CI/CD",
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative py-24 bg-slate-50 dark:bg-[#080b14] overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full blur-[140px] bg-blue-400/8 dark:bg-blue-600/10 pointer-events-none" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-4">
            What I Bring
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-neon-gradient">Expertise</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Proficient across the full development stack — from pixel-perfect
            frontends to scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Category columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 max-w-6xl">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              {/* Category label with accent rule */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`h-6 w-1 rounded-full bg-gradient-to-b ${skill.accent}`}
                />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {skill.category}
                </h3>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-600">
                  {skill.items.length}
                </span>
              </div>

              {/* Skill list */}
              <ul className="space-y-2.5">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${skill.accent} opacity-70`}
                    />
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Auto-scrolling tech marquee */}
      <div className="marquee-group marquee-mask mt-20 overflow-hidden">
        <div className="marquee-track gap-4 pr-4">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="flex-shrink-0 px-5 py-2.5 rounded-xl glass text-slate-600 dark:text-slate-300 text-sm font-medium whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

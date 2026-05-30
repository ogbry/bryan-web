"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500",
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
    category: "Backend Development",
    icon: "🔧",
    color: "from-cyan-500 to-sky-600",
    items: ["Node.js", "FastAPI", "Express", "RESTful APIs", "NestJS"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "from-sky-500 to-blue-600",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "Supabase"],
  },
  {
    category: "Cloud & AI",
    icon: "☁️",
    color: "from-blue-600 to-indigo-600",
    items: ["AWS", "Deepgram", "GPT API", "ChatGPT", "Claude", "Google Cloud Platform", "Firebase"],
  },
  {
    category: "Dev Tools",
    icon: "🛠️",
    color: "from-indigo-500 to-blue-600",
    items: ["Git", "Docker", "Webpack", "Cypress", "VS Code", "Antigravity", "CI/CD"],
  },
  {
    category: "Languages",
    icon: "💻",
    color: "from-sky-600 to-cyan-500",
    items: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
  },
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
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-4">
            What I Bring
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-neon-gradient">Expertise</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Proficient across the full development stack with modern
            technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="gradient-border group relative glass rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute -inset-px bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.08] rounded-2xl transition-opacity duration-300 pointer-events-none`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 text-2xl rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 transition-colors cursor-default shadow-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

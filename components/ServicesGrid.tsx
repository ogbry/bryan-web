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
      "Context API", "Expo"
    ],
  },
  {
    category: "Backend Development",
    icon: "🔧",
    color: "from-green-500 to-emerald-500",
    items: ["Node.js", "FastAPI", "Express", "RESTful APIs", "NestJS"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "from-purple-500 to-pink-500",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL"],
  },
  {
    category: "Cloud & AI",
    icon: "☁️",
    color: "from-orange-500 to-red-500",
    items: ["AWS", "Deepgram", "GPT API", "ChatGPT", "Claude", "Google Cloud Platform", "Firebase"],
  },
  {
    category: "Dev Tools",
    icon: "🛠️",
    color: "from-indigo-500 to-purple-500",
    items: ["Git", "Docker", "Webpack", "Cypress", "VS Code", "Antigravity", "CI/CD"],
  },
  {
    category: "Languages",
    icon: "💻",
    color: "from-yellow-500 to-orange-500",
    items: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Skills & Expertise
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
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-4xl`}>{skill.icon}</div>
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
                      className={`px-3 py-1.5 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-default shadow-sm`}
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

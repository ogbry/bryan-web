"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-[#05070f] overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full blur-[130px] bg-blue-400/8 dark:bg-blue-600/10 pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image side */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-15 dark:opacity-25"></div>
                <div className="gradient-border relative glass rounded-3xl p-8 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full p-[3px] bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_0_24px_-6px_rgba(37,99,235,0.5)]">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        src="/image.jpeg"
                        alt="Bryan Alfuente"
                      />
                    </div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">
                      Bryan Alfuente
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Software Engineer
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-4">
                Who I Am
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                About <span className="text-neon-gradient">Me</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p className="text-lg">
                  I&apos;m a passionate{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Software Engineer
                  </span>{" "}
                  with over 6 years of experience building robust web
                  applications and working closely with teams on solutions that
                  leverage AI technologies.
                </p>
                <p>
                  Currently based in{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Legazpi City, Philippines
                  </span>
                  , I specialize in full-stack development with expertise in
                  React, Node.js, TypeScript, and AWS cloud services.
                </p>
                <p>
                  I&apos;ve had the privilege of working on cutting-edge projects
                  including an AI-powered call analysis platform using Deepgram,
                  Slack integrations, workflows and GPT API, and developing
                  enterprise-grade CRM systems like Vtiger and GoHighLevel that
                  streamline business operations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { number: "6+", label: "Years Experience" },
                  { number: "2", label: "AWS Certifications" },
                  {
                    number: "10+",
                    label: "Web Applications Built (Solo & Collaborated)",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-neon-gradient">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

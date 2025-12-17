"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container px-6">
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-6xl">
                      <img
                        className="rounded-full"
                        src="https://lh3.googleusercontent.com/a/ACg8ocJQY9n6pIS4G8l7fgLduAbcEosRKQ3ZUABLTcwUEY2x4M203eGP=s288-c-no"
                      />
                    </div>
                    <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                About Me
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Software Engineer
                  </span>{" "}
                  with over 5 years of experience building robust web
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
                  I've had the privilege of working on cutting-edge projects
                  including an AI-powered call analysis platform using Deepgram,
                  Slack integrations, workflows and GPT API, and developing
                  enterprise-grade CRM systems like Vtiger and GoHighLevel that
                  streamline business operations.
                </p>
                <p>
                  When I'm not coding, I enjoy mentoring junior developers and
                  staying up-to-date with the latest technologies in web
                  development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "2", label: "AWS Certifications" },
                  { number: "10+", label: "Projects Completed" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
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

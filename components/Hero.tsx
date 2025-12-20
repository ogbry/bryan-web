"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/30 to-pink-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full mb-8 shadow-lg"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main heading with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200">
                Bryan Alfuente
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-4xl font-semibold mb-6 text-slate-700 dark:text-slate-300"
            >
              Software Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                React
              </span>
              ,{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                Node.js
              </span>
              , and{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400">
                AWS
              </span>
              . 5+ years building scalable web applications and production-ready
              solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                Let's Talk
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/My_Resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-600 hover:border-purple-500 dark:hover:border-purple-500 text-slate-700 dark:text-slate-300 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { name: "React", color: "from-cyan-500 to-blue-500" },
                { name: "Next.js", color: "from-slate-700 to-slate-900" },
                { name: "TypeScript", color: "from-blue-600 to-blue-700" },
                { name: "Node.js", color: "from-green-600 to-green-700" },
                { name: "Python", color: "from-yellow-500 to-yellow-600" },
                { name: "AWS", color: "from-orange-500 to-orange-600" },
                { name: "Docker", color: "from-blue-400 to-cyan-600" },
                { name: "MongoDB", color: "from-green-500 to-emerald-600" },
                { name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
              ].map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white text-sm font-semibold rounded-lg shadow-md cursor-default`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}

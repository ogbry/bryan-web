"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@/lib/track";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Python",
  "AWS",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
];

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#05070f]">
      {/* Faint grid */}
      <div className="absolute inset-0 neon-grid mask-radial-faded" />

      {/* Subtle blue glow blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-5%] w-[45vw] h-[45vw] rounded-full blur-[140px] bg-blue-500/10 dark:bg-blue-600/12"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-5%] w-[45vw] h-[45vw] rounded-full blur-[140px] bg-cyan-500/10 dark:bg-cyan-600/10"
        />
      </div>

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

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
              className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-6xl md:text-8xl lg:text-[8.5rem] font-bold mb-6 leading-[0.95] tracking-tight"
            >
              <span className="text-slate-900 dark:text-white">Bryan</span>
              <br />
              <span className="text-aurora drop-shadow-[0_0_22px_rgba(37,99,235,0.25)]">
                Alfuente
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-blue-400/50" />
              <h2 className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 tracking-[0.2em] uppercase">
                Software Engineer
              </h2>
              <span className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                React
              </span>
              ,{" "}
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                Node.js
              </span>
              , and{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                AWS
              </span>
              . 6+ years building scalable web applications and production-ready
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
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-8 py-4 text-white font-semibold rounded-2xl overflow-hidden glow-blue"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="relative flex items-center gap-2">
                  Let&apos;s Talk
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 glass hover:border-blue-400/60 dark:hover:border-blue-500/50 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl shadow-sm transition-all"
              >
                View Projects
              </motion.a>
              <div ref={resumeRef} className="relative">
                <motion.button
                  onClick={() => setResumeOpen((o) => !o)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-4 glass hover:border-blue-400/60 dark:hover:border-blue-500/50 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                  <svg className={`w-4 h-4 transition-transform ${resumeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {resumeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-full bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden z-50"
                    >
                      <a
                        href="/Bryan_Alfuente_ATS_Resume.pdf"
                        download
                        onClick={() => {
                          track("resume", "PDF");
                          setResumeOpen(false);
                        }}
                        className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM9.5 17c-.3 0-.5-.1-.7-.3l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.3 1.3 3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.2.2-.4.3-.7.3z"/>
                        </svg>
                        Download as PDF
                      </a>
                      <div className="border-t border-slate-100 dark:border-white/10" />
                      <a
                        href="/Bryan_Alfuente_ATS_Resume.docx"
                        download
                        onClick={() => {
                          track("resume", "DOCX");
                          setResumeOpen(false);
                        }}
                        className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 16h8v1.5H8V16zm0-3h8v1.5H8V13zm0-3h5v1.5H8V10z"/>
                        </svg>
                        Download as DOCX
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Tech Stack chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2.5"
            >
              {techStack.map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3.5 py-1.5 glass text-slate-600 dark:text-slate-300 text-sm font-medium rounded-lg shadow-sm cursor-default hover:border-blue-400/60 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  {name}
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
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-white/20 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}

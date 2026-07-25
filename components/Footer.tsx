"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#080b14] overflow-hidden">
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" />

      <div className="container py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-[0_0_14px_-3px_rgba(59,130,246,0.5)]">
                BA
              </span>
              <span className="text-xl font-bold dark:text-white tracking-tight">
                Bryan Alfuente
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              Software Engineer specializing in full-stack development, AI
              solutions, and cloud technologies. Building scalable, user-focused
              applications with modern technologies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#services" },
                { name: "GitHub", href: "#github" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <div className="text-slate-600 dark:text-slate-400">
                  Legazpi City, Albay, Philippines
                </div>
              </li>
              <li className="flex gap-3 mt-4">
                {[
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/bryan-alfuente-725a5b187/",
                    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com/ogbry",
                    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/tengenexD/",
                    icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/50 dark:hover:border-cyan-400/40 transition-colors"
                    aria-label={social.label}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <div>© {currentYear} Bryan Alfuente. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Built with</span>
            <span className="text-cyan-600 dark:text-cyan-400">React</span>
            <span>+</span>
            <span className="text-blue-600 dark:text-blue-400">NextJS</span>
            <span>+</span>
            <span className="text-sky-600 dark:text-sky-400">TypeScript</span>
            <span>+</span>
            <span className="text-blue-600 dark:text-blue-400">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

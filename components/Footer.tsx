"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyOWh2dnhxcDQycGU1YTFxYjRrM3A3eDY2dG0xbzN2YzB5d3h4bmxhNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JFz7YZA0vhiGlAYCSn/200w.gif"
                alt="Logo"
                className="w-12 h-8"
              />
              <span className="text-xl font-bold dark:text-white">Bryan Alfuente</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              Software Engineer specializing in full-stack development, AI solutions, and cloud technologies.
              Building scalable, user-focused applications with modern technologies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Skills', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                <a
                  href="mailto:alfuente.bryan25@gmail.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  alfuente.bryan25@gmail.com
                </a>
              </li>
              <li>
                <div className="text-slate-600 dark:text-slate-400">
                  Legazpi City, Albay, Philippines
                </div>
              </li>
              <li className="flex gap-3 mt-4">
                {[
                  { icon: '💼', label: 'LinkedIn' },
                  { icon: '🐙', label: 'GitHub' },
                  { icon: '🐦', label: 'Twitter' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    title={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <div>© {currentYear} Bryan Alfuente. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span>Built with</span>
            <span className="text-blue-600 dark:text-blue-400">React</span>
            <span>+</span>
            <span className="text-blue-600 dark:text-blue-400">TypeScript</span>
            <span>+</span>
            <span className="text-blue-600 dark:text-blue-400">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

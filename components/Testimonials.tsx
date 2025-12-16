"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    text: "Outstanding service and lightning-fast turnaround. Our new website exceeded all expectations and has already increased our lead generation by 45%.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Mike Peterson",
    role: "Marketing Director",
    text: "Working with this team was a game-changer. They improved our conversions by 30% and the site loads incredibly fast. Highly recommended!",
    rating: 5,
    avatar: "👨‍💼"
  },
];

export default function Testimonials() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Don't just take our word for it - hear from satisfied clients
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="absolute -top-3 -left-3 text-6xl text-blue-600/20 dark:text-blue-400/20 font-serif">
              "
            </div>

            <div className="relative">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                {t.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold dark:text-white">{t.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

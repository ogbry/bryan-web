"use client";

import React from "react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
// TODO: Add your image files to /Users/bryanalfuente/Projects/my-portfolio/assets/ first!
// Then uncomment these imports:
import spero_img1 from "../assets/spero_img1.jpeg";
import spero_img2 from "../assets/spero_img2.jpeg";
import spero_img3 from "../assets/spero_img3.jpeg";
import boomsourcing_img1 from "../assets/boomsourcing_img1.jpg";

const experiences = [
  {
    company: "BOOM AI Solutions OPC",
    role: "Software Engineer",
    period: "Aug 2022 - Dec 2025",
    location: "Remote",
    achievements: [
      "Developed high-performance web applications using React.js and Node.js",
      "Contributed to an AI-powered call analysis tool using Deepgram and GPT APIs in collaboration with a data scientist.",
      "Designed RESTful APIs using Node.js, Python, and AWS services",
      "Contributed to internal CRM development enhancing business processes",
    ],
    images: [spero_img1, spero_img2, spero_img3],
  },
  {
    company: "Boomsourcing INC",
    role: "Junior Web Developer/Mentor",
    period: "May 2019 - Aug 2022",
    location: "Remote",
    achievements: [
      "Developed reusable, modular web components using React.js",
      "Enhanced user experience with new interface features",
      "Mentored junior developers fostering skill growth and collaboration",
    ],
    images: [boomsourcing_img1],
  },
];

const certifications = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "January 2025",
    badgeUrl:
      "https://www.credly.com/badges/414c06af-31b9-4a2e-af9d-50c1d33b848c",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "January 2024",
    badgeUrl:
      "https://www.credly.com/badges/5d911972-3388-4324-8783-9cc83ee1e441",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-slate-50 dark:bg-[#080b14] overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full blur-[140px] bg-blue-400/8 dark:bg-blue-600/10 pointer-events-none" />

      <div className="container relative z-10">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-3">
            Where I&apos;ve Worked
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mb-12">
            6+ years of professional software development experience
          </p>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="gradient-border glass rounded-2xl p-6 transition-all hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 md:text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                {/* Work Moments Carousel */}
                {exp.images && exp.images.length > 0 && (
                  <div className="mb-6">
                    <ImageCarousel
                      images={exp.images}
                      alt={`${exp.company} - ${exp.role}`}
                      height="h-56"
                    />
                  </div>
                )}

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-3">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mb-12">
            AWS certified professional with cloud and AI expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="gradient-border glass rounded-2xl p-6 hover:shadow-2xl transition-all"
              >
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <div className="text-slate-600 dark:text-slate-400 text-sm">
                  {cert.issuer}
                </div>
                <div className="text-slate-500 dark:text-slate-500 text-sm mt-1 mb-4">
                  Issued: {cert.date}
                </div>
                <a
                  href={cert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium rounded-lg transition-all hover:scale-105 hover:shadow-[0_8px_22px_-8px_rgba(37,99,235,0.6)]"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  View Badge
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

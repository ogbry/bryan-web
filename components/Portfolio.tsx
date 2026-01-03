"use client";

import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import frontendcourseimg1 from "../assets/frontendcourseimg1.png";
import frontendcourseimg2 from "../assets/frontendcourseimg2.png";
import boomerangimg1 from "../assets/boomerang_img1.png";
import boomerangimg2 from "../assets/boomerang_img2.png";
import boomerangimg3 from "../assets/boomerang_img3.png";
import boomerangimg4 from "../assets/boomerang_img4.png";
import boomerangimg5 from "../assets/boomerang_img5.png";
import resumebuilder_img1 from "../assets/resumebuilder_img1.png";
import resumebuilder_img2 from "../assets/resumebuilder_img2.png";
import resumebuilder_img3 from "../assets/resumebuilder_img3.png";
import resumebuilder_img4 from "../assets/resumebuilder_img4.png";
import hris_img1 from "../assets/hris_img1.png";
import hris_img2 from "../assets/hris_img2.png";
import hris_img3 from "../assets/hris_img3.png";

const projects = [
  {
    title: "Coming Soon",
    description: "Working on something exciting...",
    images: [],
    tech: [],
    year: "2025",
    inProgress: true, // This will show skeleton loader
  },
  {
    title: "HRIS Portal",
    description:
      "A Human Resources Information System Portal for employee management, featuring recruitment tracking, turnover analytics, compliance monitoring, and organizational oversight.",
    images: [hris_img1, hris_img2, hris_img3],
    tech: ["NextJS", "TypeScript", "TailwindCSS"],
    year: "2025",
    website: "https://hris-dashboard-nextjs.vercel.app",
    type: "Personal",
    status: "In Progress",
  },
  {
    title: "Smart Resume Builder",
    description:
      "Create professional, ATS-friendly resumes with intelligent suggestions for skills, achievements, and content. No external APIs required..",
    images: [
      resumebuilder_img1,
      resumebuilder_img2,
      resumebuilder_img3,
      resumebuilder_img4,
    ],
    tech: ["NextJS", "TypeScript", "TailwindCSS"],
    // gradient: "from-blue-500 to-cyan-500",
    year: "2025",
    website: "https://smart-resume-builder-iota.vercel.app",
    type: "Personal",
  },
  {
    title: "Boomdemand CRM",
    description:
      "Boomerang (BoomDemand) is a GPT-enabled CRM that automates email, SMS, and call workflows to improve customer communication and engagement.",
    images: [
      boomerangimg1,
      boomerangimg2,
      boomerangimg3,
      boomerangimg4,
      boomerangimg5,
    ],
    tech: ["React", "Node.js", "Python", "FastAPI", "AWS", "WebSockets"],
    // gradient: "from-emerald-500 to-teal-500",
    year: "2023",
    website: "https://boomerang.boomdemand.com/",
    type: "Collaborated",
  },
  {
    title: "Frontend BoomCamp",
    description:
      "A web application designed for BoomCamp students and mentees. It centralizes lessons, activities, grades, and other essential resources needed by both mentees and mentors, allowing them to access everything easily anytime and anywhere.",
    images: [frontendcourseimg1, frontendcourseimg2],
    tech: [
      "React",
      "Context API",
      "Material UI",
      "Jest",
      "AntDesign",
      "Gatsby",
    ],
    // gradient: "from-orange-500 to-red-source",
    year: "2019",
    website: "Internal",
    type: "Collaborated",
  },
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, AI-assisted
            workflows, and cloud-deployed solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {project.inProgress ? (
                /* Skeleton Loader for In-Progress Projects */
                <>
                  {/* Skeleton Image */}
                  <div className="relative h-56 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 animate-pulse">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-16 h-16 mx-auto mb-4 text-slate-400 dark:text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">
                          In Progress
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {project.year}
                    </div>
                  </div>

                  {/* Skeleton Content */}
                  <div className="p-6">
                    <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-lg mb-3 w-3/4 animate-pulse"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-5/6"></div>
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-4/6"></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3].map((_, idx) => (
                        <div
                          key={idx}
                          className="h-7 w-20 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse"
                        ></div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* Normal Project Card */
                <>
                  {/* Image Carousel */}
                  <div className="relative">
                    <ImageCarousel
                      images={project.images}
                      alt={project.title}
                      // gradient={project.gradient}
                      height="h-56"
                    />
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Website Link & Project Type */}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      {project.website && (
                        <>
                          {project.website.startsWith("http") ? (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              Visit Website
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
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
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                              {project.website}
                            </span>
                          )}
                        </>
                      )}

                      {/* Project Type Badge */}
                      {project.type && (
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${
                            project.type === "Personal"
                              ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                              : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                          }`}
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {project.type === "Personal" ? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            )}
                          </svg>
                          {project.type}
                        </span>
                      )}

                      {/* Status Badge */}
                      {project.status && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 dark:group-hover:border-blue-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

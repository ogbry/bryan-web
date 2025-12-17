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

const projects = [
  // {
  //   title: "AI-Powered Call Analysis Platform",
  //   description:
  //     "Enterprise solution leveraging Deepgram for speech-to-text transcription and GPT API for natural language processing to analyze customer calls in real-time",
  //   images: [
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
  //   ],
  //   tech: ["React", "Node.js", "Deepgram", "GPT API", "MongoDB"],
  //   // gradient: "from-purple-500 to-pink-500",
  //   year: "2024",
  // },
  // {
  //   title: "Internal CRM System",
  //   description:
  //     "Comprehensive CRM platform built with React and TypeScript for managing business processes, workflows, and advanced analytics dashboards",
  //   images: [
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
  //     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
  //   ],
  //   tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  //   // gradient: "from-blue-500 to-cyan-500",
  //   year: "2023",
  // },
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
    // gradient: "from-orange-500 to-red-500",
    year: "2019",
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
            A showcase of my recent work in full-stack development, AI
            integration, and cloud solutions
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
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

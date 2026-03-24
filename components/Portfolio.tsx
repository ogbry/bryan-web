"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
import abaiss_img1 from "../assets/abaiss_img1.png";
import abaiss_img2 from "../assets/abaiss_img2.png";
import abaiss_img3 from "../assets/abaiss_img3.png";
import mayon_img1 from "../assets/mayon_img1.png";
import mayon_img2 from "../assets/mayon_img2.png";
import ligtas_img1 from "../assets/ligtas_img1.jpg"
import ligtas_img2 from "../assets/ligtas_img2.jpg"
import ligtas_img3 from "../assets/ligtas_img3.jpg"
import ligtas_img4 from "../assets/ligtas_img4.jpg"
import ligtas_img5 from "../assets/ligtas_img5.jpg"
import ligtas_img6 from "../assets/ligtas_img6.png"
import dxdocs_img1 from "../assets/dxdocs_img1.png"
import dxdocs_img2 from "../assets/dxdocs_img2.png"
import dxdocs_img3 from "../assets/dxdocs_img3.png"
import dxdocs_img4 from "../assets/dxdocs_img4.png"
import dxdocs_img5 from "../assets/dxdocs_img5.png"
import waste_img1 from '../assets/waste_img1.png'
import waste_img2 from '../assets/waste_img2.png'
import waste_img3 from '../assets/waste_img3.png'
import waste_img4 from '../assets/waste_img4.png'
import waste_img5 from '../assets/waste_img5.png'
import waste_img6 from '../assets/waste_img6.png'
import waste_img7 from '../assets/waste_img7.png'

const projects = [
  {
    title: "Coming Soon",
    description: "Working on something exciting...",
    images: [],
    tech: [],
    year: "2026",
    inProgress: true, // This will show skeleton loader
  },
  {
    title: "WasteOS",
    description:
      "A full-stack waste management platform for owner-operators running 5–10 truck fleets. Features a dispatcher console with live GPS container tracking, drag-and-drop dispatch board, automated invoicing with QuickBooks Desktop sync, an offline-capable driver mobile app, and multi-tenant PostgreSQL with PostGIS for location-based data.",
    images: [waste_img1, waste_img2, waste_img3, waste_img4, waste_img5, waste_img6, waste_img7],
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/UI",
      "Mapbox GL",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "Firebase",
      "Capacitor",
      "Google Cloud Run",
      "Docker",
    ],
    year: "2026",
    website: "https://basuraos.web.app/",
    type: "Collaborated",
  },
  {
    title: "Ligtas Mayon",
    description:
      "Ligtas Mayon is a safety monitoring tool for communities living near Mayon Volcano in Albay, Philippines. It provides real-time distance calculations to the 6km Permanent Danger Zone, evacuation center routing via Google Maps, and safety guidelines—all available in English, Filipino, and Bikol.",
    images: [mayon_img1, mayon_img2],
    tech: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Geolocation API",
      "OpenStreetMap",
      "Framer Motion",
      "Vercel",
      "Docker"
    ],
    year: "2025",
    website: "https://mayon-geo.vercel.app/",
    github: "https://github.com/ogbry/mayon-geo-pdz",
    type: "Personal",
    platforms: [
      {
        name: "Web",
        images: [mayon_img1, mayon_img2],
        tech: [
          "React",
          "Typescript",
          "TailwindCSS",
          "Geolocation API",
          "OpenStreetMap",
          "Framer Motion",
          "Vercel",
          "Docker",
        ],
        website: "https://mayon-geo.vercel.app/",
        github: "https://github.com/ogbry/mayon-geo-pdz",
      },
      {
        name: "Android",
        images: [ligtas_img6, ligtas_img1, ligtas_img2, ligtas_img3, ligtas_img4, ligtas_img5],
        tech: [
          "React Native",
          "Expo",
          "TypeScript",
          "React Navigation",
          "Expo Location",
          "React Native Maps",
          "Async Storage",
        ],
        year: "2026",
        website: "https://play.google.com/store/apps/details?id=com.ligtas.mayon", 
        github: "https://github.com/ogbry/mayon-geo-pdz",
      },
    ],
  },
  {
    title: "DX Docs",
    description:
      "A full-stack collaborative documentation platform for dev studio workspaces. Features real-time multi-user editing with live cursors, nested pages with drag-and-drop reordering, a rich TipTap editor with slash commands, version history, workspace management with role-based access, and full dark mode support.",
    images: [dxdocs_img1, dxdocs_img2, dxdocs_img3, dxdocs_img4, dxdocs_img5],
    tech: [
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/UI",
      "TipTap",
      "Yjs",
      "NestJS",
      "Hocuspocus",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "NextAuth.js",
    ],
    year: "2026",
    github: "https://github.com/ogbry/dxdocs",
    type: "Personal",
    website: "https://docs.dxlabs.dev/"
  },
  
  {
    title: "ABAISS Platform (Demo)",
    description:
      "A comprehensive behavioral health management platform that automates client intake, authorization tracking, staff assignment, and quality assurance processes. Built with React and integrates Monday.com CRM with NAOMI, Rethink, and MCO systems to eliminate manual data entry and ensure compliance with authorization timelines.",
    images: [abaiss_img1, abaiss_img2, abaiss_img3],
    tech: ["React", "Node.js", "Monday.com API", "TailwindCSS", "Vercel"],
    status: "In Progress",
    year: "2025",
    github: "https://github.com/ogbry/aba-iss-portal",
    website: "https://aba-iss-portal.vercel.app/admin/dashboard",
  },
  {
    title: "HRIS Portal (Demo)",
    description:
      "A Human Resources Information System Portal for employee management, featuring recruitment tracking, turnover analytics, compliance monitoring, and organizational oversight.",
    images: [hris_img1, hris_img2, hris_img3],
    tech: ["NextJS", "TypeScript", "TailwindCSS", "Vercel"],
    year: "2025",
    github: "https://github.com/ogbry/hris-dashboard-nextjs",
    website: "https://hris-dashboard-nextjs.vercel.app",
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
    tech: ["NextJS", "TypeScript", "TailwindCSS", "Vercel"],
    // gradient: "from-blue-500 to-cyan-500",
    year: "2025",
    website: "https://smart-resume-builder-iota.vercel.app",
    github: "https://github.com/ogbry/smart-resume-builder",
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
    tech: [
      "React",
      "Node.js",
      "Python",
      "FastAPI",
      "AWS",
      "WebSockets",
      "MySQL",
    ],
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
  const [selectedPlatforms, setSelectedPlatforms] = useState<{
    [key: number]: number;
  }>({});

  const togglePlatform = (projectIndex: number, platformIndex: number) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [projectIndex]: platformIndex,
    }));
  };

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
          {projects.map((project, i) => {
            const activePlatformIndex = selectedPlatforms[i] || 0;
            const activePlatform = project.platforms
              ? project.platforms[activePlatformIndex]
              : null;
            const displayImages = activePlatform
              ? activePlatform.images
              : project.images;
            const displayTech = activePlatform
              ? activePlatform.tech
              : project.tech;
            const displayWebsite = activePlatform
              ? activePlatform.website
              : project.website;
            const displayGithub = activePlatform
              ? activePlatform.github
              : project.github;
            const displayYear = activePlatform?.year ?? project.year;

            return (
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
                    {displayImages.length > 0 ? (
                      <ImageCarousel
                        images={displayImages}
                        alt={project.title}
                        height="h-56"
                      />
                    ) : (
                      <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                        <p className="text-slate-400 dark:text-slate-500 text-sm">
                          Screenshots coming soon
                        </p>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {displayYear}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Platform Switcher */}
                    {project.platforms && project.platforms.length > 1 && (
                      <div className="mb-4 flex gap-2">
                        {project.platforms.map((platform, platformIndex) => (
                          <button
                            key={platform.name}
                            onClick={() => togglePlatform(i, platformIndex)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              activePlatformIndex === platformIndex
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                            }`}
                          >
                            {platform.name === "Android" && (
                              <svg
                                className="w-4 h-4 inline-block mr-1.5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 0 0-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 10.84 1 13.97 1 17.5h22c0-3.53-1.92-6.66-5.4-8.02zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                              </svg>
                            )}
                            {platform.name === "Web" && (
                              <svg
                                className="w-4 h-4 inline-block mr-1.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                              </svg>
                            )}
                            {platform.name}
                          </button>
                        ))}
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Website Link & Project Type */}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      {displayWebsite && (
                        <>
                          {displayWebsite.startsWith("http") ? (
                            activePlatform?.name === "Android" ? (
                              <span className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 cursor-default select-none">
                                <svg
                                  className="w-4 h-4 shrink-0"
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
                                Play Store — Under Review
                              </span>
                            ) : (
                            <a
                              href={displayWebsite}
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
                            )
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
                              {displayWebsite}
                            </span>
                          )}
                        </>
                      )}

                      {/* GitHub Link */}
                      {displayGithub && (
                        <a
                          href={displayGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
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
                      {displayTech.map((tech) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

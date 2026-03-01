"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ServicesGrid from "../components/ServicesGrid";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  const [theme, setTheme] = useState<string>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "light"
          ? "bg-white text-slate-900"
          : "bg-slate-900 text-slate-100"
      }`}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <ServicesGrid />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}

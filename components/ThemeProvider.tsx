"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
    return <div className="min-h-screen bg-slate-900">{children}</div>;
  }

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "light"
          ? "bg-white text-slate-900"
          : "bg-slate-900 text-slate-100"
      }`}
    >
      {children({ theme, toggleTheme })}
    </div>
  );
}

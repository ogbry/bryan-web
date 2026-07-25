"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Day = {
  date: string;
  contributionCount: number;
  color: string;
};

type Repo = {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string } | null;
};

type GitHubData = {
  totalContributions: number;
  weeks: Day[][];
  pinned: Repo[];
};

// Map GitHub's default green scale to an electric-blue scale to match the site.
function levelColor(count: number): string {
  if (count === 0) return "rgba(148,163,184,0.12)";
  if (count < 3) return "rgba(56,189,248,0.35)";
  if (count < 6) return "rgba(59,130,246,0.55)";
  if (count < 10) return "rgba(37,99,235,0.75)";
  return "rgba(37,99,235,1)";
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function monthLabels(weeks: Day[][]): string[] {
  let prevMonth = -1;
  return weeks.map((week) => {
    const firstDay = week[0];
    if (!firstDay) return "";
    const month = new Date(firstDay.date).getMonth();
    if (month !== prevMonth) {
      prevMonth = month;
      return MONTHS[month];
    }
    return "";
  });
}

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let active = true;
    fetch("/api/github")
      .then((r) => {
        if (!r.ok) throw new Error("failed");
        return r.json();
      })
      .then((d) => {
        if (!active) return;
        setData(d);
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => {
      active = false;
    };
  }, []);

  // Hide the whole section if it can't load — keeps the page clean.
  if (status === "error") return null;

  return (
    <section
      id="github"
      className="relative py-24 bg-slate-50 dark:bg-[#080b14] overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[140px] bg-blue-400/8 dark:bg-blue-600/10 pointer-events-none" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-4">
            Open Source
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            GitHub <span className="text-neon-gradient">Activity</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {status === "ready" && data
              ? `${data.totalContributions.toLocaleString()} contributions in the last year`
              : "Loading recent activity…"}
          </p>
        </motion.div>

        {/* Contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-border glass rounded-2xl p-5 md:p-6 mb-10 overflow-x-auto"
        >
          {status === "ready" && data ? (
            <div className="min-w-max mx-auto w-fit">
              {/* Month labels */}
              <div className="flex gap-[3px] mb-1.5">
                {monthLabels(data.weeks).map((label, i) => (
                  <div
                    key={i}
                    className="w-[11px] text-[10px] leading-none text-slate-500 dark:text-slate-400 overflow-visible whitespace-nowrap"
                  >
                    {label}
                  </div>
                ))}
              </div>
              {/* Day cells */}
              <div className="flex gap-[3px]">
                {data.weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((day) => (
                      <div
                        key={day.date}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                        className="w-[11px] h-[11px] rounded-[2px]"
                        style={{ backgroundColor: levelColor(day.contributionCount) }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-28 flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm">
              Loading contribution graph…
            </div>
          )}
        </motion.div>

        {/* Pinned repositories */}
        {status === "ready" && data && data.pinned.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.pinned.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="gradient-border group glass rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-5 h-5 text-slate-500 dark:text-slate-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z" />
                  </svg>
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {repo.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  {repo.primaryLanguage && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.primaryLanguage.color }}
                      />
                      {repo.primaryLanguage.name}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {repo.stargazerCount}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 3a3 3 0 00-1 5.83v6.34a3 3 0 101.5 0V8.83A3 3 0 006 3zm12 9a3 3 0 00-2.83 2H13a2 2 0 01-2-2V9.83a3 3 0 10-1.5 0V13a3.5 3.5 0 003.5 3.5h1.67A3 3 0 1018 12z" />
                    </svg>
                    {repo.forkCount}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

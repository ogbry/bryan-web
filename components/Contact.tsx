"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/alfuentebryan25/new-meeting";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Contact() {
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/config")
      .then((r) => r.json())
      .then((c) => active && setWhatsappUrl(c.whatsappUrl || ""))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  // Load Calendly's popup widget assets once.
  useEffect(() => {
    const cssId = "calendly-widget-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const scriptId = "calendly-widget-js";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      if (window.Calendly) setCalendlyReady(true);
      else existing.addEventListener("load", () => setCalendlyReady(true));
      return;
    }
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);
  }, []);

  const openCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open the scheduling page in a new tab if the script failed.
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 bg-white dark:bg-[#05070f] overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full blur-[150px] bg-blue-400/8 dark:bg-blue-600/10 pointer-events-none" />

      <div className="container max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left: pitch panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-2 self-start px-3 py-1.5 glass rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Available for new projects
              </span>
            </span>

            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-600 dark:text-cyan-400 mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900 dark:text-white tracking-tight leading-tight">
              Let&apos;s build <span className="text-neon-gradient">something</span> together.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              Have a project in mind, a role to fill, or just want to talk shop?
              Book a quick call or reach out on WhatsApp — I&apos;ll get back to
              you fast.
            </p>

            {/* Channels */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={whatsappUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!whatsappUrl}
                className={`group gradient-border glass rounded-2xl p-4 flex items-center gap-4 hover:shadow-2xl transition-all ${
                  !whatsappUrl ? "pointer-events-none opacity-60" : ""
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-[0_0_16px_-5px_rgba(16,185,129,0.6)]">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Chat on WhatsApp
                  </div>
                  <div className="font-medium text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Message me directly
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Location */}
              <div className="gradient-border glass rounded-2xl p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_16px_-5px_rgba(37,99,235,0.6)]">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Based in
                  </div>
                  <div className="font-medium text-slate-900 dark:text-white">
                    Legazpi City, Albay · Philippines
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Book a call CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="gradient-border glass rounded-2xl p-8 md:p-10 shadow-xl h-full flex flex-col items-center justify-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_24px_-4px_rgba(37,99,235,0.6)]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Book a 15-min intro call
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm leading-relaxed">
                Pick a time that works for you and let&apos;s talk about your
                project, role, or idea. No pressure — just a quick chat.
              </p>

              <motion.button
                onClick={openCalendly}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 text-white font-semibold rounded-2xl overflow-hidden glow-blue"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Call
                </span>
              </motion.button>

              <p className="mt-5 text-xs text-slate-400 dark:text-slate-500">
                {calendlyReady
                  ? "Powered by Calendly · opens in a popup"
                  : "Loading scheduler…"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

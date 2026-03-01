"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { io, Socket } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import ChatMessage, { Message } from "./ChatMessage";

type ConnectionStatus = "disconnected" | "connecting" | "connected" | "error";

const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL || "http://localhost:3001";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [hasSetName, setHasSetName] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const [hasUnread, setHasUnread] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sessionId = useRef<string>("");
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const existing = sessionStorage.getItem("chat_session_id");
      if (existing) {
        sessionId.current = existing;
      } else {
        const newId = uuidv4();
        sessionStorage.setItem("chat_session_id", newId);
        sessionId.current = newId;
      }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isOpen]);

  const connectSocket = useCallback(
    (name: string) => {
      if (socketRef.current?.connected) return;
      setStatus("connecting");

      const socket = io(BOT_URL, {
        transports: ["websocket", "polling"],
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
      });

      socket.on("connect", () => {
        setStatus("connected");
        socket.emit("join_session", {
          sessionId: sessionId.current,
          visitorName: name,
        });
      });

      socket.on("owner_reply", (payload) => {
        setMessages((prev) => [
          ...prev,
          {
            id: uuidv4(),
            text: payload.message,
            sender: "owner",
            timestamp: payload.timestamp,
            senderName: payload.ownerName,
          },
        ]);
        if (!isOpen) setHasUnread(true);
      });

      socket.on("system_message", (payload) => {
        setMessages((prev) => [
          ...prev,
          {
            id: uuidv4(),
            text: payload.message,
            sender: "system",
            timestamp: new Date().toISOString(),
          },
        ]);
      });

      socket.on("disconnect", () => setStatus("disconnected"));
      socket.on("connect_error", () => setStatus("error"));
      socketRef.current = socket;
    },
    [isOpen]
  );

  const handleSetName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim()) return;
    setHasSetName(true);
    connectSocket(visitorName.trim());
    setMessages([
      {
        id: uuidv4(),
        text: `Hi ${visitorName.trim()}! Leave me a message and I'll reply here as soon as I can.`,
        sender: "system",
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !socketRef.current?.connected) return;
    const message = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [
      ...prev,
      {
        id: uuidv4(),
        text: message,
        sender: "visitor",
        timestamp: new Date().toISOString(),
        senderName: visitorName,
      },
    ]);
    socketRef.current.emit("visitor_message", {
      sessionId: sessionId.current,
      visitorName,
      message,
      timestamp: new Date().toISOString(),
    });
  };

  useEffect(() => {
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const statusDot: Record<ConnectionStatus, string> = {
    connected: "bg-green-400",
    connecting: "bg-yellow-400 animate-pulse",
    disconnected: "bg-slate-400",
    error: "bg-red-400",
  };

  const statusText: Record<ConnectionStatus, string> = {
    connected: "Online now",
    connecting: "Connecting...",
    disconnected: hasSetName ? "Offline" : "Usually replies quickly",
    error: "Connection error",
  };

  const panelVariants = isMobile
    ? {
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
      }
    : {
        initial: { opacity: 0, y: 24, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 24, scale: 0.95 },
      };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center text-white"
            aria-label="Open chat"
          >
            {hasUnread && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold"
              >
                !
              </motion.span>
            )}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={
              isMobile
                ? "fixed bottom-0 left-0 right-0 z-50 flex flex-col bg-white dark:bg-slate-900 rounded-t-3xl shadow-2xl overflow-hidden"
                : "fixed bottom-6 right-6 z-50 flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden w-[360px]"
            }
            style={isMobile ? { height: "85svh" } : { height: "520px" }}
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 flex-shrink-0">
              {/* Mobile drag handle */}
              {isMobile && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/30 rounded-full" />
              )}
              <div className="relative mt-1">
                <img
                  src="/image.jpeg"
                  alt="Bryan"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white/40"
                />
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${statusDot[status]}`} />
              </div>
              <div className="flex-1 min-w-0 mt-1">
                <p className="font-semibold text-white text-sm leading-none">Bryan Alfuente</p>
                <p className="text-white/70 text-xs mt-0.5">{statusText[status]}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-1 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Name prompt */}
            {!hasSetName ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-5">
                <div className="relative">
                  <img
                    src="/image.jpeg"
                    alt="Bryan"
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 dark:border-slate-700 shadow-lg"
                  />
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-slate-900" />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    Hey there! 👋
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    I&apos;m Bryan. Drop me a message and I&apos;ll get back to you right here.
                  </p>
                </div>
                <form onSubmit={handleSetName} className="w-full space-y-3 max-w-xs">
                  <div className="relative">
                    <input
                      type="text"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      placeholder="What's your name?"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                      autoFocus
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={!visitorName.trim()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                  >
                    Start Chatting →
                  </motion.button>
                </form>
              </div>
            ) : (
              <>
                {/* Messages area */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 scroll-smooth">
                  {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input bar */}
                <div className="flex-shrink-0 px-3 py-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <form onSubmit={handleSend} className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={status === "connected" ? "Type a message..." : "Connecting..."}
                      disabled={status !== "connected"}
                      className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all"
                    />
                    <motion.button
                      type="submit"
                      disabled={!inputValue.trim() || status !== "connected"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.92 }}
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-md shadow-blue-500/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                      aria-label="Send"
                    >
                      <svg className="w-4 h-4 translate-x-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </motion.button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

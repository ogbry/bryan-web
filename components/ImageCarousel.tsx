"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Support both string URLs and Next.js StaticImageData
type ImageSource = string | { src: string; width?: number; height?: number };

interface ImageCarouselProps {
  images: ImageSource[];
  alt: string;
  gradient?: string;
  height?: string;
}

// Helper to get image src from either string or StaticImageData
const getImageSrc = (image: ImageSource): string => {
  return typeof image === "string" ? image : image.src;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ImageCarousel({
  images,
  alt,
  gradient,
  height = "h-56",
}: ImageCarouselProps) {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex([newIndex, newDirection]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative ${height} overflow-hidden group`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <img
            src={getImageSrc(images[currentIndex])}
            alt={`${alt} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {gradient && (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Arrow Navigation - Hidden on mobile */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm transition-all ${
              currentIndex === 0
                ? "opacity-0 cursor-not-allowed"
                : "opacity-0 group-hover:opacity-100 hover:bg-white/30 dark:hover:bg-slate-900/30"
            }`}
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            disabled={currentIndex === images.length - 1}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm transition-all ${
              currentIndex === images.length - 1
                ? "opacity-0 cursor-not-allowed"
                : "opacity-0 group-hover:opacity-100 hover:bg-white/30 dark:hover:bg-slate-900/30"
            }`}
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentIndex([index, index > currentIndex ? 1 : -1])
              }
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
                  : "w-2 h-2 bg-white/60 dark:bg-slate-400/60 hover:bg-white/80 dark:hover:bg-slate-400/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex([newIndex, newDirection]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen && e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isModalOpen]);

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
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            loading="lazy"
            onClick={() => setIsModalOpen(true)}
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

      {/* Full-Screen Modal - Using Portal */}
      {mounted && isModalOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-0"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Modal Content */}
          <div
            className="relative w-full h-full flex items-center justify-center px-20 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
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
                src={getImageSrc(images[currentIndex])}
                alt={`${alt} - Image ${currentIndex + 1}`}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(-1);
                  }}
                  disabled={currentIndex === 0}
                  className={`absolute left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm transition-all ${
                    currentIndex === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:bg-white/30 hover:scale-110"
                  }`}
                  aria-label="Previous image"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(1);
                  }}
                  disabled={currentIndex === images.length - 1}
                  className={`absolute right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm transition-all ${
                    currentIndex === images.length - 1
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:bg-white/30 hover:scale-110"
                  }`}
                  aria-label="Next image"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Dot Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex([index, index > currentIndex ? 1 : -1]);
                    }}
                    className={`transition-all rounded-full ${
                      index === currentIndex
                        ? "w-10 h-3 bg-gradient-to-r from-blue-400 to-indigo-400"
                        : "w-3 h-3 bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface KeyScreen {
  title: string;
  description: string;
  image: string;
}

interface ProjectCarouselProps {
  heroImage: string;
  heroTitle: string;
  keyScreens: KeyScreen[];
}

export default function ProjectCarousel({
  heroImage,
  heroTitle,
  keyScreens,
}: ProjectCarouselProps) {
  // Combine heroImage as slide 0 + keyScreens as slides 1..N
  const slides = [
    {
      title: `${heroTitle} — Main Overview`,
      description: "Primary production application interface capture.",
      image: heroImage,
    },
    ...keyScreens,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="space-y-4">
      {/* Carousel Container */}
      <div className="relative rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl group">
        
        {/* Top Bar with Slide Counter & Caption */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-zinc-900/90 border-b border-zinc-800/80">
          <div className="space-y-0.5 max-w-xl">
            <h4 className="text-xs font-bold text-white tracking-tight truncate">
              {currentSlide.title}
            </h4>
            <p className="text-[11px] text-zinc-400 truncate">
              {currentSlide.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 font-mono text-xs text-blue-400 font-bold">
              {currentIndex + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Main Slide Image Frame */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls: Left Arrow */}
          <button
            onClick={slidePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 z-20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Controls: Right Arrow */}
          <button
            onClick={slideNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 z-20"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Selector Bar */}
        <div className="flex items-center justify-center gap-2 p-3 bg-zinc-900/60 border-t border-zinc-800/80 overflow-x-auto">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                idx === currentIndex
                  ? "border-blue-500 scale-105 shadow-md shadow-blue-500/20"
                  : "border-zinc-800 opacity-50 hover:opacity-100 hover:border-zinc-700"
              }`}
            >
              <Image src={slide.image} alt={slide.title} fill className="object-cover" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

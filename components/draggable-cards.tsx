"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, Move, RefreshCw, Sparkles } from "lucide-react";

interface CardData {
  id: string;
  title: string;
  category: string;
  domain: string;
  url: string;
  image: string;
  initialPos: { top: string; left?: string; right?: string; rotate: number; z: number };
}

const CARDS: CardData[] = [
  {
    id: "travquest",
    title: "TravQuest Travel Marketplace",
    category: "FEATURED PRODUCTION BUILD",
    domain: "travquest.in",
    url: "https://www.travquest.in/",
    image: "/projects/travquest/image1.jpeg",
    initialPos: { top: "35%", left: "5%", rotate: -2, z: 30 },
  },
  {
    id: "ehresmann",
    title: "Ehresmann Engineering",
    category: "ENTERPRISE ENGINEERING",
    domain: "ehresmannengineering.com",
    url: "https://www.ehresmannengineering.com/",
    image: "/projects/ehrishmaan/image1.jpeg",
    initialPos: { top: "18%", left: "2%", rotate: -4, z: 20 },
  },
  {
    id: "ocular",
    title: "Ocular IoT Dashboard",
    category: "INDUSTRIAL IOT",
    domain: "ocular-iot.com",
    url: "https://ocular-iot.com/",
    image: "/projects/ocular/image1.jpeg",
    initialPos: { top: "2%", right: "2%", rotate: 4, z: 10 },
  },
];

export default function DraggableCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [topCardId, setTopCardId] = useState<string>("travquest");
  const [resetKey, setResetKey] = useState<number>(0);

  const handleCardClick = (id: string) => {
    setTopCardId(id);
  };

  const resetPositions = () => {
    setResetKey((prev) => prev + 1);
    setTopCardId("travquest");
  };

  return (
    <div className="relative w-full space-y-3">
      {/* Interactive Helper Badge & Reset Button */}
      <div className="flex items-center justify-between px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
          <Move className="w-3.5 h-3.5 animate-bounce" />
          <span className="font-semibold text-[11px] uppercase tracking-wider">
            DRAG & SHUFFLE CARDS
          </span>
        </div>

        <button
          onClick={resetPositions}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
          title="Reset card positions"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reset Stack</span>
        </button>
      </div>

      {/* Draggable Playground Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-3xl bg-zinc-950/60 border border-zinc-800/80 p-4 overflow-hidden shadow-2xl backdrop-blur-md select-none cursor-grab active:cursor-grabbing"
      >
        {/* Background Grid Pattern inside container */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {CARDS.map((card) => {
          const isTop = topCardId === card.id;
          const zIndex = isTop ? 40 : card.initialPos.z;

          return (
            <motion.div
              key={`${card.id}-${resetKey}`}
              drag
              dragConstraints={containerRef}
              dragElastic={0.15}
              whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50 }}
              whileHover={{ scale: 1.02 }}
              onDragStart={() => handleCardClick(card.id)}
              onClick={() => handleCardClick(card.id)}
              style={{
                top: card.initialPos.top,
                left: card.initialPos.left,
                right: card.initialPos.right,
                zIndex: zIndex,
              }}
              initial={{ rotate: card.initialPos.rotate, opacity: 0, scale: 0.9 }}
              animate={{ rotate: isTop ? 0 : card.initialPos.rotate, opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`absolute w-[88%] sm:w-[84%] rounded-2xl bg-zinc-900 border transition-colors duration-300 p-3 shadow-2xl backdrop-blur-xl ${
                isTop
                  ? "border-blue-500/80 shadow-blue-500/20"
                  : "border-zinc-800/80 hover:border-zinc-700"
              }`}
            >
              {/* Card Browser Bar */}
              <div className="flex items-center justify-between px-2 pb-2 border-b border-zinc-800/80 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>

                <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-blue-400" />
                  {card.domain}
                </span>

                <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                  <Move className="w-2.5 h-2.5 text-zinc-400" />
                  DRAG
                </span>
              </div>

              {/* Card Image Display */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 group">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent p-3.5 flex flex-col justify-end">
                  <div className="flex items-center justify-between pointer-events-auto">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[9px] font-mono font-bold mb-1">
                        {card.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-white/10 hover:bg-white text-white hover:text-zinc-950 backdrop-blur-md flex items-center justify-center transition-all shrink-0 ml-2"
                      title={`Launch ${card.domain}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

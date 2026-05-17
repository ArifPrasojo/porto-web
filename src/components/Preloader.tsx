"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  const brandName = "ArfPorto.";

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const bootingTexts = [
    "INITIATING GUNDAM OS...",
    "CHECKING REACTOR...",
    "GN DRIVE [ OK ]",
    "CALIBRATING SENSORS...",
    "HUD SYSTEMS [ ONLINE ]",
    "ALL SYSTEMS GO."
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-[#0A0B10] flex flex-col items-center justify-center font-mono"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline pointer-events-none z-0"></div>
          
          {/* Top Left OS Label */}
          <div className="absolute top-8 left-8 text-[var(--color-danger)] text-xs font-bold tracking-[0.3em] gundam-glitch opacity-80 hidden md:block">
            WARNING: PROTOTYPE OS V2.0
          </div>
          
          {/* Top Right System Status */}
          <div className="absolute top-8 right-8 text-[var(--color-highlight)] text-xs font-bold tracking-widest text-right hidden md:block">
            <span className="block mb-1">SYSTEM: STANDBY</span>
            <span className="block opacity-50">SYNC RATE: {count}%</span>
          </div>

          <div className="relative flex flex-col items-center w-full max-w-lg px-6 z-10">
            
            {/* Main HUD Frame */}
            <div className="w-full mecha-cut mecha-border border-b-4 border-b-[var(--color-accent)] bg-[var(--color-secondary)] p-8 relative shadow-2xl">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-highlight)]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-danger)]"></div>

              {/* Logo Box */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="relative w-24 h-24">
                    <Image 
                      src="/gundam_a_logo.png" 
                      alt="Logo" 
                      fill 
                      sizes="96px"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </motion.div>
              </div>

              {/* Brand Name */}
              <div className="flex justify-center mb-6">
                <span className="text-2xl md:text-3xl font-black tracking-[0.2em] text-[var(--color-text-main)] uppercase">
                  ArfPorto<span className="text-[var(--color-danger)] animate-pulse">_</span>
                </span>
              </div>

              {/* Loading Logs */}
              <div className="h-20 mb-6 flex flex-col justify-end items-center overflow-hidden w-full text-center">
                {bootingTexts.map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: count > (i * 15) ? 1 : 0, 
                      height: count > (i * 15) ? "auto" : 0 
                    }}
                    className={`text-xs md:text-sm font-bold tracking-widest ${
                      text.includes("[ OK ]") || text.includes("[ ONLINE ]") || text.includes("GO.") 
                        ? "text-[var(--color-accent)]" 
                        : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 bg-[var(--color-primary)] mecha-cut-sm overflow-hidden border border-[var(--color-border)] relative">
                {/* Tick marks behind progress */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjEwIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] z-0"></div>
                
                <motion.div 
                  className="h-full bg-[var(--color-highlight)] relative z-10"
                  initial={{ width: 0 }}
                  animate={{ width: `${count}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between w-full mt-2 text-[10px] font-bold text-[var(--color-text-muted)]">
                <span>BOOT SEQ</span>
                <span className="text-[var(--color-highlight)]">{count}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

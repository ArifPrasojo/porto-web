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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-[#0f172a] flex flex-col items-center justify-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-10"
            >
              <div className="relative w-24 h-24 overflow-hidden rounded-3xl border-2 border-blue-500/30 bg-slate-900 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <Image 
                  src="/logo-v2.png" 
                  alt="Logo" 
                  fill 
                  className="object-cover p-1"
                />
              </div>
            </motion.div>

            {/* Brand Name with Typing Effect */}
            <div className="flex mb-3">
              {brandName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.1 + index * 0.1,
                  }}
                  className={`text-3xl md:text-4xl font-black tracking-tighter ${
                    char === "." ? "text-blue-500" : "text-white"
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtext and Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em]"
            >
              <span>Initializing</span>
              <span className="text-slate-700 w-12 h-px bg-slate-800 block"></span>
              <span className="text-blue-400 min-w-[3ch]">{count}%</span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="mt-10 w-64 h-[3px] bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/30">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Decorative Cursor */}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="absolute bottom-20 text-blue-500 font-mono text-xl"
          >
            _
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

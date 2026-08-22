"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

const COUNTDOWN = 3;
const subscribe = () => () => {};

const statusTexts: Record<number, string> = {
  3: "SYSTEM INITIALIZATION",
  2: "CALIBRATING SENSORS",
  1: "PREPARING LAUNCH",
  0: "ALL SYSTEMS GO",
};

export default function Preloader() {
  const [seconds, setSeconds] = useState(COUNTDOWN);
  const [isVisible, setIsVisible] = useState(true);
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 800);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

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
          className="fixed inset-0 z-[100] bg-[#0A0B10] flex flex-col items-center justify-center font-mono"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline pointer-events-none z-0"></div>

          {/* Countdown Display */}
          <div className="relative z-10 flex flex-col items-center px-6">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={seconds}
                initial={{ opacity: 0, scale: 1.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`text-[14rem] sm:text-[18rem] md:text-[22rem] leading-none font-black font-cyberform ${
                  seconds === 0
                    ? "text-[var(--color-danger)]"
                    : "text-[var(--color-highlight)]"
                }`}
              >
                {seconds}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
              <motion.span
                key={`text-${seconds}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-4 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
              >
                {statusTexts[seconds]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

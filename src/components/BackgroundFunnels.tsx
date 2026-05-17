"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Funnel = ({ 
  delay, 
  startX, 
  startY, 
  duration, 
  direction 
}: { 
  delay: number; 
  startX: string; 
  startY: string; 
  duration: number;
  direction: 1 | -1;
}) => {
  return (
    <motion.div
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{ 
        x: [
          startX, 
          `calc(${startX} + ${30 * direction}vw)`, 
          `calc(${startX} + ${60 * direction}vw)`, 
          `calc(${startX} + ${90 * direction}vw)`
        ],
        y: [
          startY, 
          `calc(${startY} - 20vh)`, 
          `calc(${startY} + 30vh)`, 
          `calc(${startY} - 10vh)`
        ],
        opacity: [0, 1, 1, 0],
        rotate: [0, 15 * direction, -5 * direction, 10 * direction]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      className="fixed z-0 pointer-events-none"
    >
      {/* Funnel Assembly (Mecha Drone) */}
      <div 
        className="relative flex items-center" 
        style={{ transform: `scaleX(${direction === 1 ? 1 : -1})` }}
      >
        {/* Engine Thruster Effect (Emits from the Tail on the Left) */}
        <motion.div 
          animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.2, repeat: Infinity }}
          className="absolute right-[80%] w-10 h-1 bg-[var(--color-highlight)] origin-right blur-[2px]"
          style={{ marginRight: '-2px' }}
        />

        {/* Drone Body (Custom Image pointing Right) */}
        <div className="relative w-16 h-16 md:w-24 md:h-24 z-10 flex items-center justify-center">
          <Image
            src="/pesawat1.png"
            alt="Mecha Spacecraft"
            fill
            sizes="96px"
            className="object-contain drop-shadow-[0_0_10px_var(--color-accent)]"
            unoptimized
          />
        </div>
        
        {/* Laser Beam (Shoots from the Nose on the Right) */}
        <motion.div 
          animate={{ opacity: [0, 0, 1, 1, 0, 0], scaleX: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: delay + 1 }}
          className="absolute left-[80%] h-[4px] w-56 md:w-96 bg-[var(--color-danger)] shadow-[0_0_20px_var(--color-danger)] origin-left z-0"
        />

        {/* Enemy Comet / Asteroid */}
        <motion.div
          animate={{
            x: [600, 400, 200, 220, 220, 600], // Approaches, hits at x=200, gets blown back, resets
            y: [-200, -100, 0, 20, 20, -200], // Comes diagonally from top right
            opacity: [0, 1, 1, 0, 0, 0], // Visible until explosion point
            scale: [0.5, 0.8, 1, 1.5, 0, 0], // Grows as it gets closer, expands on hit, vanishes
            rotate: [0, -90, -180, -250, 0, 0] // Tumbling rotation
          }}
          transition={{ duration: 3, repeat: Infinity, delay: delay + 1 }}
          className="absolute left-[80%] z-20 flex items-center justify-center pointer-events-none"
        >
          {/* Comet Rock Core */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-400 to-stone-800 shadow-[inset_-3px_-3px_10px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Craters */}
            <div className="absolute top-2 left-2 w-3 h-2 rounded-full bg-stone-900/40" />
            <div className="absolute bottom-2 right-3 w-4 h-3 rounded-full bg-stone-900/30" />
            <div className="absolute top-4 right-1 w-2 h-2 rounded-full bg-stone-900/50" />
          </div>

          {/* Comet Fire Tail */}
          <div className="absolute top-1/2 left-full -translate-y-1/2 w-16 h-8 bg-gradient-to-r from-orange-500/80 to-transparent blur-md -z-10 rounded-full" />

          {/* Explosion Particle Burst (Syncs with the exact hit frame) */}
          <motion.div 
            animate={{ opacity: [0, 0, 0, 1, 0, 0], scale: [0, 0, 0, 2.5, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: delay + 1 }}
            className="absolute inset-0 bg-yellow-400 shadow-[0_0_40px_var(--color-danger)] rounded-full mix-blend-screen"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function BackgroundFunnels() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Funnel 1 - Top Left */}
      <Funnel delay={0} startX="-10vw" startY="20vh" duration={12} direction={1} />
      
      {/* Funnel 2 - Bottom Right */}
      <Funnel delay={3} startX="110vw" startY="70vh" duration={15} direction={-1} />
      
      {/* Funnel 3 - Middle Left */}
      <Funnel delay={6} startX="-10vw" startY="50vh" duration={10} direction={1} />
      
      {/* Funnel 4 - Top Right */}
      <Funnel delay={8} startX="110vw" startY="30vh" duration={14} direction={-1} />
    </div>
  );
}

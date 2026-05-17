"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Planet = ({ 
  className, 
  sizeClasses, 
  gradient, 
  duration, 
  craters 
}: { 
  className: string; 
  sizeClasses: string; 
  gradient: string; 
  duration: number;
  craters: React.ReactNode;
}) => {
  return (
    <div className={`absolute ${className} pointer-events-none z-0 opacity-70 md:opacity-90 ${sizeClasses} rounded-full`}>
      {/* Rotating Planet Surface */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className={`w-full h-full rounded-full ${gradient} relative overflow-hidden flex items-center justify-center`}
      >
        {craters}
      </motion.div>
      
      {/* 3D Static Shadow Overlay (Does not rotate, keeping lighting consistent) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-black/90 pointer-events-none" />
    </div>
  );
};

export default function BackgroundPlanets() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Big Moon - Top Right */}
      <Planet 
        className="-top-20 -right-20 md:-top-40 md:-right-40" 
        sizeClasses="w-64 h-64 md:w-[500px] md:h-[500px]" 
        gradient="bg-gradient-to-br from-stone-400 via-stone-500 to-stone-800" 
        duration={120}
        craters={
          <>
            <div className="absolute top-[20%] left-[30%] w-[15%] h-[15%] rounded-full bg-stone-900/60 shadow-[inset_2px_2px_10px_rgba(0,0,0,0.8)]" />
            <div className="absolute bottom-[30%] right-[25%] w-[25%] h-[25%] rounded-full bg-stone-900/50 shadow-[inset_4px_4px_15px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-[50%] left-[15%] w-[10%] h-[10%] rounded-full bg-stone-900/60 shadow-[inset_1px_1px_5px_rgba(0,0,0,0.8)]" />
            <div className="absolute bottom-[15%] left-[40%] w-[12%] h-[12%] rounded-full bg-stone-900/40 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.6)]" />
            <div className="absolute top-[40%] right-[10%] w-[18%] h-[18%] rounded-full bg-stone-900/30 shadow-[inset_3px_3px_12px_rgba(0,0,0,0.5)]" />
          </>
        }
      />

      {/* Blue Ice Planet - Bottom Left */}
      <Planet 
        className="top-[75vh] -left-16 md:top-[65vh] md:-left-32" 
        sizeClasses="w-40 h-40 md:w-[400px] md:h-[400px]" 
        gradient="bg-gradient-to-br from-cyan-300 via-blue-600 to-blue-950" 
        duration={80}
        craters={
          <>
            {/* Ice streaks */}
            <div className="absolute top-[40%] left-[10%] w-[80%] h-[2%] bg-cyan-100/40 -rotate-12 blur-sm" />
            <div className="absolute top-[60%] left-[20%] w-[60%] h-[1%] bg-cyan-100/30 rotate-6 blur-[1px]" />
            <div className="absolute top-[25%] right-[20%] w-[15%] h-[15%] rounded-full bg-blue-900/70 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.8)]" />
            <div className="absolute bottom-[30%] left-[30%] w-[20%] h-[20%] rounded-full bg-blue-900/60 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.7)]" />
          </>
        }
      />

      {/* Small Red Planet - Top Left (Distant) */}
      <Planet 
        className="top-[15vh] left-[5vw] md:top-[20vh] md:left-[15vw] opacity-20 md:opacity-30" 
        sizeClasses="w-16 h-16 md:w-24 md:h-24" 
        gradient="bg-gradient-to-br from-orange-400 via-red-600 to-rose-950" 
        duration={50}
        craters={
          <>
            <div className="absolute top-[30%] left-[20%] w-[20%] h-[20%] rounded-full bg-red-950/80 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.8)]" />
            <div className="absolute bottom-[20%] right-[30%] w-[30%] h-[30%] rounded-full bg-red-950/70 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.8)]" />
          </>
        }
      />

    </div>
  );
}

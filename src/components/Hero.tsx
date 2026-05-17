"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-22 pb-20 md:pt-16 md:pb-0 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-400 rounded-full mix-blend-screen filter blur-[128px] opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 mt-10 md:mt-0">

        {/* Left: Text Content */}
        <div className="flex-1 max-w-3xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--color-accent)] font-medium tracking-wider uppercase text-sm mb-4 block">
              {t.hero.greeting}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--color-text-main)] tracking-tight mb-6"
          >
            Arif Prasojo
            <span className="text-[var(--color-highlight)] gundam-glitch inline-block break-all sm:break-normal">
              /Web_Developer.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white mecha-cut font-bold hover:gap-4 transition-all border-l-4 border-[var(--color-highlight)] shadow-[4px_4px_0_var(--color-border)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              {/* Thruster Hover Animation */}
              <div className="absolute inset-y-0 left-[-100%] w-8 bg-[var(--color-highlight)] skew-x-[-20deg] group-hover:animate-thruster"></div>
              <span className="relative z-10">{t.hero.cta}</span> 
              <ArrowRight size={18} className="relative z-10" />
            </a>
          </motion.div>
        </div>

        {/* Right: Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full max-w-[280px] sm:max-w-md mx-auto md:max-w-none flex justify-center mt-10 mb-12 md:mt-0 md:mb-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Solid Tech Background (No Gradient) */}
            <div className="absolute inset-0 bg-[var(--color-accent)] mecha-cut opacity-30 animate-pulse"></div>

            {/* Inner Ring */}
            <div className="absolute inset-2 bg-[var(--color-secondary)] mecha-cut border border-[var(--color-border)] scanline"></div>

            {/* Image Container */}
            <div className="absolute inset-4 overflow-hidden mecha-cut border-4 border-[var(--color-primary)] shadow-2xl">
              <Image
                src="/img/profile.JPG"
                alt="Foto Profil Arif Prasojo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            {/* Decoration Dashed Ring */}
            <div className="absolute inset-0 mecha-cut border-2 border-dashed border-[var(--color-highlight)] animate-pulse"></div>

            {/* Flying Mecha Funnel (Drone) */}
            <motion.div
              animate={{ 
                x: [-20, 20, -10, 30, -20], 
                y: [-20, -40, 10, -30, -20],
                rotate: [0, 15, -15, 10, 0]
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-8 h-8 bg-[var(--color-danger)] mecha-cut-sm shadow-[0_0_15px_var(--color-danger)] border border-white z-50 flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-white animate-ping"></div>
            </motion.div>

            {/* Floating HUD Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-[var(--color-secondary)] p-3 mecha-cut-sm mecha-border border-b-4 border-b-[var(--color-highlight)] shadow-[4px_4px_0_var(--color-border)] text-center min-w-[120px]"
            >
              <span className="text-xl font-black text-[var(--color-text-main)] block mb-1">
                SYSTEM<span className="text-[var(--color-danger)] animate-pulse">_</span>
              </span>
              <span className="text-xs text-[var(--color-accent)] uppercase tracking-widest font-bold">ONLINE</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

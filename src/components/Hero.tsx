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
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[100px] opacity-40" />

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
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--color-text-main)] tracking-tight mb-6 font-cyberform"
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
            className="text-lg md:text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0"
          >
            {t.hero.description}
          </motion.p>

          {/* Availability Status HUD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-8 border border-[var(--color-border)] bg-[var(--color-secondary)]/50 p-4 mecha-cut border-l-4 border-l-[var(--color-accent)] max-w-xl mx-auto md:mx-0 text-left relative overflow-hidden"
          >
            {/* Top scanning animation line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent animate-pulse" />
            
            <div className="flex items-center justify-between mb-3 border-b border-[var(--color-border)]/30 pb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                </span>
                <span className="text-xs font-black tracking-widest text-[var(--color-accent)] uppercase">
                  {t.hero.statusTitle}
                </span>
              </div>
              <span className="text-[9px] text-[var(--color-highlight)] font-mono tracking-widest animate-pulse">ACTIVE_MODE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Card 1: Open to Work */}
              <div className="p-2.5 bg-[var(--color-primary)]/40 border border-[var(--color-border)]/40 hover:border-[var(--color-accent)] transition-all mecha-cut-sm group cursor-help">
                <div className="flex items-center justify-between mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                </div>
                <div className="text-xs font-black text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {t.hero.statusOpenToWork}
                </div>
                <div className="text-[9px] text-[var(--color-text-muted)] mt-1 font-mono leading-tight">
                  {t.hero.statusOpenToWorkSub}
                </div>
              </div>

              {/* Card 2: Open to Problem-Based */}
              <div className="p-2.5 bg-[var(--color-primary)]/40 border border-[var(--color-border)]/40 hover:border-[var(--color-highlight)] transition-all mecha-cut-sm group cursor-help">
                <div className="flex items-center justify-between mb-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-highlight)] animate-pulse shadow-[0_0_8px_#FFCC00]" />
                </div>
                <div className="text-xs font-black text-white group-hover:text-[var(--color-highlight)] transition-colors">
                  {t.hero.statusProjectBased}
                </div>
                <div className="text-[9px] text-[var(--color-text-muted)] mt-1 font-mono leading-tight">
                  {t.hero.statusProjectBasedSub}
                </div>
              </div>

              {/* Card 3: Open to Create Porto */}
              <div className="p-2.5 bg-[var(--color-primary)]/40 border border-[var(--color-border)]/40 hover:border-[var(--color-danger)] transition-all mecha-cut-sm group cursor-help">
                <div className="flex items-center justify-between mb-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-danger)] animate-pulse shadow-[0_0_8px_#E60012]" />
                </div>
                <div className="text-xs font-black text-white group-hover:text-[var(--color-danger)] transition-colors">
                  {t.hero.statusCreatePorto}
                </div>
                <div className="text-[9px] text-[var(--color-text-muted)] mt-1 font-mono leading-tight">
                  {t.hero.statusCreatePortoSub}
                </div>
              </div>
            </div>
          </motion.div>

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
            <div className="absolute inset-0 bg-[var(--color-accent)] mecha-cut opacity-50 shadow-[0_0_30px_var(--color-accent)] animate-pulse"></div>

            {/* Inner Ring */}
            <div className="absolute inset-2 bg-[var(--color-secondary)] mecha-cut scanline"></div>

            {/* Image Container */}
            <div className="absolute inset-4 overflow-hidden mecha-cut border-4 border-[var(--color-accent)] shadow-[0_0_20px_var(--color-accent)]">
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

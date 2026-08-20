"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Briefcase, Globe, Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const statusItems = [
    { label: t.hero.statusOpenToWork, sub: t.hero.statusOpenToWorkSub, icon: <CheckCircle size={14} />, color: "var(--color-accent)" },
    { label: t.hero.statusProjectBased, sub: t.hero.statusProjectBasedSub, icon: <Briefcase size={14} />, color: "var(--color-highlight)" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-22 pb-20 md:pt-16 md:pb-0 overflow-hidden" aria-label="Hero section">


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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a href="#projects"
              className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white mecha-cut font-bold hover:gap-4 transition-all border-l-4 border-[var(--color-highlight)] shadow-[4px_4px_0_var(--color-border)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
              <div className="absolute inset-y-0 left-[-100%] w-8 bg-[var(--color-highlight)] skew-x-[-20deg] group-hover:animate-thruster"></div>
              <span className="relative z-10">{t.hero.cta}</span>
              <ArrowRight size={18} className="relative z-10" />
            </a>
            <a href="/CV_Arif_Prasojo_ATS.pdf" target="_blank" rel="noopener noreferrer"
              download="CV_Arif_Prasojo_ATS.pdf"
              className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 bg-transparent text-[var(--color-highlight)] mecha-cut font-bold hover:gap-4 transition-all border-2 border-[var(--color-highlight)] shadow-[4px_4px_0_var(--color-border)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-[var(--color-highlight)] hover:text-black">
              <Download size={18} className="relative z-10" />
              <span className="relative z-10">{t.hero.downloadCv}</span>
            </a>
          </motion.div>

          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-text-muted)] block mb-3 text-center md:text-left">
              {t.hero.statusTitle}
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {statusItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-[var(--color-secondary)] border border-[var(--color-border)] mecha-cut-sm text-xs group hover:border-[var(--color-accent)] transition-colors"
                >
                  <span style={{ color: item.color }} className="shrink-0">{item.icon}</span>
                  <div className="flex flex-col leading-tight">
                    <span className="font-bold text-[var(--color-text-main)] text-[11px]">{item.label}</span>
                    <span className="text-[var(--color-text-muted)] text-[9px]">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
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
            <div className="absolute inset-0 bg-[var(--color-accent)] mecha-cut opacity-50 shadow-[0_0_30px_var(--color-accent)] animate-pulse"></div>
            <div className="absolute inset-2 bg-[var(--color-secondary)] mecha-cut scanline"></div>
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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 mecha-cut border-2 border-dashed border-[var(--color-highlight)] opacity-50"
            ></motion.div>
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[var(--color-danger)] z-20"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-[var(--color-danger)] z-20"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-[var(--color-danger)] z-20"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[var(--color-danger)] z-20"></div>
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-[var(--color-accent)] shadow-[0_0_15px_var(--color-accent)] z-30 opacity-70"
            ></motion.div>
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

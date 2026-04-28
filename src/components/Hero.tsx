"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
            className="text-5xl md:text-7xl font-extrabold text-[var(--color-text-main)] tracking-tight mb-6"
          >
            Arif Prasojo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-blue-300">
              Web Developer.
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
              className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-blue-600 transition-all hover:gap-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              {t.hero.cta} <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full max-w-[280px] sm:max-w-md mx-auto md:max-w-none flex justify-center mt-10 md:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)] to-blue-300 rounded-full opacity-20 blur-2xl animate-pulse"></div>

            {/* Inner Ring */}
            <div className="absolute inset-2 bg-[var(--color-secondary)] rounded-full border border-[var(--color-border)]"></div>

            {/* Image Container */}
            <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-[var(--color-primary)] shadow-2xl">
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
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-600 animate-[spin_20s_linear_infinite]"></div>

            {/* Floating Badge (Optional touch of expert animation) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-[var(--color-primary)] p-3 rounded-2xl border border-[var(--color-border)] shadow-xl"
            >
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

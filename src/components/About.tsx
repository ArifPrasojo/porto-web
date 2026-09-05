"use client";

import Image from "next/image";
import { Briefcase, MapPin, GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 px-4 bg-[#0b132b] border-t border-[#162544] overflow-hidden" aria-label="About section">
      <div className="four-point-star top-20 left-[18%]" />
      <div className="star w-1.5 h-1.5 top-40 left-[10%]" />
      <div className="four-point-star top-60 left-[62%]" />
      <div className="star w-1 h-1 top-80 left-[35%]" />

      <div className="absolute right-[-80px] sm:right-[-40px] top-[180px] w-64 sm:w-80 h-64 sm:h-80 pointer-events-none z-0 hidden sm:block">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 300">
          <defs>
            <linearGradient id="planetGradCyan" x1="20%" x2="80%" y1="20%" y2="80%">
              <stop offset="0%" stopColor="#e0fdff" />
              <stop offset="35%" stopColor="#00f2fe" />
              <stop offset="70%" stopColor="#00808a" />
              <stop offset="100%" stopColor="#042638" />
            </linearGradient>
          </defs>
          <circle cx="150" cy="150" fill="url(#planetGradCyan)" filter="drop-shadow(0 0 20px rgba(0, 242, 254, 0.25))" r="90" />
          <path d="M 80,120 Q 150,145 220,115" fill="none" opacity="0.75" stroke="#a5f3fc" strokeWidth="6" />
          <path d="M 65,150 Q 150,180 238,145" fill="none" opacity="0.6" stroke="#0891b2" strokeWidth="8" />
          <path d="M 75,180 Q 150,210 225,175" fill="none" opacity="0.7" stroke="#22d3ee" strokeWidth="6" />
          <ellipse cx="140" cy="165" fill="none" opacity="0.75" rx="150" ry="26" stroke="#38bdf8" strokeWidth="12" transform="rotate(-18 140 165)" />
          <ellipse cx="140" cy="165" fill="none" opacity="0.9" rx="146" ry="24" stroke="#e0fdff" strokeWidth="2.5" transform="rotate(-18 140 165)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-[#00f2fe] flex items-center justify-center text-[#00373a] mb-2 shadow-[0_0_15px_rgba(0,242,254,0.4)]">
            <Briefcase size={12} />
          </div>
          <h2 className="font-display text-base font-bold text-white tracking-wider uppercase">{t.about.title}</h2>
          <span className="w-6 h-0.5 bg-[#00f2fe] mt-1 shadow-[0_0_4px_#00f2fe]" />
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#00f2fe]/40 mb-4 shadow-inner bg-[#121e38]">
            <Image src="/img/profile.JPG" alt={t.hero.name} fill className="object-cover" sizes="112px" />
          </div>
          <h3 className="font-display text-sm font-semibold text-[#e0fdff]">{t.hero.name}</h3>
          <div className="flex items-center space-x-1.5 text-[11px] text-gray-400 mt-1">
            <MapPin size={10} className="text-[#00f2fe]" />
            <span>Malang, Indonesia</span>
          </div>
          <div className="flex items-center space-x-1.5 text-[11px] text-gray-400 mt-0.5">
            <GraduationCap size={10} className="text-[#00f2fe]" />
            <span>{t.about.university}</span>
          </div>
        </div>

        <div className="max-w-xl text-left mb-8 mx-auto w-full">
          <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-2">{t.about.subtitle}</h4>
          <p className="text-[11px] leading-relaxed text-[#b9cacb] mb-3">{t.about.bio1}</p>
          <p className="text-[11px] leading-relaxed text-[#b9cacb]">{t.about.bio2}</p>
        </div>

        <div className="max-w-xl mx-auto w-full grid grid-cols-3 gap-3 mb-8">
          {[
            { value: "10+", label: t.about.infoLabel1 },
            { value: "3+", label: t.about.infoLabel2 },
            { value: "15+", label: t.about.infoLabel3 },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded bg-[#121b2f] border border-[#1e2f4f]">
              <span className="block font-display text-lg font-extrabold text-[#00f2fe]">{stat.value}</span>
              <span className="text-[9px] uppercase tracking-wider text-[#849495]">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto w-full mb-8">
          <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-3">{t.about.education}</h4>
          <div className="bg-[#121b2f] rounded p-4 border-l-2 border-[#00f2fe]">
            <p className="text-sm font-bold text-white">{t.about.major}</p>
            <p className="text-[11px] text-gray-400">{t.about.university}</p>
            <p className="font-mono text-[11px] text-gray-500 mt-1">{t.about.ipk} · {t.about.period}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
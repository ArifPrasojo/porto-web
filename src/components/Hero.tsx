"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b1b36] via-[#0b132b] to-[#091326] pt-12 pb-16"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="star w-1 h-1 top-10 left-[15%]" />
        <div className="star w-1.5 h-1.5 top-20 left-[80%]" />
        <div className="four-point-star top-16 left-[25%]" />
        <div className="four-point-star top-28 left-[72%]" />
        <div className="star w-1 h-1 top-44 left-[10%]" />
        <div className="star w-1 h-1 top-48 left-[88%]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-[#e0fdff] uppercase drop-shadow-[0_0_15px_rgba(0,242,254,0.3)] font-display">
          ArfPorto
        </h1>
        <span className="text-xs sm:text-sm tracking-widest text-[#00f2fe]/70 mt-1 uppercase font-mono">
          {t.hero.name} · {t.hero.title}
        </span>

        <div className="relative w-full max-w-xl h-72 sm:h-96 mt-6 flex items-center justify-center">
          <svg className="w-full h-full drop-shadow-[0_10px_35px_rgba(0,242,254,0.15)]" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="230" cy="90" fill="#00f2fe" opacity="0.45" rx="40" ry="8" />
            <ellipse cx="420" cy="90" fill="#00f2fe" opacity="0.45" rx="45" ry="8" />
            <polygon fill="#0b2847" opacity="0.8" points="120,240 240,140 330,240" />
            <polygon fill="#0d355c" opacity="0.85" points="270,240 370,130 480,240" />
            <polygon fill="#071b30" opacity="0.7" points="340,240 450,150 560,240" />
            <path d="M 297 120 Q 285 240 220 340 L 380 340 Q 315 240 303 120 Z" fill="url(#smokeGradient)" opacity="0.95" />
            <path d="M 299 120 L 285 260 L 315 260 Z" fill="#e0fdff" opacity="0.4" />
            <circle cx="100" cy="200" fill="#12233f" r="80" />
            <circle cx="170" cy="220" fill="#162c4e" r="70" />
            <circle cx="45" cy="260" fill="#091428" r="90" />
            <circle cx="150" cy="280" fill="#0d1b32" r="80" />
            <circle cx="260" cy="310" fill="#132746" r="85" />
            <circle cx="500" cy="200" fill="#12233f" r="80" />
            <circle cx="430" cy="220" fill="#162c4e" r="70" />
            <circle cx="555" cy="260" fill="#091428" r="90" />
            <circle cx="450" cy="280" fill="#0d1b32" r="80" />
            <circle cx="340" cy="310" fill="#132746" r="85" />
            <path d="M 0,380 Q 80,290 180,310 Q 240,320 300,380 Q 360,320 420,310 Q 520,290 600,380 L 600,400 L 0,400 Z" fill="#091326" />
            <g transform="translate(293, 90)">
              <path d="M 7,0 C 2,6 1,18 1,28 L 13,28 C 13,18 12,6 7,0 Z" fill="#1a2d4c" stroke="#38bdf8" strokeWidth="1" />
              <circle cx="7" cy="11" fill="#e0fdff" r="2.5" />
              <path d="M 1,20 L -3,28 L 1,28 Z" fill="#00f2fe" />
              <path d="M 13,20 L 17,28 L 13,28 Z" fill="#00f2fe" />
              <polygon fill="#38bdf8" points="4,28 7,37 10,28" />
              <polygon fill="#e0fdff" points="5.5,28 7,33 8.5,28" />
            </g>
            <defs>
              <linearGradient id="smokeGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#00f2fe" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#006977" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#091326" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
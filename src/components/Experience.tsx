"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

type Entry = { kind: "work" | "org"; role: string; period: string; place: string; desc: string[] };

export default function Experience() {
  const { t } = useLanguage();

  const entries: Entry[] = [
    ...t.experience.work.map((e) => ({ kind: "work" as const, role: e.role, period: e.period, place: e.company, desc: e.desc })),
    ...t.experience.org.map((e) => ({ kind: "org" as const, role: e.role, period: e.period, place: e.org, desc: e.desc })),
  ].sort((a, b) => {
    const getYear = (p: string) => parseInt(p.match(/\d{4}/)?.[0] ?? "0");
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section id="experience" className="py-16 px-4 bg-[#070e1e] border-t border-[#162544]" aria-label="Experience section">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="h-px w-6 bg-[#00f2fe]/40" />
          <h2 className="font-display text-sm font-semibold tracking-wider text-[#d9e2fd] uppercase">{t.experience.title}</h2>
          <span className="h-px w-6 bg-[#00f2fe]/40" />
        </div>
        <p className="text-center text-xs text-gray-400 mb-12">{t.experience.subtitle}</p>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00f2fe]/40 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {entries.map((entry, i) => {
              const isLeft = i % 2 === 0;
              const isWork = entry.kind === "work";

              return (
                <motion.div
                  key={entry.role + entry.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#00f2fe] shadow-[0_0_10px_rgba(0,242,254,0.6)]" />
                    <div className="absolute w-7 h-7 rounded-full border border-[#00f2fe]/30 animate-ping opacity-20" />
                  </div>

                  {/* Spacer for mobile left line */}
                  <div className="w-8 shrink-0 md:hidden" />

                  {/* Card */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                    }`}
                  >
                    <div className="bg-[#121b2f] rounded p-5 border border-[#1e2f4f] hover:border-[#00f2fe]/50 transition shadow-lg relative group">
                      {/* Connector line to center (desktop) */}
                      <div
                        className={`hidden md:block absolute top-5 w-6 h-px bg-[#00f2fe]/30 group-hover:bg-[#00f2fe]/60 transition ${
                          isLeft ? "right-[-1.5rem]" : "left-[-1.5rem]"
                        }`}
                      />

                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {isWork ? (
                          <Briefcase size={12} className="text-[#00f2fe]" />
                        ) : (
                          <Users size={12} className="text-[#00f2fe]" />
                        )}
                        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#00f2fe]">
                          {isWork ? t.experience.workTitle : t.experience.orgTitle}
                        </span>
                      </div>

                      <h3 className="font-display text-sm font-bold text-white leading-snug mb-1">{entry.role}</h3>
                      <p className="font-mono text-[10px] text-[#00f2fe]/80 mb-1">{entry.period}</p>
                      <p className="text-[11px] text-gray-400 mb-3">{entry.place}</p>

                      <ul className={`space-y-1.5 text-[11px] leading-relaxed text-[#b9cacb] ${isLeft ? "md:text-left" : ""}`}>
                        {entry.desc.map((item) => (
                          <li key={item} className="pl-3 border-l border-[#00f2fe]/25">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty spacer for opposite side (desktop) */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

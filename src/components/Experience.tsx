"use client";

import { Briefcase, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 px-4 bg-[#070e1e] border-t border-[#162544]" aria-label="Experience section">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-10">
          <span className="h-px w-6 bg-[#00f2fe]/40" />
          <h2 className="font-display text-sm font-semibold tracking-wider text-[#d9e2fd] uppercase">{t.experience.title}</h2>
          <span className="h-px w-6 bg-[#00f2fe]/40" />
        </div>
        <p className="text-center text-xs text-gray-400 mb-10 -mt-6">{t.experience.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Briefcase size={14} className="text-[#00f2fe]" />
              <h3 className="font-display text-xs font-bold tracking-wider text-white uppercase">{t.experience.workTitle}</h3>
            </div>
            <div className="space-y-4">
              {t.experience.work.map((exp) => (
                <div key={exp.company + exp.role} className="bg-[#121b2f] rounded p-4 border-l-2 border-[#00f2fe]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                    <span className="font-mono text-[10px] text-[#00f2fe]">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-2">{exp.company}</p>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-[#b9cacb] space-y-1">
                    {exp.desc.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <Users size={14} className="text-[#00f2fe]" />
              <h3 className="font-display text-xs font-bold tracking-wider text-white uppercase">{t.experience.orgTitle}</h3>
            </div>
            <div className="space-y-4">
              {t.experience.org.map((exp) => (
                <div key={exp.role + exp.period} className="bg-[#121b2f] rounded p-4 border-l-2 border-[#00f2fe]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                    <span className="font-mono text-[10px] text-[#00f2fe]">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-2">{exp.org}</p>
                  <ul className="list-disc list-outside ml-4 text-[11px] text-[#b9cacb] space-y-1">
                    {exp.desc.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
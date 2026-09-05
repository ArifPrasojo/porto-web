"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

type Entry = { role: string; period: string; place: string; desc: string[] };

const WORK_COLOR = "#00f2fe";
const ORG_COLOR = "#8b5cf6";

export default function Experience() {
  const { t } = useLanguage();

  const workEntries: Entry[] = t.experience.work.map((e) => ({
    role: e.role,
    period: e.period,
    place: e.company,
    desc: e.desc,
  }));

  const orgEntries: Entry[] = t.experience.org.map((e) => ({
    role: e.role,
    period: e.period,
    place: e.org,
    desc: e.desc,
  }));

  return (
    <section id="experience" className="py-16 px-4 bg-[#070e1e] border-t border-[#162544]" aria-label="Experience section">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="h-px w-6 bg-[#00f2fe]/40" />
          <h2 className="font-display text-sm font-semibold tracking-wider text-[#d9e2fd] uppercase">{t.experience.title}</h2>
          <span className="h-px w-6 bg-[#00f2fe]/40" />
        </div>
        <p className="text-center text-xs text-gray-400 mb-12">{t.experience.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <TimelineColumn
            title={t.experience.workTitle}
            icon={<Briefcase size={14} />}
            color={WORK_COLOR}
            entries={workEntries}
          />
          <TimelineColumn
            title={t.experience.orgTitle}
            icon={<Users size={14} />}
            color={ORG_COLOR}
            entries={orgEntries}
          />
        </div>
      </div>
    </section>
  );
}

function TimelineColumn({
  title,
  icon,
  color,
  entries,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  entries: Entry[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center border"
          style={{ color, borderColor: `${color}66`, background: `${color}1a` }}
        >
          {icon}
        </span>
        <h3 className="font-display text-xs font-bold tracking-wider text-white uppercase">{title}</h3>
      </div>

      <div className="relative pl-6 space-y-6">
        <div
          className="absolute left-[13px] top-2 bottom-2 w-px"
          style={{ background: `linear-gradient(to bottom, transparent, ${color}55, transparent)` }}
        />

        {entries.map((entry, i) => (
          <motion.div
            key={entry.role + entry.period}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative"
          >
            <div
              className="absolute left-[-25px] top-1.5 flex items-center justify-center"
              style={{ color }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}99` }} />
            </div>

            <div
              className="bg-[#121b2f] rounded p-5 border border-[#1e2f4f] hover:shadow-lg transition"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
            >
              <h4 className="font-display text-sm font-bold text-white leading-snug mb-1">{entry.role}</h4>
              <p className="font-mono text-[10px] mb-1" style={{ color }}>{entry.period}</p>
              <p className="text-[11px] text-gray-400 mb-3">{entry.place}</p>
              <ul className="space-y-1.5 text-[11px] leading-relaxed text-[#b9cacb]">
                {entry.desc.map((item) => (
                  <li key={item} className="pl-3 border-l-2" style={{ borderColor: `${color}40` }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
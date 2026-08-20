"use client";

import { motion } from "framer-motion";
import { Code, Server, Smartphone, Layout, GraduationCap, Calendar, Book, BookAIcon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const featureIcons = [
  <Code className="text-[var(--color-accent)]" size={32} key="code" />,
  <Server className="text-[var(--color-accent)]" size={32} key="server" />,
  <Smartphone className="text-[var(--color-accent)]" size={32} key="phone" />,
  <Layout className="text-[var(--color-accent)]" size={32} key="layout" />,
];

const stats: { value: string; labelKey: "infoLabel1" | "infoLabel2" | "infoLabel3" }[] = [
  { value: "10+", labelKey: "infoLabel1" },
  { value: "3+", labelKey: "infoLabel2" },
  { value: "15+", labelKey: "infoLabel3" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[var(--color-primary)] relative" aria-label="About section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-8">
              {t.about.title}
            </h2>
            <p className="text-[var(--color-text-main)] text-lg md:text-xl leading-relaxed mb-6 font-medium">
              {t.about.bio1}
            </p>
            <p className="text-[var(--color-text-main)] text-lg md:text-xl leading-relaxed font-medium mb-8">
              {t.about.bio2}
            </p>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-5 mecha-cut mecha-border bg-[var(--color-secondary)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[var(--color-highlight)]/10 mecha-cut-sm text-[var(--color-highlight)]">
                  <GraduationCap size={20} />
                </div>
                <span className="text-xs font-mono tracking-[0.2em] text-[var(--color-highlight)] uppercase">{t.about.education}</span>
              </div>
              <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1">{t.about.major}</h4>
              <p className="text-sm text-[var(--color-text-muted)]">{t.about.university}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-[var(--color-white)]">
                <Book size={12} />
                <span>{t.about.ipk}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-[var(--color-white)]">
                <Calendar size={12} />
                <span>{t.about.period}</span>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 mecha-cut-sm bg-[var(--color-secondary)] border border-[var(--color-border)]">
                  <span className="text-2xl md:text-3xl font-black text-[var(--color-highlight)] font-cyberform block">{stat.value}</span>
                  <span className="text-[10px] md:text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold mt-1 block">{t.about[stat.labelKey]}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 mecha-cut mecha-border bg-[var(--color-secondary)] hover:border-[var(--color-highlight)] transition-all hover:shadow-xl shadow-sm group"
              >
                <div className="mb-4 bg-[var(--color-accent)]/10 w-16 h-16 mecha-cut flex items-center justify-center group-hover:bg-[var(--color-highlight)]/20 transition-colors">
                  {featureIcons[index]}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { Code, Server, Smartphone, Layout, GraduationCap, Calendar, Book } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const featureIcons = [
  <Code className="text-[var(--color-accent)] group-hover:text-[var(--color-highlight)] transition-colors" size={32} key="code" />,
  <Server className="text-[var(--color-accent)] group-hover:text-[var(--color-highlight)] transition-colors" size={32} key="server" />,
  <Smartphone className="text-[var(--color-accent)] group-hover:text-[var(--color-highlight)] transition-colors" size={32} key="phone" />,
  <Layout className="text-[var(--color-accent)] group-hover:text-[var(--color-highlight)] transition-colors" size={32} key="layout" />,
];

const stats: { value: string; labelKey: "infoLabel1" | "infoLabel2" | "infoLabel3" }[] = [
  { value: "10+", labelKey: "infoLabel1" },
  { value: "3+", labelKey: "infoLabel2" },
  { value: "15+", labelKey: "infoLabel3" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--color-primary)] relative" aria-label="About section">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] font-cyberform mb-8 md:mb-12"
        >
          {t.about.title}
        </motion.h2>

        {/* Row 1: Bio (left) + Education (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-16 items-stretch mb-8 md:mb-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <p className="text-[var(--color-text-main)] text-base md:text-lg leading-relaxed mb-5">
              {t.about.bio1}
            </p>
            <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
              {t.about.bio2}
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-5 mecha-cut mecha-border bg-[var(--color-secondary)] h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[var(--color-highlight)]/10 mecha-cut-sm text-[var(--color-highlight)]">
                  <GraduationCap size={20} />
                </div>
                <span className="text-xs font-mono tracking-[0.2em] text-[var(--color-highlight)] uppercase">{t.about.education}</span>
              </div>
              <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1">{t.about.major}</h4>
              <p className="text-sm text-[var(--color-text-muted)]">{t.about.university}</p>
              <div className="flex items-center gap-2 mt-3 text-xs text-[var(--color-text-main)]">
                <Book size={12} className="shrink-0" />
                <span>{t.about.ipk}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-[var(--color-text-main)]">
                <Calendar size={12} className="shrink-0" />
                <span>{t.about.period}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-3 md:p-6 mecha-cut-sm bg-[var(--color-secondary)] border border-[var(--color-border)]">
              <span className="text-2xl md:text-3xl font-black text-[var(--color-highlight)] font-cyberform block">{stat.value}</span>
              <span className="text-[10px] md:text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-bold mt-1 block">{t.about[stat.labelKey]}</span>
            </div>
          ))}
        </motion.div>

        {/* Row 3: Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 mecha-cut mecha-border bg-[var(--color-secondary)] hover:border-[var(--color-highlight)] transition-all hover:shadow-xl shadow-sm group flex flex-col"
            >
              <div className="mb-4 bg-[var(--color-accent)]/10 w-14 h-14 mecha-cut flex items-center justify-center group-hover:bg-[var(--color-highlight)]/20 transition-colors">
                {featureIcons[index]}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

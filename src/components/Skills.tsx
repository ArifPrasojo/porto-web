"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const skillGroups = [
  { id: "frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "bootstrap", "VITE"] },
  { id: "backend", items: ["Node.js", "Express", "REST API", "PostgreSQL", "MySQL","PHP","LARAVEL","FILAMENT","JWT","NGINX","BUN"] },
  { id: "design", items: ["Figma", "Wireframing", "Prototyping", "User Research"] },
  { id: "tools", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "LINUX"] },
];

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 bg-[var(--color-secondary)]/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--color-primary)] p-8 rounded-2xl border border-slate-800 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6 pb-4 border-b border-slate-800">
                {t.skills.categories[group.id as keyof typeof t.skills.categories]}
              </h3>
              <div className="flex flex-wrap gap-3" suppressHydrationWarning>
                {group.items.map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent)", color: "#fff" }}
                    className="px-4 py-2 bg-[var(--color-secondary)] text-[var(--color-text-muted)] rounded-lg text-sm font-medium transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

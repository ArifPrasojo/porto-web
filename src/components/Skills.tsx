"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

import Marquee from "react-fast-marquee";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiVite,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiPhp, SiLaravel, SiJsonwebtokens, SiNginx, SiBun, SiTypescript,
  SiFigma, SiPostman, SiVercel, SiLinux
} from "react-icons/si";
import { FaServer, FaVectorSquare, FaPaintBrush, FaSearch, FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillGroups = [
  {
    id: "frontend", items: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "VITE", icon: <SiVite className="text-[#646CFF]" /> }
    ]
  },
  {
    id: "backend", items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "REST API", icon: <FaServer className="text-gray-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
      { name: "LARAVEL", icon: <SiLaravel className="text-[#FF2D20]" /> },
      { name: "FILAMENT", icon: <SiLaravel className="text-[#FF2D20]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-white" /> },
      { name: "NGINX", icon: <SiNginx className="text-[#009639]" /> },
      { name: "BUN", icon: <SiBun className="text-[#FBF0DF]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> }
    ]
  },
  {
    id: "design", items: [
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Wireframing", icon: <FaVectorSquare className="text-gray-300" /> },
      { name: "Prototyping", icon: <FaPaintBrush className="text-pink-400" /> },
      { name: "User Research", icon: <FaSearch className="text-blue-300" /> }
    ]
  },
  {
    id: "tools", items: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "LINUX", icon: <SiLinux className="text-[#FCC624]" /> }
    ]
  },
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
          <div className="w-20 h-2 bg-[var(--color-highlight)] mx-auto mb-6 mecha-cut"></div>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 overflow-hidden">
          {/* Row 1: Frontend & Design (Moving Left) */}
          <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4">
            <div className="flex gap-6 px-3">
              {[...skillGroups[0].items, ...skillGroups[2].items].map((item, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex items-center gap-3 px-6 py-4 bg-[var(--color-primary)] mecha-cut mecha-border border-t-4 border-t-[var(--color-highlight)] shadow-lg hover:border-[var(--color-accent)] transition-colors cursor-default min-w-max"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg font-bold text-[var(--color-text-main)]">{item.name}</span>
                </div>
              ))}
            </div>
          </Marquee>

          {/* Row 2: Backend & Tools (Moving Right) */}
          <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true} className="py-4">
            <div className="flex gap-6 px-3">
              {[...skillGroups[1].items, ...skillGroups[3].items].map((item, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex items-center gap-3 px-6 py-4 bg-[var(--color-primary)] mecha-cut mecha-border border-t-4 border-t-[var(--color-danger)] shadow-lg hover:border-[var(--color-highlight)] transition-colors cursor-default min-w-max"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg font-bold text-[var(--color-text-main)]">{item.name}</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

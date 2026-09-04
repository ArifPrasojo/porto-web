"use client";

import Marquee from "react-fast-marquee";
import { useLanguage } from "@/lib/LanguageContext";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiVite,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiPhp, SiLaravel, SiJsonwebtokens, SiNginx, SiBun, SiTypescript,
  SiFigma, SiPostman, SiVercel, SiLinux
} from "react-icons/si";
import { FaServer, FaVectorSquare, FaPaintBrush, FaSearch, FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const row1 = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Wireframing", icon: <FaVectorSquare /> },
  { name: "Prototyping", icon: <FaPaintBrush /> },
  { name: "User Research", icon: <FaSearch /> },
];

const row2 = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "REST API", icon: <FaServer /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Nginx", icon: <SiNginx /> },
  { name: "Bun", icon: <SiBun /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Linux", icon: <SiLinux /> },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-14 bg-[#070e1f] border-t border-[#162544] text-center overflow-hidden" aria-label="Skills section">
      <div className="max-w-3xl mx-auto flex flex-col items-center px-4 mb-8">
        <div className="flex items-center space-x-3 mb-3">
          <span className="h-px w-6 bg-[#00f2fe]/40" />
          <h2 className="font-display text-xs font-bold tracking-wider text-white uppercase">{t.skills.title}</h2>
          <span className="h-px w-6 bg-[#00f2fe]/40" />
        </div>
        <p className="text-[10px] text-gray-400 max-w-sm">{t.skills.subtitle}</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1: Frontend & Design (Left) */}
        <Marquee gradient={false} speed={35} pauseOnHover={true}>
          <div className="flex gap-4 px-2">
            {row1.map((item, i) => (
              <div
                key={`r1-${i}-${item.name}`}
                className="flex items-center gap-3 px-4 py-2.5 bg-[#121b2f] border border-[#1e2f4f] rounded shadow-[0_0_12px_rgba(0,242,254,0.08)] hover:border-[#00f2fe] transition"
              >
                <span className="text-[#00f2fe] text-lg">{item.icon}</span>
                <span className="text-xs font-medium text-[#d9e2fd] whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </div>
        </Marquee>

        {/* Row 2: Backend & Tools (Right) */}
        <Marquee gradient={false} speed={35} direction="right" pauseOnHover={true}>
          <div className="flex gap-4 px-2">
            {row2.map((item, i) => (
              <div
                key={`r2-${i}-${item.name}`}
                className="flex items-center gap-3 px-4 py-2.5 bg-[#121b2f] border border-[#1e2f4f] rounded shadow-[0_0_12px_rgba(0,242,254,0.08)] hover:border-[#00f2fe] transition"
              >
                <span className="text-[#00f2fe] text-lg">{item.icon}</span>
                <span className="text-xs font-medium text-[#d9e2fd] whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

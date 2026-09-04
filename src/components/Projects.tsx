"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, Laptop, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const projectsData = [
  { category: "software", github: "https://github.com/ArifPrasojo/el-strategis", demo: "https://el-strategis.vercel.app/", image: "/img/elstrategis.png", isComingSoon: false },
  { category: "software", github: "https://github.com/ArifPrasojo/el-fundamental.git", demo: "https://el-fundamental.vercel.app/", image: "/img/elfundamental.png", isComingSoon: false },
  { category: "software", github: "https://github.com/ArifPrasojo/summairaze-AI.git", demo: "https://summairaze-ai.vercel.app/", image: "/img/summary_ai.png", isComingSoon: false },
  { category: "software", github: "#", demo: "#", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", isComingSoon: true },
  { category: "software", github: "https://github.com/ArifPrasojo/el-kasir", demo: "#", image: "/img/elkasir.png", isComingSoon: false },
  { category: "uiux", github: "#", demo: "https://www.figma.com/design/e9R3jbFE2c7A7d7qZj06vE/AMBULANS---GO?node-id=177-2&t=oLAlpI2deg2jFb5F-0", image: "/img/ambulans_go.png", isComingSoon: false },
  { category: "uiux", github: "#", demo: "https://www.figma.com/design/UYmZkiQsA1VmY4Dqs0NZcx/Artikel-UI?node-id=0-1&t=zFzrw050suhmH777-1", image: "/img/artikel_ui.png", isComingSoon: false },
  { category: "uiux", github: "#", demo: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=0%3A1&node-id=2040-901&viewport=-1395%2C312%2C0.29&t=8VnOCsfdbVhIf8l7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2040%3A901&show-proto-sidebar=1", image: "/img/portal_pertanian.png", isComingSoon: false },
  { category: "uiux", github: "#", demo: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=2080%3A1042&node-id=2181-61722&p=f&viewport=361%2C348%2C0.16&t=h8XrshpLbUUXgiRY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2181%3A61722&show-proto-sidebar=1", image: "/img/duitkas.jpg", isComingSoon: false },
  { category: "uiux", github: "#", demo: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=2246%3A12775&node-id=2248-13705&viewport=346%2C2309%2C0.47&t=wOCiHJ8zthErBP1Q-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2248%3A13705&show-proto-sidebar=1", image: "/img/technova.png", isComingSoon: false },
  { category: "uiux", github: "#", demo: "#", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop", isComingSoon: true },
];

export default function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const projects = projectsData.map((p, i) => ({
    ...p,
    title: t.projects.list[i]?.title || "",
    desc: t.projects.list[i]?.desc || "",
  }));

  const filtered = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="work" className="py-16 px-4 bg-[#091326]" aria-label="Projects section">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#121b2f] flex items-center justify-center text-[#00f2fe] border border-[#00f2fe]/40 shadow-[0_0_12px_rgba(0,242,254,0.2)] mb-3">
          <Compass size={14} />
        </div>
        <h2 className="text-lg font-bold text-white tracking-wider uppercase mb-5 font-display">{t.projects.title}</h2>

        <div className="inline-flex rounded border border-[#1e2f4f] bg-[#0c162a] p-0.5 mb-10 text-xs">
          {[
            { id: "all", label: t.projects.all },
            { id: "software", label: t.projects.software },
            { id: "uiux", label: t.projects.uiux },
          ].map((tab, i) => (
            <span key={tab.id} className="flex items-center">
              {i > 0 && <span className="w-px bg-[#1e2f4f] my-1 self-stretch" />}
              <button
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-1.5 rounded-sm font-medium transition",
                  activeTab === tab.id ? "text-white bg-[#162544]" : "text-[#d9e2fd] hover:text-white hover:bg-[#162544]"
                )}
              >
                {tab.label}
              </button>
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="bg-[#121b2f] rounded overflow-hidden shadow-lg border-b-2 border-transparent hover:border-[#00f2fe] flex flex-col group transition duration-300 hover:-translate-y-1"
            >
              <div className="h-36 relative overflow-hidden bg-[#192642]">
                {project.image.startsWith("http") ? (
                  <div className="w-full h-full bg-[#16233d] flex items-center justify-center border-b border-[#1e2f4f]">
                    <Laptop className="text-[#00f2fe] opacity-70" size={32} />
                  </div>
                ) : (
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
                )}
                {project.isComingSoon && (
                  <span className="absolute top-2 right-2 bg-[#00f2fe] text-[#00373a] text-[9px] font-bold px-2 py-0.5 rounded-sm">
                    {t.projects.comingSoon}
                  </span>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col bg-white text-left">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#006a70]">{project.title}</h3>
                <p className="text-[11px] leading-relaxed text-gray-500 mt-2 flex-1">{project.desc}</p>
                <div className="flex gap-3 mt-3">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-bold text-gray-600 hover:text-[#00f2fe]">
                      <GithubIcon size={12} /> {t.projects.code}
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-bold text-gray-600 hover:text-[#00f2fe]">
                      <ExternalLink size={12} /> {t.projects.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
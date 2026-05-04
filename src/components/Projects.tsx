"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const projectsData = [
  {
    tech: ["Next.js 16", "Supabase", "Prisma", "Tailwind CSS v4", "PWA"],
    category: "software",
    github: "https://github.com/ArifPrasojo/el-strategis",
    demo: "https://el-strategis.vercel.app/",
    image: "/img/elstrategis.png",
    isComingSoon: false,
  },
  {
    tech: ["React", "Node.js", "Gemini AI"],
    category: "software",
    github: "https://github.com/ArifPrasojo/summairaze-AI.git",
    demo: "https://summairaze-ai.vercel.app/",
    image: "/img/summary_ai.png",
    isComingSoon: false,
  },
  {
    tech: ["Next.js", "Tailwind CSS", "Recharts"],
    category: "software",
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    isComingSoon: true,
  },
  {
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    category: "software",
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    isComingSoon: true,
  },
  {
    tech: ["Figma"],
    category: "uiux",
    github: "#",
    demo: "https://www.figma.com/design/e9R3jbFE2c7A7d7qZj06vE/AMBULANS---GO?node-id=177-2&t=oLAlpI2deg2jFb5F-0",
    image: "/img/ambulans_go.png",
    isComingSoon: false,
  },
  {
    tech: ["Figma"],
    category: "uiux",
    github: "#",
    demo: "https://www.figma.com/design/UYmZkiQsA1VmY4Dqs0NZcx/Artikel-UI?node-id=0-1&t=zFzrw050suhmH777-1",
    image: "/img/artikel_ui.png",
    isComingSoon: false,
  },
  {
    tech: ["Figma"],
    category: "uiux",
    github: "#",
    demo: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=0%3A1&node-id=2040-901&viewport=-1395%2C312%2C0.29&t=8VnOCsfdbVhIf8l7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2040%3A901&show-proto-sidebar=1",
    image: "/img/portal_pertanian.png",
    isComingSoon: false,
  },
  {
    tech: ["Figma"],
    category: "uiux",
    github: "#",
    demo: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=2080%3A1042&node-id=2181-61722&p=f&viewport=361%2C348%2C0.16&t=h8XrshpLbUUXgiRY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2181%3A61722&show-proto-sidebar=1",
    image: "/img/duitkas.jpg",
    isComingSoon: false,
  },
  {
    tech: ["Figma"],
    category: "uiux",
    github: "#",
    demo: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=2246%3A12775&node-id=2248-13705&viewport=346%2C2309%2C0.47&t=wOCiHJ8zthErBP1Q-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2248%3A13705&show-proto-sidebar=1",
    image: "/img/technova.png",
    isComingSoon: false,
  },
  {
    tech: ["Next.js", "Figma"],
    category: "uiux",
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    isComingSoon: true,
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const projects = projectsData.map((p, i) => ({
    ...p,
    title: t.projects.list[i]?.title || "",
    desc: t.projects.list[i]?.desc || "",
  }));

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-[var(--color-primary)] relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            {t.projects.title}
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mb-6"></div>
          
          {/* Tab Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { id: "all", label: t.projects.all },
              { id: "software", label: t.projects.software },
              { id: "uiux", label: t.projects.uiux }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                  activeTab === tab.id 
                    ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white shadow-lg shadow-blue-500/20" 
                    : "bg-[var(--color-secondary)] border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:border-[var(--color-accent)]/30"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-[var(--color-secondary)] rounded-2xl overflow-hidden border border-[var(--color-border)] group hover:border-[var(--color-accent)]/50 transition-all hover:shadow-2xl relative"
                suppressHydrationWarning
              >
                {/* Coming Soon Badge */}
                {project.isComingSoon && (
                  <div className="absolute top-4 right-4 z-20 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg" suppressHydrationWarning>
                    {t.projects.comingSoon}
                  </div>
                )}

                {/* Image Container */}
                <div className={cn(
                  "relative h-56 w-full overflow-hidden",
                  project.isComingSoon && "grayscale opacity-50"
                )} suppressHydrationWarning>
                  <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors z-10" suppressHydrationWarning />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-14rem)]" suppressHydrationWarning>
                  <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm mb-6 flex-grow">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6" suppressHydrationWarning>
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 border-t border-[var(--color-border)] pt-4 mt-auto" suppressHydrationWarning>
                    {!project.isComingSoon ? (
                      <>
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors"
                          >
                            <GithubIcon size={18} /> {t.projects.code}
                          </a>
                        )}
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                        >
                          <ExternalLink size={18} /> {t.projects.liveDemo}
                        </a>
                      </>
                    ) : (
                      <span className="text-xs text-slate-500 italic">{t.projects.comingSoonDetail}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "Dashboard admin modern untuk mengelola produk, pesanan, dan analitik toko online.",
    tech: ["Next.js", "Tailwind CSS", "Recharts"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    isComingSoon: true,
  },
  {
    title: "AI Summarizer App",
    desc: "Aplikasi web untuk merangkum dokumen panjang menggunakan AI (Gemini API).",
    tech: ["React", "Node.js", "Gemini AI"],
    github: "https://github.com/ArifPrasojo/summairaze-AI.git",
    demo: "https://summairaze-ai.vercel.app/",
    image: "/img/summary_ai.png",
    isComingSoon: false,
  },
  {
    title: "Sistem Manajemen Kedai Kopi",
    desc: "Aplikasi Point of Sale (POS) untuk kedai kopi dengan fitur manajemen stok dan kasir.",
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    isComingSoon: true,
  },
];

export default function Projects() {
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
            Proyek Unggulan
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Beberapa karya terbaik yang telah saya bangun untuk memecahkan masalah nyata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--color-secondary)] rounded-2xl overflow-hidden border border-slate-800 group hover:border-[var(--color-accent)]/50 transition-colors relative"
            >
              {/* Coming Soon Badge */}
              {project.isComingSoon && (
                <div className="absolute top-4 right-4 z-20 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                  COMING SOON
                </div>
              )}

              {/* Image Container */}
              <div className={cn(
                "relative h-56 w-full overflow-hidden",
                project.isComingSoon && "grayscale opacity-50"
              )}>
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-[var(--color-accent)] bg-blue-500/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 border-t border-slate-700 pt-4">
                  {!project.isComingSoon ? (
                    <>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
                      >
                        <GithubIcon size={18} /> Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </>
                  ) : (
                    <span className="text-xs text-slate-500 italic">Detail proyek akan segera tersedia</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

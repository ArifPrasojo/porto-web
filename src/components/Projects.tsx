"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { usePortfolioFilter } from "@/lib/PortfolioFilterContext";

export default function Projects() {
  const { t } = useLanguage();
  const { filter } = usePortfolioFilter();
  const p = t.projects.list;

  const pc = t.ui.projectsCase;
  const tel = pc.telemetry;
  const tv = pc.telemetryValues;

  const cases = [
    {
      no: "01",
      category: "fintech",
      meta: pc.meta[0],
      title: p[0]?.title ?? "El Strategis",
      desc: p[0]?.desc ?? "",
      year: "2024",
      telemetry: [
        [tel.archPlatform, tv.c1[0]],
        [tel.keyFeatures, tv.c1[1]],
        [tel.uiExperience, tv.c1[2]],
        [tel.deployment, tv.c1[3]],
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts Engine", "Local/Cloud Sync"],
      primary: { label: pc.primaryLabels[0], href: "https://el-strategis.vercel.app/" },
      secondary: { label: pc.secondaryLabels[0], href: "https://github.com/ArifPrasojo/el-strategis" },
      specTitle: pc.specTitles[0],
      module: pc.modules[0],
      bg: "bg-surface",
      image: "/img/elstrategis.png",
    },
    {
      no: "02",
      category: "edtech",
      meta: pc.meta[1],
      title: p[1]?.title ?? "El-Fundamental",
      desc: p[1]?.desc ?? "",
      year: "2024",
      telemetry: [
        [tel.targetLearner, tv.c2[0]],
        [tel.gamificationMech, tv.c2[1]],
        [tel.supportedLangs, tv.c2[2]],
      ],
      tags: ["JavaScript", "Python Evaluator", "Tailwind CSS", "Interactive State Machine"],
      primary: { label: pc.primaryLabels[1], href: "https://el-fundamental.vercel.app/" },
      secondary: { label: pc.secondaryLabels[1], href: "https://github.com/ArifPrasojo/el-fundamental.git" },
      specTitle: pc.specTitles[1],
      module: pc.modules[1],
      bg: "bg-surface-container-low",
      invert: true,
      image: "/img/elfundamental.png",
    },
    {
      no: "03",
      category: "fintech",
      meta: pc.meta[2],
      title: p[5]?.title ?? "El-Kasir",
      desc: p[5]?.desc ?? "",
      year: "2024",
      telemetry: [
        [tel.inventorySystem, tv.c3[0]],
        [tel.roleAccess, tv.c3[1]],
        [tel.transactionFeatures, tv.c3[2]],
      ],
      tags: ["Laravel / PHP", "MySQL Relational DB", "Tailwind CSS", "REST API"],
      primary: { label: pc.primaryLabels[2], href: "https://github.com/ArifPrasojo/el-kasir" },
      secondary: { label: pc.secondaryLabels[2], href: "https://github.com/ArifPrasojo/el-kasir" },
      specTitle: pc.specTitles[2],
      module: pc.modules[2],
      bg: "bg-surface",
      image: "/img/elkasir.png",
    },
    {
      no: "04",
      category: "ai-utility",
      meta: pc.meta[3],
      title: `${p[2]?.title ?? "AI Summarizer"} & Smart Civic System`,
      desc: `${p[2]?.desc ?? ""} ${p[3]?.desc ?? ""}`,
      year: "2024",
      telemetry: [
        [tel.foundationModel, tv.c4[0]],
        [tel.experienceFocus, tv.c4[2]],
      ],
      tags: ["Google Gemini API", "React / Next", "Tailwind CSS", "Leaflet Maps (Ambulans)"],
      primary: { label: pc.primaryLabels[3], href: "https://summairaze-ai.vercel.app/" },
      secondary: { label: pc.secondaryLabels[3], href: "https://github.com/ArifPrasojo/summairaze-AI.git" },
      specTitle: pc.specTitles[3],
      module: pc.modules[3],
      bg: "bg-surface-container-low",
      invert: true,
      image: "/img/summary_ai.png",
    },
    {
      no: "05",
      category: "e-ticketing",
      meta: pc.meta[4],
      title: p[3]?.title ?? "TiketinAja",
      desc: p[3]?.desc ?? "",
      year: "2024",
      telemetry: [
        [tel.platform, tv.c5[0]],
        [tel.keyFeatures, tv.c5[1]],
        [tel.experienceFocus, tv.c5[2]],
      ],
      tags: ["Next.js", "Tailwind CSS", "QR Validator"],
      primary: { label: pc.primaryLabels[4], href: "https://github.com/ArifPrasojo/tiketinaja" },
      secondary: { label: pc.secondaryLabels[4], href: "https://github.com/ArifPrasojo/tiketinaja" },
      specTitle: pc.specTitles[4],
      module: pc.modules[4],
      bg: "bg-surface",
      image: "/img/tiketinaja.png",
    },
  ].filter((c) => filter === "all" || c.category === filter);

  return (
    <section className="w-full bg-surface" id="case-studies">
      {cases.map((item) => (
        <article key={item.no} className={`w-full border-b border-primary px-margin md:px-margin-desktop py-space-xl ${item.bg}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            {/* Text & telemetry (5 cols) */}
            <div className={`lg:col-span-5 flex flex-col justify-between space-y-space-md ${item.invert ? "lg:order-2" : ""}`}>
              <div className="space-y-space-sm">
                <div className="flex items-center gap-space-sm font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">
                  <span>{item.meta}</span>
                  <span className="text-secondary font-semibold ml-auto">{item.year}</span>
                </div>
                <h2 className="font-display-lg-mobile text-display-lg-mobile lg:font-display-lg lg:text-display-lg text-primary tracking-tight">
                  {item.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface">{item.desc}</p>
                <div className="pt-space-sm border-t border-outline-variant/30 space-y-2">
                  {item.telemetry.map(([label, value]) => (
                    <div key={label} className="flex justify-between font-label-mono text-label-mono">
                      <span className="text-on-surface-variant uppercase">{label}</span>
                      <span className="text-primary font-semibold text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-space-sm pt-space-md border-t border-primary">
                <div className="flex flex-wrap gap-1 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 border border-outline-variant/50">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-space-sm">
                  <a
                    className="inline-flex items-center gap-2 px-space-md py-space-xs bg-primary text-on-primary font-label-mono text-label-mono uppercase hover:bg-secondary transition-colors border border-primary"
                    href={item.primary.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{item.primary.label}</span>
                    <span>↗</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-1 px-space-sm py-space-xs font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-primary transition-colors underline underline-offset-4"
                    href={item.secondary.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{item.secondary.label}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Screenshot dokumentasi (7 cols) */}
            <div className={`lg:col-span-7 flex flex-col gap-space-sm ${item.invert ? "lg:order-1" : ""}`}>
              <div className="border border-primary bg-surface-container-lowest p-space-md flex flex-col gap-space-md relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-primary pb-2 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
                  <span>{item.specTitle}</span>
                  <span>{item.module}</span>
                </div>
                <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
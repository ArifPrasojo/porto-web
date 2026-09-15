"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { usePortfolioFilter, FilterValue } from "@/lib/PortfolioFilterContext";

const tech = ["Next.js / React", "TypeScript", "Tailwind CSS", "Laravel", "Figma (UI/UX)", "Gemini AI API"];

export default function Hero() {
  const { t } = useLanguage();
  const { filter, setFilter } = usePortfolioFilter();

  const filterPills: { id: FilterValue; label: string }[] = [
    { id: "all", label: t.ui.filters.all },
    { id: "fintech", label: t.ui.filters.fintech },
    { id: "edtech", label: t.ui.filters.edtech },
    { id: "ai-utility", label: t.ui.filters.ai },
  ];

  return (
    <section className="w-full border-b border-primary bg-surface px-margin md:px-margin-desktop py-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Manifesto label row */}
        <div className="flex items-center justify-between font-label-mono-sm text-label-mono-sm uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/40 pb-space-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-secondary inline-block" />
            <span>{t.ui.monograph}</span>
          </span>
          <span className="hidden sm:inline">{t.ui.tagline}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pt-space-xs">
          {/* Left: manifesto */}
          <div className="lg:col-span-8 space-y-space-md">
            <h1 className="font-display-lg-mobile text-display-lg-mobile lg:font-display-lg lg:text-display-lg text-primary tracking-tight leading-[1.05] max-w-4xl">
              {t.ui.manifestoPre}
              <span className="italic">{t.ui.manifestoItalic}</span>
              {t.ui.manifestoPost}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {t.about.bio1}
            </p>
            <div className="pt-space-xs flex flex-wrap items-center gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
              {tech.map((item) => (
                <span key={item} className="px-2 py-1 bg-surface-container-high border border-outline-variant/40 text-primary font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Telemetry card */}
          <div className="lg:col-span-4 border border-primary p-space-md bg-surface-container-lowest flex flex-col justify-between h-full space-y-space-md">
            <div className="space-y-space-sm">
              <div className="flex justify-between items-center border-b border-outline-variant/40 pb-space-xs font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
                <span>{t.ui.telemetryTitle}</span>
                <span className="text-secondary font-semibold">{t.ui.activeMode}</span>
              </div>
              <div className="grid grid-cols-2 gap-y-space-sm gap-x-space-md font-label-mono text-label-mono">
                <Info label={t.ui.infoDiscipline} value={t.hero.title} />
                <Info label={t.ui.infoLocation} value={t.ui.locationValue} />
                <Info label={t.ui.infoEducation} value={t.ui.educationValue} />
                <Info label={t.ui.infoStatus} value={t.hero.statusOpenToWork} accent />
              </div>
              <div className="pt-2 border-t border-outline-variant/20 grid grid-cols-3 text-center gap-1 font-label-mono-sm text-label-mono-sm">
                <Metric value="10+" label={t.about.infoLabel1} />
                <Metric value="3+" label={t.about.infoLabel2} />
                <Metric value="15+" label={t.about.infoLabel3} accent />
              </div>
            </div>
            <div className="pt-space-xs border-t border-outline-variant/40">
              <a className="inline-flex items-center justify-between w-full font-label-mono text-label-mono text-primary hover:text-secondary uppercase transition-colors" href="#case-studies">
                <span>{t.hero.cta}</span>
                <span>{t.ui.flagship}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-sm border-t border-outline-variant/30">
          <div className="flex items-center gap-1 overflow-x-auto">
            {filterPills.map((pill) => (
              <button
                key={pill.id}
                onClick={() => setFilter(pill.id)}
                className={`px-space-md py-1 border border-primary font-label-mono text-label-mono uppercase transition-colors cursor-pointer whitespace-nowrap ${
                  filter === pill.id
                    ? "bg-primary text-on-primary"
                    : "bg-surface text-primary hover:bg-surface-container-high"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-space-md font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">
            <span>{t.ui.docNote}</span>
            <span className="inline-block w-px h-3 bg-outline-variant" />
            <span>arfporto.biz.id</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <span className="block text-on-surface-variant font-label-mono-sm text-label-mono-sm uppercase">{label}</span>
      <span className={`font-label-mono text-label-mono font-medium ${accent ? "text-secondary" : "text-primary"}`}>{value}</span>
    </div>
  );
}

function Metric({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="bg-surface p-1 border border-outline-variant/30">
      <span className={`font-bold block text-sm ${accent ? "text-secondary" : "text-primary"}`}>{value}</span>
      <span className="text-on-surface-variant uppercase text-[9px]">{label}</span>
    </div>
  );
}
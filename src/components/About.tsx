"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-surface px-margin md:px-margin-desktop py-space-xl" id="tentang">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        {/* Kiri */}
        <div className="lg:col-span-4 space-y-space-sm">
          <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-widest text-secondary block">{t.ui.aboutKicker}</span>
          <h4 className="font-headline-md text-headline-md uppercase text-primary">
            {t.ui.aboutHeading}
          </h4>
          <div className="border-t border-primary pt-space-xs font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant space-y-1">
            <div>{t.hero.name} — {t.ui.student} {t.about.major}</div>
            <div>{t.about.university} ({t.about.period}) • IPK: {t.about.ipk}</div>
          </div>
          <div className="pt-space-sm">
            <div className="border border-primary p-space-sm bg-surface-container-lowest">
              <span className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant block mb-1">{t.ui.aboutStatus}</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                <span className="font-label-mono text-label-mono font-semibold text-primary">{t.ui.aboutOpen}</span>
              </div>
              <p className="font-label-mono-sm text-label-mono-sm text-on-surface-variant mt-2">
                {t.ui.aboutOpenDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Kanan */}
        <div className="lg:col-span-8 border border-primary p-space-lg bg-surface-container-lowest space-y-space-md">
          <blockquote className="font-display-lg text-[28px] md:text-[32px] leading-tight text-primary italic">
            {t.ui.quote}
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md font-body-md text-body-md text-on-surface pt-space-md border-t border-outline-variant/40">
            <div>
              <p className="font-semibold text-primary uppercase font-label-mono-sm text-label-mono-sm mb-1">{t.ui.principle1Title}</p>
              <p className="text-on-surface-variant text-body-sm">{t.ui.principle1Text}</p>
            </div>
            <div>
              <p className="font-semibold text-primary uppercase font-label-mono-sm text-label-mono-sm mb-1">{t.ui.principle2Title}</p>
              <p className="text-on-surface-variant text-body-sm">{t.ui.principle2Text}</p>
            </div>
          </div>

          <div className="border border-outline-variant/60 p-space-sm bg-surface space-y-2">
            <div className="flex justify-between items-center border-b border-outline-variant/30 pb-1 font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
              <span className="font-bold text-primary">{t.ui.matrixTitle}</span>
              <span>{t.ui.matrixStack}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-label-mono text-xs">
              {t.ui.matrix.map((skill) => (
                <div key={skill.g} className="border border-outline-variant/30 p-2">
                  <span className="text-on-surface-variant text-[10px] uppercase block">{skill.g}</span>
                  <span className="font-semibold text-primary">{skill.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-outline-variant/60 p-space-sm bg-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
            <div>
              {t.ui.identity} <a className="text-primary font-bold hover:underline" href="https://www.arfporto.biz.id" rel="noopener noreferrer" target="_blank">www.arfporto.biz.id</a>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="w-1.5 h-1.5 bg-secondary inline-block"></span>
              <span>{t.ui.locationFull}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
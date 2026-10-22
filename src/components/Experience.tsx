"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const work = t.experience.work.map((w, idx) => ({
    year: w.period,
    role: w.role,
    place: w.company,
    focus: w.desc.join(" "),
    type: t.ui.expTypes[idx] ?? "",
  }));

  const org = t.experience.org.map((o) => ({
    year: o.period,
    role: o.role,
    place: o.org,
    focus: o.desc.join(" "),
    type: t.ui.expTypes[5] ?? "Polinema",
  }));

  return (
    <section className="w-full border-b border-primary bg-surface px-margin md:px-margin-desktop py-space-xl" id="pengalaman">
      <div className="max-w-7xl mx-auto space-y-space-lg">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm border-b border-primary pb-space-sm">
          <div>
            <span className="font-label-mono-sm text-label-mono-sm text-secondary uppercase tracking-widest block">{t.ui.expKicker}</span>
            <h3 className="font-headline-md text-headline-md text-primary tracking-tight">
              {t.experience.workTitle} &amp; {t.experience.orgTitle}
            </h3>
          </div>
          <p className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
            2020 - 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          <ExperienceGroup title={t.experience.workTitle} items={work} />
          <ExperienceGroup title={t.experience.orgTitle} items={org} />
        </div>
      </div>
    </section>
  );
}

function ExperienceGroup({
  title,
  items,
}: {
  title: string;
  items: { year: string; role: string; place: string; focus: string; type: string }[];
}) {
  return (
    <div className="border border-primary bg-surface-container-lowest">
      <div className="px-space-md py-space-sm border-b border-primary bg-surface-container-high">
        <h4 className="font-label-mono text-label-mono uppercase tracking-wider text-primary">{title}</h4>
      </div>
      <div className="divide-y divide-outline-variant/40">
        {items.map((item) => (
          <article key={item.role + item.year} className="p-space-md space-y-space-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-label-mono-sm text-label-mono-sm uppercase text-secondary font-semibold">{item.year}</span>
              <span className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">{item.type}</span>
            </div>
            <div>
              <h5 className="font-headline-sm text-headline-sm text-primary leading-tight">{item.role}</h5>
              <p className="font-label-mono text-label-mono text-on-surface-variant mt-1">{item.place}</p>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{item.focus}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

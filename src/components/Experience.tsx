"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const work = [
    {
      year: "2025",
      role: t.experience.work[0]?.role ?? "Front End Developer",
      place: t.experience.work[0]?.company ?? "PT Binary Cipta Solusindo",
      focus: t.experience.work[0]?.desc?.join(" ") ?? "",
      type: t.ui.expTypes[0],
    },
    {
      year: "2024",
      role: t.experience.work[1]?.role ?? "UI Designer",
      place: t.experience.work[1]?.company ?? "PT Teknologi Indonesia Ciptahardya",
      focus: t.experience.work[1]?.desc?.join(" ") ?? "",
      type: t.ui.expTypes[1],
    },
    {
      year: "2022",
      role: t.experience.work[2]?.role ?? "Product Marketing",
      place: t.experience.work[2]?.company ?? "Samsung Store Pare",
      focus: t.experience.work[2]?.desc?.join(" ") ?? "",
      type: t.ui.expTypes[2],
    },
    {
      year: "2020",
      role: t.experience.work[3]?.role ?? "Digital Marketing & Front End",
      place: t.experience.work[3]?.company ?? "indoweb.id",
      focus: t.experience.work[3]?.desc?.join(" ") ?? "",
      type: t.ui.expTypes[3],
    },
  ];

  const org = [
    {
      year: "2024–2025",
      role: t.experience.org[0]?.role ?? "Steering Committee",
      place: t.experience.org[0]?.org ?? "HMTI Politeknik Negeri Malang",
      focus: t.experience.org[0]?.desc?.join(" ") ?? "",
      type: t.ui.expTypes[4],
    },
    {
      year: "2022–2024",
      role: t.experience.org[1]?.role ?? "Organizing Committee",
      place: t.experience.org[1]?.org ?? "HMTI Politeknik Negeri Malang",
      focus: t.experience.org[1]?.desc?.join(" ") ?? "",
      type: t.ui.expTypes[4],
    },
  ];

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
            2020 — 2025
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

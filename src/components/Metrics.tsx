"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Metrics() {
  const { t } = useLanguage();

  const metrics = [
    { label: t.ui.metric1Label, value: "10+", sub: t.ui.metric1Sub },
    { label: t.ui.metric2Label, value: "3.63", sub: t.ui.metric2Sub, note: "/ 4.00" },
    { label: t.ui.metric3Label, value: "3+", sub: t.ui.metric3Sub, accent: true },
    { label: t.ui.metric4Label, value: "15+", sub: t.ui.metric4Sub },
  ];

  return (
    <section className="w-full border-b border-primary bg-surface px-margin md:px-margin-desktop py-space-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-space-md">
        {metrics.map((m) => (
          <div key={m.label} className="border border-primary p-space-md bg-surface-container-lowest">
            <span className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant block">{m.label}</span>
            <div className={`font-headline-md text-headline-md text-primary mt-1 ${m.accent ? "text-secondary" : ""}`}>
              {m.value}
              {m.note && <span className="text-sm font-normal text-on-surface-variant"> {m.note}</span>}
            </div>
            <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant block mt-2">{m.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
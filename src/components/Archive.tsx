"use client";

import { useLanguage } from "@/lib/LanguageContext";

const archiveProjects = [
  { id: "P-01", title: "El Strategis", listIdx: 0, catIdx: 0, stack: "Next.js, TypeScript, Tailwind, Recharts", link: "https://el-strategis.vercel.app" },
  { id: "P-02", title: "El-Fundamental", listIdx: 1, catIdx: 1, stack: "JavaScript, Python Engine, Gamified UI", link: "https://el-fundamental.vercel.app" },
  { id: "P-03", title: "El-Kasir", listIdx: 5, catIdx: 2, stack: "Laravel, MySQL, Multi-Branch Routing", link: "https://github.com/ArifPrasojo/el-kasir" },
  { id: "P-04", title: "AI Summarizer App", listIdx: 2, catIdx: 3, stack: "Google Gemini API, React, Tailwind", link: "https://summairaze-ai.vercel.app" },
  { id: "P-05", title: "Ambulans-GO", listIdx: 6, catIdx: 4, stack: "Figma, React, Geolocation Tracking", link: "https://www.figma.com/design/e9R3jbFE2c7A7d7qZj06vE/AMBULANS---GO?node-id=177-2&t=oLAlpI2deg2jFb5F-0" },
  { id: "P-06", title: "TiketinAja", listIdx: 3, catIdx: 5, stack: "Next.js, Tailwind, QR Validator", link: "https://github.com/ArifPrasojo/tiketinaja" },
  { id: "P-07", title: "Desain UI Artikel Community", listIdx: 7, catIdx: 6, stack: "Figma Design System, Wireframing", link: "https://www.figma.com/design/UYmZkiQsA1VmY4Dqs0NZcx/Artikel-UI?node-id=0-1&t=zFzrw050suhmH777-1" },
  { id: "P-08", title: "Redesain UI Portal Pertanian", listIdx: 8, catIdx: 7, stack: "Figma, Responsive Grid, Aksesibilitas", link: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=0%3A1&node-id=2040-901&viewport=-1395%2C312%2C0.29&t=8VnOCsfdbVhIf8l7-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2040%3A901&show-proto-sidebar=1" },
  { id: "P-09", title: "Redesain UI DuitKas.com", listIdx: 9, catIdx: 8, stack: "Figma, Conversion-driven Layout", link: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=2080%3A1042&node-id=2181-61722&p=f&viewport=361%2C348%2C0.16&t=h8XrshpLbUUXgiRY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2181%3A61722&show-proto-sidebar=1" },
  { id: "P-10", title: "Redesain UI TechNova", listIdx: 10, catIdx: 9, stack: "Figma, Modern Neo-Brutalist Grid", link: "https://www.figma.com/proto/fbfFt7voCCtNbADbFq9aWy/Project-File?page-id=2246%3A12775&node-id=2248-13705&viewport=346%2C2309%2C0.47&t=wOCiHJ8zthErBP1Q-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2248%3A13705&show-proto-sidebar=1" },
];

export default function Archive() {
  const { t } = useLanguage();

  return (
    <section className="w-full border-b border-primary bg-surface px-margin md:px-margin-desktop py-space-xl" id="arsip-katalog">
      <div className="max-w-7xl mx-auto space-y-space-md">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm border-b border-primary pb-space-sm">
          <div>
            <span className="font-label-mono-sm text-label-mono-sm text-secondary uppercase tracking-widest block">{t.ui.archiveKicker} (arfporto.biz.id)</span>
            <h3 className="font-headline-md text-headline-md text-primary tracking-tight">
              {t.ui.archiveTitle}
            </h3>
          </div>
          <p className="font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
            {t.ui.archiveCount}
          </p>
        </div>

        <div className="border border-primary overflow-x-auto bg-surface-container-lowest">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-primary bg-surface-container-high font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
                <th className="p-space-sm font-semibold">{t.ui.thProject}</th>
                <th className="p-space-sm font-semibold">{t.ui.thCategory}</th>
                <th className="p-space-sm font-semibold">{t.ui.thStack}</th>
                <th className="p-space-sm font-semibold">{t.ui.thDesc}</th>
                <th className="p-space-sm font-semibold text-right">{t.ui.thLink}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40 font-label-mono text-label-mono text-on-surface">
              {archiveProjects.map((row, idx) => (
                <tr key={row.id} className="hover:bg-surface-container transition-colors group cursor-pointer">
                  <td className="p-space-sm font-semibold text-primary group-hover:text-secondary flex items-center gap-1.5">
                    <span>{row.title}</span>
                    <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </td>
                  <td className="p-space-sm text-on-surface-variant uppercase text-label-mono-sm">{t.ui.archiveCat[row.catIdx]}</td>
                  <td className="p-space-sm font-mono text-[11px]">{row.stack}</td>
                  <td className="p-space-sm text-primary font-medium">{t.projects.list[row.listIdx]?.desc ?? ""}</td>
                  <td className="p-space-sm text-right">
                    <a className="underline underline-offset-2 hover:text-secondary" href={row.link} rel="noopener noreferrer" target="_blank">
                      {t.ui.archiveLinks[idx]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-surface-container-low border-t border-primary mt-space-xl" id="kontak">
      <div className="w-full px-margin md:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg pb-space-lg border-b border-outline-variant/40">
          <div className="space-y-space-xs">
            <div className="flex items-center gap-2 mb-2">
              <Image alt="Arif Prasojo (ArfPorto) Logo" className="h-7 w-7 object-contain" height={28} src="/img/logoweb.png" width={28} />
            </div>
            <p className="font-headline-sm text-headline-sm uppercase text-primary">{t.hero.name}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {t.footer.description}
            </p>
          </div>

          <div className="space-y-space-xs">
            <span className="block font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface-variant">{t.ui.footerNav}</span>
            <ul className="font-label-mono text-label-mono space-y-1 text-on-surface">
              <li><a className="hover:text-secondary transition-colors" href="#case-studies">{t.ui.footerNavLinks[0]}</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#pengalaman">{t.ui.footerNavLinks[1]}</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#arsip-katalog">{t.ui.footerNavLinks[2]}</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#tentang">{t.ui.footerNavLinks[3]}</a></li>
            </ul>
          </div>

          <div className="space-y-space-xs">
            <span className="block font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface-variant">{t.ui.footerTech}</span>
            <ul className="font-label-mono text-label-mono space-y-1 text-on-surface">
              {t.ui.footerTechList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-space-xs">
            <span className="block font-label-mono-sm text-label-mono-sm uppercase tracking-wider text-on-surface-variant">{t.ui.footerConnect}</span>
            <div className="flex flex-col font-label-mono text-label-mono space-y-1 text-on-surface">
              <a className="hover:text-secondary underline underline-offset-4 decoration-primary transition-colors" href="mailto:arifprasojo999@gmail.com">arifprasojo999@gmail.com</a>
              <a className="hover:text-secondary underline underline-offset-4 decoration-primary transition-colors" href="https://github.com/ArifPrasojo" rel="noopener noreferrer" target="_blank">github.com/ArifPrasojo</a>
              <a className="hover:text-secondary underline underline-offset-4 decoration-primary transition-colors" href="https://linkedin.com/in/arifprasojo" rel="noopener noreferrer" target="_blank">linkedin.com/in/arifprasojo</a>
              <a className="hover:text-secondary underline underline-offset-4 decoration-primary transition-colors" href="https://www.arfporto.biz.id" rel="noopener noreferrer" target="_blank">www.arfporto.biz.id</a>
            </div>
          </div>
        </div>

        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
          <div>© {new Date().getFullYear()} Arif Prasojo (ArfPorto) — {t.ui.footerLegal}</div>
          <div><span>{t.ui.locationFull}</span> • <span>{t.about.university} (D4 SIB)</span></div>
        </div>
      </div>
    </footer>
  );
}
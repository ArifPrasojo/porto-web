"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

const languages: { code: Language; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
  { code: "ja", label: "JA" },
];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLangOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setIsLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isLangOpen]);

  const navItems = [
    { href: "#case-studies", label: t.nav.projects, active: true },
    { href: "#pengalaman", label: t.nav.experience },
    { href: "#tentang", label: t.nav.about },
    { href: "#arsip-katalog", label: t.ui.archive },
    { href: "#kontak", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-primary">
      {/* Top status bar (hidden on mobile) */}
      <div className="w-full border-b border-outline-variant/30 hidden md:block">
        <div className="w-full px-margin md:px-margin-desktop py-space-xs flex items-center justify-between font-label-mono-sm text-label-mono-sm uppercase text-on-surface-variant">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-1.5 h-1.5 bg-secondary"></span>
            <span>{t.ui.statusBar}</span>
            <span className="text-outline-variant">•</span>
            <span>{t.about.major}</span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span className="flex items-center gap-1">
              <span className="text-primary font-semibold">UTC+07:00</span>
              <span>{t.ui.timezone}</span>
            </span>
            <a className="hover:text-primary transition-colors lowercase" href="mailto:arifprasojo999@gmail.com">
              arifprasojo999@gmail.com
            </a>
            <span>PORT.VER 2.5</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="h-16 w-full px-margin md:px-margin-desktop flex items-center justify-between">
        {/* Brand */}
        <a className="flex items-center gap-3" href="#">
          <Image alt="Arif Prasojo (ArfPorto) Logo" className="h-9 w-9 object-contain" height={36} src="/img/logoweb.png" width={36} />
          <div className="hidden sm:flex flex-col border-l border-primary/20 pl-3">
            <span className="font-headline-sm text-[15px] font-bold tracking-tight text-primary uppercase leading-tight">
              ARIF PRASOJO
            </span>
<span className="font-label-mono-sm text-label-mono-sm tracking-widest text-on-surface-variant uppercase">
                {t.hero.title} · Polinema
              </span>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden lg:flex items-center border border-primary">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              className={`px-space-md py-space-xs font-label-mono text-label-mono uppercase tracking-wider transition-colors ${
                i < navItems.length - 1 ? "border-r border-primary" : ""
              } ${
                item.active
                  ? "bg-primary text-on-primary font-semibold"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Select language"
              className="flex items-center gap-1 px-2 py-1 border border-primary bg-surface text-primary font-label-mono text-label-mono uppercase hover:bg-surface-container-high transition-colors"
            >
              <Globe size={12} />
              <span>{language.toUpperCase()}</span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-1 bg-surface border border-primary z-50 flex flex-col min-w-[60px]">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`px-3 py-1 font-label-mono text-label-mono text-left hover:bg-surface-container-high transition-colors ${
                      language === l.code ? "bg-primary text-on-primary font-bold" : "text-primary"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            className="inline-flex px-space-md py-space-xs bg-primary text-on-primary font-label-mono text-label-mono uppercase tracking-wider hover:bg-secondary transition-colors border border-primary"
            href="mailto:arifprasojo999@gmail.com"
          >
            {t.nav.contact}
          </a>
          <a
            className="w-8 h-8 rounded-none border border-primary bg-surface hidden sm:flex items-center justify-center hover:bg-primary hover:text-on-primary text-primary transition-colors"
            href="https://github.com/ArifPrasojo"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub Profile"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.824 1.102.824 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <button
            className="w-8 h-8 lg:hidden border border-primary bg-surface flex items-center justify-center text-primary"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <nav className="lg:hidden border-t border-primary bg-surface flex flex-col font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={`p-space-md border-b border-outline-variant/30 ${
                item.active ? "bg-primary text-on-primary font-semibold" : "hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/ArifPrasojo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-space-md flex items-center justify-between hover:bg-surface-container-high hover:text-on-surface"
          >
            <span>{t.ui.githubProfile}</span>
            <span>↗</span>
          </a>
        </nav>
      )}
    </header>
  );
}
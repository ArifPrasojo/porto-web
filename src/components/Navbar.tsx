"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "id", flag: "🇮🇩", label: "Indonesia" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "ja", flag: "🇯🇵", label: "日本語" },
];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: t.nav.projects, href: "#work" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    if (!isLangOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setIsLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isLangOpen]);

  return (
    <nav className="border-y border-[#1e2f4f] bg-[#070e1c] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-display font-bold tracking-widest text-sm uppercase text-[#d9e2fd] hover:text-[#00f2fe] transition">
          ArfPorto
        </a>

        <div className="hidden sm:flex items-center space-x-6 text-xs font-semibold tracking-wider font-mono">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition">
              {link.name}
            </a>
          ))}

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
              aria-label="Change language"
              className="flex items-center gap-1 text-gray-300 hover:text-[#00f2fe] transition"
            >
              <Globe size={14} />
              <span>{language.toUpperCase()}</span>
            </button>
            {isLangOpen && (
              <div
                role="listbox"
                className="absolute right-0 top-[130%] bg-theme-card border border-[#1e2f4f] rounded overflow-hidden min-w-[140px] shadow-xl"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={language === lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-2 w-full px-3 py-2 text-xs text-left hover:bg-[#091326]",
                      language === lang.code ? "text-[#00f2fe] font-bold" : "text-gray-400"
                    )}
                  >
                    <span>{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className="sm:hidden text-gray-300"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="sm:hidden border-t border-[#1e2f4f] bg-[#070e1c] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-mono text-xs font-semibold tracking-wider text-gray-300 hover:text-[#00f2fe]"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsMobileOpen(false);
                }}
                className={cn(
                  "flex-1 py-2 text-xs font-bold rounded border",
                  language === lang.code
                    ? "bg-[#00f2fe] border-[#00f2fe] text-[#00373a]"
                    : "border-[#1e2f4f] text-gray-400"
                )}
              >
                {lang.flag} {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
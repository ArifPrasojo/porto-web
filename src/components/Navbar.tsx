"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PlusCircle, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "id", flag: "🇮🇩", label: "Indonesia" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "ja", flag: "🇯🇵", label: "日本語" },
];

const sectionIds = ["home", "about", "experience", "skills", "projects"];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topMost.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeLang = useCallback(() => setIsLangOpen(false), []);

  useEffect(() => {
    if (!isLangOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) closeLang();
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLang();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isLangOpen, closeLang]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-2 md:top-4 left-0 right-0 z-50 px-2 md:px-4 flex justify-center"
      >
        <div className="relative flex items-center justify-between w-full max-w-6xl h-16 px-4 lg:px-8 z-50">
          <div
            className={cn(
              "absolute inset-0 mecha-cut border-b-4 border-[var(--color-highlight)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-0 transition-all duration-300",
              isScrolled
                ? "bg-[var(--color-secondary)]/95 backdrop-blur-2xl"
                : "bg-[var(--color-secondary)]/80 backdrop-blur-xl"
            )}
          />

          <a href="#home" className="flex items-center gap-2 group mr-2 relative z-10">
            <span className="text-lg md:text-xl font-black tracking-tighter text-[var(--color-accent)] uppercase font-cyberform">
              ArfPorto<span className="font-light text-[var(--color-highlight)]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 items-center relative z-10">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  className={cn(
                    "group relative px-2 transition-colors text-xs font-bold tracking-[0.15em] uppercase",
                    isActive
                      ? "text-[var(--color-highlight)]"
                      : "text-[var(--color-text-muted)] hover:text-white"
                  )}
                >
                  <span className={cn(
                    "text-[var(--color-danger)] absolute -left-2 transition-all",
                    isActive ? "opacity-100 translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  )}>[</span>
                  {link.name}
                  <span className={cn(
                    "text-[var(--color-danger)] absolute -right-2 transition-all",
                    isActive ? "opacity-100 -translate-x-1" : "opacity-0 group-hover:opacity-100 group-hover:-translate-x-1"
                  )}>]</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--color-highlight)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0 relative z-10">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[var(--color-highlight)] text-black mecha-cut-sm text-xs font-extrabold hover:bg-[var(--color-danger)] hover:text-white transition-all shadow-[2px_2px_0_var(--color-border)] whitespace-nowrap"
            >
              <PlusCircle size={16} className="animate-pulse" />
              {t.nav.contact}
            </motion.a>

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-expanded={isLangOpen}
                aria-haspopup="listbox"
                className="flex items-center gap-1 text-[var(--color-text-main)] transition-all p-2 mecha-cut-sm hover:bg-[var(--color-highlight)] hover:text-black group border border-[var(--color-border)] hover:border-black bg-[var(--color-secondary)] relative z-10"
                title="Change Language"
                aria-label="Change Language"
              >
                <div className="flex flex-col items-end leading-none ml-1">
                  <span className="text-[11px] font-extrabold tracking-tight opacity-90">{language.toUpperCase()}</span>
                </div>
                <div className="w-[1px] h-3 bg-current opacity-50" />
                <Globe size={14} className="group-hover:animate-spin" />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    role="listbox"
                    aria-label="Select language"
                    className="absolute right-0 top-[120%] bg-[var(--color-secondary)] border border-[var(--color-highlight)] mecha-cut overflow-hidden shadow-2xl min-w-[150px] z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        role="option"
                        aria-selected={language === lang.code}
                        onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                        className={cn(
                          "flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors hover:bg-[var(--color-primary)] text-left",
                          language === lang.code ? "text-[var(--color-highlight)] font-bold bg-[var(--color-primary)]/50" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                        )}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-[var(--color-text-main)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-[var(--color-secondary)]/95 backdrop-blur-xl border-2 border-[var(--color-border)] mecha-cut overflow-hidden lg:hidden shadow-[8px_8px_0_var(--color-primary)] z-50"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      key={index}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "py-3 border-b border-[var(--color-border)] font-medium transition-colors",
                        isActive
                          ? "text-[var(--color-highlight)] font-bold"
                          : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                      )}
                    >
                      {isActive && <span className="text-[var(--color-danger)] mr-2">[</span>}
                      {link.name}
                      {isActive && <span className="text-[var(--color-danger)] ml-2">]</span>}
                    </a>
                  );
                })}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-4 bg-[var(--color-highlight)] text-black mecha-cut-sm font-bold shadow-[4px_4px_0_var(--color-primary)]"
                >
                  <PlusCircle size={20} />
                  {t.nav.contact}
                </a>

                {/* Mobile Language Switcher */}
                <div className="flex gap-2 mt-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 py-3 mecha-cut-sm text-sm font-bold border transition-all",
                        language === lang.code
                          ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
                          : "border-[var(--color-border)] text-slate-400"
                      )}
                    >
                      {lang.flag} {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

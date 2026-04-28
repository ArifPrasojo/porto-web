"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, PlusCircle, Globe, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { Language } from "@/lib/translations";

const languages: { code: Language; flag: string; label: string }[] = [
  { code: "id", flag: "🇮🇩", label: "Indonesia" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "ja", flag: "🇯🇵", label: "日本語" },
];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
  ];

  const currentLang = languages.find(l => l.code === language)!;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-0 right-0 z-50 px-4 md:px-0 flex justify-center"
      >
        <div
          className={cn(
            "flex items-center justify-between w-full max-w-5xl h-16 px-6 md:px-10 rounded-full transition-all duration-300 border border-slate-700/30 shadow-xl",
            isScrolled
              ? "bg-[var(--color-secondary)]/90 backdrop-blur-2xl"
              : "bg-[var(--color-secondary)]/60 backdrop-blur-xl"
          )}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-primary)] group-hover:border-[var(--color-accent)] transition-colors">
              <Image 
                src="/logo-v2.png" 
                alt="ArfPorto Logo" 
                fill 
                sizes="40px"
                className="object-cover p-1"
              />
            </div>
            <span className="text-xl font-bold tracking-tighter text-[var(--color-text-main)] hidden sm:block">
              ArfPorto<span className="font-light text-[var(--color-accent)]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -1 }}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors text-sm font-semibold"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[var(--color-text-main)] text-[var(--color-primary)] rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-lg"
            >
              <PlusCircle size={18} />
              {t.nav.contact}
            </motion.a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-all p-2 rounded-xl hover:bg-[var(--color-primary)]/50 group"
              >
                <div className="flex flex-col items-end leading-none ml-1">
                  <span className="text-[10px] font-bold tracking-tight opacity-80 group-hover:text-[var(--color-accent)]">{language.toUpperCase()}</span>
                </div>
                <div className="w-[1px] h-3 bg-[var(--color-border)] opacity-50" />
                <Globe size={14} className="group-hover:rotate-12 transition-transform" />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 top-12 bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-2xl min-w-[150px] z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                        className={cn(
                          "flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors hover:bg-[var(--color-primary)]",
                          language === lang.code ? "text-[var(--color-accent)] font-bold" : "text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
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

            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors p-2"
            >
              <Search size={20} />
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-[var(--color-text-main)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              className="absolute top-20 left-4 right-4 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-border)] rounded-3xl overflow-hidden md:hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] py-3 border-b border-[var(--color-border)] font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-4 bg-white text-black rounded-2xl font-bold"
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
                        "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold border transition-all",
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

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[60] flex items-start justify-center pt-32 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="relative w-full max-w-2xl bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 flex items-center gap-4 border-b border-[var(--color-border)]">
                <Search className="text-slate-400" size={24} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Cari sesuatu di portofolio..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder:text-slate-500"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 text-center">
                {searchQuery ? (
                  <div className="text-slate-400">
                    Mencari hasil untuk <span className="text-white font-semibold">"{searchQuery}"</span>...
                    <p className="text-sm mt-2">Fitur pencarian database akan segera hadir!</p>
                  </div>
                ) : (
                  <div className="space-y-4" suppressHydrationWarning>
                    <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">{t.nav.searchTitle}</p>
                    <div className="flex flex-wrap justify-center gap-3" suppressHydrationWarning>
                      {t.nav.searchTags.map((tag) => (
                        <button 
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-4 py-2 bg-slate-800 hover:bg-[var(--color-accent)] text-slate-300 hover:text-white rounded-xl transition-all text-sm"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

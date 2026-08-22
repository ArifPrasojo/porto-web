"use client";

import { useState, useEffect } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>  
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const quickLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="contact" className="bg-[var(--color-primary)] pt-16 pb-12 border-t border-[var(--color-border)] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-[var(--color-text-main)] font-cyberform mb-3">
              ArfPorto<span className="text-[var(--color-accent)]">.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/ArifPrasojo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 mecha-cut-sm bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white transition-all hover:-translate-y-1 border border-[var(--color-border)]"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/arifprasojo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 mecha-cut-sm bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white transition-all hover:-translate-y-1 border border-[var(--color-border)]"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="w-10 h-10 mecha-cut-sm bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white transition-all hover:-translate-y-1 border border-[var(--color-border)]"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold text-[var(--color-text-main)] mb-4 tracking-[0.2em] font-mono uppercase">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold text-[var(--color-text-main)] mb-4 tracking-[0.2em] font-mono uppercase">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[var(--color-accent)] shrink-0" />
                <a href="mailto:arifprasojo999@gmail.com" className="hover:text-[var(--color-accent)] transition-colors">
                  arifprasojo999@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GithubIcon size={14} className="text-[var(--color-accent)] shrink-0" />
                <a href="https://github.com/ArifPrasojo" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                  github.com/ArifPrasojo
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LinkedinIcon size={14} className="text-[var(--color-accent)] shrink-0" />
                <a href="https://www.linkedin.com/in/arifprasojo" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                  linkedin.com/in/arifprasojo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-xs">
            © {new Date().getFullYear()} Arif Prasojo. {t.footer.rights}
          </p>
          <span className="text-[10px] text-[var(--color-text-muted)] font-mono tracking-widest">SYSTEM v2.0</span>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 mecha-cut-sm bg-[var(--color-secondary)] border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-[0_0_15px_rgba(0,92,250,0.3)] flex items-center justify-center ${
          showBackToTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}


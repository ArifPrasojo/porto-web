"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Keahlian", href: "#skills" },
  { name: "Proyek", href: "#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
            "flex items-center justify-between w-full max-w-5xl h-16 px-6 md:px-10 rounded-full transition-all duration-300 border border-white/10 ring-1 ring-black/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
            isScrolled
              ? "bg-slate-900/95 backdrop-blur-2xl"
              : "bg-slate-900/60 backdrop-blur-xl"
          )}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-slate-700 bg-slate-800 group-hover:border-[var(--color-accent)] transition-colors">
              <Image 
                src="/logo.png" 
                alt="ArfPorto Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white hidden sm:block">
              ArfPorto<span className="font-light text-slate-400">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -1 }}
                className="text-slate-300 hover:text-white transition-colors text-sm font-semibold"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-slate-200 transition-colors"
            >
              <PlusCircle size={18} />
              Hubungi Saya
            </motion.a>
            
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-400 hover:text-white transition-colors p-2"
            >
              <Search size={20} />
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
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
              className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden md:hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-300 hover:text-white py-3 border-b border-slate-800 font-medium"
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
                  Hubungi Saya
                </a>
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
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 flex items-center gap-4 border-b border-slate-800">
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
                  <div className="space-y-4">
                    <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Pencarian Cepat</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {["Proyek", "Keahlian", "Pengalaman", "Tentang Saya"].map((tag) => (
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

"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const GithubIcon = ({ size = 12 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const LinkedinIcon = ({ size = 12 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-[#070e1f] via-[#092238] to-[#005f6e] text-white pt-16 overflow-hidden">
      <div className="star w-1 h-1 top-8 left-[20%] opacity-80" />
      <div className="four-point-star top-12 left-[80%] opacity-60" />
      <div className="star w-1.5 h-1.5 top-20 left-[60%] opacity-70" />

      <div className="absolute right-[12%] sm:right-[22%] top-6 pointer-events-none">
        <div className="relative w-16 h-16 rounded-full bg-[#e0fdff] shadow-[0_0_30px_rgba(0,242,254,0.6)]">
          <div className="w-3 h-3 rounded-full bg-[#0a233a] opacity-40 absolute top-4 left-3" />
          <div className="w-2 h-2 rounded-full bg-[#0a233a] opacity-40 absolute bottom-3 right-4" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0a233a] opacity-40 absolute top-3 right-5" />
          <div className="absolute -top-3 right-2 w-0.5 h-4 bg-[#7bd0ff]">
            <div className="w-2.5 h-1.5 bg-[#00f2fe] shadow-[0_0_5px_#00f2fe]" />
          </div>
        </div>
      </div>

      <div className="relative w-full h-32 sm:h-40 pointer-events-none mt-10">
        <svg className="w-full h-full absolute bottom-0 left-0" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <path d="M 270,90 Q 285,75 305,80 Q 320,70 340,82 L 340,95 L 270,95 Z" fill="#e0fdff" opacity="0.6" />
          <path d="M 640,80 Q 655,65 675,70 Q 690,60 710,72 L 710,85 L 640,85 Z" fill="#e0fdff" opacity="0.6" />
          <path d="M 0,200 Q 500,-10 1000,200 Z" fill="#006977" />
          <polygon fill="#004752" points="180,140 190,118 200,140" />
          <polygon fill="#00353d" points="195,145 205,122 215,145" />
          <polygon fill="#004752" points="210,148 220,126 230,148" />
          <polygon fill="#004752" points="350,120 360,100 370,120" />
          <polygon fill="#004752" points="415,115 423,96 431,115" />
          <path d="M 485,92 A 15,15 0 0,0 515,92 Z" fill="#e0fdff" transform="rotate(-25 500 92)" />
          <line stroke="#e0fdff" strokeWidth="2.5" x1="500" x2="500" y1="92" y2="108" />
          <polygon fill="#004752" points="560,115 570,96 580,115" />
          <polygon fill="#004752" points="650,122 660,102 670,122" />
          <polygon fill="#00353d" points="710,132 720,110 730,132" />
          <polygon fill="#004752" points="800,150 812,126 824,150" />
        </svg>
      </div>

      <div className="bg-[#006977] pb-12 pt-2 px-4">
        <div className="max-w-md mx-auto flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-full bg-[#00f2fe]/25 border border-[#00f2fe]/40 flex items-center justify-center text-[#e0fdff] mb-2 shadow-[0_0_8px_rgba(0,242,254,0.3)]">
            <Mail size={12} />
          </div>
          <h2 className="font-display text-xl font-extrabold tracking-wider uppercase text-white mb-3">{t.footer.contact}</h2>
          <div className="font-mono text-[11px] text-[#e0fdff]/85 space-y-0.5 mb-6 font-bold">
            <p><span className="font-bold text-white">Email:</span> arifprasojo999@gmail.com</p>
          </div>

          <form className="w-full space-y-3" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input name="email" required type="email" placeholder="Your e-mail..." className="w-full bg-[#00515c] placeholder-[#e0fdff]/50 text-white text-xs rounded border border-[#00f2fe]/20 px-3 py-2 focus:ring-1 focus:ring-[#00f2fe] focus:outline-none" />
              <input name="subject" required type="text" placeholder="Object..." className="w-full bg-[#00515c] placeholder-[#e0fdff]/50 text-white text-xs rounded border border-[#00f2fe]/20 px-3 py-2 focus:ring-1 focus:ring-[#00f2fe] focus:outline-none" />
            </div>
            <textarea name="message" required rows={4} placeholder="Message..." className="w-full bg-[#00515c] placeholder-[#e0fdff]/50 text-white text-xs rounded border border-[#00f2fe]/20 px-3 py-2 focus:ring-1 focus:ring-[#00f2fe] focus:outline-none resize-none" />
            <div>
              <button type="submit" className="bg-[#00f2fe] hover:bg-[#38bdf8] text-[#00373a] font-bold text-xs uppercase tracking-widest px-8 py-2 rounded-sm transition shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                Send
              </button>
            </div>
            {sent && <p className="font-mono text-[10px] text-[#e0fdff]/80">Opening mail client…</p>}
          </form>
        </div>
      </div>

      <div className="bg-[#040e21] py-4 border-t border-[#0c1f38]">
        <div className="max-w-md mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center justify-center space-x-3 text-gray-400 text-xs">
            <a href="https://github.com/ArifPrasojo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#00f2fe] hover:border-[#00f2fe] hover:shadow-[0_0_8px_#00f2fe] transition">
              <GithubIcon size={12} />
            </a>
            <a href="https://www.linkedin.com/in/arifprasojo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#00f2fe] hover:border-[#00f2fe] hover:shadow-[0_0_8px_#00f2fe] transition">
              <LinkedinIcon size={12} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center hover:text-[#00f2fe] hover:border-[#00f2fe] hover:shadow-[0_0_8px_#00f2fe] transition">
              <Mail size={12} />
            </a>
          </div>
          <p className="text-[10px] text-gray-500">© {new Date().getFullYear()} Arif Prasojo. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
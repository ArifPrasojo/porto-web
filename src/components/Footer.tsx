import { Mail } from "lucide-react";

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
  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">
              ArfPorto<span className="text-[var(--color-accent)]">.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm">
              © {new Date().getFullYear()} Arif Prasojo. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ArifPrasojo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white transition-all hover:-translate-y-1"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/arifprasojo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white transition-all hover:-translate-y-1"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arifprasojo999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-accent)] hover:text-white transition-all hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

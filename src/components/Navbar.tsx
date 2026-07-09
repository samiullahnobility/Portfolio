"use client";

import { useState } from "react";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 shadow-lg shadow-slate-950/20 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="rounded-full text-lg font-bold tracking-tight text-white outline-none transition focus:ring-2 focus:ring-teal-300 focus:ring-offset-4 focus:ring-offset-slate-950" onClick={closeMenu}>
          Samiullah<span className="text-teal-300">.dev</span>
        </a>

        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] px-2 py-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/resume.pdf" download className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300/70 hover:bg-amber-300/10 hover:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-950">
            Resume
          </a>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-teal-300 to-amber-300 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-950/30 transition hover:scale-[1.02] hover:shadow-teal-500/15 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950">
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white shadow-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="space-y-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white" onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a href="/resume.pdf" download className="rounded-full border border-white/15 px-4 py-2.5 text-center text-sm font-semibold text-white" onClick={closeMenu}>
                Resume
              </a>
              <a href="#contact" className="rounded-full bg-gradient-to-r from-teal-300 to-amber-300 px-4 py-2.5 text-center text-sm font-bold text-slate-950" onClick={closeMenu}>
                Hire Me
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}


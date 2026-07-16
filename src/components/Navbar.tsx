"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-50 border-b border-[#DCE5EE] bg-white/88 backdrop-blur-xl transition-shadow ${hasScrolled ? "shadow-[0_10px_30px_rgba(16,35,63,0.08)]" : "shadow-none"}`}>
      <Container>
        <nav className="flex items-center justify-between py-3.5" aria-label="Primary navigation">
          <a href="#home" className="rounded-full text-lg font-semibold tracking-tight text-[#10233F] outline-none transition focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-4 focus:ring-offset-white" onClick={closeMenu}>
            {personalInfo.brand.replace(".dev", "")}<span className="text-[#0F9F9A]">.dev</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] xl:px-4 ${active ? "text-[#0F9F9A]" : "text-[#52647A] hover:bg-[#E6F7F6] hover:text-[#10233F]"}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={personalInfo.resumeUrl} download className="rounded-full border border-[#DCE5EE] bg-white px-4 py-2 text-sm font-semibold text-[#10233F] transition hover:border-[#0F9F9A] hover:bg-[#E6F7F6] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-white">
              Resume
            </a>
            <a href="#contact" className="rounded-full bg-[#0F9F9A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(15,159,154,0.22)] transition hover:bg-[#0b8f8a] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-white">
              Let&apos;s Work Together
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#DCE5EE] bg-white text-[#10233F] shadow-sm transition hover:border-[#0F9F9A] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="relative h-5 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-1 h-0.5 w-5 rounded bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2.5 h-0.5 w-5 rounded bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>
      </Container>

      <div id="mobile-navigation" className={`overflow-hidden border-t border-[#DCE5EE] bg-white transition-[max-height,opacity] duration-300 lg:hidden ${isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"}`}>
        <Container className="py-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-xl px-3 py-3 text-sm font-medium text-[#52647A] transition hover:bg-[#E6F7F6] hover:text-[#10233F] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A]" onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <a href={personalInfo.resumeUrl} download className="rounded-full border border-[#DCE5EE] px-4 py-2.5 text-center text-sm font-semibold text-[#10233F]" onClick={closeMenu}>
                Download Resume
              </a>
              <a href="#contact" className="rounded-full bg-[#0F9F9A] px-4 py-2.5 text-center text-sm font-semibold text-white" onClick={closeMenu}>
                Let&apos;s Work Together
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

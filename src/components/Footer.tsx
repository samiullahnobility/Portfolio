import { contactLinks, navLinks } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a href="#home" className="text-lg font-bold text-white">Samiullah<span className="text-teal-300">.dev</span></a>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Full-stack developer building APIs, dashboards, database systems, and modern web applications.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Navigation</h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">{link.label}</a>)}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Social</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {contactLinks.slice(1).map((link) => <a key={link.label} href={link.href} className="text-sm text-slate-400 transition hover:text-white">{link.label}</a>)}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">Copyright {year} Samiullah.dev. All rights reserved.</p>
    </footer>
  );
}

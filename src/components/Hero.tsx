import Image from "next/image";
import { heroHighlights, heroStats } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-18 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-300/10 blur-3xl lg:left-3/4" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100 shadow-lg shadow-teal-950/20">
            Full-stack developer for practical business systems
          </p>
          <h1 className="mt-7 max-w-5xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.04]">
            Full-Stack .NET, Angular, React & Next.js Developer Building Real Business Software
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            I build APIs, dashboards, booking systems, database-driven applications, integrations, and modern web apps using .NET, Angular, React, Next.js, Node.js, and SQL Server.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-full bg-gradient-to-r from-amber-300 to-teal-300 px-7 py-3.5 text-center text-sm font-bold text-slate-950 shadow-xl shadow-amber-950/25 transition hover:scale-[1.02] hover:shadow-teal-500/15 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-slate-950">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:border-teal-300/70 hover:bg-teal-300/10 hover:text-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950">
              Contact Me
            </a>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap" aria-label="Developer focus areas">
            {heroHighlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2.5 text-center text-sm font-medium text-slate-200 shadow-sm shadow-slate-950/20">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-1 rounded-[1.7rem] bg-gradient-to-br from-teal-300/35 via-white/5 to-amber-300/30 blur-xl" />
          <div className="relative rounded-[1.45rem] border border-white/12 bg-slate-950/85 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur-xl sm:p-5">
            <div className="rounded-[1.1rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">System dashboard</p>
                  <h2 className="mt-1 text-xl font-semibold text-white sm:text-2xl">Business App Preview</h2>
                </div>
                <span className="shrink-0 rounded-full bg-teal-300/10 px-3 py-1.5 text-xs font-semibold text-teal-100 ring-1 ring-teal-300/25">Live-ready UI</span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[0.76fr_1.24fr] sm:items-stretch">
                <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-xl shadow-slate-950/30 sm:min-h-0">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Samiullah"
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 38vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4">
                    <p className="text-base font-semibold text-white">Samiullah</p>
                    <p className="mt-1 text-xs font-medium text-teal-100">Full-Stack Developer</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {heroStats.map((stat, index) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 shadow-lg shadow-slate-950/20">
                      <p className={index === 1 ? "text-2xl font-bold text-amber-200" : "text-2xl font-bold text-white"}>{stat.value}</p>
                      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-200">Claim import sync</span>
                  <span className="rounded-full bg-teal-300/10 px-2.5 py-1 text-xs font-semibold text-teal-100">Validated</span>
                </div>
                <div className="mt-4 h-2.5 rounded-full bg-slate-800 shadow-inner shadow-black/40">
                  <div className="h-2.5 w-4/5 rounded-full bg-gradient-to-r from-teal-300 to-amber-300 shadow-[0_0_24px_rgba(45,212,191,0.35)]" />
                </div>
                <div className="mt-5 grid gap-3 text-sm text-slate-300">
                  <div className="flex justify-between rounded-xl border border-white/8 bg-white/[0.035] px-3.5 py-3"><span>API status</span><span className="font-medium text-teal-200">Healthy</span></div>
                  <div className="flex justify-between rounded-xl border border-white/8 bg-white/[0.035] px-3.5 py-3"><span>SQL checks</span><span className="font-medium text-amber-200">Running</span></div>
                  <div className="flex justify-between rounded-xl border border-white/8 bg-white/[0.035] px-3.5 py-3"><span>Dashboard</span><span className="font-medium text-teal-200">Responsive</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

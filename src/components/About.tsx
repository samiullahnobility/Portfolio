import { aboutCards } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About" title="Practical Full-Stack Development for Real Workflows" description="I am a full-stack developer focused on building practical business software with ASP.NET Core, Angular, React, Next.js, Node.js, and SQL Server." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/45 p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              <p>
                I work on real-world systems where the backend, database, and frontend all need to line up cleanly. My experience includes claim and charge management, data imports, RingCentral analytics, reporting dashboards, booking platforms, JWT authentication, worker services, and API deployment.
              </p>
              <p>
                I can work inside existing codebases, debug frontend and backend issues, improve SQL logic, and build interfaces that support actual business operations. My style is straightforward: understand the workflow, fix the weak points, and deliver software that people can use with confidence.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {aboutCards.map((card, index) => (
              <article key={card.title} className="rounded-[1.1rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-5 shadow-xl shadow-slate-950/15 transition duration-300 hover:-translate-y-1 hover:border-teal-300/35 hover:bg-white/[0.06]">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-300/10 text-sm font-bold text-teal-100 ring-1 ring-teal-300/20">0{index + 1}</span>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

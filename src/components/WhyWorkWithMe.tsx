import { whyWorkWithMe } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";

export function WhyWorkWithMe() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Why me" title="Why Clients Work With Me" align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithMe.map((point) => (
            <div key={point} className="rounded-[1.1rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-5 text-slate-200 shadow-xl shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:border-amber-300/35">
              <span className="mb-4 block h-1 w-10 rounded-full bg-gradient-to-r from-teal-300 to-amber-300" />
              <p className="leading-7">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

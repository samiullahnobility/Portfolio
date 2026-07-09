import { processSteps } from "@/data/portfolio";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionTitle } from "@/components/SectionTitle";

export function Process() {
  return (
    <section className="relative border-y border-white/10 bg-slate-900/35 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Process" title="How I Work" description="A simple delivery process for turning a requirement, bug, or idea into a reliable implementation." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => <ProcessStep key={item.step} item={item} />)}
        </div>
      </div>
    </section>
  );
}

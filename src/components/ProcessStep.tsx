import type { ProcessStep as ProcessStepType } from "@/types/portfolio";

interface ProcessStepProps {
  item: ProcessStepType;
}

export function ProcessStep({ item }: ProcessStepProps) {
  return (
    <article className="rounded-[1.1rem] border border-white/10 bg-slate-950/55 p-6 shadow-xl shadow-slate-950/15 transition duration-300 hover:-translate-y-1 hover:border-teal-300/35">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-teal-300 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20">
        {item.step}
      </span>
      <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
    </article>
  );
}

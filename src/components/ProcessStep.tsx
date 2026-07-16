import type { ProcessStep as ProcessStepType } from "@/types/portfolio";

interface ProcessStepProps {
  item: ProcessStepType;
}

export function ProcessStep({ item }: ProcessStepProps) {
  return (
    <article className="relative rounded-3xl border border-[#DCE5EE] bg-white p-6 shadow-[0_18px_50px_rgba(16,35,63,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#0F9F9A]">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F9F9A] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,159,154,0.20)]">
        {item.step}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-[#10233F]">{item.title}</h3>
      <p className="mt-3 leading-7 text-[#52647A]">{item.description}</p>
    </article>
  );
}

import type { Service } from "@/types/portfolio";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group rounded-[1.1rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:border-teal-300/35 hover:bg-white/[0.065]">
      <span className="mb-5 block h-1 w-10 rounded-full bg-gradient-to-r from-teal-300 to-amber-300 opacity-80 transition duration-300 group-hover:w-14" />
      <h3 className="text-lg font-semibold leading-7 text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
    </article>
  );
}

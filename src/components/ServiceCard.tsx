import type { Service } from "@/types/portfolio";
import { Icon } from "@/components/ui/Icon";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-[#DCE5EE] bg-white p-6 shadow-[0_18px_50px_rgba(16,35,63,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#0F9F9A]">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F7F6] text-[#0F9F9A] ring-1 ring-[#DCE5EE] transition group-hover:bg-[#0F9F9A] group-hover:text-white">
        <Icon name={service.icon} />
      </span>
      <h3 className="mt-5 text-lg font-semibold leading-7 text-[#10233F]">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#52647A]">{service.description}</p>
      <div className="mt-5 border-t border-[#DCE5EE] pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#52647A]">Typical deliverables</p>
        <ul className="mt-3 space-y-2 text-sm text-[#52647A]">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F9F9A]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

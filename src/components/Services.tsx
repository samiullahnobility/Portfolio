import { services } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {
  return (
    <section id="services" className="relative border-y border-white/10 bg-slate-900/35 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/25 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Services" title="Freelance and Professional Development Services" description="Focused services for clients who need APIs, dashboards, SQL work, integrations, debugging, or full business applications." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </div>
    </section>
  );
}

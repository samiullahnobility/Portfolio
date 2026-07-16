import { services } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {
  return (
    <section id="services" className="border-y border-[#DCE5EE] bg-[#EEF4F8] py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Services" title="Client-focused development services" description="Clear offerings for clients who need business web applications, APIs, dashboards, integrations, database work, and practical MVP delivery." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </Container>
    </section>
  );
}

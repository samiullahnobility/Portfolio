import { processSteps } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/ProcessStep";

export function Process() {
  return (
    <section id="process" className="bg-[#F7F9FC] py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Process" title="A clear path from requirement to delivery" description="A practical workflow for understanding the problem, planning the architecture, building carefully, testing edge cases, and supporting delivery." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((item) => <ProcessStep key={item.step} item={item} />)}
        </div>
      </Container>
    </section>
  );
}

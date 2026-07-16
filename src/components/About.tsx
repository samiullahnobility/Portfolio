import { aboutHighlights, personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const facts = [
    ["Location", personalInfo.location],
    ["Availability", personalInfo.availability],
    ["Preferred work", personalInfo.preferredWork],
    ["Main expertise", personalInfo.expertise],
  ];

  return (
    <section id="about" className="bg-[#F7F9FC] py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="About" title="Practical engineering for business workflows" description="I focus on software that helps teams manage real operations, data, customers, appointments, claims, analytics, and internal business processes." />
            <div className="mt-8 space-y-5 text-base leading-8 text-[#52647A] sm:text-lg sm:leading-9">
              <p>
                I work across backend, frontend, and database layers to build systems that are useful in daily business work. My experience includes healthcare workflows, ticketing systems, appointment platforms, maintenance management, analytics, reporting dashboards, integrations, and internal tools.
              </p>
              <p>
                I can improve existing codebases, debug API and SQL problems, build responsive interfaces, and shape backend logic around the actual business process instead of only the screen design.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutHighlights.map((item) => (
                <span key={item} className="rounded-full border border-[#DCE5EE] bg-white px-4 py-2 text-sm font-medium text-[#10233F]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-[#DCE5EE] bg-white p-6 shadow-[0_20px_60px_rgba(16,35,63,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0F9F9A]">Professional summary</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#10233F]">Backend-strong, database-focused, and product-minded.</h3>
            <div className="mt-6 grid gap-4">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-[#DCE5EE] bg-[#F7F9FC] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#52647A]">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#10233F]">{value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

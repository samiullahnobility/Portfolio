import { experience } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-y border-[#DCE5EE] bg-[#EEF4F8] py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Professional experience" description="Recent work across full-stack business applications, backend APIs, dashboards, SQL workflows, integrations, and support for existing systems." />
        <div className="mt-12 grid gap-6">
          {experience.map((item) => (
            <article key={`${item.title}-${item.company}`} className="rounded-3xl border border-[#DCE5EE] bg-white p-6 shadow-[0_20px_60px_rgba(16,35,63,0.08)] sm:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#10233F]">{item.title}</h3>
                  <p className="mt-2 text-[#52647A]">{item.company}</p>
                </div>
                <span className="rounded-full border border-[#DCE5EE] bg-[#E6F7F6] px-4 py-2 text-sm font-semibold text-[#0F9F9A]">{item.dateRange}</span>
              </div>
              <div className="mt-7 grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#52647A]">Responsibilities</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#52647A]">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F9F9A]" />{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#52647A]">Technologies</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => <span key={tech} className="rounded-full border border-[#DCE5EE] bg-[#F7F9FC] px-3 py-1.5 text-xs text-[#10233F]">{tech}</span>)}
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#52647A]">Key achievements</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#52647A]">
                    {item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

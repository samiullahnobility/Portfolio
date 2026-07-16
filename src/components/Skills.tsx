import { skillGroups } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "@/components/SkillGroup";

export function Skills() {
  return (
    <section id="skills" className="border-y border-[#DCE5EE] bg-[#EEF4F8] py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Skills" title="Technology stack for real business systems" description="Grouped skills for backend APIs, responsive frontend applications, database workflows, integrations, and delivery practices." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => <SkillGroup key={group.title} group={group} />)}
        </div>
      </Container>
    </section>
  );
}

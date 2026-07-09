import { skillGroups } from "@/data/portfolio";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "@/components/SkillCard";

export function Skills() {
  return (
    <section id="skills" className="relative border-y border-white/10 bg-slate-900/35 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Skills" title="Technology Stack" description="A balanced stack for APIs, dashboards, integrations, database-heavy workflows, and responsive client interfaces." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => <SkillCard key={group.title} group={group} />)}
        </div>
      </div>
    </section>
  );
}

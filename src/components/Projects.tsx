import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Projects" title="Business Systems, APIs, Dashboards, and Integrations" description="Selected project examples that show backend logic, SQL workflows, API integrations, admin interfaces, and practical software delivery." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilter } from "@/components/ProjectFilter";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const standardProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="bg-[#F7F9FC] py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Projects" title="Premium project showcase" description="Business-focused projects and concepts showing APIs, dashboards, integrations, SQL workflows, admin systems, and modern web applications." />
          <ProjectFilter filters={projectFilters} activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-12 grid gap-6">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
        </div>

        {standardProjects.length ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {standardProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        ) : null}

        {!filteredProjects.length ? (
          <div className="mt-10 rounded-2xl border border-[#DCE5EE] bg-white p-8 text-center text-[#52647A]">
            No projects found for this filter.
          </div>
        ) : null}
      </Container>
    </section>
  );
}

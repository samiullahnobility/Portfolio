import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950/90 p-6 shadow-2xl shadow-slate-950/25 transition duration-300 hover:-translate-y-1 hover:border-amber-300/35 hover:shadow-amber-950/10 sm:p-7">
      <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-teal-300 to-amber-300 transition duration-300 group-hover:w-24" />
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-full bg-teal-300/10 px-3 py-1.5 text-xs font-semibold text-teal-100 ring-1 ring-teal-300/20">
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(252,211,77,0.45)]" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
        <a href={project.detailsUrl} className="rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-slate-950">
          View Details
        </a>
        <a href={project.sourceUrl} className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:border-teal-300/70 hover:bg-teal-300/10 hover:text-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950">
          Source Code
        </a>
      </div>
    </article>
  );
}

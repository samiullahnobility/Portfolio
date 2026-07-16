import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const accentClasses: Record<string, string> = {
  blue: "from-[#DBEAFE] to-[#E6F7F6]",
  cyan: "from-[#E6F7F6] to-[#DBEAFE]",
  teal: "from-[#DDF7F4] to-[#EEF4F8]",
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const imageClass = accentClasses[project.preview.accent] ?? accentClasses.cyan;

  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DCE5EE] bg-white shadow-[0_18px_55px_rgba(16,35,63,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#0F9F9A] focus-within:border-[#0F9F9A] ${featured ? "lg:grid lg:grid-cols-[0.95fr_1.05fr]" : ""}`}>
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${imageClass} ${featured ? "lg:aspect-auto lg:min-h-full" : ""}`}>
        <div className="absolute inset-4 rounded-3xl border border-[#DCE5EE] bg-white/80 p-4 transition duration-300 group-hover:scale-[1.03]">
          <div className="flex items-center justify-between border-b border-[#DCE5EE] pb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0F9F9A]">{project.preview.label}</span>
            <span className="rounded-full bg-[#E6F7F6] px-3 py-1 text-xs font-semibold text-[#10233F]">{project.preview.metric}</span>
          </div>
          <div className="mt-5 grid gap-3">
            <div className="h-3 w-2/3 rounded-full bg-[#DCE5EE]" />
            <div className="h-3 w-5/6 rounded-full bg-[#DCE5EE]/70" />
            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="h-16 rounded-xl bg-[#0F9F9A]/15" />
              <div className="h-16 rounded-xl bg-[#2563EB]/10" />
              <div className="h-16 rounded-xl bg-[#0F9F9A]/10" />
            </div>
            <div className="h-20 rounded-xl border border-[#DCE5EE] bg-[#F7F9FC]" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#E6F7F6] px-3 py-1 text-xs font-semibold text-[#0F9F9A] ring-1 ring-[#DCE5EE]">{project.category}</span>
          {project.featured ? <span className="rounded-full bg-[#F7F9FC] px-3 py-1 text-xs font-semibold text-[#52647A] ring-1 ring-[#DCE5EE]">Featured</span> : null}
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#10233F]">{project.title}</h3>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[#52647A]">Business problem</p>
        <p className="mt-2 leading-7 text-[#52647A]">{project.problem}</p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#52647A]">Solution</p>
        <p className="mt-2 leading-7 text-[#52647A]">{project.solution}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-[#DCE5EE] bg-[#F7F9FC] px-3 py-1.5 text-xs font-medium text-[#10233F]">
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 grid gap-2 text-sm leading-6 text-[#52647A] sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F9F9A]" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row sm:flex-wrap">
          <a href={project.detailsUrl} className="group/link rounded-full bg-[#0F9F9A] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#0b8f8a] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-white">
            Case Study <span className="inline-block transition group-hover/link:translate-x-1" aria-hidden="true">-&gt;</span>
          </a>
          <a href={project.liveUrl} className="rounded-full border border-[#DCE5EE] bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#10233F] transition hover:border-[#0F9F9A] hover:bg-[#E6F7F6] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-white">
            Live Demo
          </a>
          <a href={project.sourceUrl} className="rounded-full px-4 py-2.5 text-center text-sm font-semibold text-[#2563EB] transition hover:bg-[#EEF4F8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-white">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

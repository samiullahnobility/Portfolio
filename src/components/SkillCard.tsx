import type { SkillGroup } from "@/types/portfolio";

interface SkillCardProps {
  group: SkillGroup;
}

export function SkillCard({ group }: SkillCardProps) {
  return (
    <article className="group rounded-[1.15rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/80 p-6 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-teal-950/20">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{group.title}</h3>
        <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.6)]" />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm text-slate-200 transition group-hover:border-teal-300/20 group-hover:bg-teal-300/[0.055]">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

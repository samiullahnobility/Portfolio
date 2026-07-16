import type { SkillGroup as SkillGroupType } from "@/types/portfolio";
import { Icon } from "@/components/ui/Icon";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="rounded-3xl border border-[#DCE5EE] bg-white p-6 shadow-[0_18px_50px_rgba(16,35,63,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#0F9F9A]">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6F7F6] text-[#0F9F9A] ring-1 ring-[#DCE5EE]">
          <Icon name={group.icon} />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-[#10233F]">{group.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#52647A]">{group.description}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-[#DCE5EE] bg-[#F7F9FC] px-3 py-1.5 text-sm text-[#10233F]">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

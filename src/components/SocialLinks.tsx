import { socialLinks } from "@/data/portfolio";
import { Icon } from "@/components/ui/Icon";

interface SocialLinksProps {
  compact?: boolean;
}

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className={`inline-flex items-center gap-2 rounded-full border border-[#DCE5EE] bg-white text-[#10233F] transition hover:border-[#0F9F9A] hover:bg-[#E6F7F6] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-[#F7F9FC] ${compact ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm"}`}
        >
          <Icon name={link.icon} className="h-4 w-4" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}

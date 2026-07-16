import { trustItems } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function TrustStrip() {
  return (
    <section aria-label="Trust and capabilities" className="border-y border-[#DCE5EE] bg-[#EEF4F8] py-6">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-[#DCE5EE] bg-white px-4 py-3 text-sm font-medium text-[#10233F] shadow-[0_10px_28px_rgba(16,35,63,0.05)]">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F6] text-[#0F9F9A] ring-1 ring-[#DCE5EE]">
                <Icon name={item.icon} className="h-4 w-4" />
              </span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

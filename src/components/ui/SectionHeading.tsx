interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0F9F9A]">{eyebrow}</p> : null}
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#10233F] sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-pretty text-base leading-8 text-[#52647A] sm:text-lg">{description}</p> : null}
    </div>
  );
}

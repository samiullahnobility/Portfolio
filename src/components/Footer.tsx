import { navLinks, personalInfo } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#DCE5EE] bg-white py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="text-lg font-semibold text-[#10233F]">{personalInfo.brand.replace(".dev", "")}<span className="text-[#0F9F9A]">.dev</span></a>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#52647A]">Full-stack developer building APIs, dashboards, database systems, and modern web applications.</p>
            <p className="mt-4 text-sm text-[#52647A]">Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#10233F]">Navigation</h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm text-[#52647A] transition hover:text-[#10233F] focus:outline-none focus:text-[#10233F]">{link.label}</a>)}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#10233F]">Connect</h2>
            <div className="mt-4"><SocialLinks compact /></div>
            <a href={personalInfo.resumeUrl} download className="mt-4 inline-flex rounded-full border border-[#DCE5EE] px-4 py-2 text-sm font-semibold text-[#10233F] transition hover:border-[#0F9F9A] hover:bg-[#E6F7F6]">Download Resume</a>
          </div>
        </div>
        <p className="mt-8 border-t border-[#DCE5EE] pt-6 text-sm text-[#52647A]">Copyright {year} {personalInfo.brand}. All rights reserved.</p>
      </Container>
    </footer>
  );
}

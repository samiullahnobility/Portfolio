import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { TrustStrip } from "@/components/TrustStrip";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: personalInfo.name,
        jobTitle: personalInfo.role,
        email: `mailto:${personalInfo.email}`,
        image: personalInfo.profileImage,
        url: "https://example.com",
        sameAs: socialLinks.filter((link) => link.href !== "#" && !link.href.startsWith("mailto:")).map((link) => link.href),
        knowsAbout: ["ASP.NET Core", "C#", "Angular", "React", "Next.js", "TypeScript", "SQL Server", "PostgreSQL", "Tailwind CSS"],
      },
      {
        "@type": "WebSite",
        name: personalInfo.brand,
        url: "https://example.com",
        description: personalInfo.summary,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

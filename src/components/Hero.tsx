import Image from "next/image";
import { heroStats, personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#F7F9FC] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.10),transparent_30rem),radial-gradient(circle_at_82%_20%,rgba(15,159,154,0.10),transparent_28rem)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(16,35,63,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(16,35,63,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#DCE5EE] bg-[#E6F7F6] px-4 py-2 text-sm font-medium text-[#0F9F9A]">
              <span className="h-2 w-2 rounded-full bg-[#0F9F9A]" />
              {personalInfo.availability}
            </p>
            <h1 className="mt-7 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[#10233F] sm:text-5xl lg:text-[4rem] lg:leading-[1.05]">
              {personalInfo.headline}
            </h1>
            <p className="mt-5 text-lg font-medium leading-8 text-[#2563EB] sm:text-xl">{personalInfo.role}</p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-[#52647A] sm:text-lg">
              {personalInfo.summary}
            </p>
            <div className="mt-9 grid gap-3 min-[420px]:grid-cols-3 sm:flex sm:flex-wrap">
              <a href="#projects" className="rounded-full bg-[#0F9F9A] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,159,154,0.22)] transition hover:bg-[#0b8f8a] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-[#F7F9FC]">
                View My Work
              </a>
              <a href={personalInfo.resumeUrl} download className="rounded-full border border-[#DCE5EE] bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#10233F] transition hover:border-[#0F9F9A] hover:bg-[#E6F7F6] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-[#F7F9FC]">
                Download Resume
              </a>
              <a href="#contact" className="rounded-full px-5 py-3.5 text-center text-sm font-semibold text-[#2563EB] transition hover:bg-white hover:text-[#10233F] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#F7F9FC]">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-6 top-8 h-36 w-36 rounded-full bg-[#2563EB]/10" />
            <div className="absolute -right-4 bottom-8 h-44 w-44 rounded-full bg-[#0F9F9A]/10" />
            <div className="relative rounded-3xl border border-[#DCE5EE] bg-[#EEF4F8] p-4 shadow-[0_24px_70px_rgba(16,35,63,0.12)] sm:p-5">
              <div className="absolute left-5 top-5 z-10 max-w-[13rem] rounded-2xl border border-[#DCE5EE] bg-white px-4 py-3 text-sm font-medium leading-5 text-[#10233F] shadow-[0_14px_34px_rgba(16,35,63,0.10)]">
                {personalInfo.availability}
              </div>
              <div className="absolute bottom-5 right-5 z-10 max-w-[16rem] rounded-2xl border border-[#DCE5EE] bg-white px-4 py-3 text-sm font-medium leading-5 text-[#10233F] shadow-[0_14px_34px_rgba(16,35,63,0.10)]">
                ASP.NET Core · Angular · React · Next.js
              </div>
              <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-[#DCE5EE] bg-white sm:min-h-[520px] lg:min-h-[580px]">
                <Image
                  src={personalInfo.profileImage}
                  alt="Professional portrait of Samiullah, full-stack developer"
                  fill
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, (min-width: 640px) 70vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-[#DCE5EE] bg-white px-5 py-6 shadow-[0_18px_50px_rgba(16,35,63,0.08)] sm:px-8">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className={`text-center lg:px-8 ${index > 0 ? "lg:border-l lg:border-[#DCE5EE]" : ""}`}>
                <dt className="text-sm font-medium text-[#52647A]">{stat.label}</dt>
                <dd className="mt-2 text-3xl font-semibold tracking-tight text-[#10233F]">{stat.value}</dd>
                <p className="mt-2 text-sm text-[#52647A]">{stat.helper}</p>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

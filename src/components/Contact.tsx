import { contactInfo, personalInfo } from "@/data/portfolio";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" className="bg-[#F7F9FC] py-24 sm:py-28">
      <Container>
        <div className="grid gap-8 rounded-3xl border border-[#DCE5EE] bg-[#EEF4F8] p-5 shadow-[0_20px_60px_rgba(16,35,63,0.08)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0F9F9A]">Contact</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#10233F] sm:text-4xl lg:text-5xl">{contactInfo.heading}</h2>
            <p className="mt-5 text-base leading-8 text-[#52647A] sm:text-lg">{contactInfo.description}</p>
            <div className="mt-8 grid gap-3 text-sm text-[#52647A]">
              <div className="rounded-2xl border border-[#DCE5EE] bg-white p-4"><span className="font-semibold text-[#10233F]">Email:</span> {personalInfo.email}</div>
              <div className="rounded-2xl border border-[#DCE5EE] bg-white p-4"><span className="font-semibold text-[#10233F]">Location:</span> {contactInfo.location}</div>
              <div className="rounded-2xl border border-[#DCE5EE] bg-white p-4"><span className="font-semibold text-[#10233F]">Availability:</span> {contactInfo.availability}</div>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

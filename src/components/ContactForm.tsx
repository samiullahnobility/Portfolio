"use client";

import { FormEvent, useState } from "react";
import { contactInfo, personalInfo } from "@/data/portfolio";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

function getFormValue(form: HTMLFormElement, name: string) {
  const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
  return field?.value.trim() ?? "";
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors: FormErrors = {};
    const name = getFormValue(form, "name");
    const email = getFormValue(form, "email");
    const message = getFormValue(form, "message");

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please describe the project or issue.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 500);
  }

  const inputClass = "mt-2 w-full rounded-2xl border border-[#DCE5EE] bg-white px-4 py-3 text-[#10233F] outline-none transition placeholder:text-[#52647A]/65 focus:border-[#0F9F9A] focus:ring-4 focus:ring-[#0F9F9A]/10";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-[#DCE5EE] bg-white p-5 shadow-[0_20px_60px_rgba(16,35,63,0.08)] sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-[#10233F]">
          Name
          <input name="name" className={inputClass} placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name ? <span id="name-error" className="mt-2 block text-sm text-red-600">{errors.name}</span> : null}
        </label>
        <label className="text-sm font-medium text-[#10233F]">
          Email
          <input name="email" type="email" className={inputClass} placeholder={personalInfo.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email ? <span id="email-error" className="mt-2 block text-sm text-red-600">{errors.email}</span> : null}
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-[#10233F]">
        Company
        <input name="company" className={inputClass} placeholder="Company or project name" />
      </label>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-[#10233F]">
          Project type
          <select name="projectType" className={inputClass} defaultValue={contactInfo.projectTypes[0]}>
            {contactInfo.projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium text-[#10233F]">
          Budget range
          <select name="budget" className={inputClass} defaultValue={contactInfo.budgetRanges[0]}>
            {contactInfo.budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-[#10233F]">
        Message
        <textarea name="message" rows={5} className={inputClass} placeholder="Tell me about the workflow, API, dashboard, database issue, or web application you need." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? <span id="message-error" className="mt-2 block text-sm text-red-600">{errors.message}</span> : null}
      </label>

      <p className="mt-4 rounded-2xl border border-[#DCE5EE] bg-[#E6F7F6] px-4 py-3 text-sm leading-6 text-[#10233F]">{contactInfo.note}</p>

      <button type="submit" disabled={status === "loading"} className="mt-5 w-full rounded-full bg-[#0F9F9A] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,159,154,0.22)] transition hover:bg-[#0b8f8a] focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70">
        {status === "loading" ? "Checking form..." : "Prepare Demo Message"}
      </button>

      {status === "success" ? <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">Thanks. This demo form is validated, but no message was sent because no backend is connected yet.</p> : null}
    </form>
  );
}

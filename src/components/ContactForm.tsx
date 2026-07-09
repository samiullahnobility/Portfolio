"use client";

import { FormEvent, useState } from "react";
import { contactLinks, projectTypes } from "@/data/portfolio";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thanks! This is a demo form. Please connect it to email or backend later.");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/85 p-5 shadow-2xl shadow-slate-950/35 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-teal-200/90">Contact</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Let&apos;s Build Something Practical</h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Have a client project, business system, dashboard, API, or job opportunity? Send a message and I will help turn the requirement into a working plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-teal-300/60 hover:bg-teal-300/10 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[1.15rem] border border-white/10 bg-slate-950/75 p-5 shadow-2xl shadow-slate-950/30 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-200">
              Name
              <input name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-4 focus:ring-teal-300/10" placeholder="Your name" />
            </label>
            <label className="text-sm font-medium text-slate-200">
              Email
              <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-4 focus:ring-teal-300/10" placeholder="you@example.com" />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-slate-200">
            Project Type
            <select name="projectType" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-teal-300 focus:ring-4 focus:ring-teal-300/10" defaultValue={projectTypes[0]}>
              {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-slate-200">
            Message
            <textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-4 focus:ring-teal-300/10" placeholder="Tell me about the system, bug, dashboard, API, or workflow you need." />
          </label>

          <button type="submit" className="mt-5 w-full rounded-full bg-gradient-to-r from-amber-300 to-teal-300 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-amber-950/20 transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-slate-950">
            Send Demo Message
          </button>

          {message ? <p className="mt-4 rounded-xl border border-teal-300/20 bg-teal-300/10 px-4 py-3 text-sm text-teal-100" role="status">{message}</p> : null}
        </form>
      </div>
    </section>
  );
}

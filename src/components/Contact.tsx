import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

const channels = [
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent">06</span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            <span>Contact</span>
          </p>
          <h2 className="display-heading balance mt-6 max-w-4xl text-title">
            Have an app that needs to reach the store?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.availability}. Based in {profile.location} and comfortable working
            remotely across time zones — the fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-sweep group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-canvas"
            >
              <Mail
                size={16}
                aria-hidden
                className="relative z-10 transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-0.5"
              />
              <span className="relative z-10">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="btn-outline-sweep group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 text-ink"
            >
              <Phone
                size={16}
                aria-hidden
                className="relative z-10 transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-rotate-12"
              />
              <span className="relative z-10">{profile.phone}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative flex items-center justify-between gap-4 overflow-hidden bg-canvas p-6 sm:p-7"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-left scale-x-0 bg-surface transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100"
                  />
                  <span aria-hidden className="rule-wipe z-10 group-hover:scale-x-100" />
                  <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1">
                    <span className="eyebrow block">{channel.label}</span>
                    <span className="mt-2 block text-ink transition-colors duration-400 group-hover:text-accent">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden
                    className="relative z-10 shrink-0 text-faint transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowDownRight, MapPin } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { LocalTime } from "./LocalTime";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48">
      <div className="shell">
        <Reveal>
          <div className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} aria-hidden />
              {profile.location}
            </span>
            <span aria-hidden className="hidden h-px w-8 bg-line-strong sm:block" />
            <LocalTime />
          </div>
        </Reveal>

        <h1 className="display-heading mt-8 text-display sm:mt-10">
          <Reveal>
            <span className="block">Salim Maula</span>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="block text-faint">Hudzaifah</span>
          </Reveal>
        </h1>

        <div className="mt-10 grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="font-display text-2xl leading-tight text-ink sm:text-3xl">
              {profile.role}
              <span className="block text-accent">{profile.specialty}</span>
            </p>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-7">
            <p className="balance max-w-2xl text-lead leading-snug text-ink-soft">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas"
              >
                <span className="relative z-10">See selected work</span>
                <ArrowDownRight
                  size={16}
                  aria-hidden
                  className="relative z-10 transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="btn-outline-sweep inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm text-ink"
              >
                <span className="relative z-10">{profile.email}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-canvas px-5 py-6 transition-colors duration-400 hover:bg-surface sm:px-7 sm:py-8"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="display-heading block text-4xl transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1 group-hover:text-accent sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm leading-snug text-muted transition-colors duration-400 group-hover:text-ink">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

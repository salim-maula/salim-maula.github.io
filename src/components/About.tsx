import Image from "next/image";
import { principles, profile } from "@/data/profile";
import { education, languages } from "@/data/skills";
import portrait from "@/assets/salim-portrait.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Availability", value: profile.availability },
  { label: "Education", value: `${education[0].degree.replace("Bachelor's Degree in ", "B.Eng ")}, ${education[0].school}` },
  { label: "Languages", value: languages.map((l) => l.name).join(", ") },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Shipping is the part most people underestimate."
        />

        {/* Both columns stretch to one shared height, so their bottom edges stay flush.
            The portrait fills its column with object-cover instead of driving the height. */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.05} className="lg:col-span-5">
            <figure className="group relative h-full min-h-[460px] overflow-hidden rounded-xl border border-line bg-surface sm:min-h-[560px] lg:min-h-[520px]">
              <Image
                src={portrait}
                alt={`${profile.name}, ${profile.role}`}
                placeholder="blur"
                fill
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 60vw, 90vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
              />
              <figcaption className="eyebrow absolute inset-x-0 bottom-0 flex items-center justify-between bg-canvas/85 px-4 py-3 backdrop-blur-sm">
                <span>{profile.firstName}</span>
                <span className="text-accent">{profile.location}</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink-soft">{profile.summary}</p>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {profile.summaryExtended}
            </p>

            {/* Pushed to the bottom so it lands level with the foot of the portrait */}
            <dl className="mt-10 lg:mt-auto lg:pt-10">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="group relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-3.5"
                >
                  <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="text-sm text-ink transition-colors duration-400 group-hover:text-accent">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <Reveal
              as="li"
              key={principle.title}
              delay={0.05 * i}
              className="group relative bg-canvas p-6 transition-colors duration-400 hover:bg-surface sm:p-7"
            >
              <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
              <p className="eyebrow text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-lg leading-snug text-ink transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-400 group-hover:text-ink-soft">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

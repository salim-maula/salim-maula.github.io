import { experience } from "@/data/experience";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Four years, six teams, one discipline."
          description="From teaching Kotlin to high school students to owning the architecture and release process for a company's entire mobile portfolio."
        />

        <ol className="mt-14">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={`${job.company}-${job.role}`}
              delay={0.03}
              className="group relative grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-12"
            >
              <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
              <div className="lg:col-span-4">
                <p className="eyebrow flex items-center gap-3">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{job.period}</span>
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight text-ink transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1.5 group-hover:text-accent">
                  {job.company}
                </h3>
                {job.companyNote ? (
                  <p className="mt-1 text-sm text-faint">{job.companyNote}</p>
                ) : null}
                <p className="mt-3 text-sm text-muted">{job.location}</p>
              </div>

              <div className="lg:col-span-8">
                <p className="font-display text-lg text-accent">{job.role}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{job.summary}</p>

                {job.points.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2 size-1 shrink-0 rounded-full bg-line-strong transition-colors duration-500 group-hover:bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="font-mono text-xs text-faint transition-colors duration-400 group-hover:text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { certifications, education, languages } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="05" eyebrow="Background" title="Education & credentials" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="eyebrow">Education</h3>
              <ul className="mt-6 space-y-6">
                {education.map((item) => (
                  <li key={item.school} className="group relative border-t border-line pt-5">
                    <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
                    <p className="font-display text-xl text-ink transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:text-accent">
                      {item.school}
                    </p>
                    <p className="mt-1.5 text-sm text-muted">{item.degree}</p>
                    <p className="mt-2 font-mono text-xs text-faint">
                      {item.period} · {item.location}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.06}>
              <h3 className="eyebrow mt-12">Languages</h3>
              <ul className="mt-6 space-y-3">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="group relative flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-3"
                  >
                    <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
                    <span className="text-ink transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1">
                      {language.name}
                    </span>
                    <span className="text-sm text-muted">{language.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <h3 className="eyebrow">Training & certifications</h3>
            <ul className="mt-6">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="group relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-4"
                >
                  <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
                  <div className="transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1">
                    <p className="text-ink transition-colors duration-400 group-hover:text-accent">
                      {cert.name}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-faint transition-colors duration-400 group-hover:text-accent">
                    {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

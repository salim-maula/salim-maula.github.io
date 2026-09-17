import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-surface/60 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Capabilities"
          title="The toolkit behind the shipped apps."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              as="li"
              key={group.title}
              delay={0.02 * i}
              className="group relative bg-canvas p-6 transition-colors duration-400 hover:bg-surface sm:p-8"
            >
              <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
              <h3 className="eyebrow text-ink transition-colors duration-400 group-hover:text-accent">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 hover:border-accent hover:bg-accent-wash hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

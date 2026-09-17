import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/work";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) {
    return <span className="text-sm text-faint">Internal product</span>;
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {project.links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-sweep group/link inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm text-ink hover:border-accent hover:text-canvas"
          >
            <span className="relative z-10">{link.label}</span>
            <ArrowUpRight
              size={14}
              aria-hidden
              className="relative z-10 transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
            />
            <span className="sr-only"> — {project.name} (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      delay={0.04}
      className="group relative grid gap-8 border-t border-line py-10 sm:py-14 lg:grid-cols-12 lg:gap-12"
    >
      <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
      <div className="lg:col-span-4">
        <p className="eyebrow flex items-center gap-3">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.context}</span>
        </p>
        <h3 className="display-heading mt-5 text-3xl transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1.5 group-hover:text-accent sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-muted transition-colors duration-400 group-hover:text-ink-soft">
          {project.kind}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.platforms.map((platform) => (
            <li
              key={platform}
              className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors duration-400 group-hover:bg-accent-wash group-hover:text-accent"
            >
              {platform}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-8">
        <p className="text-lg leading-relaxed text-ink-soft">{project.summary}</p>

        <ul className="mt-7 space-y-3">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span
                aria-hidden
                className="mt-2 size-1 shrink-0 rounded-full bg-accent transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-150"
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {project.stack.map((tech) => (
              <li key={tech} className="font-mono text-xs text-faint">
                {tech}
              </li>
            ))}
          </ul>
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 bg-surface/60 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Products in the hands of real users."
          description="Apps live on the App Store and Google Play, plus internal tools running on warehouse floors and retail fixtures every day."
        />

        <div className="mt-14">
          {featured.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-20 border-t border-line pt-10">
          <h3 className="eyebrow">Also built</h3>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {others.map((project) => (
              <li
                key={project.slug}
                className="group relative bg-canvas p-6 transition-colors duration-400 hover:bg-surface sm:p-7"
              >
                <span aria-hidden className="rule-wipe group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg text-ink transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1 group-hover:text-accent">
                      {project.name}
                    </h4>
                    <p className="mt-1 text-sm text-muted">{project.kind}</p>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-faint transition-colors duration-400 group-hover:text-muted">
                    {project.platforms[0]}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>
                {project.links.length > 0 ? (
                  <div className="mt-5">
                    <ProjectLinks project={project} />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

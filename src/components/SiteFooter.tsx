import { profile } from "@/data/profile";
import { LocalTime } from "./LocalTime";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-faint">
          {profile.location} · <LocalTime />
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors duration-300 hover:text-accent"
        >
          Back to top
          <span
            aria-hidden
            className="inline-block transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1"
          >
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}

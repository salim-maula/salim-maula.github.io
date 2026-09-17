# Salim Maula Hudzaifah — Portfolio

Personal portfolio site. Single-page, statically prerendered, content-driven.

## Stack

Matches the `revamp-kolink` setup: **Next.js 15.5.25** (App Router) · React 19 · TypeScript ·
**Tailwind CSS v4** · framer-motion · lucide-react · clsx + tailwind-merge.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build -> .next
npm run build:check  # verification build -> .next-verify (safe while dev is running)
npm run lint
```

**Do not run `npm run build` while `npm run dev` is up.** Both write to `.next`, so the
production build overwrites the chunks the dev server is serving and every request then fails
with `Cannot find module './718.js'`. Use `npm run build:check` instead — it sets
`NEXT_DIST_DIR=.next-verify` (wired up in `next.config.ts`) so the two never touch the same
folder. If a dev server has already been clobbered, `rm -rf .next` and restart it.

## Editing content

All copy lives in `src/data/` — no JSX edits needed for routine updates.

| File | Holds |
|---|---|
| `src/data/profile.ts` | Name, role, contact details, availability, summary, hero stats, the four "principles" cards |
| `src/data/work.ts` | Every project. `featured: true` puts it in the main list; `false` drops it into the "Also built" grid |
| `src/data/experience.ts` | Job history, newest first |
| `src/data/skills.ts` | Skill groups, education, certifications, languages |

Adding a new app = one object in `src/data/work.ts`. Store links render automatically from the
`links` array (`App Store`, `Google Play`, or `Website`).

## Design system

Defined once in `src/app/globals.css` under `@theme`, so Tailwind generates the utilities:

- **Surfaces** — warm paper: `canvas` `#faf9f7`, `surface` `#f4f3ee`, `surface-2`, `line`, `line-strong`
- **Ink** — `ink` `#17171a`, `ink-soft`, `muted`, `faint`
- **Accent** — a single terracotta `accent` `#c0451b` (plus `accent-bright`, `accent-wash`).
  One accent only; adding a second is what makes portfolios look noisy.
- **Type** — Space Grotesk (display) · Inter (body) · JetBrains Mono (the small uppercase labels),
  all loaded through `next/font/google`
- **Fluid sizes** — `text-display`, `text-title`, `text-lead` are `clamp()` values, so headings
  scale with the viewport instead of stepping at breakpoints

Custom utilities: `shell` (page gutter + max width), `eyebrow` (mono section label),
`display-heading` (tight tracking + leading), `balance` (balanced text wrap).

## Hover language

One idea, repeated everywhere, so interaction feels like a system rather than a pile of effects:
**a terracotta rule wipes in from the left, and the thing you are pointing at leans slightly toward you.**

| Utility | Used on | What happens |
|---|---|---|
| `rule-wipe` | Project rows, job rows, cards, cert and language rows | A 1px accent rule grows across the top border over 0.7s |
| `btn-sweep` | Filled pills (CTA, store links) | An accent panel slides up from below the label; the pill lifts 2px |
| `btn-outline-sweep` | Outline pills (email, phone) | Surface fills from the left, border darkens to ink |
| `link-underline` | Desktop nav | Underline grows from the left instead of snapping on |

Direct children of a `btn-sweep` / `btn-outline-sweep` need `relative z-10` so they stay above
the sweeping panel — text nodes will otherwise be painted over.

Supporting moves, all `group-hover` on the row: titles shift 1–1.5px right and turn accent,
bullet dots scale up, stat numbers lift and turn accent, tech chips warm from `faint` to `muted`,
arrows fly out diagonally. Durations sit at 0.3–0.7s on `cubic-bezier(.22, 1, .36, 1)` — long
enough to read as motion, short enough not to feel laggy.

Everything here is a plain CSS transition, so the single `prefers-reduced-motion` block in
`globals.css` switches all of it off at once.

## Structure

```
src/
  app/
    layout.tsx      fonts, metadata, skip link
    page.tsx        section order
    globals.css     design tokens + base styles
  components/
    SiteHeader      sticky nav, full-screen mobile overlay
    Hero            name, role, tagline, stat band
    About           summary + principles grid       (01)
    Work            featured projects + also-built  (02)
    ExperienceTimeline                              (03)
    Skills                                          (04)
    Credentials     education, certs, languages     (05)
    Contact                                         (06)
    SiteFooter
    Reveal          scroll-in animation wrapper
    SectionHeading  numbered section header
    LocalTime       live Jakarta clock
  data/             all content
  lib/cn.ts         clsx + tailwind-merge helper
```

## Accessibility notes

- Skip-to-content link, visible focus rings, `aria-expanded` on the menu toggle
- `Reveal` collapses to a plain fade under `prefers-reduced-motion`, and `globals.css`
  neutralizes every transition — including the whole hover layer — in one rule
- Hover effects are decoration only; no information is revealed by hover alone, so touch and
  keyboard users lose nothing. `btn-sweep` also fires on `:focus-visible`
- External links carry `rel="noreferrer noopener"` and an off-screen "opens in a new tab" note
- `LocalTime` renders after mount to avoid a server/client hydration mismatch

## Deploying

### GitHub Pages (salim-maula.github.io)

```bash
npm run build:pages   # static export -> ./out
```

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `./out`.
In the repo: **Settings -> Pages -> Source: GitHub Actions** (not "Deploy from a branch").

Three things Pages needs that a normal Next build does not give you, all handled already:

| Problem | Why it breaks Pages | Handled by |
|---|---|---|
| No Node server | `next start` and on-demand image optimisation cannot run | `output: "export"` + `images.unoptimized` in `next.config.ts`, gated behind `NEXT_EXPORT` |
| `_next/` directory | Jekyll hides underscore-prefixed paths, so every asset 404s | `.nojekyll`, written by `scripts/pages-postbuild.mjs` |
| Extensionless `opengraph-image` | Pages sets Content-Type from the extension, so crawlers get `application/octet-stream` | Same script renames it to `.png` and rewrites every reference |

`metadataBase` in `src/app/layout.tsx` also has to be set, otherwise `og:image` is emitted as
`http://localhost:3000/...` and link previews break. Override it with `NEXT_PUBLIC_SITE_URL`.

**This is a user site**, served from the domain root, so no `basePath` is needed. If you ever
move it to a project repo (`salim-maula.github.io/portfolio`), add `basePath: "/portfolio"` and
`assetPrefix` to `next.config.ts` or every asset will 404.

**Trade-off:** static export disables Next's image optimiser, so the portrait ships as one
309 KB JPEG instead of per-breakpoint WebP/AVIF. Fine for a single image; if more photos get
added, pre-size them at build time or move to a host that runs Node.

### Vercel or any Node host

```bash
npm run build && npm start
```

`npm run build` stays a normal server build, so image optimisation keeps working there.

export const profile = {
  name: "Salim Maula Hudzaifah",
  firstName: "Salim",
  lastName: "Maula Hudzaifah",
  role: "Mobile Developer",
  specialty: "Flutter & Android",
  location: "Jakarta Timur, Indonesia",
  timezone: "Asia/Jakarta",
  timezoneLabel: "GMT+7",
  availability: "Open to freelance & full-time",
  email: "huzaifah956@gmail.com",
  phone: "+62 822 4629 9806",
  phoneHref: "+6282246299806",
  linkedin: "https://linkedin.com/in/salim-maula-hudzaifah-4889281b8",
  linkedinLabel: "linkedin.com/in/salim-maula-hudzaifah",
  github: "https://salim-maula.github.io",
  githubLabel: "salim-maula.github.io",
  tagline:
    "I build production mobile apps that ship — from architecture decisions through store review and post-release monitoring.",
  summary:
    "Mobile Developer with 4+ years of experience building and shipping production Flutter and native Android applications, with 8+ apps published to the Apple App Store and Google Play across omnichannel SaaS, logistics, retail, fintech, health, and HR.",
  summaryExtended:
    "I own the full release lifecycle end to end — architecture decisions, code signing, store submission, review compliance, and post-release monitoring. Today I lead technology and architecture choices for a small mobile team, with deep experience in Clean Architecture, GetX and BLoC state management, real-time communication with Socket.IO, and rugged PDA barcode scanner integration.",
} as const;

export const stats = [
  { value: "4+", label: "Years shipping mobile" },
  { value: "8+", label: "Apps on App Store & Play" },
  { value: "6", label: "Industries served" },
  { value: "2", label: "Platforms owned end to end" },
] as const;

export const principles = [
  {
    title: "Architecture first",
    body: "Clean Architecture with Repository, Use Case, and Either (dartz) patterns — so business logic survives the next redesign and a growing feature codebase stays navigable.",
  },
  {
    title: "Own the whole release",
    body: "Code signing, provisioning, TestFlight, store listings, review compliance, phased rollout, then Android Vitals and Crashlytics after launch. Shipping is part of the job, not a handoff.",
  },
  {
    title: "Built for real hardware",
    body: "Warehouse PDAs from Zebra, Honeywell and Urovo behave differently. A hybrid scanning layer with native Intent, DataWedge, keyboard-wedge fallback and camera scanning keeps one app working across all of them.",
  },
  {
    title: "Fix without waiting",
    body: "Shorebird OTA patching, dev/prod flavors, and a Dio interceptor layer with JWT auth, retry and connectivity guards — fixes reach users without a full store release.",
  },
] as const;

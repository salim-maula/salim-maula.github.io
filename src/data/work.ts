export type Link = { label: "App Store" | "Google Play" | "Website"; href: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  context: string;
  year?: string;
  platforms: string[];
  summary: string;
  highlights: string[];
  stack: string[];
  links: Link[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "k-omni",
    name: "K-Omni",
    kind: "Omnichannel Platform",
    context: "PT. Korean Link",
    platforms: ["iOS", "Android"],
    summary:
      "A Flutter app for a Meta BSP platform that unifies WhatsApp, Instagram, Facebook, Telegram and TikTok inboxes into one place, with real-time chat over Socket.IO.",
    highlights: [
      "Real-time multi-channel inbox backed by Socket.IO",
      "Full mobile CRM: deals pipeline, tickets, tasks, meetings and bookings with Google Calendar OAuth",
      "WhatsApp broadcast with message templates and contact import",
    ],
    stack: ["Flutter", "GetX", "Socket.IO", "Dio", "Firebase", "Google Calendar OAuth"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/id/app/k-omni/id6755171359" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.omnichanel.app",
      },
    ],
    featured: true,
  },
  {
    slug: "walt",
    name: "WALT",
    kind: "Warehouse Management System",
    context: "PT. Korean Link",
    platforms: ["Handheld PDA", "Android", "iOS"],
    summary:
      "An end-to-end WMS for handheld PDA and mobile covering receive, putaway, picking, loading, stock counting, transfer, adjustment and damage reporting.",
    highlights: [
      "Hybrid scanning layer supporting multi-brand PDA hardware — Zebra, Honeywell and Urovo",
      "Native Intent and DataWedge integration with keyboard-wedge fallback and camera scanning",
      "One codebase that behaves correctly across rugged devices and ordinary phones",
    ],
    stack: ["Flutter", "MethodChannel", "Zebra DataWedge", "Dio", "SQLite"],
    links: [{ label: "Website", href: "https://walt.kolink.net" }],
    featured: true,
  },
  {
    slug: "pms",
    name: "PMS",
    kind: "Product Management System",
    context: "PT. Korean Link",
    platforms: ["Handheld PDA", "Android"],
    summary:
      "A Flutter PDA application for retail stock counting, stock check, SKU pulling, and seven report types.",
    highlights: [
      "Draft → Submit → Signing → Complete workflow with digital signature",
      "Device-level fixture locking by UDID / IMEI",
      "Seven report types generated from field data",
    ],
    stack: ["Flutter", "GetX", "Dio", "SQLite", "Digital Signature"],
    links: [],
    featured: true,
  },
  {
    slug: "ams",
    name: "AMS",
    kind: "Attendance Management System",
    context: "PT. Korean Link",
    platforms: ["iOS", "Android"],
    summary:
      "A cross-platform attendance app with QR and GPS-based clock in/out, built for a workforce spread across three languages.",
    highlights: [
      "Map confirmation, PIN and biometric authentication, and device binding",
      "Session recovery for unfinished records and force-update handling",
      "EN / ZH / VI localization",
    ],
    stack: ["Flutter", "GetX", "Geolocator", "local_auth", "Google Maps", "Firebase"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/id/app/acs-mobile/id6480434483",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.acskolink.ams_mobile_app",
      },
    ],
    featured: true,
  },
  {
    slug: "quran-santri",
    name: "Quran Santri",
    kind: "Quran & Worship App",
    context: "Client project",
    platforms: ["iOS", "Android"],
    summary:
      "A production Quran and worship app with a multi-mode mushaf — per verse, Madinah page, Indopak and tajweed — plus recitation audio, bookmarks and verse sharing.",
    highlights: [
      "Location-based prayer times with local notifications, background adhan alarms (WorkManager / AndroidAlarmManager) and sensor-based qibla direction",
      "Large-scale local mushaf data in a SQLite asset database with per-page fonts, offline caching, and UI performance tuning for low-end devices",
      "Resolved Android Vitals ANR issues by profiling startup and Quran data parsing bottlenecks",
    ],
    stack: [
      "Flutter",
      "GetX",
      "Dio",
      "Firebase Auth & FCM",
      "Hive",
      "SQLite",
      "just_audio",
      "Geolocator",
      "WorkManager",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/id/app/quran-santri/id6759005162",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.quransantri.app",
      },
    ],
    featured: true,
  },
  {
    slug: "nagih",
    name: "Nagih",
    kind: "Food Recommendation App",
    context: "Client project",
    platforms: ["iOS", "Android"],
    summary:
      "A food recommendation app that helps people decide what to eat through personalized taste profiles, restaurant suggestions and cook-at-home recipes.",
    highlights: [
      "Taste palette onboarding feeding location-based personalized recommendations",
      "Dual-mode recommendations — restaurants and recipes — with swipe interaction and an AI chat assistant",
      "App Store compliance: guest browsing with feature gating, privacy policy, and data disclosure",
    ],
    stack: [
      "Flutter",
      "GetX",
      "Dio",
      "dartz",
      "Firebase Auth",
      "Google & Apple Sign-In",
      "Google Maps",
      "Rive",
    ],
    links: [
      { label: "App Store", href: "https://apps.apple.com/id/app/nagih/id6766515532" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.tech.nagih",
      },
    ],
    featured: true,
  },
  {
    slug: "mana-vue",
    name: "Mana Vue",
    kind: "Behavioral Finance Education",
    context: "Client project",
    platforms: ["iOS", "Android"],
    summary:
      "A behavioral-finance education app built end to end, from Figma design through release on both stores.",
    highlights: [
      "Interactive dashboard with balance summary, spending analytics, weekly income charts and a spending pattern heatmap using fl_chart",
      "A 16-question behavioral assessment mapping biases — loss framing, gain framing, commitment, social proof — into scores and insights",
      "Savings goals and A/B tested financial nudges, plus Sign in with Apple and account deletion compliance",
    ],
    stack: [
      "Flutter",
      "GetX",
      "Dio",
      "Firebase Auth & FCM",
      "fl_chart",
      "flutter_screenutil",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/id/app/mana-vue/id6779851855",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.mana.vue",
      },
    ],
    featured: true,
  },
  {
    slug: "medical-checker",
    name: "Medical Checker",
    kind: "Health Screening App",
    context: "Client project",
    platforms: ["iOS", "Android"],
    summary:
      "A health screening app with a multi-step symptom checker returning backend-driven analysis results.",
    highlights: [
      "Symptom, duration and severity flow feeding a backend analysis engine",
      "Medical catalogue for diseases, medicines, doctors and hospitals with search, category filters and shimmer loading states",
      "AI chat feature over webhook and API for interactive health responses",
    ],
    stack: ["Flutter", "GetX", "Dio", "dartz", "Firebase Auth", "REST API"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.stepkom.meds",
      },
    ],
    featured: false,
  },
  {
    slug: "komni-site",
    name: "Komni Marketing Site",
    kind: "Marketing Website",
    context: "PT. Korean Link",
    platforms: ["Web"],
    summary:
      "A Vue 3 and Vite marketing site with GSAP ScrollTrigger animation and an interactive inbox demo mirroring the real product dashboard.",
    highlights: [
      "Live pricing and blog content wired directly to the product API",
      "Interactive inbox demo that mirrors the real dashboard experience",
    ],
    stack: ["Vue 3", "Vite", "GSAP ScrollTrigger", "Bootstrap 5"],
    links: [{ label: "Website", href: "https://komni.id" }],
    featured: false,
  },
  {
    slug: "vending-machine",
    name: "Vending Machine Desktop",
    kind: "Flutter Desktop App",
    context: "Komib.org",
    year: "Jun 2024 — Jul 2024",
    platforms: ["Windows Desktop"],
    summary:
      "A desktop application to operate a vending machine, distributed as a Windows executable.",
    highlights: [
      "IoT hardware integration with connection handling and error recovery",
      "Third-party payment gateway integration",
    ],
    stack: ["Flutter Desktop", "IoT Integration", "Payment Gateway API"],
    links: [],
    featured: false,
  },
  {
    slug: "corporate-sites",
    name: "Corporate Websites",
    kind: "WordPress & Elementor",
    context: "PT. Korean Link",
    platforms: ["Web"],
    summary:
      "Built and maintained corporate sites for Emran Kargo, WALT and GSABIS.",
    highlights: ["emrankargo.com", "walt.kolink.net", "gsabis.kolink.net"],
    stack: ["WordPress", "Elementor"],
    links: [{ label: "Website", href: "https://emrankargo.com" }],
    featured: false,
  },
];

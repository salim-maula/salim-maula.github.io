export type Experience = {
  company: string;
  companyNote?: string;
  role: string;
  period: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "PT. Korean Link",
    companyNote: "Kolink Network Solution",
    role: "Mobile Developer",
    period: "Feb 2024 — Present",
    start: "2024",
    end: "Present",
    location: "Jakarta, Indonesia",
    summary:
      "Technical decision-maker for a two-person mobile team: chose the stack, defined the architecture standards used across every product, and reviewed implementation before release.",
    points: [
      "Delivered 5 production mobile applications and 4 company websites across omnichannel communication, warehouse operations, retail stock management, and employee attendance.",
      "Engineered reusable foundations across products: a Dio interceptor network layer with JWT auth, retry and connectivity guards, dartz Either error handling, dev/prod flavors with environment config, and Shorebird OTA patching to ship fixes without full store releases.",
      "Owned the end-to-end release process for iOS and Android across all products: code signing and provisioning, App Store Connect and Play Console submission, TestFlight distribution, store listing assets, and post-release monitoring via Android Vitals and Crashlytics.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "GetX",
      "BLoC / Cubit",
      "Dio",
      "Socket.IO",
      "Firebase",
      "Shorebird",
      "Zebra DataWedge",
      "MethodChannel",
      "Vue 3",
      "WordPress",
    ],
  },
  {
    company: "Teepee.App",
    companyNote: "Teepee Pty Ltd, Australia",
    role: "Flutter Developer · Part-Time, Remote",
    period: "Oct 2024 — May 2025",
    start: "2024",
    end: "2025",
    location: "Remote",
    summary:
      "Contributed to a cross-platform marketing collaboration platform connecting Business, Creator, and Ghost roles — covering offers, collaboration, chat, and paid subscriptions.",
    points: [
      "Built and maintained the multi-role registration module (Business, Creator, Ghost, Business Staff) with OTP verification, social login via Google, Facebook and Apple, and Instagram verification.",
      "Implemented modular Clean Architecture across the feature codebase using Repository, Use Case, and Either (dartz) patterns to separate business logic from the data layer.",
      "Developed a custom network layer with Dio interceptors, automatic token refresh, centralized error handling, and timezone and currency headers.",
      "Delivered monetization through in-app purchase and Pro/Enterprise subscriptions integrated with App Store and Google Play Billing.",
      "Integrated Firebase push notifications, auth, remote config and Crashlytics, Google Maps URL validation, Sentry error monitoring, and Shorebird over-the-air updates.",
    ],
    stack: [
      "Flutter",
      "Clean Architecture",
      "GetX",
      "GetIt",
      "Dio",
      "Firebase",
      "Google Maps",
      "In-App Purchase",
      "Sentry",
      "Shorebird",
      "Fastlane",
    ],
  },
  {
    company: "PT. Anadana Kode Nontunai",
    role: "Mobile Developer",
    period: "Jun 2023 — Sep 2023",
    start: "2023",
    end: "2023",
    location: "Jakarta, Indonesia",
    summary:
      "Built an e-money application with dual customer and merchant roles for both iOS and Android.",
    points: [
      "Implemented end-to-end API encryption to meet financial data security requirements.",
    ],
    stack: ["Flutter", "GetX", "Dio", "Sqflite"],
  },
  {
    company: "PT. Nurul Fikri Cipta Inovasi",
    role: "Mobile Development Mentor",
    period: "Aug 2022 — Feb 2023",
    start: "2022",
    end: "2023",
    location: "Jakarta, Indonesia",
    summary:
      "Mentored 7th and 8th semester university students in mobile application development and guided their final-year projects from architecture design to deployment.",
    points: [
      "Delivered material on Flutter UI, Dart fundamentals, state management with Provider, GetX and BLoC, and networking with Dio and OkHttp.",
    ],
    stack: ["Flutter", "Dart", "Provider", "GetX", "BLoC", "OkHttp"],
  },
  {
    company: "PT. Besda Jaya Pratama",
    role: "Android Developer",
    period: "Jul 2022 — Aug 2022",
    start: "2022",
    end: "2022",
    location: "Jakarta, Indonesia",
    summary:
      "Built a native Android attendance application using geolocation and photo capture for check-in and check-out.",
    points: [],
    stack: ["Kotlin", "Anko", "Hawk Storage", "OkHttp", "Google Maps API"],
  },
  {
    company: "Islamic Development Network",
    role: "Android Instructor",
    period: "Aug 2021 — Jul 2023",
    start: "2021",
    end: "2023",
    location: "Jakarta, Indonesia",
    summary:
      "Taught senior high school students the fundamentals of Android development with Kotlin.",
    points: [
      "Covered app components, interface navigation, architecture and design patterns, local storage, and networking.",
    ],
    stack: ["Kotlin", "Android SDK"],
  },
];

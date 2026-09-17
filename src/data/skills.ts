export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Dart", "Kotlin", "JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    title: "Mobile Development",
    items: [
      "Flutter",
      "Native Android",
      "iOS & Android",
      "Flutter Desktop",
      "Shorebird OTA",
      "Build Flavors",
      "App Store & Play Deployment",
    ],
  },
  {
    title: "Architecture & State",
    items: [
      "Clean Architecture",
      "Feature-First Architecture",
      "MVVM",
      "MVC",
      "GetX",
      "BLoC / Cubit",
      "Provider",
      "Coroutines",
      "RxJava",
    ],
  },
  {
    title: "Libraries & Tools",
    items: [
      "Dio",
      "dartz",
      "Freezed",
      "GetIt",
      "GetStorage",
      "Hive",
      "SQLite",
      "Sqflite",
      "fl_chart",
      "flutter_screenutil",
      "just_audio",
      "Rive",
      "local_auth",
      "Geolocator",
      "mobile_scanner",
      "WorkManager",
      "Lottie",
      "Shimmer",
      "Retrofit",
      "Dagger2",
      "Koin",
      "Glide",
      "Espresso",
      "Git",
    ],
  },
  {
    title: "Integration",
    items: [
      "REST API",
      "Socket.IO",
      "API Encryption",
      "JWT Authentication",
      "Firebase Cloud Messaging",
      "In-App Purchase",
      "Payment Gateway",
      "IoT Devices",
      "Zebra DataWedge",
      "PDA Scanners (Zebra, Honeywell, Urovo)",
      "MethodChannel",
      "Google Maps",
      "Google Calendar OAuth",
      "Deep Linking",
    ],
  },
  {
    title: "Release & Store Management",
    items: [
      "App Store Connect",
      "Google Play Console",
      "TestFlight",
      "Code Signing & Provisioning",
      "App Review Compliance",
      "Phased Rollout",
      "Android Vitals",
      "Fastlane",
      "Shorebird OTA",
    ],
  },
  {
    title: "Web Development",
    items: ["Vue 3", "Vite", "Bootstrap 5", "GSAP / ScrollTrigger", "WordPress", "Elementor"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Firebase Auth",
      "Firestore",
      "Cloud Messaging",
      "Remote Config",
      "Crashlytics",
      "Google Cloud Platform",
      "AWS",
      "CI/CD",
      "Fastlane",
      "Sentry",
    ],
  },
  {
    title: "Design",
    items: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Responsive Web Design"],
  },
];

export const education = [
  {
    school: "STIKOM CKI",
    degree: "Bachelor's Degree in Software Engineering",
    period: "2020 — 2024",
    location: "Jakarta, Indonesia",
  },
  {
    school: "MATRI",
    degree: "Senior High School, Science Major",
    period: "2016 — 2018",
    location: "Malaysia",
  },
];

export const certifications = [
  { name: "Flutter Mobile App Bootcamp", issuer: "ID Networkers", year: "2022" },
  { name: "Android Mobile App Bootcamp", issuer: "IMA Studio", year: "2021" },
  {
    name: "Complete Learning Path Android until Class Expert",
    issuer: "Dicoding",
    year: "2022",
  },
  { name: "UI/UX and Programming Awardee", issuer: "Qara'a Digital Academy", year: "2022" },
  { name: "GDSC Core Team Member", issuer: "Google Developer Student Clubs", year: "2021" },
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", year: "2021" },
  { name: "Frontend Programming Training x Progate", issuer: "BAKTI Kominfo", year: "2021" },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
  { name: "Malay", level: "Conversational" },
];

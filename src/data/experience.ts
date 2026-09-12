export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  org: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "carina-softlabs",
    period: "2025 — PRESENT",
    role: "Unity Developer",
    org: "Carina Softlabs Inc.",
    description:
      "Professional game-development work across Unity projects, including gameplay implementation, UI integration, debugging, mobile functionality, third-party SDKs and production fixes.",
  },
  {
    id: "brototype",
    period: "2023 — PRESENT",
    role: "Unity Game Development",
    org: "Brototype / BroCamp",
    description:
      "Built a portfolio of 2D and 3D games while developing practical skills in C#, Unity architecture, gameplay programming, multiplayer and optimization.",
  },
  {
    id: "st-aloysius",
    period: "2019 — 2022",
    role: "B.Com",
    org: "St. Aloysius College, Thrissur",
    description:
      "Commerce graduate who transitioned into software and game development through focused, hands-on learning.",
  },
];

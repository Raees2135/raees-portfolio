export type ExperienceType = "job" | "training" | "education";
export type ExperienceStatus = "current" | "completed";

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  org: string;
  description: string;
  type: ExperienceType;
  status: ExperienceStatus;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "carina-softlabs",
    period: "2025 — 2026",
    role: "Unity/Roblox Game Developer",
    org: "Carina Softlabs Inc.",
    description:
      "Professional game-development work across Unity projects, including gameplay implementation, UI integration, debugging, mobile functionality, third-party SDKs and production fixes.",
    type: "job",
    status: "completed",
    tags: ["Unity", "Roblox", "C#", "Photon"],
  },
  {
    id: "peru-aryilla-job",
    period: "2024 — 2025",
    role: "Python Developer",
    org: "Peru Aryilla",
    description:
      "Backend and scripting work in Python, building internal tools and automations and contributing to production features alongside an experienced engineering team.",
    type: "job",
    status: "completed",
    tags: ["Python", "Automation"],
  },
];

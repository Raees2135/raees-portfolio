export type SkillIconKey = "gamepad" | "code" | "sparkles" | "wrench";

export interface SkillGroup {
  title: string;
  icon: SkillIconKey;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Game Development",
    icon: "gamepad",
    items: [
      "Unity 2D / 3D",
      "Gameplay Programming",
      "Physics",
      "Character Controllers",
      "AI / NavMesh",
      "UI",
      "Animation",
      "Cinemachine",
      "Timeline",
    ],
  },
  {
    title: "Programming",
    icon: "code",
    items: [
      "C#",
      "C / C++",
      "Java",
      "OOP",
      "Data Structures & Algorithms",
      "Design Patterns",
    ],
  },
  {
    title: "Advanced Unity",
    icon: "sparkles",
    items: [
      "Photon PUN",
      "AR / VR",
      "Shader Graph",
      "URP / HDRP",
      "ScriptableObjects",
      "Unity Events",
      "Particles",
      "Optimization",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "wrench",
    items: [
      "Git",
      "GitHub",
      "Visual Studio",
      "Rider",
      "Blender",
      "Unity Profiler",
      "Mobile SDKs",
      "Ad integration",
    ],
  },
];

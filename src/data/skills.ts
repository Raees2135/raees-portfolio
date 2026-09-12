export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Game Development",
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

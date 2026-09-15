export type ProjectIconKey =
  | "swords"
  | "vault"
  | "rocket"
  | "crosshair"
  | "car"
  | "squirrel"
  | "basketball"
  | "vr";

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: ProjectIconKey;
  href?: string;
  featured?: boolean;
  variant?: "default" | "professional";
}

export const projects: Project[] = [
  {
    id: "gods-gang",
    number: "01",
    title: "Gods Gang",
    description:
      "2.5D action-platformer with complex character abilities and physics-based projectiles, powered by scalable state-machine AI for enemies and multi-phase boss fights.",
    tags: ["Unity", "C#", "2.5D", "AI"],
    icon: "swords",
    href: "https://play.google.com/store/apps/details?id=com.techymaugames.godsgang&hl=en_IN",
    featured: true,
    variant: "professional",
  },
  {
    id: "shogun-heist",
    number: "02",
    title: "Shogun Heist",
    description:
      "Multiplayer Roblox game in the 'Steal a Brainrot' genre, with systems for collecting, stealing and managing in-game items alongside UI and progression features.",
    tags: ["Roblox", "Luau", "Multiplayer"],
    icon: "vault",
    href: "https://www.roblox.com/share?code=b183a05683590a448b59b93c148ac9f0&type=ExperienceDetails&stamp=1785592583303",
    variant: "professional",
  },
  {
    id: "red-light-space-crew",
    number: "03",
    title: "Red Light Space Crew",
    description:
      "3D multiplayer social-deduction game in the style of Among Us, with role-based mechanics, player interactions and game progression.",
    tags: ["Roblox", "Luau", "Social Deduction"],
    icon: "rocket",
    href: "https://www.roblox.com/share?code=f0d22b7f50d4a34a99dca5282d173914&type=ExperienceDetails&stamp=1785592748063",
    variant: "professional",
  },
  {
    id: "battle-arena",
    number: "04",
    title: "Battle Arena – 3D Multiplayer Shooting Game",
    description:
      "4v4 multiplayer shooter built with Photon networking, featuring synchronized gameplay, UI, animations and networked player interactions.",
    tags: ["Unity", "C#", "Photon", "Multiplayer"],
    icon: "crosshair",
    href: "https://raeesgames.itch.io/battle-arena-3d-multiplayer",
  },
  {
    id: "park-the-car",
    number: "05",
    title: "Park The Car – 3D Car Parking Simulator",
    description:
      "3D car parking simulator with realistic driving mechanics, AI pedestrians and an optimized environment for a smooth driving and parking experience.",
    tags: ["Unity", "C#", "3D"],
    icon: "car",
    href: "https://raeesgames.itch.io/park-the-car",
  },
  {
    id: "foxy",
    number: "06",
    title: "FOXY – 2D Platform Runner",
    description:
      "2D platform runner with AI enemies, collectibles, animations and event-driven gameplay systems built around engaging progression mechanics.",
    tags: ["Unity", "C#", "2D"],
    icon: "squirrel",
    href: "https://github.com/Raees2135/FOXY",
  },
  {
    id: "ar-basket-ball",
    number: "07",
    title: "AR Basket Ball",
    description:
      "AR basketball game with realistic physics and intuitive player interactions for an immersive basketball experience.",
    tags: ["Unity", "C#", "AR Foundation"],
    icon: "basketball",
    href: "https://github.com/Raees2135/AR-Basket-Ball",
  },
  {
    id: "vr-environment",
    number: "08",
    title: "VR Environment",
    description:
      "Immersive virtual reality environment focused on user exploration, with interactive elements and VR-based player interactions to enhance immersion.",
    tags: ["Unity", "VR"],
    icon: "vr",
    href: "https://github.com/Raees2135/VR-Environment",
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "youtube";
}

export interface Profile {
  name: string;
  logoText: string;
  title: string;
  siteTitle: string;
  metaDescription: string;
  eyebrow: string;
  ctaLabel: string;
  resumeUrl: string;
  navLinks: NavLink[];
  email: string;
  socials: SocialLink[];
  statement: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    body: string;
  };
  contact: {
    headingLine1: string;
    headingLine2: string;
    body: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const profile: Profile = {
  name: "Mohammed Raees",
  logoText: "MOHAMMED RAEES",
  title: "Unity Game Developer",
  siteTitle: "Mohammed Raees | Unity Game Developer",
  metaDescription:
    "Mohammed Raees — Unity Game Developer specializing in C#, 2D/3D games, multiplayer, mobile development and gameplay systems.",
  eyebrow: "UNITY GAME DEVELOPER",
  ctaLabel: "Let's Talk",
  resumeUrl: "/Mohammed Raees_Resume.pdf",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  email: "raees2135@gmail.com",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Raees2135",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-raees-5b611a126/",
      icon: "linkedin",
    },
    // TODO: replace with Mohammed's real YouTube channel URL before publishing.
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      icon: "youtube",
    },
  ],
  statement: {
    eyebrow: "CURRENTLY BUILDING",
    heading: "Learning. Building.",
    headingAccent: "Shipping.",
    body: "My goal is to keep growing as a game programmer and contribute to games that players remember.",
  },
  contact: {
    headingLine1: "Have a game",
    headingLine2: "in mind?",
    body: "I'm open to game-development opportunities, collaborations and interesting projects.",
  },
  footer: {
    copyright: "© 2026 Mohammed Raees",
    tagline: "Built with Unity mindset.",
  },
};

export interface HeroStat {
  label: string;
  value: string;
}

export interface CodeLine {
  text: string;
  variant: "default" | "muted" | "accent";
}

export const heroCopy = {
  headingLine1: "I build games",
  headingLine2Prefix: "that ",
  headingAccent1: "feel",
  headingAccent2: "alive.",
  body: "I'm Mohammed Raees, a Unity game developer focused on gameplay programming, immersive 2D/3D experiences, multiplayer systems and mobile games.",
  primaryCta: "Explore My Work",
  secondaryCta: "Download Resume",
  floatingTag: "C# • UNITY • GAMEPLAY",
  codeSnippet: [
    { text: "void BuildGame()", variant: "default" },
    { text: "{", variant: "muted" },
    { text: "  Create();", variant: "accent" },
    { text: "  Iterate();", variant: "accent" },
    { text: "  Ship();", variant: "accent" },
    { text: "}", variant: "muted" },
  ] satisfies CodeLine[],
};

export const heroStats: HeroStat[] = [
  { label: "Unity", value: "Game Development" },
  { label: "C#", value: "Gameplay Programming" },
  { label: "2D/3D", value: "Interactive Experiences" },
];

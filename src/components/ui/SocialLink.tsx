import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

import type { SocialLink as SocialLinkData } from "../../data/profile";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "./BrandIcons";
import { revealChildVariants } from "../../lib/motion";

const iconMap: Record<SocialLinkData["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

interface SocialLinkProps {
  social: SocialLinkData;
}

export function SocialLink({ social }: SocialLinkProps) {
  const Icon = iconMap[social.icon];

  return (
    <motion.a
      variants={revealChildVariants}
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-fg/70 transition-colors hover:border-accent/60 hover:text-accent"
    >
      <Icon className="size-4" />
      {social.label}
    </motion.a>
  );
}

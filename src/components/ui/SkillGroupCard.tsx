import { motion } from "framer-motion";
import { Code2, Gamepad2, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { SkillGroup, SkillIconKey } from "../../data/skills";
import { revealChildVariants } from "../../lib/motion";

const iconMap: Record<SkillIconKey, LucideIcon> = {
  gamepad: Gamepad2,
  code: Code2,
  sparkles: Sparkles,
  wrench: Wrench,
};

interface SkillGroupCardProps {
  group: SkillGroup;
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  const Icon = iconMap[group.icon];

  return (
    <motion.div variants={revealChildVariants}>
      <div className="flex items-center gap-3">
        <Icon className="size-5 text-accent" />
        <h3 className="font-display text-lg font-semibold text-fg">
          {group.title}
        </h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border px-3 py-1.5 text-xs text-fg/60"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

import { motion } from "framer-motion";

import type { SkillGroup } from "../../data/skills";
import { revealChildVariants } from "../../lib/motion";

interface SkillGroupCardProps {
  group: SkillGroup;
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <motion.div
      variants={revealChildVariants}
      className="bg-surface p-6 md:p-8"
    >
      <h3 className="font-display text-lg font-semibold text-fg">
        {group.title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
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

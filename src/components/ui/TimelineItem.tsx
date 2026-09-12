import { motion } from "framer-motion";

import type { ExperienceItem } from "../../data/experience";
import { revealChildVariants } from "../../lib/motion";

interface TimelineItemProps {
  item: ExperienceItem;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <motion.article
      variants={revealChildVariants}
      className="grid gap-4 border-b border-border py-8 md:grid-cols-[220px_1fr] last:border-b-0"
    >
      <p className="font-display text-sm font-medium tracking-wide text-accent">
        {item.period}
      </p>
      <div>
        <h3 className="font-display text-xl font-semibold text-fg">
          {item.role} <span className="text-fg/40">@</span> {item.org}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-fg/60">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

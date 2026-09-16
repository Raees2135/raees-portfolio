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
      className="relative grid gap-4 py-8 pl-10 md:grid-cols-[220px_1fr] md:pl-12"
    >
      <span
        className="absolute top-11 -left-1.25 size-2.5 rounded-full bg-accent"
        aria-hidden
      />
      <p className="font-display text-sm font-medium tracking-wide text-fg/50">
        {item.period}
      </p>
      <div>
        <h3 className="font-display text-xl font-semibold text-fg">
          {item.role}{" "}
          <span className="text-base font-medium text-fg/60">
            @ {item.org}
          </span>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-fg/60">
          {item.description}
        </p>
        <p className="mt-3 text-xs text-fg/40">{item.tags.join(" · ")}</p>
      </div>
    </motion.article>
  );
}

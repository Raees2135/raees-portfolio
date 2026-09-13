import { motion } from "framer-motion";

import { experience } from "../../data/experience";
import { SectionLabel } from "../ui/SectionLabel";
import { TimelineItem } from "../ui/TimelineItem";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto flex min-h-[calc(100vh-78px)] max-w-375 flex-col justify-center border-t border-border px-6 py-24 md:px-10 md:py-32"
    >
      <SectionLabel label="02 / EXPERIENCE" />
      <h2 className="mt-6 text-[clamp(2.4rem,5.5vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.02em] font-display text-fg">
        From classroom to
        <br />
        <span className="text-accent">production.</span>
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="mt-14 border-l border-border"
      >
        {experience.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}

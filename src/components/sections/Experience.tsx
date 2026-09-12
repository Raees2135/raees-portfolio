import { motion } from "framer-motion";

import { experience } from "../../data/experience";
import { SectionLabel } from "../ui/SectionLabel";
import { TimelineItem } from "../ui/TimelineItem";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-375 px-6 py-24 md:px-10 md:py-32"
    >
      <SectionLabel label="02 / EXPERIENCE" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="mt-10"
      >
        {experience.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}

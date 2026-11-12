import { motion } from "framer-motion";

import { skillGroups } from "../../data/skills";
import { SectionLabel } from "../ui/SectionLabel";
import { SkillGroupCard } from "../ui/SkillGroupCard";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-divider mx-auto flex min-h-[min(100vh-78px,51.25rem)] max-w-375 flex-col justify-center px-6 py-24 md:px-10 md:py-32"
    >
      <SectionLabel label="05 / TOOLKIT" />
      <h2 className="mt-6 text-[clamp(2.4rem,5.5vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.02em] font-display text-fg">
        My technical
        <br />
        <span className="text-accent">toolkit.</span>
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.title} group={group} />
        ))}
      </motion.div>
    </section>
  );
}

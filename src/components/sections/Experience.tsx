import { motion } from "framer-motion";

import { experience } from "../../data/experience";
import { SectionLabel } from "../ui/SectionLabel";
import { revealChildVariants } from "../../lib/motion";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-divider mx-auto flex min-h-[min(100vh-78px,51.25rem)] max-w-375 flex-col justify-center px-6 py-24 md:px-10 md:py-32"
    >
      <SectionLabel label="02 / EXPERIENCE" />

      <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-[clamp(2.4rem,5.5vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.02em] font-display text-fg">
          Where I've
          <br />
          <span className="text-accent">worked.</span>
        </h2>
        <p className="max-w-75 text-sm text-fg/60">
          Roles where I've shipped real, production-ready features.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="mt-14 divide-y divide-border border-t border-border"
      >
        {experience.map((item) => (
          <motion.article
            key={item.id}
            variants={revealChildVariants}
            className="grid gap-3 py-10 md:grid-cols-[140px_1fr] md:gap-10"
          >
            <p className="font-display text-sm font-medium tracking-wide text-fg/40">
              {item.period}
            </p>
            <div>
              <h3 className="font-display text-2xl font-semibold text-fg md:text-3xl">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {item.org}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg/60">
                {item.description}
              </p>
              <p className="mt-4 text-xs text-fg/40">
                {item.tags.join(" · ")}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

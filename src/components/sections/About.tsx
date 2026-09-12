import { motion } from "framer-motion";

import { aboutCopy, aboutFacts } from "../../data/about";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { revealChildVariants } from "../../lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-375 px-6 py-24 md:px-10 md:py-32"
    >
      <RevealOnScroll className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionLabel label="01 / ABOUT" />
          <h2 className="mt-6 text-[clamp(2.4rem,5.5vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.02em] font-display text-fg">
            {aboutCopy.headingLine1}
            <br />
            <span className="text-accent">{aboutCopy.headingAccent}</span>
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-fg/80">
            {aboutCopy.lead}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-fg/60">
            {aboutCopy.body}
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8"
          >
            {aboutFacts.map((fact) => (
              <motion.div key={fact.number} variants={revealChildVariants}>
                <p className="font-display text-sm text-accent">
                  {fact.number}
                </p>
                <p className="mt-1 text-sm text-fg/70">{fact.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

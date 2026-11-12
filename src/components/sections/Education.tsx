import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { education } from "../../data/education";
import { SectionLabel } from "../ui/SectionLabel";
import { TimelineItem } from "../ui/TimelineItem";

export function Education() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="education"
      className="section-divider mx-auto flex min-h-[min(100vh-78px,51.25rem)] max-w-375 flex-col justify-center px-6 py-24 md:px-10 md:py-32"
    >
      <SectionLabel label="03 / EDUCATION" />
      <h2 className="mt-6 text-[clamp(2.4rem,5.5vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.02em] font-display text-fg">
        Where I
        <br />
        <span className="text-accent">learned.</span>
      </h2>

      <motion.div
        ref={trackRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="relative mt-14 border-l border-border"
      >
        <motion.span
          style={{ scaleY: lineScale }}
          className="absolute top-0 -left-px h-full w-px origin-top bg-accent"
          aria-hidden
        />

        {education.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}

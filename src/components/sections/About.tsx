import { motion } from "framer-motion";

import { aboutCopy, aboutFacts } from "../../data/about";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { revealChildVariants } from "../../lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="section-divider relative mx-auto flex flex-col lg:flex-row min-h-[min(100vh-78px,51.25rem)] max-w-375 items-center overflow-hidden px-6 py-24 md:px-10 md:py-32 gap-20 lg:gap-0"
    >
      <div
        className="pointer-events-none absolute top-1/4 right-0 size-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 w-full lg:w-[75%] xl:w-[70%]">
        <RevealOnScroll className="grid w-full gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <SectionLabel label="01 / ABOUT" />
            <h2 className="mt-6 text-[clamp(2.4rem,5.5vw,4.7rem)] font-bold leading-[0.98] tracking-[-0.02em] font-display text-fg pr-4">
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
      </div>

      {/* Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none relative mt-10 flex w-full justify-center lg:absolute lg:-right-12 lg:top-1/2 lg:mt-0 lg:block lg:w-auto lg:-translate-y-1/2"
      >
        <div className="relative flex items-center justify-center">
          {/* Neon Aura */}
          <div className="absolute left-1/2 top-[55%] size-[18rem] -translate-x-[60%] -translate-y-1/2 rounded-full bg-accent/40 blur-[70px] mix-blend-screen" />

          {/* Two Diagonal Lines */}
          <div className="absolute left-1/2 top-1/2 flex h-[30rem] -translate-x-1/2 -translate-y-1/2 rotate-[45deg] gap-6 mix-blend-screen">
            <div className="h-full w-[5rem] bg-gradient-to-b from-transparent from-10% via-accent/40 via-50% to-transparent to-90%" />
            <div className="h-full w-[5rem] bg-gradient-to-b from-transparent from-10% via-accent/40 via-50% to-transparent to-90%" />
          </div>

          {/* Neon Circle */}
          <div className="absolute top-[50%] left-1/2 size-[20rem] -translate-x-[60%] -translate-y-1/2 rounded-full border-[3px] border-accent/80 shadow-[0_0_30px_rgba(184,255,69,0.3)] mix-blend-screen" />

          <img
            src="/profile.png"
            alt="Mohammed Raees"
            className="relative z-10 max-h-[55vh] xl:max-h-[60vh] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />

        </div>
      </motion.div>
    </section>
  );
}

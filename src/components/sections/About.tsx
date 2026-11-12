import { motion } from "framer-motion";

import { aboutCopy, aboutFacts } from "../../data/about";
import { SectionLabel } from "../ui/SectionLabel";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { revealChildVariants } from "../../lib/motion";

export function About() {
  return (
    <section
      id="about"
      className="section-divider relative mx-auto grid min-h-[min(100vh-78px,51.25rem)] max-w-375 items-center gap-12 overflow-hidden px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)] lg:gap-8"
    >
      <div
        className="pointer-events-none absolute top-1/4 right-0 size-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 min-w-0">
        <SectionLabel label="01 / ABOUT" />
        <RevealOnScroll className="mt-6 grid w-full items-start gap-8 md:grid-cols-2">
          <div className="min-w-0">
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] font-display text-fg">
              <span className="block whitespace-nowrap">{aboutCopy.headingLine1}</span>{" "}
              <span className="block whitespace-nowrap">
                {aboutCopy.headingLine2Prefix}{" "}
                <span className="text-accent">{aboutCopy.headingAccentLine2}</span>
              </span>{" "}
              <span className="block text-accent">{aboutCopy.headingAccentLine3}</span>
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
        className="pointer-events-none relative mx-auto w-full max-w-88"
      >
        <div className="relative isolate aspect-[4/5] w-full">
          <svg
            aria-hidden="true"
            viewBox="0 0 360 450"
            fill="none"
            className="absolute inset-0 size-full overflow-visible"
          >
            {/* Fade the entire wireframe before the portrait's bottom fade. */}
            <g mask="url(#portrait-wireframe-fade)" stroke="#b8ff45" strokeWidth="1">
              <path d="M79 92 297 44 322 307M110 114 324 68 347 322 83 386Z" strokeOpacity=".35" />
              <g strokeOpacity=".12">
                <path d="M106 157 328 109M101 202 332 154M96 248 336 199M91 294 340 245M87 340 344 289" />
                <path d="M153 105 136 373M196 96 189 360M239 86 242 347M282 77 295 335" />
              </g>
              <path d="M297 44 324 68M79 92 110 114" strokeOpacity=".3" />
              <path d="M297 44 278 48M324 68 326 91" strokeWidth="2" strokeOpacity=".85" />
              <circle cx="297" cy="44" r="2.5" fill="#b8ff45" stroke="none" />
            </g>
            <path d="M303 23H331V51" stroke="#f4f4f0" strokeOpacity=".25" />
            <defs>
              <linearGradient id="portrait-wireframe-opacity" x1="0" y1="100" x2="0" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="black" />
              </linearGradient>
              <mask id="portrait-wireframe-fade" maskUnits="userSpaceOnUse" x="0" y="0" width="360" height="450">
                <rect width="360" height="450" fill="url(#portrait-wireframe-opacity)" />
              </mask>
            </defs>
          </svg>
          <div
            className="absolute -inset-x-4 inset-y-0 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
            }}
          >
            <img
              src="/profile.png"
              alt="Mohammed Raees"
              className="absolute top-0 left-1/2 h-auto w-[140%] max-w-none -translate-x-1/2 grayscale contrast-[1.08]"
            />
          </div>
          <div aria-hidden className="absolute right-0 bottom-1 flex items-center gap-3 font-display text-[10px] tracking-[0.2em] text-fg/50 uppercase">
            <span className="h-px w-8 bg-accent" />
            Behind the games
          </div>
        </div>
      </motion.div>
    </section>
  );
}

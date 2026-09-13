import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { profile } from "../../data/profile";
import { heroCopy, heroStats } from "../../data/hero";
import { Button } from "../ui/Button";

const Globe = lazy(() =>
  import("../globe/Globe").then((module) => ({ default: module.Globe })),
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-78px)] max-w-375 items-center gap-16 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-10 md:py-0"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold tracking-[0.25em] text-accent uppercase"
        >
          {profile.eyebrow}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mt-6 text-[clamp(2.75rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.03em] font-display text-fg"
        >
          {heroCopy.headingLine1}
          <br />
          {heroCopy.headingLine2Prefix}
          <span className="text-accent italic">{heroCopy.headingAccent1}</span><br />
          <span className="text-accent italic">{heroCopy.headingAccent2}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-lg text-base leading-relaxed text-fg/60 md:text-lg"
        >
          {heroCopy.body}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects" icon={<ArrowDown className="size-4" />}>
            {heroCopy.primaryCta}
          </Button>
          <Button href={profile.resumeUrl} download variant="ghost">
            {heroCopy.secondaryCta}
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-14 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-lg font-semibold text-fg">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-fg/50">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="relative flex min-h-[380px] items-center justify-center md:min-h-[480px]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 [transform:perspective(500px)_rotateX(62deg)] bg-floor-grid opacity-30"
            aria-hidden
          />
          <div
            className="absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
            aria-hidden
          />
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
        </div>

        <div className="relative z-10 w-fit max-w-md rounded-2xl border border-border/40 bg-surface/40 p-6 font-mono text-sm leading-relaxed shadow-2xl backdrop-blur-lg">
          <p className="mb-2 text-xs text-fg/40">01</p>
          {heroCopy.codeSnippet.map((line, index) => (
            <p
              key={index}
              className={
                line.variant === "accent"
                  ? "text-accent"
                  : line.variant === "muted"
                    ? "text-fg/40"
                    : "text-fg"
              }
            >
              {line.text}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
